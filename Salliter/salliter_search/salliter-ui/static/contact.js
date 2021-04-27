$('#contact').on('submit', function(e){
        e.preventDefault();
        $.ajax({
          success: function() {
            alert("Thanks for Your comment!");
          }
        });
      });