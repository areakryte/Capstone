//TODO: Globals need to be secured in a better way
var fixerAPI = "b0ccee5d705e88e27782a3b24102556a";
var fixerBase = "http://data.fixer.io/api/";
var fixerAuth = "http://data.fixer.io/api/latest?access_key=" + fixerAPI;
var fixerFull = fixerAuth + "&symbols=USD,AUD,CAD,JPY&format=1";
var fixerJSON = fixerJSON = $.get(fixerFull);
var baseCurrency = 0;
var compareCurrency = 0;
var extraCount = 0;
var EUR = 1;
var AUD = "";
var CAD = "";
var JPY = "";
var USD = "";

$('document').ready(function(){
    var initWidth = $('.currency div .currency-body').css(["width"]);
    
    $(".world-curr").append("<option value=\"0\">USD</option>");
    $(".world-curr").append("<option value=\"1\">CAD</option>");
    $(".world-curr").append("<option value=\"2\">EUR</option>");
    $(".world-curr").append("<option value=\"3\">JPY</option>");
    $(".world-curr").append("<option value=\"4\">AUD</option>");

    fixerJSON = $.get(fixerFull, function(){
        CAD = fixerJSON.responseJSON.rates.CAD;
        AUD = fixerJSON.responseJSON.rates.AUD;
        USD = fixerJSON.responseJSON.rates.USD;
        JPY = fixerJSON.responseJSON.rates.JPY;
    });
});

$(".curr-input").change(function(){
    var currVal = $(".curr-input").val();

    //Numberic input restriction
    //TODO: Fix null case
    if(currVal.match(/[0-9]/))
    {
        $(".curr-output").text(currVal);
    }
    else{
        alert("Non numberical characters are not allowed");
    }    
});

$("select").change(function(){
    baseCurrency = parseFloat($(".base-currency .currency-footer .world-curr").val());
    compareCurrency = parseFloat($(".compare-currency .currency-footer .world-curr").val());
    var amount = parseFloat($(".curr-input").val());
    var worldCurrency = [USD,CAD,EUR,JPY,AUD];
   
    var rateTo = 0;

    if(baseCurrency !== compareCurrency){
        //Currency formula
        //amountResult = (amountFrom*rateToCurrency)/rateFromCurrency
        rateTo = parseFloat((amount*worldCurrency[compareCurrency])/worldCurrency[baseCurrency]).toFixed(2);
        $('.curr-output').text(parseFloat(rateTo)); 
    }
    else{
        $('.curr-output').text(parseFloat($(".curr-input").val())); 
    }
});


//TODO: Add other currency trackers
function addCurrency(){

}

