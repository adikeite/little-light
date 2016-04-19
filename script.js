var price = 120;

var postovne = { //objekt
  posta: 60,
  ulozenka: 45
};

var handler = function() { //registruje handler - pokud něco změním v inputu, volá se funkce

  var doruceni = $('input[name="doruceni"]:checked').val();
  console.log(doruceni);

  var pocetKusu = $('input[name="pocetKusu"]').val(); //this = odkazuje na sebe sama; val = funkce, vrací value, bez parametrů vrací hodnoty, s parametry nastavuje hodnoty
  pocetKusu = parseInt(pocetKusu, 10); //10 = desítková soustava; převod výsledku na číslo v desítkové soustavě
  pocetKusu = isNaN(pocetKusu) || !pocetKusu ? 1 : pocetKusu; //ternální operátor, podmínka, kdy to vrací hodnotu; !var = když přijde null, undefined, "", 0; za ? je část, kdy je podmínka splněná; za : je část, kdy je podmínka nesplněná
  $('input[name="pocetKusu"]').val(pocetKusu);

  $('output[name="suma"]').val((price * pocetKusu) + postovne[doruceni]); //vybere element output a nastaví mu hodnotu
};

$(function() { //zjišťuje, že je načteno jquery
  $('input[name="pocetKusu"]').change(handler);
  $('input[name="doruceni"]').change(handler);
  handler(); //volání handleru
});
