import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.html'
})
export class BreadcrumbComponent {
    public categoryId: number = 0;

    constructor(private route: ActivatedRoute, private router?: Router) { 
    }

    open(id: number, screen: string) {
        this.router.navigate([screen + '/' + id]);
    }

    @Input() title: string;
    @Input() screen: string;
    @Input() showAddButton: boolean;
    @Input() progressBarStatus: boolean;
}