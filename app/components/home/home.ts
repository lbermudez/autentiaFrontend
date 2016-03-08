import {Component} from "angular2/core";
import {CourseService} from "../../providers/services/CourseService";
import {HTTP_PROVIDERS} from "angular2/http";
import {CourseForm} from "../forms/courseForm";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: "my-app",
    templateUrl: "./app/components/home/home.html",
    providers: [CourseService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, AgGridNg2]
})

@RouteConfig([    
    { path: '/courseForm', name: 'CourseForm', component: CourseForm }
])

export class HomePage {
    courseService: CourseService;
    courses: Array<Object>;

    constructor(courseService: CourseService) {
        this.courseService = courseService;

        this.courseService.getCourses().then(
            (res) => {
                this.courses = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }
}