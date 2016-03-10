System.register(["angular2/core", "../table/table", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, table_1, router_1;
    var CourseManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CourseManager = (function () {
                function CourseManager() {
                }
                CourseManager = __decorate([
                    core_1.Component({
                        templateUrl: "./app/components/courseManager/courseManager.html",
                        directives: [table_1.Table, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseManager);
                return CourseManager;
            }());
            exports_1("CourseManager", CourseManager);
        }
    }
});
//# sourceMappingURL=courseManager.js.map