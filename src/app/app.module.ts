import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import { ReviewService } from './services/review.service';
import { CourseService } from './services/course.service';
import { EnquiryService } from './services/enquiry.service';
import { OverviewComponent } from './routes/home/overview/overview.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { CoursefilterPipe } from './pipes/coursefilter.pipe';

const route=[
  {path:"",component:HomeComponent},
  {path:"offices",component:OfficesComponent},
  {path:"offers",component:OffersComponent},
  {path:"vclass",component:VirtualclassComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"ncourses",component:NewcoursesComponent},
  {path:"cdetails/:ccode",component:OverviewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    SlideshowComponent,
    ContactformComponent,
    HomeComponent,
    OfficesComponent,
    ReviewsComponent,
    NewcoursesComponent,
    OffersComponent,
    VirtualclassComponent,
    CourselistComponent,
    CourseComponent,
    OverviewComponent,
    ReviewComponent,
    DiscountPipe,
    CoursefilterPipe
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),HttpClientModule,FormsModule
  ],
  providers: [CourseService,ReviewService,EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
