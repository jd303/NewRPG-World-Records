(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* cyrillic-ext */\n@font-face {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"PT Sans\"), local(\"PTSans-Regular\"), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0-ExcOPIDUg-g.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"PT Sans\"), local(\"PTSans-Regular\"), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0aExcOPIDUg-g.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"PT Sans\"), local(\"PTSans-Regular\"), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0yExcOPIDUg-g.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"PT Sans\"), local(\"PTSans-Regular\"), url(https://fonts.gstatic.com/s/ptsans/v11/jizaRExUiTo99u79D0KExcOPIDU.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  font-family: \"PT Sans\";\n}\n/*@media print {\n\t* { color:white; }\n\n\t@page {\n\n\t\t@top-center {\n\t\t\tfont-family: sans-serif;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 2em;\n\t\t\tcontent: counter(page);\n\t\t}\n\n\t\t@top-left {\n\t\t\tcontent: \"TOP SECRET\";\n\t\t\tcolor: red\n\t\t  }\n\t\t  @bottom-center {\n\t\t\tcontent: counter(page);\n\t\t\tfont-style: italic\n\t\t  }\n\t}\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hYyBCYWNrdXAvRG9jdW1lbnRzL01veHkgQnVzdGlvbiAtIENyZWF0aXZlL0dhbWUgRGV2ZWxvcG1lbnQvTmV3UlBHVG9vbHMvYW5ndWxhci9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFDQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdKQUFBO0VBQ0Esc0ZBQUE7QUNDRDtBRENFLGFBQUE7QUFDQTtFQUNELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdKQUFBO0VBQ0EsNERBQUE7QUNDRDtBRENFLGNBQUE7QUFDQTtFQUNELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdKQUFBO0VBQ0EsbUhBQUE7QUNDRDtBRENFLFVBQUE7QUFDQTtFQUNELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZJQUFBO0VBQ0EseUtBQUE7QUNDRDtBREVFO0VBQ0Msc0JBQUE7QUNBSDtBREdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjeXJpbGxpYy1leHQgKi9cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1BUIFNhbnMnO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHNyYzogbG9jYWwoJ1BUIFNhbnMnKSwgbG9jYWwoJ1BUU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcHRzYW5zL3YxMS9qaXphUkV4VWlUbzk5dTc5RDAtRXhjT1BJRFVnLWcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcblx0dW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG4gIH1cbiAgLyogY3lyaWxsaWMgKi9cbiAgQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUFQgU2Fucyc7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0c3JjOiBsb2NhbCgnUFQgU2FucycpLCBsb2NhbCgnUFRTYW5zLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9wdHNhbnMvdjExL2ppemFSRXhVaVRvOTl1NzlEMGFFeGNPUElEVWctZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuXHR1bmljb2RlLXJhbmdlOiBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1BUIFNhbnMnO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHNyYzogbG9jYWwoJ1BUIFNhbnMnKSwgbG9jYWwoJ1BUU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcHRzYW5zL3YxMS9qaXphUkV4VWlUbzk5dTc5RDB5RXhjT1BJRFVnLWcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcblx0dW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdQVCBTYW5zJztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRzcmM6IGxvY2FsKCdQVCBTYW5zJyksIGxvY2FsKCdQVFNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3B0c2Fucy92MTEvaml6YVJFeFVpVG85OXU3OUQwS0V4Y09QSURVLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG5cdHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cblxuICBib2R5IHtcblx0ICBmb250LWZhbWlseTonUFQgU2Fucyc7XG4gIH1cblxuICAvKkBtZWRpYSBwcmludCB7XG5cdCogeyBjb2xvcjp3aGl0ZTsgfVxuXG5cdEBwYWdlIHtcblxuXHRcdEB0b3AtY2VudGVyIHtcblx0XHRcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdGNvbnRlbnQ6IGNvdW50ZXIocGFnZSk7XG5cdFx0fVxuXG5cdFx0QHRvcC1sZWZ0IHtcblx0XHRcdGNvbnRlbnQ6IFwiVE9QIFNFQ1JFVFwiO1xuXHRcdFx0Y29sb3I6IHJlZFxuXHRcdCAgfVxuXHRcdCAgQGJvdHRvbS1jZW50ZXIge1xuXHRcdFx0Y29udGVudDogY291bnRlcihwYWdlKTtcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpY1xuXHRcdCAgfVxuXHR9XG59Ki8iLCIvKiBjeXJpbGxpYy1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbChcIlBUIFNhbnNcIiksIGxvY2FsKFwiUFRTYW5zLVJlZ3VsYXJcIiksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcHRzYW5zL3YxMS9qaXphUkV4VWlUbzk5dTc5RDAtRXhjT1BJRFVnLWcud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJQVCBTYW5zXCIpLCBsb2NhbChcIlBUU2Fucy1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3B0c2Fucy92MTEvaml6YVJFeFVpVG85OXU3OUQwYUV4Y09QSURVZy1nLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJQVCBTYW5zXCIpLCBsb2NhbChcIlBUU2Fucy1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3B0c2Fucy92MTEvaml6YVJFeFVpVG85OXU3OUQweUV4Y09QSURVZy1nLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoXCJQVCBTYW5zXCIpLCBsb2NhbChcIlBUU2Fucy1SZWd1bGFyXCIpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3B0c2Fucy92MTEvaml6YVJFeFVpVG85OXU3OUQwS0V4Y09QSURVLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCI7XG59XG5cbi8qQG1lZGlhIHByaW50IHtcblx0KiB7IGNvbG9yOndoaXRlOyB9XG5cblx0QHBhZ2Uge1xuXG5cdFx0QHRvcC1jZW50ZXIge1xuXHRcdFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0Y29udGVudDogY291bnRlcihwYWdlKTtcblx0XHR9XG5cblx0XHRAdG9wLWxlZnQge1xuXHRcdFx0Y29udGVudDogXCJUT1AgU0VDUkVUXCI7XG5cdFx0XHRjb2xvcjogcmVkXG5cdFx0ICB9XG5cdFx0ICBAYm90dG9tLWNlbnRlciB7XG5cdFx0XHRjb250ZW50OiBjb3VudGVyKHBhZ2UpO1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljXG5cdFx0ICB9XG5cdH1cbn0qLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Mac Backup/Documents/Moxy Bustion - Creative/Game Development/NewRPGTools/angular/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map