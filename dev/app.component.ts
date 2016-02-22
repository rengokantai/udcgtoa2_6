import {Component} from 'angular2/core';
import {TemplateFormComponent} from "./tempform.component";
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
<temp-form></temp-form>
    `,
    directives:[TemplateFormComponent]
})
export class AppComponent {

}