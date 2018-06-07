import { Component, OnInit, Input } from '@angular/core';
import { course } from '../../../course';
import { getCurrentDebugContext } from '@angular/core/src/view/services';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('course') current:course;
  offer:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
