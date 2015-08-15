$(document).ready(function(){
  var max = 300;
  var min = 100;
  for(var i=0; i<20; i++) {
    w = Math.floor(Math.random()*(max-min+1)+min);
    h = Math.floor(Math.random()*(max-min+1)+min);
    $("#free-tile").append(
      "<div class='element' style='width:"+w+"; height:"+h+"'></div>"
    )
  }

  $('#free-tile').freetile({
    animate: true,
    delay: 30
  });
});
