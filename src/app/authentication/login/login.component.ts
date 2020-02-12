import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../api/news.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private newsServ : NewsService, private router: Router ) { }

  ngOnInit() {
    this.newsServ.getAllSources().subscribe(
      resp=>{
        console.log("Soruces")
        console.log(resp);
      },error=>{
        console.log(error);
      }
    );

    this.newsServ.getAllArticles().subscribe(
      resp=>{
        console.log("Articles")
        console.log(resp);
      },error=>{
        console.log(error);
      }
    )
  }

  logIn(){
    this.router.navigate(['home'])
  }

}
