// Colour Generator
function rgb2hex(rgb){
	  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	  return (rgb && rgb.length === 4) ? "#" +
	  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}
function randomColour() {
	  var r = Math.floor((Math.random() * 255) + 1);
	  var g = Math.floor((Math.random() * 255) + 1);
	  var b = Math.floor((Math.random() * 255) + 1);
	  document.getElementById("randomcolour").innerHTML = "rgb(" +r + "," + g + "," + b + ")";
	  document.getElementById("randomcolour").value = "rgb(" +r + "," + g + "," + b + ")";
	  document.getElementById("randomcolour").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	  document.getElementById("randomcolour2").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	  var hex = rgb2hex( $('#randomcolour').html() );
	  $('#randomcolour2').html( hex );
	}




  // String Generator
  var wordLengthInput = document.getElementById("wordLength");
  function randomWord() {
  	  var randomWordText = "";
  	  var randomWordPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  	  var randomWordLoop = 3;
  	    if (wordLengthInput.value < 1000) {
  		      for (var i = 0;
  		 i < wordLengthInput.value;
  		 i++)
  		      randomWordText += randomWordPossible.charAt(Math.floor(Math.random() * randomWordPossible.length));
  		      document.getElementById("randomWord").innerHTML = randomWordText;
  		}else {
  		      document.getElementById("randomWord").innerHTML = "<span style='color:red'>That number is too large</span>";
  		}
  	}
