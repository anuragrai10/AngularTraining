import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../course'
@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses:course[],pricetype: any): any {
    let temp=[];
    if(pricetype=="Heavily Priced"){
      for(let x in courses){
        if(courses[x].price>=19000)
        temp.push(courses[x]);
      }
      return temp;
    }
    else if(pricetype=="Moderately Priced"){
      for(let x in courses){
        if(courses[x].price>=12000&&courses[x].price<19000)
        temp.push(courses[x]);
      }
    
    return temp;
  }
  else if(pricetype=="Normally priced"){
    for(let x in courses){
      if(courses[x].price <12000)
      temp.push(courses[x]);
    }
    return temp;
  }
  else
  for(let x in courses) 
  temp.push(courses[x]);
  return temp;
  }
}

