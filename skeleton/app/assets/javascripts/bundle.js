/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const ApiUtil = require("./api_util"); // took out our .js because its not needed


class FollowToggle { // data is a Jquery method. meaning only be called on jQuery objects
    constructor(element){
        this.$el = $(element); // the solution to the comment below;
        this.userId = this.$el.data("userId"); // flagged an error message because we were not invoking the Jquery method #data on a Jquery object. Just a HTML element!
        this.followState = this.$el.data("followState"); 
        this.render(); 
        this.handleClick();
    }

    render() {
        if (this.followState === false) {
            this.$el.text("Follow!")
        } else {
            this.$el.text("Unfollow!");
        }
    }

    handleClick(){
        // Make sure to remember that we open curly braces within our args.
        this.$el.on("click", this.$el, event => { // event refers to what happens to activate this method
            event.preventDefault();
            // ajaxUtil (id)
            // ApiUtil.followUser(this.$el)
            if (this.followState) {
                $.ajax({
                    method: "DELETE",
                    url: `/users/${this.userId}/follow`,
                    datatype: "json", // Do we want to use this datatype because using HTML forces a refresh
                    data: { this: this.followState }, // what exactly is data
                    success(){ this.followState = false} ,
                    error(){this.followState = true} 
                })
                debugger
            } else {
                     $.ajax({
                    method: "POST",
                    url: `/users/${this.userId}/follow`,
                    datatype: "json", // Do we want to use this datatype because using HTML forces a refresh
                    data: {this: this.followState}, // what exactly is data
                    success(){this.followState = false} ,
                    error(){this.followState = true} 
                })
            }

        });
    }
    
} // how are we using/calling the follow toggle class

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js"); // took out our .js because its not needed

$(()=>{  // referred to as a document ready method that
   const $buttons =  $(".follow-toggle"); // outputs a JQuery object
   for (let index = 0; index < $buttons.length; index++) {
       const element = $buttons[index];  // outputs a specific element, are we ouputiing a Jquery object or JS object or HTML object
    //    debugger;
       const followButton = new FollowToggle(element);
    //    debugger;
   }
   
})



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map