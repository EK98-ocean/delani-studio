
$(document).ready(function(){

    $("#portfoliopic").hover(function(){
        $(".portfoliotext",this).Toggle();
     }, function(){
        $(".portfoliotext",this).Toggle();
     });

    $("#clickable-design").click(function(){
        $("#design-info-hidden").toggle();
        $("#design-info-showing").toggle();
        $
    }); 
 
    $("#clickable-prod").click(function(){
     $("#prod-info-hidden").toggle();
     $("#prod-info-showing").toggle();
 });
 
 $("#clickable-dev").click(function(){
     $("#dev-info-hidden").toggle();
     $("#dev-info-showing").toggle();
 }); 
 
 })