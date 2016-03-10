import {Component} from "angular2/core";
import {CourseForm} from "../form/courseForm";
import {Table} from "../table/table";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";

@Component({    
    templateUrl: "./app/components/courseManager/courseManager.html",    
    directives: [Table, ROUTER_DIRECTIVES]
})



export class CourseManager {    
}