import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { FeatureProductSectionComponent } from './feature-product-section/feature-product-section.component';
import { NewProductSectionComponent } from './new-product-section/new-product-section.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    BlogSectionComponent,
    FeatureProductSectionComponent,
    NewProductSectionComponent,
    BannerSectionComponent,
    SliderSectionComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
