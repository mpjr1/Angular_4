"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ServersComponent = (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'No server was created!';
        this.serverName = 'Testserver';
        this.serverCreated = false;
        this.servers = ['Testserver', 'Testserver 2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created!';
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        core_1.Component({
            selector: 'app-servers',
            templateUrl: './servers.component.html',
            styleUrls: ['./servers.component.css']
        })
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;
