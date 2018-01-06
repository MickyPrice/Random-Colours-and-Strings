<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MLP - Box Shadow Generator</title>
    <link rel="stylesheet" href="css.css">
  </head>
  <body>

    <div class="container">

      <div class="colour">
        <h1>Random Colour Picker</h1>
        <button type="button" onclick="randomColour()" name="button">Generate Random Colour</button><br />
        <div id="randomcolour" value="rgb(255,255,255)">rgb(255,255,255)</div><br />
        <div id="randomcolour2">#ffffff</div>
      </div>
      <br><br><br><br><br>
      <hr>
      <br><br><br><br><br>
      <div class="randomstring">
        <h1>Random Word/String Generator</h1>
        <span>String Length: </span><input type="number" value="10" placeholder="Word Length" id="wordLength"><br />
        <button type="button" onclick="randomWord()" name="button">Generate Random Word/String</button><br />
        <div id="randomWord" contenteditable="true" style='padding:30px;background-color:white;overflow-x:scroll'></div>
      </div>
    </div>


  </body>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js.js" charset="utf-8"></script>
  <script src="/assets/b.js" charset="utf-8"></script>
</html>
