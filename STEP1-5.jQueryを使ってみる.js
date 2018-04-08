/*
$(loaded);

function loaded(){
  $("button").click(change_text);
}

function change_text(){
  $("#message").text("こんばんは");
}
*/

$(
  function(){

    var cnt = 0;
    $("button").click(
      function(){
        if( cnt / 2 === 0 ){
          $("#message").text("こんばんみ");
        }else{
          $("#message").remove();
        } 
      }
    );
 
/*
    $("body").append($("<p>").text("おはよう"));
    $("body").append($("<p>").text("こんにちは"));
    $("body").append($("<p>").text("おやすみ"));
*/

    const messages = ["おはよう", "こんにちは", "こんばんは", "おやすみ"];
    $.each(messages, function(index, value){
      $("body").append($("<p>").text(value));
    });

    $("p").each(function(index, value){
      console.log($(value).text());
    });
  }
);
