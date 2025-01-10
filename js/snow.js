/*눈 내리는 효과*/
$(document).ready(function(){
    $('.snowBox').snowfall({
        image :"img2/flake.png", 
        minSize: 3, 
        maxSize:10, 
        flakeCount : 120
    });
});