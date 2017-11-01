"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Assignment2Component = (function () {
    function Assignment2Component() {
        this.userName = '';
        this.allowUserButton = false;
    }
    Assignment2Component.prototype.ngOnInit = function () {
    };
    Assignment2Component = __decorate([
        core_1.Component({
            selector: 'app-assignment2',
            templateUrl: './assignment2.component.html',
            styleUrls: ['./assignment2.component.css']
        })
    ], Assignment2Component);
    return Assignment2Component;
}());
exports.Assignment2Component = Assignment2Component;
