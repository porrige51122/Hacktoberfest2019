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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/collisions.js":
/*!******************************!*\
  !*** ./src/js/collisions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collisions = function () {
  function Collisions(paddle, ball, bricks) {
    _classCallCheck(this, Collisions);

    this.ball = ball;
    this.paddle = paddle;
    this.bricks = bricks;
  }

  _createClass(Collisions, [{
    key: 'checkBreak',
    value: function checkBreak() {
      var bp = this.ball.pos;
      for (var i = 0; i < this.bricks.length; i++) {
        var b = this.bricks[i];
        if (b.visible) {
          var brickX = b.pos[0] - b.width / 2;
          var brickY = b.pos[1] - 1 / 8;
          var withinX = bp[0] > brickX && bp[0] < brickX + b.width;
          var withinY = bp[1] > brickY && bp[1] < brickY + 1 / 4;
          if (withinX && withinY) {
            this.bounceY();
            console.log('hit');
            this.bricks[i].visible = false;
          }
        }
      }
    }
  }, {
    key: 'checkBounce',
    value: function checkBounce(cellSize) {
      if (this.ball.pos[0] < 0 || this.ball.pos[0] > 4) {
        this.bounceX();
      }
      if (!this.ball.colliding) {
        if (this.ball.pos[1] > 3) {
          var paddle = this.paddle.pos / cellSize - this.paddle.width / 2 < this.ball.pos[0] && this.paddle.pos / cellSize + this.paddle.width / 2 > this.ball.pos[0];
          if (paddle) {
            this.ball.colliding = true;
            this.paddleBounce(this.paddle.pos / cellSize - this.paddle.width / 2, this.paddle.width, this.ball.pos[0]);
          } else {
            this.ball.reset();
          }
        } else if (this.ball.pos[1] < 0) {
          this.ball.colliding = true;
          this.bounceY();
        }
      }
    }
  }, {
    key: 'bounceX',
    value: function bounceX() {
      this.ball.vel[0] = -this.ball.vel[0];
    }
  }, {
    key: 'bounceY',
    value: function bounceY() {
      this.ball.vel[1] = -this.ball.vel[1];
    }
  }, {
    key: 'paddleBounce',
    value: function paddleBounce(padPos, padWidth, ballPos) {
      var newVel = void 0;
      if (ballPos < padPos + padWidth / 6) {
        newVel = [-0.03, -0.005];
      } else if (ballPos < padPos + 2 * padWidth / 6) {
        newVel = [-0.02, -0.0075];
      } else if (ballPos < padPos + 3 * padWidth / 6) {
        newVel = [-0.01, -0.01];
      } else if (ballPos < padPos + 4 * padWidth / 6) {
        newVel = [0.01, -0.01];
      } else if (ballPos < padPos + 5 * padWidth / 6) {
        newVel = [0.02, -0.0075];
      } else {
        newVel = [0.03, -0.005];
      }
      this.ball.vel = newVel;
    }
  }]);

  return Collisions;
}();

exports.default = Collisions;

/***/ }),

/***/ "./src/js/entities/ball.js":
/*!*********************************!*\
  !*** ./src/js/entities/ball.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(pos) {
    _classCallCheck(this, Ball);

    this.pos = pos;
    this.vel = [0.01, 0.01];
    this.width = 0.05;
    this.colliding = false;
  }

  _createClass(Ball, [{
    key: "reset",
    value: function reset() {
      this.pos = [1, 2];
      this.vel = [0.01, 0.01];
    }
  }, {
    key: "tick",
    value: function tick() {
      this.colliding = false;
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }
  }, {
    key: "render",
    value: function render(canvas, ctx, cellSize) {
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(this.pos[0] * cellSize, this.pos[1] * cellSize, this.width * cellSize, 0, 2 * Math.PI);
      ctx.fill();
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),

/***/ "./src/js/entities/brick.js":
/*!**********************************!*\
  !*** ./src/js/entities/brick.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Brick = function () {
  function Brick(pos) {
    _classCallCheck(this, Brick);

    this.pos = pos;
    this.value = "TESTING";
    this.width = this.value.length / 10;
    this.visible = true;
  }

  _createClass(Brick, [{
    key: "tick",
    value: function tick(pos) {
      this.pos = pos;
    }
  }, {
    key: "render",
    value: function render(canvas, ctx, cellSize) {
      if (this.visible) {
        ctx.fillStyle = "#000000";
        var x = this.pos[0] * cellSize - cellSize * this.width / 2;
        var y = this.pos[1] * cellSize - cellSize / 8;

        ctx.fillRect(x, y, this.width * cellSize, cellSize / 4);
      }
    }
  }]);

  return Brick;
}();

exports.default = Brick;

/***/ }),

/***/ "./src/js/entities/paddle.js":
/*!***********************************!*\
  !*** ./src/js/entities/paddle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(pos) {
    _classCallCheck(this, Paddle);

    this.pos = pos;
    this.width = 1;
    this.height = 0.05;
  }

  _createClass(Paddle, [{
    key: "tick",
    value: function tick(pos) {
      this.pos = pos;
    }
  }, {
    key: "render",
    value: function render(canvas, ctx, cellSize) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(this.pos - cellSize * this.width / 2, cellSize * (1 - this.height) * 3, this.width * cellSize, this.height * cellSize);
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(/*! ./render.js */ "./src/js/render.js");

var _paddle = __webpack_require__(/*! ./entities/paddle.js */ "./src/js/entities/paddle.js");

var _paddle2 = _interopRequireDefault(_paddle);

var _ball = __webpack_require__(/*! ./entities/ball.js */ "./src/js/entities/ball.js");

var _ball2 = _interopRequireDefault(_ball);

var _brick = __webpack_require__(/*! ./entities/brick.js */ "./src/js/entities/brick.js");

var _brick2 = _interopRequireDefault(_brick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = -1;
canvas.height = -1;

var entities = [new _paddle2.default(innerWidth / 2), new _ball2.default([1, 2])];
var bricks = [new _brick2.default([1, 1])];

window.startGame = function () {
  document.getElementById("hide").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  var string = document.getElementById("essay").value;
  var res = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  res = res.split(" ");
};

function eventListeners() {
  window.document.onkeydown = function (e) {
    if (e.keyCode == 37 && entities[0].pos > 0) entities[0].pos -= 10;
    if (e.keyCode == 39 && entities[0].pos < canvas.width) entities[0].pos += 10;
  };
}

function init() {
  resize();
  eventListeners();
  loop();
}

var aspectRatio = [4, 3];
var oldSize = [canvas.width, canvas.height];
var cellSize = 1;

function resize() {
  if (oldSize[0] != innerWidth || oldSize[1] != innerHeight) {
    var cellWidth = innerWidth / aspectRatio[0];
    var cellHeight = innerHeight / aspectRatio[1];
    if (cellWidth > cellHeight) {
      cellWidth = cellHeight;
    } else {
      cellHeight = cellWidth;
    }
    cellSize = cellHeight;
    canvas.width = cellWidth * aspectRatio[0];
    canvas.height = cellHeight * aspectRatio[1];
  }
}

function tick() {
  entities[1].tick();
}

function render() {
  (0, _render.renderMain)(canvas, ctx, entities, cellSize, bricks);
}

function loop() {
  window.requestAnimationFrame(function () {
    resize();
    tick();
    render();
    loop();
  });
}

init();

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMain = undefined;

var _collisions = __webpack_require__(/*! ./collisions.js */ "./src/js/collisions.js");

var _collisions2 = _interopRequireDefault(_collisions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderMain(canvas, ctx, entities, cellSize, bricks) {
  ctx.fillStyle = "#f1c40f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var hit = new _collisions2.default(entities[0], entities[1], bricks);
  entities.forEach(function (entity) {
    return entity.render(canvas, ctx, cellSize);
  });
  bricks.forEach(function (brick) {
    return brick.render(canvas, ctx, cellSize);
  });
  hit.checkBounce(cellSize);
  hit.checkBreak(cellSize);
}

exports.renderMain = renderMain;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map