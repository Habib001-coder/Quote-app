(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<app-quotes></app-quotes>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-details/quote-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 class=\"card-subtitle mb-2 text-muted\"> - {{quoty.author}} <span id=\"when\">Posted: {{quoty.datePosted|datePipe}} days ago.</span> </h6>\n<div class=\"container-fluid\" id=\"buttons\">\n  <button class=\"btn btn-sm btn-success\" (click)='upvote()'>{{quoty.likes}} <i class=\"fa fa-thumbs-up\" id=\"like\"></i></button> \n  <button class=\"btn btn-sm hate\" id=\"hate\" (click)='downvote()'>{{quoty.dislikes}} <i class=\"fa fa-thumbs-down\" id=\"dislike\"></i></button> \n  <button class=\"btn btn-sm btn-danger\" id=\"del\" (click)='deleteQuote(true)'><i class=\"fa fa-trash\" id=\"delete\"></i></button> \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quotes-form/quotes-form.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quotes-form/quotes-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2 class=\"heading\">Add Quote</h2>\n  <!-- <hr> -->\n  <form (ngSubmit)='addQuote() ;quotesForm.resetForm({})' #quotesForm='ngForm'>\n      <div class=\"form-group\">\n        <label for=\"name\">Your Name</label>\n        <input type=\"text\" required class=\"form-control\" id=\"name\" [(ngModel)]=\"quoted.name\" name=\"name\" #name='ngModel' minlength=\"3\">\n        <div *ngIf=\"name.invalid && name.dirty\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors.required\">\n              Your name is required.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            Name is at least 3 characters long.\n          </div>\n        </div> \n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Quote Tittle</label>\n        <input type=\"text\" required class=\"form-control\" id=\"title\" [(ngModel)]=\"quoted.title\" name=\"title\" #title='ngModel'>\n        <div *ngIf=\"title.invalid && title.dirty\" class=\"alert alert-danger\">\n          <div *ngIf=\"title.errors.required\">\n              Title is required.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Quote</label>\n        <textarea class=\"form-control\" id=\"quote\" rows=\"2\" required [(ngModel)]=\"quoted.quote\" name=\"quote\" #quote='ngModel'></textarea>\n        <div *ngIf=\"quote.invalid && quote.dirty\" class=\"alert alert-danger\">\n          <div *ngIf=\"quote.errors.required\">\n              Quote can not be empty.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Quote Author</label>\n        <input type=\"text\" required class=\"form-control\" id=\"author\"[(ngModel)]=\"quoted.author\" name=\"author\" #author='ngModel'>\n        <div *ngIf=\"title.invalid && title.dirty\" class=\"alert alert-danger\">\n          <div *ngIf=\"title.errors.required\">\n              Author Name can not be empty.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-sm btn-success\">Add Quote</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quotes/quotes.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quotes/quotes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\n  <h1>\n    {{ title | titlecase }}\n  </h1>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <app-quotes-form (add)=\"addedQuote($event)\"></app-quotes-form>\n      </div>\n      <div class=\"col-sm-9\">\n        <div class=\"all-cards\">\n          <div *ngFor=\"let quote of sortQuotes let i= index\" class=\"card\" style=\"width: 24rem;\"  >\n            <div class=\"card-body\">\n              <h4 class=\"card-title\" appHighlightQoute >{{quote.title}} {{quote.maxlikes}}<button (click)='displayInfo(i)' class=\"btn btn-info btn-sm\" id=\"quotes-button\" >See More</button></h4>\n              <p class=\"card-text\" id=\"param\">{{quote.quote}}</p>\n              <app-quote-details *ngIf='quote.showInfo' bind-quoty='quote' (isRead)='quoteDelete($event,i)'></app-quote-details>\n              <span class=\"card-subtitle mb-2\">Posted by: <span id=\"name\">{{quote.name}}</span><span id=\"date\">on: <span id=\"datecolor\">{{quote.datePosted|date:'short'}}</span></span></span>\n             \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _date_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-pipe.pipe */ "./src/app/date-pipe.pipe.ts");
/* harmony import */ var _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quotes-form/quotes-form.component */ "./src/app/quotes-form/quotes-form.component.ts");
/* harmony import */ var _highlight_qoute_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./highlight-qoute.directive */ "./src/app/highlight-qoute.directive.ts");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__["QuotesComponent"],
            _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__["QuoteDetailsComponent"],
            _date_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["DatePipePipe"],
            _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_10__["QuotesFormComponent"],
            _highlight_qoute_directive__WEBPACK_IMPORTED_MODULE_11__["HighlightQouteDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date-pipe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/date-pipe.pipe.ts ***!
  \***********************************/
/*! exports provided: DatePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipePipe", function() { return DatePipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DatePipePipe = class DatePipePipe {
    transform(value) {
        let today = new Date();
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(todayWithNoTime - value);
        const secondsInADay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && todayWithNoTime > value) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DatePipePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'datePipe'
    })
], DatePipePipe);



/***/ }),

/***/ "./src/app/highlight-qoute.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/highlight-qoute.directive.ts ***!
  \**********************************************/
/*! exports provided: HighlightQouteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightQouteDirective", function() { return HighlightQouteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HighlightQouteDirective = class HighlightQouteDirective {
    constructor(elem) {
        this.elem = elem;
    }
    onClicks() {
        this.textDeco("green");
    }
    onDoubleClicks() {
        this.textDeco("None");
    }
    textDeco(action) {
        this.elem.nativeElement.style.color = action;
    }
};
HighlightQouteDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], HighlightQouteDirective.prototype, "onClicks", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dblclick")
], HighlightQouteDirective.prototype, "onDoubleClicks", null);
HighlightQouteDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlightQoute]'
    })
], HighlightQouteDirective);



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#delete{\n  font-size: 20px;\n  margin-right: 2%;\n}\n#del{\n  float:right;\n}\n#like{\n  font-size: 16px;\n}\n#dislike{\n  font-size: 16px;\n}\n.hate{\n  margin-left: 10px;\n  background-color: brown;\n  color: white;\n}\nhr{\n  background-color: darkcyan;\n}\n#buttons{\n  margin-top: 5%;\n  margin-bottom: 10%;\n}\n#when{\n  float:right;\n  font-family: 'Handlee', cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1kZXRhaWxzL3F1b3RlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWxldGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbiNkZWx7XG4gIGZsb2F0OnJpZ2h0O1xufVxuI2xpa2V7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiNkaXNsaWtle1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaGF0ZXtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBjb2xvcjogd2hpdGU7XG59XG5ocntcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XG59XG4jYnV0dG9uc3tcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbiN3aGVue1xuICBmbG9hdDpyaWdodDtcbiAgZm9udC1mYW1pbHk6ICdIYW5kbGVlJywgY3Vyc2l2ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let QuoteDetailsComponent = class QuoteDetailsComponent {
    constructor() {
        this.isRead = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    deleteQuote(read) {
        this.isRead.emit(read);
    }
    upvote() {
        this.quoty.likes += 1;
    }
    downvote() {
        this.quoty.dislikes += 1;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteDetailsComponent.prototype, "quoty", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteDetailsComponent.prototype, "isRead", void 0);
QuoteDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-details',
        template: __webpack_require__(/*! raw-loader!./quote-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html"),
        styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
    })
], QuoteDetailsComponent);



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
// import { BrowserPlatformLocation } from '@angular/platform-browser';
class Quote {
    constructor(id, name, title, quote, author, datePosted, likes, dislikes) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.quote = quote;
        this.author = author;
        this.datePosted = datePosted;
        this.likes = likes;
        this.dislikes = dislikes;
        this.showInfo = false;
    }
}
Quote.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Date },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\n  color: white;\n  background: transparent;\n  font-weight: 570;\n}\nlabel{\n  color: black;\n  font-weight: 600;\n}\nhr{\n  width: 50%;\n  height: 2px;\n  background-color: green;\n}\n.heading{\n  color: white;\n  text-align: center;\n  padding-top: 2%;\n  margin: 2px;\n}\n.container-fluid{\n  background-color: rgba(0, 0, 0, 0.374);\n  border-radius: 4px;\n  padding-bottom: 5%;\n  box-shadow: 2px 2px 3px 2px black;\n  font-family: 'Architects Daughter', cursive;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGVzLWZvcm0vcXVvdGVzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3F1b3Rlcy1mb3JtL3F1b3Rlcy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogNTcwO1xufVxubGFiZWx7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmhye1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uaGVhZGluZ3tcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgbWFyZ2luOiAycHg7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzc0KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDJweCBibGFjaztcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJywgY3Vyc2l2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.ts ***!
  \******************************************************/
/*! exports provided: QuotesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesFormComponent", function() { return QuotesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



let QuotesFormComponent = class QuotesFormComponent {
    constructor() {
        this.quoted = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", "", new Date(), 0, 0);
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    addQuote() {
        this.add.emit(this.quoted);
        this.quoted = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", "", new Date(), 0, 0);
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuotesFormComponent.prototype, "add", void 0);
QuotesFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes-form',
        template: __webpack_require__(/*! raw-loader!./quotes-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/quotes-form/quotes-form.component.html"),
        styles: [__webpack_require__(/*! ./quotes-form.component.css */ "./src/app/quotes-form/quotes-form.component.css")]
    })
], QuotesFormComponent);



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  font-family: 'Special Elite', cursive;\n  color: white;\n  text-align: center;\n  font-weight: bolder;\n  padding-bottom: 2%;\n  padding-top: 2%;\n}\nh4{\n  font-family: 'Architects Daughter', cursive;\n}\nspan{\n  font-family: 'Architects Daughter', cursive;\n}\n.overlay{\n  background-color:darkgrey;\n  border-radius: 5px;\n  margin-top:4%;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-bottom: 5%;\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-bottom: 5%;\n}\n#name{\n  color:rgb(43, 214, 0);\n  font-weight: 700;\n }\n.all-cards{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#quotes-button{\n  float: right;\n}\n.card{\n  margin-bottom: 2%;\n  background-color: aliceblue;\n  box-shadow: 2px 2px 3px 2px black;\n}\n#date{\n  float: right;\n  font-size: 14px;\n}\n#datecolor{\n  color: green;\n  font-weight: 700;\n}\n.card-text{\n  font-family: 'Handlee', cursive;\n  font-weight: 570;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGVzL3F1b3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGVzL3F1b3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gIGZvbnQtZmFtaWx5OiAnU3BlY2lhbCBFbGl0ZScsIGN1cnNpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbmg0e1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInLCBjdXJzaXZlO1xufVxuc3BhbntcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJywgY3Vyc2l2ZTtcbn1cbi5vdmVybGF5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6NCU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuI25hbWV7XG4gIGNvbG9yOnJnYig0MywgMjE0LCAwKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiB9XG4uYWxsLWNhcmRze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSBcbiNxdW90ZXMtYnV0dG9ue1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY2FyZHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMnB4IGJsYWNrO1xufVxuI2RhdGV7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuI2RhdGVjb2xvcntcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNhcmQtdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdIYW5kbGVlJywgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDU3MDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



let QuotesComponent = class QuotesComponent {
    constructor() {
        this.title = 'welcome to quote app';
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Abdalah', 'Human spirit', 'Programming is super cool,its just someones passion in it.', 'Abdallah Habib', new Date(2021, 5, 16), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'Rony', 'Technology…', 'Technology… the knack of so arranging  that we don’t have to experience it.', 'Max Frisch', new Date(2021, 5, 16), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'Ahmed', 'The great myth', 'The great myth of our times is that technology is communication.', 'Libby Larsen', new Date(2021, 5, 16), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'Beatrice', 'Communication', 'Communications tools don’t get socially interesting until they get technologically boring.', 'Clay Shirky', new Date(2021, 5, 16), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'Arnold', 'Code and people', 'Programs must be written for people to read, and only incidentally for machines to execute.', 'Harold Abelson', new Date(2021, 5, 16), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](6, 'Alfred', 'Tech and life', 'For a list of all the ways technology has failed to improve the quality of life, please press three.', 'Alice Kahn', new Date(2021, 5, 16), 0, 0)
        ];
    }
    get sortQuotes() {
        return this.quotes.sort((a, b) => {
            return new Date(b.datePosted) - new Date(a.datePosted);
        });
    }
    addedQuote(quote) {
        let arraysize = this.quotes.length;
        quote.id = arraysize + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    }
    quoteDelete(isRead, index) {
        if (isRead) {
            let toDelete = confirm(`Are you sure you want to delete this Quote?`);
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }
    displayInfo(index) {
        this.quotes[index].showInfo = !this.quotes[index].showInfo;
    }
    ngOnInit() {
    }
};
QuotesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: __webpack_require__(/*! raw-loader!./quotes.component.html */ "./node_modules/raw-loader/index.js!./src/app/quotes/quotes.component.html"),
        styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
    })
], QuotesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Documents/moringa_core/Quote-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map