$(document).ready(function(){

  var moreBtn = $("#more");
  var inputArea = $("#inputArea");
  $(moreBtn).click(function(){
    if($(inputArea).css("display") == "none"){
      $(inputArea).css("display", "inline-block");
    }else{
      $(inputArea).css("display", "none");
    }

  })

})
