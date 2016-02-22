System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DataFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataFormComponent = (function () {
                function DataFormComponent(_fBu) {
                    this._fBu = _fBu;
                    this.user = { mail: '', password: '' };
                }
                DataFormComponent.prototype.ngOnInit = function () {
                    this.mForm = this._fBu.group({
                        'mail': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.required],
                        'cpassword': ['', common_1.Validators.required]
                    });
                };
                DataFormComponent.prototype.onSubmit = function (form) {
                    console.log(this.mForm);
                };
                DataFormComponent = __decorate([
                    core_1.Component({
                        selector: 'data-form',
                        template: "\n    <form [ngFormModel]=\"mForm\"(ngSubmit)=\"onSubmit()\">\n    <label for=\"mail\">mail</label>\n    <input [ngFormControl]=\"mForm.controls['mail']\" type=\"text\" id=\"mail\">\n    <span class=\"error\" >not valid</span>\n        <label for=\"password\">pass</label>\n    <input [ngFormControl]=\"mForm.controls['password']\"  type=\"text\" id=\"password\" >\n     <span class=\"error\" >not valid</span>\n        <label for=\"cpassword\">confirm</label>\n    <input  [ngFormControl]=\"mForm.controls['cpassword']\" type=\"text\" id=\"cpassword\">\n     <span class=\"error\" >not valid</span>\n    <button type=\"submit\" >submit</button>\n    </form>\n    {{user.mail}}{{user.password}}\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataFormComponent);
                return DataFormComponent;
            })();
            exports_1("DataFormComponent", DataFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJEYXRhRm9ybUNvbXBvbmVudCIsIkRhdGFGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRGF0YUZvcm1Db21wb25lbnQubmdPbkluaXQiLCJEYXRhRm9ybUNvbXBvbmVudC5vblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBcUJJQSwyQkFBb0JBLElBQWdCQTtvQkFBaEJDLFNBQUlBLEdBQUpBLElBQUlBLENBQVlBO29CQUZwQ0EsU0FBSUEsR0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0EsRUFBRUEsRUFBQ0EsUUFBUUEsRUFBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0E7Z0JBSTNCQSxDQUFDQTtnQkFFREQsb0NBQVFBLEdBQVJBO29CQUNJRSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDekJBLE1BQU1BLEVBQUNBLENBQUNBLEVBQUVBLEVBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDL0JBLFVBQVVBLEVBQUNBLENBQUNBLEVBQUVBLEVBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDbkNBLFdBQVdBLEVBQUNBLENBQUNBLEVBQUVBLEVBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtxQkFDdkNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFDREYsb0NBQVFBLEdBQVJBLFVBQVNBLElBQUlBO29CQUNURyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQWxDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsV0FBV0E7d0JBQ3BCQSxRQUFRQSxFQUFDQSw4ckJBY1JBO3FCQUNKQSxDQUFDQTs7c0NBa0JEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBbkNBLEFBbUNDQSxJQUFBO1lBbkNELGlEQW1DQyxDQUFBIiwiZmlsZSI6ImRhdGFmb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8yMi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsQ29udHJvbEdyb3VwLFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidkYXRhLWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm1Gb3JtXCIobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgPGxhYmVsIGZvcj1cIm1haWxcIj5tYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJtRm9ybS5jb250cm9sc1snbWFpbCddXCIgdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiA+bm90IHZhbGlkPC9zcGFuPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPnBhc3M8L2xhYmVsPlxyXG4gICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm1Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCIgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiID5cclxuICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY3Bhc3N3b3JkXCI+Y29uZmlybTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgIFtuZ0Zvcm1Db250cm9sXT1cIm1Gb3JtLmNvbnRyb2xzWydjcGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjcGFzc3dvcmRcIj5cclxuICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiID5zdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIHt7dXNlci5tYWlsfX17e3VzZXIucGFzc3dvcmR9fVxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICB1c2VyPXttYWlsOicnLHBhc3N3b3JkOicnfTtcclxuICAgIG1Gb3JtOkNvbnRyb2xHcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZCdTpGb3JtQnVpbGRlcil7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55e1xyXG4gICAgICAgIHRoaXMubUZvcm0gPSB0aGlzLl9mQnUuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbWFpbCc6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ2NwYXNzd29yZCc6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tRm9ybSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
