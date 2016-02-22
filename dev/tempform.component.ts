/**
 * Created by Hernan Y.Ke on 2016/2/22.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'temp-form',
    template:`
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
    <label for="mail">mail</label>
    <input ngControl="mail" type="text" id="mail" required #mail="ngForm">
    <span class="error" *ngIf="!mail.valid">not valid</span>
        <label for="password">pass</label>
    <input ngControl="password" type="text" id="password" required #password="ngForm">
     <span class="error" *ngIf="!password.valid">not valid</span>
        <label for="cpassword">confirm</label>
    <input ngControl="cpassword" type="text" id="cpassword" required #cpassword="ngForm">
     <span class="error" *ngIf="!cpassword.valid">not valid</span>
    <button type="submit" [disabled]="!f.valid||password.value!==cpassword.value">submit</button>
    </form>
    {{user.mail}}{{user.password}}
    `
})
export class TemplateFormComponent{
    user={mail:'',password:''};
    onSubmit(form) {
        this.user.mail=form.value['mail'];
        this.user.password=form.controls['password'].value;
    }
}