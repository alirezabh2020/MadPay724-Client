import { RegisterComponent } from "./../register/register.component";
import { LoginComponent } from "./../login/login.component";
import { AuthComponent } from "./../auth.component";
import { Routes, RouterModule } from "@angular/router";

export const authRoute: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
  // { path: "register", component: RegisterComponent, pathMatch: "full" }
];
