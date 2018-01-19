import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/index';
import { UserModel } from '../../models/user-model';
import { Message, SelectItem } from 'primeng/primeng'

@Component({
    templateUrl: './users-editor.html',
    selector: 'users-editor'
})
export class UserEditorComponent implements OnInit {
    public Id: number;
    public minDate : Date = new Date(2017, 5, 10);
    public maxDate : Date = new Date(2018, 9, 15);
    public model: UserModel;
    public mode: string = 'edit';
    public dropdownCategories: SelectItem[];
    public isSaved: boolean = false;
    public breadCrumbTitle: string;
    public screenName: string;
    public toastMsgs: any[] = [];
    public inProgress: boolean = false;

    @Input() overlay: boolean = false;

    constructor(private route: ActivatedRoute, private UserService: UserService, private router: Router) {
        this.route.params.subscribe((params) => {
            this.Id = params['id'];
        });
    }

    ngOnInit(): void {

        this.inProgress = true;
        if (this.Id != 0) {
            this.model = this.UserService.findById(this.Id);
        }
        else {
            this.mode = 'add';
            this.model = new UserModel(0, "", "");
        }
        this.inProgress = false;

        this.breadCrumbTitle = 'Categories- ' + (this.mode == 'edit' ? 'Edit' : 'Add');
        this.screenName = 'users';
    }

    save(): void {
        this.inProgress = true;

        if (this.model.Id == 0) {
            this.isSaved = this.UserService.save(this.model);
        } else {
            this.isSaved = this.UserService.update(this.model);
        }

        if (this.isSaved) {
            this.toastMsgs.push({ severity: 'success', summary: 'Success', detail: 'Success in saving item.' });
            localStorage.setItem("saveStatus", "true");
            this.router.navigate([this.screenName]);
        } else {
            this.toastMsgs.push({ severity: 'error', summary: 'Error', detail: 'Error in saving item.' });
            this.inProgress = false;
        }
    }
}