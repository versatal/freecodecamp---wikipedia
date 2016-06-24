$(document).ready(function() {

    $("#search").click(function(e){
        var q = $("#searchterm").val();
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $.each(data.query.search, function(i,item){
            $("#results").append("<div class='article'><h3><a href='https://en.wikipedia.org/wiki/" 
			                     + encodeURIComponent(item.title) + "' target='_blank'>" + item.title 
								 + "</a>" + "</h3><h4>" + item.snippet + "</h4></div>");
          });
        });
    });

});
