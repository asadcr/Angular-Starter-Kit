import { Injectable, EventEmitter, Output } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

    //@Output() onLogout = new EventEmitter<any>();
    @Output() onUserChange = new EventEmitter<any>();

    private users : Array<UserModel> 
    
    constructor(public http: Http) {
        this.users = new Array<UserModel>();

        var model = new UserModel(1, "Some", "Some");
        this.users.push(model);
        var model = new UserModel(2, "Some", "Some");
        this.users.push(model);
        var model = new UserModel(3, "Some", "Some");
        this.users.push(model);
        var model = new UserModel(4, "Some", "Some");
        this.users.push(model);
        var model = new UserModel(5, "Some", "Some");
        this.users.push(model);
    }

    getAll(): UserModel[] {
        return this.users;
    }

    findById(id: number): UserModel {
        return this.users.find(a => a == a);
    }

    save(model: UserModel): boolean {
        this.users.push(model);
        return true;
    }

    update(model: UserModel): boolean {
        var item = this.users.find(a => a == a);
        let index = this.users.indexOf(item);
        this.users[index] = model;
        return true;
    }

    delete(id: number): boolean {
        this.users = this.users.filter(a => a.Id != id);
        return true;
    }

    login(model: UserModel) : Boolean {
        if (model.Username == "admin" && model.Password == "admin")
        {
            let encodedString = btoa(model.Username + ":" + model.Password);
            localStorage.setItem('userData', encodedString);
            return true;
        }
        else return false;
    }

    logout() {
        localStorage.clear();
    }
}