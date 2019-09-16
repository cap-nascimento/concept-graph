import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphCanvasComponent } from './graph-canvas/graph-canvas.component';
import { GraphParamComponent } from './graph-param/graph-param.component';
import { GraphAlgoComponent } from './graph-algo/graph-algo.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphCanvasComponent,
    GraphParamComponent,
    GraphAlgoComponent
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
