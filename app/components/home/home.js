System.register(['angular2-chartist', "@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_chartist_1, core_1;
    var Home;
    return {
        setters:[
            function (angular2_chartist_1_1) {
                angular2_chartist_1 = angular2_chartist_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                    this.data = {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        series: [
                            [12, 9, 7, 8, 5],
                            [2, 1, 3.5, 7, 3],
                            [1, 3, 4, 5, 6]
                        ]
                    };
                    this.type = "Line";
                    this.options = null;
                }
                Home = __decorate([
                    core_1.Component({
                        selector: "app",
                        template: "\n  <h1>Mi app</h1>\n  <chartist\n     [data]=\"data\"\n     [type]=\"type\"\n     [options]=\"options\"\n     >\n   </chartist>\n  ",
                        directives: [angular2_chartist_1.ChartistComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map