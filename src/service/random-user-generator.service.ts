import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserGeneratorService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    constructor(private http: HttpClient) { }

    randomUserGenerator() {
        return new Promise((resolve, reject) => {
            this.http.get(environment.randomAPIUrl, this.httpOptions).subscribe(
                (data: any) => {
                    resolve(data);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    }
}