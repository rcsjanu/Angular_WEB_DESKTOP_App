import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { UserGeneratorService } from 'src/service/random-user-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Random-User-Generator-App';
  redo = faRedo;
  UserInfo: any = [];
  isLoading: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService,
    private userService:UserGeneratorService) { }

  ngOnInit(): void {
    this.randomApiCall();
  }

  randomApiCall() {
    this.userService.randomUserGenerator().then((res:any)=>{
      this.isLoading = true;
      this.UserInfo = res['results'][0]
    }).catch(err=>{
      this.isLoading = false;
      console.log(err)
    })
  }
}
