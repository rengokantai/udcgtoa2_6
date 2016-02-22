import {Component} from 'angular2/core';
import {DataFormComponent} from "./dataform.component";
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
<data-form></data-form>
    `,
    directives:[DataFormComponent]
})
export class AppComponent {

}