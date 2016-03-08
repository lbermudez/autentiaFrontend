import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class TeacherService {
    private url: string = "http://localhost:8080/teachers";    
    constructor(private http: Http) {
        this.http = http;        
    }

    getTeachers() {
        return new Promise((resolve, reject) => {
            
            this.http.get(this.url).subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error);
                }
            )
        })
    }
}