import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthGaurd } from './auth-guards/auth.gaurds';
import { LandingPageComponent } from './user-auth/landing-page/landing-page.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { NavigationComponent } from './user-auth/navigation/navigation.component';
import { HeaderComponent } from './user-auth/header/header.component';
import { FooterComponent } from './user-auth/footer/footer.component';
import { SliderComponent } from './user-auth/slider/slider.component';
import { ImageGalleryComponent } from './user-auth/image-gallery/image-gallery.component';
import { ContentDisplayComponent } from './user-auth/content-display/content-display.component';
import { ContactUsComponent } from './user-auth/contact-us/contact-us.component';
import { HeaderNavbarComponent } from './user-auth/header-navbar/header-navbar.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UtilityModule } from './utility/utility.module';
//import {ToastModule} from "ng2-toastr";
//import {UserAuthModule} from "./user-auth/user-auth.module";
//import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAuthModule,
    UtilityModule
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
