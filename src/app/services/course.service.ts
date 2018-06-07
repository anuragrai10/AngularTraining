import { Injectable } from '@angular/core';
import {course} from '../course';
@Injectable()
export class CourseService {
  private courses:course[];

  constructor() { 
    this.courses=[
      {name:"Angular 4",
       image:"angular.png",
       description:"Google's single page app framework",
       price:20000
    },
    {
      name:"Asp.net",
      image:"asp.jpeg",
      description:"dot net language for server side code",
      price:15000
    },
    {
      name:"HTML",
      image:"html.png",
      description:"Web page template building",
      price:8000
      },
    {
      name:"Hadoop",
      image:"hadoop.png",
      description:"BigData",
      price:24000
    },
    {
      name:"CSS3",
      image:"css.jpeg",
      description:"styling specification for web pages",
      price:10000
    },
    {
      name:"Java",
      image:"java.jpeg",
      description:"object oriented programming",
      price:30000
    },
    {
      name:"sql",
      image:"sql.png",
      description:"database management",
      price:18000
    }
    ];
  }
  getCourses():course[]{
   return this.courses
  }
}
