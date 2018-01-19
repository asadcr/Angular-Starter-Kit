import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/index';
import { CategoryModel } from '../../models/category-model';
import { Message, ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
    selector: 'category-list',
    templateUrl: './category-list.html'
})
export class CategoryComponent implements OnInit {

    public categories: Array<CategoryModel> = [];
    public breadCrumbTitle: string;
    public screenName: string;
    public saveStatus: boolean = false;
    public toastMsgs: Message[] = [];
    public inProgress: boolean = false;

    constructor(private CategoryService: CategoryService, private confirmationService: ConfirmationService, private router?: Router) {
    };

    ngOnInit(): void {
        this.getCategories();
        this.breadCrumbTitle = 'Categories';
        this.screenName = 'category';
    }

    ngAfterViewInit() {
        if (this.saveStatus) {
            this.toastMsgs.push({ severity: 'success', summary: 'Success', detail: 'Record Saved Succesfully.' });
        }
    }

    getCategories(): void {
        this.inProgress = true;
        this.categories = this.CategoryService.getAll();
        this.inProgress = false;
    }

    open(id: number, screen: string) {
        this.router.navigate([screen + '/' + id]);
    }

    delete(model: CategoryModel): void {
        this.confirmationService.confirm({
            header: 'Delete Confirmation',
            message: 'Are you sure that you want to delete this Record?',
            accept: () => {
                this.inProgress = true;

                var status = this.CategoryService.delete(model);

                if (status) {
                    this.toastMsgs.push({ severity: 'success', summary: 'Success', detail: 'Record deleted succesfully.' });
                } else {
                    this.toastMsgs.push({ severity: 'error', summary: 'Error', detail: 'Record did not deleted succesfully.' });
                }

                this.getCategories();
                this.inProgress = false;

            }
        });
    }

    showNotification(severity: string, message: string) {
        this.toastMsgs.push({ severity: severity, summary: severity, detail: message });
    }
}