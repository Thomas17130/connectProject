import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { FilesComponent } from './_pages/files/files.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { LoginComponent } from './auth/login/login.component';
import { InputComponent } from './_components/input/input.component';
import { ButtonComponent } from './_components/button/button.component';
import { CheckboxComponent } from './_components/checkbox/checkbox.component';
import { MessageErrorComponent } from './_components/message-error/message-error.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ActivityComponent,
    FilesComponent,
    EbooksComponent,
    SettingsComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    MessageErrorComponent,
    AuthComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
