var price = 100;

$(function() { //zjišťuje, že je načteno jquery
  $('input[name="pocetKusu"]').change(function() { //registruje handler - pokud něco změním v inputu, volá se funkce

    var pocetKusu = $(this).val(); //this = odkazuje na sebe sama; val = funkce, vrací value, bez parametrů vrací hodnoty, s parametry nastavuje hodnoty
    pocetKusu = parseInt(pocetKusu, 10); //10 = desítková soustava; převod výsledku na číslo v desítkové soustavě

    $('output[name="suma"]').val(price * pocetKusu); //vybere element output a nastaví mu hodnotu
  })
});
