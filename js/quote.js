(function() {

    var quotes = $(".quotes");
    //var quotes = document.getElementById("quotes");
    var quoteIndex = -1;

    function showNextQuote() {
		//++quoteIndex;
		var quoteIndex = Math.floor(Math.random() * 214);
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(4000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote();
})();
