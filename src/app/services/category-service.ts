import { Injectable, Output, EventEmitter } from '@angular/core';
import { CategoryModel } from '../models/category-model';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SelectItem } from 'primeng/primeng';
import { retry } from 'rxjs/operator/retry';

@Injectable()
export class CategoryService {

    //@Output() onLogout = new EventEmitter<any>();

    private categories : Array<CategoryModel> 
    
    constructor(public http: Http) {
        this.categories = new Array<CategoryModel>();

        var model = new CategoryModel(1, "Some", "Some");
        this.categories.push(model);
        var model = new CategoryModel(2, "Some", "Some");
        this.categories.push(model);
        var model = new CategoryModel(3, "Some", "Some");
        this.categories.push(model);
        var model = new CategoryModel(4, "Some", "Some");
        this.categories.push(model);
        var model = new CategoryModel(5, "Some", "Some");
        this.categories.push(model);
    }

    getAll(): CategoryModel[] {
        return this.categories;
    }

    findById(id: number): CategoryModel {
        return this.categories.find(a => a.Id == id);
    }

    save(model: CategoryModel): boolean {
        this.categories.push(model);
        return true;
    }

    update(model: CategoryModel): boolean {
        var item = this.categories.find(a => a == model);
        let index = this.categories.indexOf(item);
        this.categories[index] = model;
        return true;
    }

    delete(model: CategoryModel): boolean {
        this.categories = this.categories.filter(a => a == model);
        return true;
    }
}

