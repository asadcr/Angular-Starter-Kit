import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/index';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class HeaderComponent {
    @Input()
    public isShow: boolean;

    @Input()
    public currentUser: any;

    @Input()
    public loginName: string;

    constructor(private router: Router, private UserService: UserService) {
    }

    isAdmin() : boolean
    {
        return localStorage.getItem('isAdmin') == 'true' ? true : false;
    }
    

    isEmpty(obj) {
        let hasOwnProperty = Object.prototype.hasOwnProperty;
        if (obj == null) return true;

        if (obj.length > 0) return false;
        if (obj.length === 0) return true;

        if (typeof obj !== "object") return true;

        for (let key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    }

    clearStorage() {
        this.UserService.logout();
        this.currentUser = [];
        this.router.navigate(['/login'])
    }
}