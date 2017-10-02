import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                // When call 'heroes' at base url '/' defined on index.html, the HeroesComponent will be called.
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        // Declarations of HeroesComponent to make Angular recognize `<my-heroes>` tags.
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        // Teaching Injector do make instance of HeroService
        // Imported becouse HeroService will be visible on every other view.
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}