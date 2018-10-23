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

// $('document').ready(function(){
//     //alert(10);

//     var modalString = "<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">" +
//     "<div class=\"modal-dialog\" role=\"document\">" +
//       "<div class=\"modal-content\">" +
//         "<div class=\"modal-header\">" +
//           "<h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>" +
//           "<button type=\"button\ class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
//             "<span aria-hidden=\"true\">&times;</span>" +
//           "</button>" +
//         "</div>" +
//         "<div class=\"modal-body\">" +
//           "..." +
//         "</div>" +
//         "<div class=\"modal-footer\">" +
//           "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
//           "<button type=\"button\" class=\"btn btn-primary\">Save changes</button>" +
//         "</div>" +
//       "</div>" +
//     "</div>" +
//   "</div>";

//     var newSection = "<div class=\"currency\"><p>Test</p></div>"

//     $("body").append(modalString);
// })

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
        rateTo = parseFloat((amount*worldCurrency[compareCurrency])/worldCurrency[baseCurrency]);
        $('.curr-output').text(parseFloat(rateTo)); 
    }
    else{
        $('.curr-output').text(parseFloat($(".curr-input").val())); 
    }

    
    
});

function addCurrency(){

}

