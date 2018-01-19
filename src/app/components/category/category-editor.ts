import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/index';
import { CategoryModel } from '../../models/category-model';
import { Message, SelectItem } from 'primeng/primeng'

@Component({
    templateUrl: './category-editor.html',
    selector: 'category-editor'
})
export class CategoryEditorComponent implements OnInit {
    public Id: number;
    public minDate : Date = new Date(2017, 5, 10);
    public maxDate : Date = new Date(2018, 9, 15);
    public model: CategoryModel;
    public mode: string = 'edit';
    public dropdownCategories: SelectItem[];
    public isSaved: boolean = false;
    public breadCrumbTitle: string;
    public screenName: string;
    public toastMsgs: any[] = [];
    public inProgress: boolean = false;

    @Input() overlay: boolean = false;

    constructor(private route: ActivatedRoute, private CategoryService: CategoryService, private router: Router) {
        this.route.params.subscribe((params) => {
            this.Id = params['id'];
        });
    }

    ngOnInit(): void {

        this.inProgress = true;
        if (this.Id != 0) {
            this.model = this.CategoryService.findById(this.Id);
        }
        else {
            this.mode = 'add';
            this.model = new CategoryModel(0, "", "");
        }
        this.inProgress = false;

        this.breadCrumbTitle = 'Categories- ' + (this.mode == 'edit' ? 'Edit' : 'Add');
        this.screenName = 'category';
    }

    save(): void {
        this.inProgress = true;

        if (this.model.Id == 0) {
            this.isSaved = this.CategoryService.save(this.model);
        } else {
            this.isSaved = this.CategoryService.update(this.model);
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