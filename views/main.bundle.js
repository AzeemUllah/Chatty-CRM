webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_module_1 = __webpack_require__("../../../../../src/app/login/login.module.ts");
var dashboard_module_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var angularfire2_1 = __webpack_require__("../../../../angularfire2/index.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var auth_1 = __webpack_require__("../../../../angularfire2/auth/index.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var signup_module_1 = __webpack_require__("../../../../../src/app/signup/signup.module.ts");
var forgot_password_component_1 = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(ng2_toastr_1.ToastOptions));
exports.CustomOption = CustomOption;
var ng2_validation_1 = __webpack_require__("../../../../ng2-validation/dist/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ng2_toastr_1.ToastModule.forRoot(),
                ng2_validation_1.CustomFormsModule,
                login_module_1.LoginModule,
                signup_module_1.SignupModule,
                dashboard_module_1.DashboardModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot([
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
                    { path: 'signup', component: signup_component_1.SignupComponent },
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '**', redirectTo: 'login', pathMatch: 'full' }
                ]),
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule
            ],
            providers: [auth_service_1.AuthService, { provide: ng2_toastr_1.ToastOptions, useClass: CustomOption }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n  <div class=\"page-wrapper\">\n    <app-message-box></app-message-box>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var header_component_1 = __webpack_require__("../../../../../src/app/dashboard/header/header.component.ts");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/dashboard/sidebar/sidebar.component.ts");
var message_box_component_1 = __webpack_require__("../../../../../src/app/dashboard/message-box/message-box.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                message_box_component_1.MessageBoxComponent,
                dashboard_component_1.DashboardComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header-left\">\n    <a href=\"\" class=\"logo\">\n      <img src=\"../assets/images/logo.png\" width=\"40\" height=\"40\" alt=\"\">\n    </a>\n    <a href=\"\" class=\"logo-dark\">\n      <img src=\"../assets/images/logo-white.png\" width=\"40\" height=\"40\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"page-title-box pull-left\">\n    <h3>Focus Technologies</h3>\n  </div>\n  <a id=\"mobile_btn\" class=\"mobile_btn pull-left\" href=\"#sidebar\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n  <ul class=\"nav navbar-nav navbar-right user-menu pull-right\">\n    <li class=\"dropdown hidden-xs\">\n      <a href=\"#\" class=\"hasnotifications dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell-o\"></i> <span class=\"badge bg-purple pull-right\">3</span></a>\n      <div class=\"dropdown-menu notifications\">\n        <div class=\"topnav-dropdown-header\">\n          <span>Notifications</span>\n        </div>\n        <div class=\"drop-scroll\">\n          <ul class=\"media-list scroll-content\">\n            <li class=\"media notification-message\">\n              <a href=\"activities.html\">\n                <div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"John Doe\" src=\"../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">John Doe</span> added new task <span class=\"noti-title\">Patient appointment booking</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">4 mins ago</span></p>\n                </div>\n              </a>\n            </li>\n            <li class=\"media notification-message\">\n              <a href=\"activities.html\">\n                <div class=\"media-left\">\n                  <span class=\"avatar\">V</span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">Tarah Shropshire</span> changed the task name <span class=\"noti-title\">Appointment booking with payment gateway</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">6 mins ago</span></p>\n                </div>\n              </a>\n            </li>\n            <li class=\"media notification-message\">\n              <a href=\"activities.html\">\n                <div class=\"media-left\">\n                  <span class=\"avatar\">L</span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">Misty Tison</span> added <span class=\"noti-title\">Domenic Houston</span> and <span class=\"noti-title\">Claire Mapes</span> to project <span class=\"noti-title\">Doctor available module</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">8 mins ago</span></p>\n                </div>\n              </a>\n            </li>\n            <li class=\"media notification-message\">\n              <a href=\"activities.html\">\n                <div class=\"media-left\">\n                  <span class=\"avatar\">G</span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">Rolland Webber</span> completed task <span class=\"noti-title\">Patient and Doctor video conferencing</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">12 mins ago</span></p>\n                </div>\n              </a>\n            </li>\n            <li class=\"media notification-message\">\n              <a href=\"activities.html\">\n                <div class=\"media-left\">\n                  <span class=\"avatar\">V</span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">Bernardo Galaviz</span> added new task <span class=\"noti-title\">Private chat module</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">2 days ago</span></p>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"topnav-dropdown-footer\">\n          <a href=\"activities.html\">View all Notifications</a>\n        </div>\n      </div>\n    </li>\n    <li class=\"dropdown toolbar-icon-bg hidden-xs\">\n      <a href=\"javascript:;\" id=\"open_msg_box\" class=\"hasnotifications\"><i class=\"fa fa-comment-o\"></i> <span class=\"badge bg-purple pull-right\">8</span></a>\n    </li>\n    <li class=\"dropdown\">\n      <a href=\"profile.html\" class=\"dropdown-toggle user-link\" data-toggle=\"dropdown\" title=\"Admin\">\n\t\t\t\t\t\t\t<span class=\"user-img\"><img class=\"img-circle\" src=\"../assets/images/user.jpg\" width=\"40\" alt=\"Admin\">\n\t\t\t\t\t\t\t<span class=\"status online\"></span></span>\n        <span>Admin</span>\n        <i class=\"caret\"></i>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li><a href=\"profile.html\">My Profile</a></li>\n        <li><a href=\"edit-profile.html\">Edit Profile</a></li>\n        <li><a href=\"settings.html\">Settings</a></li>\n        <li><a href=\"login.html\">Logout</a></li>\n      </ul>\n    </li>\n  </ul>\n  <div class=\"dropdown mobile-user-menu pull-right\">\n    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n    <ul class=\"dropdown-menu pull-right\">\n      <li><a href=\"profile.html\">My Profile</a></li>\n      <li><a href=\"edit-profile.html\">Edit Profile</a></li>\n      <li><a href=\"settings.html\">Settings</a></li>\n      <li><a href=\"login.html\">Logout</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/dashboard/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/message-box/message-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/message-box/message-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-box\">\n  <div class=\"msg-sidebar notifications msg-noti\">\n    <div class=\"topnav-dropdown-header\">\n      <span>Messages</span>\n    </div>\n    <div class=\"drop-scroll msg-list-scroll\">\n      <ul class=\"list-box\">\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">R</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Richard Miles </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item new-message\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">J</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">John Doe</span>\n                <span class=\"message-time\">1 Aug</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">T</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Tarah Shropshire </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">M</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Mike Litorus</span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">C</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Catherine Manseau </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">D</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Domenic Houston </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">B</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Buster Wigton </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">R</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Rolland Webber </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">C</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\"> Claire Mapes </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">M</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Melita Faucher</span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">J</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Jeffery Lalor</span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">L</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Loren Gatlin</span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"chat.html\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">T</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Tarah Shropshire</span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Lorem ipsum dolor sit amet, consectetur adipiscing</span>\n              </div>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"topnav-dropdown-footer\">\n      <a href=\"chat.html\">See all messages</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/message-box/message-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent() {
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    MessageBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-message-box',
            template: __webpack_require__("../../../../../src/app/dashboard/message-box/message-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/message-box/message-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());
exports.MessageBoxComponent = MessageBoxComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" id=\"sidebar\">\n  <div class=\"sidebar-inner slimscroll\">\n    <div id=\"sidebar-menu\" class=\"sidebar-menu\">\n      <ul>\n        <li class=\"active\">\n          <a href=\"index-2.html\">Dashboard</a>\n        </li>\n        <li class=\"submenu\">\n          <a href=\"#\" class=\"noti-dot\"><span> Employees</span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;\">\n            <li><a href=\"employees.html\">All Employees</a></li>\n            <li><a href=\"holidays.html\">Holidays</a></li>\n            <li><a href=\"leaves.html\"><span>Leave Requests</span> <span class=\"badge bg-primary pull-right\">1</span></a></li>\n            <li><a href=\"attendance.html\">Attendance</a></li>\n            <li><a href=\"departments.html\">Departments</a></li>\n            <li><a href=\"designations.html\">Designations</a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"clients.html\">Clients</a>\n        </li>\n        <li>\n          <a href=\"projects.html\">Projects</a>\n        </li>\n        <li>\n          <a href=\"tasks.html\">Tasks</a>\n        </li>\n        <li>\n          <a href=\"leads.html\">Leads</a>\n        </li>\n        <li class=\"submenu\">\n          <a href=\"#\"><span> Accounts </span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;\">\n            <li><a href=\"estimates.html\">Estimates</a></li>\n            <li><a href=\"invoices.html\">Invoices</a></li>\n            <li><a href=\"payments.html\">Payments</a></li>\n            <li><a href=\"expenses.html\">Expenses</a></li>\n            <li><a href=\"provident-fund.html\">Provident Fund</a></li>\n            <li><a href=\"taxes.html\">Taxes</a></li>\n          </ul>\n        </li>\n        <li class=\"submenu\">\n          <a href=\"#\"><span> Payroll </span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;\">\n            <li><a href=\"salary.html\"> Employee Salary </a></li>\n            <li><a href=\"salary-view.html\"> Payslip </a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"worksheet.html\">Timing Sheet</a>\n        </li>\n        <li>\n          <a href=\"tickets.html\">Tickets</a>\n        </li>\n        <li>\n          <a href=\"events.html\">Events</a>\n        </li>\n        <li>\n          <a href=\"inbox.html\">Email</a>\n        </li>\n        <li>\n          <a href=\"chat.html\">Chat <span class=\"badge bg-primary pull-right\">5</span></a>\n        </li>\n        <li>\n          <a href=\"assets.html\">Assets</a>\n        </li>\n        <li>\n          <a href=\"activities.html\">Activities</a>\n        </li>\n        <li>\n          <a href=\"users.html\">Users</a>\n        </li>\n        <li class=\"submenu\">\n          <a href=\"#\"><span> Reports </span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;\">\n            <li><a href=\"expense-reports.html\"> Expense Report </a></li>\n            <li><a href=\"invoice-reports.html\"> Invoice Report </a></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"settings.html\">Settings</a>\n        </li>\n        <li class=\"submenu\">\n          <a href=\"#\"><span> Pages </span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;\">\n            <li><a href=\"login.html\"> Login </a></li>\n            <li><a href=\"register.html\"> Register </a></li>\n            <li><a href=\"forgot-password.html\"> Forgot Password </a></li>\n            <li><a href=\"profile.html\"> Profile </a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"account-page\">\n    <div class=\"container\">\n      <h3 class=\"account-title\">Reset Password</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo2.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Email Address</label>\n              <input [(ngModel)]=\"email\" name=\"email\" class=\"form-control floating\" type=\"text\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button class=\"btn btn-primary btn-block account-btn\" (click)=\"submit()\" type=\"submit\">Reset Password</button>\n            </div>\n            <div class=\"text-center\">\n              <a href=\"/login\">Back to Login</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
        this.email = '';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"account-page\">\n    <div class=\"container\">\n      <h3 class=\"account-title\">Management Login</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo2.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Email</label>\n              <input id=\"email\" class=\"form-control floating\"  [(ngModel)]=\"email\" name=\"email\" type=\"text\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Password</label>\n              <input password=\"password\" class=\"form-control floating\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button class=\"btn btn-primary btn-block account-btn\" type=\"button\" (click)=\"submit()\" >Login</button>\n            </div>\n            <div style=\"line-height: 2.5em;\" class=\"text-center\">\n              <a href=\"/forgot-password\">Forgot your password?</a><br>\n              <a  href=\"/signup\">Don't have an account? Signup here!</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
        this.email = '';
        this.password = '';
        this.isLogin = false;
        this.loginSucessful = false;
        this._auth.test().subscribe(function (data) {
            console.log(data);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this._router.navigateByUrl('/dashboard');
    };
    LoginComponent.prototype.submit = function () {
        // this.loginSucessful = this._loginService.signin(this.email, this.password);
        // alert(this.email + " / " + this.password);
        console.log(this.items);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var forgot_password_component_1 = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.ts");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [login_component_1.LoginComponent, forgot_password_component_1.ForgotPasswordComponent],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_1 = __webpack_require__("../../../../angularfire2/auth/index.js");
var database_1 = __webpack_require__("../../../../angularfire2/database/index.js");
var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, _db) {
        this.firebaseAuth = firebaseAuth;
        this._db = _db;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService.prototype.test = function () {
        this.items = this._db.object('data').valueChanges();
        this.items.subscribe(function (action) {
            return action;
        });
        return this.items;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, database_1.AngularFireDatabase])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"account-page\">\n    <div class=\"container\">\n      <h3 class=\"account-title\">Signup</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo2.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Username</label>\n              <input name=\"username\" required [(ngModel)]=\"username\" class=\"form-control floating  text-danger\"  type=\"text\">\n\n            </div>\n\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Email</label>\n              <input name=\"email\" required [(ngModel)]=\"email\" class=\"form-control floating\" type=\"email\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Password</label>\n              <input name=\"password\" [(ngModel)]=\"password\" class=\"form-control floating\" type=\"password\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Repeat Password</label>\n              <input name=\"conformPassword\" [(ngModel)]=\"conformPassword\" class=\"form-control floating\" type=\"password\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button  class=\"btn btn-primary btn-block account-btn\" (click)=\"submit()\" type=\"button\">Register</button>\n            </div>\n            <div class=\"text-center\">\n              <a href=\"/login\">Already have an account?</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, vcr, _auth) {
        this.toastr = toastr;
        this._auth = _auth;
        this.email = '';
        this.password = '';
        this.conformPassword = '';
        this.username = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submit = function () {
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.username.length == 0) {
            this.toastr.warning('Username can\'t be empty! ', 'Stop!');
        }
        else if (this.email.length == 0) {
            this.toastr.warning('Email can\'t be empty! ', 'Stop!');
        }
        else if (this.password.length == 0) {
            this.toastr.warning('Password can\'t be empty! ', 'Stop!');
        }
        else if (this.conformPassword.length == 0) {
            this.toastr.warning('Conform Password can\'t be empty! ', 'Stop!');
        }
        else if (this.conformPassword != this.password) {
            this.toastr.warning('Password and Conform Password fields should have same values! ', 'Stop!');
        }
        else if (!(this.regexp.test(this.email))) {
            this.toastr.warning('Email should be in proper format! ', 'Stop!');
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "../../../../../src/app/signup/signup.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var signup_component_1 = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            declarations: [signup_component_1.SignupComponent]
        })
    ], SignupModule);
    return SignupModule;
}());
exports.SignupModule = SignupModule;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCJ4lnlG8J5Gial3kSnSbOrWy1p6EtQeLU",
        authDomain: "chattycrm-beta.firebaseapp.com",
        databaseURL: "https://chattycrm-beta.firebaseio.com",
        projectId: "chattycrm-beta",
        storageBucket: "chattycrm-beta.appspot.com",
        messagingSenderId: "864860015802"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map