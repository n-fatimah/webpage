
$(document).ready(function() {
    const circle = $("<div class='circle'></div>");
    $("body").append(circle);
  
    function updateCircle(event) {
      circle.css({
        top: event.pageY - circle.height() / 2,
        left: event.pageX - circle.width() / 2
      });
    }

    $("body").mousemove(function(event) {
      updateCircle(event);
    });


    /*  $(".nav-h a").mousemove(function(event) {
      event.preventDefault();
      const linkPosition = $(this).position();
      circle.addClass("active");
      updateCirclePosition(linkPosition);
      setTimeout(function() {
        circle.removeClass("active");
      }, 200);
    });  
 */

    $(".nav-h a").hover(
        function(event) {
          const linkPosition = $(this).position();
          circle.addClass("active");
          updateCirclePosition(linkPosition);
          
        },
        function() {
          circle.removeClass("active");
         
        }
      );   

/*       $("imagegrid .imgl").hover(
        function(event) {
          const linkPosition = $(this).position();
          circle.addClass("active");
          updateCirclePosition(linkPosition);
          
        },
        function() {
          circle.removeClass("active");
         
        }
      );  
 */

/*       $(".img1").hover(
        function() {
          $(this).find(".circle").css("background-color", "red");
        },
        function() {
          $(this).find(".circle").css("background-color", "");
        }
      );

      $(".div1").hover(
        function(){
          $(this).show();
        }
      )

      $(".div1")f(
        function(){
          $(this).show();
        }
      ) */


      $(".blue").hover(
        function(){
          $(this).hide();
        }
      )


  });
  
