import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { AllAnswersComponent } from './all-answers/all-answers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnswersService } from './app.service';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { MediaAuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("342977168144-ke1sl5vk8klvkiq57s40g9uo3ua27i6n.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("112914639505417")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MyAnswerComponent,
    AllAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    MediaAuthService,
    AuthGuard,
    AnswersService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
