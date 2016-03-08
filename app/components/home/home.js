System.register(["angular2/core", "../../providers/services/CourseService", "angular2/http", "../forms/courseForm", "angular2/router", 'ag-grid-ng2/main'], function(exports_1, context_1) {
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
    var core_1, CourseService_1, http_1, courseForm_1, router_1, main_1;
    var HomePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CourseService_1_1) {
                CourseService_1 = CourseService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (courseForm_1_1) {
                courseForm_1 = courseForm_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            HomePage = (function () {
                function HomePage(courseService) {
                    var _this = this;
                    this.courseService = courseService;
                    this.courseService.getCourses().then(function (res) {
                        _this.courses = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                }
                HomePage = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "./app/components/home/home.html",
                        providers: [CourseService_1.CourseService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, main_1.AgGridNg2]
                    }),
                    router_1.RouteConfig([
                        { path: '/courseForm', name: 'CourseForm', component: courseForm_1.CourseForm }
                    ]), 
                    __metadata('design:paramtypes', [CourseService_1.CourseService])
                ], HomePage);
                return HomePage;
            }());
            exports_1("HomePage", HomePage);
        }
    }
});
//# sourceMappingURL=home.js.map