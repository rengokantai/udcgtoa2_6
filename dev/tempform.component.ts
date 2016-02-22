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
    <span class="error" *ngIf="!email.valid">not valid</span>
        <label for="password">pass</label>
    <input ngControl="password" type="text" id="password" required>
        <label for="cpassword">confirm</label>
    <input ngControl="cpassword" type="text" id="cpassword" required>
    <button type="submit">submit</button>
    </form>
    `
})
export class TemplateFormComponent{
    onSubmit(value) {
        console.log(value);
    }
}