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

module.exports = "<router-outlet></router-outlet>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashborad/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashborad/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<body>\n<div class=\"gk\">\n<marquee direction=\"left\">$@**...Online Lecture Management System...**@$</marquee>\n</div>\n<div class=\"gk1\">\n    <marquee direction=\"left\">Online Lecture Images</marquee>\n    <marquee direction=\"up\" ><img src=\"../assets/img/online12.jpg\" height=\"200px\" width=\"250px\"></marquee>  \n    <marquee direction=\"down\" ><img src=\"../assets/img/online13.jpg\" height=\"200px\" width=\"250px\"></marquee>\n</div><br><br>\n<div class=\"gk2\">\n    <marquee direction=\"right\" margin=\"right\">Online Student Attend Images</marquee>\n    <marquee direction=\"up\" ><img src=\"../assets/img/online16.jpg\" height=\"200px\" width=\"250px\"></marquee>  \n    <marquee direction=\"down\" ><img src=\"../assets/img/online14.jpg\" height=\"200px\" width=\"250px\"></marquee>\n</div><br>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashborad/menu/menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashborad/menu/menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gk\">\n<style>\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  \n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli a:hover:not(.active) {\n  background-color: #111;\n}\n</style>\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/image\" routerLinkActive=\"active\">Images</a></li>\n      <li><a routerLink=\"/userProfile\" routerLinkActive=\"active\">User Profile</a></li>\n      <li><a routerLink=\"/idea\" routerLinkActive=\"active\">New Idea</a></li>\n      <li><a routerLink=\"/video-center\" routerLinkActive=\"active\">PlayList</a></li>\n    </ul>\n  </div>\n  <!-- <input style=\"text-align:right;\"style=\"color:white;\"  type=\"button\" (click)=\"onLogout()\" value=\"Logout\"/>\n  <input style=\"text-align:right;\"style=\"color:white;\"  type=\"button\"  value=\"Registration\"/> -->\n</nav>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/image/image.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/image/image.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div  class=\"gk\">\n  <div class=\"container\">\n  <h3>Upload File</h3>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div>\n          <h6 class=\"head-title margin-top-8\"><span>Select Image File</span></h6>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"file\" multiple\n            (change)=\"selectImage($event)\">\n          <label class=\"custom-file-label\" for=\"customFile\">{{fileInputLabel || 'Choose File'}}</label>\n        </div>\n      </div>\n      <div class=\"col-sm-6\"> <button class=\"btn btn-primary\" type=\"submit\" (click)=onSubmit()>Upload</button> </div>\n    </div>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/new-ideas/new-ideas.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/new-ideas/new-ideas.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<form  #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\r\n    <div class=\"gk\">\r\n        <h1>New Idea Business Or Other</h1><br>\r\n        <input type=\"text\"  name=\"idea\" placeholder=\"New Idea\" ngModel required>\r\n        <input type=\"text\"  name=\"problem\" placeholder=\"Idea Problem\" ngModel required>\r\n        <input type=\"text\"  name=\"solution\" placeholder=\"Idea Solution\" ngModel required>\r\n        <input type=\"text\"  name=\"many\" placeholder=\"Idea Many\" ngModel required>\r\n        <input type=\"submit\" [disabled]=\"!form.valid\" value=\"Added Data\">\r\n        <input type=\"reset\"  value=\"Reset Data\">\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/sign-in/sign-in.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/sign-in/sign-in.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"lazyload\" src=\"/assets/img/login.jpg\" data-orig-src=\"assets/img/single_user.png\" id=\"icon\" alt=\"User Icon\" />\n  </div>\n  <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input\n    type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n      <label class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign In\">\n  </form>\n  <!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"lazyload\" src=\"/assets/img/reg.jpg\" data-orig-src=\"/assets/img/users.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n  <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\">\n  <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\n    <label class=\"validation-message\">This field is required.</label>\n  </div>\n  <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n  required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n  <div *ngIf=\"signUpForm.submitted && email.errors\">\n    <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n  </div>\n  <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n  </div>\n  <input type=\"submit\" value=\"Sign Up\">\n</form>\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-profile/user-profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-profile/user-profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<body>\n<table *ngIf=\"userDetails\" class=\"table-fill\">\n  <thead>\n      <tr>\n          <th colspan=\"2\" class=\"text-center\">User Profile</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr>\n          <td>First Name</td>\n          <td>{{userDetails.fullName.split(' ')[0]}}</td>\n      </tr>\n      <tr>\n          <td>Last Name</td>\n          <td>{{userDetails.fullName.split(' ')[1]}}</td>\n      </tr>\n      <tr>\n          <td>Email</td>\n          <td>{{userDetails.email}}</td>\n      </tr>\n      <tr>\n          <td colspan=\"2\" class=\"text-center\">\n              <input type=\"button\" (click)=\"onLogout()\" value=\"Logout\" />\n          </td>\n      </tr>\n  </tbody>\n</table>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user/user.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user/user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <h2 class=\"inactive underlineHover\">Sign Up </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div> -->\n\n<div class=\"wrapper\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2>\n    <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video-center/video-center.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video-center/video-center.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<div class=\"row\">\n    <div class=\"col-sm-9\">\n    \n        <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <div class=\"gk1\">\n            <div *ngIf=\"!hidenewVideo\">\n                <h1 style=\"background-color:DodgerBlue;text-align: center;\"> New Video</h1> \n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Title\" required name=\"title\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Url\" required name=\"url\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" required name=\"description\" ngModel>\n                </div>\n                <button type=\"submit\" [disabled]=\"!form.valid\"class=\"btn btn-primary\">Submit</button>\n\t\t\t    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <button type=\"reset\" class=\"btn btn-danger\">Reset</button>\n            </div>\n            </div>\n        </form>\n        <video-detils (updateVideoEvent)=\"onUpdateVideoEvent($event)\" (deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n                        *ngIf=\"selectedVideo && hidenewVideo\" [video]=\"selectedVideo\"></video-detils>\n    </div>\n    <div class=\"col-sm-3\">\n        <button (click)=\"newVideo()\" style=\"margin-bottom:2px;\" type=\"button\" class=\"btn btn-success btn-block\">+New Video</button>\n        <video-list (SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"></video-list>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video-detils/video-detils.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video-detils/video-detils.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gk\">\n    <div>\n        <div>\n            <iframe width=\"100%\" height=\"400\" [src]=\"video.url | safe\"></iframe>\n        </div>\n    </div>\n<div>\n    <form>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\" [(ngModel)]=\"video.title\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"url\" required placeholder=\"url\" [(ngModel)]=\"video.url\">\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"5\" name=\"desc\" placeholder=\"description\" [(ngModel)]=\"video.description\">\n            </textarea>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateVideo()\">Update</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteVideo()\">Delete</button>\n    </form>\n</div>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video-list/video-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video-list/video-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gk\">  \n    <ul class=\"nav nav-pills nav-stacked\">\n        <li (click)=\"onselect(video)\" *ngFor=\"let video of videos\"><a>{{video.title}}</a></li>\n    </ul>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user/user.component */ "./src/app/user/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.gaurd */ "./src/app/auth/auth.gaurd.ts");
/* harmony import */ var _user_image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/image/image.component */ "./src/app/user/image/image.component.ts");
/* harmony import */ var _dashborad_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashborad/menu/menu.component */ "./src/app/dashborad/menu/menu.component.ts");
/* harmony import */ var _dashborad_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashborad/home/home.component */ "./src/app/dashborad/home/home.component.ts");
/* harmony import */ var _user_new_ideas_new_ideas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/new-ideas/new-ideas.component */ "./src/app/user/new-ideas/new-ideas.component.ts");
/* harmony import */ var _video_video_center_video_center_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/video-center/video-center.component */ "./src/app/video/video-center/video-center.component.ts");













var routes = [
    {
        path: 'signup', component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] }]
    },
    {
        path: 'userProfile', component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'image', component: _user_image_image_component__WEBPACK_IMPORTED_MODULE_8__["ImageComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'menu', component: _dashborad_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'home', component: _dashborad_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'idea', component: _user_new_ideas_new_ideas_component__WEBPACK_IMPORTED_MODULE_11__["NewIdeasComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'video-center', component: _video_video_center_video_center_component__WEBPACK_IMPORTED_MODULE_12__["VideoCenterComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular6';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user/user.component */ "./src/app/user/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/shared/user.service */ "./src/app/user/shared/user.service.ts");
/* harmony import */ var _auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.gaurd */ "./src/app/auth/auth.gaurd.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _user_image_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/image/image.component */ "./src/app/user/image/image.component.ts");
/* harmony import */ var _dashborad_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashborad/menu/menu.component */ "./src/app/dashborad/menu/menu.component.ts");
/* harmony import */ var _dashborad_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashborad/home/home.component */ "./src/app/dashborad/home/home.component.ts");
/* harmony import */ var _user_new_ideas_new_ideas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/new-ideas/new-ideas.component */ "./src/app/user/new-ideas/new-ideas.component.ts");
/* harmony import */ var _video_video_center_video_center_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./video/video-center/video-center.component */ "./src/app/video/video-center/video-center.component.ts");
/* harmony import */ var _video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./video/video-list/video-list.component */ "./src/app/video/video-list/video-list.component.ts");
/* harmony import */ var _video_video_detils_video_detils_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./video/video-detils/video-detils.component */ "./src/app/video/video-detils/video-detils.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _user_image_image_component__WEBPACK_IMPORTED_MODULE_14__["ImageComponent"],
                _dashborad_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _dashborad_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _user_new_ideas_new_ideas_component__WEBPACK_IMPORTED_MODULE_17__["NewIdeasComponent"],
                _video_video_center_video_center_component__WEBPACK_IMPORTED_MODULE_18__["VideoCenterComponent"],
                _video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_19__["VideoListComponent"],
                _video_video_detils_video_detils_component__WEBPACK_IMPORTED_MODULE_20__["VideoDetilsComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_21__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _user_shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.gaurd.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.gaurd.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user/shared/user.service */ "./src/app/user/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _user_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/shared/user.service */ "./src/app/user/shared/user.service.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _user_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/dashborad/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashborad/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-image: url(\"/assets/img/online17.jpg\");\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.gk{\r\n font-size: 30px;\r\n color: wheat;\r\n background-image: url(\"/assets/img/online16.jpg\");\r\n font-style:italic;\r\n border-style: groove;\r\n text-shadow: 0 0 3px orangered;\r\nbox-shadow: orangered 3px 2px;\r\n}\r\n\r\n.gk1{\r\n    height: 500px;\r\n    width: 300px;\r\n    /* background-color: hotpink;\r\n    border-style: dotted ; */\r\n    margin: 10px;\r\n    padding: 25px;\r\n    font-size: 25px;\r\n    color: black;\r\n    text-shadow: 0 0 3px orangered;\r\n}\r\n\r\nimg{\r\n    border: wheat solid 5px;\r\n    opacity:1.0;\r\n    filter: alpha(opacity=40);\r\n    border-radius: 8px;\r\n}\r\n\r\nimg.hover{\r\n    opacity:1.0;\r\n    filter: alpha(opacity=100);\r\n}\r\n\r\n.gk2{\r\n    margin-left: 77%;\r\n    margin-top:-550px;\r\n    height: 500px;\r\n    width: 300px;\r\n    font-size: 25px;\r\n    text-shadow: 0 0 3px yellow;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvcmFkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaURBQWlEO0lBQ2pELHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGlEQUFpRDtDQUNqRCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLDhCQUE4QjtBQUMvQiw2QkFBNkI7QUFDN0I7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaOzRCQUN3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvcmFkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL29ubGluZTE3LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcblxyXG4uZ2t7XHJcbiBmb250LXNpemU6IDMwcHg7XHJcbiBjb2xvcjogd2hlYXQ7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9vbmxpbmUxNi5qcGdcIik7XHJcbiBmb250LXN0eWxlOml0YWxpYztcclxuIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gdGV4dC1zaGFkb3c6IDAgMCAzcHggb3JhbmdlcmVkO1xyXG5ib3gtc2hhZG93OiBvcmFuZ2VyZWQgM3B4IDJweDtcclxufVxyXG4uZ2sxe1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZCA7ICovXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggb3JhbmdlcmVkO1xyXG59XHJcbmltZ3tcclxuICAgIGJvcmRlcjogd2hlYXQgc29saWQgNXB4O1xyXG4gICAgb3BhY2l0eToxLjA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbmltZy5ob3ZlcntcclxuICAgIG9wYWNpdHk6MS4wO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbn1cclxuLmdrMntcclxuICAgIG1hcmdpbi1sZWZ0OiA3NyU7XHJcbiAgICBtYXJnaW4tdG9wOi01NTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCB5ZWxsb3c7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashborad/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashborad/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashborad/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashborad/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashborad/menu/menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashborad/menu/menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib3JhZC9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashborad/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashborad/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashborad/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/dashborad/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        })
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/user/image/image.component.css":
/*!************************************************!*\
  !*** ./src/app/user/image/image.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gk{\r\n     padding:110px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssYUFBYTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5na3tcclxuICAgICBwYWRkaW5nOjExMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/image/image.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/image/image.component.ts ***!
  \***********************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ImageComponent = /** @class */ (function () {
    function ImageComponent(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.selectImage = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
        }
    };
    ImageComponent.prototype.onSubmit = function () {
        var formData = new FormData();
        formData.append('file', this.images);
        this.http.post('http://localhost:3000/api/upload', formData).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
        alert("Data Save Successfully");
    };
    ImageComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/user/image/image.component.css")]
        })
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/user/new-ideas/new-ideas.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/new-ideas/new-ideas.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gk{\r\n    padding:70px;\r\n    margin:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9uZXctaWRlYXMvbmV3LWlkZWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9uZXctaWRlYXMvbmV3LWlkZWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2t7XHJcbiAgICBwYWRkaW5nOjcwcHg7XHJcbiAgICBtYXJnaW46MjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/new-ideas/new-ideas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/new-ideas/new-ideas.component.ts ***!
  \*******************************************************/
/*! exports provided: NewIdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewIdeasComponent", function() { return NewIdeasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/user/shared/user.service.ts");



var NewIdeasComponent = /** @class */ (function () {
    function NewIdeasComponent(userService) {
        this.userService = userService;
    }
    NewIdeasComponent.prototype.ngOnInit = function () {
    };
    NewIdeasComponent.prototype.onSubmit = function (form) {
        this.userService.postIdea(form.value).subscribe(function (res) {
            alert("data added success");
            form.reset();
        }, function (err) {
            alert("error");
        });
    };
    NewIdeasComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    NewIdeasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-ideas',
            template: __webpack_require__(/*! raw-loader!./new-ideas.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/new-ideas/new-ideas.component.html"),
            styles: [__webpack_require__(/*! ./new-ideas.component.css */ "./src/app/user/new-ideas/new-ideas.component.css")]
        })
    ], NewIdeasComponent);
    return NewIdeasComponent;
}());



/***/ }),

/***/ "./src/app/user/shared/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/shared/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this.Url = 'http://localhost:3000/api/videos';
    }
    //HttpMethods
    UserService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/register', user, this.noAuthHeader);
    };
    UserService.prototype.postIdea = function (idea) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/idea', idea);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/userProfile');
    };
    //Helpers Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    //strat video upload
    UserService.prototype.getVideos = function () {
        return this.http.get(this.Url);
    };
    UserService.prototype.addVideo = function (video) {
        return this.http.post(this.Url, video);
    };
    UserService.prototype.updateVideo = function (video) {
        return this.http.put(this.Url + ("/" + video._id), video);
    };
    UserService.prototype.deleteVideo = function (video) {
        return this.http.delete(this.Url + ("/" + video._id));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: #56baed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/user/shared/user.service.ts");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            // this.router.navigateByUrl('/userProfile');
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  background-color: #56baed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/user/shared/user.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html"),
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/user/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/video/video-center/video-center.component.css":
/*!***************************************************************!*\
  !*** ./src/app/video/video-center/video-center.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gk1{\r\n    margin:10px;\r\n    padding:10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8tY2VudGVyL3ZpZGVvLWNlbnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby1jZW50ZXIvdmlkZW8tY2VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2sxe1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/video/video-center/video-center.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video/video-center/video-center.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCenterComponent", function() { return VideoCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/shared/user.service */ "./src/app/user/shared/user.service.ts");



var VideoCenterComponent = /** @class */ (function () {
    function VideoCenterComponent(userService) {
        this.userService = userService;
        this.hidenewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        this.hidenewVideo = true;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.addVideo(form.value).subscribe(function (res) {
            _this.hidenewVideo = true;
            _this.selectedVideo = null;
            alert("Data Save Successfully");
            form.reset();
        });
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this.userService.updateVideo(video)
            .subscribe(function (resUpdateVideo) { return video = resUpdateVideo; });
        this.selectedVideo = null;
        alert("Data Updeated Successfully");
    };
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        if (confirm('Are you sure to delete this record ?') == true) {
            this.userService.deleteVideo(video)
                .subscribe(function (resDeleteVideo) {
                for (var i = 0; i < videoArray.length; i++) {
                    if (videoArray[i]._id === video._id) {
                        videoArray.splice(i, 1);
                    }
                }
            });
            this.selectedVideo = null;
        }
    };
    ;
    VideoCenterComponent.ctorParameters = function () { return [
        { type: _user_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    VideoCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-center',
            template: __webpack_require__(/*! raw-loader!./video-center.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video-center/video-center.component.html"),
            providers: [_user_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./video-center.component.css */ "./src/app/video/video-center/video-center.component.css")]
        })
    ], VideoCenterComponent);
    return VideoCenterComponent;
}());



/***/ }),

/***/ "./src/app/video/video-detils/video-detils.component.css":
/*!***************************************************************!*\
  !*** ./src/app/video/video-detils/video-detils.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gk{\r\n    margin-left: 50px;\r\n    margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8tZGV0aWxzL3ZpZGVvLWRldGlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLWRldGlscy92aWRlby1kZXRpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5na3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/video/video-detils/video-detils.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video/video-detils/video-detils.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoDetilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetilsComponent", function() { return VideoDetilsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoDetilsComponent = /** @class */ (function () {
    function VideoDetilsComponent() {
        this.updateVideoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteVideoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoDetilsComponent.prototype.ngOnInit = function () {
    };
    VideoDetilsComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetilsComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    VideoDetilsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-detils',
            template: __webpack_require__(/*! raw-loader!./video-detils.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video-detils/video-detils.component.html"),
            inputs: ['video'],
            outputs: ['updateVideoEvent', 'deleteVideoEvent'],
            styles: [__webpack_require__(/*! ./video-detils.component.css */ "./src/app/video/video-detils/video-detils.component.css")]
        })
    ], VideoDetilsComponent);
    return VideoDetilsComponent;
}());



/***/ }),

/***/ "./src/app/video/video-list/video-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/video/video-list/video-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gk{\r\n    margin-top: 7px;\r\n    margin-right: 135px;\r\n    border-left: 6px solid red;\r\n    background-color: lightgrey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5na3tcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTM1cHg7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/video/video-list/video-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video/video-list/video-list.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.SelectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onselect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-list',
            template: __webpack_require__(/*! raw-loader!./video-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video-list/video-list.component.html"),
            inputs: ['videos'],
            outputs: ['SelectVideo'],
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video/video-list/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



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
var environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Node Js Project\Project\angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map