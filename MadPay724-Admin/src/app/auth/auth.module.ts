import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { authRoute } from "./routes/routes.routing";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(authRoute)
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {}
