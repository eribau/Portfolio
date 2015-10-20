var n = parseInt((Math.random()*100), 10);

//functions
    function reset() {
       $("button").html("Doubleclick to try again");
       $("button").dblclick(function() {
         n = parseInt((Math.random()*100), 10);
         $("#form").prop("disabled", false);
         $("#text").html("");
         $("button").html("Guess");
         $("#form").val("");
       });      
    }

    function gameLogic() {
      try {
        if($("#form").val() >= 100 || $("#form").val() <= 0) {
          throw "Number out of bounds";
        }
        else if(isNaN($("#form").val())) {
          throw "Not a number";
        }
      }
     catch(err) {
         $("#error").html("Error: " + err + ".");
       }
      finally {
        if($("#form").val() == n) {        
            $("#text").html("Correct!");
            $("#form").prop("disabled", true);
            reset();
       } else if($("#form").val() < n && $("#form").val() > 0) {
            $("#text").html("Wrong. Try a higher number.");
            $("#form").val("");
        } else if($("#form").val() > n&& $("#form").val() < 100) {
             $("#text").html("Wrong. Try a lower number.");
             $("#form").val(""); 
        }
      }
    }
  function gamestart() {
    $("button").click(function() {
        $("#error").html("");
        gameLogic();
     });
    $(document).keypress(function(e) {
      if(e.which == 13) {
        $("#error").html("");
        gameLogic();
      }
     });
    
  }
$(document).ready(function(){ 
   // $("#number").html();
  
   gamestart();
});