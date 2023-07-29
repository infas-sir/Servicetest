/* Leer la cookie */
$(function () {
				$('#my-welcome-message').firstVisitPopup({
					cookieName : 'homepage',
					showAgainSelector: '#show-message'
				});
			});
		

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

/* /leer la cookie */

var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);