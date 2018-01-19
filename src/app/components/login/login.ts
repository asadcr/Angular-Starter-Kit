import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/index';
import { Message } from 'primeng/primeng';

@Component({
    templateUrl: './login.html'
})

export class LoginComponent implements OnInit {

    @ViewChild('username') username;
    @ViewChild('password') password;

    public model: UserModel = new UserModel();
    public passwordError: boolean;
    public loginError: boolean;
    public returnUrl: string;
    public toastMsgs: Message[] = [];

    constructor(private route: ActivatedRoute, public UserService: UserService, private router: Router) {
        this.route.queryParams.subscribe((params) => {
            this.returnUrl = params['returnUrl']|| '/dashboard';
        });
    }

    ngOnInit() {
        // reset login status
        this.UserService.logout();
    }

    processLogin(): void {
        this.passwordError = false;
        this.loginError = false;

        var result = this.UserService.login(this.model);
        if(!result)
        {
            this.toastMsgs.push({ severity: 'error', summary: 'Error', detail: 'Invalid username or password' });
        }
        else {
            this.router.navigateByUrl('');
        }
    }
}