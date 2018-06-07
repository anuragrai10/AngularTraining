import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { review } from '../../review';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews:review[];

  constructor(private rs:ReviewService) { 
    
  }

  ngOnInit() {
    this.rs.getReview().subscribe(
      (data:review[])=>{
        this.reviews=data;
      },
      (error)=>{
        alert('reviews not found');
      });
  }

}
