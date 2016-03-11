import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";

@Injectable()
export class CourseService {
    static ACTIVES: boolean = true;
    static NOT_ACTIVES: boolean = false;
    static ASC_SORT: string = "asc";
    static DESC_SORT: string = "desc";

    private url: string = "http://localhost:8080/courses";
    private headers: Headers = new Headers;

    constructor(private http: Http) {
        this.http = http;
        this.headers.append('Content-Type', 'application/json');
    }

    countCourses(active: boolean) {
        return new Promise((resolve, reject) => {

            this.http.get(this.url + "/count/" + active).subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error);
                }
            )
        })
    }

    getCourses() {
        return new Promise((resolve, reject) => {
            
            this.http.get(this.url + "/" + ACTIVES + "/" + ASC_SORT).subscribe(
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