// encodeHTML.js
// A extremely lightweight and simple HTML entity encoder/decoder in raw JS that
// uses the browser's standards compliance to do the work. 
// It's actually really silly and likely's been done before.
// Extends the String object with encodeHTML and decodeHTML
// Rae O'Neil - September 2020
// https://github.com/raegun2k
String.prototype.encodeHTML=function(){
  // We leverage the browser and standards doing this for us.
  // Specifically, we create a temporary anonymous div and append 
  //    to its inside a text node of our string. 
  // This causes the browser to encode the characters for us.
  // The return of the appendChild function is the appended child, 
  //    so we return the innerHTML of the parentNode(the div).
  return document.createElement('div').appendChild(document.createTextNode(this)).parentNode.innerHTML;
};

String.prototype.decodeHTML=function(){
    var d = document.createElement('div'); d.innerHTML = this;
    return d.textContent;
};
// example usage: 
//  First embed the JS
//     <script src="scripts/encodeHTML.js"></script>
//  Then call it as a String function
//      "this is a string with a < in it".encodeHTML().
//      "<span>this is HTML with a < in it</span>".decodeHTML()

