import { RouterModule } from "@angular/router";
import { PanelModule } from "./panel/panel.module";
import { LoginModule } from "./login/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { adminRoute } from "../app/routes/routes.routing";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(adminRoute),
    LoginModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
