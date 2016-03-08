import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";

@Injectable()
export class CourseService {
    private url: string = "http://localhost:8080/courses";
    private headers: Headers = new Headers;
    constructor(private http: Http) {
        this.http = http;
        this.headers.append('Content-Type', 'application/json');
    }

    getCourses() {
        return new Promise((resolve, reject) => {
            
            this.http.get(this.url + "/true/asc").subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error);
                }
            )
        })
    }

    createCourse(course) {
        return new Promise((resolve, reject) => {
            this.http.post(
                this.url,
                //'title=' + course.title + '&hours=' + course.hours + '&teacherId=' + course.teacher + '&level=' + course.level + '&active=' + course.active,
                JSON.stringify(course),
                {
                    headers: this.headers
                }
            ).subscribe(
                res => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
            )
        })
    }
}