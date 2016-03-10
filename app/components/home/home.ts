import {Component} from "angular2/core";
import {CourseForm} from "../forms/courseForm";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Table} from "../table/table";


@Component({
    selector: "my-app",
    templateUrl: "./app/components/home/home.html",    
    directives: [ROUTER_DIRECTIVES, Table]
})

@RouteConfig([    
    { path: '/courseForm', name: 'CourseForm', component: CourseForm }
])

export class HomePage {    
}