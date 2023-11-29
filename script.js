$('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
    
  })

  var input = document.getElementById("search-query-input");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });

