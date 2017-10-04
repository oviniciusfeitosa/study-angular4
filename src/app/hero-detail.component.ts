import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

// @Component Decorator
@Component({
    selector: 'hero-detail',
    template: `
                <div *ngIf="hero">
                    <h2>{{hero.name}} details!</h2>
                    <div>
                        <label>id: </label>{{hero.id}}
                    </div>
                    <div>
                        <label>name: </label>
                        <input [(ngModel)]="hero.name" placeholder="name" />
                    </div>
                </div>
              `
})

// export is used becouse every time it will be imported.
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        // switchMap is used to scenario with a request was made before and this Component was called by route again,
        // so it will cancel last request and make a new one.

        // `+params.get('id')` => Means the `id` parameter will come as a string so "+" Javascript Operator (plus) will
        // convert it to a number.
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }
}