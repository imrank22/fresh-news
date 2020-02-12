import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../api/news.service";
import { Router } from "@angular/router";
import { HostListener} from "@angular/core";
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
sources: any=[];
sourcename: any=[];

articles: any=[];
title: any=[];
name:any=[];
urlimage: any=[];
description: any=[];
datetime:any=[];
date: any=[];
time: any=[];
datenew: any=[];
timenew: any=[];
sourcehead: any=[];
updatedarticles: any=[];
scrollar: boolean = false;

  constructor(private newServ : NewsService, private toastr: ToastrService) { }

  ngOnInit() {
   
    this.newServ.getAllSources().subscribe(
      resp=>{
        this.sources= resp['sources'];
        console.log(this.sources)
       /*  for(let i=0; i<this.sources.length; i++){
          this.sourcename[i]= this.sources[i]['name'];
        } */
      },error=>{
        console.log(error);
      }
    );

    this.newServ.getAllArticles().subscribe(
      resp=>{
        this.articles= resp['articles'];
        console.log(this.articles)
        console.log(this.sourcehead)
        for(let i=0; i<this.articles.length; i++){
          this.title[i]= this.articles[i]['title'];
          this.name[i]= this.articles[i]['author']; 
          this.urlimage[i]= this.articles[i]['urlToImage']; 
          this.description[i]= this.articles[i]['description'];
          this.datetime[i]= this.articles[i]['publishedAt'] ;
          this.sourcehead= this.articles[0]['source'].name
        }
        
        console.log(this.updatedarticles)
      },error=>{
        console.log(error);
      }
    )
  }

  openNav() {
    console.log("in")
    document.getElementById("mySidenav").style.width = "20%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  searchBySource(source){
    this.newServ.getBySource(source).subscribe(
      resp=>{
        console.log(resp);
        this.articles= resp['articles'];
        console.log(this.articles)
        for(let i=0; i<this.articles.length; i++){
          this.title[i]= this.articles[i]['title'];
          this.name[i]= this.articles[i]['author']; 
          this.urlimage[i]= this.articles[i]['urlToImage']; 
          this.description[i]= this.articles[i]['description'];
          this.datetime[i]= this.articles[i]['publishedAt'] ;
          this.sourcehead= this.articles[0]['source'].name
        }
      },error=>{
        console.log(error);
      }
    )
  }
 @HostListener("window:scroll", [])
onScroll(): void {
if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
    console.log('inner Height',window.innerHeight);
    console.log('Scroll',window.scrollY);
    console.log('offset height',document.body.offsetHeight);
       console.log("you're at the bottom of the page")
       if(window.scrollY > 400){
        this.scrollar= true;
       }
       else{
         this.scrollar= false;
       }
    }
}
  loadDefault(){
    this.newServ.getAllArticles().subscribe(
      resp=>{
        this.articles= resp['articles'];
        console.log(this.articles)
        for(let i=0; i<this.articles.length; i++){
          this.title[i]= this.articles[i]['title'];
          this.name[i]= this.articles[i]['author']; 
          this.urlimage[i]= this.articles[i]['urlToImage']; 
          this.description[i]= this.articles[i]['description'];
          this.datetime[i]= this.articles[i]['publishedAt'] ;
        }
      },error=>{
        console.log(error);
      }
    )
  }

}
