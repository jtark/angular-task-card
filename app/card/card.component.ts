import {Component} from '@angular/core';

@Component({
    moduleId: module.id, // used to resolve the below URLs relative to this folder. Related to CommonJS.
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent{}