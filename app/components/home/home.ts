import {Component} from "angular2/core";
import {CourseForm} from "../form/courseForm";
import {CourseManager} from "../courseManager/courseManager";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: "my-app",
    templateUrl: "./app/components/home/home.html",    
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
		{ path: '/', name: 'root', redirectTo: ['/CourseManager'] },    
		{ path: '/courseManager', name: 'CourseManager', component: CourseManager },	
 		{ path: '/courseForm', name: 'CourseForm', component: CourseForm }
])

export class HomePage {    
}