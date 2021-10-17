"use strict";
exports.__esModule = true;
var RetosDeRepaso2_1 = require("./RetosDeRepaso2");
var Nokia3210 = new RetosDeRepaso2_1.Mobile("Nokia 3210", "3210", "Nokia", 5, "Blue", false, 1, 30);
var Iphone3G = new RetosDeRepaso2_1.Mobile("Iphone 3G", "3G", "Apple", 60, "Grey", false, 1, 50);
var SamsunGalaxy10 = new RetosDeRepaso2_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 125, "Black", true, 2, 300);
var myMobiles = [Nokia3210, Iphone3G, SamsunGalaxy10];
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobile = myMobiles_1[_i];
    console.log(mobile.printAll());
}
