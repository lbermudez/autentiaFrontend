System.register(["angular2/core", "angular2/common", "../../providers/services/CourseService", "../../providers/services/TeacherService", "angular2/http", "../../classes/Model"], function(exports_1, context_1) {
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
    var core_1, common_1, CourseService_1, TeacherService_1, http_1, Model_1;
    var CourseForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (CourseService_1_1) {
                CourseService_1 = CourseService_1_1;
            },
            function (TeacherService_1_1) {
                TeacherService_1 = TeacherService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }],
        execute: function() {
            CourseForm = (function () {
                function CourseForm(courseService, teacherService, builder) {
                    this.levels = ['', 'BASICO', 'INTERMEDIO', 'AVANZADO'];
                    this.courseService = courseService;
                    this.teacherService = teacherService;
                    this.courseForm = builder.group({
                        active: ["", common_1.Validators.compose([])],
                        teacher: ["", common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        title: ["", common_1.Validators.compose([
                                common_1.Validators.required, common_1.Validators.maxLength(100)
                            ])],
                        level: ["", common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        hours: ["", common_1.Validators.compose([
                                common_1.Validators.required
                            ])]
                    });
                    this.pupulateTeachers();
                }
                CourseForm.prototype.pupulateTeachers = function () {
                    var _this = this;
                    this.teacherService.getTeachers().then(function (res) {
                        _this.teachers = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                };
                CourseForm.prototype.createCourse = function (f) {
                    var teacher = new Model_1.Teacher(f.teacher);
                    var course = new Model_1.Course(f.title, f.hours, teacher, f.level, f.active);
                    this.courseService.createCourse(course).then(function (success) {
                        console.log(success);
                    }, function (error) {
                        console.log(error);
                    });
                };
                CourseForm = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "./app/components/forms/courseForm.html",
                        directives: [common_1.FORM_DIRECTIVES],
                        providers: [CourseService_1.CourseService, TeacherService_1.TeacherService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [CourseService_1.CourseService, TeacherService_1.TeacherService, common_1.FormBuilder])
                ], CourseForm);
                return CourseForm;
            }());
            exports_1("CourseForm", CourseForm);
        }
    }
});
//# sourceMappingURL=courseForm.js.map