import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ScreenComponent } from './screen/screen.component';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    HomeComponent,
    RepoComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
