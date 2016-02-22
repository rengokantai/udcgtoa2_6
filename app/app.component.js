System.register(['angular2/core', "./tempform.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tempform_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tempform_component_1_1) {
                tempform_component_1 = tempform_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<temp-form></temp-form>\n    ",
                        directives: [tempform_component_1.TemplateFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQVNBQyxDQUFDQTtnQkFUREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFDQSxpQ0FFUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLDBDQUFxQkEsQ0FBQ0E7cUJBQ3JDQSxDQUFDQTs7aUNBR0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FUQSxBQVNDQSxJQUFBO1lBVEQsdUNBU0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1RlbXBsYXRlRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vdGVtcGZvcm0uY29tcG9uZW50XCI7XHJcbi8vcGFzcyBbbXluYW1lXSBmcm9tIHBhcmVudCBjb21wb25lbnQgdG8gY2hpbGQgY29tcG9uZW50LmNoaWxkIGNvbXBvbmVudCByZWNlaXZlIGRhdGEgZnJvbSBbaW5wdXRdXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG48dGVtcC1mb3JtPjwvdGVtcC1mb3JtPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W1RlbXBsYXRlRm9ybUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
