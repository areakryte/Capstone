var fixerAPI = "b0ccee5d705e88e27782a3b24102556a";
var fixerBase = "http://data.fixer.io/api/";
var fixerAuth = "http://data.fixer.io/api/latest?access_key = " + fixerAPI;

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

function addCurrency(){

}