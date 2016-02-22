System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TemplateFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateFormComponent = (function () {
                function TemplateFormComponent() {
                }
                TemplateFormComponent.prototype.onSubmit = function (value) {
                    console.log(value);
                };
                TemplateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'temp-form',
                        template: "\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    <label for=\"mail\">mail</label>\n    <input ngControl=\"mail\" type=\"text\" id=\"mail\" required #mail=\"ngForm\">\n    <span class=\"error\" *ngIf=\"!email.valid\">not valid</span>\n        <label for=\"password\">pass</label>\n    <input ngControl=\"password\" type=\"text\" id=\"password\" required>\n        <label for=\"cpassword\">confirm</label>\n    <input ngControl=\"cpassword\" type=\"text\" id=\"cpassword\" required>\n    <button type=\"submit\">submit</button>\n    </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateFormComponent);
                return TemplateFormComponent;
            })();
            exports_1("TemplateFormComponent", TemplateFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUZW1wbGF0ZUZvcm1Db21wb25lbnQiLCJUZW1wbGF0ZUZvcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJUZW1wbGF0ZUZvcm1Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtnQkFtQkFDLENBQUNBO2dCQUhHRCx3Q0FBUUEsR0FBUkEsVUFBU0EsS0FBS0E7b0JBQ1ZFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBbEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxXQUFXQTt3QkFDcEJBLFFBQVFBLEVBQUNBLDRpQkFXUkE7cUJBQ0pBLENBQUNBOzswQ0FLREE7Z0JBQURBLDRCQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtZQW5CRCx5REFtQkMsQ0FBQSIsImZpbGUiOiJ0ZW1wZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMjIuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid0ZW1wLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+bWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmdDb250cm9sPVwibWFpbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgcmVxdWlyZWQgI21haWw9XCJuZ0Zvcm1cIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cIiFlbWFpbC52YWxpZFwiPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5wYXNzPC9sYWJlbD5cclxuICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjcGFzc3dvcmRcIj5jb25maXJtPC9sYWJlbD5cclxuICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY3Bhc3N3b3JkXCIgcmVxdWlyZWQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRm9ybUNvbXBvbmVudHtcclxuICAgIG9uU3VibWl0KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
