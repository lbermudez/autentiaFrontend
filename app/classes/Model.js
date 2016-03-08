System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Course, Teacher;
    return {
        setters:[],
        execute: function() {
            Course = (function () {
                function Course(title, hours, teacher, level, active) {
                    this.title = title;
                    this.hours = hours;
                    this.teacher = teacher;
                    this.level = level;
                    this.active = active;
                }
                Course.prototype.getTitle = function () {
                    return this.title;
                };
                Course.prototype.getHours = function () {
                    return this.hours;
                };
                Course.prototype.getTeacher = function () {
                    return this.teacher;
                };
                Course.prototype.getLevel = function () {
                    return this.level;
                };
                Course.prototype.isActive = function () {
                    return this.active;
                };
                return Course;
            }());
            exports_1("Course", Course);
            Teacher = (function () {
                function Teacher(id, name, lastName1, lastName2) {
                    this.id = id;
                    this.name = name;
                    this.lastName1 = lastName1;
                    this.lastName2 = lastName2;
                }
                Teacher.prototype.getName = function () {
                    return this.name;
                };
                Teacher.prototype.getLastName1 = function () {
                    return this.lastName1;
                };
                Teacher.prototype.getApellido2 = function () {
                    return this.lastName2;
                };
                return Teacher;
            }());
            exports_1("Teacher", Teacher);
        }
    }
});
//# sourceMappingURL=Model.js.map