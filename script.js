var price = 120;

var postovne = { //objekt
  posta: 64,
  ulozenka: 55
};

var handler = function() { //registruje handler - pokud něco změním v inputu, volá se funkce

  var doruceni = $('input[name="doruceni"]:checked').val().replace(/:.*/, '');

  var pocetKusu = $('input[name="pocetKusu"]').val(); //this = odkazuje na sebe sama; val = funkce, vrací value, bez parametrů vrací hodnoty, s parametry nastavuje hodnoty
  pocetKusu = parseInt(pocetKusu, 10); //10 = desítková soustava; převod výsledku na číslo v desítkové soustavě
  pocetKusu = isNaN(pocetKusu) || !pocetKusu ? 1 : pocetKusu; //ternální operátor, podmínka, kdy to vrací hodnotu; !var = když přijde null, undefined, "", 0; za ? je část, kdy je podmínka splněná; za : je část, kdy je podmínka nesplněná
  $('input[name="pocetKusu"]').val(pocetKusu);

  var platba = $('input[name="platba"]:checked').val() === 'dobirka' ? 12 : 0;

  var suma = (price * pocetKusu) + postovne[doruceni] + platba;

  $('output[name="suma"]').val(suma); //vybere element output a nastaví mu hodnotu
  $('input[name="suma1"]').val(suma);
};

$(function() { //zjišťuje, že je načteno jquery
  $('input[name="pocetKusu"]').change(handler);
  $('input[name="doruceni"]').change(handler);
  $('input[name="platba"]').change(handler);
  handler(); //volání handleru

  $('nav a[href^="#"] ').click(function() { //pro nav a zavolá událost click
    var id = $(this).attr('href'), //přečte href (např. #parametry) - řeknu si o element, co je v href
      top = $(id).offset().top; //řeknu si o pozici toho elementu, tj. jak daleko je odzhora


    $('body').animate({ //funkce jquery, která animuje scrolling
      scrollTop: top
    }, top / 2);
  });
});
