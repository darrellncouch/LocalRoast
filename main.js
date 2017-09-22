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

  var homePgBtn = $("#longBtn");
  var mainLoc = $("#inputLocation");
  var mainDist = $("#inputDistance");





  $(homePgBtn).click(function(e){
    // e.preventDefault();
    console.log("here");
    console.log(mainLoc);
    if($(mainLoc).val().length != 0 && $(mainDist).val().length != 0){
      localStorage.setItem("mainL", $(mainLoc).val());
      localStorage.setItem("mainD", $(mainDist).val());
    }else if($(mainLoc).val().length != 0){
      localStorage.setItem("mainL", $(mainLoc).val());

      console.log(localStorage.getItem("mainL"));
    }else if($(mainDist).val().length != 0){
      localStorage.setItem("mainD", $(mainDist).val());
    }
  });

})
