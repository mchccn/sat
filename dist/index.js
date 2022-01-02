/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Collider.ts":
/*!*************************!*\
  !*** ./src/Collider.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Vector_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Vector */ "./src/Vector.ts"));
var Collider = /** @class */ (function () {
    function Collider(a, b) {
        this.a = a;
        this.b = b;
    }
    Collider.prototype.collide = function (method) {
        var e_1, _a;
        if (method === void 0) { method = "SAT"; }
        if (method === "SAT") {
            var sides = utils_1.edges(this.a.vertices.map(function (p) { return new Vector_1.default(p.x, p.y); })).concat(utils_1.edges(this.b.vertices.map(function (p) { return new Vector_1.default(p.x, p.y); })));
            var axes = sides.map(function (side) { return utils_1.orthogonal(side).normalized; });
            try {
                for (var axes_1 = tslib_1.__values(axes), axes_1_1 = axes_1.next(); !axes_1_1.done; axes_1_1 = axes_1.next()) {
                    var axis = axes_1_1.value;
                    if (!utils_1.overlap(utils_1.project(this.a.vertices.map(function (p) { return new Vector_1.default(p.x, p.y); }), axis), utils_1.project(this.b.vertices.map(function (p) { return new Vector_1.default(p.x, p.y); }), axis)))
                        return false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (axes_1_1 && !axes_1_1.done && (_a = axes_1.return)) _a.call(axes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        }
        throw new ReferenceError("AABB collision is not implemented");
    };
    return Collider;
}());
exports.default = Collider;


/***/ }),

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.coords = [x, y];
    }
    Point.prototype[Symbol.iterator] = function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, tslib_1.__values(this.coords)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(Point.prototype, 0, {
        get: function () {
            return this.coords[0];
        },
        set: function (value) {
            this.coords[0] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, 1, {
        get: function () {
            return this.coords[1];
        },
        set: function (value) {
            this.coords[1] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.coords[0];
        },
        set: function (value) {
            this.coords[0] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.coords[1];
        },
        set: function (value) {
            this.coords[1] = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.toArray = function () {
        return this.coords;
    };
    Point.from = function (coords) {
        return new Point(coords[0], coords[1]);
    };
    return Point;
}());
exports.default = Point;


/***/ }),

/***/ "./src/Rectangle.ts":
/*!**************************!*\
  !*** ./src/Rectangle.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Point_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Point */ "./src/Point.ts"));
var Shape_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Shape */ "./src/Shape.ts"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Rectangle = /** @class */ (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle(x, y, w, h, angle) {
        var e_1, _a;
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 1; }
        if (h === void 0) { h = 1; }
        if (angle === void 0) { angle = 0; }
        var _this = _super.call(this, [Point_1.default.from([x - w / 2, y - h / 2]), Point_1.default.from([x - w / 2, y + h / 2]), Point_1.default.from([x + w / 2, y + h / 2]), Point_1.default.from([x + w / 2, y - h / 2])]) || this;
        _this.angle = angle;
        try {
            for (var _b = tslib_1.__values(_this.mesh), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                utils_1.rotate(v, Point_1.default.from([x, y]), _this.angle);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _this.pos = new Point_1.default(x, y);
        _this.dim = new Point_1.default(w, h);
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "a", {
        get: function () {
            return this.angle;
        },
        set: function (angle) {
            this.angle = angle;
            this.recalculateMesh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this.pos.x;
        },
        set: function (x) {
            this.pos.x = x;
            this.recalculateMesh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this.pos.y;
        },
        set: function (y) {
            this.pos.y = y;
            this.recalculateMesh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "w", {
        get: function () {
            return this.dim.x;
        },
        set: function (w) {
            this.dim.x = w;
            this.recalculateMesh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "h", {
        get: function () {
            return this.dim.y;
        },
        set: function (h) {
            this.dim.y = h;
            this.recalculateMesh();
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.recalculateMesh = function () {
        var e_2, _a;
        this.mesh = [
            Point_1.default.from([this.pos.x - this.dim.x / 2, this.pos.y - this.dim.y / 2]),
            Point_1.default.from([this.pos.x - this.dim.x / 2, this.pos.y + this.dim.y / 2]),
            Point_1.default.from([this.pos.x + this.dim.x / 2, this.pos.y + this.dim.y / 2]),
            Point_1.default.from([this.pos.x + this.dim.x / 2, this.pos.y - this.dim.y / 2]),
        ];
        try {
            for (var _b = tslib_1.__values(this.mesh), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                utils_1.rotate(v, Point_1.default.from([this.pos.x, this.pos.y]), this.angle);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Rectangle;
}(Shape_1.default));
exports.default = Rectangle;


/***/ }),

/***/ "./src/Shape.ts":
/*!**********************!*\
  !*** ./src/Shape.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Point_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Point */ "./src/Point.ts"));
var Shape = /** @class */ (function () {
    function Shape(mesh) {
        this.mesh = mesh;
    }
    Object.defineProperty(Shape.prototype, "vertices", {
        get: function () {
            return this.mesh.map(function (v) { return Point_1.default.from(v.toArray()); });
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.default = Shape;


/***/ }),

/***/ "./src/Vector.ts":
/*!***********************!*\
  !*** ./src/Vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Represents a vector in 2D space.
 * Instance methods mutate the instance itself,
 * while static methods return a new vector.
 * Also can represent a point.
 */
var Vector = /** @class */ (function () {
    /**
     * @param x The x coordinate.
     * @param y The y coorindate.
     */
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Vector.prototype[Symbol.iterator] = function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.x];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, this.y];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    /**
     * Negates this instance's x and y coordinate.
     * @see Vector.negate
     */
    Vector.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    /**
     * Adds a vector or scalar to this instance.
     * @param v Vector or scalar to add.
     */
    Vector.prototype.add = function (v) {
        if (v instanceof Vector) {
            this.x += v.x;
            this.y += v.y;
        }
        else {
            this.x += v;
            this.y += v;
        }
        return this;
    };
    /**
     * Subtracts a vector or scalar from this instance.
     * @param v Vector or scalar to subtract.
     */
    Vector.prototype.subtract = function (v) {
        if (v instanceof Vector) {
            this.x -= v.x;
            this.y -= v.y;
        }
        else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    };
    /**
     * Multiplies this vector by another vector or scalar.
     * @param v Vector or scalar to multiply by.
     */
    Vector.prototype.multiply = function (v) {
        if (v instanceof Vector) {
            this.x *= v.x;
            this.y *= v.y;
        }
        else {
            this.x *= v;
            this.y *= v;
        }
        return this;
    };
    /**
     * Divides this vector by another vector or scalar.
     * @param v Vector or scalar to divide by.
     */
    Vector.prototype.divide = function (v) {
        if (v instanceof Vector) {
            if (v.x != 0)
                this.x /= v.x;
            if (v.y != 0)
                this.y /= v.y;
        }
        else {
            if (v != 0) {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    };
    /**
     * Gets the dot product of this vector and another vector.
     * @param v Other vector to use.
     * @see Vector.cross
     */
    Vector.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    /**
     * Gets the cross product of this vector and another vector.
     * @param v Other vector to use
     * @see Vector.dot
     */
    Vector.prototype.cross = function (v) {
        return this.x * v.y - this.y * v.x;
    };
    Object.defineProperty(Vector.prototype, "magnitude", {
        /**
         * The magnitude or length of this vector.
         */
        get: function () {
            return Math.sqrt(this.dot(this));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "normalized", {
        /**
         * Normalized version of this vector.
         */
        get: function () {
            return this.divide(this.magnitude);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "angle", {
        /**
         * Angle this vector represents in radians.
         */
        get: function () {
            return -Math.atan2(-this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Angle to the other vector.
     * @param a Vector to compare.
     */
    Vector.prototype.angleTo = function (a) {
        return Math.acos(Math.min(this.dot(a) / (this.magnitude * a.magnitude), 1));
    };
    /**
     * Clones this vector.
     */
    Vector.prototype.clone = function () {
        return new Vector(this.x, this.y);
    };
    /**
     * Negates a vector without mutating it.
     * @param v Vector to negate.
     */
    Vector.negate = function (v) {
        return new Vector(-v.x, -v.y);
    };
    /**
     * Adds a vector or scalar to another without mutating it.
     * @param a Vector to operate on.
     * @param b Vector or number to add.
     */
    Vector.add = function (a, b) {
        if (b instanceof Vector)
            return new Vector(a.x + b.x, a.y + b.y);
        else
            return new Vector(a.x + b, a.y + b);
    };
    /**
     * Subtracts a vector or scalar from another without mutating it.
     * @param a Vector to operate on.
     * @param b Vector or number to subtract.
     */
    Vector.subtract = function (a, b) {
        if (b instanceof Vector)
            return new Vector(a.x - b.x, a.y - b.y);
        else
            return new Vector(a.x - b, a.y - b);
    };
    /**
     * Multiplies a vector by another vector or scalar without mutating it.
     * @param a Vector to operate on.
     * @param b Vector or number to multiply.
     */
    Vector.multiply = function (a, b) {
        if (b instanceof Vector)
            return new Vector(a.x * b.x, a.y * b.y);
        else
            return new Vector(a.x * b, a.y * b);
    };
    /**
     * Divides a vector by another vector or scalar without mutating it.
     * @param a Vector to operate on.
     * @param b Vector or number to divide.
     */
    Vector.divide = function (a, b) {
        if (b instanceof Vector)
            return new Vector(a.x / b.x, a.y / b.y);
        else
            return new Vector(a.x / b, a.y / b);
    };
    /**
     * The dot product of both vectors.
     * @param a A vector.
     * @param b Another vector.
     */
    Vector.dot = function (a, b) {
        return a.x * b.x + a.y * b.y;
    };
    /**
     * The cross product of both vectors
     * @param a A vector.
     * @param b Another vector.
     */
    Vector.cross = function (a, b) {
        return a.x * b.y - a.y * b.x;
    };
    return Vector;
}());
exports.default = Vector;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ctx = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Collider_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Collider */ "./src/Collider.ts"));
var Rectangle_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Rectangle */ "./src/Rectangle.ts"));
var canvas = document.querySelector("canvas");
exports.ctx = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;
exports.ctx.translate(canvas.width / 2, canvas.height / 2);
var a = new Rectangle_1.default(750 - canvas.width / 2, 500 - canvas.height / 2, 150, 100, 1);
var b = new Rectangle_1.default(900 - canvas.width / 2, 400 - canvas.height / 2, 125, 175, 0.5);
var collider = new Collider_1.default(a, b);
var EPOCH = Date.now();
var Δ = 0;
var Ω = 0;
function update(γ) {
    var θ = γ / 1000;
    Δ = θ - Ω;
    Ω = θ;
    exports.ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
    if (keys.get("KeyW"))
        b.y -= 250 * Δ;
    if (keys.get("KeyA"))
        b.x -= 250 * Δ;
    if (keys.get("KeyS"))
        b.y += 250 * Δ;
    if (keys.get("KeyD"))
        b.x += 250 * Δ;
    if (keys.get("KeyQ"))
        b.a -= 2.5 * Δ;
    if (keys.get("KeyE"))
        b.a += 2.5 * Δ;
    if (keys.get("ArrowUp"))
        a.y -= 250 * Δ;
    if (keys.get("ArrowLeft"))
        a.x -= 250 * Δ;
    if (keys.get("ArrowDown"))
        a.y += 250 * Δ;
    if (keys.get("ArrowRight"))
        a.x += 250 * Δ;
    if (keys.get("KeyO"))
        a.a -= 2.5 * Δ;
    if (keys.get("KeyP"))
        a.a += 2.5 * Δ;
    var colliding = collider.collide();
    rect(a, colliding ? "red" : "blue");
    rect(b, colliding ? "red" : "blue");
}
setInterval(function () { return update(Date.now() - EPOCH); }, 1000 / 60);
function rect(rect, color) {
    var e_1, _a;
    exports.ctx.fillStyle = color;
    exports.ctx.beginPath();
    exports.ctx.moveTo(rect.vertices[0][0], rect.vertices[0][1]);
    try {
        for (var _b = tslib_1.__values(rect.vertices.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib_1.__read(_c.value, 2), x = _d[0], y = _d[1];
            exports.ctx.lineTo(x, y);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    exports.ctx.closePath();
    return exports.ctx.fill();
}
var keys = new Map();
document.addEventListener("keydown", function (e) {
    keys.set(e.code, true);
});
document.addEventListener("keyup", function (e) {
    keys.delete(e.code);
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.overlap = exports.orthogonal = exports.edges = exports.direction = exports.project = exports.rotate = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Vector_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Vector */ "./src/Vector.ts"));
function rotate(p, t, a) {
    var s = Math.sin(a);
    var c = Math.cos(a);
    p[0] -= t[0];
    p[1] -= t[1];
    var nx = p[0] * c - p[1] * s;
    var ny = p[0] * s + p[1] * c;
    p[0] = nx + t[0];
    p[1] = ny + t[1];
    return p;
}
exports.rotate = rotate;
function project(vertices, axis) {
    var dots = vertices.map(function (vertex) { return vertex.dot(axis); });
    return [Math.min.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(dots))), Math.max.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(dots)))];
}
exports.project = project;
function direction(point0, point1) {
    return new Vector_1.default(point1.x - point0.x, point1.y - point0.y);
}
exports.direction = direction;
function edges(vertices) {
    return vertices.map(function (_, i) { return direction(vertices[i], vertices[(i + 1) % vertices.length]); });
}
exports.edges = edges;
function orthogonal(vector) {
    return new Vector_1.default(vector.y, -vector.x);
}
exports.orthogonal = orthogonal;
function overlap(projection1, projection2) {
    return Math.min.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(projection1))) <= Math.max.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(projection2))) && Math.min.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(projection2))) <= Math.max.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(projection1)));
}
exports.overlap = overlap;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDckMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNyQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFckMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FB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Z0RBQWdELGtCQUFrQjtBQUM3STtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHVGQUF1RixjQUFjO0FBQ2hOLHVCQUF1Qiw4QkFBOEIsZ0RBQWdELHdEQUF3RDtBQUM3Siw2Q0FBNkMsc0NBQXNDLFVBQVUsbUJBQW1CLElBQUk7QUFDcEg7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLHVDQUF1QyxZQUFZLEtBQUssT0FBTztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZDQUE2QztBQUM3QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOU9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F0Ly4vc3JjL0NvbGxpZGVyLnRzIiwid2VicGFjazovL3NhdC8uL3NyYy9Qb2ludC50cyIsIndlYnBhY2s6Ly9zYXQvLi9zcmMvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3NhdC8uL3NyYy9TaGFwZS50cyIsIndlYnBhY2s6Ly9zYXQvLi9zcmMvVmVjdG9yLnRzIiwid2VicGFjazovL3NhdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zYXQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vc2F0Ly4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9zYXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2F0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zYXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zYXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NhdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQgeyBlZGdlcywgb3J0aG9nb25hbCwgb3ZlcmxhcCwgcHJvamVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL1ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlcjxBIGV4dGVuZHMgU2hhcGUgPSBTaGFwZSwgQiBleHRlbmRzIFNoYXBlID0gU2hhcGU+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgYTogQSwgcHVibGljIHJlYWRvbmx5IGI6IEIpIHt9XG5cbiAgICBwdWJsaWMgY29sbGlkZShtZXRob2Q6IFwiQUFCQlwiIHwgXCJTQVRcIiA9IFwiU0FUXCIpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJTQVRcIikge1xuICAgICAgICAgICAgY29uc3Qgc2lkZXMgPSBlZGdlcyh0aGlzLmEudmVydGljZXMubWFwKChwKSA9PiBuZXcgVmVjdG9yKHAueCwgcC55KSkpLmNvbmNhdChlZGdlcyh0aGlzLmIudmVydGljZXMubWFwKChwKSA9PiBuZXcgVmVjdG9yKHAueCwgcC55KSkpKTtcblxuICAgICAgICAgICAgY29uc3QgYXhlcyA9IHNpZGVzLm1hcCgoc2lkZSkgPT4gb3J0aG9nb25hbChzaWRlKS5ub3JtYWxpemVkKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIGF4ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFvdmVybGFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmEudmVydGljZXMubWFwKChwKSA9PiBuZXcgVmVjdG9yKHAueCwgcC55KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iLnZlcnRpY2VzLm1hcCgocCkgPT4gbmV3IFZlY3RvcihwLngsIHAueSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIkFBQkIgY29sbGlzaW9uIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gICAgcHJpdmF0ZSBjb29yZHM7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBbeCwgeV0gYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICB9XG5cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHlpZWxkKiB0aGlzLmNvb3JkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IDAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1swXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb3Jkc1sxXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IDAodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvb3Jkc1swXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgMSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY29vcmRzWzFdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNbMF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNbMV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb29yZHNbMF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGNvb3Jkc1swXSwgY29vcmRzWzFdKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IHsgcm90YXRlIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGU8W1BvaW50LCBQb2ludCwgUG9pbnQsIFBvaW50XT4ge1xuICAgIHByaXZhdGUgcG9zOiBQb2ludDtcbiAgICBwcml2YXRlIGRpbTogUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3OiBudW1iZXIgPSAxLCBoOiBudW1iZXIgPSAxLCBwcml2YXRlIGFuZ2xlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHN1cGVyKFtQb2ludC5mcm9tKFt4IC0gdyAvIDIsIHkgLSBoIC8gMl0pLCBQb2ludC5mcm9tKFt4IC0gdyAvIDIsIHkgKyBoIC8gMl0pLCBQb2ludC5mcm9tKFt4ICsgdyAvIDIsIHkgKyBoIC8gMl0pLCBQb2ludC5mcm9tKFt4ICsgdyAvIDIsIHkgLSBoIC8gMl0pXSk7XG5cbiAgICAgICAgZm9yIChjb25zdCB2IG9mIHRoaXMubWVzaCkgcm90YXRlKHYsIFBvaW50LmZyb20oW3gsIHldKSwgdGhpcy5hbmdsZSk7XG5cbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgUG9pbnQoeCwgeSk7XG5cbiAgICAgICAgdGhpcy5kaW0gPSBuZXcgUG9pbnQodywgaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGEoYW5nbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZU1lc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcy54O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgeCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3MueCA9IHg7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZU1lc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcy55O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3MueSA9IHk7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZU1lc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpbS54O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdyh3OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaW0ueCA9IHc7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZU1lc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpbS55O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaChoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaW0ueSA9IGg7XG5cbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZU1lc2goKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY2FsY3VsYXRlTWVzaCgpIHtcbiAgICAgICAgdGhpcy5tZXNoID0gW1xuICAgICAgICAgICAgUG9pbnQuZnJvbShbdGhpcy5wb3MueCAtIHRoaXMuZGltLnggLyAyLCB0aGlzLnBvcy55IC0gdGhpcy5kaW0ueSAvIDJdKSxcbiAgICAgICAgICAgIFBvaW50LmZyb20oW3RoaXMucG9zLnggLSB0aGlzLmRpbS54IC8gMiwgdGhpcy5wb3MueSArIHRoaXMuZGltLnkgLyAyXSksXG4gICAgICAgICAgICBQb2ludC5mcm9tKFt0aGlzLnBvcy54ICsgdGhpcy5kaW0ueCAvIDIsIHRoaXMucG9zLnkgKyB0aGlzLmRpbS55IC8gMl0pLFxuICAgICAgICAgICAgUG9pbnQuZnJvbShbdGhpcy5wb3MueCArIHRoaXMuZGltLnggLyAyLCB0aGlzLnBvcy55IC0gdGhpcy5kaW0ueSAvIDJdKSxcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHYgb2YgdGhpcy5tZXNoKSByb3RhdGUodiwgUG9pbnQuZnJvbShbdGhpcy5wb3MueCwgdGhpcy5wb3MueV0pLCB0aGlzLmFuZ2xlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU2hhcGU8TWVzaCBleHRlbmRzIFBvaW50W10gPSBQb2ludFtdPiB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lc2g6IE1lc2gpIHt9XG5cbiAgICBwdWJsaWMgZ2V0IHZlcnRpY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNoLm1hcCgodikgPT4gUG9pbnQuZnJvbSh2LnRvQXJyYXkoKSkpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIHZlY3RvciBpbiAyRCBzcGFjZS5cbiAqIEluc3RhbmNlIG1ldGhvZHMgbXV0YXRlIHRoZSBpbnN0YW5jZSBpdHNlbGYsXG4gKiB3aGlsZSBzdGF0aWMgbWV0aG9kcyByZXR1cm4gYSBuZXcgdmVjdG9yLlxuICogQWxzbyBjYW4gcmVwcmVzZW50IGEgcG9pbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0geSBUaGUgeSBjb29yaW5kYXRlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgIH1cblxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgeWllbGQgdGhpcy54O1xuICAgICAgICB5aWVsZCB0aGlzLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGlzIGluc3RhbmNlJ3MgeCBhbmQgeSBjb29yZGluYXRlLlxuICAgICAqIEBzZWUgVmVjdG9yLm5lZ2F0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBuZWdhdGUoKSB7XG4gICAgICAgIHRoaXMueCA9IC10aGlzLng7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB2ZWN0b3Igb3Igc2NhbGFyIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHYgVmVjdG9yIG9yIHNjYWxhciB0byBhZGQuXG4gICAgICovXG4gICAgcHVibGljIGFkZCh2OiBWZWN0b3IgfCBudW1iZXIpIHtcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB2Lng7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdi55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ICs9IHY7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYSB2ZWN0b3Igb3Igc2NhbGFyIGZyb20gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gdiBWZWN0b3Igb3Igc2NhbGFyIHRvIHN1YnRyYWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJ0cmFjdCh2OiBWZWN0b3IgfCBudW1iZXIpIHtcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSB2Lng7XG4gICAgICAgICAgICB0aGlzLnkgLT0gdi55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54IC09IHY7XG4gICAgICAgICAgICB0aGlzLnkgLT0gdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIG9yIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiBWZWN0b3Igb3Igc2NhbGFyIHRvIG11bHRpcGx5IGJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBtdWx0aXBseSh2OiBWZWN0b3IgfCBudW1iZXIpIHtcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMueCAqPSB2Lng7XG4gICAgICAgICAgICB0aGlzLnkgKj0gdi55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54ICo9IHY7XG4gICAgICAgICAgICB0aGlzLnkgKj0gdjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIG9yIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiBWZWN0b3Igb3Igc2NhbGFyIHRvIGRpdmlkZSBieS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGl2aWRlKHY6IFZlY3RvciB8IG51bWJlcikge1xuICAgICAgICBpZiAodiBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICAgICAgaWYgKHYueCAhPSAwKSB0aGlzLnggLz0gdi54O1xuICAgICAgICAgICAgaWYgKHYueSAhPSAwKSB0aGlzLnkgLz0gdi55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHYgIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAvPSB2O1xuICAgICAgICAgICAgICAgIHRoaXMueSAvPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiBPdGhlciB2ZWN0b3IgdG8gdXNlLlxuICAgICAqIEBzZWUgVmVjdG9yLmNyb3NzXG4gICAgICovXG4gICAgcHVibGljIGRvdCh2OiBWZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiBPdGhlciB2ZWN0b3IgdG8gdXNlXG4gICAgICogQHNlZSBWZWN0b3IuZG90XG4gICAgICovXG4gICAgcHVibGljIGNyb3NzKHY6IFZlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdi55IC0gdGhpcy55ICogdi54O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWduaXR1ZGUgb3IgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbWFnbml0dWRlKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZG90KHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcyB2ZWN0b3IuXG4gICAgICovXG4gICAgcHVibGljIGdldCBub3JtYWxpemVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGUodGhpcy5tYWduaXR1ZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuZ2xlIHRoaXMgdmVjdG9yIHJlcHJlc2VudHMgaW4gcmFkaWFucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFuZ2xlKCkge1xuICAgICAgICByZXR1cm4gLU1hdGguYXRhbjIoLXRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmdsZSB0byB0aGUgb3RoZXIgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBhIFZlY3RvciB0byBjb21wYXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbmdsZVRvKGE6IFZlY3Rvcikge1xuICAgICAgICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKHRoaXMuZG90KGEpIC8gKHRoaXMubWFnbml0dWRlICogYS5tYWduaXR1ZGUpLCAxKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmVzIHRoaXMgdmVjdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYSB2ZWN0b3Igd2l0aG91dCBtdXRhdGluZyBpdC5cbiAgICAgKiBAcGFyYW0gdiBWZWN0b3IgdG8gbmVnYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbmVnYXRlKHY6IFZlY3Rvcikge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcigtdi54LCAtdi55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdmVjdG9yIG9yIHNjYWxhciB0byBhbm90aGVyIHdpdGhvdXQgbXV0YXRpbmcgaXQuXG4gICAgICogQHBhcmFtIGEgVmVjdG9yIHRvIG9wZXJhdGUgb24uXG4gICAgICogQHBhcmFtIGIgVmVjdG9yIG9yIG51bWJlciB0byBhZGQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhZGQoYTogVmVjdG9yLCBiOiBWZWN0b3IgfCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGIgaW5zdGFuY2VvZiBWZWN0b3IpIHJldHVybiBuZXcgVmVjdG9yKGEueCArIGIueCwgYS55ICsgYi55KTtcbiAgICAgICAgZWxzZSByZXR1cm4gbmV3IFZlY3RvcihhLnggKyBiLCBhLnkgKyBiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgYSB2ZWN0b3Igb3Igc2NhbGFyIGZyb20gYW5vdGhlciB3aXRob3V0IG11dGF0aW5nIGl0LlxuICAgICAqIEBwYXJhbSBhIFZlY3RvciB0byBvcGVyYXRlIG9uLlxuICAgICAqIEBwYXJhbSBiIFZlY3RvciBvciBudW1iZXIgdG8gc3VidHJhY3QuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdChhOiBWZWN0b3IsIGI6IFZlY3RvciB8IG51bWJlcikge1xuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFZlY3RvcikgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xuICAgICAgICBlbHNlIHJldHVybiBuZXcgVmVjdG9yKGEueCAtIGIsIGEueSAtIGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3Igb3Igc2NhbGFyIHdpdGhvdXQgbXV0YXRpbmcgaXQuXG4gICAgICogQHBhcmFtIGEgVmVjdG9yIHRvIG9wZXJhdGUgb24uXG4gICAgICogQHBhcmFtIGIgVmVjdG9yIG9yIG51bWJlciB0byBtdWx0aXBseS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IFZlY3RvciwgYjogVmVjdG9yIHwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChiIGluc3RhbmNlb2YgVmVjdG9yKSByZXR1cm4gbmV3IFZlY3RvcihhLnggKiBiLngsIGEueSAqIGIueSk7XG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBWZWN0b3IoYS54ICogYiwgYS55ICogYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciBvciBzY2FsYXIgd2l0aG91dCBtdXRhdGluZyBpdC5cbiAgICAgKiBAcGFyYW0gYSBWZWN0b3IgdG8gb3BlcmF0ZSBvbi5cbiAgICAgKiBAcGFyYW0gYiBWZWN0b3Igb3IgbnVtYmVyIHRvIGRpdmlkZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRpdmlkZShhOiBWZWN0b3IsIGI6IFZlY3RvciB8IG51bWJlcikge1xuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFZlY3RvcikgcmV0dXJuIG5ldyBWZWN0b3IoYS54IC8gYi54LCBhLnkgLyBiLnkpO1xuICAgICAgICBlbHNlIHJldHVybiBuZXcgVmVjdG9yKGEueCAvIGIsIGEueSAvIGIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkb3QgcHJvZHVjdCBvZiBib3RoIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgQSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgQW5vdGhlciB2ZWN0b3IuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkb3QoYTogVmVjdG9yLCBiOiBWZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3Jvc3MgcHJvZHVjdCBvZiBib3RoIHZlY3RvcnNcbiAgICAgKiBAcGFyYW0gYSBBIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiBBbm90aGVyIHZlY3Rvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyb3NzKGE6IFZlY3RvciwgYjogVmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbGxpZGVyIGZyb20gXCIuL0NvbGxpZGVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpITtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcbmNhbnZhcy53aWR0aCA9IDE2MDA7XG5jYW52YXMuaGVpZ2h0ID0gOTAwO1xuXG5jdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcblxuY29uc3QgYSA9IG5ldyBSZWN0YW5nbGUoNzUwIC0gY2FudmFzLndpZHRoIC8gMiwgNTAwIC0gY2FudmFzLmhlaWdodCAvIDIsIDE1MCwgMTAwLCAxKTtcbmNvbnN0IGIgPSBuZXcgUmVjdGFuZ2xlKDkwMCAtIGNhbnZhcy53aWR0aCAvIDIsIDQwMCAtIGNhbnZhcy5oZWlnaHQgLyAyLCAxMjUsIDE3NSwgMC41KTtcblxuY29uc3QgY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoYSwgYik7XG5cbmNvbnN0IEVQT0NIID0gRGF0ZS5ub3coKTtcblxubGV0IM6UID0gMDtcbmxldCDOqSA9IDA7XG5cbmZ1bmN0aW9uIHVwZGF0ZSjOszogbnVtYmVyKSB7XG4gICAgY29uc3QgzrggPSDOsyAvIDEwMDA7XG5cbiAgICDOlCA9IM64IC0gzqk7XG5cbiAgICDOqSA9IM64O1xuXG4gICAgY3R4LmNsZWFyUmVjdCgtY2FudmFzLndpZHRoLCAtY2FudmFzLmhlaWdodCwgY2FudmFzLndpZHRoICogMiwgY2FudmFzLmhlaWdodCAqIDIpO1xuXG4gICAgaWYgKGtleXMuZ2V0KFwiS2V5V1wiKSkgYi55IC09IDI1MCAqIM6UO1xuICAgIGlmIChrZXlzLmdldChcIktleUFcIikpIGIueCAtPSAyNTAgKiDOlDtcbiAgICBpZiAoa2V5cy5nZXQoXCJLZXlTXCIpKSBiLnkgKz0gMjUwICogzpQ7XG4gICAgaWYgKGtleXMuZ2V0KFwiS2V5RFwiKSkgYi54ICs9IDI1MCAqIM6UO1xuICAgIGlmIChrZXlzLmdldChcIktleVFcIikpIGIuYSAtPSAyLjUgKiDOlDtcbiAgICBpZiAoa2V5cy5nZXQoXCJLZXlFXCIpKSBiLmEgKz0gMi41ICogzpQ7XG5cbiAgICBpZiAoa2V5cy5nZXQoXCJBcnJvd1VwXCIpKSBhLnkgLT0gMjUwICogzpQ7XG4gICAgaWYgKGtleXMuZ2V0KFwiQXJyb3dMZWZ0XCIpKSBhLnggLT0gMjUwICogzpQ7XG4gICAgaWYgKGtleXMuZ2V0KFwiQXJyb3dEb3duXCIpKSBhLnkgKz0gMjUwICogzpQ7XG4gICAgaWYgKGtleXMuZ2V0KFwiQXJyb3dSaWdodFwiKSkgYS54ICs9IDI1MCAqIM6UO1xuICAgIGlmIChrZXlzLmdldChcIktleU9cIikpIGEuYSAtPSAyLjUgKiDOlDtcbiAgICBpZiAoa2V5cy5nZXQoXCJLZXlQXCIpKSBhLmEgKz0gMi41ICogzpQ7XG5cbiAgICBjb25zdCBjb2xsaWRpbmcgPSBjb2xsaWRlci5jb2xsaWRlKCk7XG5cbiAgICByZWN0KGEsIGNvbGxpZGluZyA/IFwicmVkXCIgOiBcImJsdWVcIik7XG5cbiAgICByZWN0KGIsIGNvbGxpZGluZyA/IFwicmVkXCIgOiBcImJsdWVcIik7XG59XG5cbnNldEludGVydmFsKCgpID0+IHVwZGF0ZShEYXRlLm5vdygpIC0gRVBPQ0gpLCAxMDAwIC8gNjApO1xuXG5mdW5jdGlvbiByZWN0KHJlY3Q6IFJlY3RhbmdsZSwgY29sb3I6IHN0cmluZykge1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5tb3ZlVG8ocmVjdC52ZXJ0aWNlc1swXVswXSwgcmVjdC52ZXJ0aWNlc1swXVsxXSk7XG5cbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiByZWN0LnZlcnRpY2VzLnNsaWNlKDEpKSBjdHgubGluZVRvKHgsIHkpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGN0eC5maWxsKCk7XG59XG5cbmNvbnN0IGtleXMgPSBuZXcgTWFwKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAga2V5cy5zZXQoZS5jb2RlLCB0cnVlKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBrZXlzLmRlbGV0ZShlLmNvZGUpO1xufSk7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUocDogUG9pbnQsIHQ6IFBvaW50LCBhOiBudW1iZXIpIHtcbiAgICBjb25zdCBzID0gTWF0aC5zaW4oYSk7XG4gICAgY29uc3QgYyA9IE1hdGguY29zKGEpO1xuXG4gICAgcFswXSAtPSB0WzBdO1xuICAgIHBbMV0gLT0gdFsxXTtcblxuICAgIGNvbnN0IG54ID0gcFswXSAqIGMgLSBwWzFdICogcztcbiAgICBjb25zdCBueSA9IHBbMF0gKiBzICsgcFsxXSAqIGM7XG5cbiAgICBwWzBdID0gbnggKyB0WzBdO1xuICAgIHBbMV0gPSBueSArIHRbMV07XG5cbiAgICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QodmVydGljZXM6IFZlY3RvcltdLCBheGlzOiBWZWN0b3IpIHtcbiAgICBjb25zdCBkb3RzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5kb3QoYXhpcykpO1xuXG4gICAgcmV0dXJuIFtNYXRoLm1pbiguLi5kb3RzKSwgTWF0aC5tYXgoLi4uZG90cyldIGFzIFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3Rpb24ocG9pbnQwOiBWZWN0b3IsIHBvaW50MTogVmVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IocG9pbnQxLnggLSBwb2ludDAueCwgcG9pbnQxLnkgLSBwb2ludDAueSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGdlcyh2ZXJ0aWNlczogVmVjdG9yW10pIHtcbiAgICByZXR1cm4gdmVydGljZXMubWFwKChfLCBpKSA9PiBkaXJlY3Rpb24odmVydGljZXNbaV0sIHZlcnRpY2VzWyhpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGhdKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcnRob2dvbmFsKHZlY3RvcjogVmVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnksIC12ZWN0b3IueCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVybGFwKHByb2plY3Rpb24xOiBbbnVtYmVyLCBudW1iZXJdLCBwcm9qZWN0aW9uMjogW251bWJlciwgbnVtYmVyXSkge1xuICAgIHJldHVybiBNYXRoLm1pbiguLi5wcm9qZWN0aW9uMSkgPD0gTWF0aC5tYXgoLi4ucHJvamVjdGlvbjIpICYmIE1hdGgubWluKC4uLnByb2plY3Rpb24yKSA8PSBNYXRoLm1heCguLi5wcm9qZWN0aW9uMSk7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=