# encodeHTML.js

> An extremely lightweight and simple HTML entity encoder/decoder in raw Javascript that uses the browser's standards compliance to do the work.

> Extends String with encodeHTML and decodeHTML functions. It's actually really silly and likely's been done before.


---

## Example 


```javascript
"this is a string with a < in it".encodeHTML();
```
Output: _"this is a string with a  &lt; in it."_
```javascript
"<span>this is HTML with a < in it</span>".decodeHTML();
```
Output: _"this is HTML with a < in it"_

---

## Installation

Just embed the JS

```html
<script src="scripts/encodeHTML.js"></script>
```

## Credentials ##

**Developed By**       Rae O'Neil

**Website:**           https://github.com/raegun2k, https://gammarae.design
