import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule , TabsModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  UserService , CategoryService
} from './services/index';

import { 
  HeaderComponent, FooterComponent, ToastComponent, BreadcrumbComponent,
  DashboardComponent, LoginComponent, CategoryComponent, CategoryEditorComponent , HomeComponent , 
  UsersComponent , UserEditorComponent
} from './components/index';

import {
  DataTableModule, ButtonModule, BreadcrumbModule, GrowlModule, InputTextModule,PickListModule,
  InputTextareaModule, ConfirmDialogModule, DropdownModule,
  CalendarModule, CheckboxModule, SpinnerModule, DialogModule, SharedModule, EditorModule
} from 'primeng/primeng';


@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, ToastComponent, BreadcrumbComponent,
    DashboardComponent, LoginComponent, CategoryComponent, CategoryEditorComponent , HomeComponent,
    UsersComponent , UserEditorComponent
  ],
  imports: [
    HttpModule, BrowserAnimationsModule, 
    BrowserModule , BsDatepickerModule.forRoot(), TabsModule.forRoot(), AppRoutingModule, FormsModule,

    DataTableModule, ButtonModule, BreadcrumbModule, GrowlModule, InputTextModule,PickListModule,
  InputTextareaModule, ConfirmDialogModule, DropdownModule,
  CalendarModule, CheckboxModule, SpinnerModule, DialogModule, SharedModule, EditorModule
  ],
  providers: [UserService, CategoryService, ConfirmationService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
