import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/index';
import { UserModel } from '../../models/user-model';
import { Message, ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
    selector: 'users-list',
    templateUrl: './users-list.html'
})
export class UsersComponent implements OnInit {

    public users: Array<UserModel> = [];
    public breadCrumbTitle: string;
    public screenName: string;
    public saveStatus: boolean = false;
    public toastMsgs: Message[] = [];
    public inProgress: boolean = false;

    constructor(private UserService: UserService, private confirmationService: ConfirmationService, private router?: Router) {
    };

    ngOnInit(): void {
        this.getUsers();
        this.breadCrumbTitle = 'Users';
        this.screenName = 'users';
    }

    ngAfterViewInit() {
        if (this.saveStatus) {
            this.toastMsgs.push({ severity: 'success', summary: 'Success', detail: 'Record Saved Succesfully.' });
        }
    }

    getUsers(): void {
        this.inProgress = true;
        this.users = this.UserService.getAll();
        this.inProgress = false;
    }

    open(id: number, screen: string) {
        this.router.navigate([screen + '/' + id]);
    }

    delete(model: UserModel): void {
        this.confirmationService.confirm({
            header: 'Delete Confirmation',
            message: 'Are you sure that you want to delete this Record?',
            accept: () => {
                this.inProgress = true;

                var status = this.UserService.delete(model.Id);

                if (status) {
                    this.toastMsgs.push({ severity: 'success', summary: 'Success', detail: 'Record deleted succesfully.' });
                } else {
                    this.toastMsgs.push({ severity: 'error', summary: 'Error', detail: 'Record did not deleted succesfully.' });
                }

                this.getUsers();
                this.inProgress = false;
            }
        });
    }

    showNotification(severity: string, message: string) {
        this.toastMsgs.push({ severity: severity, summary: severity, detail: message });
    }
}