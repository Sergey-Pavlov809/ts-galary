"use strict";
exports.__esModule = true;
var Image_1 = require("./Image");
var first_jpg_1 = require("../img/volcano/first.jpg");
var second_jpg_1 = require("../img/volcano/second.jpg");
var third_jpg_1 = require("../img/volcano/third.jpg");
var fourth_jpg_1 = require("../img/volcano/fourth.jpg");
var fifth_jpg_1 = require("../img/volcano/fifth.jpg");
var first_jpg_2 = require("../img/sky/first.jpg");
var second_jpg_2 = require("../img/sky/second.jpg");
var fifth_jpg_2 = require("../img/sky/fifth.jpg");
function getImgSrc() {
    var createImg = function (src, classList) {
        if (classList === void 0) { classList = []; }
        var img = document.createElement('img');
        for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
            var className = classList_1[_i];
            img.classList.add(className);
        }
        img.setAttribute('src', src);
        return img;
    };
    return [
        {
            sources: [first_jpg_1["default"], second_jpg_1["default"], third_jpg_1["default"], fourth_jpg_1["default"], fifth_jpg_1["default"]],
            cathegory: 'cars'
        },
        {
            sources: [first_jpg_2["default"], second_jpg_2["default"], second_jpg_2["default"], second_jpg_2["default"], fifth_jpg_2["default"]],
            cathegory: 'sky'
        }
    ].map(function (obj) {
        var arr = [];
        for (var _i = 0, _a = obj.sources; _i < _a.length; _i++) {
            var src = _a[_i];
            arr.push(new Image_1["default"](createImg(src, ['preview-image']), obj.cathegory));
        }
        return arr;
    });
}
exports["default"] = getImgSrc;
