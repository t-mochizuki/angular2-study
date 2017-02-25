import { Component } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
    status: string;

    constructor() {
        this.status = 'child components';
    }
}
