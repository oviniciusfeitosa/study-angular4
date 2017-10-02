import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

RouterModule.forRoot([
    {
        path: 'heroes',
        // When call 'heroes' at base url '/' defined on index.html, the HeroesComponent will be called.
        component: HeroesComponent
    }
])

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // Declarations of HeroesComponent to make Angular recognize `<my-heroes>` tags.
        HeroesComponent
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
