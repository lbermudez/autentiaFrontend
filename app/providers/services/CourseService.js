System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CourseService = (function () {
                function CourseService(http) {
                    this.http = http;
                    this.url = "http://localhost:8080/courses";
                    this.headers = new http_1.Headers;
                    this.http = http;
                    this.headers.append('Content-Type', 'application/json');
                }
                CourseService.prototype.countCourses = function (active) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.url + "/count/" + active).subscribe(function (res) {
                            resolve(res.json());
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                CourseService.prototype.getCourses = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get(_this.url + "/" + ACTIVES + "/" + ASC_SORT).subscribe(function (res) {
                            resolve(res.json());
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                CourseService.prototype.createCourse = function (course) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.post(_this.url, JSON.stringify(course), {
                            headers: _this.headers
                        }).subscribe(function (res) {
                            resolve(res);
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                CourseService.ACTIVES = true;
                CourseService.NOT_ACTIVES = false;
                CourseService.ASC_SORT = "asc";
                CourseService.DESC_SORT = "desc";
                CourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=CourseService.js.map