/**
 * Created by Hernan Y.Ke on 2016/2/22.
 */
import {Component,OnInit} from 'angular2/core';
import {FormBuilder,ControlGroup,Validators} from 'angular2/common';

@Component({
    selector:'data-form',
    template:`
    <form [ngFormModel]="mForm"(ngSubmit)="onSubmit()">
    <label for="mail">mail</label>
    <input [ngFormControl]="mForm.controls['mail']" type="text" id="mail" #mail="ngForm">
    <span class="error" *ngIf="!mail.valid" >not valid</span>
        <label for="password">pass</label>
    <input [ngFormControl]="mForm.controls['password']"  type="text" id="password" #password="ngForm" >
     <span class="error" *ngIf="!password.valid"  >not valid</span>
        <label for="cpassword">confirm</label>
    <input  [ngFormControl]="mForm.controls['cpassword']" type="text" id="cpassword" #cpassword="ngForm">
     <span class="error" *ngIf="!cpassword.valid" >not valid</span>
    <button type="submit" >submit</button>
    </form>
    {{user.mail}}{{user.password}}
    `
})
export class DataFormComponent implements OnInit{
    user={mail:'',password:''};
    mForm:ControlGroup;
    constructor(private _fBu:FormBuilder){

    }

    ngOnInit():any{
        this.mForm = this._fBu.group({
            'mail':['',Validators.required],
            'password':['',Validators.required],
            'cpassword':['',Validators.required]
        });
    }
    onSubmit(form) {
        //console.log(this.mForm);
        this.user=this.mForm.value;
    }
}