import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Material Modules
import { MaterialModule } from 'src/material.module';

// components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { UpdatepopupComponent } from './pages/updatepopup/updatepopup.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomepageComponent, UserlistComponent, UpdatepopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

    // Toaster
    ToastrModule.forRoot(),

    //To manage HTTP services
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
