import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ChildrenComponent } from './children/children.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    ChildrenComponent,
    SecondaryParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
