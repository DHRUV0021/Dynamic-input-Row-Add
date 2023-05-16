import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { ToastrModule } from 'ngx-toastr';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,  
    BrowserAnimationsModule,  
    ToastrModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title1!:string;  
  title2!:string;  
  title3!:string;  
 }

