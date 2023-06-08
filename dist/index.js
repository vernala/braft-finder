(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(476);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(854), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face{font-family:"bf-icons";src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");font-weight:normal;font-style:normal}.braft-finder [class^=braft-icon-],.braft-finder [class*=" braft-icon-"]{font-family:"bf-icons" !important;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.braft-finder .braft-icon-code:before{content:""}.braft-finder .braft-icon-pause:before{content:""}.braft-finder .braft-icon-play_arrow:before{content:""}.braft-finder .braft-icon-bin:before{content:""}.braft-finder .braft-icon-replay:before{content:""}.braft-finder .braft-icon-close:before{content:""}.braft-finder .braft-icon-music:before{content:""}.braft-finder .braft-icon-camera:before{content:""}.braft-finder .braft-icon-file-text:before{content:""}.braft-finder .braft-icon-film:before{content:""}.braft-finder .braft-icon-paste:before{content:""}.braft-finder .braft-icon-spinner:before{content:""}.braft-finder .braft-icon-media:before{content:""}.braft-finder .braft-icon-add:before{content:""}.braft-finder .braft-icon-done:before{content:""}.braft-finder .braft-icon-drop-down:before{content:""}.braft-finder .braft-icon-drop-up:before{content:""}.braft-finder .braft-icon-help:before{content:""}.braft-finder .braft-icon-info:before{content:""}.braft-finder .braft-icon-menu:before{content:""}.pull-left{float:left}.pull-right{float:right}.braft-finder .bf-uploader{position:relative;height:370px;margin:0}.braft-finder .bf-uploader.draging .bf-list-wrap,.braft-finder .bf-uploader.draging .bf-add-external{pointer-events:none}.braft-finder .bf-uploader input::-webkit-input-placeholder{color:#ccc}.braft-finder .bf-uploader input::-moz-placeholder{color:#ccc}.braft-finder .bf-uploader input::-ms-input-placeholder{color:#ccc}.braft-finder .bf-list-wrap{position:relative;height:370px}.braft-finder .bf-list-tools{z-index:1;position:absolute;top:0;right:0;left:0;height:20px;padding:0 15px;background-color:#fff}.braft-finder .bf-list-tools span{height:26px;font-size:12px;line-height:20px;cursor:pointer;user-select:none}.braft-finder .bf-list-tools span[disabled]{opacity:.3;pointer-events:none}.braft-finder .bf-list-tools .bf-select-all,.braft-finder .bf-list-tools .bf-deselect-all{float:left;margin-right:5px;color:#bbb}.braft-finder .bf-list-tools .bf-select-all:hover,.braft-finder .bf-list-tools .bf-deselect-all:hover{color:#3498db}.braft-finder .bf-list-tools .bf-remove-selected{float:right;color:#e74c3c}.braft-finder .bf-list-tools .bf-remove-selected:hover{color:COLOR_DANGER_HOVER}.braft-finder .bf-list{position:absolute;z-index:1;top:30px;right:0;left:0;bottom:0;margin:0;padding:0 10px;list-style:none;overflow:auto}.braft-finder .bf-list::-webkit-scrollbar{width:5px;height:5px;background-color:#fff}.braft-finder .bf-list::-webkit-scrollbar-track{background-color:#fff}.braft-finder .bf-list::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1)}.braft-finder .bf-item,.braft-finder .bf-add-item{position:relative;display:block;float:left;width:113px;height:113px;margin:5px;overflow:hidden;border-radius:3px}.braft-finder .bf-item.uploading{pointer-events:none}.braft-finder .bf-item.error::before{display:block;content:""}.braft-finder .bf-item.error::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;background-color:rgba(231,76,60,.8);content:""}.braft-finder .bf-item.error:hover::after{background-color:rgba(231,76,60,.9)}.braft-finder .bf-item.error .bf-item-uploading{display:none}.braft-finder .bf-add-item{background-color:#ecedef;color:#999}.braft-finder .bf-add-item:hover{background-color:#e1e2e3}.braft-finder .bf-add-item i{display:block;width:113px;height:113px;font-size:48px;line-height:113px;text-align:center}.braft-finder .bf-add-item input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.braft-finder .bf-item::before{display:none;position:absolute;z-index:2;top:0;left:0;width:113px;height:113px;color:#fff;font-size:48px;font-family:"bf-icons";line-height:113px;text-align:center}.braft-finder .bf-item::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;background-color:rgba(52,152,219,0);content:""}.braft-finder .bf-item:hover::after{background-color:rgba(52,152,219,.3)}.braft-finder .bf-item:hover .bf-item-remove{display:block}.braft-finder .bf-item.active::before{display:block;content:""}.braft-finder .bf-item.active::after{background-color:rgba(52,152,219,.6)}.braft-finder .bf-item.active:hover::after{background-color:rgba(52,152,219,.8)}.braft-finder .bf-item.active:hover .bf-item-remove{display:none}.braft-finder .bf-item-uploading{box-sizing:border-box;position:absolute;z-index:3;top:52px;left:10px;width:93px;height:10px;overflow:hidden;background-color:rgba(255,255,255,.3);border-radius:5px;box-shadow:0 0 0 100px rgba(0,0,0,.5)}.braft-finder .bf-item-uploading-bar{height:10px;background-color:#3498db;border-radius:0}.braft-finder .bf-item-remove{display:none;position:absolute;z-index:2;top:0;right:0;width:28px;height:28px;color:#fff;font-size:18px;line-height:28px;text-align:center;cursor:pointer}.braft-finder .bf-item-remove:hover{color:#e74c3c}.braft-finder .bf-item-title{display:none;box-sizing:border-box;position:absolute;z-index:2;bottom:0;left:0;width:100%;height:40px;padding:0 5px;overflow:hidden;background-image:linear-gradient(rgba(0, 0, 0, 0), black);color:#fff;font-size:12px;line-height:55px;text-align:center;text-overflow:ellipsis;white-space:nowrap}.braft-finder .bf-image{width:100%;height:100%;background-color:#eee;user-select:none}.braft-finder .bf-image img{display:block;width:100%;height:100%;object-fit:cover}.braft-finder .bf-video{background-color:#8e44ad}.braft-finder .bf-audio{background-color:#f39c12}.braft-finder .bf-embed{background-color:#f1c40f}.braft-finder .bf-icon{display:block;width:113px;height:113px;overflow:hidden;color:#fff;text-align:center;text-decoration:none}.braft-finder .bf-icon i,.braft-finder .bf-icon span{display:block}.braft-finder .bf-icon i{margin-top:35px;font-size:24px}.braft-finder .bf-icon span{width:103px;margin:10px auto;overflow:hidden;font-size:12px;text-overflow:ellipsis;white-space:nowrap}.braft-finder .bf-drag-uploader{box-sizing:border-box;position:absolute;z-index:2;top:0;right:15px;left:15px;height:100%;background-color:#fff;border:dashed 1px #bbb;text-align:center;opacity:0;pointer-events:none}.braft-finder .bf-drag-uploader:hover,.braft-finder .bf-drag-uploader.draging{background-color:#f1f2f3}.braft-finder .bf-drag-uploader.active{opacity:1;pointer-events:auto}.braft-finder .bf-uploader-buttons{height:370px;margin:auto;text-align:center}.braft-finder .bf-drag-tip{display:inline-block;margin-top:150px;color:#ccc;text-align:center;font-size:28px;font-weight:normal;line-height:40px}.braft-finder .bf-drag-tip input{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;color:#fff;text-indent:-100px;cursor:pointer}.braft-finder .bf-manager-footer{height:36px;margin:10px 0;padding:0 15px}.braft-finder .bf-manager-footer .button{float:right;height:36px;margin-left:5px;padding:0 35px;font-size:12px;font-weight:700;border:none;border-radius:3px;cursor:pointer}.braft-finder .bf-manager-footer .button-insert{color:#fff;background-color:#3498db}.braft-finder .bf-manager-footer .button-insert:hover{background-color:COLOR_ACTIVE_HOVER}.braft-finder .bf-manager-footer .button-insert[disabled]{opacity:.3;pointer-events:none;filter:grayscale(0.4)}.braft-finder .bf-manager-footer .button-cancel{color:#999;background-color:#e8e8e9}.braft-finder .bf-manager-footer .button-cancel:hover{background-color:#d8d8d9}.braft-finder .bf-toggle-external-form{color:#666;font-size:12px;line-height:36px}.braft-finder .bf-toggle-external-form span{color:#bbb;line-height:16px;cursor:pointer;user-select:none}.braft-finder .bf-toggle-external-form span:hover{color:#3498db}.braft-finder .bf-toggle-external-form span i{position:relative;top:2px;font-size:16px}.braft-finder .bf-add-external{position:absolute;z-index:3;top:0;right:0;bottom:0;left:0;background-color:#fff}.braft-finder .bf-add-external input{border:solid 1px rgba(0,0,0,.3);border:solid .5px rgba(0,0,0,.3);box-shadow:none}.braft-finder .bf-add-external input:focus{border-color:#3498db;box-shadow:none}.braft-finder .bf-external-form{width:500px;max-width:90%;margin:91px auto 0 auto}.braft-finder .bf-external-input{display:flex;position:relative;width:100%;height:40px;margin-bottom:10px}.braft-finder .bf-external-input div{flex:1;height:40px}.braft-finder .bf-external-input input,.braft-finder .bf-external-input textarea{display:block;box-sizing:border-box;width:100%;height:40px;padding:0 10px;border:none;border-radius:3px;outline:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.3);color:#999;font-size:18px}.braft-finder .bf-external-input input:focus,.braft-finder .bf-external-input textarea:focus{box-shadow:inset 0 0 0 1px #3498db}.braft-finder .bf-external-input textarea{height:100px;font-size:14px}.braft-finder .bf-external-input button{margin-left:5px;padding:0 15px;height:40px;background-color:#3498db;border:none;border-radius:3px;color:#fff;font-size:14px;font-weight:bold;cursor:pointer}.braft-finder .bf-external-input button:disabled{opacity:.3;pointer-events:none;filter:grayscale(0.4)}.braft-finder .bf-external-input button:hover{background-color:COLOR_ACTIVE_HOVER}.braft-finder .bf-switch-external-type{overflow:hidden;text-align:center}.braft-finder .bf-switch-external-type button{width:auto;height:30px;margin:10px 5px;padding:0 10px;background-color:#e8e9ea;border:none;border-radius:3px;color:#999;font-size:12px;cursor:pointer}.braft-finder .bf-switch-external-type button:hover{background-color:#d8d9da}.braft-finder .bf-switch-external-type button:only-child{display:none}.braft-finder .bf-switch-external-type[data-type=IMAGE] [data-type=IMAGE],.braft-finder .bf-switch-external-type[data-type=VIDEO] [data-type=VIDEO],.braft-finder .bf-switch-external-type[data-type=AUDIO] [data-type=AUDIO],.braft-finder .bf-switch-external-type[data-type=EMBED] [data-type=EMBED],.braft-finder .bf-switch-external-type[data-type=FILE] [data-type=FILE]{background-color:#3498db;color:#fff}.braft-finder .bf-external-tip{display:block;margin-top:15px;color:#ccc;font-size:12px;text-align:center}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 476:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 678:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 933:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 316:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(468);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(688)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(408);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 408:
/***/ ((module) => {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 854:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "65287acaa82995b84719.ttf?sirizn";

/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ImageUtils: () => (/* reexport */ image_namespaceObject),
  "default": () => (/* binding */ BraftFinder)
});

// NAMESPACE OBJECT: ./utils/image.js
var image_namespaceObject = {};
__webpack_require__.r(image_namespaceObject);
__webpack_require__.d(image_namespaceObject, {
  compressImage: () => (compressImage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./utils/base.js
var UniqueIndex = function UniqueIndex() {
  if (isNaN(window.__BRAFT_MM_UNIQUE_INDEX__)) {
    window.__BRAFT_MM_UNIQUE_INDEX__ = 1;
  } else {
    window.__BRAFT_MM_UNIQUE_INDEX__ += 1;
  }
  return window.__BRAFT_MM_UNIQUE_INDEX__;
};
;// CONCATENATED MODULE: ./utils/image.js
var compressImage = function compressImage(url) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1280;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;
    image.onerror = function (error) {
      reject(error);
    };
    image.onload = function () {
      try {
        var compressCanvas = document.createElement('canvas');
        var scale = this.width > width || this.height > height ? this.width > this.height ? width / this.width : height / this.height : 1;
        compressCanvas.width = this.width * scale;
        compressCanvas.height = this.height * scale;
        var canvasContext = compressCanvas.getContext('2d');
        canvasContext.drawImage(this, 0, 0, compressCanvas.width, compressCanvas.height);
        resolve({
          url: compressCanvas.toDataURL('image/png', 1),
          width: compressCanvas.width,
          height: compressCanvas.height
        });
      } catch (error) {
        reject(error);
      }
    };
  });
};
;// CONCATENATED MODULE: ./controller.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var defaultValidator = function defaultValidator() {
  return true;
};
var BraftFinderController = /*#__PURE__*/_createClass(function BraftFinderController() {
  var _this = this;
  var _props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, BraftFinderController);
  _defineProperty(this, "setProps", function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _this.items = props.items || _this.items || [];
    _this.uploadFn = props.uploader;
    _this.validateFn = props.validator || defaultValidator;
  });
  _defineProperty(this, "getMediaItem", function (id) {
    return _this.items.find(function (item) {
      return item.id === id;
    });
  });
  _defineProperty(this, "getSelectedItems", function () {
    return _this.items.filter(function (item) {
      return item.selected;
    });
  });
  _defineProperty(this, "getItems", function () {
    return _this.items;
  });
  _defineProperty(this, "setItems", function (items) {
    _this.items = items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        id: item.id.toString()
      });
    }) || [];
    _this.applyChange();
    _this.uploadItems();
  });
  _defineProperty(this, "addMediaItem", function (item) {
    _this.addItems([item]);
  });
  _defineProperty(this, "addItems", function (items) {
    _this.items = [].concat(_toConsumableArray(_this.items), _toConsumableArray(items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        id: item.id.toString()
      });
    })));
    _this.applyChange();
    _this.uploadItems();
  });
  _defineProperty(this, "selectMediaItem", function (id) {
    var item = _this.getMediaItem(id);
    if (item && (item.uploading || item.error)) {
      return false;
    }
    _this.setMediaItemState(id, {
      selected: true
    });
  });
  _defineProperty(this, "selectAllItems", function () {
    _this.items = _this.items.filter(function (item) {
      return !item.error && !item.uploading;
    }).map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        selected: true
      });
    });
    _this.applyChange();
  });
  _defineProperty(this, "deselectMediaItem", function (id) {
    _this.setMediaItemState(id, {
      selected: false
    });
  });
  _defineProperty(this, "deselectAllItems", function () {
    _this.items = _this.items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        selected: false
      });
    });
    _this.applyChange();
  });
  _defineProperty(this, "removeMediaItem", function (id) {
    _this.items = _this.items.filter(function (item) {
      return item.id !== id;
    });
    _this.applyChange();
  });
  _defineProperty(this, "removeItems", function () {
    var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _this.items = _this.items.filter(function (item) {
      return !ids.includes(item.id);
    });
    _this.applyChange();
  });
  _defineProperty(this, "removeSelectedItems", function () {
    _this.items = _this.items.filter(function (item) {
      return !item.selected;
    });
    _this.applyChange();
  });
  _defineProperty(this, "removeErrorItems", function () {
    _this.items = _this.items.filter(function (item) {
      return !item.error;
    });
    _this.applyChange();
  });
  _defineProperty(this, "removeAllItems", function () {
    _this.items = [];
    _this.applyChange();
  });
  _defineProperty(this, "setMediaItemState", function (id, state) {
    _this.items = _this.items.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), state) : item;
    });
    _this.applyChange();
  });
  _defineProperty(this, "reuploadErrorItems", function () {
    _this.uploadItems(true);
  });
  _defineProperty(this, "uploadItems", function () {
    var ignoreError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    _this.items.forEach(function (item, index) {
      if (item.uploading || item.url) {
        return false;
      }
      if (!ignoreError && item.error) {
        return false;
      }
      if (item.type === 'IMAGE') {
        _this.createThumbnail(item);
        _this.uploadFn = _this.uploadFn || _this.createInlineImage;
      } else if (!_this.uploadFn) {
        _this.setMediaItemState(item.id, {
          error: 1
        });
        return false;
      }
      _this.setMediaItemState(item.id, {
        uploading: true,
        uploadProgress: 0,
        error: 0
      });
      _this.uploadFn({
        id: item.id,
        file: item.file,
        success: function success(res) {
          _this.handleUploadSuccess(item.id, res);
        },
        progress: function progress(_progress) {
          _this.setMediaItemState(item.id, {
            uploading: true,
            uploadProgress: _progress
          });
        },
        error: function error(_error) {
          _this.setMediaItemState(item.id, {
            uploading: false,
            error: 2
          });
        }
      });
    });
  });
  _defineProperty(this, "createThumbnail", function (_ref) {
    var id = _ref.id,
      file = _ref.file;
    compressImage(URL.createObjectURL(file), 226, 226).then(function (result) {
      _this.setMediaItemState(id, {
        thumbnail: result.url
      });
    });
  });
  _defineProperty(this, "createInlineImage", function (param) {
    compressImage(URL.createObjectURL(param.file), 1280, 800).then(function (result) {
      param.success({
        url: result.url
      });
    })["catch"](function (error) {
      param.error(error);
    });
  });
  _defineProperty(this, "handleUploadSuccess", function (id, data) {
    _this.setMediaItemState(id, _objectSpread(_objectSpread({}, data), {}, {
      file: null,
      uploadProgress: 1,
      uploading: false,
      selected: false
    }));
    var item = _this.getMediaItem(data.id || id);
    item.onReady && item.onReady(item);
  });
  _defineProperty(this, "applyChange", function () {
    _this.changeListeners.forEach(function (_ref2) {
      var callback = _ref2.callback;
      return callback(_this.items);
    });
  });
  _defineProperty(this, "uploadImage", function (file, callback) {
    var fileId = new Date().getTime() + '_' + UniqueIndex();
    _this.addMediaItem({
      type: 'IMAGE',
      id: fileId,
      file: file,
      name: fileId,
      size: file.size,
      uploadProgress: 0,
      uploading: false,
      selected: false,
      error: 0,
      onReady: callback
    });
  });
  _defineProperty(this, "uploadImageRecursively", function (files, callback) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (files[index] && files[index].type.indexOf('image') > -1) {
      _this.uploadImage(files[index], function (image) {
        callback && callback(image);
        index < files.length - 1 && _this.uploadImageRecursively(files, callback, index + 1);
      });
    } else {
      index < files.length - 1 && _this.uploadImageRecursively(files, callback, index + 1);
    }
  });
  _defineProperty(this, "addResolvedFiles", function (param, index, accepts) {
    var data = {
      id: new Date().getTime() + '_' + UniqueIndex(),
      file: param.files[index],
      name: param.files[index].name,
      size: param.files[index].size,
      uploadProgress: 0,
      uploading: false,
      selected: false,
      error: 0,
      onReady: function onReady(item) {
        param.onItemReady && param.onItemReady(item);
      }
    };
    if (param.files[index].type.indexOf('image/') === 0 && accepts.image) {
      data.type = 'IMAGE';
      _this.addMediaItem(data);
    } else if (param.files[index].type.indexOf('video/') === 0 && accepts.video) {
      data.type = 'VIDEO';
      _this.addMediaItem(data);
    } else if (param.files[index].type.indexOf('audio/') === 0 && accepts.audio) {
      data.type = 'AUDIO';
      _this.addMediaItem(data);
    }
    setTimeout(function () {
      _this.resolveFiles(param, index + 1, accepts);
    }, 60);
  });
  _defineProperty(this, "resolveFiles", function (param, index, accepts) {
    if (index < param.files.length) {
      var validateResult = _this.validateFn(param.files[index]);
      if (validateResult instanceof Promise) {
        validateResult.then(function () {
          _this.addResolvedFiles(param, index, accepts);
        });
      } else if (validateResult) {
        _this.addResolvedFiles(param, index, accepts);
      }
    } else {
      param.onAllReady && param.onAllReady();
    }
  });
  // resolvePastedFiles ({ clipboardData }, callback) {
  //   if (clipboardData && clipboardData.items && clipboardData.items[0].type.indexOf('image') > -1) {
  //     this.uploadImage(clipboardData.items[0].getAsFile(), callback)
  //   }
  // }
  _defineProperty(this, "onChange", function (callback) {
    var listenerId = UniqueIndex();
    _this.changeListeners.push({
      id: listenerId,
      callback: callback
    });
    return listenerId;
  });
  _defineProperty(this, "offChange", function (listenerId) {
    _this.changeListeners = _this.changeListeners.filter(function (_ref3) {
      var id = _ref3.id;
      return id !== listenerId;
    });
  });
  this.items = _props.items || [];
  this.uploadFn = _props.uploader;
  this.validateFn = _props.validator || defaultValidator;
  this.changeListeners = [];
});

// EXTERNAL MODULE: ./styles.scss
var styles = __webpack_require__(316);
;// CONCATENATED MODULE: ./view.jsx
function view_typeof(obj) { "@babel/helpers - typeof"; return view_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, view_typeof(obj); }
function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, view_toPropertyKey(descriptor.key), descriptor); } }
function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (view_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function view_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function view_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? view_ownKeys(Object(source), !0).forEach(function (key) { view_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : view_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function view_defineProperty(obj, key, value) { key = view_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function view_toPropertyKey(arg) { var key = view_toPrimitive(arg, "string"); return view_typeof(key) === "symbol" ? key : String(key); }
function view_toPrimitive(input, hint) { if (view_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (view_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var defaultAccepts = {
  image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
  video: 'video/mp4',
  audio: 'audio/mp3'
};
var mapPropsToState = function mapPropsToState(props) {
  var accepts = props.accepts,
    externals = props.externals;
  accepts = view_objectSpread(view_objectSpread({}, defaultAccepts), accepts);
  var fileAccept = !accepts ? [defaultAccepts.image, defaultAccepts.video, defaultAccepts.audio].join(',') : [accepts.image, accepts.video, accepts.audio].filter(function (item) {
    return item;
  }).join(',');
  var external = {
    url: '',
    type: externals.image ? 'IMAGE' : externals.audio ? 'AUDIO' : externals.video ? 'VIDEO' : externals.embed ? 'EMBED' : ''
  };
  return {
    fileAccept: fileAccept,
    external: external,
    allowExternal: externals && (externals.image || externals.audio || externals.video || externals.embed),
    propsStr: JSON.stringify(props)
  };
};
var BraftFinderView = /*#__PURE__*/function (_React$Component) {
  _inherits(BraftFinderView, _React$Component);
  var _super = _createSuper(BraftFinderView);
  function BraftFinderView(props) {
    var _this;
    view_classCallCheck(this, BraftFinderView);
    _this = _super.call(this, props);
    view_defineProperty(_assertThisInitialized(_this), "toggleSelectItem", function (event) {
      var itemId = event.currentTarget.dataset.id;
      var item = _this.controller.getMediaItem(itemId);
      if (!item) {
        return false;
      }
      if (item.selected) {
        if (!_this.props.onBeforeDeselect || _this.props.onBeforeDeselect([item], _this.controller.getItems()) !== false) {
          _this.controller.deselectMediaItem(itemId);
          _this.props.onDeselect && _this.props.onDeselect([item], _this.controller.getItems());
        }
      } else {
        if (!_this.props.onBeforeSelect || _this.props.onBeforeSelect([item], _this.controller.getItems()) !== false) {
          _this.controller.selectMediaItem(itemId);
          _this.props.onSelect && _this.props.onSelect([item], _this.controller.getItems());
        }
      }
    });
    view_defineProperty(_assertThisInitialized(_this), "removeItem", function (event) {
      var itemId = event.currentTarget.dataset.id;
      var item = _this.controller.getMediaItem(itemId);
      if (!item) {
        return false;
      }
      if (!_this.props.onBeforeRemove || _this.props.onBeforeRemove([item], _this.controller.getItems()) !== false) {
        _this.controller.removeMediaItem(itemId);
        _this.props.onRemove && _this.props.onRemove([item], _this.controller.getItems());
      }
      event.stopPropagation();
    });
    view_defineProperty(_assertThisInitialized(_this), "selectAllItems", function () {
      var allItems = _this.controller.getItems();
      if (!_this.props.onBeforeSelect || _this.props.onBeforeSelect(allItems, allItems) !== false) {
        _this.controller.selectAllItems();
        _this.props.onSelect && _this.props.onSelect(allItems, allItems);
      }
    });
    view_defineProperty(_assertThisInitialized(_this), "deselectAllItems", function () {
      var allItems = _this.controller.getItems();
      if (!_this.props.onBeforeDeselect || _this.props.onBeforeDeselect(allItems, allItems) !== false) {
        _this.controller.deselectAllItems();
        _this.props.onDeselect && _this.props.onDeselect(allItems, allItems);
      }
    });
    view_defineProperty(_assertThisInitialized(_this), "removeSelectedItems", function () {
      var selectedItems = _this.controller.getSelectedItems();
      if (!_this.props.onBeforeRemove || _this.props.onBeforeRemove(selectedItems, _this.controller.getItems()) !== false) {
        _this.controller.removeSelectedItems();
        _this.props.onRemove && _this.props.onRemove(selectedItems, _this.controller.getItems());
      }
    });
    view_defineProperty(_assertThisInitialized(_this), "handleDragLeave", function (event) {
      event.preventDefault();
      _this.dragCounter--;
      _this.dragCounter === 0 && _this.setState({
        draging: false
      });
    });
    view_defineProperty(_assertThisInitialized(_this), "handleDragDrop", function (event) {
      event.preventDefault();
      _this.dragCounter = 0;
      _this.setState({
        draging: false
      });
      _this.reslovePickedFiles(event);
    });
    view_defineProperty(_assertThisInitialized(_this), "handleDragEnter", function (event) {
      event.preventDefault();
      _this.dragCounter++;
      _this.setState({
        draging: true
      });
    });
    view_defineProperty(_assertThisInitialized(_this), "reslovePickedFiles", function (event) {
      event.persist();
      var _ref = event.type === 'drop' ? event.dataTransfer : event.target,
        files = _ref.files;
      if (_this.props.onFileSelect) {
        var result = _this.props.onFileSelect(files);
        if (result === false) {
          return false;
        } else if (result instanceof FileList || result instanceof Array) {
          files = result;
        }
      }
      var accepts = view_objectSpread(view_objectSpread({}, defaultAccepts), _this.props.accepts);
      _this.controller.resolveFiles({
        files: files,
        onItemReady: function onItemReady(_ref2) {
          var id = _ref2.id;
          return _this.controller.selectMediaItem(id);
        },
        onAllReady: function onAllReady() {
          return event.target.value = null;
        }
      }, 0, accepts);
    });
    view_defineProperty(_assertThisInitialized(_this), "inputExternal", function (event) {
      _this.setState({
        external: view_objectSpread(view_objectSpread({}, _this.state.external), {}, {
          url: event.target.value
        })
      });
    });
    view_defineProperty(_assertThisInitialized(_this), "switchExternalType", function (event) {
      _this.setState({
        external: view_objectSpread(view_objectSpread({}, _this.state.external), {}, {
          type: event.target.dataset.type
        })
      });
    });
    view_defineProperty(_assertThisInitialized(_this), "confirmAddExternal", function (event) {
      if (event.target.nodeName.toLowerCase() === 'button' || event.keyCode === 13) {
        var _this$state$external = _this.state.external,
          url = _this$state$external.url,
          type = _this$state$external.type;
        url = url.split('|');
        var name = url.length > 1 ? url[0] : _this.props.language.unnamedItem;
        url = url.length > 1 ? url[1] : url[0];
        var thumbnail = type === 'IMAGE' ? url : null;
        _this.controller.addItems([{
          thumbnail: thumbnail,
          url: url,
          name: name,
          type: type,
          id: new Date().getTime() + '_' + UniqueIndex(),
          uploading: false,
          uploadProgress: 1,
          selected: true
        }]);
        _this.setState({
          showExternalForm: false,
          external: {
            url: '',
            type: 'IMAGE'
          }
        });
      }
    });
    view_defineProperty(_assertThisInitialized(_this), "toggleExternalForm", function () {
      _this.setState({
        showExternalForm: !_this.state.showExternalForm
      });
    });
    view_defineProperty(_assertThisInitialized(_this), "cancelInsert", function () {
      _this.props.onCancel && _this.props.onCancel();
    });
    view_defineProperty(_assertThisInitialized(_this), "confirmInsert", function () {
      var selectedItems = _this.controller.getSelectedItems();
      if (_this.props.onBeforeInsert) {
        var filteredItems = _this.props.onBeforeInsert(selectedItems);
        if (filteredItems && filteredItems instanceof Array) {
          _this.controller.deselectAllItems();
          _this.props.onInsert && _this.props.onInsert(filteredItems);
        } else if (filteredItems !== false) {
          _this.controller.deselectAllItems();
          _this.props.onInsert && _this.props.onInsert(selectedItems);
        }
      } else {
        _this.controller.deselectAllItems();
        _this.props.onInsert && _this.props.onInsert(selectedItems);
      }
    });
    _this.dragCounter = 0;
    _this.controller = _this.props.controller;
    var initialItems = _this.controller.getItems();
    _this.state = {
      draging: false,
      error: false,
      confirmable: initialItems.find(function (_ref3) {
        var selected = _ref3.selected;
        return selected;
      }),
      external: {
        url: '',
        type: 'IMAGE'
      },
      fileAccept: '',
      showExternalForm: false,
      allowExternal: false,
      items: initialItems
    };
    _this.changeListenerId = _this.controller.onChange(function (items) {
      _this.setState({
        items: items,
        confirmable: items.find(function (_ref4) {
          var selected = _ref4.selected;
          return selected;
        })
      });
      _this.props.onChange && _this.props.onChange(items);
    });
    return _this;
  }
  view_createClass(BraftFinderView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(mapPropsToState(this.props));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.controller.offChange(this.changeListenerId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        language = _this$props.language,
        externals = _this$props.externals;
      var _this$state = this.state,
        items = _this$state.items,
        draging = _this$state.draging,
        confirmable = _this$state.confirmable,
        fileAccept = _this$state.fileAccept,
        external = _this$state.external,
        showExternalForm = _this$state.showExternalForm,
        allowExternal = _this$state.allowExternal;
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "braft-finder"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDragDrop,
        className: "bf-uploader"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-drag-uploader " + (draging || !items.length ? 'active ' : ' ') + (draging ? 'draging' : '')
      }, /*#__PURE__*/external_react_default().createElement("span", {
        className: "bf-drag-tip"
      }, /*#__PURE__*/external_react_default().createElement("input", {
        accept: fileAccept,
        onChange: this.reslovePickedFiles,
        multiple: true,
        type: "file"
      }), draging ? language.dropTip : language.dragTip)), items.length ? /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-list-wrap"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-list-tools"
      }, /*#__PURE__*/external_react_default().createElement("span", {
        onClick: this.selectAllItems,
        className: "bf-select-all"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-done"
      }), " ", language.selectAll), /*#__PURE__*/external_react_default().createElement("span", {
        onClick: this.deselectAllItems,
        disabled: !confirmable,
        className: "bf-deselect-all"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-close"
      }), " ", language.deselect), /*#__PURE__*/external_react_default().createElement("span", {
        onClick: this.removeSelectedItems,
        disabled: !confirmable,
        className: "bf-remove-selected"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-bin"
      }), " ", language.removeSelected)), this.buildItemList()) : null, showExternalForm && allowExternal ? /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-add-external"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-external-form"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-external-input"
      }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("input", {
        onKeyDown: this.confirmAddExternal,
        value: external.url,
        onChange: this.inputExternal,
        placeholder: language.externalInputPlaceHolder
      })), /*#__PURE__*/external_react_default().createElement("button", {
        type: "button",
        onClick: this.confirmAddExternal,
        disabled: !external.url.trim().length
      }, language.confirm)), /*#__PURE__*/external_react_default().createElement("div", {
        "data-type": external.type,
        className: "bf-switch-external-type"
      }, externals.image ? /*#__PURE__*/external_react_default().createElement("button", {
        type: "button",
        onClick: this.switchExternalType,
        "data-type": "IMAGE"
      }, language.image) : null, externals.audio ? /*#__PURE__*/external_react_default().createElement("button", {
        type: "button",
        onClick: this.switchExternalType,
        "data-type": "AUDIO"
      }, language.audio) : null, externals.video ? /*#__PURE__*/external_react_default().createElement("button", {
        type: "button",
        onClick: this.switchExternalType,
        "data-type": "VIDEO"
      }, language.video) : null, externals.embed ? /*#__PURE__*/external_react_default().createElement("button", {
        type: "button",
        onClick: this.switchExternalType,
        "data-type": "EMBED"
      }, language.embed) : null), /*#__PURE__*/external_react_default().createElement("span", {
        className: "bf-external-tip"
      }, language.externalInputTip))) : null), /*#__PURE__*/external_react_default().createElement("footer", {
        className: "bf-manager-footer"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "pull-left"
      }, allowExternal ? /*#__PURE__*/external_react_default().createElement("span", {
        onClick: this.toggleExternalForm,
        className: "bf-toggle-external-form"
      }, showExternalForm ? /*#__PURE__*/external_react_default().createElement("span", {
        className: "bf-bottom-text"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-add"
      }), " ", language.addLocalFile) : /*#__PURE__*/external_react_default().createElement("span", {
        className: "bf-bottom-text"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-add"
      }), " ", language.addExternalSource)) : null), /*#__PURE__*/external_react_default().createElement("div", {
        className: "pull-right"
      }, /*#__PURE__*/external_react_default().createElement("button", {
        onClick: this.confirmInsert,
        className: "button button-insert",
        disabled: !confirmable
      }, language.insert), /*#__PURE__*/external_react_default().createElement("button", {
        onClick: this.cancelInsert,
        className: "button button-cancel"
      }, language.cancel))));
    }
  }, {
    key: "buildItemList",
    value: function buildItemList() {
      var _this2 = this;
      return /*#__PURE__*/external_react_default().createElement("ul", {
        className: "bf-list"
      }, /*#__PURE__*/external_react_default().createElement("li", {
        className: "bf-add-item"
      }, /*#__PURE__*/external_react_default().createElement("i", {
        className: "braft-icon-add"
      }), /*#__PURE__*/external_react_default().createElement("input", {
        accept: this.state.fileAccept,
        onChange: this.reslovePickedFiles,
        multiple: true,
        type: "file"
      })), this.state.items.map(function (item, index) {
        var previewerComponents = null;
        var progressMarker = item.uploading && !_this2.props.hideProgress ? /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-item-uploading"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-item-uploading-bar",
          style: {
            width: item.uploadProgress / 1 + '%'
          }
        })) : '';
        switch (item.type) {
          case 'IMAGE':
            previewerComponents = /*#__PURE__*/external_react_default().createElement("div", {
              className: "bf-image"
            }, progressMarker, /*#__PURE__*/external_react_default().createElement("img", {
              src: item.thumbnail || item.url
            }));
            break;
          case 'VIDEO':
            previewerComponents = /*#__PURE__*/external_react_default().createElement("div", {
              className: "bf-icon bf-video",
              title: item.url
            }, progressMarker, /*#__PURE__*/external_react_default().createElement("i", {
              className: "braft-icon-film"
            }), /*#__PURE__*/external_react_default().createElement("span", null, item.name || item.url));
            break;
          case 'AUDIO':
            previewerComponents = /*#__PURE__*/external_react_default().createElement("div", {
              className: "bf-icon bf-audio",
              title: item.url
            }, progressMarker, /*#__PURE__*/external_react_default().createElement("i", {
              className: "braft-icon-music"
            }), /*#__PURE__*/external_react_default().createElement("span", null, item.name || item.url));
            break;
          case 'EMBED':
            previewerComponents = /*#__PURE__*/external_react_default().createElement("div", {
              className: "bf-icon bf-embed",
              title: item.url
            }, progressMarker, /*#__PURE__*/external_react_default().createElement("i", {
              className: "braft-icon-code"
            }), /*#__PURE__*/external_react_default().createElement("span", null, item.name || _this2.props.language.embed));
            break;
          default:
            previewerComponents = /*#__PURE__*/external_react_default().createElement("a", {
              className: "bf-icon bf-file",
              title: item.url,
              href: item.url
            }, progressMarker, /*#__PURE__*/external_react_default().createElement("i", {
              className: "braft-icon-file-text"
            }), /*#__PURE__*/external_react_default().createElement("span", null, item.name || item.url));
            break;
        }
        var className = ['bf-item'];
        item.selected && className.push('active');
        item.uploading && className.push('uploading');
        item.error && className.push('error');
        return /*#__PURE__*/external_react_default().createElement("li", {
          key: index,
          title: item.name,
          "data-id": item.id,
          className: className.join(' '),
          onClick: _this2.toggleSelectItem
        }, previewerComponents, /*#__PURE__*/external_react_default().createElement("span", {
          "data-id": item.id,
          onClick: _this2.removeItem,
          className: "bf-item-remove braft-icon-close"
        }), /*#__PURE__*/external_react_default().createElement("span", {
          className: "bf-item-title"
        }, item.name));
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (JSON.stringify(nextProps) !== prevState.propsStr) return mapPropsToState(nextProps);
      return null;
    }
  }]);
  return BraftFinderView;
}((external_react_default()).Component);
view_defineProperty(BraftFinderView, "defaultProps", {
  accepts: defaultAccepts,
  externals: {
    image: true,
    video: true,
    audio: true,
    embed: true
  }
});

;// CONCATENATED MODULE: ./languages/en.js
/* harmony default export */ const en = ({
  remove: 'Remove',
  cancel: 'Cancel',
  confirm: 'Confirm',
  insert: 'Insert Selected Items',
  width: 'Width',
  height: 'Height',
  image: 'Image',
  video: 'Video',
  audio: 'Audio',
  embed: 'Embed',
  caption: 'Media Library',
  dragTip: 'Click Or Drag Files Here',
  dropTip: 'Drop To Upload',
  selectAll: 'Select All',
  deselect: 'Deselect',
  removeSelected: 'Remove Selected Items',
  externalInputPlaceHolder: 'Source Name|Source URL',
  externalInputTip: 'Split source name and source URL with "|", confirm by hit Enter.',
  addLocalFile: 'Add from local',
  addExternalSource: 'Add from Internet',
  unnamedItem: 'Unnamed Item',
  confirmInsert: 'Insert selected items'
});
;// CONCATENATED MODULE: ./languages/zh.js
/* harmony default export */ const zh = ({
  remove: '删除',
  cancel: '取消',
  confirm: '确认',
  insert: '插入所选项目',
  width: '宽度',
  height: '高度',
  image: '图片',
  video: '视频',
  audio: '音频',
  embed: '嵌入式媒体',
  caption: '媒体库',
  dragTip: '点击或拖动文件至此',
  dropTip: '放开鼠标以上传',
  selectAll: '选择全部',
  deselect: '取消选择',
  removeSelected: '删除选中项目',
  externalInputPlaceHolder: '资源名称|资源地址',
  externalInputTip: '使用“|”分隔资源名称和资源地址',
  addLocalFile: '添加本地资源',
  addExternalSource: '添加网络资源',
  unnamedItem: '未命名项目',
  confirmInsert: '插入选中项目'
});
;// CONCATENATED MODULE: ./languages/zh-hant.js
/* harmony default export */ const zh_hant = ({
  remove: '刪除',
  cancel: '取消',
  confirm: '確認',
  insert: '插入所選項目',
  width: '寬度',
  height: '高度',
  image: '圖片',
  video: '視頻',
  audio: '音頻',
  embed: '嵌入式媒體',
  caption: '媒體庫',
  dragTip: '點擊或拖動文件至此',
  dropTip: '放開鼠標以上傳',
  selectAll: '選擇全部',
  deselect: '取消選擇',
  removeSelected: '刪除選中項目',
  externalInputPlaceHolder: '資源名稱|資源地址',
  externalInputTip: '使用“|”分隔資源名稱和資源地址',
  addLocalFile: '添加本地資源',
  addExternalSource: '添加網絡資源',
  unnamedItem: '未命名項目',
  confirmInsert: '插入選中項目'
});
;// CONCATENATED MODULE: ./languages/pl.js
/* harmony default export */ const pl = ({
  remove: 'Usuń',
  cancel: 'Anuluj',
  confirm: 'Potwierdź',
  insert: 'Wstaw wybrane elementy',
  width: 'Szerokość',
  height: 'Wysokość',
  image: 'Obraz',
  video: 'Wideo',
  audio: 'Dźwięk',
  embed: 'Obiekt',
  caption: 'Biblioteka mediów',
  dragTip: 'Kliknij lub przenieś tu pliki',
  dropTip: 'Upuść aby dodać plik',
  selectAll: 'Zaznacz wszystko',
  deselect: 'Odznacz',
  removeSelected: 'Usuń wybrane',
  externalInputPlaceHolder: 'Nazwa źródła|Adres URL',
  externalInputTip: 'Oddziel nazwę i adres URL źródła z pomocą "|", Potwierdź Enter-em',
  addLocalFile: 'Dodaj z komputera',
  addExternalSource: 'Dodaj z Internetu',
  unnamedItem: 'Bez nazwy',
  confirmInsert: 'Dodaj wybrane elementy'
});
;// CONCATENATED MODULE: ./languages/kr.js
/* harmony default export */ const kr = ({
  remove: '삭제',
  cancel: '취소',
  confirm: '확인',
  insert: '선택한항목삽입',
  width: '너비',
  height: '높이',
  image: '그림',
  video: '비디오',
  audio: '오디오',
  embed: '임베디드미디어',
  caption: '미디어라이브러리',
  dragTip: '파일을 클릭하거나이 지점으로 드래그하십시오.',
  dropTip: '업로드하려면마우스를놓으십시오.',
  selectAll: '모두 선택',
  deselect: '선택 취소',
  removeSelected: '선택한 항목 삭제',
  externalInputPlaceHolder: '리소스 이름 | 리소스 주소',
  externalInputTip: '자원 이름과 자원 주소를 "|"',
  addLocalFile: '로컬 리소스 추가',
  addExternalSource: '네트워크 리소스 추가',
  unnamedItem: '이름없는 항목',
  confirmInsert: '선택한 항목 삽입'
});
;// CONCATENATED MODULE: ./languages/jpn.js
/* harmony default export */ const jpn = ({
  remove: '削除する',
  cancel: 'キャンセル',
  confirm: '確認する',
  insert: '選択したアイテムを挿入',
  width: '幅',
  height: '身長',
  image: '絵',
  video: 'ビデオ',
  audio: '音声',
  embed: '埋め込みメディア',
  caption: 'メディアライブラリー',
  dragTip: 'ファイルをこの位置までクリックまたはドラッグします',
  dropTip: 'アップロードするマウスを放します',
  selectAll: 'すべて選択',
  deselect: '選択を解除',
  removeSelected: '選択したアイテムを削除',
  externalInputPlaceHolder: 'リソース名|リソースアドレス',
  externalInputTip: 'リソース名とリソースアドレスは "|"で区切ります。',
  addLocalFile: 'ローカルリソースを追加する',
  addExternalSource: 'ネットワークリソースを追加する',
  unnamedItem: '名前のないアイテム',
  confirmInsert: '選択したアイテムを挿入'
});
;// CONCATENATED MODULE: ./languages/tr.js
/* harmony default export */ const tr = ({
  remove: 'Kaldır',
  cancel: 'İptal',
  confirm: 'Onayla',
  insert: 'Seçilenleri ekle',
  width: 'Genişlik',
  height: 'Yükseklik',
  image: 'Resim',
  video: 'Görüntü',
  audio: 'Ses',
  embed: 'Nesne göm',
  caption: 'Kitaplık',
  dragTip: 'Tıkla ya da dosya sürükle',
  dropTip: 'Yüklemek için sürükleyin',
  selectAll: 'Tümünü seç',
  deselect: 'Seçimi kaldır',
  removeSelected: 'Seçilenleri kaldır',
  externalInputPlaceHolder: 'Kaynak adı|Kaynak bağlantısı',
  externalInputTip: 'Kaynak asını ve bağlantısını "|" ile ayırın ve Enter\' a basın.',
  addLocalFile: 'Yerel\' den ekle',
  addExternalSource: 'Harici kaynaktan ekle',
  unnamedItem: 'Adlandırılmamış giriş',
  confirmInsert: 'Seçilenleri ekle'
});
;// CONCATENATED MODULE: ./languages/ru.js
/* harmony default export */ const ru = ({
  remove: 'Удалить',
  cancel: 'Отмена',
  confirm: 'Подтвердить',
  insert: 'Вставить выбранные элементы',
  width: 'Ширина',
  height: 'Высота',
  image: 'Изображение',
  video: 'Видео',
  audio: 'Аудио',
  embed: 'Встроенное',
  caption: 'Медиа библиотека',
  dragTip: 'Нажмите или перетащите файлы сюда',
  dropTip: 'Перетащите, чтобы загрузить',
  selectAll: 'Выбрать все',
  deselect: 'Отменить выбор',
  removeSelected: 'Удалить выбранные элементы',
  externalInputPlaceHolder: 'Имя источника |URL источника',
  externalInputTip: 'Разделите имя источника и URL источника с помощью «|», подтвердите нажатием Enter.',
  addLocalFile: 'Добавить с локального диска',
  addExternalSource: 'Добавить через интернет',
  unnamedItem: 'Беззымянный элемент',
  confirmInsert: 'Вставить выбранные элементы'
});
;// CONCATENATED MODULE: ./languages/index.js








/* harmony default export */ const languages = ({
  "en": en,
  "zh": zh,
  "zh-hant": zh_hant,
  "pl": pl,
  "kr": kr,
  "jpn": jpn,
  "tr": tr,
  "ru": ru
});
;// CONCATENATED MODULE: ./index.jsx
function index_typeof(obj) { "@babel/helpers - typeof"; return index_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, index_typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function index_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function index_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? index_ownKeys(Object(source), !0).forEach(function (key) { index_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : index_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function index_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, index_toPropertyKey(descriptor.key), descriptor); } }
function index_createClass(Constructor, protoProps, staticProps) { if (protoProps) index_defineProperties(Constructor.prototype, protoProps); if (staticProps) index_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function index_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function index_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) index_setPrototypeOf(subClass, superClass); }
function index_setPrototypeOf(o, p) { index_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return index_setPrototypeOf(o, p); }
function index_createSuper(Derived) { var hasNativeReflectConstruct = index_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = index_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = index_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return index_possibleConstructorReturn(this, result); }; }
function index_possibleConstructorReturn(self, call) { if (call && (index_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return index_assertThisInitialized(self); }
function index_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function index_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function index_getPrototypeOf(o) { index_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return index_getPrototypeOf(o); }
function index_defineProperty(obj, key, value) { key = index_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function index_toPropertyKey(arg) { var key = index_toPrimitive(arg, "string"); return index_typeof(key) === "symbol" ? key : String(key); }
function index_toPrimitive(input, hint) { if (index_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (index_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var BraftFinder = /*#__PURE__*/function (_FinderController) {
  index_inherits(BraftFinder, _FinderController);
  var _super = index_createSuper(BraftFinder);
  function BraftFinder(_props) {
    var _this;
    index_classCallCheck(this, BraftFinder);
    _this = _super.call(this, _props);
    index_defineProperty(index_assertThisInitialized(_this), "ReactComponent", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var componentProps = index_objectSpread(index_objectSpread({}, _this.superProps), props);
      var language = (typeof componentProps.language === 'function' ? componentProps.language(languages, 'braft-finder') : languages[componentProps.language]) || languages['zh'];
      return /*#__PURE__*/external_react_default().createElement(BraftFinderView, _extends({}, componentProps, {
        language: language,
        controller: index_assertThisInitialized(_this)
      }));
    });
    _this.superProps = _props;
    return _this;
  }
  return index_createClass(BraftFinder);
}(BraftFinderController);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});