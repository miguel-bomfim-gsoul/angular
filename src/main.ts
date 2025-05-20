import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication display the content od the AppComponent on the screen
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
