import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup} from "angular2/common";
import {CourseService} from "../../providers/services/CourseService";
import {TeacherService} from "../../providers/services/TeacherService";
import {HTTP_PROVIDERS} from "angular2/http";
import {Course, Teacher} from "../../classes/Model";

@Component({
    selector: "my-app",
    templateUrl: "./app/components/forms/courseForm.html",
    directives: [FORM_DIRECTIVES],
    providers: [CourseService, TeacherService, HTTP_PROVIDERS]
})

export class CourseForm {

    courseForm: ControlGroup;    
    courseService: CourseService;
    teacherService: TeacherService;
    levels = ['', 'BASICO', 'INTERMEDIO', 'AVANZADO'];
    teachers;

    constructor(courseService: CourseService, teacherService: TeacherService, builder: FormBuilder) {
		this.courseService = courseService;
		this.teacherService = teacherService;
        this.courseForm = builder.group({        	
			active: ["", Validators.compose(
                []
            )], 
			teacher: ["", Validators.compose(
                [
                    Validators.required
                ]
            )], 
            title: ["", Validators.compose(
                [
                    Validators.required, Validators.maxLength(100)
                ]
            )],            
            level: ["", Validators.compose(
                [
                    Validators.required
                ]
            )],
            hours: ["", Validators.compose(
                [
                    Validators.required
                ]
            )]
        })
        this.pupulateTeachers();        
    }

    private pupulateTeachers() {		
		this.teacherService.getTeachers().then(
            (res) => {
                this.teachers = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }

    createCourse(f) {
		let teacher = new Teacher(f.teacher);
		let course = new Course(f.title, f.hours, teacher, f.level, f.active);

		this.courseService.createCourse(course).then(
            (success) => {
                console.log(success);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}
