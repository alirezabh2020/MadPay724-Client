import { panelRoute } from "./routes/routes.routing";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./../app-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelComponent } from "./panel.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(panelRoute)
  ],
  declarations: [PanelComponent]
})
export class PanelModule {}
