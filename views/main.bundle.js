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

/***/ "../../../../../src/app/account-management/account-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor:pointer;\r\n}\r\n.account-logo img {\r\n  width: 90%;\r\n  margin-bottom: 4%;\r\n  left: 1%;\r\n  right: 1%;\r\n  margin-top: 4%;\r\n}\r\n.account-box .account-btn {\r\n  background: -webkit-gradient(linear, left top, right top, from(#0177c2), to(#76bfe8)) !important;\r\n  background: linear-gradient(to right, #0177c2 0%, #76bfe8 100%) !important;\r\n  -webkit-box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n          box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n}\r\n.account-box a:hover {\r\n  color: #1382c8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-management/account-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"background-image\" style=\"\"></div>\n  <div class=\"account-page\">\n\n    <div *ngIf=\"mode=='verifyEmail'\" class=\"container animated fadeIn\">\n      <h3 class=\"account-title\">Email Verification</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img style=\"\" src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div style=\"font-size: 17px; margin-top: 50px;\" class=\"form-group  text-center\">\n              {{message}}\n            </div>\n            <div *ngIf=\"loginButton\" class=\"text-center\">\n              <a (click)=\"gotoLogin()\">Try logging in? Click here!</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"mode=='resetPassword'\" class=\"container animated fadeIn\">\n      <h3 class=\"account-title\">Reset Password</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img style=\"\" src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form *ngIf=\"!loginButton\">\n              <div class=\"form-group form-focus\">\n                <label class=\"control-label\">Password</label>\n                <input name=\"password\" [(ngModel)]=\"password\" class=\"form-control floating\" type=\"password\">\n              </div>\n              <div class=\"form-group form-focus\">\n                <label class=\"control-label\">Repeat Password</label>\n                <input name=\"conformPassword\" [(ngModel)]=\"conformPassword\" class=\"form-control floating\" type=\"password\">\n              </div>\n            <div class=\"form-group text-center\">\n              <button  class=\"btn btn-primary btn-block account-btn\" (click)=\"changePassword()\" type=\"button\">Change Password</button>\n            </div>\n          </form>\n          <form  *ngIf=\"loginButton\">\n            <div style=\"font-size: 17px; margin-top: 50px;\" class=\"form-group  text-center\">\n              {{messageForgotPassword}}\n            </div>\n            <div *ngIf=\"loginButton\" class=\"text-center\">\n              <a (click)=\"gotoForgotPassword()\">Try forgot password again? Click here!</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account-management/account-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountManagementComponent = /** @class */ (function () {
    function AccountManagementComponent(toastr, vcr, route, router, location, firebaseAuth) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.location = location;
        this.firebaseAuth = firebaseAuth;
        this.message = "Verifying your email. Please wait...";
        this.messageForgotPassword = "";
        this.loginButton = false;
        this.mode = null;
        this.actionCode = null;
        this.windowLocation = null;
        this.password = null;
        this.conformPassword = null;
        this.uid = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AccountManagementComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    AccountManagementComponent.prototype.gotoForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    AccountManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
        });
        this.route.queryParams.subscribe(function (params) {
            _this.mode = params['mode'];
            _this.actionCode = params['oobCode'];
            _this.windowLocation = "https://chattycrm-beta.firebaseapp.com/" + _this.location.path();
            if (params) {
                if (_this.mode != null && _this.mode != '') {
                    if (_this.mode == 'verifyEmail') {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().applyActionCode(_this.actionCode)
                            .then(function (result) {
                            setTimeout(function () {
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/users/' + _this.uid).update({
                                    isEmailVerified: true
                                }).then(function () {
                                    __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function () {
                                        _this.router.navigateByData({
                                            url: ["login"],
                                            data: [{ "state": "verify-email-sucessful" }]
                                        });
                                    }).catch(function (error) {
                                        _this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
                                    });
                                });
                            }, 1000);
                        })
                            .catch(function (error) {
                            _this.message = error;
                            _this.loginButton = true;
                            _this.toastr.error(error, 'Stop!');
                        });
                    }
                }
                else {
                    _this.router.navigateByData({
                        url: ["login"],
                        data: [{ "state": "bad-account-management-link" }]
                    });
                }
            }
            else {
                _this.router.navigateByData({
                    url: ["login"],
                    data: [{ "state": "bad-account-management-link" }]
                });
            }
        });
    };
    AccountManagementComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password.length == 0) {
            this.toastr.warning('Password can\'t be empty! ', 'Stop!');
        }
        else if (this.conformPassword.length == 0) {
            this.toastr.warning('Conform Password can\'t be empty! ', 'Stop!');
        }
        else if (this.conformPassword != this.password) {
            this.toastr.warning('Password and Conform Password fields should have same values! ', 'Stop!');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().confirmPasswordReset(this.actionCode, this.password)
                .then(function (result) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function () {
                    _this.router.navigateByData({
                        url: ["login"],
                        data: [{ "state": "password-change-sucessful" }]
                    });
                }).catch(function (error) {
                    _this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
                });
            })
                .catch(function (error) {
                _this.messageForgotPassword = error;
                _this.loginButton = true;
                _this.toastr.error(error, 'Stop!');
            });
        }
    };
    AccountManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-management',
            template: __webpack_require__("../../../../../src/app/account-management/account-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account-management/account-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AccountManagementComponent);
    return AccountManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account-management/account-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_management_component__ = __webpack_require__("../../../../../src/app/account-management/account-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountManagementModule = /** @class */ (function () {
    function AccountManagementModule() {
    }
    AccountManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__account_management_component__["a" /* AccountManagementComponent */]]
        })
    ], AccountManagementModule);
    return AccountManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/animations/fadeIn.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // css styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 1 }))
    ]),
]);


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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_module__ = __webpack_require__("../../../../../src/app/signup/signup.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_navigate_with_data__ = __webpack_require__("../../../../angular2-navigate-with-data/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_management_account_management_module__ = __webpack_require__("../../../../../src/app/account-management/account-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__account_management_account_management_component__ = __webpack_require__("../../../../../src/app/account-management/account-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__crm_crm_component__ = __webpack_require__("../../../../../src/app/crm/crm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__crm_main_components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__crm_main_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/crm/main-components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__crm_crm_module__ = __webpack_require__("../../../../../src/app/crm/crm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__crm_main_components_contacts_contact_details_contact_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__crm_main_components_contacts_contacts_list_contacts_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__crm_main_components_company_company_details_company_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__crm_main_components_company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__crm_main_components_company_company_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__crm_main_components_property_property_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__crm_main_components_property_property_list_property_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property-list/property-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__crm_main_components_property_property_details_property_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property-details/property-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__crm_main_components_multi_select_multi_select_component__ = __webpack_require__("../../../../../src/app/crm/main-components/multi-select/multi-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__crm_main_components_multi_select_property_multi_select_property_multi_select_component__ = __webpack_require__("../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_tags_input_dist__ = __webpack_require__("../../../../ngx-tags-input/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_tags_input_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ngx_tags_input_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__crm_main_components_listings_listings_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__crm_main_components_listings_listing_list_listing_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__crm_main_components_listings_listing_details_listing_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.ts");
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







































// Import the library




var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight';
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__["ToastOptions"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_14__signup_signup_module__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_24__crm_crm_module__["a" /* CrmModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_19__account_management_account_management_module__["a" /* AccountManagementModule */],
                // Specify the library as an import
                __WEBPACK_IMPORTED_MODULE_39_ngx_tags_input_dist__["TagsInputModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'login/:state', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_15__login_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'account-management', component: __WEBPACK_IMPORTED_MODULE_20__account_management_account_management_component__["a" /* AccountManagementComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_21__crm_crm_component__["a" /* CrmComponent */],
                        children: [
                            { path: '', redirectTo: 'dashboard', pathMatch: "full" },
                            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_23__crm_main_components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
                            { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_22__crm_main_components_contacts_contacts_component__["a" /* ContactsComponent */], children: [
                                    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__crm_main_components_contacts_contacts_list_contacts_list_component__["a" /* ContactsListComponent */] },
                                    { path: 'contact-details', component: __WEBPACK_IMPORTED_MODULE_28__crm_main_components_contacts_contact_details_contact_details_component__["a" /* ContactDetailsComponent */] }
                                ]
                            },
                            { path: 'company', component: __WEBPACK_IMPORTED_MODULE_32__crm_main_components_company_company_component__["a" /* CompanyComponent */], children: [
                                    { path: '', component: __WEBPACK_IMPORTED_MODULE_31__crm_main_components_company_company_list_company_list_component__["a" /* CompanyListComponent */] },
                                    { path: 'company-details', component: __WEBPACK_IMPORTED_MODULE_30__crm_main_components_company_company_details_company_details_component__["a" /* CompanyDetailsComponent */] }
                                ]
                            },
                            { path: 'property', component: __WEBPACK_IMPORTED_MODULE_33__crm_main_components_property_property_component__["a" /* PropertyComponent */], children: [
                                    { path: '', component: __WEBPACK_IMPORTED_MODULE_34__crm_main_components_property_property_list_property_list_component__["a" /* PropertyListComponent */] },
                                    { path: 'property-details', component: __WEBPACK_IMPORTED_MODULE_35__crm_main_components_property_property_details_property_details_component__["a" /* PropertyDetailsComponent */] }
                                ]
                            },
                            { path: 'multi-select', component: __WEBPACK_IMPORTED_MODULE_37__crm_main_components_multi_select_multi_select_component__["a" /* MultiSelectComponent */], children: [
                                    { path: '', component: __WEBPACK_IMPORTED_MODULE_38__crm_main_components_multi_select_property_multi_select_property_multi_select_component__["a" /* PropertyMultiSelectComponent */] },
                                    { path: 'property', component: __WEBPACK_IMPORTED_MODULE_38__crm_main_components_multi_select_property_multi_select_property_multi_select_component__["a" /* PropertyMultiSelectComponent */] }
                                ]
                            },
                            { path: 'listing', component: __WEBPACK_IMPORTED_MODULE_40__crm_main_components_listings_listings_component__["a" /* ListingsComponent */], children: [
                                    { path: '', component: __WEBPACK_IMPORTED_MODULE_41__crm_main_components_listings_listing_list_listing_list_component__["a" /* ListingListComponent */] },
                                    { path: 'listing-details', component: __WEBPACK_IMPORTED_MODULE_42__crm_main_components_listings_listing_details_listing_details_component__["a" /* ListingDetailsComponent */] }
                                ]
                            }
                        ]
                    },
                    { path: '**', redirectTo: 'login', pathMatch: 'full' }
                ]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_36__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAFMtYWKJswJb49g9NymmEbLlua_xSHfZQ'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], { provide: __WEBPACK_IMPORTED_MODULE_17_ng2_toastr_ng2_toastr__["ToastOptions"], useClass: CustomOption }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/crm/crm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/crm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper animated fadeIn\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/crm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrmComponent = /** @class */ (function () {
    function CrmComponent(af, router) {
        this.af = af;
        this.router = router;
    }
    CrmComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
            }
            else {
                _this.router.navigateByData({
                    url: ["login"],
                    data: [{ "state": "not-authenticated" }]
                });
            }
        });
    };
    CrmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-crm',
            template: __webpack_require__("../../../../../src/app/crm/crm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/crm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CrmComponent);
    return CrmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/crm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_comming_soon_comming_soon_component__ = __webpack_require__("../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_header_header_component__ = __webpack_require__("../../../../../src/app/crm/shared-components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_message_box_message_box_component__ = __webpack_require__("../../../../../src/app/crm/shared-components/message-box/message-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/crm/shared-components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/crm/main-components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__crm_component__ = __webpack_require__("../../../../../src/app/crm/crm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_components_contacts_contact_details_contact_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_components_contacts_contacts_list_contacts_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_components_company_company_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_components_company_company_details_company_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_components_company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_components_property_property_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_components_property_property_list_property_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property-list/property-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_components_property_property_details_property_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/property/property-details/property-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__main_components_multi_select_multi_select_component__ = __webpack_require__("../../../../../src/app/crm/main-components/multi-select/multi-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_components_multi_select_property_multi_select_property_multi_select_component__ = __webpack_require__("../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_tags_input_dist__ = __webpack_require__("../../../../ngx-tags-input/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_tags_input_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_tags_input_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__main_components_listings_listings_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__main_components_listings_listing_details_listing_details_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__main_components_listings_listing_list_listing_list_component__ = __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// Import the library




var CrmModule = /** @class */ (function () {
    function CrmModule() {
    }
    CrmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular_datatables__["b" /* DataTablesModule */],
                // Specify the library as an import
                __WEBPACK_IMPORTED_MODULE_24_ngx_tags_input_dist__["TagsInputModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAFMtYWKJswJb49g9NymmEbLlua_xSHfZQ'
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__crm_component__["a" /* CrmComponent */], __WEBPACK_IMPORTED_MODULE_2__shared_components_comming_soon_comming_soon_component__["a" /* CommingSoonComponent */], __WEBPACK_IMPORTED_MODULE_3__shared_components_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__shared_components_message_box_message_box_component__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__main_components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__main_components_contacts_contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_13__main_components_contacts_contact_details_contact_details_component__["a" /* ContactDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_components_contacts_contacts_list_contacts_list_component__["a" /* ContactsListComponent */], __WEBPACK_IMPORTED_MODULE_15__main_components_company_company_component__["a" /* CompanyComponent */], __WEBPACK_IMPORTED_MODULE_16__main_components_company_company_details_company_details_component__["a" /* CompanyDetailsComponent */], __WEBPACK_IMPORTED_MODULE_17__main_components_company_company_list_company_list_component__["a" /* CompanyListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_components_property_property_component__["a" /* PropertyComponent */], __WEBPACK_IMPORTED_MODULE_19__main_components_property_property_list_property_list_component__["a" /* PropertyListComponent */], __WEBPACK_IMPORTED_MODULE_20__main_components_property_property_details_property_details_component__["a" /* PropertyDetailsComponent */], __WEBPACK_IMPORTED_MODULE_22__main_components_multi_select_multi_select_component__["a" /* MultiSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_23__main_components_multi_select_property_multi_select_property_multi_select_component__["a" /* PropertyMultiSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_25__main_components_listings_listings_component__["a" /* ListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__main_components_listings_listing_details_listing_details_component__["a" /* ListingDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__main_components_listings_listing_list_listing_list_component__["a" /* ListingListComponent */]]
        })
    ], CrmModule);
    return CrmModule;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-details/company-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-details/company-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--https://www.npmjs.com/package/angular-content-editable-->\n<div class=\"content container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h4 class=\"page-title\">Company Details</h4>\n    </div>\n    <div class=\"col-sm-4 text-right m-b-30\">\n    </div>\n  </div>\n  <div class=\"card-box m-b-0\">\n    <div class=\"row\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-view\">\n          <div class=\"profile-img-wrap\" style=\"height: 50%;\">\n            <div class=\"profile-img\">\n              <a >\n                <img *ngIf=\"url.length > 0\" src=\"{{url}}\" class=\"image--cover\">\n                <img *ngIf=\"url.length <= 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover\">\n              </a>\n            </div>\n            <input style=\"    font-size: 8px;\n    outline: none;\n    border: none;\" class=\"form-control\" type=\"file\" (change)=\"uploadFile($event)\" >\n          </div>\n          <div class=\"profile-basic\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"profile-info-left\">\n                  <h3 class=\"user-name m-t-0\" >\n                    <span (blur)=\"onBlurCompanyName($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyName}}</span>\n                  </h3>\n                  <!--<h5 class=\"company-role m-t-0 m-b-0\" ><span (blur)=\"onBlurCompanyName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.companyName}}</span></h5>-->\n                  <!--<small class=\"text-muted\" ><span (blur)=\"onBlurTitle($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.title}}</span></small>-->\n                  <!--<div class=\"staff-id\"><span (blur)=\"onBlurOccupation($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.occupation}}</span></div>-->\n                  <!--<br/>-->\n                  <!--<br/>-->\n                  <ul class=\"personal-info\">\n                    <li>\n                      <span class=\"title\">Street:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyStreet($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyStreet}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">City:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyCity($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyCity}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">State:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyState($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyState}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Country:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyCountry($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyCountry}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Zip:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyZip($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyZip}}</span>\n                    </li>\n                  </ul>\n\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                <ul class=\"personal-info\">\n                  <li>\n                    <span class=\"title\">Phone:</span>\n                    <span class=\"text\" (blur)=\"onBlurCompanyPhone($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyPhone}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Fax:</span>\n                    <span class=\"text\" (blur)=\"onBlurCompanyFax($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyFax}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Email:</span>\n                    <span class=\"text\" (blur)=\"onBlurCompanyEmail($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyEmail}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Website:</span>\n                    <span class=\"text\" (blur)=\"onBlurCompanyWebsite($event.target.innerHTML)\" contenteditable=\"true\">{{companyUpdateObj.companyWebsite}}</span>\n                  </li>\n\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"    margin-top: 2%;\">\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\" >Company Type:</span>\n                <span class=\"\">\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"companyType\"\n                                [active]=\"companyTypeSelected\"\n                                (data)=\"refreshValueUpdateCompanyType($event)\"\n                                placeholder=\"No company type selected\"></ng-select>\n                      </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n\n                      <span class=\"\">\n                        <span class=\"title\" >Property Markets:</span>\n                      <ng-select  [multiple]=\"true\"\n                                  [items]=\"propertyMarkets\"\n                                  [active]=\"propertyMarketsSelected\"\n                                  (data)=\"refreshValueUpdatePropertyMarkets($event)\"\n                                  placeholder=\"No Property Markets selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\" >Property Types:</span>\n                <span class=\"\">\n                      <ng-select  [multiple]=\"true\"\n                                  [items]=\"propertyTypes\"\n                                  [active]=\"propertyTypesSelected\"\n                                  (data)=\"refreshValueUpdatePropertyTypes($event)\"\n                                  placeholder=\"No Property Market selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\" >Investor Types:</span>\n                <span class=\"\">\n                      <ng-select  [multiple]=\"false\"\n                                  [items]=\"investorType\"\n                                  [active]=\"investorTypeSelected\"\n                                  (data)=\"refreshValueUpdateInvestorType($event)\"\n                                  placeholder=\"No investor type selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\" >Notes:</span>\n                <span class=\"\">\n                      <textarea style=\"width: 100%;     line-height: 1.4em;\" (blur)=\"onBlurDescription($event.target.innerHTML)\" [(ngModel)]=\"companyUpdateObj.description\" name=\"contactNotes\" rows=\"2\" cols=\"80\"></textarea>\n                </span>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-box tab-box\">\n    <div class=\"row user-tabs\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 line-tabs\">\n        <ul class=\"nav nav-tabs tabs nav-tabs-bottom\" style=\"    text-align: center;\">\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#contacts\">Contacts</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#portfolio\" >Portfolio</a></li>\n          <li class=\"active col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#activity\" >Activity</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#projects\" >Projects</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#listing\" >Listings</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#needs\" >Needs</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#files\">Files</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#notes\">Notes</a></li>\n\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"tab-content  profile-tab-content\">\n\n        <div id=\"activity\" class=\"tab-pane fade in active\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div>\n                <div class=\"activity\">\n                  <div class=\"activity-box\">\n                    <ul class=\"activity-list\">\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Lesley Grauer\">\n                            <img alt=\"Lesley Grauer\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Lesley Grauer</a> added new task <a >Find 3BHK</a>\n                            <span class=\"time\">4 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a class=\"avatar\" title=\"\" data-toggle=\"tooltip\" style=\"background-color: #ff6d00\" data-original-title=\"Jeffery Lalor\">L</a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Loren Gatlin</a> and <a class=\"name\">Tarah Shropshire</a> to project <a >Waterloo building sale</a>\n                            <span class=\"time\">6 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Catherine Manseau\">\n                            <img alt=\"Catherine Manseau\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Catherine Manseau</a> completed task <a >Meeting with client</a>\n                            <span class=\"time\">12 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Bernardo Galaviz\">\n                            <img alt=\"Bernardo Galaviz\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Bernardo Galaviz</a> changed the task name <a >Resale of property</a>\n                            <span class=\"time\">1 day ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Mike Litorus\">\n                            <img alt=\"Mike Litorus\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Mike Litorus</a> added new task <a >File tax for property</a>\n                            <span class=\"time\">2 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Jeffery Lalor\">\n                            <img alt=\"Jeffery Lalor\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Jeffrey Warden</a> and <a class=\"name\">Bernardo Galaviz</a> to the task of <a >Tata and Birla property dispute</a>\n                            <span class=\"time\">7 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"portfolio\" class=\"tab-pane fade\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property One</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Two</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Three</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Four</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n        <div id=\"projects\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"    padding: 0;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th class=\"col-md-3\">Project Name </th>\n                      <th class=\"col-md-3\">Details</th>\n                      <th class=\"text-right col-md-1\">Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>\n                        <h2><a >Project One</a></h2>\n                        <small class=\"block text-ellipsis\">\n                           <span class=\"text-muted\"> 01st of January, 2018 </span>\n                        </small>\n                      </td>\n                      <td>\n                        Some description about this project to give you an idea about what its really about.\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Two</a></h2>\n                        <small class=\"block text-ellipsis\">\n                         <span class=\"text-muted\">12th of March, 2018</span>\n                        </small>\n                      </td>\n                      <td>\n                        Some description about this project to give you an idea about what its really about.\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Three</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-muted\">20th of June, 2018 </span>\n                        </small>\n                      </td>\n                      <td>\n                        Some description about this project to give you an idea about what its really about.\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a  class=\"text-primary\">View all projects</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"listing\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>Listing ID</th>\n                      <th>Subject</th>\n                      <th>Date</th>\n\n                      <th>Status</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td><a >#LST-0001</a></td>\n                      <td>\n                        <h2><a >Corner office at 21st and Lex</a></h2>\n                      </td>\n                      <td>30 Aug 2018</td>\n                      <td>\n                        <span class=\"label label-warning-border\">Pending</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0002</a></td>\n                      <td>\n                        <h2><a >Supermarket at 21st Jump Street</a></h2>\n                      </td>\n                      <td>17 Sep 2018</td>\n                      <td>\n                        <span class=\"label label-success-border\">Accepted</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0003</a></td>\n                      <td>\n                        <h2><a >Warehouse for sale at dock yards. </a></h2>\n                      </td>\n                      <td>30 Nov 2018</td>\n                      <td>\n                        <span class=\"label label-danger-border\">Rejected</span>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all listings</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"needs\" class=\"tab-pane fade\">\n          <div class=\"add-task-btn-wrapper\" style=\"padding-bottom: 12px; float: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"add-task-btn btn btn-default btn-xs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Needs\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n          </div>\n          <div class=\"task-wrapper\" style=\"    padding: 0;\">\n            <div class=\"task-list-container\">\n              <div class=\"task-list-body\" style=\"    width: 100%;\">\n                <ul id=\"task-list\">\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">West open house.</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Italian flooring</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"completed task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\">Guest rooms</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Three Bedrooms</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Some other need</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n\n                </ul>\n              </div>\n              <div class=\"task-list-footer\">\n                <div class=\"new-task-wrapper\">\n                  <textarea id=\"new-task\" placeholder=\"Enter new need here. . .\"></textarea>\n                  <span class=\"error-message hidden\">You need to enter a need first</span>\n                  <span class=\"add-new-task-btn btn\" id=\"add-task\">Add Need</span>\n                  <span class=\"cancel-btn btn\" id=\"close-task-panel\">Close</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"files\" class=\"tab-pane fade\">\n          <div class=\"panel\" style=\"padding: 0px;\">\n            <div class=\"panel-body\">\n\n              <ul class=\"files-list\">\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >Some file name.xls</a></span>\n                      <span class=\"file-author\"><a >Norris</a></span> <span class=\"file-date\">May 11th at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 14.8Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                          <li><a href=\"javascript:void(0)\">Delete</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >some other file name (demo).xls</a></span>\n                      <span class=\"file-author\"><a >Stevens</a></span> <span class=\"file-date\">May 01st at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 1.2Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"contacts\" class=\"tab-pane fade\">\n\n\n\n              <div class=\"row staff-grid-row\">\n                <div class=\"col-md-4 col-sm-4 col-xs-6 col-lg-3\">\n                  <div class=\"profile-widget\">\n                    <div class=\"profile-img\">\n                      <a  class=\"avatar\">C</a>\n                    </div>\n                    <div class=\"dropdown profile-action\">\n                      <a href=\"#\" class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                      <ul class=\"dropdown-menu pull-right\">\n                        <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#edit_client\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                        <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#delete_client\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                      </ul>\n                    </div>\n                    <h4 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a href=\"client-profile.html\">Contact Name</a></h4>\n                    <h5 class=\"user-name m-t-10 m-b-0 text-ellipsis text-muted\"><a href=\"client-profile.html\">CEO</a></h5>\n                    <!--<div class=\"small text-muted\">CEO</div>-->\n                    <a class=\"btn btn-default btn-sm m-t-10\">View Profile</a>\n                  </div>\n                </div>\n\n              </div>\n\n\n\n        </div>\n\n        <div id=\"notes\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>ID</th>\n                      <th>Notes</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>1</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>2</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>3</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>4</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>5</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all notes</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-details/company-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(toastr, vcr, af, router, afStorage) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.afStorage = afStorage;
        this.companyUpdateObj = {
            'companyName': '',
            'companyType': '',
            'companyPhone': '',
            'companyFax': '',
            'companyEmail': '',
            'companyWebsite': '',
            'investorType': '',
            'companyStreet': '',
            'companyCity': '',
            'companyZip': '',
            'companyState': '',
            'companyCountry': '',
            'description': '',
            'propertyMarkets': '',
            'propertyTypes': '',
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "contactPicture": ""
        };
        //MultiSelect - ng2Select - COMPANY TYPE
        this.companyType = [];
        this.companyTypeSelected = [];
        this.valueCompanyType = [];
        this.valueUpdateCompanyType = [];
        //MultiSelect - ng2Select - INVESTOR TYPE
        this.investorTypeSelected = [];
        this.investorType = [];
        this.valueInvestorType = '';
        this.valueUpdateInvestorType = '';
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyMarketsSelected = [];
        this.propertyMarkets = [];
        this.valuePropertyMarkets = [];
        this.valueUpdatePropertyMarkets = [];
        //MultiSelect - ng2Select - PROPERTY TYPES
        this.propertyTypesSelected = [];
        this.propertyTypes = [];
        this.valuePropertyTypes = [];
        this.valueUpdatePropertyTypes = [];
        //Support Variables
        this.userId = '';
        //Update Key temp variable
        this.currentUpdateKey = '';
        //Update pic url
        this.url = '';
        //To pull routed data i.e company id
        this.routeState = "";
        //Push id of current company
        this.companyId = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("/crm/company");
        //MultiSelect - ng2Select - COMPANY TYPE
        this.companyType = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];
        //MultiSelect - ng2Select - INVESTOR TYPE
        this.investorType = ["Institutional", "REIT", "Private Equity", "Syndicator", "Individual"];
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyMarkets = ["Central Northeast", "Damascus", "East Portland", "Troutdale/Gresham", "Yamhill County"];
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];
        //Get User ID from Firebase Authentication
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        //Pull in company id passed by company-list component
        this.routeState = this.router.getNavigatedData();
        if (this.routeState) {
            if (this.routeState[0]) {
                if (this.routeState[0]['companyId'] != '') {
                    this.companyId = this.routeState[0]['companyId'];
                    this.currentUpdateKey = this.routeState[0]['companyId'];
                    this.loadEdit(this.routeState[0]['companyId']);
                }
                else {
                    this.router.navigate(['company']);
                }
            }
            else {
                this.router.navigate(['company']);
            }
        }
        else {
            this.router.navigate(['company']);
        }
        this.companyRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref("/crm/company");
    };
    CompanyDetailsComponent.prototype.loadEdit = function (id) {
        var _this = this;
        this.currentUpdateKey = id;
        this.companyRef.child(id).once('value', function (snapshot) {
            _this.companyUpdateObj = {
                "companyName": snapshot.val()["companyName"],
                "companyType": snapshot.val()["companyType"],
                "companyPhone": snapshot.val()["companyPhone"],
                "companyFax": snapshot.val()["companyFax"],
                "companyEmail": snapshot.val()["companyEmail"],
                "companyWebsite": snapshot.val()["companyWebsite"],
                "investorType": snapshot.val()["investorType"],
                "companyStreet": snapshot.val()["companyStreet"],
                "companyCity": snapshot.val()["companyCity"],
                "companyZip": snapshot.val()["companyZip"],
                "companyState": snapshot.val()["companyState"],
                "companyCountry": snapshot.val()["companyCountry"],
                "description": snapshot.val()["description"],
                "propertyMarkets": snapshot.val()["propertyMarkets"],
                "propertyTypes": snapshot.val()["propertyTypes"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"],
                "contactPicture": snapshot.val()["contactPicture"],
            };
            _this.companyTypeSelected = [];
            _this.investorTypeSelected = [];
            _this.propertyMarketsSelected = [];
            _this.propertyTypesSelected = [];
            _this.url = _this.companyUpdateObj.contactPicture;
            _this.valueUpdateCompanyType = [];
            _this.valueUpdatePropertyMarkets = [];
            _this.valueUpdatePropertyTypes = [];
            _this.valueUpdateInvestorType = '';
            if (_this.companyUpdateObj.companyType) {
                _this.companyUpdateObj.companyType.forEach(function (data) {
                    _this.companyTypeSelected.push({ text: data, id: data });
                    _this.companyTypeSelected = _this.companyTypeSelected.slice();
                    _this.valueUpdateCompanyType.push(data);
                    _this.valueUpdateCompanyType = _this.valueUpdateCompanyType.slice();
                });
            }
            if (_this.companyUpdateObj.investorType) {
                _this.investorTypeSelected.push({
                    text: _this.companyUpdateObj.investorType,
                    id: _this.companyUpdateObj.investorType
                });
                _this.investorTypeSelected = _this.investorTypeSelected.slice();
                _this.valueUpdateInvestorType = _this.companyUpdateObj.investorType;
            }
            if (_this.companyUpdateObj.propertyMarkets) {
                _this.companyUpdateObj.propertyMarkets.forEach(function (data) {
                    _this.propertyMarketsSelected.push({ text: data, id: data });
                    _this.propertyMarketsSelected = _this.propertyMarketsSelected.slice();
                    _this.valueUpdatePropertyMarkets.push(data);
                    _this.valueUpdatePropertyMarkets = _this.valueUpdatePropertyMarkets.slice();
                });
            }
            if (_this.companyUpdateObj.propertyTypes) {
                _this.companyUpdateObj.propertyTypes.forEach(function (data) {
                    _this.propertyTypesSelected.push({ text: data, id: data });
                    _this.propertyTypesSelected = _this.propertyTypesSelected.slice();
                    _this.valueUpdatePropertyTypes.push(data);
                    _this.valueUpdatePropertyTypes = _this.valueUpdatePropertyTypes.slice();
                });
            }
        });
    };
    //Helper function - generates unique random id for images being uploaded to firebase storage
    CompanyDetailsComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    CompanyDetailsComponent.prototype.updateCompany = function () {
        var _this = this;
        if (this.companyUpdateObj.companyName.length <= 0) {
            this.toastr.error('Company name required.', 'Error!');
        }
        else {
            this.companyUpdateObj.companyType = this.valueUpdateCompanyType;
            this.companyUpdateObj.investorType = this.valueUpdateInvestorType;
            this.companyUpdateObj.propertyMarkets = this.valueUpdatePropertyMarkets;
            this.companyUpdateObj.propertyTypes = this.valueUpdatePropertyTypes;
            this.companyUpdateObj.updateTime = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"].ServerValue.TIMESTAMP;
            this.companyUpdateObj.updatedBy = this.userId;
            if (typeof this.file != 'undefined') {
                __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref().child('/crm/company/' + this.makeid() + '.png').put(this.file).then(function (snapshot) {
                    _this.companyUpdateObj.contactPicture = snapshot.downloadURL;
                    __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/crm/company/' + _this.currentUpdateKey).update(_this.companyUpdateObj).then(function (result) {
                        _this.loadEdit(_this.currentUpdateKey);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }).catch(function (error) { console.log(error); });
            }
            else {
                if (!this.companyUpdateObj.contactPicture) {
                    this.companyUpdateObj.contactPicture = this.url;
                }
                __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/crm/company/' + this.currentUpdateKey).update(this.companyUpdateObj).then(function (result) {
                    _this.url = "./../../../../../assets/images/user.jpg";
                    _this.loadEdit(_this.currentUpdateKey);
                });
            }
        }
    };
    CompanyDetailsComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.file = event.srcElement.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.updateCompany();
        }
    };
    //MultiSelect - ng2Select - COMPANY TYPE
    CompanyDetailsComponent.prototype.refreshValueCompanyType = function (value) {
        var _this = this;
        this.valueCompanyType = [];
        value.forEach(function (element) {
            _this.valueCompanyType.push(element.id);
        });
    };
    CompanyDetailsComponent.prototype.refreshValueUpdateCompanyType = function (value) {
        var _this = this;
        this.valueUpdateCompanyType = [];
        value.forEach(function (element) {
            _this.valueUpdateCompanyType.push(element.id);
        });
        this.updateCompany();
    };
    //MultiSelect - ng2Select - INVESTOR TYPE
    CompanyDetailsComponent.prototype.refreshValueInvestorType = function (value) {
        this.valueInvestorType = value.id;
    };
    CompanyDetailsComponent.prototype.refreshValueUpdateInvestorType = function (value) {
        this.valueUpdateInvestorType = value.id;
        this.updateCompany();
    };
    //MultiSelect - ng2Select - PROPERTY MARKETS
    CompanyDetailsComponent.prototype.refreshValuePropertyMarkets = function (value) {
        var _this = this;
        this.valuePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valuePropertyMarkets.push(element.id);
        });
    };
    CompanyDetailsComponent.prototype.refreshValueUpdatePropertyMarkets = function (value) {
        var _this = this;
        this.valueUpdatePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valueUpdatePropertyMarkets.push(element.id);
        });
        this.updateCompany();
    };
    //MultiSelect - ng2Select - PROPERTY TYPES
    CompanyDetailsComponent.prototype.refreshValuePropertyTypes = function (value) {
        var _this = this;
        this.valuePropertyTypes = [];
        value.forEach(function (element) {
            _this.valuePropertyTypes.push(element.id);
        });
    };
    CompanyDetailsComponent.prototype.refreshValueUpdatePropertyTypes = function (value) {
        var _this = this;
        this.valueUpdatePropertyTypes = [];
        value.forEach(function (element) {
            _this.valueUpdatePropertyTypes.push(element.id);
        });
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyName = function (e) {
        this.companyUpdateObj.companyName = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyStreet = function (e) {
        this.companyUpdateObj.companyStreet = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyCity = function (e) {
        this.companyUpdateObj.companyCity = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyState = function (e) {
        this.companyUpdateObj.companyState = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyCountry = function (e) {
        this.companyUpdateObj.companyCountry = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyZip = function (e) {
        this.companyUpdateObj.companyZip = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyPhone = function (e) {
        this.companyUpdateObj.companyPhone = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyFax = function (e) {
        this.companyUpdateObj.companyFax = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyEmail = function (e) {
        this.companyUpdateObj.companyEmail = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurCompanyWebsite = function (e) {
        this.companyUpdateObj.companyWebsite = e;
        this.updateCompany();
    };
    CompanyDetailsComponent.prototype.onBlurDescription = function (e) {
        this.updateCompany();
    };
    CompanyDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__("../../../../../src/app/crm/main-components/company/company-details/company-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/company/company-details/company-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image--cover {\r\n  width: 130px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin: 20px;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n\r\n.image--cover2 {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #5cafe0;\r\n}\r\n\r\n.tableBody tr:nth-child(1){\r\n  -webkit-animation-delay: 0.5s;\r\n          animation-delay: 0.5s;\r\n}\r\n\r\n.tableBody tr:nth-child(2){\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n\r\n.tableBody tr:nth-child(3){\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n\r\n.tableBody tr:nth-child(4){\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n\r\n.tableBody tr:nth-child(5){\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n\r\n.tableBody tr:nth-child(6){\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n\r\n.tableBody tr:nth-child(7){\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n\r\n.tableBody tr:nth-child(8){\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n\r\n.tableBody tr:nth-child(9){\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n\r\n.tableBody tr:nth-child(10){\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n\r\n.tableBody tr:nth-child(11){\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n\r\n.tableBody tr:nth-child(12){\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n\r\n.tableBody tr:nth-child(13){\r\n  -webkit-animation-delay: 3.1s;\r\n          animation-delay: 3.1s;\r\n}\r\n\r\n.tableBody tr:nth-child(14){\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n\r\n.tableBody tr:nth-child(15){\r\n  -webkit-animation-delay: 3.5s;\r\n          animation-delay: 3.5s;\r\n}\r\n\r\ntable.dataTable.no-footer{\r\n  border-bottom: none;\r\n}\r\n\r\ntable.table td h2 a:hover {\r\n  color: #429fd7;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xs-4\">\n    <h4 class=\"page-title\">Companies</h4>\n  </div>\n  <div class=\"col-xs-8 text-right m-b-30\">\n    <a  class=\"btn btn-primary pull-right rounded\" data-toggle=\"modal\" data-target=\"#add_employee\"><i class=\"fa fa-plus\"></i> Add company</a>\n    <div class=\"view-icons\">\n    <a (click)=\"pivotTable('block')\" class=\"grid-view btn btn-link\"><i class=\"fa fa-th\"></i></a>\n    <a (click)=\"pivotTable('list')\" class=\"list-view btn btn-link active\"><i class=\"fa fa-bars\"></i></a>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"\">\n\n      <div [hidden]=\"pivot\">\n        <table *ngIf=\"companyList.length > 0\" datatable id=\"example\"  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table\" style=\"font-size: 12px;\">\n        <thead>\n        <tr>\n          <th class=\"text-center\">Company Name</th>\n          <th class=\"text-center\">Company Type</th>\n          <th class=\"text-center\">Phone</th>\n          <th class=\"text-center\">Email</th>\n          <th class=\"text-center\">Investor Type</th>\n          <th class=\"text-center\">Property Markets</th>\n          <th  class=\"text-center\">Property Types</th>\n          <th class=\"text-right\">Action</th>\n        </tr>\n        </thead>\n        <tbody class=\"tableBody\">\n        <tr *ngFor=\"let company of companyList; let i = index\" class=\"animated fadeInUp \">\n          <td class=\"text-center\">\n            <a *ngIf=\"!company.contactPicture || (company.contactPicture).length < 0\" class=\"avatar\">{{(company.companyName).substr(0,1)}}</a>\n            <a *ngIf=\"company.contactPicture || (company.contactPicture).length > 0\" class=\"avatar\"><img src=\"{{company.contactPicture}}\"></a>\n            <h2><a (click)=\"gotoCompanyDetails(company.rowId);\" style=\"cursor: pointer;\"> {{company.companyName}} <span></span></a></h2>\n          </td>\n          <td  class=\"text-center\" >{{company.companyType}} </td>\n          <td  class=\"text-center\">{{company.companyPhone}} </td>\n          <td  class=\"text-center\">{{company.companyEmail}} </td>\n          <td  class=\"text-center\">{{company.investorType}} </td>\n          <td  class=\"text-center\">{{company.propertyMarkets}} </td>\n          <td  class=\"text-center\">{{company.propertyTypes}} </td>\n          <td class=\"text-right\" style=\"padding: 0;\">\n            <a  (click)=\"gotoCompanyDetails(company.rowId);\"   style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> </a>\n            <a (click)=\"loadEdit(company.rowId);\" data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> </a>\n            <a  (click)=\"loadDelete(company.rowId);\"  data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> </a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      </div>\n\n      <div [hidden]=\"!pivot\">\n        <div  *ngIf=\"companyList.length > 0\"  class=\"row staff-grid-row\">\n        <div *ngFor=\"let company of companyList; let i = index\" class=\"animated fadeInUp col-md-4 col-sm-4 col-xs-6 col-lg-3\">\n          <div class=\"profile-widget\">\n            <div class=\"profile-img\">\n              <img *ngIf=\"company.contactPicture.length > 0\" src=\"{{company.contactPicture}}\" class=\"image--cover2\">\n              <img *ngIf=\"company.contactPicture.length < 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover2\">\n              <!--<a class=\"avatar\">G</a>-->\n            </div>\n            <div class=\"dropdown profile-action\">\n              <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n              <ul class=\"dropdown-menu pull-right\">\n                <li><a  (click)=\"gotoCompanyDetails(company.rowId);\" style=\"font-size: 100%; cursor: pointer;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> Details </a></li>\n                <li><a (click)=\"loadEdit(company.rowId);\" data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit </a></li>\n                <li><a  (click)=\"loadDelete(company.rowId);\"  data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> Delete </a></li>\n              </ul>\n            </div>\n            <h4 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a style=\"cursor: pointer;\" (click)=\"gotoCompanyDetails(company.rowId);\">{{company.companyName}}</a></h4>\n            <h5 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a >{{company.companyPhone}}</a></h5>\n            <div class=\"small text-muted\">{{company.companyEmail}}</div>\n          </div>\n        </div>\n      </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n\n\n<div id=\"delete_employee\" style=\"text-align: center;\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-md\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete Company</h4>\n      </div>\n      <form>\n        <div class=\"modal-body card-box\">\n          <p>Are you sure want to delete this?</p>\n          <div class=\"m-t-20\"> <a  class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n            <button (click)=\"deleteCompany()\" data-dismiss=\"modal\" type=\"submit\" class=\"btn btn-danger\">Delete</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div id=\"add_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    <div class=\"modal-content modal-lg\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"text-align: center;\">Add Company</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"m-b-30\">\n          <div class=\"row\">\n\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">General Details</h4>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Company Name <span class=\"text-danger\">*</span></label>\n                <input [(ngModel)]=\"companyAddObj.companyName\" name=\"firstName\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Company Type </label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"companyType\"\n                            (data)=\"refreshValueCompanyType($event)\"\n                            placeholder=\"No company type selected\"></ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Investor Type </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"investorType\"\n                            (data)=\"refreshValueInvestorType($event)\"\n                            placeholder=\"No investor type selected\"></ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Contact Details</h4>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Phone Number</label>\n                <input [(ngModel)]=\"companyAddObj.companyPhone\" name=\"phoneNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\"> Company Website </label>\n                <input [(ngModel)]=\"companyAddObj.companyWebsite\" name=\"mobileNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fax Number</label>\n                <input [(ngModel)]=\"companyAddObj.companyFax\" name=\"faxNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Comany Email</label>\n                <input [(ngModel)]=\"companyAddObj.companyEmail\" name=\"primaryEmail\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Mailing Details</h4>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Street</label>\n                <input [(ngModel)]=\"companyAddObj.companyStreet\" name=\"mailingStreet\" class=\"form-control\" type=\"text\">\n\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing City</label>\n                <input  [(ngModel)]=\"companyAddObj.companyCity\" name=\"mailingCity\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Zip</label>\n                <input [(ngModel)]=\"companyAddObj.companyZip\" name=\"mailingZip\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing State</label>\n                <input  [(ngModel)]=\"companyAddObj.companyState\" name=\"mailingState\"  class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Country</label>\n                <input  [(ngModel)]=\"companyAddObj.companyCountry\" name=\"mailingCountry\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Extra Details</h4>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Property Markets</label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"propertyMarkets\"\n                            (data)=\"refreshValuePropertyMarkets($event)\"\n                            placeholder=\"No property markets selected\"></ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Property Types</label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"propertyTypes\"\n                            (data)=\"refreshValuePropertyTypes($event)\"\n                            placeholder=\"No property types selected\"></ng-select>\n              </div>\n            </div>\n\n            <div  class=\"col-sm-12\">\n              <div  class=\"form-group\">\n                <label  class=\"control-label\">Description</label>\n                <textarea [(ngModel)]=\"companyAddObj.description\" cols=\"80\" name=\"description\" rows=\"2\" style=\"width: 100%;\" ></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"m-t-20 text-center\">\n            <button (click)=\"addCompany()\" class=\"btn btn-primary\">Create Contact</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div id=\"edit_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    <div class=\"modal-content modal-lg\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"text-align: center;\">Edit Company</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"m-b-30\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-9\">\n          <div class=\"row\">\n\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">General Details</h4>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Company Name <span class=\"text-danger\">*</span></label>\n                <input [(ngModel)]=\"companyUpdateObj.companyName\" name=\"firstName\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Company Type </label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"companyType\"\n                            [active]=\"companyTypeSelected\"\n                            (data)=\"refreshValueUpdateCompanyType($event)\"\n                            placeholder=\"No company type selected\"></ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Investor Type </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"investorType\"\n                            [active]=\"investorTypeSelected\"\n                            (data)=\"refreshValueUpdateInvestorType($event)\"\n                            placeholder=\"No investor type selected\"></ng-select>\n              </div>\n            </div>\n          </div>\n  </div>\n\n\n\n          <div class=\"col-md-3\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <img *ngIf=\"url.length > 0\" src=\"{{url}}\" class=\"image--cover\">\n                <img *ngIf=\"url.length <= 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Contact Picture</label>\n                  <input class=\"form-control\" type=\"file\" (change)=\"uploadFile($event)\" >\n                </div>\n              </div>\n            </div>\n          </div>\n</div>\n\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Contact Details</h4>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Phone Number</label>\n                <input [(ngModel)]=\"companyUpdateObj.companyPhone\" name=\"phoneNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\"> Company Website </label>\n                <input [(ngModel)]=\"companyUpdateObj.companyWebsite\" name=\"mobileNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Fax Number</label>\n                <input [(ngModel)]=\"companyUpdateObj.companyFax\" name=\"faxNumber\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Comany Email</label>\n                <input [(ngModel)]=\"companyUpdateObj.companyEmail\" name=\"primaryEmail\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Mailing Details</h4>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Street</label>\n                <input [(ngModel)]=\"companyUpdateObj.companyStreet\" name=\"mailingStreet\" class=\"form-control\" type=\"text\">\n\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing City</label>\n                <input  [(ngModel)]=\"companyUpdateObj.companyCity\" name=\"mailingCity\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Zip</label>\n                <input [(ngModel)]=\"companyUpdateObj.companyZip\" name=\"mailingZip\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing State</label>\n                <input  [(ngModel)]=\"companyUpdateObj.companyState\" name=\"mailingState\"  class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Mailing Country</label>\n                <input  [(ngModel)]=\"companyUpdateObj.companyCountry\" name=\"mailingCountry\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <br>\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Extra Details</h4>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Property Markets</label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"propertyMarkets\"\n                            [active]=\"propertyMarketsSelected\"\n                            (data)=\"refreshValueUpdatePropertyMarkets($event)\"\n                            placeholder=\"No property markets selected\"></ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Property Types</label>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"propertyTypes\"\n                            [active]=\"propertyTypesSelected\"\n                            (data)=\"refreshValueUpdatePropertyTypes($event)\"\n                            placeholder=\"No property types selected\"></ng-select>\n              </div>\n            </div>\n\n            <div  class=\"col-sm-12\">\n              <div  class=\"form-group\">\n                <label  class=\"control-label\">Description</label>\n                <textarea [(ngModel)]=\"companyUpdateObj.description\" cols=\"80\" name=\"description\" rows=\"2\" style=\"width: 100%;\" ></textarea>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"m-t-20 text-center\">\n            <button class=\"btn btn-primary\" (click)=\"updateCompany()\">Save Changes</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(toastr, vcr, af, router, afStorage) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.afStorage = afStorage;
        this.companyList = [];
        this.companyUpdateObj = {};
        this.companyAddObj = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        //MultiSelect - ng2Select - COMPANY TYPE
        this.companyType = [];
        this.companyTypeSelected = [];
        this.valueCompanyType = [];
        this.valueUpdateCompanyType = [];
        //MultiSelect - ng2Select - INVESTOR TYPE
        this.investorTypeSelected = [];
        this.investorType = [];
        this.valueInvestorType = '';
        this.valueUpdateInvestorType = '';
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyMarketsSelected = [];
        this.propertyMarkets = [];
        this.valuePropertyMarkets = [];
        this.valueUpdatePropertyMarkets = [];
        //MultiSelect - ng2Select - PROPERTY TYPES
        this.propertyTypesSelected = [];
        this.propertyTypes = [];
        this.valuePropertyTypes = [];
        this.valueUpdatePropertyTypes = [];
        //Support Variables
        this.userId = '';
        //Delete Key temp variable
        this.currentDeleteKey = '';
        //Update Key temp variable
        this.currentUpdateKey = '';
        //Update pic url
        this.url = '';
        //Stores view type i.e. block or table view
        this.pivot = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Initilize compulsry variables
        this.initNewCompany();
        //MultiSelect - ng2Select - COMPANY TYPE
        this.companyType = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];
        //MultiSelect - ng2Select - INVESTOR TYPE
        this.investorType = ["Institutional", "REIT", "Private Equity", "Syndicator", "Individual"];
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyMarkets = ["Central Northeast", "Damascus", "East Portland", "Troutdale/Gresham", "Yamhill County"];
        //MultiSelect - ng2Select - PROPERTY MARKETS
        this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];
        // Datatables post config
        this.dtOptions = {
            paging: false
        };
        //Get User ID from Firebase Authentication
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        //Fill table from firebase
        this.companyRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref("/crm/company");
        this.companyRef.on('value', function (snapshot) {
            _this.companyList = [];
            var count = 0;
            for (var key in snapshot.val()) {
                var temp = snapshot.val()[key];
                temp.rowId = key;
                var lastIndex = _this.companyList.push(temp) - 1;
                count++;
                if (snapshot.numChildren() == count) {
                    if (!_this.dtElement) {
                        setTimeout(function () {
                            _this.dtTrigger.next();
                            _this.dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.destroy();
                                setTimeout(function () { _this.dtTrigger.next(); });
                            });
                        });
                    }
                }
            }
        });
    };
    //Initilize and Reinitilize Add company object
    CompanyListComponent.prototype.initNewCompany = function () {
        this.companyAddObj = {
            'companyName': '',
            'companyType': '',
            'companyPhone': '',
            'companyFax': '',
            'companyEmail': '',
            'companyWebsite': '',
            'investorType': '',
            'companyStreet': '',
            'companyCity': '',
            'companyZip': '',
            'companyState': '',
            'companyCountry': '',
            'description': '',
            'propertyMarkets': '',
            'propertyTypes': '',
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "contactPicture": ""
        };
        this.companyUpdateObj = {
            'companyName': '',
            'companyType': '',
            'companyPhone': '',
            'companyFax': '',
            'companyEmail': '',
            'companyWebsite': '',
            'investorType': '',
            'companyStreet': '',
            'companyCity': '',
            'companyZip': '',
            'companyState': '',
            'companyCountry': '',
            'description': '',
            'propertyMarkets': '',
            'propertyTypes': '',
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "contactPicture": ""
        };
    };
    //Add a new company
    CompanyListComponent.prototype.addCompany = function () {
        var _this = this;
        //Compulsary field check
        if (this.companyAddObj.companyName.length <= 0) {
            this.toastr.error('First Name required.', 'Error!');
        }
        else {
            //Multi-select value extraction
            this.companyAddObj.companyType = this.valueCompanyType;
            this.companyAddObj.investorType = this.valueInvestorType;
            this.companyAddObj.propertyMarkets = this.valuePropertyMarkets;
            this.companyAddObj.propertyTypes = this.valuePropertyTypes;
            //Record meta data
            this.companyAddObj.createTime = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP;
            this.companyAddObj.createdBy = this.userId;
            __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/crm/company/').push(this.companyAddObj).then(function (result) {
                $(".close").trigger("click");
                _this.initNewCompany();
                _this.toastr.success('New company added.', 'Sucess!');
            });
        }
    };
    //Support function to temporally store item id to be deleted.
    CompanyListComponent.prototype.loadDelete = function (id) {
        this.currentDeleteKey = id;
    };
    CompanyListComponent.prototype.loadEdit = function (id) {
        var _this = this;
        this.currentUpdateKey = id;
        this.companyRef.child(id).once('value', function (snapshot) {
            _this.companyUpdateObj = {
                "companyName": snapshot.val()["companyName"],
                "companyType": snapshot.val()["companyType"],
                "companyPhone": snapshot.val()["companyPhone"],
                "companyFax": snapshot.val()["companyFax"],
                "companyEmail": snapshot.val()["companyEmail"],
                "companyWebsite": snapshot.val()["companyWebsite"],
                "investorType": snapshot.val()["investorType"],
                "companyStreet": snapshot.val()["companyStreet"],
                "companyCity": snapshot.val()["companyCity"],
                "companyZip": snapshot.val()["companyZip"],
                "companyState": snapshot.val()["companyState"],
                "companyCountry": snapshot.val()["companyCountry"],
                "description": snapshot.val()["description"],
                "propertyMarkets": snapshot.val()["propertyMarkets"],
                "propertyTypes": snapshot.val()["propertyTypes"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"],
                "contactPicture": snapshot.val()["contactPicture"],
            };
            _this.companyTypeSelected = [];
            _this.investorTypeSelected = [];
            _this.propertyMarketsSelected = [];
            _this.propertyTypesSelected = [];
            _this.url = _this.companyUpdateObj.contactPicture;
            _this.valueUpdateCompanyType = [];
            _this.valuePropertyMarkets = [];
            _this.valuePropertyTypes = [];
            _this.valueUpdateInvestorType = '';
            if (_this.companyUpdateObj.companyType) {
                _this.companyUpdateObj.companyType.forEach(function (data) {
                    _this.companyTypeSelected.push({ text: data, id: data });
                    _this.companyTypeSelected = _this.companyTypeSelected.slice();
                    _this.valueUpdateCompanyType.push(data);
                    _this.valueUpdateCompanyType = _this.valueUpdateCompanyType.slice();
                });
            }
            if (_this.companyUpdateObj.investorType) {
                _this.investorTypeSelected.push({
                    text: _this.companyUpdateObj.investorType,
                    id: _this.companyUpdateObj.investorType
                });
                _this.investorTypeSelected = _this.investorTypeSelected.slice();
                _this.valueUpdateInvestorType = _this.companyUpdateObj.investorType;
            }
            if (_this.companyUpdateObj.propertyMarkets) {
                _this.companyUpdateObj.propertyMarkets.forEach(function (data) {
                    _this.propertyMarketsSelected.push({ text: data, id: data });
                    _this.propertyMarketsSelected = _this.propertyMarketsSelected.slice();
                    _this.valuePropertyMarkets.push(data);
                    _this.valuePropertyMarkets = _this.valuePropertyMarkets.slice();
                });
            }
            if (_this.companyUpdateObj.propertyTypes) {
                _this.companyUpdateObj.propertyTypes.forEach(function (data) {
                    _this.propertyTypesSelected.push({ text: data, id: data });
                    _this.propertyTypesSelected = _this.propertyTypesSelected.slice();
                    _this.valuePropertyTypes.push(data);
                    _this.valuePropertyTypes = _this.valuePropertyTypes.slice();
                });
            }
        });
    };
    //Helper function - generates unique random id for images being uploaded to firebase storage
    CompanyListComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    CompanyListComponent.prototype.updateCompany = function () {
        var _this = this;
        if (this.companyUpdateObj.companyName.length <= 0) {
            this.toastr.error('Company name required.', 'Error!');
        }
        else {
            this.companyUpdateObj.companyType = this.valueUpdateCompanyType;
            this.companyUpdateObj.investorType = this.valueUpdateInvestorType;
            this.companyUpdateObj.propertyMarkets = this.valueUpdatePropertyMarkets;
            this.companyUpdateObj.propertyTypes = this.valueUpdatePropertyTypes;
            this.companyUpdateObj.updateTime = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP;
            this.companyUpdateObj.updatedBy = this.userId;
            if (typeof this.file != 'undefined') {
                __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref().child('/crm/company/' + this.makeid() + '.png').put(this.file).then(function (snapshot) {
                    _this.companyUpdateObj.contactPicture = snapshot.downloadURL;
                    __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/crm/company/' + _this.currentUpdateKey).update(_this.companyUpdateObj).then(function (result) {
                        $(".close").trigger("click");
                        _this.initNewCompany();
                        _this.toastr.success('Company updated!.', 'Sucess!');
                    }).catch(function (error) {
                        console.log(error);
                    });
                }).catch(function (error) { console.log(error); });
            }
            else {
                if (!this.companyUpdateObj.contactPicture) {
                    this.companyUpdateObj.contactPicture = this.url;
                }
                __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('/crm/company/' + this.currentUpdateKey).update(this.companyUpdateObj).then(function (result) {
                    $(".close").trigger("click");
                    _this.initNewCompany();
                    _this.toastr.success('Company updated!.', 'Sucess!');
                    _this.url = "./../../../../../assets/images/user.jpg";
                });
            }
        }
    };
    CompanyListComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.file = event.srcElement.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    //Function to toggle between two diffrent kinds of table view, i.e. Block and List view
    CompanyListComponent.prototype.pivotTable = function (viewType) {
        if (viewType == 'block') {
            this.pivot = true;
        }
        else {
            this.pivot = false;
        }
    };
    //Function to view company details page - navigates using services so that id is not displayed in URL
    CompanyListComponent.prototype.gotoCompanyDetails = function (id) {
        this.router.navigateByData({
            url: ["company/company-details"],
            data: [{ "companyId": id }]
        });
    };
    //Delete Company main function called when modal conformed.
    CompanyListComponent.prototype.deleteCompany = function () {
        var _this = this;
        this.companyRef.child(this.currentDeleteKey).remove().then(function () {
            _this.toastr.success('Company deleted!.', 'Sucess!');
        }).catch(function () {
            _this.toastr.error('Error deleting company!.', 'Error!');
        });
    };
    //MultiSelect - ng2Select - COMPANY TYPE
    CompanyListComponent.prototype.refreshValueCompanyType = function (value) {
        var _this = this;
        this.valueCompanyType = [];
        value.forEach(function (element) {
            _this.valueCompanyType.push(element.id);
        });
    };
    CompanyListComponent.prototype.refreshValueUpdateCompanyType = function (value) {
        var _this = this;
        this.valueUpdateCompanyType = [];
        value.forEach(function (element) {
            _this.valueUpdateCompanyType.push(element.id);
        });
    };
    //MultiSelect - ng2Select - INVESTOR TYPE
    CompanyListComponent.prototype.refreshValueInvestorType = function (value) {
        this.valueInvestorType = value.id;
    };
    CompanyListComponent.prototype.refreshValueUpdateInvestorType = function (value) {
        this.valueUpdateInvestorType = value.id;
    };
    //MultiSelect - ng2Select - PROPERTY MARKETS
    CompanyListComponent.prototype.refreshValuePropertyMarkets = function (value) {
        var _this = this;
        this.valuePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valuePropertyMarkets.push(element.id);
        });
    };
    CompanyListComponent.prototype.refreshValueUpdatePropertyMarkets = function (value) {
        var _this = this;
        this.valueUpdatePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valueUpdatePropertyMarkets.push(element.id);
        });
    };
    //MultiSelect - ng2Select - PROPERTY TYPES
    CompanyListComponent.prototype.refreshValuePropertyTypes = function (value) {
        var _this = this;
        this.valuePropertyTypes = [];
        value.forEach(function (element) {
            _this.valuePropertyTypes.push(element.id);
        });
    };
    CompanyListComponent.prototype.refreshValueUpdatePropertyTypes = function (value) {
        var _this = this;
        this.valueUpdatePropertyTypes = [];
        value.forEach(function (element) {
            _this.valueUpdatePropertyTypes.push(element.id);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_datatables__["a" /* DataTableDirective */])
    ], CompanyListComponent.prototype, "dtElement", void 0);
    CompanyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__("../../../../../src/app/crm/main-components/company/company-list/company-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/company/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" >\n  <app-message-box></app-message-box>\n  <div class=\"content container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company',
            template: __webpack_require__("../../../../../src/app/crm/main-components/company/company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*ng-select{*/\r\n  /*width: 60%;*/\r\n  /*float: right;*/\r\n  /*margin-right: 3%;*/\r\n  /*}*/\r\n  .image--cover {\r\n  width: 130px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin: 20px;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n  .nav-tabs.nav-tabs-bottom > li.active > a, .nav-tabs.nav-tabs-bottom > li.active > a:hover, .nav-tabs.nav-tabs-bottom > li.active > a:focus{\r\n  border-bottom-color: #1382c8;\r\n}\r\n  .avatar{\r\n  background-color: #1382c8 !important;\r\n}\r\n  .text-primary{\r\n  color: #1382c8 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--https://www.npmjs.com/package/angular-content-editable-->\n<div class=\"content container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h4 class=\"page-title\">Contact Details</h4>\n    </div>\n    <div class=\"col-sm-4 text-right m-b-30\">\n    </div>\n  </div>\n  <div class=\"card-box m-b-0\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-view\">\n          <div class=\"profile-img-wrap\" style=\"height: 50%;\">\n            <div class=\"profile-img\">\n              <a >\n                <img *ngIf=\"url.length > 0\" src=\"{{url}}\" class=\"image--cover\">\n                <img *ngIf=\"url.length <= 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover\">\n              </a>\n            </div>\n            <input style=\"    font-size: 8px;\n    outline: none;\n    border: none;\" class=\"form-control\" type=\"file\" (change)=\"uploadFile($event)\" >\n          </div>\n          <div class=\"profile-basic\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"profile-info-left\">\n                  <h3 class=\"user-name m-t-0\" >\n                    <span (blur)=\"onBlurFirstName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.firstName}}</span>\n                    <span (blur)=\"onBlurMiddleName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.middleName}}</span>\n                    <span (blur)=\"onBlurLastName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.lastName}}</span>\n                  </h3>\n                  <!--<h5 class=\"company-role m-t-0 m-b-0\" ><span (blur)=\"onBlurCompanyName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.companyName}}</span></h5>-->\n                  <!--<small class=\"text-muted\" ><span (blur)=\"onBlurTitle($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.title}}</span></small>-->\n                  <!--<div class=\"staff-id\"><span (blur)=\"onBlurOccupation($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.occupation}}</span></div>-->\n                  <!--<br/>-->\n                  <!--<br/>-->\n                  <ul class=\"personal-info\">\n                    <li>\n                      <span class=\"title\">Company:</span>\n                      <span class=\"text\" (blur)=\"onBlurCompanyName($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.companyName}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Title:</span>\n                      <span class=\"text\" (blur)=\"onBlurTitle($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.title}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Occupation:</span>\n                      <span class=\"text\" (blur)=\"onBlurOccupation($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.occupation}}</span>\n                    </li>\n\n\n                    <li>\n                      <span class=\"title\">Street:</span>\n                      <span class=\"text\" (blur)=\"onBlurMailingStreet($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mailingStreet}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">City:</span>\n                      <span class=\"text\" (blur)=\"onBlurMailingCity($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mailingCity}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">State:</span>\n                      <span class=\"text\" (blur)=\"onBlurMailingState($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mailingState}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Country:</span>\n                      <span class=\"text\" (blur)=\"onBlurMailingCountry($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mailingCountry}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Zip:</span>\n                      <span class=\"text\" (blur)=\"onBlurMailingZip($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mailingZip}}</span>\n                    </li>\n                  </ul>\n\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                <ul class=\"personal-info\">\n                  <li>\n                    <span class=\"title\">Ext:</span>\n                    <span class=\"text\" (blur)=\"onBlurExt($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.ext}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Phone:</span>\n                    <span class=\"text\" (blur)=\"onBlurPhoneNumber($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.phoneNumber}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Mobile:</span>\n                    <span class=\"text\" (blur)=\"onBlurMobileNumber($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.mobileNumber}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Home:</span>\n                    <span class=\"text\" (blur)=\"onBlurHomeNumber($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.homeNumber}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Fax:</span>\n                    <span class=\"text\" (blur)=\"onBlurFaxNumber($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.faxNumber}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Email:</span>\n                    <span class=\"text\" (blur)=\"onBlurPrimaryEmail($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.primaryEmail}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Website:</span>\n                    <span class=\"text\" (blur)=\"onBlurContactWebsite($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.contactWebsite}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Birthday:</span>\n                    <span class=\"text\" (blur)=\"onBlurBirthDate($event.target.innerHTML)\" contenteditable=\"true\">{{updatedContact.birthdate}}</span>\n                  </li>\n\n\n\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"    margin-top: 2%;\">\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                  <span class=\"title\" >Contact Types:</span>\n                  <span class=\"\">\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"contactType\"\n                                [active]=\"contactTypeSelected\"\n                                (data)=\"refreshValueUpdateContactType($event)\"\n                                placeholder=\"No contatct type selected\"></ng-select>\n                      </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n\n                      <span class=\"\">\n                        <span class=\"title\" >Property Types:</span>\n                      <ng-select  [multiple]=\"true\"\n                                  [items]=\"propertyTypes\"\n                                  [active]=\"propertyTypesSelected\"\n                                  (data)=\"refreshValueUpdatePropertyTypes($event)\"\n                                  placeholder=\"No Property Types selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                  <span class=\"title\" >Property Markets:</span>\n                  <span class=\"\">\n                      <ng-select  [multiple]=\"true\"\n                                  [items]=\"propertyMarkets\"\n                                  [active]=\"propertyMarketsSelected\"\n                                  (data)=\"refreshValueUpdatePropertyMarkets($event)\"\n                                  placeholder=\"No Property Market selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                  <span class=\"title\" >Principal Types:</span>\n                  <span class=\"\">\n                      <ng-select  [multiple]=\"false\"\n                                  [items]=\"principleType\"\n                                  [active]=\"principleTypeSelected\"\n                                  (data)=\"refreshValueUpdatePrincipalType($event)\"\n                                  placeholder=\"No principal type selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\" >Notes:</span>\n                <span class=\"\">\n                      <textarea style=\"width: 100%;     line-height: 1.4em;\" (blur)=\"onBlurContactNotes($event.target.innerHTML)\" [(ngModel)]=\"updatedContact.contactNotes\" name=\"contactNotes\" rows=\"2\" cols=\"80\"></textarea>\n                </span>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-box tab-box\">\n    <div class=\"row user-tabs\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 line-tabs\">\n        <ul class=\"nav nav-tabs tabs nav-tabs-bottom\" style=\"    text-align: center;\">\n          <li class=\"active col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#activity\" >Activity</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#portfolio\" >Portfolio</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#projects\" >Projects</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#listing\" >Listing</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#needs\" >Needs</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#files\">Files</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;\"><a data-toggle=\"tab\" href=\"#notes\" >Notes</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"tab-content  profile-tab-content\">\n\n        <div id=\"activity\" class=\"tab-pane fade in active\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div>\n                <div class=\"activity\">\n                  <div class=\"activity-box\">\n                    <ul class=\"activity-list\">\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Lesley Grauer\">\n                            <img alt=\"Lesley Grauer\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Lesley Grauer</a> added new task <a >Find 3BHK</a>\n                            <span class=\"time\">4 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a class=\"avatar\" title=\"\" data-toggle=\"tooltip\" style=\"background-color: #ff6d00\" data-original-title=\"Jeffery Lalor\">L</a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Loren Gatlin</a> and <a class=\"name\">Tarah Shropshire</a> to project <a >Waterloo building sale</a>\n                            <span class=\"time\">6 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Catherine Manseau\">\n                            <img alt=\"Catherine Manseau\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Catherine Manseau</a> completed task <a >Meeting with client</a>\n                            <span class=\"time\">12 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Bernardo Galaviz\">\n                            <img alt=\"Bernardo Galaviz\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Bernardo Galaviz</a> changed the task name <a >Resale of property</a>\n                            <span class=\"time\">1 day ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Mike Litorus\">\n                            <img alt=\"Mike Litorus\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Mike Litorus</a> added new task <a >File tax for property</a>\n                            <span class=\"time\">2 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Jeffery Lalor\">\n                            <img alt=\"Jeffery Lalor\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Jeffrey Warden</a> and <a class=\"name\">Bernardo Galaviz</a> to the task of <a >Tata and Birla property dispute</a>\n                            <span class=\"time\">7 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"portfolio\" class=\"tab-pane fade\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property One</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Two</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Three</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Property Four</a></h4>\n                <small class=\"block text-ellipsis m-b-15\">\n                  <span class=\"text-xs\">1</span> <span class=\"text-muted\">user needs partially matches, </span><br/>\n                  <span class=\"text-xs\">9</span> <span class=\"text-muted\">user needs completely matches</span>\n                </small>\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Last payed tax:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Clients who maybe intrested :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n                <p class=\"m-b-5\">Profit ratio <span class=\"text-success pull-right\">40%</span></p>\n                <div class=\"progress progress-xs m-b-0\">\n                  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 40%\" data-original-title=\"40%\"></div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n        <div id=\"projects\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"    padding: 0;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th class=\"col-md-3\">Project Name </th>\n                      <th class=\"col-md-3\">Progress</th>\n                      <th class=\"text-right col-md-1\">Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>\n                        <h2><a >Project One</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-xs\">1</span> <span class=\"text-muted\">open tasks, </span>\n                          <span class=\"text-xs\">9</span> <span class=\"text-muted\">tasks completed</span>\n                        </small>\n                      </td>\n                      <td>\n                        <div class=\"progress progress-xs progress-striped\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 65%\" data-original-title=\"65%\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Two</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-xs\">2</span> <span class=\"text-muted\">open tasks, </span>\n                          <span class=\"text-xs\">5</span> <span class=\"text-muted\">tasks completed</span>\n                        </small>\n                      </td>\n                      <td>\n                        <div class=\"progress progress-xs progress-striped\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 15%\" data-original-title=\"15%\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Three</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-xs\">3</span> <span class=\"text-muted\">open tasks, </span>\n                          <span class=\"text-xs\">3</span> <span class=\"text-muted\">tasks completed</span>\n                        </small>\n                      </td>\n                      <td>\n                        <div class=\"progress progress-xs progress-striped\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 49%\" data-original-title=\"49%\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Four</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-xs\">12</span> <span class=\"text-muted\">open tasks, </span>\n                          <span class=\"text-xs\">4</span> <span class=\"text-muted\">tasks completed</span>\n                        </small>\n                      </td>\n                      <td>\n                        <div class=\"progress progress-xs progress-striped\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 88%\" data-original-title=\"88%\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h2><a >Project Five</a></h2>\n                        <small class=\"block text-ellipsis\">\n                          <span class=\"text-xs\">7</span> <span class=\"text-muted\">open tasks, </span>\n                          <span class=\"text-xs\">14</span> <span class=\"text-muted\">tasks completed</span>\n                        </small>\n                      </td>\n                      <td>\n                        <div class=\"progress progress-xs progress-striped\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" data-toggle=\"tooltip\" title=\"\" style=\"width: 100%\" data-original-title=\"100%\"></div>\n                        </div>\n                      </td>\n                      <td class=\"text-right\">\n                        <div class=\"dropdown\">\n                          <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                          <ul class=\"dropdown-menu pull-right\">\n                            <li><a  title=\"Edit\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                            <li><a  title=\"Delete\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a  class=\"text-primary\">View all projects</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"listing\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>Listing ID</th>\n                      <th>Address</th>\n                      <th>Date</th>\n                      <th>Price</th>\n                      <th>Status</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td><a >#LST-0001</a></td>\n                      <td>\n                        <h2><a >H#2, 21st Jump Street.</a></h2>\n                      </td>\n                      <td>30 Aug 201</td>\n                      <td>$380,000</td>\n                      <td>\n                        <span class=\"label label-warning-border\">BOOKED</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0002</a></td>\n                      <td>\n                        <h2><a >Appartment 21, 21st and Lex.</a></h2>\n                      </td>\n                      <td>17 Sep 2018</td>\n                      <td>$500,000</td>\n                      <td>\n                        <span class=\"label label-success-border\">SOLD</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0003</a></td>\n                      <td>\n                        <h2><a >Corner of 23 and Waterloo.</a></h2>\n                      </td>\n                      <td>30 Nov 2018</td>\n                      <td>$600,000</td>\n                      <td>\n                        <span class=\"label label-danger-border\">FOR SALE</span>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all listings</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div id=\"needs\" class=\"tab-pane fade\">\n          <div class=\"add-task-btn-wrapper\" style=\"padding-bottom: 12px; float: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"add-task-btn btn btn-default btn-xs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Needs\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n          </div>\n          <div class=\"task-wrapper\" style=\"    padding: 0;\">\n            <div class=\"task-list-container\">\n              <div class=\"task-list-body\" style=\"    width: 100%;\">\n                <ul id=\"task-list\">\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">West open house.</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Italian flooring</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"completed task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\">Guest rooms</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Three Bedrooms</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n                  <li class=\"task\">\n                    <div class=\"task-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"task-action-btn task-check\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large complete-btn\" title=\"Mark Complete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"task-label\" contenteditable=\"true\">Some other need</span>\n                      <span class=\"task-action-btn task-btn-right\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"action-circle large delete-btn\" title=\"Delete Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">delete</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                  </li>\n\n                </ul>\n              </div>\n              <div class=\"task-list-footer\">\n                <div class=\"new-task-wrapper\">\n                  <textarea id=\"new-task\" placeholder=\"Enter new need here. . .\"></textarea>\n                  <span class=\"error-message hidden\">You need to enter a need first</span>\n                  <span class=\"add-new-task-btn btn\" id=\"add-task\">Add Need</span>\n                  <span class=\"cancel-btn btn\" id=\"close-task-panel\">Close</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div id=\"files\" class=\"tab-pane fade\">\n          <div class=\"panel\" style=\"padding: 0px;\">\n            <div class=\"panel-body\">\n\n              <ul class=\"files-list\">\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >Some file name.xls</a></span>\n                      <span class=\"file-author\"><a >Norris</a></span> <span class=\"file-date\">May 11th at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 14.8Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                          <li><a href=\"javascript:void(0)\">Delete</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >some other file name (demo).xls</a></span>\n                      <span class=\"file-author\"><a >Stevens</a></span> <span class=\"file-date\">May 01st at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 1.2Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n\n        <div id=\"notes\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>ID</th>\n                      <th>Notes</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>1</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>2</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>3</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>4</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>5</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all notes</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import * as $ from "jquery";
var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(toastr, vcr, af, router) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.userId = '';
        this.routeState = "";
        this.currentUpdateKey = "";
        this.updatedContact = {
            "firstName": "",
            "lastName": "",
            "middleName": "",
            "title": "",
            "contactPicture": "",
            "companyName": "",
            "birthdate": "",
            "occupation": "",
            "phoneNumber": "",
            "ext": "",
            "mobileNumber": "",
            "homeNumber": "",
            "faxNumber": "",
            "primaryEmail": "",
            "contactWebsite": "",
            "mailingStreet": "",
            "mailingCity": "",
            "mailingZip": "",
            "mailingState": "",
            "mailingCountry": "",
            "contactType": "",
            "principleType": "",
            "propertyMarkets": "",
            "propertyTypes": "",
            "contactNotes": "",
            "doNotCall": "",
            "verified": "",
            "emailOptOut": "",
            "research": "",
            "faxOptOut": "",
            "newsletter": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": ""
        };
        this.contactType = [];
        this.principleType = [];
        this.propertyMarkets = [];
        this.propertyTypes = [];
        this.contactTypeSelected = [];
        this.principleTypeSelected = [];
        this.propertyMarketsSelected = [];
        this.propertyTypesSelected = [];
        this.contactId = '';
        this.url = "";
        this.valueContactType = [];
        this.valueUpdateContactType = [];
        this.valuePropertyMarkets = [];
        this.valuePropertyTypes = [];
        this.valueprincipleType = '';
        this.valueUpdatePrincipleType = '';
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactType = ["Broker", "General Contractor", "Architect", "Developer", "Principle", "Attorney", "Lender", "Escrow Officer", "Appraiser", "Manager"];
        this.principleType = ["Developer", "Government Representative", "Institutional Investor", "Private Investor", "Professional Investor"];
        this.propertyMarkets = ["Central Northeast", "Damascus", "East Portlandr", "Troutdale/Gresham", "Yamhill County"];
        this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];
        this.routeState = this.router.getNavigatedData();
        this.contactsRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/crm/contacts");
        if (this.routeState) {
            if (this.routeState[0]) {
                if (this.routeState[0]['contactId'] != '') {
                    this.contactId = this.routeState[0]['contactId'];
                    this.loadEdit(this.routeState[0]['contactId']);
                }
                else {
                    this.router.navigate(['contacts']);
                }
            }
            else {
                this.router.navigate(['contacts']);
            }
        }
        else {
            this.router.navigate(['contacts']);
        }
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
    };
    ContactDetailsComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.file = event.srcElement.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.updateContactPicture();
        }
    };
    ContactDetailsComponent.prototype.loadEdit = function (id) {
        var _this = this;
        this.currentUpdateKey = id;
        this.contactsRef.child(id).once('value', function (snapshot) {
            _this.updatedContact = {
                "firstName": snapshot.val()["firstName"],
                "lastName": snapshot.val()["lastName"],
                "middleName": snapshot.val()["middleName"],
                "title": snapshot.val()["title"],
                "contactPicture": snapshot.val()["contactPicture"],
                "companyName": snapshot.val()["companyName"],
                "birthdate": snapshot.val()["birthdate"],
                "occupation": snapshot.val()["occupation"],
                "phoneNumber": snapshot.val()["phoneNumber"],
                "ext": snapshot.val()["ext"],
                "mobileNumber": snapshot.val()["mobileNumber"],
                "homeNumber": snapshot.val()["homeNumber"],
                "faxNumber": snapshot.val()["faxNumber"],
                "primaryEmail": snapshot.val()["primaryEmail"],
                "contactWebsite": snapshot.val()["contactWebsite"],
                "mailingStreet": snapshot.val()["mailingStreet"],
                "mailingCity": snapshot.val()["mailingCity"],
                "mailingZip": snapshot.val()["mailingZip"],
                "mailingState": snapshot.val()["mailingState"],
                "mailingCountry": snapshot.val()["mailingCountry"],
                "contactType": snapshot.val()["contactType"],
                "principleType": snapshot.val()["principleType"],
                "propertyMarkets": snapshot.val()["propertyMarkets"],
                "propertyTypes": snapshot.val()["propertyTypes"],
                "contactNotes": snapshot.val()["contactNotes"],
                "doNotCall": snapshot.val()["doNotCall"],
                "verified": snapshot.val()["verified"],
                "emailOptOut": snapshot.val()["emailOptOut"],
                "research": snapshot.val()["research"],
                "faxOptOut": snapshot.val()["faxOptOut"],
                "newsletter": snapshot.val()["newsletter"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"]
            };
            _this.contactTypeSelected = [];
            _this.principleTypeSelected = [];
            _this.propertyMarketsSelected = [];
            _this.propertyTypesSelected = [];
            _this.url = _this.updatedContact.contactPicture;
            _this.valueUpdateContactType = [];
            _this.valuePropertyMarkets = [];
            _this.valuePropertyTypes = [];
            _this.valueUpdatePrincipleType = '';
            if (_this.updatedContact.contactType) {
                _this.updatedContact.contactType.forEach(function (data) {
                    _this.contactTypeSelected.push({ text: data, id: data });
                    _this.contactTypeSelected = _this.contactTypeSelected.slice();
                    _this.valueUpdateContactType.push(data);
                    _this.valueUpdateContactType = _this.valueUpdateContactType.slice();
                });
            }
            if (_this.updatedContact.principleType) {
                _this.principleTypeSelected.push({
                    text: _this.updatedContact.principleType,
                    id: _this.updatedContact.principleType
                });
                _this.principleTypeSelected = _this.principleTypeSelected.slice();
                _this.valueUpdatePrincipleType = _this.updatedContact.principleType;
            }
            if (_this.updatedContact.propertyMarkets) {
                _this.updatedContact.propertyMarkets.forEach(function (data) {
                    _this.propertyMarketsSelected.push({ text: data, id: data });
                    _this.propertyMarketsSelected = _this.propertyMarketsSelected.slice();
                    _this.valuePropertyMarkets.push(data);
                    _this.valuePropertyMarkets = _this.valuePropertyMarkets.slice();
                });
            }
            if (_this.updatedContact.propertyTypes) {
                _this.updatedContact.propertyTypes.forEach(function (data) {
                    _this.propertyTypesSelected.push({ text: data, id: data });
                    _this.propertyTypesSelected = _this.propertyTypesSelected.slice();
                    _this.valuePropertyTypes.push(data);
                    _this.valuePropertyTypes = _this.valuePropertyTypes.slice();
                });
            }
        });
    };
    ContactDetailsComponent.prototype.onBlurFirstName = function (e) {
        this.updatedContact.firstName = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMiddleName = function (e) {
        this.updatedContact.middleName = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurLastName = function (e) {
        this.updatedContact.lastName = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurCompanyName = function (e) {
        this.updatedContact.companyName = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurOccupation = function (e) {
        this.updatedContact.occupation = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurBirthDate = function (e) {
        this.updatedContact.birthdate = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurTitle = function (e) {
        this.updatedContact.title = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurPhoneNumber = function (e) {
        this.updatedContact.phoneNumber = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurExt = function (e) {
        this.updatedContact.ext = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMobileNumber = function (e) {
        this.updatedContact.mobileNumber = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurHomeNumber = function (e) {
        this.updatedContact.homeNumber = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurFaxNumber = function (e) {
        this.updatedContact.faxNumber = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurPrimaryEmail = function (e) {
        this.updatedContact.primaryEmail = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurContactWebsite = function (e) {
        this.updatedContact.contactWebsite = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMailingStreet = function (e) {
        this.updatedContact.mailingStreet = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMailingCity = function (e) {
        this.updatedContact.mailingCity = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMailingZip = function (e) {
        this.updatedContact.mailingZip = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMailingState = function (e) {
        this.updatedContact.mailingState = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurMailingCountry = function (e) {
        this.updatedContact.mailingCountry = e;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.onBlurContactNotes = function (e) {
        this.updateContact();
    };
    ContactDetailsComponent.prototype.refreshValueUpdateContactType = function (value) {
        var _this = this;
        this.valueUpdateContactType = [];
        value.forEach(function (element) {
            _this.valueUpdateContactType.push(element.id);
            _this.updateContact();
        });
    };
    ContactDetailsComponent.prototype.refreshValueUpdatePrincipalType = function (value) {
        this.valueUpdatePrincipleType = value.id;
        this.updateContact();
    };
    ContactDetailsComponent.prototype.refreshValueUpdatePropertyMarkets = function (value) {
        var _this = this;
        this.valuePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valuePropertyMarkets.push(element.id);
            _this.updateContact();
        });
    };
    ContactDetailsComponent.prototype.refreshValueUpdatePropertyTypes = function (value) {
        var _this = this;
        this.valuePropertyTypes = [];
        value.forEach(function (element) {
            _this.valuePropertyTypes.push(element.id);
            _this.updateContact();
        });
    };
    ContactDetailsComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ContactDetailsComponent.prototype.updateContactPicture = function () {
        var _this = this;
        if (typeof this.file != 'undefined') {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('/crm/contacts/' + this.makeid() + '.png').put(this.file).then(function (snapshot) {
                _this.updatedContact.contactPicture = snapshot.downloadURL;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/crm/contacts/' + _this.currentUpdateKey).update(_this.updatedContact).then(function (result) {
                });
            });
        }
    };
    ContactDetailsComponent.prototype.updateContact = function () {
        if (this.updatedContact.firstName.length <= 0) {
            this.toastr.error('First Name required.', 'Error!');
        }
        else if (this.updatedContact.lastName.length <= 0) {
            this.toastr.error('Last Name required.', 'Error!');
        }
        else {
            this.updatedContact.contactType = this.valueUpdateContactType;
            this.updatedContact.principleType = this.valueUpdatePrincipleType;
            this.updatedContact.propertyMarkets = this.valuePropertyMarkets;
            this.updatedContact.propertyTypes = this.valuePropertyTypes;
            this.updatedContact.updateTime = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
            this.updatedContact.updatedBy = this.userId;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(function (result) { });
        }
    };
    ContactDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__("../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/contacts/contact-details/contact-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image--cover {\r\n  width: 130px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin: 20px;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n.image--cover2 {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n.form-control:focus {\r\n  border-color: #5cafe0;\r\n}\r\n.tableBody tr:nth-child(1){\r\n  -webkit-animation-delay: 0.5s;\r\n          animation-delay: 0.5s;\r\n}\r\n.tableBody tr:nth-child(2){\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n.tableBody tr:nth-child(3){\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n.tableBody tr:nth-child(4){\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n.tableBody tr:nth-child(5){\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n.tableBody tr:nth-child(6){\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n.tableBody tr:nth-child(7){\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n.tableBody tr:nth-child(8){\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n.tableBody tr:nth-child(9){\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n.tableBody tr:nth-child(10){\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n.tableBody tr:nth-child(11){\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n.tableBody tr:nth-child(12){\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n.tableBody tr:nth-child(13){\r\n  -webkit-animation-delay: 3.1s;\r\n          animation-delay: 3.1s;\r\n}\r\n.tableBody tr:nth-child(14){\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n.tableBody tr:nth-child(15){\r\n  -webkit-animation-delay: 3.5s;\r\n          animation-delay: 3.5s;\r\n}\r\ntable.dataTable.no-footer{\r\n  border-bottom: none;\r\n}\r\ntable.table td h2 a:hover {\r\n  color: #44a0d8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n      <div class=\"col-xs-4\">\n        <h4 class=\"page-title\">Contact</h4>\n      </div>\n      <div class=\"col-xs-8 text-right m-b-30\">\n        <a  class=\"btn btn-primary pull-right rounded\" data-toggle=\"modal\" data-target=\"#add_employee\"><i class=\"fa fa-plus\"></i> Add contact</a>\n        <div class=\"view-icons\">\n          <a (click)=\"pivotTable('block')\" class=\"grid-view btn btn-link\"><i class=\"fa fa-th\"></i></a>\n          <a (click)=\"pivotTable('list')\" class=\"list-view btn btn-link active\"><i class=\"fa fa-bars\"></i></a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"\">\n          <div [hidden]=\"pivot\">\n            <table *ngIf=\"contactsList.length > 0\" datatable id=\"example\"  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table\" style=\"font-size: 12px;\">\n            <thead>\n            <tr>\n              <th class=\"text-center\">Contact Name</th>\n              <th class=\"text-center\">Company Name</th>\n              <th class=\"text-center\">Phone</th>\n              <th class=\"text-center\">Mobile</th>\n              <th class=\"text-center\">Email</th>\n              <th class=\"text-center\">Contact Date</th>\n              <th  class=\"text-center\">Contact Type</th>\n\n              <th class=\"text-right\">Action</th>\n            </tr>\n            </thead>\n            <tbody class=\"tableBody\">\n\n            <tr *ngFor=\"let contact of contactsList; let i = index\" class=\"animated fadeInUp \">\n              <td   class=\"text-center\">\n\n                <a *ngIf=\"!contact.contactPicture || (contact.contactPicture).length < 0\" class=\"avatar\">{{(contact.firstName).substr(0,1)}}</a>\n                <a *ngIf=\"contact.contactPicture || (contact.contactPicture).length > 0\" class=\"avatar\"><img src=\"{{contact.contactPicture}}\"></a>\n\n                <h2><a (click)=\"gotoContactDetails(contact.rowId);\" style=\"cursor: pointer;\"> {{contact.firstName + \" \" + contact.lastName}} <span></span></a></h2>\n              </td>\n              <td  class=\"text-center\" >{{contact.companyName}} </td>\n              <td  class=\"text-center\">{{contact.phoneNumber}} </td>\n              <td  class=\"text-center\">{{contact.mobileNumber}} </td>\n              <td  class=\"text-center\">{{contact.primaryEmail}} </td>\n              <td  class=\"text-center\">{{contact.lastContactDate}} </td>\n              <td  class=\"text-center\">{{contact.contactType}} </td>\n\n              <td class=\"text-right\" style=\"padding: 0;\">\n                <a  (click)=\"gotoContactDetails(contact.rowId);\"   style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> </a>\n                <a  (click)=\"loadEdit(contact.rowId);\" data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> </a>\n                <a  (click)=\"loadDelete(contact.rowId);\"  data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> </a>\n\n                <!--<div class=\"dropdown\">-->\n                <!--<a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>-->\n                <!--<ul class=\"dropdown-menu pull-right\">-->\n                <!--<li><a  data-toggle=\"modal\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>-->\n                <!--<li><a  data-toggle=\"modal\" data-target=\"#delete_employee\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>-->\n                <!--</ul>-->\n                <!--</div>-->\n              </td>\n            </tr>\n            <!--<tr class=\"animated fadeInUp\" style=\" animation-delay: 0.2s;\">-->\n            <!--<td  class=\"text-center\">-->\n            <!--<a  class=\"avatar\">J</a>-->\n            <!--<h2><a >Wilmer Deluna <span>Team Leader</span></a></h2>-->\n            <!--</td>-->\n            <!--<td  class=\"text-center\">FT-0005</td>-->\n            <!--<td  class=\"text-center\">wilmerdeluna@example.com</td>-->\n            <!--<td  class=\"text-center\">9876543210</td>-->\n            <!--<td  class=\"text-center\">22 May 2014</td>-->\n            <!--<td  class=\"text-center\">22 May 2014</td>-->\n            <!--<td  class=\"text-center\">22 May 2014</td>-->\n\n            <!--<td class=\"text-right\">-->\n            <!--<div class=\"dropdown\">-->\n            <!--<a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>-->\n            <!--<ul class=\"dropdown-menu pull-right\">-->\n            <!--<li><a  data-toggle=\"modal\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>-->\n            <!--<li><a  data-toggle=\"modal\" data-target=\"#delete_employee\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>-->\n            <!--</ul>-->\n            <!--</div>-->\n            <!--</td>-->\n            <!--</tr>-->\n\n            </tbody>\n          </table>\n          </div>\n\n          <div [hidden]=\"!pivot\">\n            <div  *ngIf=\"contactsList.length > 0\"  class=\"row staff-grid-row\">\n            <div *ngFor=\"let contact of contactsList; let i = index\" class=\"animated fadeInUp col-md-4 col-sm-4 col-xs-6 col-lg-3\">\n              <div class=\"profile-widget\">\n                <div class=\"profile-img\">\n                  <img *ngIf=\"contact.contactPicture || contact.contactPicture.length > 0\" src=\"{{contact.contactPicture}}\" class=\"image--cover2\">\n                  <img *ngIf=\"!contact.contactPicture || contact.contactPicture.length < 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover2\">\n                  <!--<a class=\"avatar\">G</a>-->\n                </div>\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  (click)=\"gotoContactDetails(contact.rowId);\" style=\"font-size: 100%; cursor: pointer;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> Details </a></li>\n                    <li><a (click)=\"loadEdit(contact.rowId);\" data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit </a></li>\n                    <li><a  (click)=\"loadDelete(contact.rowId);\"  data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> Delete </a></li>\n                  </ul>\n                </div>\n                <h4 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a style=\"cursor: pointer;\" (click)=\"gotoContactDetails(contact.rowId);\">{{contact.firstName + \" \" + contact.lastName}}</a></h4>\n                <h5 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a >{{contact.companyName}}</a></h5>\n                <div class=\"small text-muted\">{{contact.primaryEmail}}</div>\n              </div>\n            </div>\n          </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n\n\n    <div id=\"edit_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\" style=\"text-align: center;\">Edit Contact</h4>\n          </div>\n          <hr style=\"border: 0.5px solid #5cafe0;\"/>\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Personal Details</h4>\n          </div>\n          <div class=\"modal-body\">\n            <form class=\"m-b-30\">\n\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">First Name <span class=\"text-danger\">*</span></label>\n                        <input [(ngModel)]=\"updatedContact.firstName\" name=\"firstName\"  class=\"form-control\" type=\"text\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Middle Name </label>\n                        <input [(ngModel)]=\"updatedContact.middleName\" name=\"middleName\"  class=\"form-control\" type=\"text\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Last Name <span class=\"text-danger\">*</span></label>\n                        <input  [(ngModel)]=\"updatedContact.lastName\" name=\"lastName\"  class=\"form-control\" type=\"text\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Company Name</label>\n                        <input [(ngModel)]=\"updatedContact.companyName\" class=\"form-control\" name=\"companyName\"  type=\"text\">\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Birthdate</label>\n                        <div class=\"cal-icon\"><input [(ngModel)]=\"updatedContact.birthdate\" name=\"birthdate\" id=\"birthDate\" class=\"form-control datetimepicker\" type=\"text\" ></div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Occupation</label>\n                        <input class=\"form-control\"  [(ngModel)]=\"updatedContact.occupation\" name=\"occupation\"  type=\"text\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Title </label>\n                        <input [(ngModel)]=\"updatedContact.title\" name=\"title\"  class=\"form-control\" type=\"text\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <img *ngIf=\"url.length > 0\" src=\"{{url}}\" class=\"image--cover\">\n                      <img *ngIf=\"url.length <= 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Contact Picture</label>\n                        <input class=\"form-control\" type=\"file\" (change)=\"uploadFile($event)\" >\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n\n\n\n\n\n              </div>\n              <br>\n              <div class=\"row\">\n\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n\n                <h4 class=\"modal-title\" style=\"margin-left: 10px;\">Contact Details</h4>\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Phone Number</label>\n                    <input [(ngModel)]=\"updatedContact.phoneNumber\" name=\"phoneNumber\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-1\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> Ext. </label>\n                    <input [(ngModel)]=\"updatedContact.ext\" name=\"ext\"  type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> Mobile Number </label>\n                    <input [(ngModel)]=\"updatedContact.mobileNumber\" name=\"mobileNumber\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Home Number </label>\n                    <input [(ngModel)]=\"updatedContact.homeNumber\" name=\"homeNumber\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fax Number</label>\n                    <input [(ngModel)]=\"updatedContact.faxNumber\"  name=\"faxNumber\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Primary Email</label>\n                    <input [(ngModel)]=\"updatedContact.primaryEmail\"  name=\"primaryEmail\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Contact Website</label>\n                    <input [(ngModel)]=\"updatedContact.contactWebsite\" name=\"contactWebsite\"  class=\"form-control\" type=\"url\">\n                  </div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"row\">\n\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n\n                <h4 class=\"modal-title\" style=\"margin-left: 10px;\">Mailing Details</h4>\n\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Street</label>\n                    <input [(ngModel)]=\"updatedContact.mailingStreet\" name=\"mailingStreet\"  class=\"form-control\" type=\"text\">\n\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing City</label>\n                    <input [(ngModel)]=\"updatedContact.mailingCity\" name=\"mailingCity\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Zip</label>\n                    <input [(ngModel)]=\"updatedContact.mailingZip\"  name=\"mailingZip\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing State</label>\n                    <input [(ngModel)]=\"updatedContact.mailingState\"  name=\"mailingState\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Country</label>\n                    <input [(ngModel)]=\"updatedContact.mailingCountry\"  name=\"mailingCountry\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n\n                <h4 class=\"modal-title\" style=\"margin-left: 10px;\">Extra Details</h4>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Contact Type</label>\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"contactType\"\n                                [active]=\"contactTypeSelected\"\n                                (data)=\"refreshValueUpdateContactType($event)\"\n                                placeholder=\"No contatct type selected\"></ng-select>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Property Type</label>\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"propertyTypes\"\n                                [active]=\"propertyTypesSelected\"\n                                (data)=\"refreshValueUpdatePropertyTypes($event)\"\n                                placeholder=\"No Property Types selected\"></ng-select>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Property Markets</label>\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"propertyMarkets\"\n                                [active]=\"propertyMarketsSelected\"\n                                (data)=\"refreshValueUpdatePropertyMarkets($event)\"\n                                placeholder=\"No Property Market selected\"></ng-select>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Principal Type</label>\n                    <ng-select  [multiple]=\"false\"\n                                [items]=\"principleType\"\n                                [active]=\"principleTypeSelected\"\n                                (data)=\"refreshValueUpdatePrincipalType($event)\"\n                                placeholder=\"No principal type selected\"></ng-select>\n                  </div>\n                </div>\n                <div class=\"col-sm-8\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Contact Notes</label>\n                    <textarea style=\"width: 100%;\" [(ngModel)]=\"updatedContact.contactNotes\" name=\"contactNotes\" rows=\"2\" cols=\"80\"></textarea>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"table-responsive m-t-15\">\n                <div class=\"modal-header\">\n\n                  <hr style=\"border: 0.5px solid #5cafe0;\"/>\n                  <h4 class=\"modal-title\">Contact Maintenance</h4>\n                </div>\n                <table class=\"table table-striped custom-table\">\n                  <thead>\n                  <tr>\n\n                    <th class=\"text-center\">Do Not Call</th>\n                    <th class=\"text-center\">Email Opt Out</th>\n                    <th class=\"text-center\">Fax Opt Out</th>\n                    <th class=\"text-center\">Verified</th>\n                    <th class=\"text-center\">Research</th>\n                    <th class=\"text-center\">Newsletter</th>\n\n\n                  </tr>\n                  </thead>\n                  <tbody>\n                  <tr>\n\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.doNotCall\" name=\"doNotCall\" checked=\"\" type=\"checkbox\">\n                    </td>\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.emailOptOut\" name=\"emailOptOut\" type=\"checkbox\">\n                    </td>\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.faxOptOut\" name=\"faxOptOut\" type=\"checkbox\">\n                    </td>\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.verified\" name=\"verified\" type=\"checkbox\">\n                    </td>\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.research\" name=\"research\" type=\"checkbox\">\n                    </td>\n                    <td class=\"text-center\">\n                      <input [(ngModel)]=\"updatedContact.newsletter\" name=\"newsletter\" type=\"checkbox\">\n                    </td>\n                  </tr>\n\n\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"m-t-20 text-center\">\n                <button class=\"btn btn-primary\" (click)=\"updateContact()\">Save Changes</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n    <div id=\"delete_employee\" style=\"text-align: center;\" class=\"modal custom-modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-md\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Delete Contact</h4>\n          </div>\n          <form>\n            <div class=\"modal-body card-box\">\n              <p>Are you sure want to delete this?</p>\n              <div class=\"m-t-20\"> <a  class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n                <button (click)=\"deleteContact()\" data-dismiss=\"modal\" type=\"submit\" class=\"btn btn-danger\">Delete</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"add_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\" style=\"text-align: center;\">Add Contact</h4>\n          </div>\n          <div class=\"modal-body\">\n            <form class=\"m-b-30\">\n              <div class=\"row\">\n\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Personal Details</h4>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label  class=\"control-label\">First Name <span class=\"text-danger\">*</span></label>\n                    <input [(ngModel)]=\"newContact.firstName\" name=\"firstName\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Middle Name </label>\n                    <input [(ngModel)]=\"newContact.middleName\" name=\"middleName\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Last Name <span class=\"text-danger\">*</span></label>\n                    <input [(ngModel)]=\"newContact.lastName\" name=\"lastName\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Title </label>\n                    <input  [(ngModel)]=\"newContact.title\" name=\"title\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Company Name</label>\n                    <input [(ngModel)]=\"newContact.companyName\" name=\"companyName\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <br>\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Contact Details</h4>\n                </div>\n\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Phone Number</label>\n                    <input [(ngModel)]=\"newContact.phoneNumber\" name=\"phoneNumber\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-2\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> Ext. </label>\n                    <input [(ngModel)]=\"newContact.ext\" name=\"ext\" type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"> Mobile Number </label>\n                    <input [(ngModel)]=\"newContact.mobileNumber\" name=\"mobileNumber\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Home Number </label>\n                    <input [(ngModel)]=\"newContact.homeNumber\" name=\"homeNumber\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Fax Number</label>\n                    <input [(ngModel)]=\"newContact.faxNumber\" name=\"faxNumber\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Primary Email</label>\n                    <input [(ngModel)]=\"newContact.primaryEmail\" name=\"primaryEmail\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <br>\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Mailing Details</h4>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Street</label>\n                    <input [(ngModel)]=\"newContact.mailingStreet\" name=\"mailingStreet\" class=\"form-control\" type=\"text\">\n\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing City</label>\n                    <input  [(ngModel)]=\"newContact.mailingCity\" name=\"mailingCity\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Zip</label>\n                    <input [(ngModel)]=\"newContact.mailingZip\" name=\"mailingZip\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing State</label>\n                    <input  [(ngModel)]=\"newContact.mailingState\" name=\"mailingState\"  class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Mailing Country</label>\n                    <input  [(ngModel)]=\"newContact.mailingCountry\" name=\"mailingCountry\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <br>\n                <hr style=\"border: 0.5px solid #5cafe0;\"/>\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Extra Details</h4>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Contact Type</label>\n                    <ng-select  [multiple]=\"true\"\n                                [items]=\"contactType\"\n                                (data)=\"refreshValueContactType($event)\"\n                                placeholder=\"No contatct type selected\"></ng-select>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\">Principle Type</label>\n                    <ng-select  [multiple]=\"false\"\n                                [items]=\"principleType\"\n                                (data)=\"refreshValuePrincipalType($event)\"\n                                placeholder=\"No principal type selected\"></ng-select>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"m-t-20 text-center\">\n                <button (click)=\"createContact()\" class=\"btn btn-primary\">Create Contact</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactsListComponent = /** @class */ (function () {
    function ContactsListComponent(toastr, vcr, af, router, afStorage) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.afStorage = afStorage;
        this.imageUrl = '';
        this.url = "";
        this.contactType = [];
        this.contactTypeSelected = [];
        this.principleTypeSelected = [];
        this.propertyMarketsSelected = [];
        this.propertyTypesSelected = [];
        this.principleType = [];
        this.propertyMarkets = [];
        this.propertyTypes = [];
        this.valueContactType = [];
        this.valueUpdateContactType = [];
        this.valuePropertyMarkets = [];
        this.valuePropertyTypes = [];
        this.valueprincipleType = '';
        this.valueUpdatePrincipleType = '';
        this.currentUpdateKey = "";
        this.currentDeleteKey = "";
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        this.contactsList = [];
        this.userId = '';
        //Stores view type i.e. block or table view
        this.pivot = false;
        this.updatedContact = {
            "firstName": "",
            "lastName": "",
            "middleName": "",
            "title": "",
            "contactPicture": "",
            "companyName": "",
            "birthdate": "",
            "occupation": "",
            "phoneNumber": "",
            "ext": "",
            "mobileNumber": "",
            "homeNumber": "",
            "faxNumber": "",
            "primaryEmail": "",
            "contactWebsite": "",
            "mailingStreet": "",
            "mailingCity": "",
            "mailingZip": "",
            "mailingState": "",
            "mailingCountry": "",
            "contactType": "",
            "principleType": "",
            "propertyMarkets": "",
            "propertyTypes": "",
            "contactNotes": "",
            "doNotCall": "",
            "verified": "",
            "emailOptOut": "",
            "research": "",
            "faxOptOut": "",
            "newsletter": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": ""
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ContactsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactType = ["Broker", "General Contractor", "Architect", "Developer", "Principle", "Attorney", "Lender", "Escrow Officer", "Appraiser", "Manager"];
        this.principleType = ["Developer", "Government Representative", "Institutional Investor", "Private Investor", "Professional Investor"];
        this.propertyMarkets = ["Central Northeast", "Damascus", "East Portlandr", "Troutdale/Gresham", "Yamhill County"];
        this.propertyTypes = ["Healthcare", "Hospitality", "Industrial", "Multifamily", "Retail", "Office", "Land", "Mixed-Use", "Self-Storage", "Mobile/RV Parks", "Specialty"];
        this.contactsRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/crm/contacts");
        this.contactsRef.on('value', function (snapshot) {
            _this.contactsList = [];
            var count = 0;
            for (var key in snapshot.val()) {
                var temp = snapshot.val()[key];
                temp.rowId = key;
                var lastIndex = _this.contactsList.push(temp) - 1;
                count++;
                if (snapshot.numChildren() == count) {
                    if (!_this.dtElement) {
                        setTimeout(function () {
                            _this.dtTrigger.next();
                            _this.dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.destroy();
                                setTimeout(function () { _this.dtTrigger.next(); });
                            });
                        });
                    }
                }
            }
        });
        this.initNewContact();
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        this.dtOptions = {
            paging: false
        };
    };
    ContactsListComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ContactsListComponent.prototype.createContact = function () {
        var _this = this;
        if (this.newContact.firstName.length <= 0) {
            this.toastr.error('First Name required.', 'Error!');
        }
        else if (this.newContact.lastName.length <= 0) {
            this.toastr.error('Last Name required.', 'Error!');
        }
        else {
            this.newContact.contactType = this.valueContactType;
            this.newContact.principleType = this.valueprincipleType;
            this.newContact.createTime = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
            this.newContact.createdBy = this.userId;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/crm/contacts/').push(this.newContact).then(function (result) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__(".close").trigger("click");
                _this.initNewContact();
                _this.toastr.success('New contact added.', 'Sucess!');
            });
        }
    };
    ContactsListComponent.prototype.initNewContact = function () {
        this.newContact = {
            "firstName": "",
            "lastName": "",
            "middleName": "",
            "title": "",
            "contactPicture": "",
            "companyName": "",
            "birthdate": "",
            "occupation": "",
            "phoneNumber": "",
            "ext": "",
            "mobileNumber": "",
            "homeNumber": "",
            "faxNumber": "",
            "primaryEmail": "",
            "contactWebsite": "",
            "mailingStreet": "",
            "mailingCity": "",
            "mailingZip": "",
            "mailingState": "",
            "mailingCountry": "",
            "contactType": "",
            "principleType": "",
            "propertyMarkets": "",
            "propertyTypes": "",
            "contactNotes": "",
            "doNotCall": "",
            "verified": "",
            "emailOptOut": "",
            "research": "",
            "faxOptOut": "",
            "newsletter": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "lastContactDate": ""
        };
    };
    ContactsListComponent.prototype.refreshValueContactType = function (value) {
        var _this = this;
        this.valueContactType = [];
        value.forEach(function (element) {
            _this.valueContactType.push(element.id);
        });
    };
    ContactsListComponent.prototype.refreshValuePrincipalType = function (value) {
        this.valueprincipleType = value.id;
    };
    ContactsListComponent.prototype.loadEdit = function (id) {
        var _this = this;
        this.currentUpdateKey = id;
        this.contactsRef.child(id).once('value', function (snapshot) {
            _this.updatedContact = {
                "firstName": snapshot.val()["firstName"],
                "lastName": snapshot.val()["lastName"],
                "middleName": snapshot.val()["middleName"],
                "title": snapshot.val()["title"],
                "contactPicture": snapshot.val()["contactPicture"],
                "companyName": snapshot.val()["companyName"],
                "birthdate": snapshot.val()["birthdate"],
                "occupation": snapshot.val()["occupation"],
                "phoneNumber": snapshot.val()["phoneNumber"],
                "ext": snapshot.val()["ext"],
                "mobileNumber": snapshot.val()["mobileNumber"],
                "homeNumber": snapshot.val()["homeNumber"],
                "faxNumber": snapshot.val()["faxNumber"],
                "primaryEmail": snapshot.val()["primaryEmail"],
                "contactWebsite": snapshot.val()["contactWebsite"],
                "mailingStreet": snapshot.val()["mailingStreet"],
                "mailingCity": snapshot.val()["mailingCity"],
                "mailingZip": snapshot.val()["mailingZip"],
                "mailingState": snapshot.val()["mailingState"],
                "mailingCountry": snapshot.val()["mailingCountry"],
                "contactType": snapshot.val()["contactType"],
                "principleType": snapshot.val()["principleType"],
                "propertyMarkets": snapshot.val()["propertyMarkets"],
                "propertyTypes": snapshot.val()["propertyTypes"],
                "contactNotes": snapshot.val()["contactNotes"],
                "doNotCall": snapshot.val()["doNotCall"],
                "verified": snapshot.val()["verified"],
                "emailOptOut": snapshot.val()["emailOptOut"],
                "research": snapshot.val()["research"],
                "faxOptOut": snapshot.val()["faxOptOut"],
                "newsletter": snapshot.val()["newsletter"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"]
            };
            _this.contactTypeSelected = [];
            _this.principleTypeSelected = [];
            _this.propertyMarketsSelected = [];
            _this.propertyTypesSelected = [];
            _this.url = _this.updatedContact.contactPicture;
            _this.valueUpdateContactType = [];
            _this.valuePropertyMarkets = [];
            _this.valuePropertyTypes = [];
            _this.valueUpdatePrincipleType = '';
            if (_this.updatedContact.contactType) {
                _this.updatedContact.contactType.forEach(function (data) {
                    _this.contactTypeSelected.push({ text: data, id: data });
                    _this.contactTypeSelected = _this.contactTypeSelected.slice();
                    _this.valueUpdateContactType.push(data);
                    _this.valueUpdateContactType = _this.valueUpdateContactType.slice();
                });
            }
            if (_this.updatedContact.principleType) {
                _this.principleTypeSelected.push({
                    text: _this.updatedContact.principleType,
                    id: _this.updatedContact.principleType
                });
                _this.principleTypeSelected = _this.principleTypeSelected.slice();
                _this.valueUpdatePrincipleType = _this.updatedContact.principleType;
            }
            if (_this.updatedContact.propertyMarkets) {
                _this.updatedContact.propertyMarkets.forEach(function (data) {
                    _this.propertyMarketsSelected.push({ text: data, id: data });
                    _this.propertyMarketsSelected = _this.propertyMarketsSelected.slice();
                    _this.valuePropertyMarkets.push(data);
                    _this.valuePropertyMarkets = _this.valuePropertyMarkets.slice();
                });
            }
            if (_this.updatedContact.propertyTypes) {
                _this.updatedContact.propertyTypes.forEach(function (data) {
                    _this.propertyTypesSelected.push({ text: data, id: data });
                    _this.propertyTypesSelected = _this.propertyTypesSelected.slice();
                    _this.valuePropertyTypes.push(data);
                    _this.valuePropertyTypes = _this.valuePropertyTypes.slice();
                });
            }
        });
    };
    ContactsListComponent.prototype.updateContact = function () {
        var _this = this;
        // console.log(this.valueUpdateContactType);
        if (this.updatedContact.firstName.length <= 0) {
            this.toastr.error('First Name required.', 'Error!');
        }
        else if (this.updatedContact.lastName.length <= 0) {
            this.toastr.error('Last Name required.', 'Error!');
        }
        else {
            this.updatedContact.contactType = this.valueUpdateContactType;
            this.updatedContact.principleType = this.valueUpdatePrincipleType;
            this.updatedContact.propertyMarkets = this.valuePropertyMarkets;
            this.updatedContact.propertyTypes = this.valuePropertyTypes;
            this.updatedContact.updateTime = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
            this.updatedContact.updatedBy = this.userId;
            this.updatedContact.birthdate = __WEBPACK_IMPORTED_MODULE_5_jquery__("#birthDate").val();
            if (typeof this.file != 'undefined') {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('/crm/contacts/' + this.makeid() + '.png').put(this.file).then(function (snapshot) {
                    _this.updatedContact.contactPicture = snapshot.downloadURL;
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/crm/contacts/' + _this.currentUpdateKey).update(_this.updatedContact).then(function (result) {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__(".close").trigger("click");
                        _this.initNewContact();
                        _this.toastr.success('Contact updated!.', 'Sucess!');
                    });
                });
            }
            else {
                if (!this.updatedContact.contactPicture) {
                    this.updatedContact.contactPicture = this.url;
                }
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/crm/contacts/' + this.currentUpdateKey).update(this.updatedContact).then(function (result) {
                    __WEBPACK_IMPORTED_MODULE_5_jquery__(".close").trigger("click");
                    _this.initNewContact();
                    _this.toastr.success('Contact updated!.', 'Sucess!');
                    _this.url = "./../../../../../assets/images/user.jpg";
                });
            }
        }
    };
    ContactsListComponent.prototype.refreshValueUpdateContactType = function (value) {
        var _this = this;
        this.valueUpdateContactType = [];
        value.forEach(function (element) {
            _this.valueUpdateContactType.push(element.id);
            console.log(_this.valueUpdateContactType);
        });
    };
    ContactsListComponent.prototype.refreshValueUpdatePrincipalType = function (value) {
        this.valueUpdatePrincipleType = value.id;
    };
    ContactsListComponent.prototype.refreshValueUpdatePropertyMarkets = function (value) {
        var _this = this;
        this.valuePropertyMarkets = [];
        value.forEach(function (element) {
            _this.valuePropertyMarkets.push(element.id);
        });
    };
    ContactsListComponent.prototype.refreshValueUpdatePropertyTypes = function (value) {
        var _this = this;
        this.valuePropertyTypes = [];
        value.forEach(function (element) {
            _this.valuePropertyTypes.push(element.id);
        });
    };
    ContactsListComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.file = event.srcElement.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ContactsListComponent.prototype.loadDelete = function (id) {
        this.currentDeleteKey = id;
    };
    ContactsListComponent.prototype.deleteContact = function () {
        var _this = this;
        this.contactsRef.child(this.currentDeleteKey).remove().then(function () {
            _this.toastr.success('Contact deleted!.', 'Sucess!');
        }).catch(function () {
            _this.toastr.error('Error deleting contact!.', 'Error!');
        });
    };
    ContactsListComponent.prototype.gotoContactDetails = function (id) {
        this.router.navigateByData({
            url: ["contacts/contact-details"],
            data: [{ "contactId": id }]
        });
    };
    //Function to toggle between two diffrent kinds of table view, i.e. Block and List view
    ContactsListComponent.prototype.pivotTable = function (viewType) {
        if (viewType == 'block') {
            this.pivot = true;
        }
        else {
            this.pivot = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */])
    ], ContactsListComponent.prototype, "dtElement", void 0);
    ContactsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts-list',
            template: __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts-list/contacts-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ContactsListComponent);
    return ContactsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" >\r\n  <app-message-box></app-message-box>\r\n  <div class=\"content container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-comming-soon></app-comming-soon>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/crm/main-components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listing-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingDetailsComponent = /** @class */ (function () {
    function ListingDetailsComponent() {
    }
    ListingDetailsComponent.prototype.ngOnInit = function () {
    };
    ListingDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing-details',
            template: __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/listings/listing-details/listing-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingDetailsComponent);
    return ListingDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listing-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingListComponent = /** @class */ (function () {
    function ListingListComponent() {
    }
    ListingListComponent.prototype.ngOnInit = function () {
    };
    ListingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing-list',
            template: __webpack_require__("../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/listings/listing-list/listing-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingListComponent);
    return ListingListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" >\n  <app-message-box></app-message-box>\n  <div class=\"content container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingsComponent = /** @class */ (function () {
    function ListingsComponent() {
    }
    ListingsComponent.prototype.ngOnInit = function () {
    };
    ListingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__("../../../../../src/app/crm/main-components/listings/listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/multi-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/multi-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" >\n  <app-message-box></app-message-box>\n  <div class=\"content container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/multi-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent() {
    }
    MultiSelectComponent.prototype.ngOnInit = function () {
    };
    MultiSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multi-select',
            template: __webpack_require__("../../../../../src/app/crm/main-components/multi-select/multi-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/multi-select/multi-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xs-4\">\n    <h4 class=\"page-title\">Properties Multi-Select</h4>\n  </div>\n  <div class=\"col-xs-8 text-right m-b-30\">\n    <div class=\"view-icons\">\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  \n  <div class=\"col-md-6\">\n    <label  class=\"control-label\"> Submarket (Washginton) </label>\n    <tags-input class=\"form-control input-lg\" (onTagsChanged)=\"onSubmarketWashgintonChanged($event)\" \n      [removeLastOnBackspace]=\"removeLastOnBackspace\" [canDeleteTags]=\"canDeleteTags\"\n       [(ngModel)]=\"submarketWashginton\" name=\"tags\">\n    </tags-input>\n  </div>\n\n  <div class=\"col-md-6\">\n      <label  class=\"control-label\"> Submarket (Oregon) </label>\n      <tags-input class=\"form-control input-lg\" (onTagsChanged)=\"onSubmarketOregonChanged($event)\" \n        [removeLastOnBackspace]=\"removeLastOnBackspace\" [canDeleteTags]=\"canDeleteTags\"\n         [(ngModel)]=\"submarketOregon\" name=\"tags\">\n      </tags-input>\n    </div>\n\n    <div class=\"col-md-6\">\n        <label  class=\"control-label\"> Site Amenities </label>\n        <tags-input class=\"form-control input-lg\" (onTagsChanged)=\"onSiteAmenitiesChanged($event)\" \n          [removeLastOnBackspace]=\"removeLastOnBackspace\" [canDeleteTags]=\"canDeleteTags\"\n           [(ngModel)]=\"siteAmenities\" name=\"tags\">\n        </tags-input>\n      </div>\n\n      <div class=\"col-md-6\">\n          <label  class=\"control-label\"> Unit Amenities </label>\n          <tags-input class=\"form-control input-lg\" (onTagsChanged)=\"onUnitAmenitiesChanged($event)\" \n            [removeLastOnBackspace]=\"removeLastOnBackspace\" [canDeleteTags]=\"canDeleteTags\"\n             [(ngModel)]=\"unitAmenities\" name=\"tags\">\n          </tags-input>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyMultiSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyMultiSelectComponent = /** @class */ (function () {
    function PropertyMultiSelectComponent(toastr, vcr, af, router) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        //Support Variables
        this.userId = '';
        this.removeLastOnBackspace = true;
        this.canDeleteTags = true;
        this.submarketWashginton = [];
        this.submarketOregon = [];
        this.siteAmenities = [];
        this.unitAmenities = [];
        this.submarketWashgintonTemp = [];
        this.submarketOregonTemp = [];
        this.siteAmenitiesTemp = [];
        this.unitAmenitiesTemp = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    PropertyMultiSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        this.multiSelectRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("/crm/multiSelect/property/");
        this.multiSelectRef.child("submarket/washginton/").once('value', function (snapshot) {
            _this.submarketWashginton = [];
            for (var key in snapshot.val()) {
                _this.submarketWashginton.push({ "displayValue": snapshot.val()[key] });
            }
        });
        this.multiSelectRef.child("submarket/oregon/").once('value', function (snapshot) {
            _this.submarketOregon = [];
            for (var key in snapshot.val()) {
                _this.submarketOregon.push({ "displayValue": snapshot.val()[key] });
            }
        });
        this.multiSelectRef.child("siteAmenities/").once('value', function (snapshot) {
            _this.siteAmenities = [];
            for (var key in snapshot.val()) {
                _this.siteAmenities.push({ "displayValue": snapshot.val()[key] });
            }
        });
        this.multiSelectRef.child("unitAmenities/").once('value', function (snapshot) {
            _this.unitAmenities = [];
            for (var key in snapshot.val()) {
                _this.unitAmenities.push({ "displayValue": snapshot.val()[key] });
            }
        });
    };
    PropertyMultiSelectComponent.prototype.onSubmarketWashgintonChanged = function (e) {
        var _this = this;
        this.submarketWashgintonTemp = [];
        this.submarketWashginton.forEach(function (item) {
            _this.submarketWashgintonTemp.push(item.displayValue);
            if (_this.submarketWashginton.length == _this.submarketWashgintonTemp.length) {
                _this.multiSelectRef.child("submarket/washginton/")
                    .set(_this.submarketWashgintonTemp).then(function (result) { });
            }
        });
        if (e["change"] == "remove" && this.submarketWashginton.length == 0) {
            this.multiSelectRef.child("submarket/washginton/").remove();
        }
    };
    PropertyMultiSelectComponent.prototype.onSubmarketOregonChanged = function (e) {
        var _this = this;
        this.submarketOregonTemp = [];
        this.submarketOregon.forEach(function (item) {
            _this.submarketOregonTemp.push(item.displayValue);
            if (_this.submarketOregon.length == _this.submarketOregonTemp.length) {
                _this.multiSelectRef.child("submarket/oregon/")
                    .set(_this.submarketOregonTemp).then(function (result) { });
            }
        });
        if (e["change"] == "remove" && this.submarketOregon.length == 0) {
            this.multiSelectRef.child("submarket/oregon/").remove();
        }
    };
    PropertyMultiSelectComponent.prototype.onSiteAmenitiesChanged = function (e) {
        var _this = this;
        this.siteAmenitiesTemp = [];
        this.siteAmenities.forEach(function (item) {
            _this.siteAmenitiesTemp.push(item.displayValue);
            if (_this.siteAmenities.length == _this.siteAmenitiesTemp.length) {
                _this.multiSelectRef.child("siteAmenities/")
                    .set(_this.siteAmenitiesTemp).then(function (result) { });
            }
        });
        if (e["change"] == "remove" && this.siteAmenities.length == 0) {
            this.multiSelectRef.child("siteAmenities/").remove();
        }
    };
    PropertyMultiSelectComponent.prototype.onUnitAmenitiesChanged = function (e) {
        var _this = this;
        this.unitAmenitiesTemp = [];
        this.unitAmenities.forEach(function (item) {
            _this.unitAmenitiesTemp.push(item.displayValue);
            if (_this.unitAmenities.length == _this.unitAmenitiesTemp.length) {
                _this.multiSelectRef.child("unitAmenities/")
                    .set(_this.unitAmenitiesTemp).then(function (result) { });
            }
        });
        if (e["change"] == "remove" && this.unitAmenities.length == 0) {
            this.multiSelectRef.child("unitAmenities/").remove();
        }
    };
    PropertyMultiSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property-multi-select',
            template: __webpack_require__("../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/multi-select/property-multi-select/property-multi-select.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PropertyMultiSelectComponent);
    return PropertyMultiSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-details/property-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image--cover {\r\n  width: 130px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin: 20px;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n\r\n.nav-tabs.nav-tabs-bottom > li.active > a, .nav-tabs.nav-tabs-bottom > li.active > a:hover, .nav-tabs.nav-tabs-bottom > li.active > a:focus{\r\n  border-bottom-color: #1382c8;\r\n}\r\n\r\n.avatar{\r\n  background-color: #1382c8 !important;\r\n}\r\n\r\n.text-primary{\r\n  color: #1382c8 !important;\r\n}\r\n\r\n.personal-info li .title{\r\n  width: auto;\r\n}\r\n\r\n.carousel {\r\n  width: auto;\r\n  height: 200px;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n}\r\n\r\nul.slides {\r\n  display: block;\r\n  position: relative;\r\n  /*height: 600px;*/\r\n  height: 200px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  list-style: none;\r\n}\r\n\r\n.slides * {\r\n  user-select: none;\r\n  -ms-user-select: none;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nul.slides input {\r\n  display: none;\r\n}\r\n\r\n.slide-container {\r\n  display: block;\r\n}\r\n\r\n.slide-image {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  opacity: 0;\r\n  -webkit-transition: all .7s ease-in-out;\r\n  transition: all .7s ease-in-out;\r\n}\r\n\r\n.slide-image img {\r\n  width: auto;\r\n  min-width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-controls {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n  font-size: 100px;\r\n  line-height: 200px;\r\n  color: #fff;\r\n}\r\n\r\n.carousel-controls label {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 20px;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slide-image:hover + .carousel-controls label{\r\n  opacity: 0.5;\r\n}\r\n\r\n.carousel-controls label:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-controls .prev-slide {\r\n  width: 49%;\r\n  text-align: left;\r\n  left: 0;\r\n}\r\n\r\n.carousel-controls .next-slide {\r\n  width: 49%;\r\n  text-align: right;\r\n  right: 0;\r\n}\r\n\r\n.carousel-dots {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 20px;\r\n  z-index: 999;\r\n  text-align: center;\r\n}\r\n\r\n.carousel-dots .carousel-dot {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  opacity: 0.5;\r\n  margin: 10px;\r\n}\r\n\r\ninput:checked + .slide-container .slide-image {\r\n  opacity: 1;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transition: opacity 1s ease-in-out;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\ninput:checked + .slide-container .carousel-controls label {\r\n  display: block;\r\n}\r\n\r\ninput#img-1:checked ~ .carousel-dots label#img-dot-1,\r\ninput#img-2:checked ~ .carousel-dots label#img-dot-2,\r\ninput#img-3:checked ~ .carousel-dots label#img-dot-3,\r\ninput#img-4:checked ~ .carousel-dots label#img-dot-4,\r\ninput#img-5:checked ~ .carousel-dots label#img-dot-5,\r\ninput#img-6:checked ~ .carousel-dots label#img-dot-6 {\r\n  opacity: 1;\r\n}\r\n\r\ninput:checked + .slide-container .nav label { display: block; }\r\n\r\nagm-map{\r\n  height: 300px;\r\n}\r\n\r\n.map-marker{\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #1f89cc;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n\r\n.btn-toggle {\r\n  margin: 0 4rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1.5rem;\r\n  width: 3rem;\r\n  border-radius: 1.5rem;\r\n  color: #6b7381;\r\n  background: #bdc1c8;\r\n}\r\n\r\n.btn-toggle:focus,\r\n.btn-toggle.focus,\r\n.btn-toggle:focus.active,\r\n.btn-toggle.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle:before,\r\n.btn-toggle:after {\r\n  line-height: 1.5rem;\r\n  width: 4rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  -webkit-transition: opacity .25s;\r\n  transition: opacity .25s;\r\n}\r\n\r\n.btn-toggle:before {\r\n  content: 'Not For Sale';\r\n  left: -4rem;\r\n}\r\n\r\n.btn-toggle:after {\r\n  content: 'For Sale';\r\n  right: -4rem;\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle > .handle {\r\n  position: absolute;\r\n  top: 0.1875rem;\r\n  left: 0.1875rem;\r\n  width: 1.125rem;\r\n  height: 1.125rem;\r\n  border-radius: 1.125rem;\r\n  background: #fff;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.active {\r\n  -webkit-transition: background-color 0.25s;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.active > .handle {\r\n  left: 1.6875rem;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.active:before {\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: .75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs:before,\r\n.btn-toggle.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle:before,\r\n.btn-toggle:after {\r\n  color: #6b7381;\r\n}\r\n\r\n.btn-toggle.active {\r\n  background-color: #29b5a8;\r\n}\r\n\r\n.btn-toggle.btn-lg {\r\n  margin: 0 5rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 2.5rem;\r\n  width: 5rem;\r\n  border-radius: 2.5rem;\r\n}\r\n\r\n.btn-toggle.btn-lg:focus,\r\n.btn-toggle.btn-lg.focus,\r\n.btn-toggle.btn-lg:focus.active,\r\n.btn-toggle.btn-lg.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-lg:before,\r\n.btn-toggle.btn-lg:after {\r\n  line-height: 2.5rem;\r\n  width: 5rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  -webkit-transition: opacity .25s;\r\n  transition: opacity .25s;\r\n}\r\n\r\n.btn-toggle.btn-lg:before {\r\n  content: 'Not For Sale';\r\n  left: -11rem;\r\n}\r\n\r\n.btn-toggle.btn-lg:after {\r\n  content: 'For Sale';\r\n  right: -6rem;\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-lg > .handle {\r\n  position: absolute;\r\n  top: 0.3125rem;\r\n  left: 0.3125rem;\r\n  width: 1.875rem;\r\n  height: 1.875rem;\r\n  border-radius: 1.875rem;\r\n  background: #fff;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active {\r\n  -webkit-transition: background-color 0.25s;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active > .handle {\r\n  left: 2.8125rem;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-lg.active:before {\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-lg.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:before,\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  line-height: 0.5rem;\r\n  color: #fff;\r\n  letter-spacing: .75px;\r\n  left: 0.6875rem;\r\n  width: 3.875rem;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-lg.btn-xs:before,\r\n.btn-toggle.btn-lg.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-sm {\r\n  margin: 0 0.5rem;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1.5rem;\r\n  width: 3rem;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:focus,\r\n.btn-toggle.btn-sm.focus,\r\n.btn-toggle.btn-sm:focus.active,\r\n.btn-toggle.btn-sm.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-sm:before,\r\n.btn-toggle.btn-sm:after {\r\n  line-height: 1.5rem;\r\n  width: 0.5rem;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.55rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  -webkit-transition: opacity .25s;\r\n  transition: opacity .25s;\r\n}\r\n\r\n.btn-toggle.btn-sm:before {\r\n  content: 'Off';\r\n  left: -0.5rem;\r\n}\r\n\r\n.btn-toggle.btn-sm:after {\r\n  content: 'On';\r\n  right: -0.5rem;\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-sm > .handle {\r\n  position: absolute;\r\n  top: 0.1875rem;\r\n  left: 0.1875rem;\r\n  width: 1.125rem;\r\n  height: 1.125rem;\r\n  border-radius: 1.125rem;\r\n  background: #fff;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active {\r\n  -webkit-transition: background-color 0.25s;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active > .handle {\r\n  left: 1.6875rem;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:before {\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:before,\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  line-height: -0.5rem;\r\n  color: #fff;\r\n  letter-spacing: .75px;\r\n  left: 0.4125rem;\r\n  width: 2.325rem;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-sm.btn-xs:before,\r\n.btn-toggle.btn-sm.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-xs {\r\n  margin: 0 0;\r\n  padding: 0;\r\n  position: relative;\r\n  border: none;\r\n  height: 1rem;\r\n  width: 2rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.btn-toggle.btn-xs:focus,\r\n.btn-toggle.btn-xs.focus,\r\n.btn-toggle.btn-xs:focus.active,\r\n.btn-toggle.btn-xs.focus.active {\r\n  outline: none;\r\n}\r\n\r\n.btn-toggle.btn-xs:before,\r\n.btn-toggle.btn-xs:after {\r\n  line-height: 1rem;\r\n  width: 0;\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  -webkit-transition: opacity .25s;\r\n  transition: opacity .25s;\r\n}\r\n\r\n.btn-toggle.btn-xs:before {\r\n  content: 'Off';\r\n  left: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs:after {\r\n  content: 'On';\r\n  right: 0;\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-xs > .handle {\r\n  position: absolute;\r\n  top: 0.125rem;\r\n  left: 0.125rem;\r\n  width: 0.75rem;\r\n  height: 0.75rem;\r\n  border-radius: 0.75rem;\r\n  background: #fff;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active {\r\n  -webkit-transition: background-color 0.25s;\r\n  transition: background-color 0.25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active > .handle {\r\n  left: 1.125rem;\r\n  -webkit-transition: left .25s;\r\n  transition: left .25s;\r\n}\r\n\r\n.btn-toggle.btn-xs.active:before {\r\n  opacity: .5;\r\n}\r\n\r\n.btn-toggle.btn-xs.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:before,\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  line-height: -1rem;\r\n  color: #fff;\r\n  letter-spacing: .75px;\r\n  left: 0.275rem;\r\n  width: 1.55rem;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:before {\r\n  text-align: right;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm:after {\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm.active:before {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-sm.active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.btn-toggle.btn-xs.btn-xs:before,\r\n.btn-toggle.btn-xs.btn-xs:after {\r\n  display: none;\r\n}\r\n\r\n.btn-toggle.btn-secondary {\r\n  color: #6b7381;\r\n  background: #bdc1c8;\r\n}\r\n\r\n.btn-toggle.btn-secondary:before,\r\n.btn-toggle.btn-secondary:after {\r\n  color: #6b7381;\r\n}\r\n\r\n.btn-toggle.btn-secondary.active {\r\n  background-color: #ff8300;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-details/property-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--https://www.npmjs.com/package/angular-content-editable-->\n<div class=\"content container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h4 class=\"page-title\">Property Details</h4>\n    </div>\n    <div class=\"col-sm-4 text-right m-b-30\">\n        <button type=\"button\" class=\"btn btn-lg btn-toggle {{propertyUpdateObj.forSale?'active':''}}\"  (click)=\"forSale();\" >\n          <div class=\"handle\"></div>\n        </button>\n    </div>\n  </div>\n  <div class=\"card-box m-b-0\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"profile-view\">\n          <div class=\"profile-img-wrap\" style=\"height: 50%;\">\n            <div class=\"profile-img\">\n              <a >\n                <img *ngIf=\"url\" src=\"{{url}}\" class=\"image--cover\">\n                <img *ngIf=\"!url\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover\">\n              </a>\n            </div>\n          <!--  <input style=\"    font-size: 8px;\n    outline: none;\n    border: none;\" class=\"form-control\" type=\"file\" (change)=\"uploadFile($event)\" > -->\n          </div>\n          <div class=\"profile-basic\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"profile-info-left\">\n                  <h3 class=\"user-name m-t-0\" >\n                    <span (blur)=\"onBlurPropertyName($event.target)\"  contenteditable=\"true\">{{propertyUpdateObj.propertyName}}</span>\n                  </h3>\n                  <!--<h5 class=\"company-role m-t-0 m-b-0\" ><span (blur)=\"onBlurCompanyName($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.companyName}}</span></h5>-->\n                  <!--<small class=\"text-muted\" ><span (blur)=\"onBlurTitle($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.title}}</span></small>-->\n                  <!--<div class=\"staff-id\"><span (blur)=\"onBlurOccupation($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.occupation}}</span></div>-->\n                  <!--<br/>-->\n                  <!--<br/>-->\n                  <ul class=\"personal-info\">\n                    <li>\n                      <span class=\"title\">Street:</span>\n                      <span class=\"text\" (blur)=\"onBlurStreetAddress($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.streetAddress}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">City:</span>\n                      <span class=\"text\" (blur)=\"onBlurCity($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.city}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Zip:</span>\n                      <span class=\"text\" (blur)=\"onBlurZip($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.zip}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Last Sale Price:</span>\n                      <span class=\"text\" (blur)=\"onBlurLastSalePrice($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.lastSalePrice}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Last Sale Cap:</span>\n                      <span class=\"text\" (blur)=\"onBlurLastSaleCap($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.lastSaleCap}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Last Sale Type:</span>\n                      <span class=\"text\" (blur)=\"onBlurLastSaleType($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.lastSaleType}}</span>\n                    </li>\n\n\n                    <li>\n                      <span class=\"title\">Last Sale Date:</span>\n                      <span class=\"text\" (blur)=\"onBlurLastSaleDate($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.lastSaleDate}}</span>\n                    </li>\n\n\n\n\n\n\n                    <li>\n                      <span class=\"title\">Zoning:</span>\n                      <span class=\"text\" (blur)=\"onBlurZoning($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.zoning}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Number Stories:</span>\n                      <span class=\"text\" (blur)=\"onBlurNumberStories($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.numberStories}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Number Buildings:</span>\n                      <span class=\"text\" (blur)=\"onBlurNumberBuildings($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.numberBuildings}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Website:</span>\n                      <span class=\"text\" (blur)=\"onBlurWebsite($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.website}}</span>\n                    </li>\n\n\n                    <!-- <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label  class=\"control-label\">Master Metered</label>\n                      <br>\n                        <input (change)=\"masterMeteredChange($event)\" [(ngModel)]=\"propertyUpdateObj.masterMetered\" name=\"firstName28\" class=\"\" type=\"checkbox\">\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label  class=\"control-label\">Indivisually Metered</label>\n                      <br>\n                        <input (change)=\"indivisuallyMeteredChange($event)\" [(ngModel)]=\"propertyUpdateObj.individuallyMetered\" name=\"firstName29\" class=\"\" type=\"checkbox\">\n                      </div>\n                    </div> -->\n\n                    <li>\n                      <span class=\"title\">Master Metered:</span>\n                      <input (change)=\"masterMeteredChange($event)\" [(ngModel)]=\"propertyUpdateObj.masterMetered\" name=\"firstName28\" class=\"\" type=\"checkbox\">\n                    </li>\n                    <li>\n                      <span class=\"title\">Individually Metered:</span>\n                      <input (change)=\"indivisuallyMeteredChange($event)\" [(ngModel)]=\"propertyUpdateObj.individuallyMetered\" name=\"firstName29\" class=\"\" type=\"checkbox\">\n                    </li>\n\n\n\n                    <li>\n                      <span class=\"title\">Parking Spaces:</span>\n                      <span class=\"text\" (blur)=\"onBlurParkingSpaces($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.parkingSpaces}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Parking Ratio:</span>\n                      <span class=\"text\" (blur)=\"onBlurParkingRatio($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.parkingRatio}}</span>\n                    </li>\n                    <!-- <li>\n                      <span class=\"title\">Parking Type:</span>\n                      <span class=\"text\" (blur)=\"onBlurParkingType($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.parkingType}}</span>\n                    </li> -->\n                    <li>\n                      <span class=\"title\">Garages:</span>\n                      <span class=\"text\" (blur)=\"onBlurGarages($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.garages}}</span>\n                    </li>\n                    <li>\n                      <span class=\"title\">Carports:</span>\n                      <span class=\"text\" (blur)=\"onBlurCarports($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.carports}}</span>\n                    </li>\n\n\n\n\n\n                  </ul>\n\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                <ul class=\"personal-info\">\n                  <li>\n                    <span class=\"title\">Property Management:</span>\n                    <span class=\"text\" (blur)=\"onBlurPropertyManagement($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.propertyManagement}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">On Site Phone:</span>\n                    <span class=\"text\" (blur)=\"onBlurOnSitePhone($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.onSitePhone}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">On Site Contact:</span>\n                    <span class=\"text\" (blur)=\"onBlurOnSiteContact($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.onSiteContact}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Group:</span>\n                    <span class=\"text\" (blur)=\"onBlurGroup($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.group}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Ownership Entity:</span>\n                    <span class=\"text\" (blur)=\"onBlurOwnershipEntity($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.ownershipEntity}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Ownership Entity Address:</span>\n                    <span class=\"text\" (blur)=\"onBlurOwnershipEntityAddress($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.ownershipEntityAddress}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\">Units:</span>\n                    <span class=\"text\" (blur)=\"onBlurUnits($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.units}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Square Footage:</span>\n                    <span class=\"text\" (blur)=\"onBlurSquareFootage($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.squareFootage}}</span>\n                  </li>\n\n                  <li>\n                    <span class=\"title\" >Parcel Number:</span>\n                    <span class=\"text\" (blur)=\"onBlurParcelNumber($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.parcelNumber}}</span>\n                  </li>\n\n                  <li>\n                    <span class=\"title\" >Land Acres:</span>\n                    <span class=\"text\" (blur)=\"onBlurLandAcres($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.landAcres}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Land SF:</span>\n                    <span class=\"text\" (blur)=\"onBlurLandSf($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.landSf}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Far:</span>\n                    <span class=\"text\" (blur)=\"onBlurFar($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.far}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Year Built:</span>\n                    <span class=\"text\" (blur)=\"onBlurYearBuilt($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.yearBuilt}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Year Renovated:</span>\n                    <span class=\"text\" (blur)=\"onBlurYearRenovated($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.yearRenovated}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Primary Contact Phone:</span>\n                    <span class=\"text\" (blur)=\"onBlurPrimaryContactPhone($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.primaryContactPhone}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Primary Contact Email:</span>\n                    <span class=\"text\" (blur)=\"onBlurPrimaryContactEmail($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.primaryContactEmail}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Primary Contact Mobile:</span>\n                    <span class=\"text\" (blur)=\"onBlurPrimaryContactMobile($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.primaryContactMobile}}</span>\n                  </li>\n                  <li>\n                    <span class=\"title\" >Last Activity Date:</span>\n                    <span class=\"text\" (blur)=\"onBlurPrimaryContactLastActivityDate($event.target)\" contenteditable=\"true\">{{propertyUpdateObj.primaryContactLastActivityDate}}</span>\n                  </li>\n\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"    margin-top: 2%;\">\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\">Property Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"recordType\"\n                            [active]=\"recordTypeSelected\"\n                            (data)=\"refreshValueUpdateRecordType($event)\"\n                            placeholder=\"No property type selected\"></ng-select>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n\n                      <span class=\"\">\n                     <span class=\"title\">State </span>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"state\"\n                          [active]=\"stateSelected\"\n                          (data)=\"refreshValueUpdateState($event)\"\n                          placeholder=\"No state selected\"></ng-select>\n                        </span>\n\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n\n                <span class=\"title\">County </span>\n                <ng-select  [multiple]=\"false\"\n\n                            [items]=\"county\"\n                            [active]=\"countySelected\"\n                            (data)=\"refreshValueUpdateCounty($event)\"\n\n                            placeholder=\"No county selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">MSA </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"msa\"\n                            [active]=\"msaSelected\"\n                            (data)=\"refreshValueUpdateMsa($event)\"\n                            placeholder=\"No MSA selected\"></ng-select>\n              </div>\n\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Market </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"market\"\n                            [active]=\"marketSelected\"\n                            (data)=\"refreshValueUpdateMarket($event)\"\n                            placeholder=\"No market selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Sub Market </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"submarket\"\n                            [active]=\"submarketSelected\"\n                            (data)=\"refreshValueUpdateSubmarket($event)\"\n                            placeholder=\"No submarket selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Primary Use </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"primaryUse\"\n                            [active]=\"primaryUseSelected\"\n                            (data)=\"refreshValueUpdatePrimaryUse($event)\"\n                            placeholder=\"No primary use selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Property Status </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"propertyStatus\"\n                            [active]=\"propertyStatusSelected\"\n                            (data)=\"refreshValueUpdatePropertyStatus($event)\"\n                            placeholder=\"No property status selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Building Class </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"buildingClass\"\n                            [active]=\"buildingClassSelected\"\n                            (data)=\"refreshValueUpdateBuildingClass($event)\"\n                            placeholder=\"No building class selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Rent Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"rentType\"\n                            [active]=\"rentTypeSelected\"\n                            (data)=\"refreshValueUpdateRentType($event)\"\n                            placeholder=\"No rent type selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Construction </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"construction\"\n                            [active]=\"constructionSelected\"\n                            (data)=\"refreshValueUpdateConstruction($event)\"\n                            placeholder=\"No construction selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Roof Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"roofType\"\n                            [active]=\"roofTypeSelected\"\n                            (data)=\"refreshValueUpdateRoofType($event)\"\n                            placeholder=\"No roof type selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Siding Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"sidingType\"\n                            [active]=\"sidingTypeSelected\"\n                            (data)=\"refreshValueUpdateSidingType($event)\"\n                            placeholder=\"No siding type selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Foundation Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"foundationType\"\n                            [active]=\"foundationTypeSelected\"\n                            (data)=\"refreshValueUpdateFoundationType($event)\"\n                            placeholder=\"No foundation type selected\"></ng-select>\n              </div>\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Parking Type </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"parkingType\"\n                            [active]=\"parkingTypeSelected\"\n                            (data)=\"refreshValueUpdateParkingType($event)\"\n                            placeholder=\"No parking type selected\"></ng-select>\n              </div>\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Primary Contact </span>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"primaryContact\"\n                            [active]=\"primaryContactSelected\"\n                            (data)=\"refreshValueUpdatePrimaryContact($event)\"\n                            placeholder=\"No primary contact selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                 <span class=\"title\">Unit Amenities </span>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"unitAmenities\"\n                            [active]=\"unitAmenitiesSelected\"\n                            (data)=\"refreshValueUpdateUnitAmenities($event)\"\n                            placeholder=\"No unit amenities selected\"></ng-select>\n              </div>\n\n              <div class=\"col-md-4\" style=\"line-height: 2.5em;\">\n                <span class=\"title\">Site Amenities </span>\n                <ng-select  [multiple]=\"true\"\n                            [items]=\"siteAmenities\"\n                            [active]=\"siteAmenitiesSelected\"\n                            (data)=\"refreshValueUpdateSiteAmenities($event)\"\n                            placeholder=\"No site amenities selected\"></ng-select>\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-box tab-box\">\n    <div class=\"row user-tabs\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 line-tabs\">\n        <ul class=\"nav nav-tabs tabs nav-tabs-bottom\" style=\"    text-align: center;\">\n          <li class=\" active col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#unitMix\" >Unit Mix</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#projects\" >Ownership</a></li>\n          <li class=\" col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#activity\" >Activity</a></li>\n          <li *ngIf=\"propertyUpdateObj.forSale\" class=\"col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#listing\" >Sale</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#portfolio\" >History</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#files\">Files</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px; width:11%\"><a data-toggle=\"tab\" href=\"#pictures\" >Attachments </a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;width:11%\"><a data-toggle=\"tab\" href=\"#notes\" >Notes</a></li>\n          <li class=\"col-sm-1\" style=\"padding: 0px;width:11%\"><a data-toggle=\"tab\" href=\"#location\" >Location</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"tab-content  profile-tab-content\">\n\n        <div id=\"unitMix\" class=\"tab-pane fade in active\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              Need details and sample for this.\n            </div>\n          </div>\n        </div>\n\n\n\n\n        <div id=\"activity\" class=\"tab-pane fade\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div>\n                <div class=\"activity\">\n                  <div class=\"activity-box\">\n                    <ul class=\"activity-list\">\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Lesley Grauer\">\n                            <img alt=\"Lesley Grauer\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Lesley Grauer</a> added new task <a >Find 3BHK</a>\n                            <span class=\"time\">4 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a class=\"avatar\" title=\"\" data-toggle=\"tooltip\" style=\"background-color: #ff6d00\" data-original-title=\"Jeffery Lalor\">L</a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Loren Gatlin</a> and <a class=\"name\">Tarah Shropshire</a> to project <a >Waterloo building sale</a>\n                            <span class=\"time\">6 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Catherine Manseau\">\n                            <img alt=\"Catherine Manseau\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Catherine Manseau</a> completed task <a >Meeting with client</a>\n                            <span class=\"time\">12 mins ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Bernardo Galaviz\">\n                            <img alt=\"Bernardo Galaviz\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Bernardo Galaviz</a> changed the task name <a >Resale of property</a>\n                            <span class=\"time\">1 day ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Mike Litorus\">\n                            <img alt=\"Mike Litorus\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Mike Litorus</a> added new task <a >File tax for property</a>\n                            <span class=\"time\">2 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Jeffery Lalor\">\n                            <img alt=\"Jeffery Lalor\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Jeffery Lalor</a> added <a class=\"name\">Jeffrey Warden</a> and <a class=\"name\">Bernardo Galaviz</a> to the task of <a >Tata and Birla property dispute</a>\n                            <span class=\"time\">7 days ago</span>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"portfolio\" class=\"tab-pane fade\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div>\n                <div class=\"activity\">\n                  <div class=\"activity-box\">\n                    <ul class=\"activity-list\">\n                      <li>\n                        <div class=\"activity-user\">\n                          <a  title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Lesley Grauer\">\n                            <img alt=\"Lesley Grauer\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Lesley Grauer</a> sold this property to <a >Allen Walker</a>\n                            <span class=\"time\">1 year ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a class=\"avatar\" title=\"\" data-toggle=\"tooltip\" style=\"background-color: #ff6d00\" data-original-title=\"Jeffery Lalor\">L</a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Catherine Manseau</a> sold this property to <a >Brad River</a>\n                            <span class=\"time\">3 year ago</span>\n                          </div>\n                        </div>\n                      </li>\n                      <li>\n                        <div class=\"activity-user\">\n                          <a title=\"\" data-toggle=\"tooltip\" class=\"avatar\" data-original-title=\"Catherine Manseau\">\n                            <img alt=\"Catherine Manseau\" src=\"./../../../../../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                          </a>\n                        </div>\n                        <div class=\"activity-content\">\n                          <div class=\"timeline-content\">\n                            <a class=\"name\">Bernardo Galaviz</a> sold this property to <a >Mike Litorus</a>\n                            <span class=\"time\">3 year ago</span>\n                          </div>\n                        </div>\n                      </li>\n\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n        <div id=\"projects\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"    padding: 0;\">\n            <div class=\"col-lg-3 col-sm-4\">\n              <div class=\"card-box project-box\">\n                <div class=\"dropdown profile-action\">\n                  <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                  <ul class=\"dropdown-menu pull-right\">\n                    <li><a  data-toggle=\"modal\" data-target=\"#edit_project\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                    <li><a  data-toggle=\"modal\" data-target=\"#delete_project\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                  </ul>\n                </div>\n                <h4 class=\"project-title\"><a >Owner One</a></h4>\n\n                <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and\n                  typesetting industry. When an unknown printer took a galley of type and\n                  scrambled it...\n                </p>\n                <div class=\"pro-deadline m-b-15\">\n                  <div class=\"sub-title\">\n                    Purchased on:\n                  </div>\n                  <div class=\"text-muted\">\n                    27th of Feb, 2018\n                  </div>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>Property owner :</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Jeffery Lalor\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Jeffery Lalor\"></a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"project-members m-b-15\">\n                  <div>People connected to this contact:</div>\n                  <ul class=\"team-members\">\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Doe\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Doe\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Richard Miles\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Richard Miles\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"John Smith\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"John Smith\"></a>\n                    </li>\n                    <li>\n                      <a  data-toggle=\"tooltip\" title=\"\" data-original-title=\"Mike Litorus\"><img src=\"./../../../../../assets/images/user.jpg\" alt=\"Mike Litorus\"></a>\n                    </li>\n                    <li>\n                      <a  class=\"all-users\">+15</a>\n                    </li>\n                  </ul>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div id=\"listing\" *ngIf=\"propertyUpdateObj.forSale\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>Listing ID</th>\n                      <th>Address</th>\n                      <th>Date</th>\n                      <th>Price</th>\n                      <th>Status</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td><a >#LST-0001</a></td>\n                      <td>\n                        <h2><a >H#2, 21st Jump Street.</a></h2>\n                      </td>\n                      <td>30 Aug 201</td>\n                      <td>$380,000</td>\n                      <td>\n                        <span class=\"label label-warning-border\">BOOKED</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0002</a></td>\n                      <td>\n                        <h2><a >Appartment 21, 21st and Lex.</a></h2>\n                      </td>\n                      <td>17 Sep 2018</td>\n                      <td>$500,000</td>\n                      <td>\n                        <span class=\"label label-success-border\">SOLD</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td><a >#LST-0003</a></td>\n                      <td>\n                        <h2><a >Corner of 23 and Waterloo.</a></h2>\n                      </td>\n                      <td>30 Nov 2018</td>\n                      <td>$600,000</td>\n                      <td>\n                        <span class=\"label label-danger-border\">FOR SALE</span>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all listings</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div id=\"files\" class=\"tab-pane fade\">\n          <div class=\"panel\" style=\"padding: 0px;\">\n            <div class=\"panel-body\">\n\n              <ul class=\"files-list\">\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >Some file name.xls</a></span>\n                      <span class=\"file-author\"><a >Norris</a></span> <span class=\"file-date\">May 11th at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 14.8Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                          <li><a href=\"javascript:void(0)\">Delete</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"files-cont\">\n                    <div class=\"file-type\">\n                      <span class=\"files-icon\"><i class=\"fa fa-file-pdf-o\"></i></span>\n                    </div>\n                    <div class=\"files-info\">\n                      <span class=\"file-name text-ellipsis\"><a >some other file name (demo).xls</a></span>\n                      <span class=\"file-author\"><a >Stevens</a></span> <span class=\"file-date\">May 01st at 6:53 PM</span>\n                      <div class=\"file-size\">Size: 1.2Mb</div>\n                    </div>\n                    <ul class=\"files-action\">\n                      <li class=\"dropdown\">\n                        <a  class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-h\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                          <li><a href=\"javascript:void(0)\">Download</a></li>\n                          <li><a  data-toggle=\"modal\" data-target=\"#share_files\">Share</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n\n        <div id=\"notes\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n            <div class=\"panel panel-table\">\n\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-striped custom-table m-b-0\">\n                    <thead>\n                    <tr>\n                      <th>ID</th>\n                      <th>Notes</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>1</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>2</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>3</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>4</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    <tr>\n                      <td>5</td>\n                      <td>This is dummy Note. Just for demo purpose. when we will build notes module; this data will be filled with database.</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <a class=\"text-primary\">View all notes</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <div id=\"pictures\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n\n\n            <div class=\"col-sm-4\" id=\"picDiv\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Pictures</label>\n                  <input type=\"file\"\n                         id=\"fileUploadPropertyEdit2\"\n                         class=\"filepond2\"\n                         name=\"filepond\"\n                         multiple\n                         accept=\"image/png, image/jpeg, image/gif\"\n                         />\n              </div>\n            </div>\n\n            <div class=\"col-sm-8\">\n              <div class=\"form-group\">\n                <div>\n                  <a *ngIf=\"(propertyUpdateObj.pictures)?.length > 0\" (click)=\"deleteImage()\" style=\"cursor: pointer;\n                      right: 10%;\n                      position: absolute;\n                      font-size: 200%;\n                      z-index: 999;\n                      top: -5%;\"><i  class=\"fa fa-trash-o m-r-5\" style=\"color: #e70000;\"></i></a>\n                  <div class=\"carousel\">\n\n\n                    <ul class=\"slides\" *ngIf=\"(propertyUpdateObj.pictures)?.length == 1\">\n                      <div>\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"one\" checked />\n                        <li class=\"slide-container\">\n                          <div class=\"slide-image\">\n                            <img src={{(propertyUpdateObj.pictures)[0]}}>\n                          </div>\n                          <div class=\"carousel-controls\">\n\n                          </div>\n                        </li>\n                      </div>\n                    </ul>\n\n\n                    <ul class=\"slides\" *ngIf=\"(propertyUpdateObj.pictures)?.length > 1\">\n\n                      <div  *ngFor=\"let image of propertyUpdateObj.pictures; let i = index\">\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"img-{{i}}\" *ngIf=\"i==0\" checked />\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"img-{{i}}\" *ngIf=\"i!=0\" />\n\n                        <li class=\"slide-container\">\n                          <div class=\"slide-image\">\n\n                            <img src={{image}}>\n                          </div>\n\n                          <div class=\"carousel-controls\">\n                            <label for=\"img-{{i-1}}\" *ngIf=\"i != 0\"  (click)=\"recordDeleteIndex(i-1)\" class=\"prev-slide\">\n                              <span>&lsaquo;</span>\n                            </label>\n                            <label for=\"img-{{i+1}}\" *ngIf=\"(propertyUpdateObj.pictures)?.length != i+1\" (click)=\"recordDeleteIndex(i+1)\" class=\"next-slide\">\n                              <span>&rsaquo;</span>\n                            </label>\n                          </div>\n                        </li>\n                      </div>\n                    </ul>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n\n            <div class=\"col-md-12 m-t-20 text-center\">\n              <button class=\"btn btn-primary\" (click)=\"uploadImages()\">Save Images</button>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div id=\"location\" class=\"tab-pane fade\">\n          <div class=\"col-md-12\" style=\"padding: 0px;\">\n              <div class=\"form-group\">\n                  <label  class=\"control-label\">Maps</label>\n                  <agm-map  [latitude]=\"propertyUpdateObj.lat\" [longitude]=\"propertyUpdateObj.lng\" >\n                    <agm-marker (dragEnd)=\"markerMoved($event)\" [markerDraggable]=\"true\" class=\"map-marker\" [latitude]=\"propertyUpdateObj.lat\" [longitude]=\"propertyUpdateObj.lng\"  [iconUrl]=\"markerUrl\"></agm-marker>\n                  </agm-map>\n                </div>\n          </div>\n        </div>\n\n\n\n\n\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-details/property-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PropertyDetailsComponent = /** @class */ (function () {
    function PropertyDetailsComponent(toastr, vcr, af, router, afStorage) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.afStorage = afStorage;
        this.propertyList = [];
        this.propertyAddObj = {};
        this.recordType = [];
        this.recordTypeSelected = [];
        this.valueRecordType = '';
        this.valueUpdateRecordType = '';
        this.state = [];
        this.stateSelected = [];
        this.valueState = '';
        this.valueUpdateState = '';
        this.county = [];
        this.countySelected = [];
        this.valueCounty = '';
        this.valueUpdateCounty = '';
        this.msa = [];
        this.msaSelected = [];
        this.valueMsa = '';
        this.valueUpdateMsa = '';
        this.market = [];
        this.market1 = [];
        this.market2 = [];
        this.marketSelected = [];
        this.valueMarket = '';
        this.valueUpdateMarket = '';
        this.submarket = [];
        this.submarket1 = [];
        this.submarket2 = [];
        this.submarketSelected = [];
        this.valueSubmarket = '';
        this.valueUpdateSubmarket = '';
        this.primaryUse = [];
        this.primaryUseSelected = [];
        this.valuePrimaryUse = '';
        this.valueUpdatePrimaryUse = '';
        this.propertyStatus = [];
        this.propertyStatusSelected = [];
        this.valuePropertyStatus = '';
        this.valueUpdatePropertyStatus = '';
        this.buildingClass = [];
        this.buildingClassSelected = [];
        this.valueBuildingClass = '';
        this.valueUpdateBuildingClass = '';
        this.rentType = [];
        this.rentTypeSelected = [];
        this.valueRentType = '';
        this.valueUpdateRentType = '';
        this.construction = [];
        this.constructionSelected = [];
        this.valueConstruction = '';
        this.valueUpdateConstruction = '';
        this.roofType = [];
        this.roofTypeSelected = [];
        this.valueRoofType = '';
        this.valueUpdateRoofType = '';
        this.sidingType = [];
        this.sidingTypeSelected = [];
        this.valueSidingType = '';
        this.valueUpdateSidingType = '';
        this.foundationType = [];
        this.foundationTypeSelected = [];
        this.valueFoundationType = '';
        this.valueUpdateFoundationType = '';
        this.unitAmenities = [];
        this.unitAmenitiesSelected = [];
        this.valueUnitAmenities = [];
        this.valueUpdateUnitAmenities = [];
        this.siteAmenities = [];
        this.siteAmenitiesSelected = [];
        this.valueSiteAmenities = [];
        this.valueUpdateSiteAmenities = [];
        this.parkingType = [];
        this.parkingTypeSelected = [];
        this.valueParkingType = '';
        this.valueUpdateParkingType = '';
        this.primaryContact = [];
        this.primaryContactSelected = [];
        this.valuePrimaryContact = '';
        this.valueUpdatePrimaryContact = '';
        //Support Variables
        this.userId = '';
        //Delete Key temp variable
        this.currentDeleteKey = '';
        //Update Key temp variable
        this.currentUpdateKey = '';
        //Update pic url
        this.url = '';
        //Stores view type i.e. block or table view
        this.pivot = false;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        this.propertyId = '';
        this.propertyUpdateObj = {
            'recordType': '',
            'propertyName': '',
            'streetAddress': '',
            'city': '',
            'state': '',
            'zip': '',
            'county': '',
            'msa': '',
            'market': '',
            'submarket': '',
            'primaryUse': '',
            'propertyStatus': '',
            'buildingClass': '',
            'rentType': '',
            'lastSaleDate': '',
            "lastSalePrice": "",
            "lastSaleCap": "",
            "lastSaleType": "",
            "propertyManagement": "",
            "onSitePhone": "",
            "onSiteContact": "",
            "group": "",
            "ownershipEntity": "",
            "ownershipEntityAddress": "",
            "units": "",
            "squareFootage": "",
            "parcelNumber": "",
            "landAcres": "",
            "landSf": "",
            "far": "",
            "yearBuilt": "",
            "yearRenovated": "",
            "zoning": "",
            "construction": "",
            "roofType": "",
            "sidingType": "",
            "foundationType": "",
            "numberStories": "",
            "numberBuildings": "",
            "website": "",
            "unitAmenities": [],
            "siteAmenities": [],
            "masterMetered": "",
            "individuallyMetered": "",
            "parkingSpaces": "",
            "parkingRatio": "",
            "parkingType": "",
            "garages": "",
            "carports": "",
            "pictures": [],
            "forSale": true,
            "primaryContact": "",
            "primaryContactPhone": "",
            "primaryContactEmail": "",
            "primaryContactMobile": "",
            "primaryContactLastActivityDate": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "lat": 0,
            "lng": 0
        };
        this.markerUrl = "./../../../../../assets/images/map-marker.png";
        this.deleteIndex = 0;
        this.toastr.setRootViewContainerRef(vcr);
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordType = ["Market",
            "Affordable/Rent Subsidized",
            "Senior Housing",
            "Student Housing",
            "Assisted Living"
        ];
        this.state = ["Washington", "Oregon"];
        this.county = ["Multnomah",
            "Clark",
            "Cowlitz",
            "Clackamas",
            "Marion",
            "Linn",
            "Lane",
            "Washington",
            "Columbia",
            "Deschutes"
        ];
        this.msa = ["Portland-Vancouver-Hillsboro",
            "Salem",
            "Longview",
            "Bend-Redmond"
        ];
        this.market = ["Kelso",
            "Longview",
            "Vancouver",
            "Outlying Cowlitz County"
        ];
        this.market2 = ["Bend/Central Deschutes County",
            "Redmond/North Deschutes County",
            "Central Northeast",
            "Central Salem",
            "Clackamas County",
            "Damascus",
            "East Portland",
            "East Salem",
            "Keizer",
            "Monmouth/Independence",
            "Northeast Portland",
            "North Marion County",
            "Oregon City",
            "Outlying Polk County",
            "Outlying Marion County",
            "Southeast Portland",
            "South Salem",
            "Troutdale/Gresham",
            "Vancouver",
            "West Salem",
            "Yamhill County",
            "Wilsonville"
        ];
        this.submarket = [];
        this.primaryUse = ["Garden",
            "Low-Rise",
            "Mid-Rise",
            "High-Rise"
        ];
        this.propertyStatus = ["Existing",
            "Proposed",
            "Under Construction",
            "Demolished",
            "Under Renovation"
        ];
        this.buildingClass = ["A",
            "B",
            "C",
            "D"
        ];
        this.rentType = ["Market", "Affordable/Rent Subsidized", "55+"];
        this.construction = ["Wood Frame",
            "Masonry",
            "Unreinforeced Masonry",
            "Reinforced Masonry",
            "Podium Wood",
            "Reinforced Concrete"
        ];
        this.roofType = ["Flat",
            "Pitched/Composition",
            "Pitched/Shingle",
            "Pitched/Tile",
            "Slanted",
        ];
        this.sidingType = ["Aluminum",
            "Brick",
            "Vinyl",
            "Hardy Plank",
            "T1-11",
            "Fiber Cement",
            "Wood"
        ];
        this.foundationType = ["Post & Beam",
            "Crawl",
            "Slab"
        ];
        this.parkingType = ["Off-Street", "Off-Site", "Mixed", "Carports", "Garages"];
        this.multiSelectRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/multiSelect/property/");
        this.multiSelectRef.child("submarket/washginton/").once('value', function (snapshot) {
            _this.submarket1 = [];
            for (var key in snapshot.val()) {
                _this.submarket1.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("submarket/oregon/").once('value', function (snapshot) {
            _this.submarket2 = [];
            for (var key in snapshot.val()) {
                _this.submarket2.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("siteAmenities/").once('value', function (snapshot) {
            _this.unitAmenities = [];
            for (var key in snapshot.val()) {
                _this.unitAmenities.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("unitAmenities/").once('value', function (snapshot) {
            _this.siteAmenities = [];
            for (var key in snapshot.val()) {
                _this.siteAmenities.push(snapshot.val()[key]);
            }
        });
        //Get User ID from Firebase Authentication
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        this.contactRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/contacts");
        this.contactRef.once('value', function (snapshot) {
            for (var key in snapshot.val()) {
                if (!snapshot.val()[key].contactPicture || (snapshot.val()[key].contactPicture).length < 0) {
                    _this.primaryContact.push({
                        id: key,
                        text: '<a class="avatar">' + (snapshot.val()[key].firstName).substr(0, 1) + '</a>' + snapshot.val()[key].firstName + ' ' + snapshot.val()[key].lastName
                    });
                }
                else {
                    _this.primaryContact.push({
                        id: key,
                        text: '<a class=avatar style="height: 30px; width: 30px;"><img src="' + snapshot.val()[key].contactPicture + '"></a>' + snapshot.val()[key].firstName + ' ' + snapshot.val()[key].lastName
                    });
                }
            }
        });
        this.propertyRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/property");
        this.routeState = this.router.getNavigatedData();
        if (this.routeState) {
            if (this.routeState[0]) {
                if (this.routeState[0]['propertyId'] != '') {
                    this.currentUpdateKey = this.routeState[0]['propertyId'];
                    this.loadEdit(this.routeState[0]['propertyId']);
                }
                else {
                    this.router.navigate(['property']);
                }
            }
            else {
                this.router.navigate(['property']);
            }
        }
        else {
            this.router.navigate(['property']);
        }
    };
    PropertyDetailsComponent.prototype.getFiles = function () {
        var files = [];
        for (var i = 0; i < $("input[name=filepond]").length; i++) {
            files.push((JSON.parse($("input[name=filepond]")[i].getAttribute("value"))).data);
        }
        return files;
        //  $("input[name=filepond]").each((data,element)=>{
        //    files.push((element));
        //    if($("input[name=filepond]").length == files.length){
        //      return files;
        //    }
        //  });
        // return files;
    };
    PropertyDetailsComponent.prototype.loadEdit = function (id) {
        var _this = this;
        console.log(id);
        this.currentUpdateKey = id;
        this.propertyRef.child(id).once('value', function (snapshot) {
            _this.propertyUpdateObj = {
                "recordType": snapshot.val()["recordType"],
                "propertyName": snapshot.val()["propertyName"],
                "streetAddress": snapshot.val()["streetAddress"],
                "city": snapshot.val()["city"],
                "state": snapshot.val()["state"],
                "zip": snapshot.val()["zip"],
                "county": snapshot.val()["county"],
                "msa": snapshot.val()["msa"],
                "market": snapshot.val()["market"],
                "submarket": snapshot.val()["submarket"],
                "primaryUse": snapshot.val()["primaryUse"],
                "propertyStatus": snapshot.val()["propertyStatus"],
                "buildingClass": snapshot.val()["buildingClass"],
                "rentType": snapshot.val()["rentType"],
                "lastSaleDate": snapshot.val()["lastSaleDate"],
                "lastSalePrice": snapshot.val()["lastSalePrice"],
                "lastSaleCap": snapshot.val()["lastSaleCap"],
                "lastSaleType": snapshot.val()["lastSaleType"],
                "propertyManagement": snapshot.val()["propertyManagement"],
                "onSitePhone": snapshot.val()["onSitePhone"],
                "onSiteContact": snapshot.val()["onSiteContact"],
                "group": snapshot.val()["group"],
                "ownershipEntity": snapshot.val()["ownershipEntity"],
                "ownershipEntityAddress": snapshot.val()["ownershipEntityAddress"],
                "units": snapshot.val()["units"],
                "squareFootage": snapshot.val()["squareFootage"],
                "parcelNumber": snapshot.val()["parcelNumber"],
                "landAcres": snapshot.val()["landAcres"],
                "landSf": snapshot.val()["landSf"],
                "far": snapshot.val()["far"],
                "yearBuilt": snapshot.val()["yearBuilt"],
                "yearRenovated": snapshot.val()["yearRenovated"],
                "zoning": snapshot.val()["zoning"],
                "construction": snapshot.val()["construction"],
                "roofType": snapshot.val()["roofType"],
                "sidingType": snapshot.val()["sidingType"],
                "foundationType": snapshot.val()["foundationType"],
                "numberStories": snapshot.val()["numberStories"],
                "numberBuildings": snapshot.val()["numberBuildings"],
                "website": snapshot.val()["website"],
                "unitAmenities": snapshot.val()["unitAmenities"],
                "siteAmenities": snapshot.val()["siteAmenities"],
                "masterMetered": snapshot.val()["masterMetered"],
                "individuallyMetered": snapshot.val()["individuallyMetered"],
                "parkingSpaces": snapshot.val()["parkingSpaces"],
                "parkingRatio": snapshot.val()["parkingRatio"],
                "parkingType": snapshot.val()["parkingType"],
                "garages": snapshot.val()["garages"],
                "carports": snapshot.val()["carports"],
                "pictures": snapshot.val()["pictures"],
                "primaryContact": snapshot.val()["primaryContact"],
                "forSale": snapshot.val()["forSale"],
                "primaryContactPhone": snapshot.val()["primaryContactPhone"],
                "primaryContactMobile": snapshot.val()["primaryContactMobile"],
                "primaryContactEmail": snapshot.val()["primaryContactEmail"],
                "primaryContactLastActivityDate": snapshot.val()["primaryContactLastActivityDate"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"],
                "lat": snapshot.val()["lat"] ? snapshot.val()["lat"] : 0,
                "lng": snapshot.val()["lng"] ? snapshot.val()["lng"] : 0
            };
            _this.recordTypeSelected = [];
            _this.stateSelected = [];
            _this.countySelected = [];
            _this.msaSelected = [];
            _this.marketSelected = [];
            _this.submarketSelected = [];
            _this.primaryUseSelected = [];
            _this.propertyStatusSelected = [];
            _this.buildingClassSelected = [];
            _this.rentTypeSelected = [];
            _this.constructionSelected = [];
            _this.roofTypeSelected = [];
            _this.sidingTypeSelected = [];
            _this.foundationTypeSelected = [];
            _this.unitAmenitiesSelected = [];
            _this.siteAmenitiesSelected = [];
            _this.parkingTypeSelected = [];
            _this.primaryContactSelected = [];
            _this.url = _this.propertyUpdateObj.pictures ? _this.propertyUpdateObj.pictures[0] : null;
            _this.valueUpdateRecordType = '';
            _this.valueUpdateState = '';
            _this.valueUpdateCounty = '';
            _this.valueUpdateMsa = '';
            _this.valueUpdateMarket = '';
            _this.valueUpdateSubmarket = '';
            _this.valueUpdatePrimaryUse = '';
            _this.valueUpdatePropertyStatus = '';
            _this.valueUpdateBuildingClass = '';
            _this.valueUpdateRentType = '';
            _this.valueUpdateConstruction = '';
            _this.valueUpdateRoofType = '';
            _this.valueUpdateSidingType = '';
            _this.valueUpdateFoundationType = '';
            _this.valueUpdateUnitAmenities = [];
            _this.valueUpdateSiteAmenities = [];
            _this.valueUpdateParkingType = '';
            // if(this.propertyUpdateObj.primaryContact) {
            //   this.contactRef.child(this.propertyUpdateObj.primaryContact).once('value', (snapshot) => {
            //     if(!snapshot.val().contactPicture || (snapshot.val().contactPicture).length < 0){
            //       this.primaryContactSelected.push({
            //         id: this.propertyUpdateObj.primaryContact,
            //         text: '<a class="avatar">'+(snapshot.val().firstName).substr(0,1)+'</a>'+snapshot.val().firstName+ ' ' + snapshot.val().lastName
            //       });
            //     }
            //     else{
            //       this.primaryContactSelected.push({
            //         id: this.propertyUpdateObj.primaryContact,
            //         text: '<a class=avatar style="height: 30px; width: 30px;"><img src="'+snapshot.val().contactPicture+'"></a>'+snapshot.val().firstName + ' ' + snapshot.val().lastName
            //       });
            //     }
            //     console.log(this.primaryContact);
            //   });
            //   this.primaryContactSelected = this.primaryContactSelected.slice();
            //   this.valueUpdatePrimaryContact = this.propertyUpdateObj.primaryContact;
            // }
            if (_this.propertyUpdateObj.recordType) {
                _this.recordTypeSelected.push({
                    text: _this.propertyUpdateObj.recordType,
                    id: _this.propertyUpdateObj.recordType
                });
                _this.recordTypeSelected = _this.recordTypeSelected.slice();
                _this.valueUpdateRecordType = _this.propertyUpdateObj.recordType;
            }
            if (_this.propertyUpdateObj.state) {
                _this.stateSelected.push({
                    text: _this.propertyUpdateObj.state,
                    id: _this.propertyUpdateObj.state
                });
                _this.stateSelected = _this.stateSelected.slice();
                _this.valueUpdateState = _this.propertyUpdateObj.state;
            }
            if (_this.propertyUpdateObj.county) {
                _this.countySelected.push({
                    text: _this.propertyUpdateObj.county,
                    id: _this.propertyUpdateObj.county
                });
                _this.countySelected = _this.countySelected.slice();
                _this.valueUpdateCounty = _this.propertyUpdateObj.county;
            }
            if (_this.propertyUpdateObj.msa) {
                _this.msaSelected.push({
                    text: _this.propertyUpdateObj.msa,
                    id: _this.propertyUpdateObj.msa
                });
                _this.msaSelected = _this.msaSelected.slice();
                _this.valueUpdateMsa = _this.propertyUpdateObj.msa;
            }
            if (_this.propertyUpdateObj.market) {
                _this.marketSelected.push({
                    text: _this.propertyUpdateObj.market,
                    id: _this.propertyUpdateObj.market
                });
                _this.marketSelected = _this.marketSelected.slice();
                _this.valueUpdateMarket = _this.propertyUpdateObj.market;
            }
            if (_this.propertyUpdateObj.submarket) {
                _this.submarketSelected.push({
                    text: _this.propertyUpdateObj.submarket,
                    id: _this.propertyUpdateObj.submarket
                });
                _this.submarketSelected = _this.submarketSelected.slice();
                _this.valueUpdateSubmarket = _this.propertyUpdateObj.submarket;
            }
            if (_this.propertyUpdateObj.primaryUse) {
                _this.primaryUseSelected.push({
                    text: _this.propertyUpdateObj.primaryUse,
                    id: _this.propertyUpdateObj.primaryUse
                });
                _this.primaryUseSelected = _this.primaryUseSelected.slice();
                _this.valueUpdatePrimaryUse = _this.propertyUpdateObj.primaryUse;
            }
            if (_this.propertyUpdateObj.propertyStatus) {
                _this.propertyStatusSelected.push({
                    text: _this.propertyUpdateObj.propertyStatus,
                    id: _this.propertyUpdateObj.propertyStatus
                });
                _this.propertyStatusSelected = _this.propertyStatusSelected.slice();
                _this.valueUpdatePropertyStatus = _this.propertyUpdateObj.propertyStatus;
            }
            if (_this.propertyUpdateObj.buildingClass) {
                _this.buildingClassSelected.push({
                    text: _this.propertyUpdateObj.buildingClass,
                    id: _this.propertyUpdateObj.buildingClass
                });
                _this.buildingClassSelected = _this.buildingClassSelected.slice();
                _this.valueUpdateBuildingClass = _this.propertyUpdateObj.buildingClass;
            }
            if (_this.propertyUpdateObj.rentType) {
                _this.rentTypeSelected.push({
                    text: _this.propertyUpdateObj.rentType,
                    id: _this.propertyUpdateObj.rentType
                });
                _this.rentTypeSelected = _this.rentTypeSelected.slice();
                _this.valueUpdateRentType = _this.propertyUpdateObj.rentType;
            }
            if (_this.propertyUpdateObj.construction) {
                _this.constructionSelected.push({
                    text: _this.propertyUpdateObj.construction,
                    id: _this.propertyUpdateObj.construction
                });
                _this.constructionSelected = _this.constructionSelected.slice();
                _this.valueUpdateConstruction = _this.propertyUpdateObj.construction;
            }
            if (_this.propertyUpdateObj.roofType) {
                _this.roofTypeSelected.push({
                    text: _this.propertyUpdateObj.roofType,
                    id: _this.propertyUpdateObj.roofType
                });
                _this.roofTypeSelected = _this.roofTypeSelected.slice();
                _this.valueUpdateRoofType = _this.propertyUpdateObj.roofType;
            }
            if (_this.propertyUpdateObj.sidingType) {
                _this.sidingTypeSelected.push({
                    text: _this.propertyUpdateObj.sidingType,
                    id: _this.propertyUpdateObj.sidingType
                });
                _this.sidingTypeSelected = _this.sidingTypeSelected.slice();
                _this.valueUpdateSidingType = _this.propertyUpdateObj.sidingType;
            }
            if (_this.propertyUpdateObj.foundationType) {
                _this.foundationTypeSelected.push({
                    text: _this.propertyUpdateObj.foundationType,
                    id: _this.propertyUpdateObj.foundationType
                });
                _this.foundationTypeSelected = _this.foundationTypeSelected.slice();
                _this.valueUpdateFoundationType = _this.propertyUpdateObj.foundationType;
            }
            if (_this.propertyUpdateObj.unitAmenities) {
                _this.propertyUpdateObj.unitAmenities.forEach(function (data) {
                    _this.unitAmenitiesSelected.push({ text: data, id: data });
                    _this.unitAmenitiesSelected = _this.unitAmenitiesSelected.slice();
                    _this.valueUpdateUnitAmenities.push(data);
                    _this.valueUpdateUnitAmenities = _this.valueUpdateUnitAmenities.slice();
                });
            }
            if (_this.propertyUpdateObj.siteAmenities) {
                _this.propertyUpdateObj.siteAmenities.forEach(function (data) {
                    _this.siteAmenitiesSelected.push({ text: data, id: data });
                    _this.siteAmenitiesSelected = _this.siteAmenitiesSelected.slice();
                    _this.valueUpdateSiteAmenities.push(data);
                    _this.valueUpdateSiteAmenities = _this.valueUpdateSiteAmenities.slice();
                });
            }
            if (_this.propertyUpdateObj.parkingType) {
                _this.parkingTypeSelected.push({
                    text: _this.propertyUpdateObj.parkingType,
                    id: _this.propertyUpdateObj.parkingType
                });
                _this.parkingTypeSelected = _this.parkingTypeSelected.slice();
                _this.valueUpdateParkingType = _this.propertyUpdateObj.parkingType;
            }
        });
    };
    PropertyDetailsComponent.prototype.refreshValueRecordType = function (value) {
        this.valueRecordType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateRecordType = function (value) {
        this.valueUpdateRecordType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueState = function (value) {
        this.valueState = value.id;
        if (value.id == "Washington") {
            this.market = this.market1;
            this.submarket = this.submarket1;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
        else {
            this.market = this.market2;
            this.submarket = this.submarket2;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateState = function (value) {
        this.valueUpdateState = value.id;
        if (value.id == "Washington") {
            this.market = this.market1;
            this.submarket = this.submarket1;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
        else {
            this.market = this.market2;
            this.submarket = this.submarket2;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueCounty = function (value) {
        this.valueCounty = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateCounty = function (value) {
        this.valueUpdateCounty = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueMsa = function (value) {
        this.valueMsa = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateMsa = function (value) {
        this.valueUpdateMsa = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueMarket = function (value) {
        this.valueMarket = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateMarket = function (value) {
        this.valueUpdateMarket = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueSubmarket = function (value) {
        this.valueSubmarket = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateSubmarket = function (value) {
        this.valueUpdateSubmarket = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValuePrimaryUse = function (value) {
        this.valuePrimaryUse = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdatePrimaryUse = function (value) {
        this.valueUpdatePrimaryUse = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValuePropertyStatus = function (value) {
        this.valuePropertyStatus = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdatePropertyStatus = function (value) {
        this.valueUpdatePropertyStatus = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueBuildingClass = function (value) {
        this.valueBuildingClass = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateBuildingClass = function (value) {
        this.valueUpdateBuildingClass = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueRentType = function (value) {
        this.valueRentType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateRentType = function (value) {
        this.valueUpdateRentType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueConstruction = function (value) {
        this.valueConstruction = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateConstruction = function (value) {
        this.valueUpdateConstruction = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueRoofType = function (value) {
        this.valueRoofType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateRoofType = function (value) {
        this.valueUpdateRoofType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueSidingType = function (value) {
        this.valueSidingType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateSidingType = function (value) {
        this.valueUpdateSidingType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueFoundationType = function (value) {
        this.valueFoundationType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateFoundationType = function (value) {
        this.valueUpdateFoundationType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValueUnitAmenities = function (value) {
        var _this = this;
        this.valueUnitAmenities = [];
        value.forEach(function (element) {
            _this.valueUnitAmenities.push(element.id);
        });
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateUnitAmenities = function (value) {
        var _this = this;
        this.valueUpdateUnitAmenities = [];
        value.forEach(function (element) {
            _this.valueUpdateUnitAmenities.push(element.id);
            _this.updateProperty();
        });
    };
    PropertyDetailsComponent.prototype.refreshValueSiteAmenities = function (value) {
        var _this = this;
        this.valueSiteAmenities = [];
        value.forEach(function (element) {
            _this.valueSiteAmenities.push(element.id);
        });
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateSiteAmenities = function (value) {
        var _this = this;
        this.valueUpdateSiteAmenities = [];
        value.forEach(function (element) {
            _this.valueUpdateSiteAmenities.push(element.id);
            _this.updateProperty();
        });
    };
    PropertyDetailsComponent.prototype.refreshValueParkingType = function (value) {
        this.valueParkingType = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdateParkingType = function (value) {
        this.valueUpdateParkingType = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.refreshValuePrimaryContact = function (value) {
        this.valuePrimaryContact = value.id;
    };
    PropertyDetailsComponent.prototype.refreshValueUpdatePrimaryContact = function (value) {
        this.valueUpdatePrimaryContact = value.id;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    PropertyDetailsComponent.prototype.updateProperty = function () {
        if (this.propertyUpdateObj.propertyName.length <= 0) {
            this.toastr.error('Property Name required.', 'Error!');
        }
        else {
            // this.propertyUpdateObj.pictures = '';
            this.propertyUpdateObj.recordType = this.valueUpdateRecordType;
            this.propertyUpdateObj.state = this.valueUpdateState;
            this.propertyUpdateObj.county = this.valueUpdateCounty;
            this.propertyUpdateObj.msa = this.valueUpdateMsa;
            this.propertyUpdateObj.market = this.valueUpdateMarket;
            this.propertyUpdateObj.submarket = this.valueUpdateSubmarket;
            this.propertyUpdateObj.primaryUse = this.valueUpdatePrimaryUse;
            this.propertyUpdateObj.propertyStatus = this.valueUpdatePropertyStatus;
            this.propertyUpdateObj.buildingClass = this.valueUpdateBuildingClass;
            this.propertyUpdateObj.rentType = this.valueUpdateRentType;
            this.propertyUpdateObj.construction = this.valueUpdateConstruction;
            this.propertyUpdateObj.roofType = this.valueUpdateRoofType;
            this.propertyUpdateObj.sidingType = this.valueUpdateSidingType;
            this.propertyUpdateObj.foundationType = this.valueUpdateFoundationType;
            this.propertyUpdateObj.unitAmenities = this.valueUpdateUnitAmenities;
            this.propertyUpdateObj.siteAmenities = this.valueUpdateSiteAmenities;
            this.propertyUpdateObj.parkingType = this.valueUpdateParkingType;
            this.propertyUpdateObj.updateTime = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"].ServerValue.TIMESTAMP;
            this.propertyUpdateObj.updatedBy = this.userId;
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/crm/property/' + this.currentUpdateKey).update(this.propertyUpdateObj).then(function (result) {
            });
        }
    };
    PropertyDetailsComponent.prototype.recordDeleteIndex = function (index) {
        this.deleteIndex = index;
    };
    PropertyDetailsComponent.prototype.deleteImage = function () {
        this.propertyUpdateObj.pictures.splice(this.deleteIndex, 1);
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.markerMoved = function (e) {
        this.propertyUpdateObj.lat = e.coords.lat;
        this.propertyUpdateObj.lng = e.coords.lng;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.uploadImages = function () {
        var _this = this;
        this.file = this.getFiles();
        if (this.file.length > 0) {
            this.propertyUpdateObj.recordType = this.valueUpdateRecordType;
            this.propertyUpdateObj.state = this.valueUpdateState;
            this.propertyUpdateObj.county = this.valueUpdateCounty;
            this.propertyUpdateObj.msa = this.valueUpdateMsa;
            this.propertyUpdateObj.market = this.valueUpdateMarket;
            this.propertyUpdateObj.submarket = this.valueUpdateSubmarket;
            this.propertyUpdateObj.primaryUse = this.valueUpdatePrimaryUse;
            this.propertyUpdateObj.propertyStatus = this.valueUpdatePropertyStatus;
            this.propertyUpdateObj.buildingClass = this.valueUpdateBuildingClass;
            this.propertyUpdateObj.rentType = this.valueUpdateRentType;
            this.propertyUpdateObj.construction = this.valueUpdateConstruction;
            this.propertyUpdateObj.roofType = this.valueUpdateRoofType;
            this.propertyUpdateObj.sidingType = this.valueUpdateSidingType;
            this.propertyUpdateObj.foundationType = this.valueUpdateFoundationType;
            this.propertyUpdateObj.unitAmenities = this.valueUpdateUnitAmenities;
            this.propertyUpdateObj.siteAmenities = this.valueUpdateSiteAmenities;
            this.propertyUpdateObj.parkingType = this.valueUpdateParkingType;
            this.propertyUpdateObj.updateTime = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"].ServerValue.TIMESTAMP;
            this.propertyUpdateObj.updatedBy = this.userId;
            var files = [];
            this.file.forEach(function (fileToUpload) {
                __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('/crm/property/' + _this.makeid() + '.png').putString(fileToUpload, 'base64').then(function (snapshot) {
                    files.push(snapshot.downloadURL);
                    if (files.length == _this.file.length) {
                        _this.propertyUpdateObj.pictures = (_this.propertyUpdateObj.pictures) ? _this.propertyUpdateObj.pictures.concat(files) : files;
                        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/crm/property/' + _this.currentUpdateKey).update(_this.propertyUpdateObj).then(function (result) {
                            _this.toastr.success('Property picture updated!.', 'Sucess!');
                            $(".filepond--action-remove-item").click();
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            });
        }
    };
    PropertyDetailsComponent.prototype.onBlurPropertyName = function (e) {
        this.propertyUpdateObj.propertyName = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.propertyName;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurStreetAddress = function (e) {
        this.propertyUpdateObj.streetAddress = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.streetAddress;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurCity = function (e) {
        this.propertyUpdateObj.city = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.city;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurZip = function (e) {
        this.propertyUpdateObj.zip = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.zip;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLastSalePrice = function (e) {
        this.propertyUpdateObj.lastSalePrice = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.lastSalePrice;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLastSaleCap = function (e) {
        this.propertyUpdateObj.lastSaleCap = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.lastSaleCap;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLastSaleType = function (e) {
        this.propertyUpdateObj.lastSaleType = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.lastSaleType;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurPropertyManagement = function (e) {
        this.propertyUpdateObj.propertyManagement = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.propertyManagement;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurOnSitePhone = function (e) {
        this.propertyUpdateObj.onSitePhone = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.onSitePhone;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurOnSiteContact = function (e) {
        this.propertyUpdateObj.onSiteContact = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.onSiteContact;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurGroup = function (e) {
        this.propertyUpdateObj.group = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.group;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurOwnershipEntity = function (e) {
        this.propertyUpdateObj.ownershipEntity = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.ownershipEntity;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurOwnershipEntityAddress = function (e) {
        this.propertyUpdateObj.ownershipEntityAddress = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.ownershipEntityAddress;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurUnits = function (e) {
        this.propertyUpdateObj.units = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.units;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurSquareFootage = function (e) {
        this.propertyUpdateObj.squareFootage = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.squareFootage;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurParcelNumber = function (e) {
        this.propertyUpdateObj.parcelNumber = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.parcelNumber;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLandAcres = function (e) {
        this.propertyUpdateObj.landAcres = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.landAcres;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLandSf = function (e) {
        this.propertyUpdateObj.landSf = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.landSf;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurFar = function (e) {
        this.propertyUpdateObj.far = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.far;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurYearBuilt = function (e) {
        this.propertyUpdateObj.yearBuilt = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.yearBuilt;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurYearRenovated = function (e) {
        this.propertyUpdateObj.yearRenovated = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.yearRenovated;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurZoning = function (e) {
        this.propertyUpdateObj.zoning = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.zoning;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurNumberStories = function (e) {
        this.propertyUpdateObj.numberStories = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.numberStories;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurNumberBuildings = function (e) {
        this.propertyUpdateObj.numberBuildings = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.numberBuildings;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurWebsite = function (e) {
        this.propertyUpdateObj.website = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.website;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurMasterMetered = function (e) {
        this.propertyUpdateObj.masterMetered = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.masterMetered;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurIndividuallyMetered = function (e) {
        this.propertyUpdateObj.individuallyMetered = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.individuallyMetered;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.masterMeteredChange = function (e) {
        if (e.target.checked) {
            this.propertyUpdateObj.masterMetered = true;
        }
        else {
            this.propertyUpdateObj.masterMetered = false;
        }
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.indivisuallyMeteredChange = function (e) {
        if (e.target.checked) {
            this.propertyUpdateObj.individuallyMetered = true;
        }
        else {
            this.propertyUpdateObj.individuallyMetered = false;
        }
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurParkingSpaces = function (e) {
        this.propertyUpdateObj.parkingSpaces = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.parkingSpaces;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurParkingRatio = function (e) {
        this.propertyUpdateObj.parkingRatio = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.parkingRatio;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurParkingType = function (e) {
        this.propertyUpdateObj.parkingType = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.parkingType;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurGarages = function (e) {
        this.propertyUpdateObj.garages = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.garages;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurCarports = function (e) {
        this.propertyUpdateObj.carports = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.carports;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurPrimaryContactPhone = function (e) {
        this.propertyUpdateObj.primaryContactPhone = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.primaryContactPhone;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurPrimaryContactEmail = function (e) {
        this.propertyUpdateObj.primaryContactEmail = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.primaryContactEmail;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurPrimaryContactMobile = function (e) {
        this.propertyUpdateObj.primaryContactMobile = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.primaryContactMobile;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurPrimaryContactLastActivityDate = function (e) {
        this.propertyUpdateObj.primaryContactLastActivityDate = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.primaryContactLastActivityDate;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.onBlurLastSaleDate = function (e) {
        this.propertyUpdateObj.lastSaleDate = e['innerHTML'];
        e['innerHTML'] = '';
        e['innerHTML'] = this.propertyUpdateObj.lastSaleDate;
        this.updateProperty();
    };
    PropertyDetailsComponent.prototype.forSale = function () {
        if (this.propertyUpdateObj.forSale == true)
            this.propertyUpdateObj.forSale = false;
        else
            this.propertyUpdateObj.forSale = true;
        this.updateProperty();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
    ], PropertyDetailsComponent.prototype, "dtElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('primaryContact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_select__["SelectComponent"])
    ], PropertyDetailsComponent.prototype, "select", void 0);
    PropertyDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property-details',
            template: __webpack_require__("../../../../../src/app/crm/main-components/property/property-details/property-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/property/property-details/property-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], PropertyDetailsComponent);
    return PropertyDetailsComponent;
}());

// export class PropertyDetailsComponent implements OnInit {
//   ngOnInit() {}
// }


/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-list/property-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\r\n  width: auto;\r\n  height: 200px;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n}\r\n\r\nul.slides {\r\n  display: block;\r\n  position: relative;\r\n  /*height: 600px;*/\r\n  height: 200px;\r\n  width: auto;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  list-style: none;\r\n}\r\n\r\n.slides * {\r\n  user-select: none;\r\n  -ms-user-select: none;\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nul.slides input {\r\n  display: none;\r\n}\r\n\r\n.slide-container {\r\n  display: block;\r\n}\r\n\r\n.slide-image {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  opacity: 0;\r\n  -webkit-transition: all .7s ease-in-out;\r\n  transition: all .7s ease-in-out;\r\n}\r\n\r\n.slide-image img {\r\n  width: auto;\r\n  min-width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-controls {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n  font-size: 100px;\r\n  line-height: 200px;\r\n  color: #fff;\r\n}\r\n\r\n.carousel-controls label {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 20px;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slide-image:hover + .carousel-controls label{\r\n  opacity: 0.5;\r\n}\r\n\r\n.carousel-controls label:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-controls .prev-slide {\r\n  width: 49%;\r\n  text-align: left;\r\n  left: 0;\r\n}\r\n\r\n.carousel-controls .next-slide {\r\n  width: 49%;\r\n  text-align: right;\r\n  right: 0;\r\n}\r\n\r\n.carousel-dots {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 20px;\r\n  z-index: 999;\r\n  text-align: center;\r\n}\r\n\r\n.carousel-dots .carousel-dot {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  opacity: 0.5;\r\n  margin: 10px;\r\n}\r\n\r\ninput:checked + .slide-container .slide-image {\r\n  opacity: 1;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transition: opacity 1s ease-in-out;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\ninput:checked + .slide-container .carousel-controls label {\r\n  display: block;\r\n}\r\n\r\ninput#img-1:checked ~ .carousel-dots label#img-dot-1,\r\ninput#img-2:checked ~ .carousel-dots label#img-dot-2,\r\ninput#img-3:checked ~ .carousel-dots label#img-dot-3,\r\ninput#img-4:checked ~ .carousel-dots label#img-dot-4,\r\ninput#img-5:checked ~ .carousel-dots label#img-dot-5,\r\ninput#img-6:checked ~ .carousel-dots label#img-dot-6 {\r\n  opacity: 1;\r\n}\r\n\r\ninput:checked + .slide-container .nav label { display: block; }\r\n\r\nagm-map{\r\n  height: 300px;\r\n}\r\n\r\n.map-marker{\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #1f89cc;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n\r\n.filepond--drop-label label{\r\n  padding: .3em 0 !important;\r\n  font-size: 1.3em !important;\r\n}\r\n\r\n.filepond--drop-label {\r\n  padding: .3em 0 !important;\r\n  font-size: 1.3em !important;\r\n\tcolor: #4c4e53;\r\n}\r\n\r\n.filepond--label-action {\r\n\t-webkit-text-decoration-color: #babdc0;\r\n\t        text-decoration-color: #babdc0;\r\n}\r\n\r\n.filepond--panel-root {\r\n\tborder-radius: 2em;\r\n\tbackground-color: #edf0f4;\r\n\theight: 1em;\r\n}\r\n\r\n.filepond--item-panel {\r\n\tbackground-color: #595e68;\r\n}\r\n\r\n.filepond--drip-blob {\r\n\tbackground-color: #7f8a9a;\r\n}\r\n\r\n.image--cover {\r\n  width: 130px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin: 20px;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n\r\n.image--cover2 {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n\r\n  -o-object-fit: cover;\r\n\r\n     object-fit: cover;\r\n  -o-object-position: center right;\r\n     object-position: center right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-list/property-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xs-4\">\n    <h4 class=\"page-title\">Properties</h4>\n  </div>\n  <div class=\"col-xs-8 text-right m-b-30\">\n    <a  class=\"btn btn-primary pull-right rounded\" data-toggle=\"modal\" data-target=\"#add_employee\"><i class=\"fa fa-plus\"></i> Add property</a>\n    <div class=\"view-icons\">\n      <a (click)=\"pivotTable('block')\" class=\"grid-view btn btn-link\"><i class=\"fa fa-th\"></i></a>\n      <a (click)=\"pivotTable('list')\" class=\"list-view btn btn-link active\"><i class=\"fa fa-bars\"></i></a>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"\">\n      <div [hidden]=\"pivot\">\n        <table *ngIf=\"propertyList.length > 0\" datatable id=\"example\"  [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped custom-table\" style=\"font-size: 12px;\">\n        <thead>\n        <tr>\n          <th class=\"text-center\">Property Name</th>\n          <th class=\"text-center\">Property Type</th>\n          <th class=\"text-center\">Street Address</th>\n          <th class=\"text-center\">City</th>\n          <th class=\"text-center\">Market</th>\n          <th class=\"text-right\">Action</th>\n        </tr>\n        </thead>\n        <tbody class=\"tableBody\">\n        <tr *ngFor=\"let property of propertyList; let i = index\" class=\"animated fadeInUp \">\n          <td class=\"text-center\">\n            <a *ngIf=\"!property.pictures || (property.pictures)?.length < 0\" class=\"avatar\">{{(property.propertyName).substr(0,1)}}</a>\n            <a *ngIf=\"property.pictures || (property.pictures)?.length > 0\" class=\"avatar\"><img src=\"{{property.pictures[0]}}\"></a>\n            <h2><a style=\"cursor: pointer;\" (click)=\"gotoPropertyDetails(property.rowId);\"> {{property.propertyName}} <span></span></a></h2>\n          </td>\n          <td  class=\"text-center\">{{property.recordType}} </td>\n          <td  class=\"text-center\">{{property.streetAddress}} </td>\n          <td  class=\"text-center\">{{property.city}} </td>\n\n          <td  class=\"text-center\">{{property.market}} </td>\n\n          <td class=\"text-right\" style=\"padding: 0;\">\n            <a  (click)=\"gotoPropertyDetails(property.rowId);\"   style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> </a>\n            <a (click)=\"loadEdit(property.rowId);\" data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> </a>\n            <a  (click)=\"loadDelete(property.rowId);\"  data-toggle=\"modal\" style=\"font-size: 150%; cursor: pointer; margin-right: 10%;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> </a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      </div>\n\n      <div [hidden]=\"!pivot\">\n        <div  *ngIf=\"propertyList.length > 0 && pivot\"  class=\"row staff-grid-row\">\n        <div *ngFor=\"let property of propertyList; let i = index\" class=\"animated fadeInUp col-md-4 col-sm-4 col-xs-6 col-lg-3\">\n          <div class=\"profile-widget\">\n            <div class=\"profile-img\">\n              <img *ngIf=\"property.pictures[0].length > 0\" src=\"{{property.pictures[0]}}\" class=\"image--cover2\">\n              <img *ngIf=\"property.pictures[0].length < 0\" src=\"./../../../../../assets/images/user.jpg\" class=\"image--cover2\">\n              <!--<a class=\"avatar\">G</a>-->\n            </div>\n            <div class=\"dropdown profile-action\">\n              <a  class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n              <ul class=\"dropdown-menu pull-right\">\n                <li><a  (click)=\"gotoPropertyDetails(property.rowId);\" style=\"font-size: 100%; cursor: pointer;\"><i style=\"color: #2bda61;\" class=\"fa fa-info m-r-5\"></i> Details </a></li>\n                <li><a (click)=\"loadEdit(property.rowId);\" data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit </a></li>\n                <li><a  (click)=\"loadDelete(property.rowId);\"  data-toggle=\"modal\" style=\"font-size: 100%; cursor: pointer;\" data-target=\"#delete_employee\"><i style=\"color: #e70000;\" class=\"fa fa-trash-o m-r-5\"></i> Delete </a></li>\n              </ul>\n            </div>\n            <h4 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a (click)=\"gotoPropertyDetails(property.rowId);\" style=\"cursor: pointer;\">{{property.propertyName}}</a></h4>\n            <h5 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a >{{property.streetAddress}}</a></h5>\n            <div class=\"small text-muted\">{{property.city}}</div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div id=\"delete_employee\" style=\"text-align: center;\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-md\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete Property</h4>\n      </div>\n      <form>\n        <div class=\"modal-body card-box\">\n          <p>Are you sure want to delete this?</p>\n          <div class=\"m-t-20\"> <a  class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n            <button (click)=\"deleteProperty()\" data-dismiss=\"modal\" type=\"submit\" class=\"btn btn-danger\">Delete</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<div id=\"add_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    <div class=\"modal-content modal-lg\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"text-align: center;\">Add Property</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"m-b-30\">\n\n\n\n          <div class=\"row\">\n            <hr style=\"border: 0.5px solid #5cafe0;\"/>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">General Details</h4>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Property Name <span class=\"text-danger\">*</span></label>\n                <input [(ngModel)]=\"propertyAddObj.propertyName\" name=\"firstName38\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Street Address </label>\n                <input [(ngModel)]=\"propertyAddObj.streetAddress\" name=\"firstName39\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">City </label>\n                <input [(ngModel)]=\"propertyAddObj.city\" name=\"firstName40\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">State </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"state\"\n                            (data)=\"refreshValueState($event)\"\n                            placeholder=\"No state selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Zip </label>\n                <input [(ngModel)]=\"propertyAddObj.zip\" name=\"firstName41\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">County </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"county\"\n                            (data)=\"refreshValueCounty($event)\"\n                            placeholder=\"No county selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">MSA </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"msa\"\n                            (data)=\"refreshValueMsa($event)\"\n                            placeholder=\"No MSA selected\"></ng-select>\n              </div>\n            </div>\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Market </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"market\"\n                            (data)=\"refreshValueMarket($event)\"\n                            placeholder=\"No market selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Sub Market </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"submarket\"\n                            (data)=\"refreshValueSubmarket($event)\"\n                            placeholder=\"No submarket selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Primary Use </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"primaryUse\"\n                            (data)=\"refreshValuePrimaryUse($event)\"\n                            placeholder=\"No primary use selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Property Status </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"propertyStatus\"\n                            (data)=\"refreshValuePropertyStatus($event)\"\n                            placeholder=\"No property status selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Building Class </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"buildingClass\"\n                            (data)=\"refreshValueBuildingClass($event)\"\n                            placeholder=\"No building class selected\"></ng-select>\n              </div>\n            </div>\n\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Last Sale Date </label>\n                <input [(ngModel)]=\"propertyAddObj.lastSaleDate\" id=\"addLastSaleDate\" name=\"firstName42\" class=\"form-control datetimepicker\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Last Sale Price </label>\n                <input [(ngModel)]=\"propertyAddObj.lastSalePrice\" name=\"firstName43\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Last Sale Cap </label>\n                <input [(ngModel)]=\"propertyAddObj.lastSaleCap\" name=\"firstName44\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <!-- Resume from Here -->\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Last Sale Type </label>\n                <input [(ngModel)]=\"propertyAddObj.lastSaleType\" name=\"firstName45\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\"># of Units </label>\n                <input [(ngModel)]=\"propertyAddObj.units\" name=\"firstName46\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Square Footage</label>\n                <input [(ngModel)]=\"propertyAddObj.squareFootage\" name=\"firstName47\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Parcel Number</label>\n                <input [(ngModel)]=\"propertyAddObj.parcelNumber\" name=\"firstName48\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Land Acres</label>\n                <input [(ngModel)]=\"propertyAddObj.landAcres\" name=\"firstName49\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Land SF</label>\n                <input [(ngModel)]=\"propertyAddObj.landSf\" name=\"firstName50\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Year Built</label>\n                <input [(ngModel)]=\"propertyAddObj.yearBuilt\" name=\"firstName51\" class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n\n\n            <div class=\"col-sm-4\" *ngIf=\"primaryContact.length > 0\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Primary Contact </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"primaryContact\"\n                            (data)=\"refreshValuePrimaryContact($event)\"\n                            placeholder=\"No primary contact selected\"></ng-select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">Property Type </label>\n                <ng-select  [multiple]=\"false\"\n                            [items]=\"recordType\"\n                            (data)=\"refreshValueRecordType($event)\"\n                            placeholder=\"No property type selected\"></ng-select>\n              </div>\n            </div>\n\n\n\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label  class=\"control-label\">For Sale</label>\n                <br>\n                Yes <input [(ngModel)]=\"propertyAddObj.forSale\" name=\"forSale\" checked=\"\" value=\"true\" type=\"checkbox\"/>\n              </div>\n            </div>\n\n\n\n          </div>\n\n\n\n\n          <div class=\"m-t-20 text-center\">\n            <button (click)=\"addProperty()\" class=\"btn btn-primary\">Create Property</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div id=\"edit_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n    <div class=\"modal-content modal-lg\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"text-align: center;\">Edit Property</h4>\n      </div>\n      <hr style=\"border: 0.5px solid #5cafe0;\"/>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">General Details</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <form class=\"m-b-30\">\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Property Name <span class=\"text-danger\">*</span></label>\n              <input [(ngModel)]=\"propertyUpdateObj.propertyName\" name=\"firstName2\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Property Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"recordType\"\n                          [active]=\"recordTypeSelected\"\n                          (data)=\"refreshValueUpdateRecordType($event)\"\n                          placeholder=\"No property type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Street Address </label>\n              <input [(ngModel)]=\"propertyUpdateObj.streetAddress\" name=\"firstName3\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">City </label>\n              <input [(ngModel)]=\"propertyUpdateObj.city\" name=\"firstName4\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">State </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"state\"\n                          [active]=\"stateSelected\"\n                          (data)=\"refreshValueUpdateState($event)\"\n                          placeholder=\"No state selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Zip </label>\n              <input [(ngModel)]=\"propertyUpdateObj.zip\" name=\"firstName5\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">County </label>\n              <ng-select  [multiple]=\"false\"\n\n                          [items]=\"county\"\n                          [active]=\"countySelected\"\n                          (data)=\"refreshValueUpdateCounty($event)\"\n\n                          placeholder=\"No county selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">MSA </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"msa\"\n                          [active]=\"msaSelected\"\n                          (data)=\"refreshValueUpdateMsa($event)\"\n                          placeholder=\"No MSA selected\"></ng-select>\n            </div>\n          </div>\n\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Market </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"market\"\n                          [active]=\"marketSelected\"\n                          (data)=\"refreshValueUpdateMarket($event)\"\n                          placeholder=\"No market selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Sub Market </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"submarket\"\n                          [active]=\"submarketSelected\"\n                          (data)=\"refreshValueUpdateSubmarket($event)\"\n                          placeholder=\"No submarket selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Use </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"primaryUse\"\n                          [active]=\"primaryUseSelected\"\n                          (data)=\"refreshValueUpdatePrimaryUse($event)\"\n                          placeholder=\"No primary use selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Property Status </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"propertyStatus\"\n                          [active]=\"propertyStatusSelected\"\n                          (data)=\"refreshValueUpdatePropertyStatus($event)\"\n\n                          placeholder=\"No property status selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Building Class </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"buildingClass\"\n                          [active]=\"buildingClassSelected\"\n                          (data)=\"refreshValueUpdateBuildingClass($event)\"\n\n                          placeholder=\"No building class selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Rent Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"rentType\"\n                          [active]=\"rentTypeSelected\"\n                          (data)=\"refreshValueUpdateRentType($event)\"\n                          placeholder=\"No rent type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Last Sale Date </label>\n              <input [(ngModel)]=\"propertyUpdateObj.lastSaleDate\" id=\"updateLastSaleDate\" name=\"firstName6\" class=\"form-control datetimepicker\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Last Sale Price </label>\n              <input [(ngModel)]=\"propertyUpdateObj.lastSalePrice\" name=\"firstName7\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Last Sale Cap </label>\n              <input [(ngModel)]=\"propertyUpdateObj.lastSaleCap\" name=\"firstName8\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <!-- Resume from Here -->\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Last Sale Type </label>\n              <input [(ngModel)]=\"propertyUpdateObj.lastSaleType\" name=\"firstName9\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\"># of Units </label>\n              <input [(ngModel)]=\"propertyUpdateObj.units\" name=\"firstName10\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Property Management </label>\n              <input [(ngModel)]=\"propertyUpdateObj.propertyManagement\" name=\"firstName11\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">On Site Phone </label>\n              <input [(ngModel)]=\"propertyUpdateObj.onSitePhone\" name=\"firstName12\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">On Site Contact </label>\n              <input [(ngModel)]=\"propertyUpdateObj.onSiteContact\" name=\"firstName13\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Group </label>\n              <input [(ngModel)]=\"propertyUpdateObj.group\" name=\"firstName14\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Ownership Entity </label>\n              <input [(ngModel)]=\"propertyUpdateObj.ownershipEntity\" name=\"firstName15\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Ownership Entity Address</label>\n              <input [(ngModel)]=\"propertyUpdateObj.ownershipEntityAddress\" name=\"firstName16\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Square Footage</label>\n              <input [(ngModel)]=\"propertyUpdateObj.squareFootage\" name=\"firstName17\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Parcel Number</label>\n              <input [(ngModel)]=\"propertyUpdateObj.parcelNumber\" name=\"firstName18\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Land Acres</label>\n              <input [(ngModel)]=\"propertyUpdateObj.landAcres\" name=\"firstName19\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Land SF</label>\n              <input [(ngModel)]=\"propertyUpdateObj.landSf\" name=\"firstName20\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Far</label>\n              <input [(ngModel)]=\"propertyUpdateObj.far\" name=\"firstName21\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Year Built</label>\n              <input [(ngModel)]=\"propertyUpdateObj.yearBuilt\" name=\"firstName22\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Year Renovated</label>\n              <input [(ngModel)]=\"propertyUpdateObj.yearRenovated\" name=\"firstName23\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Zoning</label>\n              <input [(ngModel)]=\"propertyUpdateObj.zoning\" name=\"firstName24\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Construction </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"construction\"\n                          [active]=\"constructionSelected\"\n                          (data)=\"refreshValueUpdateConstruction($event)\"\n                          placeholder=\"No construction selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Roof Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"roofType\"\n                          [active]=\"roofTypeSelected\"\n                          (data)=\"refreshValueUpdateRoofType($event)\"\n                          placeholder=\"No roof type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Siding Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"sidingType\"\n                          [active]=\"sidingTypeSelected\"\n                          (data)=\"refreshValueUpdateSidingType($event)\"\n                          placeholder=\"No siding type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Foundation Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"foundationType\"\n                          [active]=\"foundationTypeSelected\"\n                          (data)=\"refreshValueUpdateFoundationType($event)\"\n                          placeholder=\"No foundation type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Number Stories</label>\n              <input [(ngModel)]=\"propertyUpdateObj.numberStories\" name=\"firstName25\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Number Buildings</label>\n              <input [(ngModel)]=\"propertyUpdateObj.numberBuildings\" name=\"firstName26\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\" style=\"margin-bottom: 0px;\">\n              <label  class=\"control-label\">Website</label>\n              <input [(ngModel)]=\"propertyUpdateObj.website\" name=\"firstName27\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Unit Amenities </label>\n              <ng-select  [multiple]=\"true\"\n                          [items]=\"unitAmenities\"\n                          [active]=\"unitAmenitiesSelected\"\n                          (data)=\"refreshValueUpdateUnitAmenities($event)\"\n                          placeholder=\"No unit amenities selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Site Amenities </label>\n              <ng-select  [multiple]=\"true\"\n                          [items]=\"siteAmenities\"\n                          [active]=\"siteAmenitiesSelected\"\n                          (data)=\"refreshValueUpdateSiteAmenities($event)\"\n                          placeholder=\"No site amenities selected\"></ng-select>\n            </div>\n          </div>\n\n\n\n\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Parking Spaces </label>\n              <input [(ngModel)]=\"propertyUpdateObj.parkingSpaces\" name=\"firstName30\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Parking Ratio </label>\n              <input [(ngModel)]=\"propertyUpdateObj.parkingRatio\" name=\"firstName31\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Parking Type </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"parkingType\"\n                          [active]=\"parkingTypeSelected\"\n                          (data)=\"refreshValueUpdateParkingType($event)\"\n                          placeholder=\"No parking type selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Garages</label>\n              <input [(ngModel)]=\"propertyUpdateObj.garages\" name=\"firstName32\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Carports</label>\n              <input [(ngModel)]=\"propertyUpdateObj.carports\" name=\"firstName33\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\" *ngIf=\"primaryContactSelected.length > 0\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Contact </label>\n              <ng-select  [multiple]=\"false\"\n                          [items]=\"primaryContact\"\n                          [active]=\"primaryContactSelected\"\n                          (data)=\"refreshValueUpdatePrimaryContact($event)\"\n                          placeholder=\"No primary contact selected\"></ng-select>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Contact Phone</label>\n              <input [(ngModel)]=\"propertyUpdateObj.primaryContactPhone\" name=\"firstName34\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Contact Mobile</label>\n              <input [(ngModel)]=\"propertyUpdateObj.primaryContactMobile\" name=\"firstName35\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Contact Email</label>\n              <input [(ngModel)]=\"propertyUpdateObj.primaryContactEmail\" name=\"firstName36\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Primary Contact Last Activity Date</label>\n              <input [(ngModel)]=\"propertyUpdateObj.primaryContactLastActivityDate\" name=\"firstName37\" class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Master Metered</label>\n            <br>\n              <input [(ngModel)]=\"propertyUpdateObj.masterMetered\" name=\"firstName28\" class=\"\" type=\"checkbox\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Individually Metered</label>\n            <br>\n              <input [(ngModel)]=\"propertyUpdateObj.individuallyMetered\" name=\"firstName29\" class=\"\" type=\"checkbox\">\n            </div>\n          </div>\n\n          <div class=\"col-sm-12\" id=\"\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Maps</label>\n              <agm-map  [latitude]=\"propertyUpdateObj.lat\" [longitude]=\"propertyUpdateObj.lng\" >\n                <agm-marker (dragEnd)=\"markerMoved($event)\" [markerDraggable]=\"true\" class=\"map-marker\" [latitude]=\"propertyUpdateObj.lat\" [longitude]=\"propertyUpdateObj.lng\"  [iconUrl]=\"markerUrl\"></agm-marker>\n              </agm-map>\n            </div>\n          </div>\n\n          <div class=\"col-sm-4\" id=\"picDiv\">\n            <div class=\"form-group\">\n              <label  class=\"control-label\">Pictures</label>\n                <input type=\"file\"\n                       id=\"fileUploadPropertyEdit\"\n                       class=\"filepond\"\n                       name=\"filepond\"\n                       multiple\n                       allow-multiple=\"true\"\n                       accept=\"image/png, image/jpeg, image/gif\"\n                       />\n            </div>\n          </div>\n\n\n\n          <div class=\"col-sm-8\">\n              <div class=\"form-group\">\n                <div>\n                  <a *ngIf=\"(propertyUpdateObj.pictures)?.length > 0\" (click)=\"deleteImage()\" style=\"cursor: pointer;\n                      right: 10%;\n                      position: absolute;\n                      font-size: 200%;\n                      z-index: 999;\n                      top: -5%;\"><i  class=\"fa fa-trash-o m-r-5\" style=\"color: #e70000;\"></i></a>\n                  <div class=\"carousel\">\n\n\n                    <ul class=\"slides\" *ngIf=\"(propertyUpdateObj.pictures)?.length == 1\">\n                      <div>\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"one\" checked />\n                        <li class=\"slide-container\">\n                          <div class=\"slide-image\">\n                            <img src={{(propertyUpdateObj.pictures)[0]}}>\n                          </div>\n                          <div class=\"carousel-controls\">\n\n                          </div>\n                        </li>\n                      </div>\n                    </ul>\n\n\n                    <ul class=\"slides\" *ngIf=\"(propertyUpdateObj.pictures)?.length > 1\">\n\n                      <div  *ngFor=\"let image of propertyUpdateObj.pictures; let i = index\">\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"img-{{i}}\" *ngIf=\"i==0\" checked />\n                        <input type=\"radio\" name=\"radio-buttons\" id=\"img-{{i}}\" *ngIf=\"i!=0\" />\n\n                        <li class=\"slide-container\">\n                          <div class=\"slide-image\">\n\n                            <img src={{image}}>\n                          </div>\n\n                          <div class=\"carousel-controls\">\n                            <label for=\"img-{{i-1}}\" *ngIf=\"i != 0\"  (click)=\"recordDeleteIndex(i-1)\" class=\"prev-slide\">\n                              <span>&lsaquo;</span>\n                            </label>\n                            <label for=\"img-{{i+1}}\" *ngIf=\"(propertyUpdateObj.pictures)?.length != i+1\" (click)=\"recordDeleteIndex(i+1)\" class=\"next-slide\">\n                              <span>&rsaquo;</span>\n                            </label>\n                          </div>\n                        </li>\n                      </div>\n                    </ul>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n\n\n          <div class=\"m-t-20 text-center col-sm-12 col-md-12\" style=\"margin-bottom: 5%;\" >\n            <button class=\"btn btn-primary\" (click)=\"updateProperty()\">Save Changes</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property-list/property-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__("../../../../angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_select__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PropertyListComponent = /** @class */ (function () {
    function PropertyListComponent(toastr, vcr, af, router, afStorage) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.afStorage = afStorage;
        this.propertyList = [];
        this.propertyUpdateObj = {};
        this.propertyAddObj = {};
        this.recordType = [];
        this.recordTypeSelected = [];
        this.valueRecordType = '';
        this.valueUpdateRecordType = '';
        this.state = [];
        this.stateSelected = [];
        this.valueState = '';
        this.valueUpdateState = '';
        this.county = [];
        this.countySelected = [];
        this.valueCounty = '';
        this.valueUpdateCounty = '';
        this.msa = [];
        this.msaSelected = [];
        this.valueMsa = '';
        this.valueUpdateMsa = '';
        this.market = [];
        this.market1 = [];
        this.market2 = [];
        this.marketSelected = [];
        this.valueMarket = '';
        this.valueUpdateMarket = '';
        this.submarket = [];
        this.submarket1 = [];
        this.submarket2 = [];
        this.submarketSelected = [];
        this.valueSubmarket = '';
        this.valueUpdateSubmarket = '';
        this.primaryUse = [];
        this.primaryUseSelected = [];
        this.valuePrimaryUse = '';
        this.valueUpdatePrimaryUse = '';
        this.propertyStatus = [];
        this.propertyStatusSelected = [];
        this.valuePropertyStatus = '';
        this.valueUpdatePropertyStatus = '';
        this.buildingClass = [];
        this.buildingClassSelected = [];
        this.valueBuildingClass = '';
        this.valueUpdateBuildingClass = '';
        this.rentType = [];
        this.rentTypeSelected = [];
        this.valueRentType = '';
        this.valueUpdateRentType = '';
        this.construction = [];
        this.constructionSelected = [];
        this.valueConstruction = '';
        this.valueUpdateConstruction = '';
        this.roofType = [];
        this.roofTypeSelected = [];
        this.valueRoofType = '';
        this.valueUpdateRoofType = '';
        this.sidingType = [];
        this.sidingTypeSelected = [];
        this.valueSidingType = '';
        this.valueUpdateSidingType = '';
        this.foundationType = [];
        this.foundationTypeSelected = [];
        this.valueFoundationType = '';
        this.valueUpdateFoundationType = '';
        this.unitAmenities = [];
        this.unitAmenitiesSelected = [];
        this.valueUnitAmenities = [];
        this.valueUpdateUnitAmenities = [];
        this.siteAmenities = [];
        this.siteAmenitiesSelected = [];
        this.valueSiteAmenities = [];
        this.valueUpdateSiteAmenities = [];
        this.parkingType = [];
        this.parkingTypeSelected = [];
        this.valueParkingType = '';
        this.valueUpdateParkingType = '';
        this.primaryContact = [];
        this.primaryContactSelected = [];
        this.valuePrimaryContact = '';
        this.valueUpdatePrimaryContact = '';
        //Support Variables
        this.userId = '';
        //Delete Key temp variable
        this.currentDeleteKey = '';
        //Update Key temp variable
        this.currentUpdateKey = '';
        //Update pic url
        this.url = '';
        //Stores view type i.e. block or table view
        this.pivot = false;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        this.markerUrl = "./../../../../../assets/images/map-marker.png";
        this.deleteIndex = 0;
        this.toastr.setRootViewContainerRef(vcr);
    }
    PropertyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initNewProperty();
        this.recordType = ["Market",
            "Affordable/Rent Subsidized",
            "Senior Housing",
            "Student Housing",
            "Assisted Living"
        ];
        this.state = ["Washington", "Oregon"];
        this.county = ["Multnomah",
            "Clark",
            "Cowlitz",
            "Clackamas",
            "Marion",
            "Linn",
            "Lane",
            "Washington",
            "Columbia",
            "Deschutes"
        ];
        this.msa = ["Portland-Vancouver-Hillsboro",
            "Salem",
            "Longview",
            "Bend-Redmond"
        ];
        this.market = ["Kelso",
            "Longview",
            "Vancouver",
            "Outlying Cowlitz County"
        ];
        this.market1 = ["Kelso",
            "Longview",
            "Vancouver",
            "Outlying Cowlitz County"
        ];
        this.market2 = ["Bend/Central Deschutes County",
            "Redmond/North Deschutes County",
            "Central Northeast",
            "Central Salem",
            "Clackamas County",
            "Damascus",
            "East Portland",
            "East Salem",
            "Keizer",
            "Monmouth/Independence",
            "Northeast Portland",
            "North Marion County",
            "Oregon City",
            "Outlying Polk County",
            "Outlying Marion County",
            "Southeast Portland",
            "South Salem",
            "Troutdale/Gresham",
            "Vancouver",
            "West Salem",
            "Yamhill County",
            "Wilsonville"
        ];
        this.submarket = [];
        this.primaryUse = ["Garden",
            "Low-Rise",
            "Mid-Rise",
            "High-Rise"
        ];
        this.propertyStatus = ["Existing",
            "Proposed",
            "Under Construction",
            "Demolished",
            "Under Renovation"
        ];
        this.buildingClass = ["A",
            "B",
            "C",
            "D"
        ];
        this.rentType = ["Market", "Affordable/Rent Subsidized", "55+"];
        this.construction = ["Wood Frame",
            "Masonry",
            "Unreinforeced Masonry",
            "Reinforced Masonry",
            "Podium Wood",
            "Reinforced Concrete"
        ];
        this.roofType = ["Flat",
            "Pitched/Composition",
            "Pitched/Shingle",
            "Pitched/Tile",
            "Slanted",
        ];
        this.sidingType = ["Aluminum",
            "Brick",
            "Vinyl",
            "Hardy Plank",
            "T1-11",
            "Fiber Cement",
            "Wood"
        ];
        this.foundationType = ["Post & Beam",
            "Crawl",
            "Slab"
        ];
        this.parkingType = ["Off-Street", "Off-Site", "Mixed", "Carports", "Garages"];
        //this.primaryContact = ["Real Estate Brokerage", "Mortgage Brokerage", "Property Management", "Developer", "Lender", "Owner/Principle", "Title Company", "Vendor", "Law", "Appraisal"];
        //this.primaryContact = ["<a class=avatar>A</a>"];
        this.multiSelectRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/multiSelect/property/");
        this.multiSelectRef.child("submarket/washginton/").once('value', function (snapshot) {
            _this.submarket1 = [];
            for (var key in snapshot.val()) {
                _this.submarket1.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("submarket/oregon/").once('value', function (snapshot) {
            _this.submarket2 = [];
            for (var key in snapshot.val()) {
                _this.submarket2.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("siteAmenities/").once('value', function (snapshot) {
            _this.unitAmenities = [];
            for (var key in snapshot.val()) {
                _this.unitAmenities.push(snapshot.val()[key]);
            }
        });
        this.multiSelectRef.child("unitAmenities/").once('value', function (snapshot) {
            _this.siteAmenities = [];
            for (var key in snapshot.val()) {
                _this.siteAmenities.push(snapshot.val()[key]);
            }
        });
        //Get User ID from Firebase Authentication
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
            else {
                // No user is signed in.
            }
        });
        // Datatables post config
        this.dtOptions = {
            paging: false
        };
        this.contactRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/contacts");
        this.contactRef.once('value', function (snapshot) {
            for (var key in snapshot.val()) {
                if (!snapshot.val()[key].contactPicture || (snapshot.val()[key].contactPicture).length < 0) {
                    _this.primaryContact.push({
                        id: key,
                        text: '<a class="avatar">' + (snapshot.val()[key].firstName).substr(0, 1) + '</a>' + snapshot.val()[key].firstName + ' ' + snapshot.val()[key].lastName
                    });
                }
                else {
                    _this.primaryContact.push({
                        id: key,
                        text: '<a class=avatar style="height: 30px; width: 30px;"><img src="' + snapshot.val()[key].contactPicture + '"></a>' + snapshot.val()[key].firstName + ' ' + snapshot.val()[key].lastName
                    });
                }
            }
        });
        //Fill table from firebase
        this.propertyRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("/crm/property");
        this.propertyRef.on('value', function (snapshot) {
            _this.propertyList = [];
            var count = 0;
            for (var key in snapshot.val()) {
                var temp = snapshot.val()[key];
                temp.rowId = key;
                var lastIndex = _this.propertyList.push(temp) - 1;
                count++;
                if (snapshot.numChildren() == count) {
                    if (!_this.dtElement) {
                        setTimeout(function () {
                            _this.dtTrigger.next();
                            _this.dtElement.dtInstance.then(function (dtInstance) {
                                dtInstance.destroy();
                                setTimeout(function () { _this.dtTrigger.next(); });
                            });
                        });
                    }
                }
            }
        });
    };
    //Function to toggle between two diffrent kinds of table view, i.e. Block and List view
    PropertyListComponent.prototype.pivotTable = function (viewType) {
        if (viewType == 'block') {
            this.pivot = true;
        }
        else {
            this.pivot = false;
        }
    };
    //Function to view company details page - navigates using services so that id is not displayed in URL
    PropertyListComponent.prototype.gotoPropertyDetails = function (id) {
        this.router.navigateByData({
            url: ["property/property-details"],
            data: [{ "propertyId": id }]
        });
    };
    //Support function to temporally store item id to be deleted.
    PropertyListComponent.prototype.loadDelete = function (id) {
        this.currentDeleteKey = id;
    };
    PropertyListComponent.prototype.loadEdit = function (id) {
        var _this = this;
        console.log(id);
        this.currentUpdateKey = id;
        this.propertyRef.child(id).once('value', function (snapshot) {
            _this.propertyUpdateObj = {
                "recordType": snapshot.val()["recordType"],
                "propertyName": snapshot.val()["propertyName"],
                "streetAddress": snapshot.val()["streetAddress"],
                "city": snapshot.val()["city"],
                "state": snapshot.val()["state"],
                "zip": snapshot.val()["zip"],
                "county": snapshot.val()["county"],
                "msa": snapshot.val()["msa"],
                "market": snapshot.val()["market"],
                "submarket": snapshot.val()["submarket"],
                "primaryUse": snapshot.val()["primaryUse"],
                "propertyStatus": snapshot.val()["propertyStatus"],
                "buildingClass": snapshot.val()["buildingClass"],
                "rentType": snapshot.val()["rentType"],
                "lastSaleDate": snapshot.val()["lastSaleDate"],
                "lastSalePrice": snapshot.val()["lastSalePrice"],
                "lastSaleCap": snapshot.val()["lastSaleCap"],
                //Resume from here
                "lastSaleType": snapshot.val()["lastSaleType"],
                "propertyManagement": snapshot.val()["propertyManagement"],
                "onSitePhone": snapshot.val()["onSitePhone"],
                "onSiteContact": snapshot.val()["onSiteContact"],
                "group": snapshot.val()["group"],
                "ownershipEntity": snapshot.val()["ownershipEntity"],
                "ownershipEntityAddress": snapshot.val()["ownershipEntityAddress"],
                "units": snapshot.val()["units"],
                "squareFootage": snapshot.val()["squareFootage"],
                "parcelNumber": snapshot.val()["parcelNumber"],
                "landAcres": snapshot.val()["landAcres"],
                "landSf": snapshot.val()["landSf"],
                "far": snapshot.val()["far"],
                "yearBuilt": snapshot.val()["yearBuilt"],
                "yearRenovated": snapshot.val()["yearRenovated"],
                "zoning": snapshot.val()["zoning"],
                "construction": snapshot.val()["construction"],
                "roofType": snapshot.val()["roofType"],
                "sidingType": snapshot.val()["sidingType"],
                "foundationType": snapshot.val()["foundationType"],
                "numberStories": snapshot.val()["numberStories"],
                "numberBuildings": snapshot.val()["numberBuildings"],
                "website": snapshot.val()["website"],
                "unitAmenities": snapshot.val()["unitAmenities"],
                "siteAmenities": snapshot.val()["siteAmenities"],
                "masterMetered": snapshot.val()["masterMetered"],
                "individuallyMetered": snapshot.val()["individuallyMetered"],
                "parkingSpaces": snapshot.val()["parkingSpaces"],
                "parkingRatio": snapshot.val()["parkingRatio"],
                "parkingType": snapshot.val()["parkingType"],
                "garages": snapshot.val()["garages"],
                "carports": snapshot.val()["carports"],
                "pictures": snapshot.val()["pictures"],
                "primaryContact": snapshot.val()["primaryContact"],
                "forSale": snapshot.val()["forSale"],
                "primaryContactPhone": snapshot.val()["primaryContactPhone"],
                "primaryContactMobile": snapshot.val()["primaryContactMobile"],
                "primaryContactEmail": snapshot.val()["primaryContactEmail"],
                "primaryContactLastActivityDate": snapshot.val()["primaryContactLastActivityDate"],
                "createdBy": snapshot.val()["createdBy"],
                "createTime": snapshot.val()["createTime"],
                "updatedBy": snapshot.val()["updatedBy"],
                "updateTime": snapshot.val()["updateTime"],
                "lat": snapshot.val()["lat"] ? snapshot.val()["lat"] : 0,
                "lng": snapshot.val()["lng"] ? snapshot.val()["lng"] : 0
            };
            //RESUME FROM HERE
            _this.recordTypeSelected = [];
            _this.stateSelected = [];
            _this.countySelected = [];
            _this.msaSelected = [];
            _this.marketSelected = [];
            _this.submarketSelected = [];
            _this.primaryUseSelected = [];
            _this.propertyStatusSelected = [];
            _this.buildingClassSelected = [];
            _this.rentTypeSelected = [];
            _this.constructionSelected = [];
            _this.roofTypeSelected = [];
            _this.sidingTypeSelected = [];
            _this.foundationTypeSelected = [];
            _this.unitAmenitiesSelected = [];
            _this.siteAmenitiesSelected = [];
            _this.parkingTypeSelected = [];
            _this.primaryContactSelected = [];
            _this.url = (_this.propertyUpdateObj.pictures) ? _this.propertyUpdateObj.pictures[0] : "";
            _this.valueUpdateRecordType = '';
            _this.valueUpdateState = '';
            _this.valueUpdateCounty = '';
            _this.valueUpdateMsa = '';
            _this.valueUpdateMarket = '';
            _this.valueUpdateSubmarket = '';
            _this.valueUpdatePrimaryUse = '';
            _this.valueUpdatePropertyStatus = '';
            _this.valueUpdateBuildingClass = '';
            _this.valueUpdateRentType = '';
            _this.valueUpdateConstruction = '';
            _this.valueUpdateRoofType = '';
            _this.valueUpdateSidingType = '';
            _this.valueUpdateFoundationType = '';
            _this.valueUpdateUnitAmenities = [];
            _this.valueUpdateSiteAmenities = [];
            _this.valueUpdateParkingType = '';
            // if(this.propertyUpdateObj.primaryContact) {
            //   this.contactRef.child(this.propertyUpdateObj.primaryContact).once('value', (snapshot) => {
            //     if(!snapshot.val().contactPicture || (snapshot.val().contactPicture).length < 0){
            //       this.primaryContactSelected.push({
            //         id: this.propertyUpdateObj.primaryContact,
            //         text: '<a class="avatar">'+(snapshot.val().firstName).substr(0,1)+'</a>'+snapshot.val().firstName+ ' ' + snapshot.val().lastName
            //       });
            //     }
            //     else{
            //       this.primaryContactSelected.push({
            //         id: this.propertyUpdateObj.primaryContact,
            //         text: '<a class=avatar style="height: 30px; width: 30px;"><img src="'+snapshot.val().contactPicture+'"></a>'+snapshot.val().firstName + ' ' + snapshot.val().lastName
            //       });
            //     }
            //     console.log(this.primaryContact);
            //   });
            //   this.primaryContactSelected = this.primaryContactSelected.slice();
            //   this.valueUpdatePrimaryContact = this.propertyUpdateObj.primaryContact;
            // }
            if (_this.propertyUpdateObj.recordType) {
                _this.recordTypeSelected.push({
                    text: _this.propertyUpdateObj.recordType,
                    id: _this.propertyUpdateObj.recordType
                });
                _this.recordTypeSelected = _this.recordTypeSelected.slice();
                _this.valueUpdateRecordType = _this.propertyUpdateObj.recordType;
            }
            if (_this.propertyUpdateObj.state) {
                _this.stateSelected.push({
                    text: _this.propertyUpdateObj.state,
                    id: _this.propertyUpdateObj.state
                });
                _this.stateSelected = _this.stateSelected.slice();
                _this.valueUpdateState = _this.propertyUpdateObj.state;
            }
            if (_this.propertyUpdateObj.county) {
                _this.countySelected.push({
                    text: _this.propertyUpdateObj.county,
                    id: _this.propertyUpdateObj.county
                });
                _this.countySelected = _this.countySelected.slice();
                _this.valueUpdateCounty = _this.propertyUpdateObj.county;
            }
            if (_this.propertyUpdateObj.msa) {
                _this.msaSelected.push({
                    text: _this.propertyUpdateObj.msa,
                    id: _this.propertyUpdateObj.msa
                });
                _this.msaSelected = _this.msaSelected.slice();
                _this.valueUpdateMsa = _this.propertyUpdateObj.msa;
            }
            if (_this.propertyUpdateObj.market) {
                _this.marketSelected.push({
                    text: _this.propertyUpdateObj.market,
                    id: _this.propertyUpdateObj.market
                });
                _this.marketSelected = _this.marketSelected.slice();
                _this.valueUpdateMarket = _this.propertyUpdateObj.market;
            }
            if (_this.propertyUpdateObj.submarket) {
                _this.submarketSelected.push({
                    text: _this.propertyUpdateObj.submarket,
                    id: _this.propertyUpdateObj.submarket
                });
                _this.submarketSelected = _this.submarketSelected.slice();
                _this.valueUpdateSubmarket = _this.propertyUpdateObj.submarket;
            }
            if (_this.propertyUpdateObj.primaryUse) {
                _this.primaryUseSelected.push({
                    text: _this.propertyUpdateObj.primaryUse,
                    id: _this.propertyUpdateObj.primaryUse
                });
                _this.primaryUseSelected = _this.primaryUseSelected.slice();
                _this.valueUpdatePrimaryUse = _this.propertyUpdateObj.primaryUse;
            }
            if (_this.propertyUpdateObj.propertyStatus) {
                _this.propertyStatusSelected.push({
                    text: _this.propertyUpdateObj.propertyStatus,
                    id: _this.propertyUpdateObj.propertyStatus
                });
                _this.propertyStatusSelected = _this.propertyStatusSelected.slice();
                _this.valueUpdatePropertyStatus = _this.propertyUpdateObj.propertyStatus;
            }
            if (_this.propertyUpdateObj.buildingClass) {
                _this.buildingClassSelected.push({
                    text: _this.propertyUpdateObj.buildingClass,
                    id: _this.propertyUpdateObj.buildingClass
                });
                _this.buildingClassSelected = _this.buildingClassSelected.slice();
                _this.valueUpdateBuildingClass = _this.propertyUpdateObj.buildingClass;
            }
            if (_this.propertyUpdateObj.rentType) {
                _this.rentTypeSelected.push({
                    text: _this.propertyUpdateObj.rentType,
                    id: _this.propertyUpdateObj.rentType
                });
                _this.rentTypeSelected = _this.rentTypeSelected.slice();
                _this.valueUpdateRentType = _this.propertyUpdateObj.rentType;
            }
            if (_this.propertyUpdateObj.construction) {
                _this.constructionSelected.push({
                    text: _this.propertyUpdateObj.construction,
                    id: _this.propertyUpdateObj.construction
                });
                _this.constructionSelected = _this.constructionSelected.slice();
                _this.valueUpdateConstruction = _this.propertyUpdateObj.construction;
            }
            if (_this.propertyUpdateObj.roofType) {
                _this.roofTypeSelected.push({
                    text: _this.propertyUpdateObj.roofType,
                    id: _this.propertyUpdateObj.roofType
                });
                _this.roofTypeSelected = _this.roofTypeSelected.slice();
                _this.valueUpdateRoofType = _this.propertyUpdateObj.roofType;
            }
            if (_this.propertyUpdateObj.sidingType) {
                _this.sidingTypeSelected.push({
                    text: _this.propertyUpdateObj.sidingType,
                    id: _this.propertyUpdateObj.sidingType
                });
                _this.sidingTypeSelected = _this.sidingTypeSelected.slice();
                _this.valueUpdateSidingType = _this.propertyUpdateObj.sidingType;
            }
            if (_this.propertyUpdateObj.foundationType) {
                _this.foundationTypeSelected.push({
                    text: _this.propertyUpdateObj.foundationType,
                    id: _this.propertyUpdateObj.foundationType
                });
                _this.foundationTypeSelected = _this.foundationTypeSelected.slice();
                _this.valueUpdateFoundationType = _this.propertyUpdateObj.foundationType;
            }
            if (_this.propertyUpdateObj.unitAmenities) {
                _this.propertyUpdateObj.unitAmenities.forEach(function (data) {
                    _this.unitAmenitiesSelected.push({ text: data, id: data });
                    _this.unitAmenitiesSelected = _this.unitAmenitiesSelected.slice();
                    _this.valueUpdateUnitAmenities.push(data);
                    _this.valueUpdateUnitAmenities = _this.valueUpdateUnitAmenities.slice();
                });
            }
            if (_this.propertyUpdateObj.siteAmenities) {
                _this.propertyUpdateObj.siteAmenities.forEach(function (data) {
                    _this.siteAmenitiesSelected.push({ text: data, id: data });
                    _this.siteAmenitiesSelected = _this.siteAmenitiesSelected.slice();
                    _this.valueUpdateSiteAmenities.push(data);
                    _this.valueUpdateSiteAmenities = _this.valueUpdateSiteAmenities.slice();
                });
            }
            if (_this.propertyUpdateObj.parkingType) {
                _this.parkingTypeSelected.push({
                    text: _this.propertyUpdateObj.parkingType,
                    id: _this.propertyUpdateObj.parkingType
                });
                _this.parkingTypeSelected = _this.parkingTypeSelected.slice();
                _this.valueUpdateParkingType = _this.propertyUpdateObj.parkingType;
            }
        });
    };
    PropertyListComponent.prototype.getFiles = function () {
        var files = [];
        for (var i = 0; i < $("input[name=filepond]").length; i++) {
            files.push((JSON.parse($("input[name=filepond]")[i].getAttribute("value"))).data);
        }
        return files;
        //  $("input[name=filepond]").each((data,element)=>{
        //    files.push((element));
        //    if($("input[name=filepond]").length == files.length){
        //      return files;
        //    }
        //  });
        // return files;
    };
    PropertyListComponent.prototype.updateProperty = function () {
        var _this = this;
        this.file = this.getFiles();
        //console.log("f", this.file);
        if (this.propertyUpdateObj.propertyName.length <= 0) {
            this.toastr.error('Property name required.', 'Error!');
        }
        else {
            this.propertyUpdateObj.recordType = this.valueUpdateRecordType;
            this.propertyUpdateObj.state = this.valueUpdateState;
            this.propertyUpdateObj.county = this.valueUpdateCounty;
            this.propertyUpdateObj.msa = this.valueUpdateMsa;
            this.propertyUpdateObj.market = this.valueUpdateMarket;
            this.propertyUpdateObj.submarket = this.valueUpdateSubmarket;
            this.propertyUpdateObj.primaryUse = this.valueUpdatePrimaryUse;
            this.propertyUpdateObj.propertyStatus = this.valueUpdatePropertyStatus;
            this.propertyUpdateObj.buildingClass = this.valueUpdateBuildingClass;
            this.propertyUpdateObj.rentType = this.valueUpdateRentType;
            this.propertyUpdateObj.construction = this.valueUpdateConstruction;
            this.propertyUpdateObj.roofType = this.valueUpdateRoofType;
            this.propertyUpdateObj.sidingType = this.valueUpdateSidingType;
            this.propertyUpdateObj.foundationType = this.valueUpdateFoundationType;
            this.propertyUpdateObj.unitAmenities = this.valueUpdateUnitAmenities;
            this.propertyUpdateObj.siteAmenities = this.valueUpdateSiteAmenities;
            this.propertyUpdateObj.parkingType = this.valueUpdateParkingType;
            this.propertyUpdateObj.lastSaleDate = $("#updateLastSaleDate").val() ? $("#updateLastSaleDate").val() : "";
            this.propertyUpdateObj.updateTime = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"].ServerValue.TIMESTAMP;
            this.propertyUpdateObj.updatedBy = this.userId;
            if (this.file.length > 0) {
                var files = [];
                this.file.forEach(function (fileToUpload) {
                    __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('/crm/property/' + _this.makeid() + '.png').putString(fileToUpload, 'base64').then(function (snapshot) {
                        files.push(snapshot.downloadURL);
                        if (files.length == _this.file.length) {
                            _this.propertyUpdateObj.pictures = (_this.propertyUpdateObj.pictures) ? _this.propertyUpdateObj.pictures.concat(files) : files;
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/crm/property/' + _this.currentUpdateKey).update(_this.propertyUpdateObj).then(function (result) {
                                $(".close").trigger("click");
                                _this.initNewProperty();
                                _this.toastr.success('Property updated!.', 'Sucess!');
                                $(".filepond--action-remove-item").click();
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                });
            }
            else {
                if (this.file.length == 0) {
                    __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/crm/property/' + this.currentUpdateKey).update(this.propertyUpdateObj).then(function (result) {
                        $(".close").trigger("click");
                        _this.initNewProperty();
                        _this.toastr.success('Property updated!.', 'Sucess!');
                        $(".filepond--action-remove-item").click();
                        //setTimeout(()=>{location.reload();},2000);
                    });
                }
            }
        }
    };
    //Helper function - generates unique random id for images being uploaded to firebase storage
    PropertyListComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    //Delete Company main function called when modal conformed.
    PropertyListComponent.prototype.deleteProperty = function () {
        var _this = this;
        this.propertyRef.child(this.currentDeleteKey).remove().then(function () {
            _this.toastr.success('Property deleted!.', 'Sucess!');
        }).catch(function () {
            _this.toastr.error('Error deleting property!.', 'Error!');
        });
    };
    //Initilize and Reinitilize Add property object
    PropertyListComponent.prototype.initNewProperty = function () {
        this.propertyAddObj = {
            'recordType': '',
            'propertyName': '',
            'streetAddress': '',
            'city': '',
            'state': '',
            'zip': '',
            'county': '',
            'msa': '',
            'market': '',
            'submarket': '',
            'primaryUse': '',
            'propertyStatus': '',
            'buildingClass': '',
            'rentType': '',
            'lastSaleDate': '',
            "lastSalePrice": "",
            "lastSaleCap": "",
            "lastSaleType": "",
            "propertyManagement": "",
            "onSitePhone": "",
            "onSiteContact": "",
            "group": "",
            "ownershipEntity": "",
            "ownershipEntityAddress": "",
            "units": "",
            "squareFootage": "",
            "parcelNumber": "",
            "landAcres": "",
            "landSf": "",
            "far": "",
            "yearBuilt": "",
            "yearRenovated": "",
            "zoning": "",
            "construction": "",
            "roofType": "",
            "sidingType": "",
            "foundationType": "",
            "numberStories": "",
            "numberBuildings": "",
            "website": "",
            "unitAmenities": "",
            "siteAmenities": "",
            "masterMetered": "",
            "individuallyMetered": "",
            "parkingSpaces": "",
            "parkingRatio": "",
            "parkingType": "",
            "garages": "",
            "carports": "",
            "pictures": [],
            "forSale": false,
            "primaryContact": "",
            "primaryContactPhone": "",
            "primaryContactEmail": "",
            "primaryContactMobile": "",
            "primaryContactLastActivityDate": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "lat": 0,
            "lng": 0,
        };
        this.propertyUpdateObj = {
            'recordType': '',
            'propertyName': '',
            'streetAddress': '',
            'city': '',
            'state': '',
            'zip': '',
            'county': '',
            'msa': '',
            'market': '',
            'submarket': '',
            'primaryUse': '',
            'propertyStatus': '',
            'buildingClass': '',
            'rentType': '',
            'lastSaleDate': '',
            "lastSalePrice": "",
            "lastSaleCap": "",
            "lastSaleType": "",
            "propertyManagement": "",
            "onSitePhone": "",
            "onSiteContact": "",
            "group": "",
            "ownershipEntity": "",
            "ownershipEntityAddress": "",
            "units": "",
            "squareFootage": "",
            "parcelNumber": "",
            "landAcres": "",
            "landSf": "",
            "far": "",
            "yearBuilt": "",
            "yearRenovated": "",
            "zoning": "",
            "construction": "",
            "roofType": "",
            "sidingType": "",
            "foundationType": "",
            "numberStories": "",
            "numberBuildings": "",
            "website": "",
            "unitAmenities": "",
            "siteAmenities": "",
            "masterMetered": "",
            "individuallyMetered": "",
            "parkingSpaces": "",
            "parkingRatio": "",
            "parkingType": "",
            "garages": "",
            "carports": "",
            "pictures": [],
            "forSale": false,
            "primaryContact": "",
            "primaryContactPhone": "",
            "primaryContactEmail": "",
            "primaryContactMobile": "",
            "primaryContactLastActivityDate": "",
            "createdBy": "",
            "createTime": "",
            "updatedBy": "",
            "updateTime": "",
            "lat": 0,
            "lng": 0
        };
    };
    PropertyListComponent.prototype.addProperty = function () {
        var _this = this;
        //Compulsary field check
        if (this.propertyAddObj.propertyName.length <= 0) {
            this.toastr.error('Name required.', 'Error!');
        }
        else {
            //Multi-select value extraction
            this.propertyAddObj.recordType = this.valueRecordType;
            this.propertyAddObj.state = this.valueState;
            this.propertyAddObj.county = this.valueCounty;
            this.propertyAddObj.msa = this.valueMsa;
            this.propertyAddObj.market = this.valueMarket;
            this.propertyAddObj.submarket = this.valueSubmarket;
            this.propertyAddObj.primaryUse = this.valuePrimaryUse;
            this.propertyAddObj.propertyStatus = this.valuePropertyStatus;
            this.propertyAddObj.buildingClass = this.valueBuildingClass;
            this.propertyAddObj.rentType = this.valueRentType;
            this.propertyAddObj.construction = this.valueConstruction;
            this.propertyAddObj.roofType = this.valueRoofType;
            this.propertyAddObj.sidingType = this.valueSidingType;
            this.propertyAddObj.foundationType = this.valueFoundationType;
            this.propertyAddObj.unitAmenities = this.valueUnitAmenities;
            this.propertyAddObj.siteAmenities = this.valueSiteAmenities;
            this.propertyAddObj.parkingType = this.valueParkingType;
            this.propertyAddObj.primaryContact = this.valuePrimaryContact;
            this.propertyAddObj.lastSaleDate = $("#addlastsaledate").val() ? $("#addlastsaledate").val() : "";
            //Record meta data
            this.propertyAddObj.createTime = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"].ServerValue.TIMESTAMP;
            this.propertyAddObj.createdBy = this.userId;
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/crm/property/').push(this.propertyAddObj).then(function (result) {
                $(".close").trigger("click");
                _this.initNewProperty();
                _this.toastr.success('New property added.', 'Sucess!');
            });
        }
    };
    PropertyListComponent.prototype.refreshValueRecordType = function (value) {
        this.valueRecordType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateRecordType = function (value) {
        this.valueUpdateRecordType = value.id;
    };
    PropertyListComponent.prototype.refreshValueState = function (value) {
        this.valueState = value.id;
        if (value.id == "Washington") {
            this.market = this.market1;
            this.submarket = this.submarket1;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
        else {
            this.market = this.market2;
            this.submarket = this.submarket2;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
    };
    PropertyListComponent.prototype.refreshValueUpdateState = function (value) {
        this.valueUpdateState = value.id;
        if (value.id == "Washington") {
            this.market = this.market1;
            this.submarket = this.submarket1;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
        else {
            this.market = this.market2;
            this.submarket = this.submarket2;
            this.marketSelected = [];
            this.submarketSelected = [];
        }
    };
    PropertyListComponent.prototype.refreshValueCounty = function (value) {
        this.valueCounty = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateCounty = function (value) {
        this.valueUpdateCounty = value.id;
    };
    PropertyListComponent.prototype.refreshValueMsa = function (value) {
        this.valueMsa = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateMsa = function (value) {
        this.valueUpdateMsa = value.id;
    };
    PropertyListComponent.prototype.refreshValueMarket = function (value) {
        this.valueMarket = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateMarket = function (value) {
        this.valueUpdateMarket = value.id;
    };
    PropertyListComponent.prototype.refreshValueSubmarket = function (value) {
        this.valueSubmarket = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateSubmarket = function (value) {
        this.valueUpdateSubmarket = value.id;
    };
    PropertyListComponent.prototype.refreshValuePrimaryUse = function (value) {
        this.valuePrimaryUse = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdatePrimaryUse = function (value) {
        this.valueUpdatePrimaryUse = value.id;
    };
    PropertyListComponent.prototype.refreshValuePropertyStatus = function (value) {
        this.valuePropertyStatus = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdatePropertyStatus = function (value) {
        this.valueUpdatePropertyStatus = value.id;
    };
    PropertyListComponent.prototype.refreshValueBuildingClass = function (value) {
        this.valueBuildingClass = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateBuildingClass = function (value) {
        this.valueUpdateBuildingClass = value.id;
    };
    PropertyListComponent.prototype.refreshValueRentType = function (value) {
        this.valueRentType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateRentType = function (value) {
        this.valueUpdateRentType = value.id;
    };
    PropertyListComponent.prototype.refreshValueConstruction = function (value) {
        this.valueConstruction = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateConstruction = function (value) {
        this.valueUpdateConstruction = value.id;
    };
    PropertyListComponent.prototype.refreshValueRoofType = function (value) {
        this.valueRoofType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateRoofType = function (value) {
        this.valueUpdateRoofType = value.id;
    };
    PropertyListComponent.prototype.refreshValueSidingType = function (value) {
        this.valueSidingType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateSidingType = function (value) {
        this.valueUpdateSidingType = value.id;
    };
    PropertyListComponent.prototype.refreshValueFoundationType = function (value) {
        this.valueFoundationType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateFoundationType = function (value) {
        this.valueUpdateFoundationType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUnitAmenities = function (value) {
        var _this = this;
        this.valueUnitAmenities = [];
        value.forEach(function (element) {
            _this.valueUnitAmenities.push(element.id);
        });
    };
    PropertyListComponent.prototype.refreshValueUpdateUnitAmenities = function (value) {
        var _this = this;
        this.valueUpdateUnitAmenities = [];
        value.forEach(function (element) {
            _this.valueUpdateUnitAmenities.push(element.id);
        });
    };
    PropertyListComponent.prototype.refreshValueSiteAmenities = function (value) {
        var _this = this;
        this.valueSiteAmenities = [];
        value.forEach(function (element) {
            _this.valueSiteAmenities.push(element.id);
        });
    };
    PropertyListComponent.prototype.refreshValueUpdateSiteAmenities = function (value) {
        var _this = this;
        this.valueUpdateSiteAmenities = [];
        value.forEach(function (element) {
            _this.valueUpdateSiteAmenities.push(element.id);
        });
    };
    PropertyListComponent.prototype.refreshValueParkingType = function (value) {
        this.valueParkingType = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdateParkingType = function (value) {
        this.valueUpdateParkingType = value.id;
    };
    PropertyListComponent.prototype.refreshValuePrimaryContact = function (value) {
        this.valuePrimaryContact = value.id;
    };
    PropertyListComponent.prototype.refreshValueUpdatePrimaryContact = function (value) {
        this.valueUpdatePrimaryContact = value.id;
    };
    PropertyListComponent.prototype.markerMoved = function (e) {
        this.propertyUpdateObj.lat = e.coords.lat;
        this.propertyUpdateObj.lng = e.coords.lng;
    };
    PropertyListComponent.prototype.recordDeleteIndex = function (index) {
        this.deleteIndex = index;
    };
    PropertyListComponent.prototype.deleteImage = function () {
        this.propertyUpdateObj.pictures.splice(this.deleteIndex, 1);
        $(".prev-slide").click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
    ], PropertyListComponent.prototype, "dtElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('primaryContact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ng2_select__["SelectComponent"])
    ], PropertyListComponent.prototype, "select", void 0);
    PropertyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property-list',
            template: __webpack_require__("../../../../../src/app/crm/main-components/property/property-list/property-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/property/property-list/property-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], PropertyListComponent);
    return PropertyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\" >\n  <app-message-box></app-message-box>\n  <div class=\"content container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/main-components/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyComponent = /** @class */ (function () {
    function PropertyComponent() {
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    PropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property',
            template: __webpack_require__("../../../../../src/app/crm/main-components/property/property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/main-components/property/property.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\r\n/*------------------------------------------------------------------\r\n.______    __  ___   ___  __   _______  ___________    ____\r\n|   _  \\  |  | \\  \\ /  / |  | |   ____||   ____\\   \\  /   /\r\n|  |_)  | |  |  \\  V  /  |  | |  |__   |  |__   \\   \\/   /\r\n|   ___/  |  |   >   <   |  | |   __|  |   __|   \\_    _/\r\n|  |      |  |  /  .  \\  |  | |  |____ |  |        |  |\r\n| _|      |__| /__/ \\__\\ |__| |_______||__|        |__|\r\n\r\n\r\n[Main Stylesheet]\r\n\r\nProject:    Marshall\r\nVersion:    0.1\r\nLast change:    01.04.2017\r\nPrimary use:    Ultimate Coming Soon Template\r\n\r\n\r\n[Typography]\r\n\r\nBody: 16px 'Open Sans', sans-serif;\r\n\r\n/*==============================\r\n[Table of contents]\r\n\r\n1. Typography\r\n2. General CSS + marshall own reset\r\n3. Fixed close button\r\n4. Content Column\r\n5. Logo\r\n6. Content\r\n7. Social Links\r\n8. Fit column => Thumb, Canvas, Video etc\r\n9. Content Column\r\n10.Gallery/Works\r\n11.Contact area\r\n12.Newsletter Form\r\n13.Footer\r\n14.Preset Animation Timing\r\n\r\n-------------------------------------------------------------------*/\r\n/* -----------------------------------------------------------------\r\n  1. Typography setup\r\n-------------------------------------------------------------------*/\r\n*,\r\n*:after,\r\n*:before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.cf:before,\r\n.cf:after {\r\n  content: '';\r\n  display: table;\r\n}\r\n.cf:after {\r\n  clear: both;\r\n}\r\nbody{\r\n  color: #FFF;\r\n  font-size: 16px;\r\n  font-family: 'Open Sans', Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-color: #131623;\r\n  line-height: 1.5;\r\n  font-weight: 400;\r\n  overflow-x: hidden;\r\n}\r\np, ul, li {\r\n  line-height: 1.7;\r\n}\r\nul {\r\n  list-style: disc;\r\n}\r\nblockquote {\r\n  border-left: 5px solid #EF5350;\r\n  margin: 40px 80px;\r\n  padding-left: 20px;\r\n}\r\nblockquote ul {\r\n  padding-left: 20px;\r\n}\r\nblockquote h4 {\r\n  border-bottom: 1px solid;\r\n  display: inline-block;\r\n}\r\na {\r\n  color: #FFF;\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\na:hover {\r\n  color: inherit;\r\n}\r\na:hover,\r\na:focus,\r\ninput:focus,\r\ninput:hover,\r\ntextarea:focus,\r\ntextarea:hover {\r\n  outline: none;\r\n}\r\nbutton:focus {\r\n  outline: none;\r\n}\r\nimg {\r\n  max-width:100%;\r\n  border: none;\r\n}\r\ninput{\r\n  -ms-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\nh1,\r\n h2,\r\n h3,\r\n h4,\r\n h5,\r\n h6,\r\n .h1,\r\n .h2,\r\n .h3,\r\n .h4,\r\n .h5,\r\n .h6 {\r\n   font-family: inherit;\r\n   font-weight: normal;\r\n   line-height: 1.1;\r\n   color: inherit;\r\n }\r\nh1 small,\r\nh2 small,\r\nh3 small,\r\nh4 small,\r\nh5 small,\r\nh6 small,\r\n.h1 small,\r\n.h2 small,\r\n.h3 small,\r\n.h4 small,\r\n.h5 small,\r\n.h6 small,\r\nh1 .small,\r\nh2 .small,\r\nh3 .small,\r\nh4 .small,\r\nh5 .small,\r\nh6 .small,\r\n.h1 .small,\r\n.h2 .small,\r\n.h3 .small,\r\n.h4 .small,\r\n.h5 .small,\r\n.h6 .small {\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  color: #777;\r\n}\r\nh1,\r\n.h1,\r\nh2,\r\n.h2,\r\nh3,\r\n.h3 {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\nh1 small,\r\n.h1 small,\r\nh2 small,\r\n.h2 small,\r\nh3 small,\r\n.h3 small,\r\nh1 .small,\r\n.h1 .small,\r\nh2 .small,\r\n.h2 .small,\r\nh3 .small,\r\n.h3 .small {\r\n  font-size: 65%;\r\n}\r\nh4,\r\n.h4,\r\nh5,\r\n.h5,\r\nh6,\r\n.h6 {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\nh4 small,\r\n.h4 small,\r\nh5 small,\r\n.h5 small,\r\nh6 small,\r\n.h6 small,\r\nh4 .small,\r\n.h4 .small,\r\nh5 .small,\r\n.h5 .small,\r\nh6 .small,\r\n.h6 .small {\r\n  font-size: 75%;\r\n}\r\nh1,\r\n.h1 {\r\n  font-size: 2.35714em;\r\n  line-height: 1.16364em;\r\n}\r\nh2,\r\n.h2 {\r\n  font-size: 1.875em;\r\n}\r\nh3,\r\n.h3 {\r\n  font-size: 1.500em;\r\n}\r\nh4,\r\n.h4 {\r\n  font-size: 1.125em;\r\n}\r\nh5,\r\n.h5 {\r\n  font-size: 0.875em;\r\n}\r\nh6,\r\n.h6 {\r\n  font-size: 0.750em;\r\n}\r\np {\r\n  margin: 0 0 10px;\r\n  font-size: 1em;\r\n}\r\n.lead {\r\n  margin-bottom: 20px;\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n  line-height: 1.4;\r\n}\r\n@media (min-width: 768px) {\r\n  .lead {\r\n    font-size: 1.313em;\r\n  }\r\n}\r\nsmall,\r\n.small {\r\n  font-size: 85%;\r\n}\r\nmark,\r\n.mark {\r\n  padding: .2em;\r\n  background-color: #fcf8e3;\r\n}\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n/* -----------------------------------------------------------------\r\n  2. General CSS + marshall own reset\r\n-------------------------------------------------------------------*/\r\n.clearfix::after,\r\n.clearfix::before,\r\n.marshall-container::before,\r\n.marshall-container::after,\r\n[class^=\"marshall-col-\"]::before,\r\n[class^=\"marshall-col-\"]::after,\r\n.marshall-content-column::after,\r\n.marshall-content-column::before,\r\n.marshall-social-column::before,\r\n.marshall-social-column::after,\r\n.marshall-the_content::after,\r\n.marshall-the_content::before,\r\n.marshall-gallery::before,\r\n.marshall-gallery::after,\r\n.stay_connent_with_social::before,\r\n.stay_connent_with_social::after,\r\n.divided_or::before,\r\n.divided_or::after,\r\n.marshall-newsletter-content::before,\r\n.marshall-newsletter-content::after,\r\n.marshall-static-content::before,\r\n.marshall-static-content::after,\r\n.simply-countdown-column::before,\r\n.simply-countdown-column::after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.marshall-container,\r\n.marshall-social-column {\r\n  width: 100%;\r\n}\r\n.bg-container {\r\n  background-image: url(https://pixiefy.com/themes/marshall/html/v24/images/v7/blue-beach.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.marshall-col-content {\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n.marshall-col-screen {\r\n  z-index: 9;\r\n}\r\n.marshall-col-1,\r\n.marshall-col-2,\r\n.marshall-col-3,\r\n.marshall-col-4,\r\n.marshall-col-5,\r\n.marshall-col-6,\r\n.marshall-col-7,\r\n.marshall-col-8,\r\n.marshall-col-9,\r\n.marshall-col-10,\r\n.marshall-col-11,\r\n.marshall-col-12 {\r\n  float: left;\r\n  min-height: 1;\r\n  height: 100vh;\r\n}\r\n.marshall-col-1,\r\n.marshall-col-1 .marshall-animate-content {\r\n  width: 8.33333%;\r\n}\r\n.marshall-col-2,\r\n.marshall-col-2 .marshall-animate-content{\r\n  width: 16.6667%;\r\n}\r\n.marshall-col-3,\r\n.marshall-col-3 .marshall-animate-content{\r\n  width: 25%;\r\n}\r\n.marshall-col-4,\r\n.marshall-col-4 .marshall-animate-content{\r\n  width: 33.3333%;\r\n}\r\n.marshall-col-5,\r\n.marshall-col-5 .marshall-animate-content{\r\n  width: 41.6667%;\r\n}\r\n.marshall-col-6,\r\n.marshall-col-6 .marshall-animate-content{\r\n  width: 50%;\r\n}\r\n.marshall-col-7,\r\n.marshall-col-7 .marshall-animate-content{\r\n  width: 58.3333%;\r\n}\r\n.marshall-col-8,\r\n.marshall-col-8 .marshall-animate-content{\r\n  width: 66.6667%;\r\n}\r\n.marshall-col-9,\r\n.marshall-col-9 .marshall-animate-content{\r\n  width: 75%;\r\n}\r\n.marshall-col-10,\r\n.marshall-col-10 .marshall-animate-content{\r\n  width: 83.3333%;\r\n}\r\n.marshall-col-11,\r\n.marshall-col-11 .marshall-animate-content{\r\n  width: 91.6667%;\r\n}\r\n.marshall-col-12,\r\n.marshall-col-12 .marshall-animate-content{\r\n  width: 100%;\r\n}\r\n.marshall-position{\r\n  position: relative;\r\n}\r\n.special_title {\r\n  font-family: 'Ranga', cursive;\r\n}\r\n.marshall-btn {\r\n  background-color: #f61067;\r\n  border-radius: 0;\r\n  display: inline-block;\r\n  margin: 0 15px 0 0;\r\n  padding: 7px 30px 8px;\r\n  -webkit-transition: all 0.1s linear 0s;\r\n  transition: all 0.1s linear 0s;\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  color: #FFF;\r\n  border: 1px solid #f61067;\r\n}\r\n.marshall-btn.marshall-btn-text {\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n  display: inline-block;\r\n  margin: 0 15px 0 0;\r\n  padding: 7px 30px;\r\n  border-color: transparent;\r\n}\r\n.marshall-btn i {\r\n  margin-right: 5px;\r\n  -webkit-transition: all 0.4 ease 0s;\r\n  transition: all 0.4 ease 0s;\r\n}\r\n.marshall-btn:hover,\r\n.marshall-btn:focus,\r\n.marshall-btn:active {\r\n  background-color: transparent;\r\n  border-style: dashed;\r\n}\r\n.marshall-btn.marshall-btn-text:hover,\r\n.marshall-btn.marshall-btn-text:focus,\r\n.marshall-btn.marshall-btn-text:active {\r\n  color: #fff;\r\n}\r\n.marshall-btn.marshall-btn-text:hover i,\r\n.marshall-animate-open.marshall-btn i{\r\n  color: #f61067;\r\n}\r\n.marshall-hide {\r\n  display: none;\r\n}\r\n.bottom-separator {\r\n  border-bottom: 1px solid #e2e2e2;\r\n  margin: 60px auto;\r\n  opacity: 0.7;\r\n  width: 100%;\r\n}\r\nbody.bg-white {\r\n  background-color: #FFF;\r\n  color: #232428;\r\n}\r\n.fat_title {\r\n  font-size: 2.7em;\r\n  font-weight: 800;\r\n}\r\n.content_overley {\r\n  background-color: #000;\r\n  bottom: 0;\r\n  left: 0;\r\n  opacity: 0.7;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n.bg-content-rgba {\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\nbody.mrs-white .morph-button-modal-2 > button,\r\nbody.mrs-white .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\n.marshall-col-10.marshall-middle-10.marshall-col-content {\r\n  margin-left: 8.3%;\r\n  text-align: center;\r\n}\r\n/* -----------------------------------------------------------------\r\n  3. fixed close button\r\n-------------------------------------------------------------------*/\r\n.marshall-content-close {\r\n  background-color: #333;\r\n  border: 0 none;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  width: 40px;\r\n  z-index: 1;\r\n  color: #FFF;\r\n  display: none;\r\n  -webkit-transition: all 0.4s cubic-bezier(0.7, 0, 0.3, 1) 0.4s;\r\n  transition: all 0.4s cubic-bezier(0.7, 0, 0.3, 1) 0.4s;\r\n  cursor: pointer;\r\n}\r\n.marshall-content-close:hover {\r\n  font-size: 1.1em;\r\n  line-height: 45px;\r\n}\r\n.marshall-content-close i.fa {\r\n  left: 50%;\r\n  line-height: 20px;\r\n  position: absolute;\r\n  top: calc(50% - 3px);\r\n  -webkit-transform: translateY(-50%) translateX(-50%);\r\n          transform: translateY(-50%) translateX(-50%);\r\n}\r\n.marshall-content-close.fixed_color_changed {\r\n  background-color: #FFF;\r\n  color: #333;\r\n}\r\n/* -----------------------------------------------------------------\r\n  3. Loader\r\n-------------------------------------------------------------------*/\r\n.marshall-loading-screen {\r\n  background-color: #333;\r\n  bottom: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  right: 0;\r\n  text-align: center;\r\n  top: 0;\r\n  z-index: 99999;\r\n}\r\n.marshall-loading-icon {\r\n  display: table;\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.marshall-loading-inner {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.marshall-load {\r\n  background-color: #f61067;\r\n  border-radius: 50%;\r\n  height: 60px;\r\n  margin: auto;\r\n  position: relative;\r\n  width: 60px;\r\n}\r\n.marshall-load::before {\r\n  background-color: transparent;\r\n  border: 2px dashed #fff;\r\n  border-radius: 50%;\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  -webkit-transition-duration: 0.4s;\r\n          transition-duration: 0.4s;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n  -webkit-transition-timing-function: linear;\r\n          transition-timing-function: linear;\r\n  z-index: 2;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: top 0.4s,left 0.4s,right 0.4s,bottom 0.4s, border-width 0.4s ease 0.4s;\r\n  -webkit-transition: top 0.4s,left 0.4s,right 0.4s,bottom 0.4s, border-width 0.4s ease 0.4s;\r\n  animation: 4s linear 0s normal none infinite running spinnerRotate;\r\n  -webkit-animation: 4s linear 0s normal none infinite running spinnerRotate;\r\n}\r\n.marshall-load::after {\r\n  content: attr(data-name);\r\n  font-size: 1.8em;\r\n  font-weight: 700;\r\n  line-height: 57px;\r\n  color: #FFF;\r\n}\r\n/* -----------------------------------------------------------------\r\n  4. Content Column\r\n-------------------------------------------------------------------*/\r\n.marshall-content-column {\r\n  height: 100vh;\r\n  margin-left: 15%;\r\n  position: relative;\r\n  width: 70%;\r\n  display: table;\r\n}\r\n/* -----------------------------------------------------------------\r\n  5. Logo\r\n-------------------------------------------------------------------*/\r\n.marshall-logo {\r\n  margin-left: 15%;\r\n  margin-top: 35px;\r\n  position: absolute;\r\n}\r\n.marshall-logo img {\r\n  display: inline-block;\r\n  max-width: 130px;\r\n}\r\n/* -----------------------------------------------------------------\r\n  6. Content\r\n-------------------------------------------------------------------*/\r\n.marshall-content {\r\n  display: block;\r\n  margin-left: 15%;\r\n  position: absolute;\r\n  top: 50%;\r\n  visibility: visible;\r\n  width: 70%;\r\n}\r\n.marshall-button-group {\r\n  margin-top: 40px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.marshall-button-group .marshall-btn,\r\n.marshall-button-group .marshall-btn-text {\r\n  margin: 0;\r\n}\r\n.marshall-content.css-center {\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n/* -----------------------------------------------------------------\r\n  7. Social Links\r\n-------------------------------------------------------------------*/\r\n.marshall-social-column {\r\n  bottom: 15px;\r\n  left: 15%;\r\n  position: absolute;\r\n  width: 70%;\r\n}\r\n.marshall-social-column p {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\nul.marshall-social-links {\r\n  display: inline-block;\r\n  list-style: outside none none;\r\n  margin: 0 0 0 10px;\r\n  padding: 0;\r\n}\r\nul.marshall-social-links li {\r\n  display: inline-block;\r\n}\r\n.marshall-social-links a {\r\n  padding: 0 6px;\r\n  display: block;\r\n  -webkit-transition: all 0.1s linear 0s;\r\n  transition: all 0.1s linear 0s;\r\n}\r\n.marshall-social-links a:hover {\r\n  -webkit-transform: translate3d(0px, -2px, 0px);\r\n  transform: translate3d(0px, -2px, 0px);\r\n  color: #f61067;\r\n}\r\n/* -----------------------------------------------------------------\r\n  8. Fit column => Thumb, Canvas, Video etc\r\n-------------------------------------------------------------------*/\r\n.marshall-fit-column {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/art.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  9. Content Column\r\n-------------------------------------------------------------------*/\r\n.marshall-animate-content {\r\n  background-color: #fff;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  height: 100%;\r\n  right: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transform: translate3d(0px, 0px, 0px);\r\n          transform: translate3d(0px, 0px, 0px);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  visibility: hidden;\r\n}\r\n.marshall-screen-left .marshall-animate-content {\r\n  right: inherit;\r\n  left: 0;\r\n}\r\n.marshall-main-content {\r\n  height: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 50%;\r\n  overflow: auto;\r\n  width: 100%;\r\n}\r\n#marshall-details {\r\n  width: 50%;\r\n}\r\n.mrs-active {\r\n  visibility: visible;\r\n  z-index: 1;\r\n}\r\n@-webkit-keyframes scaleDown {\r\n  from { opacity: 1; -webkit-transform: scale(1); }\r\n  to { opacity: 0; -webkit-transform: scale(.8); }\r\n}\r\n@keyframes scaleDown {\r\n  from { opacity: 1; -webkit-transform: scale(1); transform: scale(1); }\r\n  to { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }\r\n}\r\n@-webkit-keyframes moveToRight {\r\n  from { -webkit-transform: translateX(100%) }\r\n  to { -webkit-transform: translateX(0%); }\r\n}\r\n@keyframes moveToRight {\r\n  from { -webkit-transform: translateX(100%); transform: translateX(100%); }\r\n  to { -webkit-transform: translateX(0%); transform: translateX(0%); }\r\n}\r\n.mrs-moveToRight {\r\n  -webkit-animation: moveToRight .6s ease 0s both;\r\n  animation: moveToRight .6s ease 0s both;\r\n}\r\n.mrs-scaleDown {\r\n  -webkit-animation: scaleDown .7s ease both;\r\n  animation: scaleDown .7s ease both;\r\n}\r\n.marshall-the_content {\r\n  background-color: #fff;\r\n  padding: 40px 50px 20px;\r\n  color: #808080;\r\n}\r\n.marshall-the_content a {\r\n  color: #808080;\r\n}\r\n.marshall-works-details {\r\n  margin-top: 45px;\r\n}\r\n.marshall-the_content h2 {\r\n  color: #252525;\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  margin-bottom: 30px;\r\n  margin-top: 0;\r\n  text-transform: uppercase;\r\n}\r\n.marshall-the_content > h2 span {\r\n  color: #f61067;\r\n}\r\n.mCSB_inside > .mCSB_container {\r\n  margin-right: 0;\r\n}\r\n.mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical,\r\n.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical {\r\n  margin: 0;\r\n  right: 0;\r\n}\r\n#mCSB_1_scrollbar_vertical {\r\n  right: calc(100% - 10px);\r\n}\r\n/* -----------------------------------------------------------------\r\n  10. Gallery/Works\r\n-------------------------------------------------------------------*/\r\n.marshall-works-heading::after {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 0;\r\n}\r\n.marshall-the_content .marshall-works-heading-inner h2 {\r\n  color: #fff;\r\n}\r\n.marshall-works-heading {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/ocean.jpg\");\r\n  background-size: cover;\r\n  margin-left: -50px;\r\n  margin-right: -50px;\r\n  padding: 35px 50px 320px;\r\n  position: relative;\r\n}\r\n.marshall-works-heading-inner {\r\n  color: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.marshall-gallery-item {\r\n  display: block;\r\n  float: left;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  width: 50%;\r\n}\r\n.marshall-gallery {\r\n  margin-top: -270px;\r\n  position: relative;\r\n}\r\n.marshall-gallery-item a,\r\n.marshall-gallery-item a img {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.marshall-gallery-item a {\r\n  position: relative;\r\n}\r\n.marshall-gallery-item h2 {\r\n  color: #fff;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%) translateX(-50%) scale(0);\r\n  transform: translateY(-50%) translateX(-50%) scale(0);\r\n  z-index: 3;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  -webkit-transition:all 0.3s ease-in-out 0.3s;\r\n  transition:all 0.3s ease-in-out 0.3s;\r\n}\r\n.marshall-gallery-item a .mask-overley {\r\n  position:absolute; /* Center the mask */\r\n  top:50%;\r\n  left:50%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  cursor:pointer;\r\n  border-radius: 50px;\r\n  border-width: 50px;\r\n  display: inline-block;\r\n  height: 100px;\r\n  width: 100px;\r\n  border:0px solid rgba(0,0,0,0.7);\r\n  -webkit-box-sizing:border-box;\r\n  box-sizing:border-box;\r\n  opacity:0;\r\n  visibility:hidden;\r\n  -webkit-transform:scale(4);\r\n  transform:scale(4);\r\n  -webkit-transition:all 0.3s ease-in-out;\r\n  transition:all 0.3s ease-in-out;\r\n}\r\n.marshall-gallery-item a:hover .mask-overley {\r\n  opacity: 1;\r\n  border: 10vw solid rgba(0, 0, 0, 0.7);\r\n  visibility:visible;\r\n}\r\n.marshall-gallery-item a:hover h2 {\r\n  opacity: 1;\r\n  visibility:visible;\r\n  -webkit-transform: translateY(-50%) translateX(-50%) scale(1);\r\n  transform: translateY(-50%) translateX(-50%) scale(1);\r\n}\r\n/* -----------------------------------------------------------------\r\n  11. Contact area\r\n-------------------------------------------------------------------*/\r\n.mrs-contact-us {\r\n  padding-top: 60px;\r\n}\r\n.contact-information {\r\n  margin-top: 50px;\r\n}\r\n.contact-information > h3 {\r\n  margin-bottom: 10px;\r\n}\r\n.single-contact-info h4 {\r\n  color: #252525;\r\n  margin-top: 25px;\r\n}\r\n.mrs-contact-form {\r\n  margin: auto;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.single-cform-item label {\r\n  cursor: pointer;\r\n  display: block;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n}\r\n.single-cform-item input,\r\n.single-cform-item textarea {\r\n  background-color: transparent;\r\n  font-size: 15px;\r\n  line-height: 1.3;\r\n  padding: 10px 10px 10px 0;\r\n  border-top: 0px solid;\r\n  border-left: 0px solid;\r\n  border-right: 0px solid;\r\n  border-bottom: 1px solid #e2e2e2;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n.single-cform-item {\r\n  margin-bottom: 40px;\r\n  position: relative;\r\n}\r\n.single-cform-item::before {\r\n  background-color: #333;\r\n  bottom: 0;\r\n  content: \"\";\r\n  height: 1px;\r\n  position: absolute;\r\n  width: 0%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  -webkit-transition: 0.4s width ;\r\n  transition: 0.4s width ;\r\n}\r\n.single-cform-item textarea {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  min-height: 38px;\r\n  overflow-x: hidden;\r\n  line-height: 1.5;\r\n}\r\n#mrs_submit {\r\n  background-color: #333;\r\n  border: 1px solid #333;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  letter-spacing: 2px;\r\n  line-height: 14px;\r\n  overflow: hidden;\r\n  padding: 12px 40px;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  width: auto;\r\n  z-index: 1;\r\n}\r\n#mrs_submit:after {\r\n  width: 100%;\r\n  height: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  background: #fff;\r\n  opacity: 0;\r\n  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n  content: '';\r\n  position: absolute;\r\n  z-index: -1;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n#mrs_submit:hover,\r\n#mrs_submit:active,\r\n#mrs_submit:focus {\r\n  color: #333;\r\n}\r\n#mrs_submit:hover:after,\r\n#mrs_submit:active:after,\r\n#mrs_submit:focus:after {\r\n  height: 160px;\r\n  opacity: 1;\r\n}\r\n#mrs_submit:active:after {\r\n  height: 400%;\r\n  opacity: 1;\r\n}\r\n@keyframes fullWidth {\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n@-webkit-keyframes fullWidth {\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n.single-cform-item.active_item::before {\r\n  -webkit-animation-name: fullWidth;\r\n  animation-name: fullWidth;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-duration: 0.9s;\r\n  animation-duration: 0.9s;\r\n}\r\n#mrs-form label.error {\r\n  color: #fc5152;\r\n}\r\n#mrs-form label.valid i {\r\n  color: #2ccdae;\r\n}\r\n#mrs-form label.error a {\r\n  display: block;\r\n}\r\n.contact-alert-message {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n#mail_success,\r\n#mail_fail {\r\n  display: none;\r\n}\r\n.contact-alert-message {\r\n  padding: 35px 0 25px;\r\n  text-align: center;\r\n}\r\n#mail_fail i {\r\n  color: #ff0000;\r\n  -webkit-animation: flash 3s ease 0s backwards;\r\n  animation: flash 3s ease 0s backwards;\r\n}\r\n#mail_success i {\r\n  color: #2eb267;\r\n  -webkit-animation: flash 3s ease 0s backwards;\r\n  animation: flash 3s ease 0s backwards;\r\n}\r\n@-webkit-keyframes flash {\r\n  0%, 50%, 100% {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes flash {\r\n  0%, 50%, 100% {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%, 75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n.flash {\r\n  -webkit-animation-name: flash;\r\n  animation-name: flash;\r\n}\r\n.mrs-single-heading > h2 {\r\n  color: #252525;\r\n  margin-top: 0;\r\n}\r\n.form_loader {\r\n  -webkit-animation: 3s linear 0s normal none infinite running spinnerRotate;\r\n  animation: 3s linear 0s normal none infinite running spinnerRotate;\r\n  background-color: transparent;\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/loading.png\");\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n  bottom: 9px;\r\n  content: \"\";\r\n  display: block;\r\n  height: 20px;\r\n  left: 156px;\r\n  position: absolute;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  width: 20px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.form_loader.mcform_submitting {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n/* -----------------------------------------------------------------\r\n  12. Newsletter form\r\n-------------------------------------------------------------------*/\r\n.marshall-newsletter-header {\r\n  padding: 40px 0 20px;\r\n  position: relative;\r\n}\r\n.marshall-newsletter-header img {\r\n  display: block;\r\n  margin: auto;\r\n  position: relative;\r\n  width: 100px;\r\n  z-index: 3;\r\n}\r\n.marshall-newsletter-inner {\r\n  padding: 0 30px;\r\n  text-align: center;\r\n}\r\n.marshall-newsletter-description > p {\r\n  color: #747474;\r\n}\r\n.fa-times-thin:before {\r\n  content: '\\D7';\r\n}\r\nspan.close-newsletter {\r\n  cursor: pointer;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 12px;\r\n  width: 20px;\r\n  color: #999;\r\n  -webkit-transition: all 0.4s ease 0;\r\n  transition: all 0.4s ease 0;\r\n}\r\nspan.close-newsletter:hover {\r\n  font-size: 1.2em;\r\n  color: #111;\r\n}\r\nspan.close-newsletter i{\r\n  line-height: 18px;\r\n}\r\n.marshall-newsletter-content > input {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.marshall-newsletter-content input[type=\"email\"] {\r\n  background-color: #ebebeb;\r\n  border: 0 solid;\r\n  line-height: 1.5;\r\n  margin-bottom: 10px;\r\n  padding: 13px 15px 15px;\r\n  text-align: center;\r\n}\r\n.marshall-newsletter-content {\r\n  margin: 35px auto auto;\r\n  width: 80%;\r\n}\r\n.morph-button-modal-2.open .morph-content {\r\n  height: 464px;\r\n  margin-top: -232px;\r\n}\r\n.marshall-newsletter-description h2 {\r\n  margin-top: 10px;\r\n}\r\n.animation-icon {\r\n  color: #e2e2e4;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transition: all 0.6s ease 0.0s;\r\n  transition: all 0.6s ease 0.0s;\r\n}\r\n.medium-icon {\r\n  font-size: 1.5em;\r\n}\r\n.small-icon {\r\n  font-size: 1.2em;\r\n}\r\n.large-icon {\r\n  font-size: 2em;\r\n}\r\n.marshall-newsletter-animation-icons {\r\n  height: 50px;\r\n  left: 50%;\r\n  margin-left: -25px;\r\n  margin-top: -25px;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 50px;\r\n}\r\n.marshall-newsletter-content label {\r\n  display: block;\r\n  font-size: 0.8em;\r\n  margin-top: 5px;\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-7,\r\n.mfrom-header-animate .animation-icon-7 {\r\n  left: -175px;\r\n  top: -12px;\r\n  -webkit-transform: rotate(-20deg);\r\n          transform: rotate(-20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-8,\r\n.mfrom-header-animate .animation-icon-8 {\r\n  left: -175px;\r\n  top: 40px;\r\n  -webkit-transform: rotate(-7deg);\r\n          transform: rotate(-7deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-4,\r\n.mfrom-header-animate .animation-icon-4 {\r\n  left: -125px;\r\n  top: 22px;\r\n  -webkit-transform: rotate(-4deg);\r\n          transform: rotate(-4deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-1,\r\n.mfrom-header-animate .animation-icon-1 {\r\n  left: -94px;\r\n  top: -19px;\r\n  -webkit-transform: rotate(20deg);\r\n          transform: rotate(20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-2,\r\n.mfrom-header-animate .animation-icon-2 {\r\n  left: -94px;\r\n  top: 51px;\r\n  -webkit-transform: rotate(-20deg);\r\n          transform: rotate(-20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-9,\r\n.mfrom-header-animate .animation-icon-9 {\r\n  left: -71px;\r\n  top: 8px;\r\n  -webkit-transform: rotate(22deg);\r\n          transform: rotate(22deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-16,\r\n.mfrom-header-animate .animation-icon-16 {\r\n  left: 185px;\r\n  top: -12px;\r\n  -webkit-transform: rotate(20deg);\r\n          transform: rotate(20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-17,\r\n.mfrom-header-animate .animation-icon-17 {\r\n  left: 185px;\r\n  top: 40px;\r\n  -webkit-transform: rotate(7deg);\r\n          transform: rotate(7deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-5,\r\n.mfrom-header-animate .animation-icon-5 {\r\n  left: 148px;\r\n  top: 22px;\r\n  -webkit-transform: rotate(4deg);\r\n          transform: rotate(4deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-3,\r\n.mfrom-header-animate .animation-icon-3 {\r\n  left: 117px;\r\n  top: -19px;\r\n  -webkit-transform: rotate(-20deg);\r\n          transform: rotate(-20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-10,\r\n.mfrom-header-animate .animation-icon-10 {\r\n  left: 117px;\r\n  top: 51px;\r\n  -webkit-transform: rotate(20deg);\r\n          transform: rotate(20deg);\r\n}\r\n.marshall-morph-modal.open-animate .animation-icon-18,\r\n.mfrom-header-animate .animation-icon-18 {\r\n  left: 90px;\r\n  top: 8px;\r\n  -webkit-transform: rotate(-22deg);\r\n          transform: rotate(-22deg);\r\n}\r\n@-webkit-keyframes spinnerRotate\r\n{\r\n  from{-webkit-transform:rotate(0deg);}\r\n  to{-webkit-transform:rotate(360deg);}\r\n}\r\n@keyframes spinnerRotate\r\n{\r\n  from{-webkit-transform:rotate(0deg);transform:rotate(0deg);}\r\n  to{-webkit-transform:rotate(360deg);transform:rotate(360deg);}\r\n}\r\n.marshall-newsletter-content .marshall_submit {\r\n  background-color: #f61067;\r\n  border: 0 none;\r\n  display: block;\r\n  width: 100%;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding: 10px 0 12px;\r\n  -webkit-transition: width 0.4s ease 0s, border-radius 0.4s;\r\n  transition: width 0.4s ease 0s, border-radius 0.4s;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n.marshall-newsletter-content .marshall_submit:hover {\r\n  background-color: #E00A62;\r\n}\r\n.marshall-newsletter-content .marshall_submit::after {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/tick.png\");\r\n  background-size: 100% auto;\r\n  content: \"\";\r\n  display: block;\r\n  height: 20px;\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  width: 20px;\r\n  z-index: 9;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  margin-top: -10px;\r\n  margin-left: -10px;\r\n  -webkit-transition: transform 0.4s;\r\n  -webkit-transition: -webkit-transform 0.4s;\r\n  transition: -webkit-transform 0.4s;\r\n  transition: transform 0.4s;\r\n  transition: transform 0.4s, -webkit-transform 0.4s;\r\n}\r\n.marshall-newsletter-content.mform-submitting .marshall_submit {\r\n  border-radius: 50% !important;\r\n  height: 46px;\r\n  margin: auto;\r\n  text-indent: -9999px;\r\n  width: 46px !important;\r\n}\r\n.marshall-newsletter-content .marshall_submit::before {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  background-color: transparent;\r\n  border: 2px dashed #fff;\r\n  border-radius: 50%;\r\n  bottom: 3px;\r\n  content: \"\";\r\n  display: block;\r\n  left: 3px;\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 3px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  z-index: 2;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n  -webkit-transition-duration: 0.4s;\r\n          transition-duration: 0.4s;\r\n  -webkit-transition-timing-function: linear;\r\n          transition-timing-function: linear;\r\n  -webkit-transition-delay: 0;\r\n          transition-delay: 0;\r\n}\r\n.marshall-newsletter-content.mform-animate .marshall_submit::before {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: top 0.4s,left 0.4s,right 0.4s,bottom 0.4s, border-width 0.4s ease 0.4s;\r\n  -webkit-transition: top 0.4s,left 0.4s,right 0.4s,bottom 0.4s, border-width 0.4s ease 0.4s;\r\n  animation: 1s linear 0.4s normal none infinite running spinnerRotate;\r\n  -webkit-animation: 1s linear 0.4s normal none infinite running spinnerRotate;\r\n}\r\n.marshall-newsletter-content.mform-submitting.mform-success .marshall_submit::after {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n.marshall-newsletter-content.mform-animate.mform-submitting.mform-success .marshall_submit::before {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border-width: 0;\r\n}\r\n.marshall-newsletter-header.mfrom-header-animate-close .marshall-newsletter-animation-icons .animation-icon{\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  top: 0;\r\n  opacity: 0;\r\n}\r\n@-webkit-keyframes mformBounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -50px, 0);\r\n            transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 15px, 0);\r\n            transform: translate3d(0, 15px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n            transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n@keyframes mformBounceInDown {\r\n  from, 60%, 75%, 90%, to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -50px, 0);\r\n            transform: translate3d(0, -50px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 15px, 0);\r\n            transform: translate3d(0, 15px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n            transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n            transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n}\r\n.mformBounceInDown {\r\n  -webkit-animation-name: mformBounceInDown;\r\n          animation-name: mformBounceInDown;\r\n}\r\n.marshall-newsletter-header.mfrom-header-animate-close img {\r\n  -webkit-animation-name: mformBounceInDown;\r\n          animation-name: mformBounceInDown;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-delay: 0.4s;\r\n          animation-delay: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-direction: alternate;\r\n          animation-direction: alternate;\r\n}\r\n/* -----------------------------------------------------------------\r\n  13. Footer\r\n-------------------------------------------------------------------*/\r\n.footer-copyright {\r\n  margin-top: 60px;\r\n}\r\n.footer-copyright p{\r\n  margin: 0;\r\n}\r\n.position_footer {\r\n  bottom: 10px;\r\n  left: 40px;\r\n  position: absolute;\r\n  z-index: 3;\r\n}\r\n/* -----------------------------------------------------------------\r\n  14. Preset Animation Timting\r\n-------------------------------------------------------------------*/\r\n.fast {\r\n  -webkit-animation-delay: 1s;\r\n          animation-delay: 1s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.fast-medium {\r\n  -webkit-animation-delay: 1s;\r\n          animation-delay: 1s;\r\n  -webkit-animation-duration: 0.9s;\r\n          animation-duration: 0.9s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.medium {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n  -webkit-animation-duration: 0.9s;\r\n          animation-duration: 0.9s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.medium-fast {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.slow {\r\n  -webkit-animation-delay: 1.6s;\r\n          animation-delay: 1.6s;\r\n  -webkit-animation-duration: 0.9s;\r\n          animation-duration: 0.9s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.fast-child-1 {\r\n  -webkit-animation-delay: 1s;\r\n          animation-delay: 1s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-2 {\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-3 {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-4 {\r\n  -webkit-animation-delay: 1.4s;\r\n          animation-delay: 1.4s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-5 {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-6 {\r\n  -webkit-animation-delay: 1.6s;\r\n          animation-delay: 1.6s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-7 {\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-8 {\r\n  -webkit-animation-delay: 1.8s;\r\n          animation-delay: 1.8s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-9 {\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n.fast-child-10 {\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. FireWorks\r\n-------------------------------------------------------------------*/\r\ncanvas.fireworks {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. Sketch Particles\r\n-------------------------------------------------------------------*/\r\n#particles_container {\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. Particles canvas\r\n-------------------------------------------------------------------*/\r\n.mrs_canvas {\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v2\r\n-------------------------------------------------------------------*/\r\n.align-center {\r\n  text-align: center;\r\n}\r\n.align-center .marshall-logo {\r\n  margin-left: 50%;\r\n  position: absolute;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n.inner-content {\r\n  display: block;\r\n  margin-left: 15%;\r\n  position: absolute;\r\n  top: 50%;\r\n  visibility: visible;\r\n  width: 73%;\r\n}\r\n.inner-content.css-center {\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n.mrs-v2 .marshall-animate-content::after {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  bottom: 0;\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n.inner-content .big_title {\r\n  color: #fff;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v3\r\n-------------------------------------------------------------------*/\r\n.mrs-v3 .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  float: none;\r\n}\r\n.anounchment_element {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v3/cartoon.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% auto;\r\n  bottom: 10px;\r\n  height: 200px;\r\n  position: absolute;\r\n  right: 70px;\r\n  width: 200px;\r\n  z-index: 2;\r\n}\r\n.anounchment_element_layer {\r\n  background-color: #7bc4d3;\r\n  display: block;\r\n  height: 100vh;\r\n  min-height: 640px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 350px;\r\n  z-index: 0;\r\n}\r\n.anounchment_element_layer::before {\r\n  background-color: #fff;\r\n  border-radius: 100%;\r\n  content: \"\";\r\n  display: block;\r\n  height: 120%;\r\n  left: -50%;\r\n  position: absolute;\r\n  top: -10%;\r\n  -webkit-transform: rotate(-1deg);\r\n          transform: rotate(-1deg);\r\n  width: 100%;\r\n}\r\n.mrs-v3 .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content label {\r\n  bottom: -35px;\r\n}\r\n.mrs-v3.mrs-white .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  overflow: inherit;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v4\r\n-------------------------------------------------------------------*/\r\n.single-middle-popup.single_popup {\r\n  -webkit-animation: 3s ease 0s normal none infinite running mrs_pulse;\r\n  animation: 3s ease 0s normal none infinite running mrs_pulse;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  color: #000;\r\n  display: block;\r\n  height: 100px;\r\n  left: 50%;\r\n  line-height: 100px;\r\n  margin-left: -50px;\r\n  margin-top: -50px;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 50%;\r\n  width: 100px;\r\n}\r\n@-webkit-keyframes mrs_pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n            transform: scale3d(1.05, 1.05, 1.05);\r\n    background-color: #f61067;\r\n    color: #FFF;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n}\r\n@keyframes mrs_pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n            transform: scale3d(1.05, 1.05, 1.05);\r\n    background-color: #f61067;\r\n    color: #FFF;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n}\r\n.mrs_pulse {\r\n  -webkit-animation-name: mrs_pulse;\r\n          animation-name: mrs_pulse;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. V5\r\n-------------------------------------------------------------------*/\r\n.marshall-screen-left .marshall-logo {\r\n  margin-left: 40px;\r\n  margin-top: 20px;\r\n  width: 90px;\r\n  z-index: 3;\r\n}\r\n.marshall-screen-left .marshall-logo img {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n.marshall-screen-left .marshall-social-column {\r\n  left: 40px;\r\n  z-index: 3;\r\n  color: #FFF;\r\n}\r\n.stay_connent_with_social {\r\n  margin-top: 45px;\r\n  text-align: center;\r\n}\r\n.single_large_title {\r\n  font-family: inherit;\r\n  font-size: 2.3em;\r\n  font-weight: 800;\r\n  margin-top: 10px;\r\n  text-align: center;\r\n}\r\n.single_large_title:first-child {\r\n  margin-top: 0;\r\n}\r\n.big_title {\r\n  color: #1e60ec;\r\n  font-size: 3.5em;\r\n}\r\n.short_description {\r\n  margin: 35px auto auto;\r\n  text-align: center;\r\n}\r\n.mrs-v6 .short_description {\r\n  margin: 35px auto auto;\r\n  width: 65%;\r\n}\r\n.stay_connent_with_social h5 {\r\n  color: #2c3346;\r\n  font-size: 0.9em;\r\n  font-weight: bold;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n.stay_connent_with_social ul {\r\n  list-style: outside none none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.stay_connent_with_social li {\r\n  display: inline-block;\r\n}\r\n.stay_connent_with_social li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 0.85em;\r\n  line-height: 1;\r\n  margin: 0 5px;\r\n  padding: 10px 30px;\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.stay_connent_with_social li a:hover,\r\n.stay_connent_with_social li a:focus,\r\n.stay_connent_with_social li a:active {\r\n  color: #FFF;\r\n}\r\n.stay_connent_with_social li a i {\r\n  margin-right: 7px;\r\n}\r\n.fb_social {\r\n  background-color: #3b5999;\r\n}\r\n.tw_social{\r\n  background-color: #55acef;\r\n}\r\n.gp_social{\r\n  background-color: #E14A39;\r\n}\r\n.fb_social:focus,\r\n.fb_social:active,\r\n.fb_social:hover {\r\n  background-color: #3189CE;\r\n}\r\n.tw_social:hover,\r\n.tw_social:focus,\r\n.tw_social:active {\r\n  background-color: #263D6F;\r\n}\r\n.gp_social:hover,\r\n.gp_social:focus,\r\n.gp_social:active{\r\n  background-color: #C23121;\r\n}\r\n.divided_or {\r\n  border-top: 1px solid #e9eaee;\r\n  margin-bottom: 30px;\r\n  margin-top: 40px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.divided_or span {\r\n  background-color: #fff;\r\n  left: 50%;\r\n  padding: 0 10px;\r\n  position: absolute;\r\n  text-transform: uppercase;\r\n  top: 0;\r\n  -webkit-transform: translateY(-14px) translateX(-50%);\r\n          transform: translateY(-14px) translateX(-50%);\r\n}\r\n.default_mrs_newsletter {\r\n  text-align: center;\r\n}\r\n.default_mrs_newsletter .marshall-newsletter-content input {\r\n  border-radius: 40px;\r\n  margin: auto auto 20px;\r\n  -webkit-transition: all 0.4s linear 0s;\r\n  transition: all 0.4s linear 0s;\r\n  width: 90%;\r\n}\r\n.default_mrs_newsletter .marshall-newsletter-content .marshall_submit {\r\n  background-color: #1c52ce;\r\n  border-radius: 30px;\r\n  margin-top: 20px;\r\n  width: 40%;\r\n}\r\n.default_mrs_newsletter .marshall-newsletter-content {\r\n  margin-top: 30px;\r\n  width: 90%;\r\n}\r\n.mrs-v5 .marshall-col-content {\r\n  min-height: 620px;\r\n  overflow: auto;\r\n}\r\n.default_mrs_newsletter .marshall-newsletter-content input:focus {\r\n  background-color: #fff;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  -webkit-box-shadow: 0 0 0;\r\n          box-shadow: 0 0 0;\r\n}\r\n.marshall-screen-left .position_footer {\r\n  color: #FFF;\r\n}\r\n.marshall-col-7 .marshall-content {\r\n  width: 73%;\r\n}\r\n.marshall-video-trailer {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v7/square.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0 10px 7px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0 10px 7px rgba(0, 0, 0, 0.3);\r\n  height: 160px;\r\n  margin-top: 35px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 250px;\r\n}\r\n.marshall-video-trailer a {\r\n  color: rgba(0, 0, 0, 0.6);\r\n  cursor: pointer;\r\n  font-size: 4em;\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%) translateX(-50%);\r\n  transform: translateY(-50%) translateX(-50%);\r\n  z-index: 1;\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.marshall-video-trailer a:hover,\r\n.marshall-video-trailer a:focus,\r\n.marshall-video-trailer a:active {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.mfp-fade.mfp-bg {\r\n  opacity: 0;\r\n  -webkit-transition: all 0.15s ease-out;\r\n  transition: all 0.15s ease-out;\r\n}\r\n.mfp-fade.mfp-bg.mfp-ready {\r\n  opacity: 0.8;\r\n}\r\n.mfp-fade.mfp-bg.mfp-removing {\r\n  opacity: 0;\r\n}\r\n.mfp-fade.mfp-wrap .mfp-content {\r\n  opacity: 0;\r\n  -webkit-transition: all 0.15s ease-out;\r\n  transition: all 0.15s ease-out;\r\n}\r\n.mfp-fade.mfp-wrap.mfp-ready .mfp-content {\r\n  opacity: 1;\r\n}\r\n.mfp-fade.mfp-wrap.mfp-removing .mfp-content {\r\n  opacity: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. Static Content\r\n-------------------------------------------------------------------*/\r\n.marshall-static-content {\r\n  height: 100vh;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.marshall-full-contact-area {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n.marshall-full-contact-area {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  color: #232428;\r\n  left: 50%;\r\n  padding: 30px 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%) translateX(-50%);\r\n  transform: translateY(-50%) translateX(-50%);\r\n  width: 90%;\r\n  -webkit-box-shadow: 0 10px 7px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0 10px 7px rgba(0, 0, 0, 0.3);\r\n}\r\n.marshall-full-contact-area h5 {\r\n  border-bottom: 1px solid #e9eaee;\r\n  font-size: 1.5em;\r\n  margin: 20px 0 0;\r\n  padding-bottom: 20px;\r\n  text-align: center;\r\n}\r\n.marshall-full-contact-area .stay_connent_with_social {\r\n  margin-top: 25px;\r\n}\r\n.marshall-full-contact-area .divided_or {\r\n  margin: 40px auto 30px;\r\n  width: 80%;\r\n}\r\n.marshall-col-6.marshall-middle-6.marshall-col-content {\r\n  margin-left: 25%;\r\n  text-align: center;\r\n}\r\n.marshall-middle-6 .marshall-logo {\r\n  left: 50%;\r\n  margin-left: 0;\r\n  position: absolute;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n.marshall-middle-6 .fat_title {\r\n  font-size: 4em;\r\n  font-weight: 800;\r\n}\r\n.marshall-middle-6 .stay_connent_with_social {\r\n  bottom: 30px;\r\n  left: 50%;\r\n  margin-top: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n.marshall-middle-6 .stay_connent_with_social h5 {\r\n  color: #FFF;\r\n}\r\n.marshall-middle-6 .stay_connent_with_social li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 40px;\r\n}\r\n.marshall-middle-6 .stay_connent_with_social li a i {\r\n  margin-right: 0;\r\n}\r\n.mrs-v8 .bg-container {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v8/wave.jpg\");\r\n  height: 100%;\r\n  position: absolute;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v9\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v9 {\r\n  background-color: #FFF;\r\n  color: #232428;\r\n}\r\nbody.mrs-v9 .morph-button-modal-2 > button,\r\nbody.mrs-v9 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\nbody.mrs-v9 .marshall-newsletter-description > p {\r\n  color: #fff;\r\n}\r\nbody.mrs-v9 .marshall-social-links a {\r\n  color: #000;\r\n}\r\nbody.mrs-v9 .marshall-fit-column {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v9/bark.jpg\");\r\n}\r\n.marshall-simple-content h2 {\r\n  color: #fff;\r\n  font-size: 2em;\r\n  line-height: 1.3;\r\n}\r\n.marshall-simple-content h2.small_h2 {\r\n  font-weight: 800;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v10\r\n-------------------------------------------------------------------*/\r\n.mrs-v10 .content_overley {\r\n  opacity: 0.2;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v11\r\n-------------------------------------------------------------------*/\r\n#marshall-canvas {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  background-color: transparent;\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v11/wild-mountain.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\nbody.mrs-v11 .fat_title {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\nbody.mrs-v11 .marshall-content {\r\n  display: block;\r\n  margin-left: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  visibility: visible;\r\n  width: 100%;\r\n}\r\nbody.mrs-v11 .marshall-middle-6 .fat_title {\r\n  text-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);\r\n}\r\nbody.mrs-v11 .marshall-middle-6 .stay_connent_with_social h5,\r\nbody.mrs-v11 .short_description {\r\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v12\r\n-------------------------------------------------------------------*/\r\n.bg-container {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v12/building.jpg\");\r\n}\r\n.marshall-animate-content[data-animation=\"mrs-slideToggle\"] {\r\n  -webkit-transform: translate3d(100%, 0px, 0px);\r\n  transform: translate3d(100%, 0px, 0px);\r\n  -webkit-transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1) 0s;\r\n  transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1) 0s;\r\n  visibility: visible;\r\n  z-index: 1;\r\n}\r\n.marshall-animate-content.mrs-slideToggle[data-animation=\"mrs-slideToggle\"] {\r\n  -webkit-transform: translate3d(0px, 0px, 0px);\r\n  transform: translate3d(0px, 0px, 0px);\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v13\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v13 .fat_title {\r\n  font-family: \"Work Sans\",sans-serif;\r\n}\r\n.position_footer.align-left {\r\n  bottom: 30px;\r\n  left: 30px;\r\n  margin: 0;\r\n  position: absolute;\r\n  z-index: 3;\r\n}\r\n.stay_connent_with_social.align-right {\r\n  bottom: 30px;\r\n  margin: 0;\r\n  position: absolute;\r\n  right: 30px;\r\n  z-index: 3;\r\n}\r\n.stay_connent_with_social.align-right li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 40px;\r\n}\r\n.stay_connent_with_social.align-right li a i {\r\n  margin-right: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v14\r\n-------------------------------------------------------------------*/\r\n#instagram_feed {\r\n  list-style: outside none none;\r\n  margin: 0;\r\n  padding: 0;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n#instagram_feed::after {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n#instagram_feed::before {\r\n  border-radius: 5px;\r\n  color: #fff;\r\n  content: \"\\F16D\";\r\n  display: block;\r\n  font-family: \"fontawesome\";\r\n  font-size: 6em;\r\n  left: 50%;\r\n  line-height: 1;\r\n  padding: 10px;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%) translateX(-50%);\r\n  transform: translateY(-50%) translateX(-50%);\r\n  z-index: 3;\r\n}\r\n.in_item img {\r\n  display: block;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\nbody.mrs-v14 {\r\n  background-color: #fff;\r\n  color: #232428;\r\n}\r\nbody.mrs-v14 .marshall-social-links a {\r\n  color: #000;\r\n}\r\nbody.mrs-v14 .morph-button-modal-2 > button,\r\nbody.mrs-v14 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\nbody.mrs-v14 .marshall-fit-column {\r\n  background-image: none;\r\n}\r\nbody.mrs-v14 .marshall-logo img {\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v15\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v15 {\r\n  background-color: #fff;\r\n  color: #232428;\r\n}\r\nbody.mrs-v15 .marshall-social-links a {\r\n  color: #000;\r\n}\r\nbody.mrs-v15 .morph-button-modal-2 > button,\r\nbody.mrs-v15 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\nbody.mrs-v15 .marshall-fit-column {\r\n  background-image: none;\r\n}\r\nbody.mrs-v15 .marshall-logo img {\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n}\r\nbody.mrs-v15 .marshall-middle-6 .stay_connent_with_social h5 {\r\n  color: #333;\r\n}\r\nbody.mrs-v15 .marshall-middle-6 .stay_connent_with_social {\r\n  bottom: inherit;\r\n  left: inherit;\r\n  margin-top: 35px;\r\n  position: relative;\r\n  text-align: center;\r\n  -webkit-transform: inherit;\r\n          transform: inherit;\r\n}\r\n#instagram_slider {\r\n  bottom: 0;\r\n  left: 0;\r\n  list-style: outside none none;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: absolute;\r\n}\r\n.default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  background-color: #fff;\r\n  border-radius: 40px;\r\n  margin-top: 30px;\r\n  width: 80%;\r\n  float: left;\r\n  position: relative;\r\n}\r\n.default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content input {\r\n  float: left;\r\n  margin: auto auto 0;\r\n  width: calc(80% - 30px);\r\n  background-color: transparent;\r\n}\r\nbody.mrs-white .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content input:active,\r\nbody.mrs-white .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content input:hover,\r\nbody.mrs-white .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content input:focus {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border: 0px solid;\r\n  outline: none\r\n}\r\n.default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content .marshall_submit {\r\n  float: right;\r\n  margin-right: 5px;\r\n  margin-top: 4px;\r\n  padding: 10px 0;\r\n  width: 80px;\r\n}\r\n.default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content label {\r\n  bottom: -50px;\r\n  display: block;\r\n  font-size: 0.8em;\r\n  margin-top: 5px;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v16\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v16 {\r\n  background-color: #f1f2ed;\r\n}\r\nbody.mrs-v16 .marshall-container {\r\n  background-color: #fb3669;\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/bg.png\");\r\n  background-repeat: repeat;\r\n  background-size: auto;\r\n}\r\n.marshall-content-close.default_close_active {\r\n  display: block;\r\n}\r\n.info_box {\r\n  bottom: 20px;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n.info_box h3 {\r\n  margin: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v17\r\n-------------------------------------------------------------------*/\r\n.video-wrapper {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 99;\r\n}\r\n.jarallax {\r\n  min-height: 100vh;\r\n}\r\n.mrs-white {\r\n  background-color: #FFF;\r\n  color: #232428;\r\n}\r\n.mrs-white .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  border: 1px solid #efe9e9;\r\n}\r\nbody.mrs-white .marshall-social-links a {\r\n  color: #000;\r\n}\r\nbody.mrs-white .default_mrs_newsletter .marshall-newsletter-content input:focus,\r\nbody.mrs-white .default_mrs_newsletter .marshall-newsletter-content input:active,\r\nbody.mrs-white .default_mrs_newsletter .marshall-newsletter-content input:hover {\r\n  background-color: #fff;\r\n  border: 0 none;\r\n  border-radius: 0;\r\n  -webkit-box-shadow: 0 0 0;\r\n          box-shadow: 0 0 0;\r\n  outline: medium none;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v18\r\n-------------------------------------------------------------------*/\r\n.rocket-wrapper .rocket {\r\n  height: 340px;\r\n  position: relative;\r\n  width: 170px;\r\n  z-index: 9;\r\n}\r\n.rocket-wrapper .flame {\r\n  bottom: -157px;\r\n  height: 200px;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  right: 0;\r\n  width: 100px;\r\n  z-index: 0;\r\n}\r\n.rocket-wrapper .flame img {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.rocket-wrapper .fire {\r\n  bottom: -62px;\r\n  height: 120px;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  right: 0;\r\n  -webkit-transform: none;\r\n          transform: none;\r\n  -webkit-transform-origin: center top 0;\r\n          transform-origin: center top 0;\r\n  width: 80px;\r\n  z-index: 5;\r\n}\r\n.rocket-wrapper .fire img {\r\n  -webkit-animation: 0.05s ease 0s alternate none infinite running jet;\r\n          animation: 0.05s ease 0s alternate none infinite running jet;\r\n  height: 100%;\r\n  -webkit-transform: translateZ(0px);\r\n          transform: translateZ(0px);\r\n  -webkit-transform-origin: center top 0;\r\n          transform-origin: center top 0;\r\n  width: 100%;\r\n}\r\n@keyframes jet {\r\n  0% {\r\n    -webkit-transform: translateY(5px);\r\n            transform: translateY(5px);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(20px);\r\n            transform: translateY(20px);\r\n  }\r\n}\r\n@-webkit-keyframes jet {\r\n  0% {\r\n    -webkit-transform: translateY(5px);\r\n    transform: translateY(5px);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n.rocket-wrapper {\r\n  left: calc(50% + 55px);\r\n  position: absolute;\r\n  top: calc(50% - 29px);\r\n  -webkit-transform: translateY(-50%) translateX(-50%) rotate(45deg);\r\n          transform: translateY(-50%) translateX(-50%) rotate(45deg);\r\n  width: 170px;\r\n}\r\n.sprit_falling {\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n  width: 100%;\r\n}\r\n.sprit_falling span {\r\n  background: #fff none repeat scroll 0 0;\r\n  height: 2px;\r\n  position: absolute;\r\n  width: 20%;\r\n}\r\n.sprit_falling span:nth-child(1) {\r\n  -webkit-animation: 0.6s linear -5s normal none infinite running lf;\r\n          animation: 0.6s linear -5s normal none infinite running lf;\r\n  top: 20%;\r\n}\r\n.sprit_falling span:nth-child(2) {\r\n  -webkit-animation: 0.8s linear -1s normal none infinite running lf2;\r\n          animation: 0.8s linear -1s normal none infinite running lf2;\r\n  top: 40%;\r\n}\r\n.sprit_falling span:nth-child(3) {\r\n  -webkit-animation: 0.6s linear 0s normal none infinite running lf3;\r\n          animation: 0.6s linear 0s normal none infinite running lf3;\r\n  top: 60%;\r\n}\r\n.sprit_falling span:nth-child(4) {\r\n  -webkit-animation: 0.5s linear -3s normal none infinite running lf4;\r\n          animation: 0.5s linear -3s normal none infinite running lf4;\r\n  top: 80%;\r\n}\r\n@-webkit-keyframes lf {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes lf {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes lf2 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes lf2 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes lf3 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes lf3 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes lf4 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes lf4 {\r\n  0% {\r\n    left: 200%;\r\n  }\r\n  100% {\r\n    left: -100%;\r\n    opacity: 0;\r\n  }\r\n}\r\n.marshall-animate-content.mrs-active.marshall-bg-column {\r\n  background-color: #20222b;\r\n}\r\n#geometric {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.canvas_overley {\r\n  background-color: #fff;\r\n  bottom: 0;\r\n  left: 0;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v19\r\n-------------------------------------------------------------------*/\r\n.mrs-v19 .single_large_title {\r\n  color: #b6b6b6;\r\n  text-align: left;\r\n}\r\n.mrs-v19 .marshall-content h4 {\r\n  color: #9a9ca8;\r\n  font-size: 1.3em;\r\n}\r\n.mrs-v19 .marshall-content h3 {\r\n  line-height: 1.3;\r\n}\r\n.mrs-v19 .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  background-color: rgba(231, 231, 233, 0.7);\r\n  border-radius: 40px;\r\n  float: left;\r\n  margin-top: 0;\r\n  position: relative;\r\n  width: 80%;\r\n}\r\n.mrs-v19 .default_mrs_newsletter .marshall-newsletter-content input:focus {\r\n  background-color: transparent;\r\n  -webkit-box-shadow: 0 0 0;\r\n          box-shadow: 0 0 0;\r\n  border-radius: 0;\r\n}\r\n.mrs-v19 .default_mrs_newsletter.mrs_inline_newsletter  p {\r\n  display: block;\r\n  margin-left: 18px;\r\n  text-align: left;\r\n}\r\n.mrs-v19 .default_mrs_newsletter.mrs_inline_newsletter {\r\n  margin-top: 30px;\r\n}\r\n.mrs-v19 .stay_connent_with_social {\r\n  bottom: 30px;\r\n  left: 40px;\r\n  margin-top: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  z-index: 9;\r\n}\r\n.mrs-v19 .stay_connent_with_social li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 40px;\r\n}\r\n.mrs-v19 .stay_connent_with_social li a i {\r\n  margin-right: 0;\r\n}\r\nbody.mrs-v19 .morph-button-modal-2 > button,\r\nbody.mrs-v19 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v20\r\n-------------------------------------------------------------------*/\r\n.Background {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.Background::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent 50%, rgba(0, 0, 0, 0.5));\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .Background::after {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.9)), color-stop(80%, transparent), to(rgba(0, 0, 0, 0.5)));\r\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 80%, rgba(0, 0, 0, 0.5));\r\n  }\r\n}\r\nbody.mrs-v20 .marshall-middle-6 .fat_title {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v21\r\n-------------------------------------------------------------------*/\r\n.mrs-hero-overley {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  min-height: 640px;\r\n}\r\n.clouds_one {\r\n  background: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v21/cloud_one.png\");\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 300%;\r\n  -webkit-animation: cloud_one 50s linear infinite;\r\n  -moz-animation: cloud_one 50s linear infinite;\r\n  -o-animation: cloud_one 50s linear infinite;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -moz-transform: translate3d(0, 0, 0);\r\n  -o-transform: translate3d(0, 0, 0);\r\n  min-height: 640px;\r\n}\r\n.clouds_two {\r\n  background: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v21/cloud_two.png\");\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 300%;\r\n  -webkit-animation: cloud_two 75s linear infinite;\r\n  -moz-animation: cloud_two 75s linear infinite;\r\n  -o-animation: cloud_two 75s linear infinite;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -moz-transform: translate3d(0, 0, 0);\r\n  -o-transform: translate3d(0, 0, 0);\r\n  min-height: 640px;\r\n}\r\n.clouds_three {\r\n  background: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v21/cloud_three.png\");\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 300%;\r\n  -webkit-animation: cloud_three 100s linear infinite;\r\n  -moz-animation: cloud_three 100s linear infinite;\r\n  -o-animation: cloud_three 100s linear infinite;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -moz-transform: translate3d(0, 0, 0);\r\n  -o-transform: translate3d(0, 0, 0);\r\n  min-height: 640px;\r\n}\r\n@-webkit-keyframes cloud_one {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n@-webkit-keyframes cloud_two {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n@-webkit-keyframes cloud_three {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n@keyframes cloud_one {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n@keyframes cloud_two {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n@keyframes cloud_three {\r\n  0% {\r\n    left: 0\r\n  }\r\n  100% {\r\n    left: -200%\r\n  }\r\n}\r\n.mrs-v21 h1 {\r\n  color: #333;\r\n  font-size: 4em;\r\n}\r\n.mrs-v21 h1 strong{\r\n  font-family: \"Work Sans\",sans-serif;\r\n}\r\nbody.mrs-v21 .marshall-content {\r\n  display: block;\r\n  left: 50%;\r\n  margin-left: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  visibility: visible;\r\n  width: 90%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v22\r\n-------------------------------------------------------------------*/\r\n.Background {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.Background::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.2) linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent 50%, rgba(0, 0, 0, 0.5)) repeat scroll 0 0;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .Background::after {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.9)), color-stop(80%, transparent), to(rgba(0, 0, 0, 0.5)));\r\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent 80%, rgba(0, 0, 0, 0.5));\r\n  }\r\n}\r\nbody.mrs-v22 .marshall-middle-6 .fat_title {\r\n  font-family: 'Work Sans', sans-serif;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v23\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v23 {\r\n  background: rgba(0, 0, 0, 0) url(\"https://pixiefy.com/themes/marshall/html/v24/images/v23/confetti.svg\") repeat scroll center center;\r\n  color: #969696;\r\n}\r\nbody.mrs-v23 .marshall-content h2{\r\n  color: #424242;\r\n}\r\nbody.mrs-v23 .marshall-content h2 {\r\n  color: #424242;\r\n  font-size: 1.6em;\r\n  font-weight: bold;\r\n  margin-bottom: 35px;\r\n  margin-top: 0;\r\n}\r\n.marhall-maintain-thumb {\r\n  margin: auto;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n.marhall-maintain-thumb img{\r\n  display: block;\r\n}\r\nbody.mrs-v24 .marshall-content h4 {\r\n  font-size: 1.4em;\r\n  line-height: 1.5;\r\n}\r\nbody.mrs-v23 .marshall-col-content {\r\n  min-height: 600px;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v24\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v24 {\r\n  background: #F1F1F1;\r\n  color: #969696;\r\n}\r\n.marshall-bg-overley {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.06;\r\n  background: rgba(0, 0, 0, 0) url(\"https://pixiefy.com/themes/marshall/html/v24/images/v24/confetti.svg\") repeat scroll center center;\r\n}\r\nbody.mrs-v24 .marshall-content h2{\r\n  color: #424242;\r\n}\r\nbody.mrs-v24 .marshall-content h2 {\r\n  color: #424242;\r\n  font-size: 1.6em;\r\n  font-weight: bold;\r\n  margin-bottom: 35px;\r\n  margin-top: 0;\r\n}\r\n.marhall-maintain-thumb {\r\n  margin: auto;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n.marhall-maintain-thumb img{\r\n  display: block;\r\n}\r\nbody.mrs-v24 .marshall-content h4 {\r\n  font-size: 1.4em;\r\n  line-height: 1.5;\r\n}\r\nbody.mrs-v24 .marshall-col-content {\r\n  min-height: 600px;\r\n}\r\n.simple-logo {\r\n  margin: 40px auto auto;\r\n  opacity: 0.3;\r\n  width: 100px;\r\n}\r\nbody.mrs-v24 .marshall-content a,\r\nbody.mrs-v24 .marshall-content a:hover,\r\nbody.mrs-v24 .marshall-content a:focus,\r\nbody.mrs-v24 .marshall-content a:active {\r\n  color: #90C145;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v25\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v25 > .marshall-container {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v25/bg.png\");\r\n  background-repeat: repeat;\r\n  background-size: auto;\r\n}\r\n.mrs_background_slider {\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v26\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v26 {\r\n  background-color: #f1f2ed;\r\n}\r\nbody.mrs-v26 > .marshall-container {\r\n  background-color: #56c2df;\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v26/bg.png\");\r\n  background-repeat: repeat;\r\n  background-size: auto;\r\n}\r\n.marshall-content-close.default_close_active {\r\n  display: block;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v27\r\n-------------------------------------------------------------------*/\r\n.mrs_google_map {\r\n  height: calc(100vh + 35px);\r\n  width: 100%;\r\n}\r\n.bg-content {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n.bg-content::after {\r\n  background-color: rgba(51, 51, 51, 0.5);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.mrs-v27 .marshall-fit-column {\r\n  background: none;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v28\r\n-------------------------------------------------------------------*/\r\ncanvas.mrs-canvas {\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\nbody.mrs-v28 {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v28/bg.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-size: cover;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v29\r\n-------------------------------------------------------------------*/\r\n@keyframes slide {\r\n  from{\r\n    background-position:100vw;\r\n  }\r\n  to{\r\n    background-position:9932px;\r\n  }\r\n}\r\n@-webkit-keyframes slide {\r\n  from{\r\n    background-position:100vw;\r\n  }\r\n  to{\r\n    background-position:9932px;\r\n  }\r\n}\r\nbody.mrs-v29{\r\n  background:url(https://upload.wikimedia.org/wikipedia/commons/f/fa/Trafalgar_Square_360_Panorama_Cropped_Sky%2C_London_-_Jun_2009.jpg);\r\n  background-size: auto 100%;\r\n  animation: slide 500s linear infinite;\r\n  -webkit-animation: slide 500s linear infinite;\r\n  position: relative;\r\n}\r\nbody.mrs-v29::before {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/pattern.png\");\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v30\r\n-------------------------------------------------------------------*/\r\n.mrs-app-slider-area {\r\n  height: 320px;\r\n  left: 50%;\r\n  margin: auto;\r\n  padding: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%) translateX(-50%);\r\n          transform: translateY(-50%) translateX(-50%);\r\n  width: 200px;\r\n}\r\n#mrs_app_slider {\r\n  height: 100%;\r\n  left: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.mrs_app_body {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v30/iphone.png\");\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  bottom: -64px;\r\n  display: block;\r\n  left: -16px;\r\n  position: absolute;\r\n  right: -16px;\r\n  top: -63px;\r\n}\r\n.mrs-v30 .marshall-animate-content {\r\n  background: #FFF url(\"https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png\") repeat scroll center center;\r\n}\r\n.mrs-v30 .bg-content::after {\r\n  display: none;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v31\r\n-------------------------------------------------------------------*/\r\n.mrs-v31 .marshall-content h1 span {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\nbody.mrs-v31 {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v31/bg.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-size: cover;\r\n}\r\n.mrs-canvas.jquery-ripples {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 39;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v32\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v32 {\r\n  background-color: #fff;\r\n  color: #232428;\r\n}\r\n.mrs-v32 .marshall-content h1 span {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  color: #5f9434;\r\n}\r\nbody.mrs-v32 canvas {\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\nbody.mrs-v32 .stay_connent_with_social.align-right {\r\n  z-index: 9;\r\n}\r\nbody.mrs-v32 .morph-button-modal-2 > button,\r\nbody.mrs-v32 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\nbody.mrs-v32 .marshall-newsletter-description > p {\r\n  color: #fff;\r\n}\r\nbody.mrs-v32 span.close-newsletter {\r\n  color: #fff;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. fill version + v33\r\n-------------------------------------------------------------------*/\r\nbody.mrs-fill canvas {\r\n  height: 100%;\r\n  left: 0;\r\n  min-height: 640px;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\nbody.mrs-fill .marshall-button-group .marshall-btn,\r\nbody.mrs-fill .marshall-button-group .marshall-btn-text {\r\n  margin: -3px 0 0 20px;\r\n}\r\nbody.mrs-fill .marshall-btn {\r\n  padding: 9px 30px;\r\n}\r\nbody.mrs-fill .marshall-btn:hover,\r\nbody.mrs-fill .marshall-btn:focus,\r\nbody.mrs-fill .marshall-btn:active {\r\n  background-color: #f61067;\r\n  border-style: #f61067;\r\n}\r\n.marshall-animate-content[data-animation=\"mrs-lightSpeedIn\"] {\r\n  -webkit-backface-visibility: visible;\r\n          backface-visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transform: translate3d(calc(100% + 30vw), 0px, 0px) skewX(-30deg);\r\n          transform: translate3d(calc(100% + 30vw), 0px, 0px) skewX(-30deg);\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n  visibility: visible;\r\n  z-index: 5;\r\n}\r\n.marshall-animate-content.mrs-lightSpeedIn[data-animation=\"mrs-lightSpeedIn\"] {\r\n  -webkit-transform: translate3d(0, 0px, 0px) skewX(0);\r\n          transform: translate3d(0, 0px, 0px) skewX(0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n  -webkit-backface-visibility: visible;\r\n          backface-visibility: visible;\r\n}\r\n.newsletter-modal-oepn #marshall-details {\r\n  z-index: 0 !important;\r\n}\r\n#marshall-close-content-slide {\r\n  z-index: 6;\r\n}\r\n.marshall-col-content{\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.marshall-col-content.mrs-default-content-off {\r\n  margin-left: 0 !important;\r\n  -webkit-transform: perspective(1000px) rotate3d(0, 1, 0, 60deg) scale(0.8);\r\n          transform: perspective(1000px) rotate3d(0, 1, 0, 60deg) scale(0.8);\r\n  -webkit-transition: all 0.4s ease 0s;\r\n  transition: all 0.4s ease 0s;\r\n  position: relative;\r\n}\r\n.marshall-col-content.mrs-default-content-off::after {\r\n  background-color: transparent;\r\n  content: \"\";\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\nbody.mrs-fill .marshall-container {\r\n  overflow-y: hidden;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v35\r\n-------------------------------------------------------------------*/\r\n.simply-section {\r\n  float: left;\r\n  width: 25%;\r\n}\r\n.simply-countdown-column {\r\n  margin: 30px 0;\r\n}\r\n.simply-section span {\r\n  display: block;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n.simply-amount {\r\n  font-family: 'Iceberg', cursive;\r\n  font-size: 2.5em;\r\n}\r\nbody.mrs-v35 {\r\n  background-color: #fff;\r\n  color: #232428;\r\n}\r\n.mrs-v35 .clouds_one {\r\n  background: rgba(0, 0, 0, 0) url(\"https://pixiefy.com/themes/marshall/html/v24/images/v35/cloud_one.png\") repeat scroll 0 0\r\n}\r\n.mrs-v35 .clouds_two {\r\n  background: rgba(0, 0, 0, 0) url(\"https://pixiefy.com/themes/marshall/html/v24/images/v35/cloud_two.png\") repeat scroll 0 0\r\n}\r\n.mrs-v35 .clouds_three {\r\n  background: rgba(0, 0, 0, 0) url(\"https://pixiefy.com/themes/marshall/html/v24/images/v35/cloud_three.png\") repeat scroll 0 0\r\n}\r\nbody.mrs-v35 .morph-button-modal-2 > button,\r\nbody.mrs-v35 .morph-button-modal-2 .morph-content {\r\n  background-color: #232428;\r\n  color: #fff;\r\n}\r\nbody.mrs-v35 .marshall-social-links a {\r\n  color: #232428;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v36\r\n-------------------------------------------------------------------*/\r\nbody.vegas-container.mrs-v36 {\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v39\r\n-------------------------------------------------------------------*/\r\n#gradient-animation {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v39/forest.jpg\");\r\n  background-size: cover;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v40\r\n-------------------------------------------------------------------*/\r\n#gradient-animation {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v41\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v41 {\r\n  color: #999999;\r\n}\r\nbody.mrs-v41 h1,\r\nbody.mrs-v41 .marshall-social-links a {\r\n  color: rgba(163, 32, 109, 0.6);\r\n}\r\n.animate-bg-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: transparent;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(114, 81, 109, 0.2)), to(#eeeeee));\r\n  background: linear-gradient(to bottom, rgba(114, 81, 109, 0.2) 0%, #eeeeee 100%);\r\n  z-index: 3;\r\n}\r\n.animate-background {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #EEEEEE;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  min-height: 640px;\r\n}\r\n.animate-background #hero-canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v42\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v42 {\r\n  color: #111;\r\n}\r\nbody.mrs-v42 .marshall-social-links a {\r\n  color: #FF8B56;\r\n}\r\nbody.mrs-v42 .morph-button-modal-2 > button,\r\nbody.mrs-v42 .morph-button-modal-2 .morph-content,\r\nbody.mrs-v42 .morph-button-modal-3 > button,\r\nbody.mrs-v42 .morph-button-modal-3 .morph-content {\r\n  background-color: #111;\r\n  color: #fff;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v43\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v43 {\r\n  background-color: #020202;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v44\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v44 {\r\n  background: rgba(0, 0, 0, 0) radial-gradient(circle, #fbb600, #da5900) repeat scroll 0 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v45\r\n-------------------------------------------------------------------*/\r\n.overley-background {\r\n  bottom: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n.canvas-overley {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v46\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v46 .marshall-social-links a,\r\nbody.mrs-v46 .marshall-social-column {\r\n  color: #111;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v47\r\n-------------------------------------------------------------------*/\r\nbody.mrs-color {\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#facf07+0,facf07+36,e8a501+100 */\r\n  background: #facf07; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: -webkit-gradient(linear,  left top, left bottom,  from(#facf07),color-stop(36%, #facf07),to(#e8a501));\r\n  background: linear-gradient(to bottom,  #facf07 0%,#facf07 36%,#e8a501 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#facf07', endColorstr='#e8a501',GradientType=0 ); /* IE6-9 */\r\n}\r\n.stay_connent_with_social.marshall-top-right li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 40px;\r\n}\r\n.stay_connent_with_social.marshall-top-right li a i {\r\n  margin-right: 0;\r\n}\r\nbody.mrs-color .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  float: none;\r\n}\r\n.mrs-color .simply-countdown-column {\r\n  margin-top: 45px;\r\n}\r\n.mrs-v47 .big_title {\r\n  color: #fff;\r\n}\r\n.mrs-color .simply-section span.simply-amount,\r\n.mrs-color .simply-section span.simply-word {\r\n  font-weight: bold;\r\n  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);\r\n  text-transform: uppercase;\r\n}\r\n.mrs-v47 .short_description,\r\n.mrs-v48 .short_description {\r\n  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v48\r\n-------------------------------------------------------------------*/\r\n#bg-canvas {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n}\r\n#bg-canvas canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.margin-top.default_mrs_newsletter {\r\n  margin-top: 50px;\r\n}\r\n.mrs-v48 .default_mrs_newsletter.mrs_inline_newsletter .marshall-newsletter-content {\r\n  width: 90%;\r\n}\r\n.mrs-v48 .mrs-color .simply-countdown-column {\r\n  margin-top: 30px;\r\n}\r\n.mrs-v48 .cd-headline.clip .cd-words-wrapper::after {\r\n  background-color: #FFF;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v49\r\n-------------------------------------------------------------------*/\r\nbody.mrs-color.mrs-v49 {\r\n  background: #131623 none repeat scroll 0 0;\r\n}\r\n#rainy_day_canvas {\r\n  bottom: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  min-height: 640px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.coundown-border-inline {\r\n  border-bottom: 2px solid;\r\n  border-right: 2px solid;\r\n  border-top: 2px solid;\r\n}\r\n.coundown-border-inline .simply-section {\r\n  border-left: 2px solid #fff;\r\n  display: table;\r\n  float: left;\r\n  height: 110px;\r\n  width: 110px;\r\n}\r\n.coundown-border-inline .simply-section > div {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.mrs-v49 .single_large_title:first-child {\r\n  margin-top: 40px;\r\n}\r\n.mrs-v49.mrs-color .simply-countdown-column {\r\n  display: table;\r\n  margin: 35px auto auto;\r\n  width: auto;\r\n}\r\n.stay_connent_with_social.marshall-left-center li {\r\n  display: block;\r\n  margin: 15px 0;\r\n}\r\n.stay_connent_with_social.marshall-left-center li a {\r\n  border-radius: 40px;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 40px;\r\n}\r\n.stay_connent_with_social.marshall-left-center li a i {\r\n  margin-right: 0;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v50\r\n-------------------------------------------------------------------*/\r\nbody.mrs-color.mrs-v50 {\r\n  background: #131623 none repeat scroll 0 0;\r\n}\r\n.mrs-v50 .single_large_title:first-child {\r\n  margin-top: 40px;\r\n}\r\n.mrs-v50.mrs-color .simply-countdown-column {\r\n  display: table;\r\n  margin: 35px auto auto;\r\n  width: auto;\r\n}\r\n#falling-confettie {\r\n  bottom: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  min-height: 640px;\r\n}\r\n.mrs-v50 .coundown-border-inline {\r\n  border: medium none;\r\n}\r\n.mrs-v50 .coundown-border-inline .simply-section {\r\n  border-color: #fff;\r\n  border-radius: 50%;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  display: table;\r\n  float: left;\r\n  height: 100px;\r\n  margin: 0 6px;\r\n  width: 100px;\r\n}\r\n.mrs-v50 .marshall-social-column {\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  width: auto;\r\n}\r\n.mrs-v50 .simply-amount {\r\n  font-style: 2em;\r\n}\r\n.mrs-v50 .simply-section span.simply-word {\r\n  font-size: 0.9em;\r\n}\r\ncanvas#hypnos-canvas {\r\n  bottom: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  min-height: 640px;\r\n}\r\n#svgHolder{\r\n  min-width: 640px;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n}\r\n#svgHolder svg {\r\n  left: 50%;\r\n  max-height: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  width: 100%;\r\n}\r\n#flames{\r\n  width: 60px;\r\n  height: 60px;\r\n  -webkit-transform-origin:center bottom;\r\n          transform-origin:center bottom;\r\n  -webkit-animation-name: flameIt;\r\n          animation-name: flameIt;\r\n  -webkit-animation-duration:3ms;\r\n          animation-duration:3ms;\r\n  -webkit-animation-delay:200ms;\r\n          animation-delay:200ms;\r\n  -webkit-animation-timing-function: ease-in;\r\n          animation-timing-function: ease-in;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n          animation-direction: alternate;\r\n}\r\n@-webkit-keyframes flameIt{\r\n  0%   {-webkit-transform: rotate(-1deg);transform: rotate(-1deg);}\r\n  20%  {-webkit-transform: rotate(1deg);transform: rotate(1deg);}\r\n  40%  {-webkit-transform: rotate(-1deg);transform: rotate(-1deg);}\r\n  60%  {-webkit-transform: rotate(1deg) scaleY(1.04);transform: rotate(1deg) scaleY(1.04);}\r\n  80%  {-webkit-transform: rotate(-2deg) scaleY(0.92);transform: rotate(-2deg) scaleY(0.92);}\r\n  100% {-webkit-transform: rotate(1deg);transform: rotate(1deg);}\r\n}\r\n@keyframes flameIt{\r\n  0%   {-webkit-transform: rotate(-1deg);transform: rotate(-1deg);}\r\n  20%  {-webkit-transform: rotate(1deg);transform: rotate(1deg);}\r\n  40%  {-webkit-transform: rotate(-1deg);transform: rotate(-1deg);}\r\n  60%  {-webkit-transform: rotate(1deg) scaleY(1.04);transform: rotate(1deg) scaleY(1.04);}\r\n  80%  {-webkit-transform: rotate(-2deg) scaleY(0.92);transform: rotate(-2deg) scaleY(0.92);}\r\n  100% {-webkit-transform: rotate(1deg);transform: rotate(1deg);}\r\n}\r\n.mrs-color .cd-headline {\r\n  font-weight: bold;\r\n  color: #1e60ec;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v51\r\n-------------------------------------------------------------------*/\r\n#mrs-brid-canvas,\r\n#mrs-brid-canvas canvas {\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\nbody.mrs-v51 {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v51/sky.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\nbody.mrs-v51 .mrs-owl-text-slider h2 {\r\n  color: #333;\r\n  font-size: 2.7em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\nbody.mrs-v51 .mrs-owl-text-slider h2 span{\r\n  color: #f61067;\r\n}\r\nbody.mrs-v51 .footer-copyright p {\r\n  background-color: rgba(51, 51, 51, 0.7);\r\n  margin: 0;\r\n  padding: 5px 20px;\r\n}\r\n/* -----------------------------------------------------------------\r\n  *. v52\r\n-------------------------------------------------------------------*/\r\nbody.mrs-v52 {\r\n  background-image: url(\"https://pixiefy.com/themes/marshall/html/v24/images/v52/sketing.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\nbody.mrs-v52::before {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 50%;\r\n}\r\nbody.mrs-v52 .marshall-animate-content {\r\n  background-color: transparent;\r\n}\r\nbody.mrs-v52 .marshall-the_content {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\nbody.mrs-v52 .marshall-works-heading {\r\n  background: none;\r\n}\r\nbody.mrs-v52 .marshall-works-heading::after {\r\n  display: none;\r\n}\r\nbody.mrs-v52 .marshall-works-heading-inner,\r\nbody.mrs-v52 .marshall-the_content {\r\n  color: #3b3939;\r\n}\r\nbody.mrs-v52 .marshall-the_content .marshall-works-heading-inner h2 {\r\n  color: #252525;\r\n}\r\n.animation-wrapper{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.animation-wrapper .particle-1 {\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 117px 1613px #FFF , 1488px 635px #FFF , 944px 914px #FFF , 647px 277px #FFF , 1792px 1205px #FFF , 656px 1517px #FFF , 820px 1839px #FFF , 1153px 1400px #FFF , 870px 13px #FFF , 550px 702px #FFF , 1155px 1056px #FFF , 88px 1709px #FFF , 1450px 1090px #FFF , 1929px 457px #FFF , 1390px 905px #FFF , 1771px 269px #FFF , 1741px 669px #FFF , 432px 64px #FFF , 563px 996px #FFF , 1918px 1873px #FFF , 1845px 1211px #FFF , 231px 1503px #FFF , 37px 220px #FFF , 1970px 495px #FFF , 1812px 925px #FFF , 67px 1398px #FFF , 535px 279px #FFF , 1837px 829px #FFF , 1945px 685px #FFF , 1677px 1817px #FFF , 1317px 1415px #FFF , 1785px 905px #FFF , 1787px 1554px #FFF , 802px 1296px #FFF , 512px 1101px #FFF , 583px 1364px #FFF , 336px 558px #FFF , 979px 334px #FFF , 106px 792px #FFF , 204px 34px #FFF , 1845px 1763px #FFF , 445px 1599px #FFF , 386px 453px #FFF , 471px 952px #FFF , 1466px 1676px #FFF , 1885px 303px #FFF , 51px 1717px #FFF , 1211px 299px #FFF , 1546px 1887px #FFF , 1067px 33px #FFF , 1088px 1326px #FFF , 1938px 760px #FFF , 470px 648px #FFF , 1213px 269px #FFF , 1767px 78px #FFF , 977px 976px #FFF , 1926px 175px #FFF , 722px 1512px #FFF , 945px 227px #FFF , 1811px 99px #FFF , 1912px 1406px #FFF , 1602px 1243px #FFF , 610px 449px #FFF , 654px 1393px #FFF , 1930px 1193px #FFF , 258px 1184px #FFF , 89px 265px #FFF , 824px 1494px #FFF , 1506px 1435px #FFF , 1027px 753px #FFF , 1px 1197px #FFF , 530px 1161px #FFF , 864px 1555px #FFF , 1610px 1604px #FFF , 1035px 1114px #FFF , 1456px 133px #FFF , 1196px 1253px #FFF , 361px 1037px #FFF , 834px 351px #FFF , 436px 1676px #FFF , 1194px 1007px #FFF , 1141px 647px #FFF , 319px 454px #FFF , 937px 1769px #FFF , 1872px 1013px #FFF , 733px 643px #FFF , 1250px 511px #FFF , 189px 296px #FFF , 1639px 163px #FFF , 1584px 336px #FFF , 1912px 1343px #FFF , 1298px 1307px #FFF , 1750px 902px #FFF , 1129px 845px #FFF , 1899px 1470px #FFF , 1427px 232px #FFF , 1391px 838px #FFF , 1225px 1819px #FFF , 190px 1366px #FFF , 1865px 518px #FFF , 203px 1383px #FFF , 1455px 614px #FFF , 423px 354px #FFF , 1678px 1790px #FFF , 241px 608px #FFF , 1089px 730px #FFF , 1342px 38px #FFF , 1848px 249px #FFF , 1874px 1785px #FFF , 1040px 1837px #FFF , 751px 261px #FFF , 510px 1975px #FFF , 52px 795px #FFF , 1786px 1310px #FFF , 498px 712px #FFF , 190px 375px #FFF , 1341px 722px #FFF , 43px 1394px #FFF , 1821px 1687px #FFF , 106px 130px #FFF , 1717px 1978px #FFF , 168px 151px #FFF , 183px 740px #FFF , 945px 1381px #FFF , 669px 1170px #FFF , 1285px 1816px #FFF , 110px 1217px #FFF , 1623px 813px #FFF , 869px 647px #FFF , 867px 582px #FFF , 735px 1240px #FFF , 519px 1896px #FFF , 132px 156px #FFF , 1649px 193px #FFF , 241px 1109px #FFF , 643px 484px #FFF , 574px 1282px #FFF , 1952px 564px #FFF , 1978px 145px #FFF , 329px 903px #FFF , 1674px 617px #FFF , 1978px 558px #FFF , 1808px 1715px #FFF , 1526px 1238px #FFF , 475px 1330px #FFF , 810px 425px #FFF , 1709px 634px #FFF , 1658px 336px #FFF , 425px 194px #FFF , 352px 96px #FFF , 148px 180px #FFF , 1139px 1046px #FFF , 1809px 1233px #FFF , 1669px 171px #FFF , 263px 1394px #FFF , 534px 715px #FFF , 396px 1008px #FFF , 589px 1445px #FFF , 1190px 381px #FFF , 1709px 279px #FFF , 520px 891px #FFF , 1136px 1867px #FFF , 1280px 1233px #FFF , 836px 296px #FFF , 1348px 646px #FFF , 1539px 913px #FFF , 423px 781px #FFF , 1271px 1805px #FFF , 696px 564px #FFF , 1549px 804px #FFF , 303px 1555px #FFF , 1449px 1903px #FFF , 66px 687px #FFF , 1164px 856px #FFF , 1958px 1326px #FFF , 125px 157px #FFF , 508px 1669px #FFF , 465px 725px #FFF , 1925px 1440px #FFF , 405px 793px #FFF , 278px 110px #FFF , 1084px 1065px #FFF , 1077px 705px #FFF , 663px 1844px #FFF , 734px 263px #FFF , 870px 1761px #FFF , 103px 1169px #FFF , 1506px 1295px #FFF , 1883px 926px #FFF , 335px 1361px #FFF , 1126px 1284px #FFF , 257px 1165px #FFF , 837px 580px #FFF , 1211px 1362px #FFF , 1137px 1380px #FFF , 135px 632px #FFF , 1491px 1965px #FFF , 1098px 195px #FFF , 506px 417px #FFF , 693px 1243px #FFF , 622px 1862px #FFF , 1412px 1343px #FFF , 948px 1894px #FFF , 1315px 1363px #FFF , 754px 1098px #FFF , 1931px 930px #FFF , 1831px 342px #FFF , 1751px 1839px #FFF , 84px 775px #FFF , 1662px 1488px #FFF , 617px 1769px #FFF , 1869px 1292px #FFF , 963px 432px #FFF , 371px 1114px #FFF , 37px 642px #FFF , 21px 1184px #FFF , 602px 366px #FFF , 414px 524px #FFF , 282px 244px #FFF , 1689px 868px #FFF , 943px 681px #FFF , 898px 679px #FFF , 449px 1774px #FFF , 1678px 1313px #FFF , 475px 1811px #FFF , 1146px 1509px #FFF , 1151px 1863px #FFF , 1617px 846px #FFF , 82px 1077px #FFF , 324px 1317px #FFF , 1516px 885px #FFF , 1706px 1526px #FFF , 1925px 1180px #FFF , 553px 967px #FFF , 1072px 536px #FFF , 1715px 1816px #FFF , 185px 286px #FFF , 1362px 1600px #FFF , 628px 1938px #FFF , 1187px 412px #FFF , 569px 211px #FFF , 1959px 1356px #FFF , 1571px 105px #FFF , 319px 1111px #FFF , 36px 1364px #FFF , 502px 1788px #FFF , 1051px 1993px #FFF , 1617px 773px #FFF , 424px 1507px #FFF , 1623px 1955px #FFF , 307px 662px #FFF , 183px 1048px #FFF , 1919px 1453px #FFF , 1006px 1817px #FFF , 468px 673px #FFF , 1142px 1375px #FFF , 1228px 443px #FFF , 1734px 552px #FFF , 20px 1041px #FFF , 1783px 334px #FFF , 98px 1237px #FFF , 1356px 1940px #FFF , 853px 1779px #FFF , 1910px 560px #FFF , 1174px 1656px #FFF , 110px 1724px #FFF , 542px 1771px #FFF , 1758px 1931px #FFF , 1463px 1401px #FFF , 1155px 84px #FFF , 1504px 835px #FFF , 750px 322px #FFF , 407px 1900px #FFF , 1600px 1141px #FFF , 657px 886px #FFF , 526px 714px #FFF , 18px 836px #FFF , 1546px 1548px #FFF , 22px 469px #FFF , 594px 1466px #FFF , 1160px 1078px #FFF , 627px 1055px #FFF , 195px 699px #FFF , 1099px 684px #FFF , 530px 551px #FFF , 1160px 1325px #FFF , 894px 727px #FFF , 1157px 98px #FFF , 136px 1483px #FFF , 1875px 1975px #FFF , 1803px 566px #FFF , 318px 1073px #FFF , 1866px 1656px #FFF , 543px 414px #FFF , 719px 474px #FFF , 1115px 738px #FFF , 353px 875px #FFF , 184px 1938px #FFF , 1854px 1534px #FFF , 420px 1698px #FFF , 1480px 1550px #FFF , 522px 203px #FFF , 1897px 1904px #FFF , 975px 1708px #FFF , 1774px 602px #FFF , 1908px 274px #FFF , 61px 715px #FFF , 983px 1156px #FFF , 326px 1013px #FFF , 641px 290px #FFF , 1522px 120px #FFF , 405px 1637px #FFF , 1021px 1099px #FFF , 631px 1145px #FFF , 982px 1967px #FFF , 200px 651px #FFF , 795px 351px #FFF , 790px 1082px #FFF , 144px 1572px #FFF , 1542px 901px #FFF , 158px 1524px #FFF , 849px 1843px #FFF , 1807px 203px #FFF , 1747px 45px #FFF , 1603px 1738px #FFF , 617px 1966px #FFF , 342px 748px #FFF , 1779px 1173px #FFF , 1428px 152px #FFF , 589px 1998px #FFF , 1940px 1838px #FFF , 115px 272px #FFF , 1217px 1395px #FFF , 1402px 1491px #FFF , 1833px 1814px #FFF , 243px 966px #FFF , 319px 578px #FFF , 813px 364px #FFF , 669px 882px #FFF , 551px 134px #FFF , 1819px 920px #FFF , 740px 1826px #FFF , 1021px 952px #FFF , 1575px 453px #FFF , 324px 419px #FFF , 929px 417px #FFF , 885px 1112px #FFF , 503px 187px #FFF , 1908px 362px #FFF , 1063px 1601px #FFF , 169px 1792px #FFF , 789px 963px #FFF , 1697px 948px #FFF , 1761px 1810px #FFF , 1844px 1591px #FFF , 1709px 949px #FFF , 1402px 1396px #FFF , 1037px 225px #FFF , 1832px 518px #FFF , 1728px 1782px #FFF , 194px 1421px #FFF , 1395px 742px #FFF , 1478px 1325px #FFF , 40px 593px #FFF , 1732px 117px #FFF , 51px 158px #FFF , 1598px 1672px #FFF , 701px 849px #FFF , 1403px 1979px #FFF , 145px 1414px #FFF , 550px 906px #FFF , 1366px 460px #FFF , 142px 1379px #FFF , 34px 1864px #FFF , 1346px 308px #FFF , 293px 998px #FFF , 21px 1868px #FFF , 540px 1033px #FFF , 60px 746px #FFF , 1602px 1476px #FFF , 180px 804px #FFF , 345px 1982px #FFF , 1439px 640px #FFF , 939px 1834px #FFF , 20px 432px #FFF , 492px 1549px #FFF , 109px 1579px #FFF , 1796px 1403px #FFF , 1079px 519px #FFF , 1664px 389px #FFF , 1627px 1061px #FFF , 823px 419px #FFF , 1399px 1882px #FFF , 1906px 344px #FFF , 1189px 848px #FFF , 117px 882px #FFF , 1262px 33px #FFF , 1048px 434px #FFF , 1208px 1309px #FFF , 1616px 408px #FFF , 1833px 853px #FFF , 1433px 1656px #FFF , 811px 1861px #FFF , 439px 1672px #FFF , 1105px 248px #FFF , 328px 1652px #FFF , 13px 1658px #FFF , 685px 987px #FFF , 985px 403px #FFF , 1664px 1206px #FFF , 1993px 1925px #FFF , 440px 917px #FFF , 1835px 319px #FFF , 1404px 1907px #FFF , 624px 1443px #FFF , 843px 954px #FFF , 478px 1567px #FFF , 895px 1602px #FFF , 1231px 871px #FFF , 1267px 1646px #FFF , 475px 334px #FFF , 784px 796px #FFF , 1294px 199px #FFF , 109px 702px #FFF , 1978px 362px #FFF , 291px 940px #FFF , 971px 1343px #FFF , 74px 719px #FFF , 36px 715px #FFF , 1007px 1423px #FFF , 860px 314px #FFF , 631px 177px #FFF , 1900px 1590px #FFF , 1239px 1348px #FFF , 1346px 1270px #FFF , 1934px 1475px #FFF , 1553px 559px #FFF , 588px 1969px #FFF , 670px 1269px #FFF , 1484px 376px #FFF , 20px 1424px #FFF , 1396px 8px #FFF , 969px 244px #FFF , 1807px 538px #FFF , 1873px 891px #FFF , 636px 1142px #FFF , 1474px 1562px #FFF , 763px 350px #FFF , 663px 700px #FFF , 500px 1469px #FFF , 1302px 722px #FFF , 181px 291px #FFF , 266px 893px #FFF , 1403px 654px #FFF , 492px 460px #FFF , 1503px 1369px #FFF , 23px 1662px #FFF , 349px 333px #FFF , 1435px 1017px #FFF , 1441px 705px #FFF , 1708px 1446px #FFF , 1041px 911px #FFF , 1063px 780px #FFF , 1158px 1356px #FFF , 767px 1454px #FFF , 1912px 797px #FFF , 1731px 1759px #FFF , 1378px 1390px #FFF , 1815px 1364px #FFF , 960px 270px #FFF , 1343px 427px #FFF , 275px 203px #FFF , 1319px 1092px #FFF , 1455px 770px #FFF , 283px 1503px #FFF , 1505px 901px #FFF , 1738px 1561px #FFF , 1526px 1935px #FFF , 1757px 669px #FFF , 1640px 620px #FFF , 1750px 722px #FFF , 748px 66px #FFF , 1149px 540px #FFF , 159px 953px #FFF , 200px 1426px #FFF , 515px 1110px #FFF , 1552px 737px #FFF , 1094px 1459px #FFF , 778px 799px #FFF , 1031px 523px #FFF , 743px 1825px #FFF , 1100px 882px #FFF , 1088px 1836px #FFF , 255px 599px #FFF , 67px 1361px #FFF , 247px 1721px #FFF , 1722px 346px #FFF , 1822px 155px #FFF , 452px 1973px #FFF , 415px 1960px #FFF , 1109px 57px #FFF , 273px 1392px #FFF , 404px 1071px #FFF , 1212px 353px #FFF , 370px 460px #FFF , 795px 1523px #FFF , 1932px 340px #FFF , 51px 1473px #FFF , 1268px 364px #FFF , 1512px 1862px #FFF , 1678px 1801px #FFF , 1796px 579px #FFF , 254px 251px #FFF , 1466px 1717px #FFF , 893px 379px #FFF , 1153px 923px #FFF , 913px 1808px #FFF , 791px 789px #FFF , 417px 1924px #FFF , 1336px 1599px #FFF , 1695px 908px #FFF , 1120px 114px #FFF , 493px 1949px #FFF , 68px 1905px #FFF , 969px 481px #FFF , 1420px 1095px #FFF , 800px 1117px #FFF , 390px 234px #FFF , 356px 1644px #FFF , 1098px 1486px #FFF , 1360px 521px #FFF , 149px 1198px #FFF , 354px 747px #FFF , 1749px 487px #FFF , 470px 76px #FFF , 1672px 289px #FFF , 1731px 545px #FFF , 1547px 1590px #FFF , 498px 692px #FFF , 398px 1592px #FFF , 1846px 1237px #FFF , 1537px 1474px #FFF , 1726px 1374px #FFF , 1922px 858px #FFF , 376px 321px #FFF , 985px 227px #FFF , 234px 1421px #FFF , 760px 745px #FFF , 1990px 1132px #FFF , 1560px 1597px #FFF , 338px 1310px #FFF , 1924px 1664px #FFF , 547px 1747px #FFF , 1639px 1282px #FFF , 1202px 337px #FFF , 1985px 779px #FFF , 737px 456px #FFF , 89px 501px #FFF , 963px 792px #FFF , 655px 1447px #FFF , 1492px 1994px #FFF , 1171px 254px #FFF , 892px 827px #FFF , 1735px 442px #FFF , 1474px 1187px #FFF , 846px 1518px #FFF , 557px 1805px #FFF , 738px 945px #FFF , 795px 68px #FFF , 663px 1956px #FFF , 1607px 290px #FFF , 1524px 15px #FFF , 1097px 1911px #FFF , 157px 1939px #FFF , 935px 1065px #FFF , 1809px 1708px #FFF , 164px 1157px #FFF , 83px 855px #FFF , 625px 501px #FFF , 814px 398px #FFF , 552px 695px #FFF , 597px 1546px #FFF , 1237px 1417px #FFF , 628px 284px #FFF , 866px 767px #FFF , 1403px 1394px #FFF , 765px 1563px #FFF , 1648px 109px #FFF , 1205px 1659px #FFF , 921px 1313px #FFF , 1319px 243px #FFF , 18px 125px #FFF , 7px 777px #FFF , 181px 418px #FFF , 1062px 1892px #FFF , 382px 106px #FFF , 994px 751px #FFF , 964px 234px #FFF , 40px 118px #FFF , 278px 706px #FFF , 1540px 1978px #FFF , 425px 1661px #FFF , 1050px 321px #FFF , 735px 1729px #FFF , 1438px 260px #FFF , 1229px 1109px #FFF , 186px 1041px #FFF , 244px 1184px #FFF , 392px 1472px #FFF , 670px 1249px #FFF , 1260px 1443px #FFF , 1977px 1511px #FFF , 1240px 773px #FFF , 303px 513px #FFF , 63px 1530px #FFF , 610px 792px #FFF , 1987px 1647px #FFF , 676px 1597px #FFF , 1740px 1244px #FFF , 816px 1661px #FFF , 351px 802px #FFF , 252px 1082px #FFF , 31px 365px #FFF , 1453px 984px #FFF , 667px 1233px #FFF , 1247px 1800px #FFF , 839px 270px #FFF , 775px 913px #FFF , 1966px 1398px #FFF , 499px 813px #FFF , 922px 1982px #FFF , 1409px 1902px #FFF , 1499px 1766px #FFF , 721px 899px #FFF , 788px 807px #FFF , 989px 1355px #FFF , 1248px 1274px #FFF , 849px 1091px #FFF , 1799px 1036px #FFF , 1486px 700px #FFF , 170px 1989px #FFF , 1275px 799px #FFF , 772px 2000px #FFF , 1642px 362px #FFF , 216px 940px #FFF , 1893px 281px #FFF , 1944px 1298px #FFF , 1294px 400px #FFF , 1523px 441px #FFF , 1829px 340px #FFF , 468px 170px #FFF , 1099px 967px #FFF , 1331px 665px #FFF , 1174px 1553px #FFF , 1567px 325px #FFF , 1028px 1399px #FFF , 781px 1451px #FFF , 1912px 1954px #FFF , 874px 873px #FFF , 1298px 1722px #FFF , 1879px 706px #FFF , 57px 1221px #FFF , 1116px 1432px #FFF , 48px 811px #FFF , 101px 916px #FFF , 677px 304px #FFF , 1203px 639px #FFF , 1391px 199px #FFF , 1895px 1988px #FFF , 1462px 1023px #FFF , 1216px 1751px #FFF , 1261px 663px #FFF , 1290px 1119px #FFF , 137px 1793px #FFF , 1052px 1470px #FFF , 1561px 226px #FFF , 1156px 402px #FFF , 709px 693px #FFF , 1040px 1911px #FFF , 1624px 1115px #FFF , 551px 475px #FFF , 416px 1090px #FFF , 1183px 451px #FFF , 58px 765px #FFF , 743px 1016px #FFF , 198px 369px #FFF , 1645px 1503px #FFF , 997px 22px #FFF , 1447px 1323px #FFF , 379px 883px #FFF , 1171px 1195px #FFF , 919px 133px #FFF , 1400px 517px #FFF , 725px 804px #FFF , 1600px 699px #FFF , 357px 581px #FFF , 266px 1713px #FFF , 848px 1749px #FFF , 1963px 1045px #FFF , 119px 1136px #FFF;\r\n          box-shadow: 117px 1613px #FFF , 1488px 635px #FFF , 944px 914px #FFF , 647px 277px #FFF , 1792px 1205px #FFF , 656px 1517px #FFF , 820px 1839px #FFF , 1153px 1400px #FFF , 870px 13px #FFF , 550px 702px #FFF , 1155px 1056px #FFF , 88px 1709px #FFF , 1450px 1090px #FFF , 1929px 457px #FFF , 1390px 905px #FFF , 1771px 269px #FFF , 1741px 669px #FFF , 432px 64px #FFF , 563px 996px #FFF , 1918px 1873px #FFF , 1845px 1211px #FFF , 231px 1503px #FFF , 37px 220px #FFF , 1970px 495px #FFF , 1812px 925px #FFF , 67px 1398px #FFF , 535px 279px #FFF , 1837px 829px #FFF , 1945px 685px #FFF , 1677px 1817px #FFF , 1317px 1415px #FFF , 1785px 905px #FFF , 1787px 1554px #FFF , 802px 1296px #FFF , 512px 1101px #FFF , 583px 1364px #FFF , 336px 558px #FFF , 979px 334px #FFF , 106px 792px #FFF , 204px 34px #FFF , 1845px 1763px #FFF , 445px 1599px #FFF , 386px 453px #FFF , 471px 952px #FFF , 1466px 1676px #FFF , 1885px 303px #FFF , 51px 1717px #FFF , 1211px 299px #FFF , 1546px 1887px #FFF , 1067px 33px #FFF , 1088px 1326px #FFF , 1938px 760px #FFF , 470px 648px #FFF , 1213px 269px #FFF , 1767px 78px #FFF , 977px 976px #FFF , 1926px 175px #FFF , 722px 1512px #FFF , 945px 227px #FFF , 1811px 99px #FFF , 1912px 1406px #FFF , 1602px 1243px #FFF , 610px 449px #FFF , 654px 1393px #FFF , 1930px 1193px #FFF , 258px 1184px #FFF , 89px 265px #FFF , 824px 1494px #FFF , 1506px 1435px #FFF , 1027px 753px #FFF , 1px 1197px #FFF , 530px 1161px #FFF , 864px 1555px #FFF , 1610px 1604px #FFF , 1035px 1114px #FFF , 1456px 133px #FFF , 1196px 1253px #FFF , 361px 1037px #FFF , 834px 351px #FFF , 436px 1676px #FFF , 1194px 1007px #FFF , 1141px 647px #FFF , 319px 454px #FFF , 937px 1769px #FFF , 1872px 1013px #FFF , 733px 643px #FFF , 1250px 511px #FFF , 189px 296px #FFF , 1639px 163px #FFF , 1584px 336px #FFF , 1912px 1343px #FFF , 1298px 1307px #FFF , 1750px 902px #FFF , 1129px 845px #FFF , 1899px 1470px #FFF , 1427px 232px #FFF , 1391px 838px #FFF , 1225px 1819px #FFF , 190px 1366px #FFF , 1865px 518px #FFF , 203px 1383px #FFF , 1455px 614px #FFF , 423px 354px #FFF , 1678px 1790px #FFF , 241px 608px #FFF , 1089px 730px #FFF , 1342px 38px #FFF , 1848px 249px #FFF , 1874px 1785px #FFF , 1040px 1837px #FFF , 751px 261px #FFF , 510px 1975px #FFF , 52px 795px #FFF , 1786px 1310px #FFF , 498px 712px #FFF , 190px 375px #FFF , 1341px 722px #FFF , 43px 1394px #FFF , 1821px 1687px #FFF , 106px 130px #FFF , 1717px 1978px #FFF , 168px 151px #FFF , 183px 740px #FFF , 945px 1381px #FFF , 669px 1170px #FFF , 1285px 1816px #FFF , 110px 1217px #FFF , 1623px 813px #FFF , 869px 647px #FFF , 867px 582px #FFF , 735px 1240px #FFF , 519px 1896px #FFF , 132px 156px #FFF , 1649px 193px #FFF , 241px 1109px #FFF , 643px 484px #FFF , 574px 1282px #FFF , 1952px 564px #FFF , 1978px 145px #FFF , 329px 903px #FFF , 1674px 617px #FFF , 1978px 558px #FFF , 1808px 1715px #FFF , 1526px 1238px #FFF , 475px 1330px #FFF , 810px 425px #FFF , 1709px 634px #FFF , 1658px 336px #FFF , 425px 194px #FFF , 352px 96px #FFF , 148px 180px #FFF , 1139px 1046px #FFF , 1809px 1233px #FFF , 1669px 171px #FFF , 263px 1394px #FFF , 534px 715px #FFF , 396px 1008px #FFF , 589px 1445px #FFF , 1190px 381px #FFF , 1709px 279px #FFF , 520px 891px #FFF , 1136px 1867px #FFF , 1280px 1233px #FFF , 836px 296px #FFF , 1348px 646px #FFF , 1539px 913px #FFF , 423px 781px #FFF , 1271px 1805px #FFF , 696px 564px #FFF , 1549px 804px #FFF , 303px 1555px #FFF , 1449px 1903px #FFF , 66px 687px #FFF , 1164px 856px #FFF , 1958px 1326px #FFF , 125px 157px #FFF , 508px 1669px #FFF , 465px 725px #FFF , 1925px 1440px #FFF , 405px 793px #FFF , 278px 110px #FFF , 1084px 1065px #FFF , 1077px 705px #FFF , 663px 1844px #FFF , 734px 263px #FFF , 870px 1761px #FFF , 103px 1169px #FFF , 1506px 1295px #FFF , 1883px 926px #FFF , 335px 1361px #FFF , 1126px 1284px #FFF , 257px 1165px #FFF , 837px 580px #FFF , 1211px 1362px #FFF , 1137px 1380px #FFF , 135px 632px #FFF , 1491px 1965px #FFF , 1098px 195px #FFF , 506px 417px #FFF , 693px 1243px #FFF , 622px 1862px #FFF , 1412px 1343px #FFF , 948px 1894px #FFF , 1315px 1363px #FFF , 754px 1098px #FFF , 1931px 930px #FFF , 1831px 342px #FFF , 1751px 1839px #FFF , 84px 775px #FFF , 1662px 1488px #FFF , 617px 1769px #FFF , 1869px 1292px #FFF , 963px 432px #FFF , 371px 1114px #FFF , 37px 642px #FFF , 21px 1184px #FFF , 602px 366px #FFF , 414px 524px #FFF , 282px 244px #FFF , 1689px 868px #FFF , 943px 681px #FFF , 898px 679px #FFF , 449px 1774px #FFF , 1678px 1313px #FFF , 475px 1811px #FFF , 1146px 1509px #FFF , 1151px 1863px #FFF , 1617px 846px #FFF , 82px 1077px #FFF , 324px 1317px #FFF , 1516px 885px #FFF , 1706px 1526px #FFF , 1925px 1180px #FFF , 553px 967px #FFF , 1072px 536px #FFF , 1715px 1816px #FFF , 185px 286px #FFF , 1362px 1600px #FFF , 628px 1938px #FFF , 1187px 412px #FFF , 569px 211px #FFF , 1959px 1356px #FFF , 1571px 105px #FFF , 319px 1111px #FFF , 36px 1364px #FFF , 502px 1788px #FFF , 1051px 1993px #FFF , 1617px 773px #FFF , 424px 1507px #FFF , 1623px 1955px #FFF , 307px 662px #FFF , 183px 1048px #FFF , 1919px 1453px #FFF , 1006px 1817px #FFF , 468px 673px #FFF , 1142px 1375px #FFF , 1228px 443px #FFF , 1734px 552px #FFF , 20px 1041px #FFF , 1783px 334px #FFF , 98px 1237px #FFF , 1356px 1940px #FFF , 853px 1779px #FFF , 1910px 560px #FFF , 1174px 1656px #FFF , 110px 1724px #FFF , 542px 1771px #FFF , 1758px 1931px #FFF , 1463px 1401px #FFF , 1155px 84px #FFF , 1504px 835px #FFF , 750px 322px #FFF , 407px 1900px #FFF , 1600px 1141px #FFF , 657px 886px #FFF , 526px 714px #FFF , 18px 836px #FFF , 1546px 1548px #FFF , 22px 469px #FFF , 594px 1466px #FFF , 1160px 1078px #FFF , 627px 1055px #FFF , 195px 699px #FFF , 1099px 684px #FFF , 530px 551px #FFF , 1160px 1325px #FFF , 894px 727px #FFF , 1157px 98px #FFF , 136px 1483px #FFF , 1875px 1975px #FFF , 1803px 566px #FFF , 318px 1073px #FFF , 1866px 1656px #FFF , 543px 414px #FFF , 719px 474px #FFF , 1115px 738px #FFF , 353px 875px #FFF , 184px 1938px #FFF , 1854px 1534px #FFF , 420px 1698px #FFF , 1480px 1550px #FFF , 522px 203px #FFF , 1897px 1904px #FFF , 975px 1708px #FFF , 1774px 602px #FFF , 1908px 274px #FFF , 61px 715px #FFF , 983px 1156px #FFF , 326px 1013px #FFF , 641px 290px #FFF , 1522px 120px #FFF , 405px 1637px #FFF , 1021px 1099px #FFF , 631px 1145px #FFF , 982px 1967px #FFF , 200px 651px #FFF , 795px 351px #FFF , 790px 1082px #FFF , 144px 1572px #FFF , 1542px 901px #FFF , 158px 1524px #FFF , 849px 1843px #FFF , 1807px 203px #FFF , 1747px 45px #FFF , 1603px 1738px #FFF , 617px 1966px #FFF , 342px 748px #FFF , 1779px 1173px #FFF , 1428px 152px #FFF , 589px 1998px #FFF , 1940px 1838px #FFF , 115px 272px #FFF , 1217px 1395px #FFF , 1402px 1491px #FFF , 1833px 1814px #FFF , 243px 966px #FFF , 319px 578px #FFF , 813px 364px #FFF , 669px 882px #FFF , 551px 134px #FFF , 1819px 920px #FFF , 740px 1826px #FFF , 1021px 952px #FFF , 1575px 453px #FFF , 324px 419px #FFF , 929px 417px #FFF , 885px 1112px #FFF , 503px 187px #FFF , 1908px 362px #FFF , 1063px 1601px #FFF , 169px 1792px #FFF , 789px 963px #FFF , 1697px 948px #FFF , 1761px 1810px #FFF , 1844px 1591px #FFF , 1709px 949px #FFF , 1402px 1396px #FFF , 1037px 225px #FFF , 1832px 518px #FFF , 1728px 1782px #FFF , 194px 1421px #FFF , 1395px 742px #FFF , 1478px 1325px #FFF , 40px 593px #FFF , 1732px 117px #FFF , 51px 158px #FFF , 1598px 1672px #FFF , 701px 849px #FFF , 1403px 1979px #FFF , 145px 1414px #FFF , 550px 906px #FFF , 1366px 460px #FFF , 142px 1379px #FFF , 34px 1864px #FFF , 1346px 308px #FFF , 293px 998px #FFF , 21px 1868px #FFF , 540px 1033px #FFF , 60px 746px #FFF , 1602px 1476px #FFF , 180px 804px #FFF , 345px 1982px #FFF , 1439px 640px #FFF , 939px 1834px #FFF , 20px 432px #FFF , 492px 1549px #FFF , 109px 1579px #FFF , 1796px 1403px #FFF , 1079px 519px #FFF , 1664px 389px #FFF , 1627px 1061px #FFF , 823px 419px #FFF , 1399px 1882px #FFF , 1906px 344px #FFF , 1189px 848px #FFF , 117px 882px #FFF , 1262px 33px #FFF , 1048px 434px #FFF , 1208px 1309px #FFF , 1616px 408px #FFF , 1833px 853px #FFF , 1433px 1656px #FFF , 811px 1861px #FFF , 439px 1672px #FFF , 1105px 248px #FFF , 328px 1652px #FFF , 13px 1658px #FFF , 685px 987px #FFF , 985px 403px #FFF , 1664px 1206px #FFF , 1993px 1925px #FFF , 440px 917px #FFF , 1835px 319px #FFF , 1404px 1907px #FFF , 624px 1443px #FFF , 843px 954px #FFF , 478px 1567px #FFF , 895px 1602px #FFF , 1231px 871px #FFF , 1267px 1646px #FFF , 475px 334px #FFF , 784px 796px #FFF , 1294px 199px #FFF , 109px 702px #FFF , 1978px 362px #FFF , 291px 940px #FFF , 971px 1343px #FFF , 74px 719px #FFF , 36px 715px #FFF , 1007px 1423px #FFF , 860px 314px #FFF , 631px 177px #FFF , 1900px 1590px #FFF , 1239px 1348px #FFF , 1346px 1270px #FFF , 1934px 1475px #FFF , 1553px 559px #FFF , 588px 1969px #FFF , 670px 1269px #FFF , 1484px 376px #FFF , 20px 1424px #FFF , 1396px 8px #FFF , 969px 244px #FFF , 1807px 538px #FFF , 1873px 891px #FFF , 636px 1142px #FFF , 1474px 1562px #FFF , 763px 350px #FFF , 663px 700px #FFF , 500px 1469px #FFF , 1302px 722px #FFF , 181px 291px #FFF , 266px 893px #FFF , 1403px 654px #FFF , 492px 460px #FFF , 1503px 1369px #FFF , 23px 1662px #FFF , 349px 333px #FFF , 1435px 1017px #FFF , 1441px 705px #FFF , 1708px 1446px #FFF , 1041px 911px #FFF , 1063px 780px #FFF , 1158px 1356px #FFF , 767px 1454px #FFF , 1912px 797px #FFF , 1731px 1759px #FFF , 1378px 1390px #FFF , 1815px 1364px #FFF , 960px 270px #FFF , 1343px 427px #FFF , 275px 203px #FFF , 1319px 1092px #FFF , 1455px 770px #FFF , 283px 1503px #FFF , 1505px 901px #FFF , 1738px 1561px #FFF , 1526px 1935px #FFF , 1757px 669px #FFF , 1640px 620px #FFF , 1750px 722px #FFF , 748px 66px #FFF , 1149px 540px #FFF , 159px 953px #FFF , 200px 1426px #FFF , 515px 1110px #FFF , 1552px 737px #FFF , 1094px 1459px #FFF , 778px 799px #FFF , 1031px 523px #FFF , 743px 1825px #FFF , 1100px 882px #FFF , 1088px 1836px #FFF , 255px 599px #FFF , 67px 1361px #FFF , 247px 1721px #FFF , 1722px 346px #FFF , 1822px 155px #FFF , 452px 1973px #FFF , 415px 1960px #FFF , 1109px 57px #FFF , 273px 1392px #FFF , 404px 1071px #FFF , 1212px 353px #FFF , 370px 460px #FFF , 795px 1523px #FFF , 1932px 340px #FFF , 51px 1473px #FFF , 1268px 364px #FFF , 1512px 1862px #FFF , 1678px 1801px #FFF , 1796px 579px #FFF , 254px 251px #FFF , 1466px 1717px #FFF , 893px 379px #FFF , 1153px 923px #FFF , 913px 1808px #FFF , 791px 789px #FFF , 417px 1924px #FFF , 1336px 1599px #FFF , 1695px 908px #FFF , 1120px 114px #FFF , 493px 1949px #FFF , 68px 1905px #FFF , 969px 481px #FFF , 1420px 1095px #FFF , 800px 1117px #FFF , 390px 234px #FFF , 356px 1644px #FFF , 1098px 1486px #FFF , 1360px 521px #FFF , 149px 1198px #FFF , 354px 747px #FFF , 1749px 487px #FFF , 470px 76px #FFF , 1672px 289px #FFF , 1731px 545px #FFF , 1547px 1590px #FFF , 498px 692px #FFF , 398px 1592px #FFF , 1846px 1237px #FFF , 1537px 1474px #FFF , 1726px 1374px #FFF , 1922px 858px #FFF , 376px 321px #FFF , 985px 227px #FFF , 234px 1421px #FFF , 760px 745px #FFF , 1990px 1132px #FFF , 1560px 1597px #FFF , 338px 1310px #FFF , 1924px 1664px #FFF , 547px 1747px #FFF , 1639px 1282px #FFF , 1202px 337px #FFF , 1985px 779px #FFF , 737px 456px #FFF , 89px 501px #FFF , 963px 792px #FFF , 655px 1447px #FFF , 1492px 1994px #FFF , 1171px 254px #FFF , 892px 827px #FFF , 1735px 442px #FFF , 1474px 1187px #FFF , 846px 1518px #FFF , 557px 1805px #FFF , 738px 945px #FFF , 795px 68px #FFF , 663px 1956px #FFF , 1607px 290px #FFF , 1524px 15px #FFF , 1097px 1911px #FFF , 157px 1939px #FFF , 935px 1065px #FFF , 1809px 1708px #FFF , 164px 1157px #FFF , 83px 855px #FFF , 625px 501px #FFF , 814px 398px #FFF , 552px 695px #FFF , 597px 1546px #FFF , 1237px 1417px #FFF , 628px 284px #FFF , 866px 767px #FFF , 1403px 1394px #FFF , 765px 1563px #FFF , 1648px 109px #FFF , 1205px 1659px #FFF , 921px 1313px #FFF , 1319px 243px #FFF , 18px 125px #FFF , 7px 777px #FFF , 181px 418px #FFF , 1062px 1892px #FFF , 382px 106px #FFF , 994px 751px #FFF , 964px 234px #FFF , 40px 118px #FFF , 278px 706px #FFF , 1540px 1978px #FFF , 425px 1661px #FFF , 1050px 321px #FFF , 735px 1729px #FFF , 1438px 260px #FFF , 1229px 1109px #FFF , 186px 1041px #FFF , 244px 1184px #FFF , 392px 1472px #FFF , 670px 1249px #FFF , 1260px 1443px #FFF , 1977px 1511px #FFF , 1240px 773px #FFF , 303px 513px #FFF , 63px 1530px #FFF , 610px 792px #FFF , 1987px 1647px #FFF , 676px 1597px #FFF , 1740px 1244px #FFF , 816px 1661px #FFF , 351px 802px #FFF , 252px 1082px #FFF , 31px 365px #FFF , 1453px 984px #FFF , 667px 1233px #FFF , 1247px 1800px #FFF , 839px 270px #FFF , 775px 913px #FFF , 1966px 1398px #FFF , 499px 813px #FFF , 922px 1982px #FFF , 1409px 1902px #FFF , 1499px 1766px #FFF , 721px 899px #FFF , 788px 807px #FFF , 989px 1355px #FFF , 1248px 1274px #FFF , 849px 1091px #FFF , 1799px 1036px #FFF , 1486px 700px #FFF , 170px 1989px #FFF , 1275px 799px #FFF , 772px 2000px #FFF , 1642px 362px #FFF , 216px 940px #FFF , 1893px 281px #FFF , 1944px 1298px #FFF , 1294px 400px #FFF , 1523px 441px #FFF , 1829px 340px #FFF , 468px 170px #FFF , 1099px 967px #FFF , 1331px 665px #FFF , 1174px 1553px #FFF , 1567px 325px #FFF , 1028px 1399px #FFF , 781px 1451px #FFF , 1912px 1954px #FFF , 874px 873px #FFF , 1298px 1722px #FFF , 1879px 706px #FFF , 57px 1221px #FFF , 1116px 1432px #FFF , 48px 811px #FFF , 101px 916px #FFF , 677px 304px #FFF , 1203px 639px #FFF , 1391px 199px #FFF , 1895px 1988px #FFF , 1462px 1023px #FFF , 1216px 1751px #FFF , 1261px 663px #FFF , 1290px 1119px #FFF , 137px 1793px #FFF , 1052px 1470px #FFF , 1561px 226px #FFF , 1156px 402px #FFF , 709px 693px #FFF , 1040px 1911px #FFF , 1624px 1115px #FFF , 551px 475px #FFF , 416px 1090px #FFF , 1183px 451px #FFF , 58px 765px #FFF , 743px 1016px #FFF , 198px 369px #FFF , 1645px 1503px #FFF , 997px 22px #FFF , 1447px 1323px #FFF , 379px 883px #FFF , 1171px 1195px #FFF , 919px 133px #FFF , 1400px 517px #FFF , 725px 804px #FFF , 1600px 699px #FFF , 357px 581px #FFF , 266px 1713px #FFF , 848px 1749px #FFF , 1963px 1045px #FFF , 119px 1136px #FFF;\r\n  -webkit-animation: animStar 50s linear infinite;\r\n  animation: animStar 50s linear infinite;\r\n}\r\n.animation-wrapper .particle-1:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 117px 1613px #FFF , 1488px 635px #FFF , 944px 914px #FFF , 647px 277px #FFF , 1792px 1205px #FFF , 656px 1517px #FFF , 820px 1839px #FFF , 1153px 1400px #FFF , 870px 13px #FFF , 550px 702px #FFF , 1155px 1056px #FFF , 88px 1709px #FFF , 1450px 1090px #FFF , 1929px 457px #FFF , 1390px 905px #FFF , 1771px 269px #FFF , 1741px 669px #FFF , 432px 64px #FFF , 563px 996px #FFF , 1918px 1873px #FFF , 1845px 1211px #FFF , 231px 1503px #FFF , 37px 220px #FFF , 1970px 495px #FFF , 1812px 925px #FFF , 67px 1398px #FFF , 535px 279px #FFF , 1837px 829px #FFF , 1945px 685px #FFF , 1677px 1817px #FFF , 1317px 1415px #FFF , 1785px 905px #FFF , 1787px 1554px #FFF , 802px 1296px #FFF , 512px 1101px #FFF , 583px 1364px #FFF , 336px 558px #FFF , 979px 334px #FFF , 106px 792px #FFF , 204px 34px #FFF , 1845px 1763px #FFF , 445px 1599px #FFF , 386px 453px #FFF , 471px 952px #FFF , 1466px 1676px #FFF , 1885px 303px #FFF , 51px 1717px #FFF , 1211px 299px #FFF , 1546px 1887px #FFF , 1067px 33px #FFF , 1088px 1326px #FFF , 1938px 760px #FFF , 470px 648px #FFF , 1213px 269px #FFF , 1767px 78px #FFF , 977px 976px #FFF , 1926px 175px #FFF , 722px 1512px #FFF , 945px 227px #FFF , 1811px 99px #FFF , 1912px 1406px #FFF , 1602px 1243px #FFF , 610px 449px #FFF , 654px 1393px #FFF , 1930px 1193px #FFF , 258px 1184px #FFF , 89px 265px #FFF , 824px 1494px #FFF , 1506px 1435px #FFF , 1027px 753px #FFF , 1px 1197px #FFF , 530px 1161px #FFF , 864px 1555px #FFF , 1610px 1604px #FFF , 1035px 1114px #FFF , 1456px 133px #FFF , 1196px 1253px #FFF , 361px 1037px #FFF , 834px 351px #FFF , 436px 1676px #FFF , 1194px 1007px #FFF , 1141px 647px #FFF , 319px 454px #FFF , 937px 1769px #FFF , 1872px 1013px #FFF , 733px 643px #FFF , 1250px 511px #FFF , 189px 296px #FFF , 1639px 163px #FFF , 1584px 336px #FFF , 1912px 1343px #FFF , 1298px 1307px #FFF , 1750px 902px #FFF , 1129px 845px #FFF , 1899px 1470px #FFF , 1427px 232px #FFF , 1391px 838px #FFF , 1225px 1819px #FFF , 190px 1366px #FFF , 1865px 518px #FFF , 203px 1383px #FFF , 1455px 614px #FFF , 423px 354px #FFF , 1678px 1790px #FFF , 241px 608px #FFF , 1089px 730px #FFF , 1342px 38px #FFF , 1848px 249px #FFF , 1874px 1785px #FFF , 1040px 1837px #FFF , 751px 261px #FFF , 510px 1975px #FFF , 52px 795px #FFF , 1786px 1310px #FFF , 498px 712px #FFF , 190px 375px #FFF , 1341px 722px #FFF , 43px 1394px #FFF , 1821px 1687px #FFF , 106px 130px #FFF , 1717px 1978px #FFF , 168px 151px #FFF , 183px 740px #FFF , 945px 1381px #FFF , 669px 1170px #FFF , 1285px 1816px #FFF , 110px 1217px #FFF , 1623px 813px #FFF , 869px 647px #FFF , 867px 582px #FFF , 735px 1240px #FFF , 519px 1896px #FFF , 132px 156px #FFF , 1649px 193px #FFF , 241px 1109px #FFF , 643px 484px #FFF , 574px 1282px #FFF , 1952px 564px #FFF , 1978px 145px #FFF , 329px 903px #FFF , 1674px 617px #FFF , 1978px 558px #FFF , 1808px 1715px #FFF , 1526px 1238px #FFF , 475px 1330px #FFF , 810px 425px #FFF , 1709px 634px #FFF , 1658px 336px #FFF , 425px 194px #FFF , 352px 96px #FFF , 148px 180px #FFF , 1139px 1046px #FFF , 1809px 1233px #FFF , 1669px 171px #FFF , 263px 1394px #FFF , 534px 715px #FFF , 396px 1008px #FFF , 589px 1445px #FFF , 1190px 381px #FFF , 1709px 279px #FFF , 520px 891px #FFF , 1136px 1867px #FFF , 1280px 1233px #FFF , 836px 296px #FFF , 1348px 646px #FFF , 1539px 913px #FFF , 423px 781px #FFF , 1271px 1805px #FFF , 696px 564px #FFF , 1549px 804px #FFF , 303px 1555px #FFF , 1449px 1903px #FFF , 66px 687px #FFF , 1164px 856px #FFF , 1958px 1326px #FFF , 125px 157px #FFF , 508px 1669px #FFF , 465px 725px #FFF , 1925px 1440px #FFF , 405px 793px #FFF , 278px 110px #FFF , 1084px 1065px #FFF , 1077px 705px #FFF , 663px 1844px #FFF , 734px 263px #FFF , 870px 1761px #FFF , 103px 1169px #FFF , 1506px 1295px #FFF , 1883px 926px #FFF , 335px 1361px #FFF , 1126px 1284px #FFF , 257px 1165px #FFF , 837px 580px #FFF , 1211px 1362px #FFF , 1137px 1380px #FFF , 135px 632px #FFF , 1491px 1965px #FFF , 1098px 195px #FFF , 506px 417px #FFF , 693px 1243px #FFF , 622px 1862px #FFF , 1412px 1343px #FFF , 948px 1894px #FFF , 1315px 1363px #FFF , 754px 1098px #FFF , 1931px 930px #FFF , 1831px 342px #FFF , 1751px 1839px #FFF , 84px 775px #FFF , 1662px 1488px #FFF , 617px 1769px #FFF , 1869px 1292px #FFF , 963px 432px #FFF , 371px 1114px #FFF , 37px 642px #FFF , 21px 1184px #FFF , 602px 366px #FFF , 414px 524px #FFF , 282px 244px #FFF , 1689px 868px #FFF , 943px 681px #FFF , 898px 679px #FFF , 449px 1774px #FFF , 1678px 1313px #FFF , 475px 1811px #FFF , 1146px 1509px #FFF , 1151px 1863px #FFF , 1617px 846px #FFF , 82px 1077px #FFF , 324px 1317px #FFF , 1516px 885px #FFF , 1706px 1526px #FFF , 1925px 1180px #FFF , 553px 967px #FFF , 1072px 536px #FFF , 1715px 1816px #FFF , 185px 286px #FFF , 1362px 1600px #FFF , 628px 1938px #FFF , 1187px 412px #FFF , 569px 211px #FFF , 1959px 1356px #FFF , 1571px 105px #FFF , 319px 1111px #FFF , 36px 1364px #FFF , 502px 1788px #FFF , 1051px 1993px #FFF , 1617px 773px #FFF , 424px 1507px #FFF , 1623px 1955px #FFF , 307px 662px #FFF , 183px 1048px #FFF , 1919px 1453px #FFF , 1006px 1817px #FFF , 468px 673px #FFF , 1142px 1375px #FFF , 1228px 443px #FFF , 1734px 552px #FFF , 20px 1041px #FFF , 1783px 334px #FFF , 98px 1237px #FFF , 1356px 1940px #FFF , 853px 1779px #FFF , 1910px 560px #FFF , 1174px 1656px #FFF , 110px 1724px #FFF , 542px 1771px #FFF , 1758px 1931px #FFF , 1463px 1401px #FFF , 1155px 84px #FFF , 1504px 835px #FFF , 750px 322px #FFF , 407px 1900px #FFF , 1600px 1141px #FFF , 657px 886px #FFF , 526px 714px #FFF , 18px 836px #FFF , 1546px 1548px #FFF , 22px 469px #FFF , 594px 1466px #FFF , 1160px 1078px #FFF , 627px 1055px #FFF , 195px 699px #FFF , 1099px 684px #FFF , 530px 551px #FFF , 1160px 1325px #FFF , 894px 727px #FFF , 1157px 98px #FFF , 136px 1483px #FFF , 1875px 1975px #FFF , 1803px 566px #FFF , 318px 1073px #FFF , 1866px 1656px #FFF , 543px 414px #FFF , 719px 474px #FFF , 1115px 738px #FFF , 353px 875px #FFF , 184px 1938px #FFF , 1854px 1534px #FFF , 420px 1698px #FFF , 1480px 1550px #FFF , 522px 203px #FFF , 1897px 1904px #FFF , 975px 1708px #FFF , 1774px 602px #FFF , 1908px 274px #FFF , 61px 715px #FFF , 983px 1156px #FFF , 326px 1013px #FFF , 641px 290px #FFF , 1522px 120px #FFF , 405px 1637px #FFF , 1021px 1099px #FFF , 631px 1145px #FFF , 982px 1967px #FFF , 200px 651px #FFF , 795px 351px #FFF , 790px 1082px #FFF , 144px 1572px #FFF , 1542px 901px #FFF , 158px 1524px #FFF , 849px 1843px #FFF , 1807px 203px #FFF , 1747px 45px #FFF , 1603px 1738px #FFF , 617px 1966px #FFF , 342px 748px #FFF , 1779px 1173px #FFF , 1428px 152px #FFF , 589px 1998px #FFF , 1940px 1838px #FFF , 115px 272px #FFF , 1217px 1395px #FFF , 1402px 1491px #FFF , 1833px 1814px #FFF , 243px 966px #FFF , 319px 578px #FFF , 813px 364px #FFF , 669px 882px #FFF , 551px 134px #FFF , 1819px 920px #FFF , 740px 1826px #FFF , 1021px 952px #FFF , 1575px 453px #FFF , 324px 419px #FFF , 929px 417px #FFF , 885px 1112px #FFF , 503px 187px #FFF , 1908px 362px #FFF , 1063px 1601px #FFF , 169px 1792px #FFF , 789px 963px #FFF , 1697px 948px #FFF , 1761px 1810px #FFF , 1844px 1591px #FFF , 1709px 949px #FFF , 1402px 1396px #FFF , 1037px 225px #FFF , 1832px 518px #FFF , 1728px 1782px #FFF , 194px 1421px #FFF , 1395px 742px #FFF , 1478px 1325px #FFF , 40px 593px #FFF , 1732px 117px #FFF , 51px 158px #FFF , 1598px 1672px #FFF , 701px 849px #FFF , 1403px 1979px #FFF , 145px 1414px #FFF , 550px 906px #FFF , 1366px 460px #FFF , 142px 1379px #FFF , 34px 1864px #FFF , 1346px 308px #FFF , 293px 998px #FFF , 21px 1868px #FFF , 540px 1033px #FFF , 60px 746px #FFF , 1602px 1476px #FFF , 180px 804px #FFF , 345px 1982px #FFF , 1439px 640px #FFF , 939px 1834px #FFF , 20px 432px #FFF , 492px 1549px #FFF , 109px 1579px #FFF , 1796px 1403px #FFF , 1079px 519px #FFF , 1664px 389px #FFF , 1627px 1061px #FFF , 823px 419px #FFF , 1399px 1882px #FFF , 1906px 344px #FFF , 1189px 848px #FFF , 117px 882px #FFF , 1262px 33px #FFF , 1048px 434px #FFF , 1208px 1309px #FFF , 1616px 408px #FFF , 1833px 853px #FFF , 1433px 1656px #FFF , 811px 1861px #FFF , 439px 1672px #FFF , 1105px 248px #FFF , 328px 1652px #FFF , 13px 1658px #FFF , 685px 987px #FFF , 985px 403px #FFF , 1664px 1206px #FFF , 1993px 1925px #FFF , 440px 917px #FFF , 1835px 319px #FFF , 1404px 1907px #FFF , 624px 1443px #FFF , 843px 954px #FFF , 478px 1567px #FFF , 895px 1602px #FFF , 1231px 871px #FFF , 1267px 1646px #FFF , 475px 334px #FFF , 784px 796px #FFF , 1294px 199px #FFF , 109px 702px #FFF , 1978px 362px #FFF , 291px 940px #FFF , 971px 1343px #FFF , 74px 719px #FFF , 36px 715px #FFF , 1007px 1423px #FFF , 860px 314px #FFF , 631px 177px #FFF , 1900px 1590px #FFF , 1239px 1348px #FFF , 1346px 1270px #FFF , 1934px 1475px #FFF , 1553px 559px #FFF , 588px 1969px #FFF , 670px 1269px #FFF , 1484px 376px #FFF , 20px 1424px #FFF , 1396px 8px #FFF , 969px 244px #FFF , 1807px 538px #FFF , 1873px 891px #FFF , 636px 1142px #FFF , 1474px 1562px #FFF , 763px 350px #FFF , 663px 700px #FFF , 500px 1469px #FFF , 1302px 722px #FFF , 181px 291px #FFF , 266px 893px #FFF , 1403px 654px #FFF , 492px 460px #FFF , 1503px 1369px #FFF , 23px 1662px #FFF , 349px 333px #FFF , 1435px 1017px #FFF , 1441px 705px #FFF , 1708px 1446px #FFF , 1041px 911px #FFF , 1063px 780px #FFF , 1158px 1356px #FFF , 767px 1454px #FFF , 1912px 797px #FFF , 1731px 1759px #FFF , 1378px 1390px #FFF , 1815px 1364px #FFF , 960px 270px #FFF , 1343px 427px #FFF , 275px 203px #FFF , 1319px 1092px #FFF , 1455px 770px #FFF , 283px 1503px #FFF , 1505px 901px #FFF , 1738px 1561px #FFF , 1526px 1935px #FFF , 1757px 669px #FFF , 1640px 620px #FFF , 1750px 722px #FFF , 748px 66px #FFF , 1149px 540px #FFF , 159px 953px #FFF , 200px 1426px #FFF , 515px 1110px #FFF , 1552px 737px #FFF , 1094px 1459px #FFF , 778px 799px #FFF , 1031px 523px #FFF , 743px 1825px #FFF , 1100px 882px #FFF , 1088px 1836px #FFF , 255px 599px #FFF , 67px 1361px #FFF , 247px 1721px #FFF , 1722px 346px #FFF , 1822px 155px #FFF , 452px 1973px #FFF , 415px 1960px #FFF , 1109px 57px #FFF , 273px 1392px #FFF , 404px 1071px #FFF , 1212px 353px #FFF , 370px 460px #FFF , 795px 1523px #FFF , 1932px 340px #FFF , 51px 1473px #FFF , 1268px 364px #FFF , 1512px 1862px #FFF , 1678px 1801px #FFF , 1796px 579px #FFF , 254px 251px #FFF , 1466px 1717px #FFF , 893px 379px #FFF , 1153px 923px #FFF , 913px 1808px #FFF , 791px 789px #FFF , 417px 1924px #FFF , 1336px 1599px #FFF , 1695px 908px #FFF , 1120px 114px #FFF , 493px 1949px #FFF , 68px 1905px #FFF , 969px 481px #FFF , 1420px 1095px #FFF , 800px 1117px #FFF , 390px 234px #FFF , 356px 1644px #FFF , 1098px 1486px #FFF , 1360px 521px #FFF , 149px 1198px #FFF , 354px 747px #FFF , 1749px 487px #FFF , 470px 76px #FFF , 1672px 289px #FFF , 1731px 545px #FFF , 1547px 1590px #FFF , 498px 692px #FFF , 398px 1592px #FFF , 1846px 1237px #FFF , 1537px 1474px #FFF , 1726px 1374px #FFF , 1922px 858px #FFF , 376px 321px #FFF , 985px 227px #FFF , 234px 1421px #FFF , 760px 745px #FFF , 1990px 1132px #FFF , 1560px 1597px #FFF , 338px 1310px #FFF , 1924px 1664px #FFF , 547px 1747px #FFF , 1639px 1282px #FFF , 1202px 337px #FFF , 1985px 779px #FFF , 737px 456px #FFF , 89px 501px #FFF , 963px 792px #FFF , 655px 1447px #FFF , 1492px 1994px #FFF , 1171px 254px #FFF , 892px 827px #FFF , 1735px 442px #FFF , 1474px 1187px #FFF , 846px 1518px #FFF , 557px 1805px #FFF , 738px 945px #FFF , 795px 68px #FFF , 663px 1956px #FFF , 1607px 290px #FFF , 1524px 15px #FFF , 1097px 1911px #FFF , 157px 1939px #FFF , 935px 1065px #FFF , 1809px 1708px #FFF , 164px 1157px #FFF , 83px 855px #FFF , 625px 501px #FFF , 814px 398px #FFF , 552px 695px #FFF , 597px 1546px #FFF , 1237px 1417px #FFF , 628px 284px #FFF , 866px 767px #FFF , 1403px 1394px #FFF , 765px 1563px #FFF , 1648px 109px #FFF , 1205px 1659px #FFF , 921px 1313px #FFF , 1319px 243px #FFF , 18px 125px #FFF , 7px 777px #FFF , 181px 418px #FFF , 1062px 1892px #FFF , 382px 106px #FFF , 994px 751px #FFF , 964px 234px #FFF , 40px 118px #FFF , 278px 706px #FFF , 1540px 1978px #FFF , 425px 1661px #FFF , 1050px 321px #FFF , 735px 1729px #FFF , 1438px 260px #FFF , 1229px 1109px #FFF , 186px 1041px #FFF , 244px 1184px #FFF , 392px 1472px #FFF , 670px 1249px #FFF , 1260px 1443px #FFF , 1977px 1511px #FFF , 1240px 773px #FFF , 303px 513px #FFF , 63px 1530px #FFF , 610px 792px #FFF , 1987px 1647px #FFF , 676px 1597px #FFF , 1740px 1244px #FFF , 816px 1661px #FFF , 351px 802px #FFF , 252px 1082px #FFF , 31px 365px #FFF , 1453px 984px #FFF , 667px 1233px #FFF , 1247px 1800px #FFF , 839px 270px #FFF , 775px 913px #FFF , 1966px 1398px #FFF , 499px 813px #FFF , 922px 1982px #FFF , 1409px 1902px #FFF , 1499px 1766px #FFF , 721px 899px #FFF , 788px 807px #FFF , 989px 1355px #FFF , 1248px 1274px #FFF , 849px 1091px #FFF , 1799px 1036px #FFF , 1486px 700px #FFF , 170px 1989px #FFF , 1275px 799px #FFF , 772px 2000px #FFF , 1642px 362px #FFF , 216px 940px #FFF , 1893px 281px #FFF , 1944px 1298px #FFF , 1294px 400px #FFF , 1523px 441px #FFF , 1829px 340px #FFF , 468px 170px #FFF , 1099px 967px #FFF , 1331px 665px #FFF , 1174px 1553px #FFF , 1567px 325px #FFF , 1028px 1399px #FFF , 781px 1451px #FFF , 1912px 1954px #FFF , 874px 873px #FFF , 1298px 1722px #FFF , 1879px 706px #FFF , 57px 1221px #FFF , 1116px 1432px #FFF , 48px 811px #FFF , 101px 916px #FFF , 677px 304px #FFF , 1203px 639px #FFF , 1391px 199px #FFF , 1895px 1988px #FFF , 1462px 1023px #FFF , 1216px 1751px #FFF , 1261px 663px #FFF , 1290px 1119px #FFF , 137px 1793px #FFF , 1052px 1470px #FFF , 1561px 226px #FFF , 1156px 402px #FFF , 709px 693px #FFF , 1040px 1911px #FFF , 1624px 1115px #FFF , 551px 475px #FFF , 416px 1090px #FFF , 1183px 451px #FFF , 58px 765px #FFF , 743px 1016px #FFF , 198px 369px #FFF , 1645px 1503px #FFF , 997px 22px #FFF , 1447px 1323px #FFF , 379px 883px #FFF , 1171px 1195px #FFF , 919px 133px #FFF , 1400px 517px #FFF , 725px 804px #FFF , 1600px 699px #FFF , 357px 581px #FFF , 266px 1713px #FFF , 848px 1749px #FFF , 1963px 1045px #FFF , 119px 1136px #FFF;\r\n          box-shadow: 117px 1613px #FFF , 1488px 635px #FFF , 944px 914px #FFF , 647px 277px #FFF , 1792px 1205px #FFF , 656px 1517px #FFF , 820px 1839px #FFF , 1153px 1400px #FFF , 870px 13px #FFF , 550px 702px #FFF , 1155px 1056px #FFF , 88px 1709px #FFF , 1450px 1090px #FFF , 1929px 457px #FFF , 1390px 905px #FFF , 1771px 269px #FFF , 1741px 669px #FFF , 432px 64px #FFF , 563px 996px #FFF , 1918px 1873px #FFF , 1845px 1211px #FFF , 231px 1503px #FFF , 37px 220px #FFF , 1970px 495px #FFF , 1812px 925px #FFF , 67px 1398px #FFF , 535px 279px #FFF , 1837px 829px #FFF , 1945px 685px #FFF , 1677px 1817px #FFF , 1317px 1415px #FFF , 1785px 905px #FFF , 1787px 1554px #FFF , 802px 1296px #FFF , 512px 1101px #FFF , 583px 1364px #FFF , 336px 558px #FFF , 979px 334px #FFF , 106px 792px #FFF , 204px 34px #FFF , 1845px 1763px #FFF , 445px 1599px #FFF , 386px 453px #FFF , 471px 952px #FFF , 1466px 1676px #FFF , 1885px 303px #FFF , 51px 1717px #FFF , 1211px 299px #FFF , 1546px 1887px #FFF , 1067px 33px #FFF , 1088px 1326px #FFF , 1938px 760px #FFF , 470px 648px #FFF , 1213px 269px #FFF , 1767px 78px #FFF , 977px 976px #FFF , 1926px 175px #FFF , 722px 1512px #FFF , 945px 227px #FFF , 1811px 99px #FFF , 1912px 1406px #FFF , 1602px 1243px #FFF , 610px 449px #FFF , 654px 1393px #FFF , 1930px 1193px #FFF , 258px 1184px #FFF , 89px 265px #FFF , 824px 1494px #FFF , 1506px 1435px #FFF , 1027px 753px #FFF , 1px 1197px #FFF , 530px 1161px #FFF , 864px 1555px #FFF , 1610px 1604px #FFF , 1035px 1114px #FFF , 1456px 133px #FFF , 1196px 1253px #FFF , 361px 1037px #FFF , 834px 351px #FFF , 436px 1676px #FFF , 1194px 1007px #FFF , 1141px 647px #FFF , 319px 454px #FFF , 937px 1769px #FFF , 1872px 1013px #FFF , 733px 643px #FFF , 1250px 511px #FFF , 189px 296px #FFF , 1639px 163px #FFF , 1584px 336px #FFF , 1912px 1343px #FFF , 1298px 1307px #FFF , 1750px 902px #FFF , 1129px 845px #FFF , 1899px 1470px #FFF , 1427px 232px #FFF , 1391px 838px #FFF , 1225px 1819px #FFF , 190px 1366px #FFF , 1865px 518px #FFF , 203px 1383px #FFF , 1455px 614px #FFF , 423px 354px #FFF , 1678px 1790px #FFF , 241px 608px #FFF , 1089px 730px #FFF , 1342px 38px #FFF , 1848px 249px #FFF , 1874px 1785px #FFF , 1040px 1837px #FFF , 751px 261px #FFF , 510px 1975px #FFF , 52px 795px #FFF , 1786px 1310px #FFF , 498px 712px #FFF , 190px 375px #FFF , 1341px 722px #FFF , 43px 1394px #FFF , 1821px 1687px #FFF , 106px 130px #FFF , 1717px 1978px #FFF , 168px 151px #FFF , 183px 740px #FFF , 945px 1381px #FFF , 669px 1170px #FFF , 1285px 1816px #FFF , 110px 1217px #FFF , 1623px 813px #FFF , 869px 647px #FFF , 867px 582px #FFF , 735px 1240px #FFF , 519px 1896px #FFF , 132px 156px #FFF , 1649px 193px #FFF , 241px 1109px #FFF , 643px 484px #FFF , 574px 1282px #FFF , 1952px 564px #FFF , 1978px 145px #FFF , 329px 903px #FFF , 1674px 617px #FFF , 1978px 558px #FFF , 1808px 1715px #FFF , 1526px 1238px #FFF , 475px 1330px #FFF , 810px 425px #FFF , 1709px 634px #FFF , 1658px 336px #FFF , 425px 194px #FFF , 352px 96px #FFF , 148px 180px #FFF , 1139px 1046px #FFF , 1809px 1233px #FFF , 1669px 171px #FFF , 263px 1394px #FFF , 534px 715px #FFF , 396px 1008px #FFF , 589px 1445px #FFF , 1190px 381px #FFF , 1709px 279px #FFF , 520px 891px #FFF , 1136px 1867px #FFF , 1280px 1233px #FFF , 836px 296px #FFF , 1348px 646px #FFF , 1539px 913px #FFF , 423px 781px #FFF , 1271px 1805px #FFF , 696px 564px #FFF , 1549px 804px #FFF , 303px 1555px #FFF , 1449px 1903px #FFF , 66px 687px #FFF , 1164px 856px #FFF , 1958px 1326px #FFF , 125px 157px #FFF , 508px 1669px #FFF , 465px 725px #FFF , 1925px 1440px #FFF , 405px 793px #FFF , 278px 110px #FFF , 1084px 1065px #FFF , 1077px 705px #FFF , 663px 1844px #FFF , 734px 263px #FFF , 870px 1761px #FFF , 103px 1169px #FFF , 1506px 1295px #FFF , 1883px 926px #FFF , 335px 1361px #FFF , 1126px 1284px #FFF , 257px 1165px #FFF , 837px 580px #FFF , 1211px 1362px #FFF , 1137px 1380px #FFF , 135px 632px #FFF , 1491px 1965px #FFF , 1098px 195px #FFF , 506px 417px #FFF , 693px 1243px #FFF , 622px 1862px #FFF , 1412px 1343px #FFF , 948px 1894px #FFF , 1315px 1363px #FFF , 754px 1098px #FFF , 1931px 930px #FFF , 1831px 342px #FFF , 1751px 1839px #FFF , 84px 775px #FFF , 1662px 1488px #FFF , 617px 1769px #FFF , 1869px 1292px #FFF , 963px 432px #FFF , 371px 1114px #FFF , 37px 642px #FFF , 21px 1184px #FFF , 602px 366px #FFF , 414px 524px #FFF , 282px 244px #FFF , 1689px 868px #FFF , 943px 681px #FFF , 898px 679px #FFF , 449px 1774px #FFF , 1678px 1313px #FFF , 475px 1811px #FFF , 1146px 1509px #FFF , 1151px 1863px #FFF , 1617px 846px #FFF , 82px 1077px #FFF , 324px 1317px #FFF , 1516px 885px #FFF , 1706px 1526px #FFF , 1925px 1180px #FFF , 553px 967px #FFF , 1072px 536px #FFF , 1715px 1816px #FFF , 185px 286px #FFF , 1362px 1600px #FFF , 628px 1938px #FFF , 1187px 412px #FFF , 569px 211px #FFF , 1959px 1356px #FFF , 1571px 105px #FFF , 319px 1111px #FFF , 36px 1364px #FFF , 502px 1788px #FFF , 1051px 1993px #FFF , 1617px 773px #FFF , 424px 1507px #FFF , 1623px 1955px #FFF , 307px 662px #FFF , 183px 1048px #FFF , 1919px 1453px #FFF , 1006px 1817px #FFF , 468px 673px #FFF , 1142px 1375px #FFF , 1228px 443px #FFF , 1734px 552px #FFF , 20px 1041px #FFF , 1783px 334px #FFF , 98px 1237px #FFF , 1356px 1940px #FFF , 853px 1779px #FFF , 1910px 560px #FFF , 1174px 1656px #FFF , 110px 1724px #FFF , 542px 1771px #FFF , 1758px 1931px #FFF , 1463px 1401px #FFF , 1155px 84px #FFF , 1504px 835px #FFF , 750px 322px #FFF , 407px 1900px #FFF , 1600px 1141px #FFF , 657px 886px #FFF , 526px 714px #FFF , 18px 836px #FFF , 1546px 1548px #FFF , 22px 469px #FFF , 594px 1466px #FFF , 1160px 1078px #FFF , 627px 1055px #FFF , 195px 699px #FFF , 1099px 684px #FFF , 530px 551px #FFF , 1160px 1325px #FFF , 894px 727px #FFF , 1157px 98px #FFF , 136px 1483px #FFF , 1875px 1975px #FFF , 1803px 566px #FFF , 318px 1073px #FFF , 1866px 1656px #FFF , 543px 414px #FFF , 719px 474px #FFF , 1115px 738px #FFF , 353px 875px #FFF , 184px 1938px #FFF , 1854px 1534px #FFF , 420px 1698px #FFF , 1480px 1550px #FFF , 522px 203px #FFF , 1897px 1904px #FFF , 975px 1708px #FFF , 1774px 602px #FFF , 1908px 274px #FFF , 61px 715px #FFF , 983px 1156px #FFF , 326px 1013px #FFF , 641px 290px #FFF , 1522px 120px #FFF , 405px 1637px #FFF , 1021px 1099px #FFF , 631px 1145px #FFF , 982px 1967px #FFF , 200px 651px #FFF , 795px 351px #FFF , 790px 1082px #FFF , 144px 1572px #FFF , 1542px 901px #FFF , 158px 1524px #FFF , 849px 1843px #FFF , 1807px 203px #FFF , 1747px 45px #FFF , 1603px 1738px #FFF , 617px 1966px #FFF , 342px 748px #FFF , 1779px 1173px #FFF , 1428px 152px #FFF , 589px 1998px #FFF , 1940px 1838px #FFF , 115px 272px #FFF , 1217px 1395px #FFF , 1402px 1491px #FFF , 1833px 1814px #FFF , 243px 966px #FFF , 319px 578px #FFF , 813px 364px #FFF , 669px 882px #FFF , 551px 134px #FFF , 1819px 920px #FFF , 740px 1826px #FFF , 1021px 952px #FFF , 1575px 453px #FFF , 324px 419px #FFF , 929px 417px #FFF , 885px 1112px #FFF , 503px 187px #FFF , 1908px 362px #FFF , 1063px 1601px #FFF , 169px 1792px #FFF , 789px 963px #FFF , 1697px 948px #FFF , 1761px 1810px #FFF , 1844px 1591px #FFF , 1709px 949px #FFF , 1402px 1396px #FFF , 1037px 225px #FFF , 1832px 518px #FFF , 1728px 1782px #FFF , 194px 1421px #FFF , 1395px 742px #FFF , 1478px 1325px #FFF , 40px 593px #FFF , 1732px 117px #FFF , 51px 158px #FFF , 1598px 1672px #FFF , 701px 849px #FFF , 1403px 1979px #FFF , 145px 1414px #FFF , 550px 906px #FFF , 1366px 460px #FFF , 142px 1379px #FFF , 34px 1864px #FFF , 1346px 308px #FFF , 293px 998px #FFF , 21px 1868px #FFF , 540px 1033px #FFF , 60px 746px #FFF , 1602px 1476px #FFF , 180px 804px #FFF , 345px 1982px #FFF , 1439px 640px #FFF , 939px 1834px #FFF , 20px 432px #FFF , 492px 1549px #FFF , 109px 1579px #FFF , 1796px 1403px #FFF , 1079px 519px #FFF , 1664px 389px #FFF , 1627px 1061px #FFF , 823px 419px #FFF , 1399px 1882px #FFF , 1906px 344px #FFF , 1189px 848px #FFF , 117px 882px #FFF , 1262px 33px #FFF , 1048px 434px #FFF , 1208px 1309px #FFF , 1616px 408px #FFF , 1833px 853px #FFF , 1433px 1656px #FFF , 811px 1861px #FFF , 439px 1672px #FFF , 1105px 248px #FFF , 328px 1652px #FFF , 13px 1658px #FFF , 685px 987px #FFF , 985px 403px #FFF , 1664px 1206px #FFF , 1993px 1925px #FFF , 440px 917px #FFF , 1835px 319px #FFF , 1404px 1907px #FFF , 624px 1443px #FFF , 843px 954px #FFF , 478px 1567px #FFF , 895px 1602px #FFF , 1231px 871px #FFF , 1267px 1646px #FFF , 475px 334px #FFF , 784px 796px #FFF , 1294px 199px #FFF , 109px 702px #FFF , 1978px 362px #FFF , 291px 940px #FFF , 971px 1343px #FFF , 74px 719px #FFF , 36px 715px #FFF , 1007px 1423px #FFF , 860px 314px #FFF , 631px 177px #FFF , 1900px 1590px #FFF , 1239px 1348px #FFF , 1346px 1270px #FFF , 1934px 1475px #FFF , 1553px 559px #FFF , 588px 1969px #FFF , 670px 1269px #FFF , 1484px 376px #FFF , 20px 1424px #FFF , 1396px 8px #FFF , 969px 244px #FFF , 1807px 538px #FFF , 1873px 891px #FFF , 636px 1142px #FFF , 1474px 1562px #FFF , 763px 350px #FFF , 663px 700px #FFF , 500px 1469px #FFF , 1302px 722px #FFF , 181px 291px #FFF , 266px 893px #FFF , 1403px 654px #FFF , 492px 460px #FFF , 1503px 1369px #FFF , 23px 1662px #FFF , 349px 333px #FFF , 1435px 1017px #FFF , 1441px 705px #FFF , 1708px 1446px #FFF , 1041px 911px #FFF , 1063px 780px #FFF , 1158px 1356px #FFF , 767px 1454px #FFF , 1912px 797px #FFF , 1731px 1759px #FFF , 1378px 1390px #FFF , 1815px 1364px #FFF , 960px 270px #FFF , 1343px 427px #FFF , 275px 203px #FFF , 1319px 1092px #FFF , 1455px 770px #FFF , 283px 1503px #FFF , 1505px 901px #FFF , 1738px 1561px #FFF , 1526px 1935px #FFF , 1757px 669px #FFF , 1640px 620px #FFF , 1750px 722px #FFF , 748px 66px #FFF , 1149px 540px #FFF , 159px 953px #FFF , 200px 1426px #FFF , 515px 1110px #FFF , 1552px 737px #FFF , 1094px 1459px #FFF , 778px 799px #FFF , 1031px 523px #FFF , 743px 1825px #FFF , 1100px 882px #FFF , 1088px 1836px #FFF , 255px 599px #FFF , 67px 1361px #FFF , 247px 1721px #FFF , 1722px 346px #FFF , 1822px 155px #FFF , 452px 1973px #FFF , 415px 1960px #FFF , 1109px 57px #FFF , 273px 1392px #FFF , 404px 1071px #FFF , 1212px 353px #FFF , 370px 460px #FFF , 795px 1523px #FFF , 1932px 340px #FFF , 51px 1473px #FFF , 1268px 364px #FFF , 1512px 1862px #FFF , 1678px 1801px #FFF , 1796px 579px #FFF , 254px 251px #FFF , 1466px 1717px #FFF , 893px 379px #FFF , 1153px 923px #FFF , 913px 1808px #FFF , 791px 789px #FFF , 417px 1924px #FFF , 1336px 1599px #FFF , 1695px 908px #FFF , 1120px 114px #FFF , 493px 1949px #FFF , 68px 1905px #FFF , 969px 481px #FFF , 1420px 1095px #FFF , 800px 1117px #FFF , 390px 234px #FFF , 356px 1644px #FFF , 1098px 1486px #FFF , 1360px 521px #FFF , 149px 1198px #FFF , 354px 747px #FFF , 1749px 487px #FFF , 470px 76px #FFF , 1672px 289px #FFF , 1731px 545px #FFF , 1547px 1590px #FFF , 498px 692px #FFF , 398px 1592px #FFF , 1846px 1237px #FFF , 1537px 1474px #FFF , 1726px 1374px #FFF , 1922px 858px #FFF , 376px 321px #FFF , 985px 227px #FFF , 234px 1421px #FFF , 760px 745px #FFF , 1990px 1132px #FFF , 1560px 1597px #FFF , 338px 1310px #FFF , 1924px 1664px #FFF , 547px 1747px #FFF , 1639px 1282px #FFF , 1202px 337px #FFF , 1985px 779px #FFF , 737px 456px #FFF , 89px 501px #FFF , 963px 792px #FFF , 655px 1447px #FFF , 1492px 1994px #FFF , 1171px 254px #FFF , 892px 827px #FFF , 1735px 442px #FFF , 1474px 1187px #FFF , 846px 1518px #FFF , 557px 1805px #FFF , 738px 945px #FFF , 795px 68px #FFF , 663px 1956px #FFF , 1607px 290px #FFF , 1524px 15px #FFF , 1097px 1911px #FFF , 157px 1939px #FFF , 935px 1065px #FFF , 1809px 1708px #FFF , 164px 1157px #FFF , 83px 855px #FFF , 625px 501px #FFF , 814px 398px #FFF , 552px 695px #FFF , 597px 1546px #FFF , 1237px 1417px #FFF , 628px 284px #FFF , 866px 767px #FFF , 1403px 1394px #FFF , 765px 1563px #FFF , 1648px 109px #FFF , 1205px 1659px #FFF , 921px 1313px #FFF , 1319px 243px #FFF , 18px 125px #FFF , 7px 777px #FFF , 181px 418px #FFF , 1062px 1892px #FFF , 382px 106px #FFF , 994px 751px #FFF , 964px 234px #FFF , 40px 118px #FFF , 278px 706px #FFF , 1540px 1978px #FFF , 425px 1661px #FFF , 1050px 321px #FFF , 735px 1729px #FFF , 1438px 260px #FFF , 1229px 1109px #FFF , 186px 1041px #FFF , 244px 1184px #FFF , 392px 1472px #FFF , 670px 1249px #FFF , 1260px 1443px #FFF , 1977px 1511px #FFF , 1240px 773px #FFF , 303px 513px #FFF , 63px 1530px #FFF , 610px 792px #FFF , 1987px 1647px #FFF , 676px 1597px #FFF , 1740px 1244px #FFF , 816px 1661px #FFF , 351px 802px #FFF , 252px 1082px #FFF , 31px 365px #FFF , 1453px 984px #FFF , 667px 1233px #FFF , 1247px 1800px #FFF , 839px 270px #FFF , 775px 913px #FFF , 1966px 1398px #FFF , 499px 813px #FFF , 922px 1982px #FFF , 1409px 1902px #FFF , 1499px 1766px #FFF , 721px 899px #FFF , 788px 807px #FFF , 989px 1355px #FFF , 1248px 1274px #FFF , 849px 1091px #FFF , 1799px 1036px #FFF , 1486px 700px #FFF , 170px 1989px #FFF , 1275px 799px #FFF , 772px 2000px #FFF , 1642px 362px #FFF , 216px 940px #FFF , 1893px 281px #FFF , 1944px 1298px #FFF , 1294px 400px #FFF , 1523px 441px #FFF , 1829px 340px #FFF , 468px 170px #FFF , 1099px 967px #FFF , 1331px 665px #FFF , 1174px 1553px #FFF , 1567px 325px #FFF , 1028px 1399px #FFF , 781px 1451px #FFF , 1912px 1954px #FFF , 874px 873px #FFF , 1298px 1722px #FFF , 1879px 706px #FFF , 57px 1221px #FFF , 1116px 1432px #FFF , 48px 811px #FFF , 101px 916px #FFF , 677px 304px #FFF , 1203px 639px #FFF , 1391px 199px #FFF , 1895px 1988px #FFF , 1462px 1023px #FFF , 1216px 1751px #FFF , 1261px 663px #FFF , 1290px 1119px #FFF , 137px 1793px #FFF , 1052px 1470px #FFF , 1561px 226px #FFF , 1156px 402px #FFF , 709px 693px #FFF , 1040px 1911px #FFF , 1624px 1115px #FFF , 551px 475px #FFF , 416px 1090px #FFF , 1183px 451px #FFF , 58px 765px #FFF , 743px 1016px #FFF , 198px 369px #FFF , 1645px 1503px #FFF , 997px 22px #FFF , 1447px 1323px #FFF , 379px 883px #FFF , 1171px 1195px #FFF , 919px 133px #FFF , 1400px 517px #FFF , 725px 804px #FFF , 1600px 699px #FFF , 357px 581px #FFF , 266px 1713px #FFF , 848px 1749px #FFF , 1963px 1045px #FFF , 119px 1136px #FFF;\r\n}\r\n.animation-wrapper .particle-2 {\r\n  width: 2px;\r\n  height: 2px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 1117px 1306px #FFF , 1078px 1783px #FFF , 1179px 1085px #FFF , 1145px 920px #FFF , 422px 1233px #FFF , 387px 98px #FFF , 1153px 637px #FFF , 1084px 782px #FFF , 476px 453px #FFF , 926px 1306px #FFF , 60px 1086px #FFF , 753px 1575px #FFF , 272px 1684px #FFF , 1285px 750px #FFF , 1416px 1327px #FFF , 1931px 473px #FFF , 736px 1395px #FFF , 1816px 763px #FFF , 438px 879px #FFF , 665px 1902px #FFF , 1341px 677px #FFF , 1404px 1073px #FFF , 100px 597px #FFF , 357px 1689px #FFF , 1044px 1342px #FFF , 1954px 502px #FFF , 1192px 1308px #FFF , 540px 1239px #FFF , 1360px 552px #FFF , 89px 752px #FFF , 659px 1253px #FFF , 62px 517px #FFF , 1375px 1705px #FFF , 1343px 1511px #FFF , 1659px 1922px #FFF , 1560px 289px #FFF , 1362px 1799px #FFF , 1886px 1480px #FFF , 1718px 1885px #FFF , 824px 738px #FFF , 1060px 1370px #FFF , 1781px 1171px #FFF , 255px 273px #FFF , 1197px 120px #FFF , 213px 7px #FFF , 1226px 1920px #FFF , 1844px 207px #FFF , 1675px 970px #FFF , 1435px 1283px #FFF , 37px 353px #FFF , 59px 417px #FFF , 921px 1602px #FFF , 1549px 1490px #FFF , 638px 1845px #FFF , 1328px 198px #FFF , 1050px 1149px #FFF , 1884px 711px #FFF , 333px 263px #FFF , 342px 1508px #FFF , 1388px 1810px #FFF , 1377px 1558px #FFF , 890px 487px #FFF , 1081px 759px #FFF , 890px 1515px #FFF , 911px 1284px #FFF , 335px 735px #FFF , 1140px 549px #FFF , 1239px 1064px #FFF , 226px 71px #FFF , 1100px 1278px #FFF , 1851px 1805px #FFF , 1370px 1999px #FFF , 1008px 1122px #FFF , 785px 813px #FFF , 1358px 601px #FFF , 1833px 1305px #FFF , 1768px 1304px #FFF , 1303px 532px #FFF , 860px 598px #FFF , 1329px 593px #FFF , 1038px 1088px #FFF , 408px 405px #FFF , 965px 82px #FFF , 1483px 1438px #FFF , 310px 1479px #FFF , 1786px 1500px #FFF , 1866px 852px #FFF , 18px 1757px #FFF , 1473px 1004px #FFF , 1542px 1933px #FFF , 633px 1970px #FFF , 1334px 1713px #FFF , 175px 28px #FFF , 592px 894px #FFF , 121px 1162px #FFF , 1601px 1567px #FFF , 1095px 657px #FFF , 640px 1233px #FFF , 1073px 1255px #FFF , 840px 1087px #FFF , 718px 250px #FFF , 967px 709px #FFF , 731px 239px #FFF , 1623px 593px #FFF , 1058px 1820px #FFF , 516px 1898px #FFF , 666px 12px #FFF , 1997px 1382px #FFF , 112px 1690px #FFF , 687px 1309px #FFF , 63px 539px #FFF , 185px 1897px #FFF , 1055px 1691px #FFF , 435px 1517px #FFF , 1175px 1119px #FFF , 1721px 133px #FFF , 1212px 47px #FFF , 166px 18px #FFF , 1416px 1652px #FFF , 1409px 1745px #FFF , 1357px 1232px #FFF , 1677px 1998px #FFF , 448px 1415px #FFF , 705px 1736px #FFF , 1031px 1466px #FFF , 543px 1651px #FFF , 1592px 1888px #FFF , 1749px 1175px #FFF , 639px 1114px #FFF , 1591px 508px #FFF , 759px 1244px #FFF , 824px 380px #FFF , 942px 955px #FFF , 723px 732px #FFF , 113px 1369px #FFF , 203px 1739px #FFF , 868px 733px #FFF , 713px 971px #FFF , 341px 833px #FFF , 762px 824px #FFF , 1359px 310px #FFF , 1858px 1349px #FFF , 1531px 692px #FFF , 1075px 1512px #FFF , 1677px 142px #FFF , 1912px 1478px #FFF , 1810px 1078px #FFF , 426px 844px #FFF , 1426px 588px #FFF , 1909px 654px #FFF , 1107px 295px #FFF , 1351px 527px #FFF , 1393px 599px #FFF , 1379px 1068px #FFF , 228px 1846px #FFF , 1271px 374px #FFF , 1348px 612px #FFF , 7px 1301px #FFF , 1501px 1782px #FFF , 1795px 423px #FFF , 1475px 1918px #FFF , 1328px 1861px #FFF , 1624px 51px #FFF , 1791px 672px #FFF , 1594px 1467px #FFF , 1655px 1603px #FFF , 919px 850px #FFF , 523px 609px #FFF , 1196px 207px #FFF , 753px 410px #FFF , 686px 1097px #FFF , 1570px 133px #FFF , 1996px 1137px #FFF , 361px 116px #FFF , 1015px 462px #FFF , 76px 1143px #FFF , 491px 1818px #FFF , 1563px 795px #FFF , 982px 1721px #FFF , 831px 1204px #FFF , 1737px 589px #FFF , 861px 1579px #FFF , 1666px 130px #FFF , 698px 1799px #FFF , 726px 1519px #FFF , 109px 1208px #FFF , 1184px 1057px #FFF , 835px 451px #FFF , 896px 594px #FFF , 35px 893px #FFF , 895px 542px #FFF , 706px 225px #FFF , 56px 1040px #FFF , 1954px 108px #FFF , 1439px 1423px #FFF , 26px 1881px #FFF , 802px 1564px #FFF , 273px 708px #FFF , 40px 31px #FFF , 859px 108px #FFF;\r\n          box-shadow: 1117px 1306px #FFF , 1078px 1783px #FFF , 1179px 1085px #FFF , 1145px 920px #FFF , 422px 1233px #FFF , 387px 98px #FFF , 1153px 637px #FFF , 1084px 782px #FFF , 476px 453px #FFF , 926px 1306px #FFF , 60px 1086px #FFF , 753px 1575px #FFF , 272px 1684px #FFF , 1285px 750px #FFF , 1416px 1327px #FFF , 1931px 473px #FFF , 736px 1395px #FFF , 1816px 763px #FFF , 438px 879px #FFF , 665px 1902px #FFF , 1341px 677px #FFF , 1404px 1073px #FFF , 100px 597px #FFF , 357px 1689px #FFF , 1044px 1342px #FFF , 1954px 502px #FFF , 1192px 1308px #FFF , 540px 1239px #FFF , 1360px 552px #FFF , 89px 752px #FFF , 659px 1253px #FFF , 62px 517px #FFF , 1375px 1705px #FFF , 1343px 1511px #FFF , 1659px 1922px #FFF , 1560px 289px #FFF , 1362px 1799px #FFF , 1886px 1480px #FFF , 1718px 1885px #FFF , 824px 738px #FFF , 1060px 1370px #FFF , 1781px 1171px #FFF , 255px 273px #FFF , 1197px 120px #FFF , 213px 7px #FFF , 1226px 1920px #FFF , 1844px 207px #FFF , 1675px 970px #FFF , 1435px 1283px #FFF , 37px 353px #FFF , 59px 417px #FFF , 921px 1602px #FFF , 1549px 1490px #FFF , 638px 1845px #FFF , 1328px 198px #FFF , 1050px 1149px #FFF , 1884px 711px #FFF , 333px 263px #FFF , 342px 1508px #FFF , 1388px 1810px #FFF , 1377px 1558px #FFF , 890px 487px #FFF , 1081px 759px #FFF , 890px 1515px #FFF , 911px 1284px #FFF , 335px 735px #FFF , 1140px 549px #FFF , 1239px 1064px #FFF , 226px 71px #FFF , 1100px 1278px #FFF , 1851px 1805px #FFF , 1370px 1999px #FFF , 1008px 1122px #FFF , 785px 813px #FFF , 1358px 601px #FFF , 1833px 1305px #FFF , 1768px 1304px #FFF , 1303px 532px #FFF , 860px 598px #FFF , 1329px 593px #FFF , 1038px 1088px #FFF , 408px 405px #FFF , 965px 82px #FFF , 1483px 1438px #FFF , 310px 1479px #FFF , 1786px 1500px #FFF , 1866px 852px #FFF , 18px 1757px #FFF , 1473px 1004px #FFF , 1542px 1933px #FFF , 633px 1970px #FFF , 1334px 1713px #FFF , 175px 28px #FFF , 592px 894px #FFF , 121px 1162px #FFF , 1601px 1567px #FFF , 1095px 657px #FFF , 640px 1233px #FFF , 1073px 1255px #FFF , 840px 1087px #FFF , 718px 250px #FFF , 967px 709px #FFF , 731px 239px #FFF , 1623px 593px #FFF , 1058px 1820px #FFF , 516px 1898px #FFF , 666px 12px #FFF , 1997px 1382px #FFF , 112px 1690px #FFF , 687px 1309px #FFF , 63px 539px #FFF , 185px 1897px #FFF , 1055px 1691px #FFF , 435px 1517px #FFF , 1175px 1119px #FFF , 1721px 133px #FFF , 1212px 47px #FFF , 166px 18px #FFF , 1416px 1652px #FFF , 1409px 1745px #FFF , 1357px 1232px #FFF , 1677px 1998px #FFF , 448px 1415px #FFF , 705px 1736px #FFF , 1031px 1466px #FFF , 543px 1651px #FFF , 1592px 1888px #FFF , 1749px 1175px #FFF , 639px 1114px #FFF , 1591px 508px #FFF , 759px 1244px #FFF , 824px 380px #FFF , 942px 955px #FFF , 723px 732px #FFF , 113px 1369px #FFF , 203px 1739px #FFF , 868px 733px #FFF , 713px 971px #FFF , 341px 833px #FFF , 762px 824px #FFF , 1359px 310px #FFF , 1858px 1349px #FFF , 1531px 692px #FFF , 1075px 1512px #FFF , 1677px 142px #FFF , 1912px 1478px #FFF , 1810px 1078px #FFF , 426px 844px #FFF , 1426px 588px #FFF , 1909px 654px #FFF , 1107px 295px #FFF , 1351px 527px #FFF , 1393px 599px #FFF , 1379px 1068px #FFF , 228px 1846px #FFF , 1271px 374px #FFF , 1348px 612px #FFF , 7px 1301px #FFF , 1501px 1782px #FFF , 1795px 423px #FFF , 1475px 1918px #FFF , 1328px 1861px #FFF , 1624px 51px #FFF , 1791px 672px #FFF , 1594px 1467px #FFF , 1655px 1603px #FFF , 919px 850px #FFF , 523px 609px #FFF , 1196px 207px #FFF , 753px 410px #FFF , 686px 1097px #FFF , 1570px 133px #FFF , 1996px 1137px #FFF , 361px 116px #FFF , 1015px 462px #FFF , 76px 1143px #FFF , 491px 1818px #FFF , 1563px 795px #FFF , 982px 1721px #FFF , 831px 1204px #FFF , 1737px 589px #FFF , 861px 1579px #FFF , 1666px 130px #FFF , 698px 1799px #FFF , 726px 1519px #FFF , 109px 1208px #FFF , 1184px 1057px #FFF , 835px 451px #FFF , 896px 594px #FFF , 35px 893px #FFF , 895px 542px #FFF , 706px 225px #FFF , 56px 1040px #FFF , 1954px 108px #FFF , 1439px 1423px #FFF , 26px 1881px #FFF , 802px 1564px #FFF , 273px 708px #FFF , 40px 31px #FFF , 859px 108px #FFF;\r\n  -webkit-animation: animStar 100s linear infinite;\r\n  animation: animStar 100s linear infinite;\r\n}\r\n.animation-wrapper .particle-2:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 2px;\r\n  height: 2px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 1117px 1306px #FFF , 1078px 1783px #FFF , 1179px 1085px #FFF , 1145px 920px #FFF , 422px 1233px #FFF , 387px 98px #FFF , 1153px 637px #FFF , 1084px 782px #FFF , 476px 453px #FFF , 926px 1306px #FFF , 60px 1086px #FFF , 753px 1575px #FFF , 272px 1684px #FFF , 1285px 750px #FFF , 1416px 1327px #FFF , 1931px 473px #FFF , 736px 1395px #FFF , 1816px 763px #FFF , 438px 879px #FFF , 665px 1902px #FFF , 1341px 677px #FFF , 1404px 1073px #FFF , 100px 597px #FFF , 357px 1689px #FFF , 1044px 1342px #FFF , 1954px 502px #FFF , 1192px 1308px #FFF , 540px 1239px #FFF , 1360px 552px #FFF , 89px 752px #FFF , 659px 1253px #FFF , 62px 517px #FFF , 1375px 1705px #FFF , 1343px 1511px #FFF , 1659px 1922px #FFF , 1560px 289px #FFF , 1362px 1799px #FFF , 1886px 1480px #FFF , 1718px 1885px #FFF , 824px 738px #FFF , 1060px 1370px #FFF , 1781px 1171px #FFF , 255px 273px #FFF , 1197px 120px #FFF , 213px 7px #FFF , 1226px 1920px #FFF , 1844px 207px #FFF , 1675px 970px #FFF , 1435px 1283px #FFF , 37px 353px #FFF , 59px 417px #FFF , 921px 1602px #FFF , 1549px 1490px #FFF , 638px 1845px #FFF , 1328px 198px #FFF , 1050px 1149px #FFF , 1884px 711px #FFF , 333px 263px #FFF , 342px 1508px #FFF , 1388px 1810px #FFF , 1377px 1558px #FFF , 890px 487px #FFF , 1081px 759px #FFF , 890px 1515px #FFF , 911px 1284px #FFF , 335px 735px #FFF , 1140px 549px #FFF , 1239px 1064px #FFF , 226px 71px #FFF , 1100px 1278px #FFF , 1851px 1805px #FFF , 1370px 1999px #FFF , 1008px 1122px #FFF , 785px 813px #FFF , 1358px 601px #FFF , 1833px 1305px #FFF , 1768px 1304px #FFF , 1303px 532px #FFF , 860px 598px #FFF , 1329px 593px #FFF , 1038px 1088px #FFF , 408px 405px #FFF , 965px 82px #FFF , 1483px 1438px #FFF , 310px 1479px #FFF , 1786px 1500px #FFF , 1866px 852px #FFF , 18px 1757px #FFF , 1473px 1004px #FFF , 1542px 1933px #FFF , 633px 1970px #FFF , 1334px 1713px #FFF , 175px 28px #FFF , 592px 894px #FFF , 121px 1162px #FFF , 1601px 1567px #FFF , 1095px 657px #FFF , 640px 1233px #FFF , 1073px 1255px #FFF , 840px 1087px #FFF , 718px 250px #FFF , 967px 709px #FFF , 731px 239px #FFF , 1623px 593px #FFF , 1058px 1820px #FFF , 516px 1898px #FFF , 666px 12px #FFF , 1997px 1382px #FFF , 112px 1690px #FFF , 687px 1309px #FFF , 63px 539px #FFF , 185px 1897px #FFF , 1055px 1691px #FFF , 435px 1517px #FFF , 1175px 1119px #FFF , 1721px 133px #FFF , 1212px 47px #FFF , 166px 18px #FFF , 1416px 1652px #FFF , 1409px 1745px #FFF , 1357px 1232px #FFF , 1677px 1998px #FFF , 448px 1415px #FFF , 705px 1736px #FFF , 1031px 1466px #FFF , 543px 1651px #FFF , 1592px 1888px #FFF , 1749px 1175px #FFF , 639px 1114px #FFF , 1591px 508px #FFF , 759px 1244px #FFF , 824px 380px #FFF , 942px 955px #FFF , 723px 732px #FFF , 113px 1369px #FFF , 203px 1739px #FFF , 868px 733px #FFF , 713px 971px #FFF , 341px 833px #FFF , 762px 824px #FFF , 1359px 310px #FFF , 1858px 1349px #FFF , 1531px 692px #FFF , 1075px 1512px #FFF , 1677px 142px #FFF , 1912px 1478px #FFF , 1810px 1078px #FFF , 426px 844px #FFF , 1426px 588px #FFF , 1909px 654px #FFF , 1107px 295px #FFF , 1351px 527px #FFF , 1393px 599px #FFF , 1379px 1068px #FFF , 228px 1846px #FFF , 1271px 374px #FFF , 1348px 612px #FFF , 7px 1301px #FFF , 1501px 1782px #FFF , 1795px 423px #FFF , 1475px 1918px #FFF , 1328px 1861px #FFF , 1624px 51px #FFF , 1791px 672px #FFF , 1594px 1467px #FFF , 1655px 1603px #FFF , 919px 850px #FFF , 523px 609px #FFF , 1196px 207px #FFF , 753px 410px #FFF , 686px 1097px #FFF , 1570px 133px #FFF , 1996px 1137px #FFF , 361px 116px #FFF , 1015px 462px #FFF , 76px 1143px #FFF , 491px 1818px #FFF , 1563px 795px #FFF , 982px 1721px #FFF , 831px 1204px #FFF , 1737px 589px #FFF , 861px 1579px #FFF , 1666px 130px #FFF , 698px 1799px #FFF , 726px 1519px #FFF , 109px 1208px #FFF , 1184px 1057px #FFF , 835px 451px #FFF , 896px 594px #FFF , 35px 893px #FFF , 895px 542px #FFF , 706px 225px #FFF , 56px 1040px #FFF , 1954px 108px #FFF , 1439px 1423px #FFF , 26px 1881px #FFF , 802px 1564px #FFF , 273px 708px #FFF , 40px 31px #FFF , 859px 108px #FFF;\r\n          box-shadow: 1117px 1306px #FFF , 1078px 1783px #FFF , 1179px 1085px #FFF , 1145px 920px #FFF , 422px 1233px #FFF , 387px 98px #FFF , 1153px 637px #FFF , 1084px 782px #FFF , 476px 453px #FFF , 926px 1306px #FFF , 60px 1086px #FFF , 753px 1575px #FFF , 272px 1684px #FFF , 1285px 750px #FFF , 1416px 1327px #FFF , 1931px 473px #FFF , 736px 1395px #FFF , 1816px 763px #FFF , 438px 879px #FFF , 665px 1902px #FFF , 1341px 677px #FFF , 1404px 1073px #FFF , 100px 597px #FFF , 357px 1689px #FFF , 1044px 1342px #FFF , 1954px 502px #FFF , 1192px 1308px #FFF , 540px 1239px #FFF , 1360px 552px #FFF , 89px 752px #FFF , 659px 1253px #FFF , 62px 517px #FFF , 1375px 1705px #FFF , 1343px 1511px #FFF , 1659px 1922px #FFF , 1560px 289px #FFF , 1362px 1799px #FFF , 1886px 1480px #FFF , 1718px 1885px #FFF , 824px 738px #FFF , 1060px 1370px #FFF , 1781px 1171px #FFF , 255px 273px #FFF , 1197px 120px #FFF , 213px 7px #FFF , 1226px 1920px #FFF , 1844px 207px #FFF , 1675px 970px #FFF , 1435px 1283px #FFF , 37px 353px #FFF , 59px 417px #FFF , 921px 1602px #FFF , 1549px 1490px #FFF , 638px 1845px #FFF , 1328px 198px #FFF , 1050px 1149px #FFF , 1884px 711px #FFF , 333px 263px #FFF , 342px 1508px #FFF , 1388px 1810px #FFF , 1377px 1558px #FFF , 890px 487px #FFF , 1081px 759px #FFF , 890px 1515px #FFF , 911px 1284px #FFF , 335px 735px #FFF , 1140px 549px #FFF , 1239px 1064px #FFF , 226px 71px #FFF , 1100px 1278px #FFF , 1851px 1805px #FFF , 1370px 1999px #FFF , 1008px 1122px #FFF , 785px 813px #FFF , 1358px 601px #FFF , 1833px 1305px #FFF , 1768px 1304px #FFF , 1303px 532px #FFF , 860px 598px #FFF , 1329px 593px #FFF , 1038px 1088px #FFF , 408px 405px #FFF , 965px 82px #FFF , 1483px 1438px #FFF , 310px 1479px #FFF , 1786px 1500px #FFF , 1866px 852px #FFF , 18px 1757px #FFF , 1473px 1004px #FFF , 1542px 1933px #FFF , 633px 1970px #FFF , 1334px 1713px #FFF , 175px 28px #FFF , 592px 894px #FFF , 121px 1162px #FFF , 1601px 1567px #FFF , 1095px 657px #FFF , 640px 1233px #FFF , 1073px 1255px #FFF , 840px 1087px #FFF , 718px 250px #FFF , 967px 709px #FFF , 731px 239px #FFF , 1623px 593px #FFF , 1058px 1820px #FFF , 516px 1898px #FFF , 666px 12px #FFF , 1997px 1382px #FFF , 112px 1690px #FFF , 687px 1309px #FFF , 63px 539px #FFF , 185px 1897px #FFF , 1055px 1691px #FFF , 435px 1517px #FFF , 1175px 1119px #FFF , 1721px 133px #FFF , 1212px 47px #FFF , 166px 18px #FFF , 1416px 1652px #FFF , 1409px 1745px #FFF , 1357px 1232px #FFF , 1677px 1998px #FFF , 448px 1415px #FFF , 705px 1736px #FFF , 1031px 1466px #FFF , 543px 1651px #FFF , 1592px 1888px #FFF , 1749px 1175px #FFF , 639px 1114px #FFF , 1591px 508px #FFF , 759px 1244px #FFF , 824px 380px #FFF , 942px 955px #FFF , 723px 732px #FFF , 113px 1369px #FFF , 203px 1739px #FFF , 868px 733px #FFF , 713px 971px #FFF , 341px 833px #FFF , 762px 824px #FFF , 1359px 310px #FFF , 1858px 1349px #FFF , 1531px 692px #FFF , 1075px 1512px #FFF , 1677px 142px #FFF , 1912px 1478px #FFF , 1810px 1078px #FFF , 426px 844px #FFF , 1426px 588px #FFF , 1909px 654px #FFF , 1107px 295px #FFF , 1351px 527px #FFF , 1393px 599px #FFF , 1379px 1068px #FFF , 228px 1846px #FFF , 1271px 374px #FFF , 1348px 612px #FFF , 7px 1301px #FFF , 1501px 1782px #FFF , 1795px 423px #FFF , 1475px 1918px #FFF , 1328px 1861px #FFF , 1624px 51px #FFF , 1791px 672px #FFF , 1594px 1467px #FFF , 1655px 1603px #FFF , 919px 850px #FFF , 523px 609px #FFF , 1196px 207px #FFF , 753px 410px #FFF , 686px 1097px #FFF , 1570px 133px #FFF , 1996px 1137px #FFF , 361px 116px #FFF , 1015px 462px #FFF , 76px 1143px #FFF , 491px 1818px #FFF , 1563px 795px #FFF , 982px 1721px #FFF , 831px 1204px #FFF , 1737px 589px #FFF , 861px 1579px #FFF , 1666px 130px #FFF , 698px 1799px #FFF , 726px 1519px #FFF , 109px 1208px #FFF , 1184px 1057px #FFF , 835px 451px #FFF , 896px 594px #FFF , 35px 893px #FFF , 895px 542px #FFF , 706px 225px #FFF , 56px 1040px #FFF , 1954px 108px #FFF , 1439px 1423px #FFF , 26px 1881px #FFF , 802px 1564px #FFF , 273px 708px #FFF , 40px 31px #FFF , 859px 108px #FFF;\r\n}\r\n.animation-wrapper .particle-3 {\r\n  width: 3px;\r\n  height: 3px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 940px 1360px #FFF , 1071px 539px #FFF , 1710px 1414px #FFF , 836px 299px #FFF , 1944px 1420px #FFF , 253px 1449px #FFF , 1257px 1250px #FFF , 1588px 1830px #FFF , 1077px 1204px #FFF , 273px 1081px #FFF , 1993px 766px #FFF , 1808px 479px #FFF , 917px 263px #FFF , 663px 1820px #FFF , 342px 1988px #FFF , 727px 1250px #FFF , 636px 1666px #FFF , 692px 1112px #FFF , 248px 1211px #FFF , 1422px 1121px #FFF , 881px 46px #FFF , 1531px 1977px #FFF , 1643px 1023px #FFF , 684px 1071px #FFF , 1142px 1873px #FFF , 292px 1313px #FFF , 256px 1237px #FFF , 89px 912px #FFF , 964px 1783px #FFF , 877px 760px #FFF , 1641px 1474px #FFF , 1492px 24px #FFF , 1776px 1642px #FFF , 183px 602px #FFF , 1998px 62px #FFF , 1560px 367px #FFF , 1333px 995px #FFF , 704px 1815px #FFF , 1809px 712px #FFF , 1503px 288px #FFF , 630px 556px #FFF , 1715px 125px #FFF , 353px 1878px #FFF , 975px 333px #FFF , 1740px 1409px #FFF , 1341px 1871px #FFF , 1279px 1064px #FFF , 169px 874px #FFF , 161px 528px #FFF , 1671px 1669px #FFF , 169px 632px #FFF , 547px 1724px #FFF , 1904px 110px #FFF , 679px 1670px #FFF , 196px 123px #FFF , 786px 871px #FFF , 1840px 324px #FFF , 356px 967px #FFF , 61px 549px #FFF , 99px 677px #FFF , 1719px 87px #FFF , 1713px 1990px #FFF , 1717px 1358px #FFF , 108px 1187px #FFF , 51px 869px #FFF , 1461px 902px #FFF , 1034px 891px #FFF , 962px 1881px #FFF , 1723px 595px #FFF , 479px 901px #FFF , 1546px 1823px #FFF , 285px 1208px #FFF , 1056px 347px #FFF , 261px 988px #FFF , 466px 990px #FFF , 1657px 648px #FFF , 1249px 933px #FFF , 1552px 1555px #FFF , 147px 62px #FFF , 292px 1157px #FFF , 1816px 423px #FFF , 1714px 757px #FFF , 1036px 961px #FFF , 1955px 710px #FFF , 1842px 516px #FFF , 479px 1870px #FFF , 1579px 1445px #FFF , 1225px 1309px #FFF , 1965px 566px #FFF , 1575px 1072px #FFF , 923px 329px #FFF , 651px 1514px #FFF , 865px 1100px #FFF , 782px 1873px #FFF , 115px 299px #FFF , 14px 1668px #FFF , 1666px 1817px #FFF , 1096px 1068px #FFF , 1462px 742px #FFF , 1384px 1750px #FFF;\r\n          box-shadow: 940px 1360px #FFF , 1071px 539px #FFF , 1710px 1414px #FFF , 836px 299px #FFF , 1944px 1420px #FFF , 253px 1449px #FFF , 1257px 1250px #FFF , 1588px 1830px #FFF , 1077px 1204px #FFF , 273px 1081px #FFF , 1993px 766px #FFF , 1808px 479px #FFF , 917px 263px #FFF , 663px 1820px #FFF , 342px 1988px #FFF , 727px 1250px #FFF , 636px 1666px #FFF , 692px 1112px #FFF , 248px 1211px #FFF , 1422px 1121px #FFF , 881px 46px #FFF , 1531px 1977px #FFF , 1643px 1023px #FFF , 684px 1071px #FFF , 1142px 1873px #FFF , 292px 1313px #FFF , 256px 1237px #FFF , 89px 912px #FFF , 964px 1783px #FFF , 877px 760px #FFF , 1641px 1474px #FFF , 1492px 24px #FFF , 1776px 1642px #FFF , 183px 602px #FFF , 1998px 62px #FFF , 1560px 367px #FFF , 1333px 995px #FFF , 704px 1815px #FFF , 1809px 712px #FFF , 1503px 288px #FFF , 630px 556px #FFF , 1715px 125px #FFF , 353px 1878px #FFF , 975px 333px #FFF , 1740px 1409px #FFF , 1341px 1871px #FFF , 1279px 1064px #FFF , 169px 874px #FFF , 161px 528px #FFF , 1671px 1669px #FFF , 169px 632px #FFF , 547px 1724px #FFF , 1904px 110px #FFF , 679px 1670px #FFF , 196px 123px #FFF , 786px 871px #FFF , 1840px 324px #FFF , 356px 967px #FFF , 61px 549px #FFF , 99px 677px #FFF , 1719px 87px #FFF , 1713px 1990px #FFF , 1717px 1358px #FFF , 108px 1187px #FFF , 51px 869px #FFF , 1461px 902px #FFF , 1034px 891px #FFF , 962px 1881px #FFF , 1723px 595px #FFF , 479px 901px #FFF , 1546px 1823px #FFF , 285px 1208px #FFF , 1056px 347px #FFF , 261px 988px #FFF , 466px 990px #FFF , 1657px 648px #FFF , 1249px 933px #FFF , 1552px 1555px #FFF , 147px 62px #FFF , 292px 1157px #FFF , 1816px 423px #FFF , 1714px 757px #FFF , 1036px 961px #FFF , 1955px 710px #FFF , 1842px 516px #FFF , 479px 1870px #FFF , 1579px 1445px #FFF , 1225px 1309px #FFF , 1965px 566px #FFF , 1575px 1072px #FFF , 923px 329px #FFF , 651px 1514px #FFF , 865px 1100px #FFF , 782px 1873px #FFF , 115px 299px #FFF , 14px 1668px #FFF , 1666px 1817px #FFF , 1096px 1068px #FFF , 1462px 742px #FFF , 1384px 1750px #FFF;\r\n  -webkit-animation: animStar 150s linear infinite;\r\n  animation: animStar 150s linear infinite;\r\n}\r\n.animation-wrapper .particle-3:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 3px;\r\n  height: 3px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 940px 1360px #FFF , 1071px 539px #FFF , 1710px 1414px #FFF , 836px 299px #FFF , 1944px 1420px #FFF , 253px 1449px #FFF , 1257px 1250px #FFF , 1588px 1830px #FFF , 1077px 1204px #FFF , 273px 1081px #FFF , 1993px 766px #FFF , 1808px 479px #FFF , 917px 263px #FFF , 663px 1820px #FFF , 342px 1988px #FFF , 727px 1250px #FFF , 636px 1666px #FFF , 692px 1112px #FFF , 248px 1211px #FFF , 1422px 1121px #FFF , 881px 46px #FFF , 1531px 1977px #FFF , 1643px 1023px #FFF , 684px 1071px #FFF , 1142px 1873px #FFF , 292px 1313px #FFF , 256px 1237px #FFF , 89px 912px #FFF , 964px 1783px #FFF , 877px 760px #FFF , 1641px 1474px #FFF , 1492px 24px #FFF , 1776px 1642px #FFF , 183px 602px #FFF , 1998px 62px #FFF , 1560px 367px #FFF , 1333px 995px #FFF , 704px 1815px #FFF , 1809px 712px #FFF , 1503px 288px #FFF , 630px 556px #FFF , 1715px 125px #FFF , 353px 1878px #FFF , 975px 333px #FFF , 1740px 1409px #FFF , 1341px 1871px #FFF , 1279px 1064px #FFF , 169px 874px #FFF , 161px 528px #FFF , 1671px 1669px #FFF , 169px 632px #FFF , 547px 1724px #FFF , 1904px 110px #FFF , 679px 1670px #FFF , 196px 123px #FFF , 786px 871px #FFF , 1840px 324px #FFF , 356px 967px #FFF , 61px 549px #FFF , 99px 677px #FFF , 1719px 87px #FFF , 1713px 1990px #FFF , 1717px 1358px #FFF , 108px 1187px #FFF , 51px 869px #FFF , 1461px 902px #FFF , 1034px 891px #FFF , 962px 1881px #FFF , 1723px 595px #FFF , 479px 901px #FFF , 1546px 1823px #FFF , 285px 1208px #FFF , 1056px 347px #FFF , 261px 988px #FFF , 466px 990px #FFF , 1657px 648px #FFF , 1249px 933px #FFF , 1552px 1555px #FFF , 147px 62px #FFF , 292px 1157px #FFF , 1816px 423px #FFF , 1714px 757px #FFF , 1036px 961px #FFF , 1955px 710px #FFF , 1842px 516px #FFF , 479px 1870px #FFF , 1579px 1445px #FFF , 1225px 1309px #FFF , 1965px 566px #FFF , 1575px 1072px #FFF , 923px 329px #FFF , 651px 1514px #FFF , 865px 1100px #FFF , 782px 1873px #FFF , 115px 299px #FFF , 14px 1668px #FFF , 1666px 1817px #FFF , 1096px 1068px #FFF , 1462px 742px #FFF , 1384px 1750px #FFF;\r\n          box-shadow: 940px 1360px #FFF , 1071px 539px #FFF , 1710px 1414px #FFF , 836px 299px #FFF , 1944px 1420px #FFF , 253px 1449px #FFF , 1257px 1250px #FFF , 1588px 1830px #FFF , 1077px 1204px #FFF , 273px 1081px #FFF , 1993px 766px #FFF , 1808px 479px #FFF , 917px 263px #FFF , 663px 1820px #FFF , 342px 1988px #FFF , 727px 1250px #FFF , 636px 1666px #FFF , 692px 1112px #FFF , 248px 1211px #FFF , 1422px 1121px #FFF , 881px 46px #FFF , 1531px 1977px #FFF , 1643px 1023px #FFF , 684px 1071px #FFF , 1142px 1873px #FFF , 292px 1313px #FFF , 256px 1237px #FFF , 89px 912px #FFF , 964px 1783px #FFF , 877px 760px #FFF , 1641px 1474px #FFF , 1492px 24px #FFF , 1776px 1642px #FFF , 183px 602px #FFF , 1998px 62px #FFF , 1560px 367px #FFF , 1333px 995px #FFF , 704px 1815px #FFF , 1809px 712px #FFF , 1503px 288px #FFF , 630px 556px #FFF , 1715px 125px #FFF , 353px 1878px #FFF , 975px 333px #FFF , 1740px 1409px #FFF , 1341px 1871px #FFF , 1279px 1064px #FFF , 169px 874px #FFF , 161px 528px #FFF , 1671px 1669px #FFF , 169px 632px #FFF , 547px 1724px #FFF , 1904px 110px #FFF , 679px 1670px #FFF , 196px 123px #FFF , 786px 871px #FFF , 1840px 324px #FFF , 356px 967px #FFF , 61px 549px #FFF , 99px 677px #FFF , 1719px 87px #FFF , 1713px 1990px #FFF , 1717px 1358px #FFF , 108px 1187px #FFF , 51px 869px #FFF , 1461px 902px #FFF , 1034px 891px #FFF , 962px 1881px #FFF , 1723px 595px #FFF , 479px 901px #FFF , 1546px 1823px #FFF , 285px 1208px #FFF , 1056px 347px #FFF , 261px 988px #FFF , 466px 990px #FFF , 1657px 648px #FFF , 1249px 933px #FFF , 1552px 1555px #FFF , 147px 62px #FFF , 292px 1157px #FFF , 1816px 423px #FFF , 1714px 757px #FFF , 1036px 961px #FFF , 1955px 710px #FFF , 1842px 516px #FFF , 479px 1870px #FFF , 1579px 1445px #FFF , 1225px 1309px #FFF , 1965px 566px #FFF , 1575px 1072px #FFF , 923px 329px #FFF , 651px 1514px #FFF , 865px 1100px #FFF , 782px 1873px #FFF , 115px 299px #FFF , 14px 1668px #FFF , 1666px 1817px #FFF , 1096px 1068px #FFF , 1462px 742px #FFF , 1384px 1750px #FFF;\r\n}\r\n.animation-wrapper .particle-4 {\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 233px 1976px #FFF , 1196px 1119px #FFF , 646px 740px #FFF , 335px 645px #FFF , 1119px 1452px #FFF , 176px 1870px #FFF , 639px 1711px #FFF , 647px 1388px #FFF , 1516px 1108px #FFF , 464px 66px #FFF , 331px 344px #FFF , 772px 1189px #FFF , 1516px 1850px #FFF , 1500px 1463px #FFF , 1275px 876px #FFF , 1107px 645px #FFF , 977px 478px #FFF , 583px 1179px #FFF , 284px 395px #FFF , 1220px 461px #FFF , 1160px 249px #FFF , 196px 865px #FFF , 670px 1915px #FFF , 1449px 382px #FFF , 1191px 546px #FFF , 1329px 605px #FFF , 1945px 458px #FFF , 995px 749px #FFF , 1495px 861px #FFF , 708px 1731px #FFF , 348px 653px #FFF , 548px 1298px #FFF , 1606px 990px #FFF , 1049px 1204px #FFF , 253px 1501px #FFF , 1154px 166px #FFF , 1087px 104px #FFF , 1034px 1161px #FFF , 1681px 462px #FFF , 577px 1897px #FFF , 193px 1901px #FFF , 1701px 1755px #FFF , 864px 1297px #FFF , 800px 1289px #FFF , 676px 28px #FFF , 185px 1341px #FFF , 379px 1151px #FFF , 1224px 1725px #FFF , 280px 541px #FFF , 473px 1196px #FFF , 921px 1628px #FFF , 969px 432px #FFF , 1475px 758px #FFF , 1195px 993px #FFF , 876px 1840px #FFF , 1274px 1689px #FFF , 1977px 1101px #FFF , 837px 527px #FFF , 1785px 1610px #FFF , 1650px 1843px #FFF , 1127px 1508px #FFF , 401px 1050px #FFF , 51px 1105px #FFF , 545px 880px #FFF , 1786px 1672px #FFF , 318px 260px #FFF , 568px 254px #FFF , 1026px 1527px #FFF , 1242px 852px #FFF , 1785px 982px #FFF , 1318px 1071px #FFF , 398px 1061px #FFF , 1509px 257px #FFF , 599px 928px #FFF , 1195px 1800px #FFF , 1254px 906px #FFF , 141px 26px #FFF , 1384px 1502px #FFF , 476px 767px #FFF , 1973px 722px #FFF , 1339px 1031px #FFF , 778px 818px #FFF , 213px 1320px #FFF , 184px 221px #FFF , 983px 1911px #FFF , 923px 1439px #FFF , 1936px 581px #FFF , 1105px 625px #FFF , 325px 729px #FFF , 1475px 204px #FFF , 1483px 1564px #FFF , 1327px 1272px #FFF , 1187px 1944px #FFF , 1945px 1471px #FFF , 116px 960px #FFF , 1660px 1610px #FFF , 412px 1022px #FFF , 1552px 1516px #FFF , 1517px 1892px #FFF , 306px 829px #FFF , 1416px 462px #FFF , 1575px 1460px #FFF , 424px 1500px #FFF , 1530px 1169px #FFF , 1388px 1608px #FFF , 185px 416px #FFF , 634px 1446px #FFF , 767px 479px #FFF , 71px 426px #FFF , 1937px 145px #FFF , 1955px 1312px #FFF , 1811px 611px #FFF , 1145px 569px #FFF , 1460px 676px #FFF , 131px 1858px #FFF , 1557px 473px #FFF , 735px 130px #FFF , 112px 1531px #FFF , 1312px 305px #FFF , 409px 1032px #FFF , 149px 1964px #FFF , 535px 1215px #FFF , 1382px 630px #FFF , 1437px 1368px #FFF , 362px 1181px #FFF , 388px 181px #FFF , 274px 1287px #FFF , 1858px 1414px #FFF , 661px 1935px #FFF , 675px 1205px #FFF , 1829px 1725px #FFF , 1937px 1145px #FFF , 237px 908px #FFF , 1059px 1185px #FFF , 824px 1248px #FFF , 1167px 1730px #FFF , 180px 1961px #FFF , 1663px 203px #FFF , 374px 221px #FFF , 724px 1883px #FFF , 970px 1362px #FFF , 832px 505px #FFF , 313px 233px #FFF , 1909px 597px #FFF , 434px 201px #FFF , 587px 995px #FFF , 1833px 623px #FFF , 1464px 561px #FFF , 231px 593px #FFF , 1558px 1433px #FFF , 1986px 1767px #FFF , 1753px 1728px #FFF , 1153px 1623px #FFF , 249px 229px #FFF , 1503px 1186px #FFF , 1784px 137px #FFF , 841px 403px #FFF , 1400px 354px #FFF , 197px 499px #FFF , 1188px 681px #FFF , 158px 391px #FFF , 443px 1099px #FFF , 723px 1445px #FFF , 1408px 1235px #FFF , 1908px 195px #FFF , 271px 891px #FFF , 469px 1693px #FFF , 580px 11px #FFF , 1533px 70px #FFF , 859px 761px #FFF , 1510px 1844px #FFF , 421px 558px #FFF , 1132px 1453px #FFF , 757px 1987px #FFF , 212px 293px #FFF , 569px 323px #FFF , 1404px 1394px #FFF , 252px 1386px #FFF , 1668px 1857px #FFF , 123px 1684px #FFF , 105px 490px #FFF , 1083px 1769px #FFF , 1071px 1953px #FFF , 1271px 1159px #FFF , 699px 1491px #FFF , 1744px 1997px #FFF , 1868px 1973px #FFF , 1438px 1449px #FFF , 1222px 1921px #FFF , 1328px 1210px #FFF , 438px 873px #FFF , 809px 780px #FFF , 491px 1524px #FFF , 447px 1830px #FFF , 927px 1936px #FFF , 564px 691px #FFF , 1784px 1747px #FFF , 1978px 1722px #FFF , 1599px 1480px #FFF , 1276px 729px #FFF , 731px 1174px #FFF , 1586px 1711px #FFF , 451px 1340px #FFF , 1075px 1899px #FFF , 13px 575px #FFF , 309px 1340px #FFF , 981px 183px #FFF , 248px 1315px #FFF , 849px 80px #FFF , 1754px 1540px #FFF , 73px 1432px #FFF , 1208px 1828px #FFF , 65px 575px #FFF , 1098px 730px #FFF , 127px 1358px #FFF , 185px 19px #FFF , 1222px 1679px #FFF , 1122px 315px #FFF , 1906px 452px #FFF , 761px 284px #FFF , 813px 492px #FFF , 1344px 843px #FFF , 118px 1834px #FFF , 1620px 359px #FFF , 1755px 1246px #FFF , 299px 1076px #FFF , 1746px 158px #FFF , 6px 1635px #FFF , 143px 190px #FFF , 101px 468px #FFF , 137px 971px #FFF , 1221px 1929px #FFF , 1752px 650px #FFF , 1635px 1761px #FFF , 1522px 833px #FFF , 908px 153px #FFF , 1044px 350px #FFF , 1151px 1940px #FFF , 822px 210px #FFF , 1774px 310px #FFF , 796px 1447px #FFF , 1069px 1903px #FFF , 217px 565px #FFF , 662px 1370px #FFF , 1876px 1570px #FFF , 847px 46px #FFF , 1042px 1689px #FFF , 1584px 1434px #FFF , 1791px 908px #FFF , 973px 908px #FFF , 793px 747px #FFF , 122px 483px #FFF , 1137px 1374px #FFF , 1757px 1791px #FFF , 513px 225px #FFF , 63px 731px #FFF , 1179px 1926px #FFF , 346px 18px #FFF , 589px 175px #FFF , 87px 302px #FFF , 380px 1295px #FFF , 450px 921px #FFF , 1667px 1973px #FFF , 1495px 1373px #FFF , 1462px 1850px #FFF , 540px 288px #FFF , 1208px 1051px #FFF , 1554px 1095px #FFF , 1009px 1516px #FFF , 181px 572px #FFF , 165px 387px #FFF , 549px 1835px #FFF , 960px 16px #FFF , 1360px 403px #FFF , 1251px 43px #FFF , 1905px 1813px #FFF , 1106px 866px #FFF , 1809px 277px #FFF , 1828px 1720px #FFF , 295px 1610px #FFF , 523px 166px #FFF , 1069px 692px #FFF , 1292px 217px #FFF , 11px 1721px #FFF , 99px 1045px #FFF , 51px 1584px #FFF , 1053px 266px #FFF , 1287px 1235px #FFF , 747px 1722px #FFF , 1542px 736px #FFF , 1256px 18px #FFF , 102px 609px #FFF , 586px 1339px #FFF , 1843px 1697px #FFF , 824px 1687px #FFF , 1124px 882px #FFF , 395px 501px #FFF , 1456px 672px #FFF , 1472px 1648px #FFF , 1326px 1164px #FFF , 777px 1672px #FFF , 81px 345px #FFF , 91px 386px #FFF , 243px 411px #FFF , 1560px 90px #FFF , 6px 1771px #FFF , 1601px 616px #FFF , 1220px 1808px #FFF , 1160px 836px #FFF , 246px 1777px #FFF , 456px 863px #FFF , 97px 1138px #FFF , 1811px 942px #FFF , 213px 414px #FFF , 891px 392px #FFF , 1044px 927px #FFF , 1856px 216px #FFF , 957px 347px #FFF , 1486px 406px #FFF , 838px 912px #FFF , 803px 361px #FFF , 564px 826px #FFF , 1597px 949px #FFF , 1206px 289px #FFF , 33px 1035px #FFF , 1762px 1377px #FFF , 789px 1815px #FFF , 1594px 1342px #FFF , 1668px 880px #FFF , 1539px 1581px #FFF , 1547px 53px #FFF , 861px 1433px #FFF , 693px 1618px #FFF , 1762px 782px #FFF , 1568px 682px #FFF , 1126px 1762px #FFF , 1242px 134px #FFF , 495px 959px #FFF , 1606px 219px #FFF , 1878px 1415px #FFF , 1652px 797px #FFF , 782px 1903px #FFF , 1774px 1133px #FFF , 1430px 408px #FFF , 265px 394px #FFF , 890px 336px #FFF , 1051px 311px #FFF , 461px 1559px #FFF , 1931px 91px #FFF , 1160px 380px #FFF , 1442px 1058px #FFF , 1157px 364px #FFF , 586px 227px #FFF , 1365px 715px #FFF , 1658px 1655px #FFF , 1923px 1664px #FFF , 1023px 1844px #FFF , 1939px 1367px #FFF , 1203px 1305px #FFF , 359px 642px #FFF , 1056px 425px #FFF , 787px 202px #FFF , 1609px 1850px #FFF , 1964px 200px #FFF , 1537px 586px #FFF , 1589px 903px #FFF , 1063px 1694px #FFF , 760px 1185px #FFF , 597px 1396px #FFF , 294px 452px #FFF , 433px 818px #FFF , 199px 840px #FFF , 1332px 1937px #FFF , 169px 1907px #FFF , 591px 834px #FFF , 1716px 1032px #FFF , 45px 1879px #FFF , 686px 1469px #FFF , 1520px 475px #FFF , 1122px 859px #FFF , 973px 1541px #FFF , 269px 477px #FFF , 1390px 716px #FFF , 1791px 783px #FFF , 824px 2000px #FFF , 1211px 1717px #FFF , 1008px 1587px #FFF , 1422px 204px #FFF , 234px 556px #FFF , 506px 550px #FFF , 942px 1670px #FFF , 397px 853px #FFF , 599px 795px #FFF , 762px 1926px #FFF , 1202px 1424px #FFF , 135px 1316px #FFF , 1442px 1692px #FFF , 977px 652px #FFF , 564px 1648px #FFF , 997px 1474px #FFF , 67px 1366px #FFF , 1860px 1451px #FFF , 1105px 772px #FFF , 1886px 1396px #FFF , 1510px 658px #FFF , 976px 1544px #FFF , 894px 543px #FFF , 1098px 1189px #FFF , 690px 77px #FFF , 770px 733px #FFF , 557px 1403px #FFF , 1758px 1623px #FFF , 1341px 812px #FFF , 699px 967px #FFF , 277px 866px #FFF , 1526px 1828px #FFF , 8px 977px #FFF , 1707px 952px #FFF , 12px 1900px #FFF , 72px 921px #FFF , 496px 1067px #FFF , 1288px 1749px #FFF , 273px 984px #FFF , 1197px 1991px #FFF , 242px 789px #FFF , 903px 1035px #FFF , 480px 1492px #FFF , 102px 1331px #FFF , 738px 1343px #FFF , 560px 1475px #FFF , 367px 846px #FFF , 1420px 962px #FFF , 1976px 892px #FFF , 1911px 1763px #FFF , 1639px 1002px #FFF , 437px 1522px #FFF , 1906px 1025px #FFF , 730px 1364px #FFF , 1127px 521px #FFF , 1401px 1792px #FFF , 1954px 1066px #FFF , 232px 250px #FFF , 1685px 660px #FFF , 1011px 999px #FFF , 1970px 790px #FFF , 750px 499px #FFF , 1738px 660px #FFF , 1621px 1849px #FFF , 446px 52px #FFF , 1055px 1396px #FFF , 1165px 1497px #FFF , 1740px 1425px #FFF , 1012px 1920px #FFF , 1258px 1560px #FFF , 1020px 1152px #FFF , 362px 673px #FFF , 1065px 975px #FFF , 582px 755px #FFF , 1271px 1479px #FFF , 719px 548px #FFF , 1602px 879px #FFF , 590px 499px #FFF , 721px 1412px #FFF , 1180px 113px #FFF , 1801px 1961px #FFF , 589px 941px #FFF , 883px 476px #FFF , 214px 890px #FFF , 1028px 892px #FFF , 1107px 1832px #FFF , 944px 361px #FFF , 480px 1453px #FFF , 1466px 683px #FFF , 981px 745px #FFF , 1968px 828px #FFF , 657px 1830px #FFF , 11px 1338px #FFF , 179px 730px #FFF , 1713px 197px #FFF , 51px 955px #FFF , 1243px 319px #FFF , 1175px 624px #FFF , 446px 46px #FFF , 5px 1158px #FFF , 82px 1352px #FFF , 1877px 402px #FFF , 708px 1778px #FFF , 903px 1625px #FFF , 1824px 352px #FFF , 1229px 140px #FFF , 1518px 24px #FFF , 1017px 512px #FFF , 515px 699px #FFF , 295px 265px #FFF , 69px 1773px #FFF , 1640px 1163px #FFF , 536px 342px #FFF , 970px 1766px #FFF , 560px 1416px #FFF , 577px 193px #FFF , 469px 9px #FFF , 466px 276px #FFF , 711px 853px #FFF , 401px 685px #FFF , 85px 506px #FFF , 865px 558px #FFF , 631px 105px #FFF , 887px 866px #FFF , 1704px 1001px #FFF , 1051px 1199px #FFF , 275px 1909px #FFF , 1462px 829px #FFF , 375px 1057px #FFF , 1531px 1501px #FFF , 205px 403px #FFF , 33px 1869px #FFF , 967px 1176px #FFF , 376px 863px #FFF , 1769px 1545px #FFF , 535px 51px #FFF , 1972px 1569px #FFF , 1773px 960px #FFF , 487px 620px #FFF , 1660px 687px #FFF , 1632px 972px #FFF , 1362px 42px #FFF , 479px 1655px #FFF , 1531px 1808px #FFF , 1450px 1412px #FFF , 1549px 170px #FFF , 1904px 1305px #FFF , 1209px 48px #FFF , 1933px 820px #FFF , 1623px 595px #FFF , 48px 643px #FFF , 179px 1754px #FFF , 589px 1032px #FFF , 1199px 356px #FFF , 1755px 1418px #FFF , 780px 1174px #FFF , 1905px 758px #FFF , 1567px 713px #FFF , 1372px 705px #FFF , 456px 654px #FFF , 759px 690px #FFF , 452px 673px #FFF , 993px 1610px #FFF , 1271px 188px #FFF , 343px 1750px #FFF , 1943px 1735px #FFF , 1717px 853px #FFF , 1247px 303px #FFF , 1314px 1895px #FFF , 1203px 489px #FFF , 741px 469px #FFF , 4px 246px #FFF , 1515px 115px #FFF , 606px 218px #FFF , 1966px 1471px #FFF , 177px 87px #FFF , 1575px 588px #FFF , 1136px 1386px #FFF , 70px 1868px #FFF , 1053px 18px #FFF , 1124px 721px #FFF , 1748px 1181px #FFF , 191px 1387px #FFF , 1931px 840px #FFF , 1088px 1603px #FFF , 634px 1255px #FFF , 814px 1434px #FFF , 585px 64px #FFF , 1074px 1618px #FFF , 1692px 761px #FFF , 651px 643px #FFF , 193px 335px #FFF , 1103px 1447px #FFF , 491px 1142px #FFF , 521px 408px #FFF , 536px 340px #FFF , 411px 1091px #FFF , 1646px 193px #FFF , 1595px 1285px #FFF , 870px 1349px #FFF , 1085px 1013px #FFF , 204px 1864px #FFF , 1359px 299px #FFF , 807px 964px #FFF , 219px 509px #FFF , 36px 1227px #FFF , 702px 1873px #FFF , 1471px 934px #FFF , 1763px 792px #FFF , 973px 1957px #FFF , 987px 68px #FFF , 593px 1282px #FFF , 1900px 607px #FFF , 407px 1659px #FFF , 587px 17px #FFF , 632px 158px #FFF;\r\n          box-shadow: 233px 1976px #FFF , 1196px 1119px #FFF , 646px 740px #FFF , 335px 645px #FFF , 1119px 1452px #FFF , 176px 1870px #FFF , 639px 1711px #FFF , 647px 1388px #FFF , 1516px 1108px #FFF , 464px 66px #FFF , 331px 344px #FFF , 772px 1189px #FFF , 1516px 1850px #FFF , 1500px 1463px #FFF , 1275px 876px #FFF , 1107px 645px #FFF , 977px 478px #FFF , 583px 1179px #FFF , 284px 395px #FFF , 1220px 461px #FFF , 1160px 249px #FFF , 196px 865px #FFF , 670px 1915px #FFF , 1449px 382px #FFF , 1191px 546px #FFF , 1329px 605px #FFF , 1945px 458px #FFF , 995px 749px #FFF , 1495px 861px #FFF , 708px 1731px #FFF , 348px 653px #FFF , 548px 1298px #FFF , 1606px 990px #FFF , 1049px 1204px #FFF , 253px 1501px #FFF , 1154px 166px #FFF , 1087px 104px #FFF , 1034px 1161px #FFF , 1681px 462px #FFF , 577px 1897px #FFF , 193px 1901px #FFF , 1701px 1755px #FFF , 864px 1297px #FFF , 800px 1289px #FFF , 676px 28px #FFF , 185px 1341px #FFF , 379px 1151px #FFF , 1224px 1725px #FFF , 280px 541px #FFF , 473px 1196px #FFF , 921px 1628px #FFF , 969px 432px #FFF , 1475px 758px #FFF , 1195px 993px #FFF , 876px 1840px #FFF , 1274px 1689px #FFF , 1977px 1101px #FFF , 837px 527px #FFF , 1785px 1610px #FFF , 1650px 1843px #FFF , 1127px 1508px #FFF , 401px 1050px #FFF , 51px 1105px #FFF , 545px 880px #FFF , 1786px 1672px #FFF , 318px 260px #FFF , 568px 254px #FFF , 1026px 1527px #FFF , 1242px 852px #FFF , 1785px 982px #FFF , 1318px 1071px #FFF , 398px 1061px #FFF , 1509px 257px #FFF , 599px 928px #FFF , 1195px 1800px #FFF , 1254px 906px #FFF , 141px 26px #FFF , 1384px 1502px #FFF , 476px 767px #FFF , 1973px 722px #FFF , 1339px 1031px #FFF , 778px 818px #FFF , 213px 1320px #FFF , 184px 221px #FFF , 983px 1911px #FFF , 923px 1439px #FFF , 1936px 581px #FFF , 1105px 625px #FFF , 325px 729px #FFF , 1475px 204px #FFF , 1483px 1564px #FFF , 1327px 1272px #FFF , 1187px 1944px #FFF , 1945px 1471px #FFF , 116px 960px #FFF , 1660px 1610px #FFF , 412px 1022px #FFF , 1552px 1516px #FFF , 1517px 1892px #FFF , 306px 829px #FFF , 1416px 462px #FFF , 1575px 1460px #FFF , 424px 1500px #FFF , 1530px 1169px #FFF , 1388px 1608px #FFF , 185px 416px #FFF , 634px 1446px #FFF , 767px 479px #FFF , 71px 426px #FFF , 1937px 145px #FFF , 1955px 1312px #FFF , 1811px 611px #FFF , 1145px 569px #FFF , 1460px 676px #FFF , 131px 1858px #FFF , 1557px 473px #FFF , 735px 130px #FFF , 112px 1531px #FFF , 1312px 305px #FFF , 409px 1032px #FFF , 149px 1964px #FFF , 535px 1215px #FFF , 1382px 630px #FFF , 1437px 1368px #FFF , 362px 1181px #FFF , 388px 181px #FFF , 274px 1287px #FFF , 1858px 1414px #FFF , 661px 1935px #FFF , 675px 1205px #FFF , 1829px 1725px #FFF , 1937px 1145px #FFF , 237px 908px #FFF , 1059px 1185px #FFF , 824px 1248px #FFF , 1167px 1730px #FFF , 180px 1961px #FFF , 1663px 203px #FFF , 374px 221px #FFF , 724px 1883px #FFF , 970px 1362px #FFF , 832px 505px #FFF , 313px 233px #FFF , 1909px 597px #FFF , 434px 201px #FFF , 587px 995px #FFF , 1833px 623px #FFF , 1464px 561px #FFF , 231px 593px #FFF , 1558px 1433px #FFF , 1986px 1767px #FFF , 1753px 1728px #FFF , 1153px 1623px #FFF , 249px 229px #FFF , 1503px 1186px #FFF , 1784px 137px #FFF , 841px 403px #FFF , 1400px 354px #FFF , 197px 499px #FFF , 1188px 681px #FFF , 158px 391px #FFF , 443px 1099px #FFF , 723px 1445px #FFF , 1408px 1235px #FFF , 1908px 195px #FFF , 271px 891px #FFF , 469px 1693px #FFF , 580px 11px #FFF , 1533px 70px #FFF , 859px 761px #FFF , 1510px 1844px #FFF , 421px 558px #FFF , 1132px 1453px #FFF , 757px 1987px #FFF , 212px 293px #FFF , 569px 323px #FFF , 1404px 1394px #FFF , 252px 1386px #FFF , 1668px 1857px #FFF , 123px 1684px #FFF , 105px 490px #FFF , 1083px 1769px #FFF , 1071px 1953px #FFF , 1271px 1159px #FFF , 699px 1491px #FFF , 1744px 1997px #FFF , 1868px 1973px #FFF , 1438px 1449px #FFF , 1222px 1921px #FFF , 1328px 1210px #FFF , 438px 873px #FFF , 809px 780px #FFF , 491px 1524px #FFF , 447px 1830px #FFF , 927px 1936px #FFF , 564px 691px #FFF , 1784px 1747px #FFF , 1978px 1722px #FFF , 1599px 1480px #FFF , 1276px 729px #FFF , 731px 1174px #FFF , 1586px 1711px #FFF , 451px 1340px #FFF , 1075px 1899px #FFF , 13px 575px #FFF , 309px 1340px #FFF , 981px 183px #FFF , 248px 1315px #FFF , 849px 80px #FFF , 1754px 1540px #FFF , 73px 1432px #FFF , 1208px 1828px #FFF , 65px 575px #FFF , 1098px 730px #FFF , 127px 1358px #FFF , 185px 19px #FFF , 1222px 1679px #FFF , 1122px 315px #FFF , 1906px 452px #FFF , 761px 284px #FFF , 813px 492px #FFF , 1344px 843px #FFF , 118px 1834px #FFF , 1620px 359px #FFF , 1755px 1246px #FFF , 299px 1076px #FFF , 1746px 158px #FFF , 6px 1635px #FFF , 143px 190px #FFF , 101px 468px #FFF , 137px 971px #FFF , 1221px 1929px #FFF , 1752px 650px #FFF , 1635px 1761px #FFF , 1522px 833px #FFF , 908px 153px #FFF , 1044px 350px #FFF , 1151px 1940px #FFF , 822px 210px #FFF , 1774px 310px #FFF , 796px 1447px #FFF , 1069px 1903px #FFF , 217px 565px #FFF , 662px 1370px #FFF , 1876px 1570px #FFF , 847px 46px #FFF , 1042px 1689px #FFF , 1584px 1434px #FFF , 1791px 908px #FFF , 973px 908px #FFF , 793px 747px #FFF , 122px 483px #FFF , 1137px 1374px #FFF , 1757px 1791px #FFF , 513px 225px #FFF , 63px 731px #FFF , 1179px 1926px #FFF , 346px 18px #FFF , 589px 175px #FFF , 87px 302px #FFF , 380px 1295px #FFF , 450px 921px #FFF , 1667px 1973px #FFF , 1495px 1373px #FFF , 1462px 1850px #FFF , 540px 288px #FFF , 1208px 1051px #FFF , 1554px 1095px #FFF , 1009px 1516px #FFF , 181px 572px #FFF , 165px 387px #FFF , 549px 1835px #FFF , 960px 16px #FFF , 1360px 403px #FFF , 1251px 43px #FFF , 1905px 1813px #FFF , 1106px 866px #FFF , 1809px 277px #FFF , 1828px 1720px #FFF , 295px 1610px #FFF , 523px 166px #FFF , 1069px 692px #FFF , 1292px 217px #FFF , 11px 1721px #FFF , 99px 1045px #FFF , 51px 1584px #FFF , 1053px 266px #FFF , 1287px 1235px #FFF , 747px 1722px #FFF , 1542px 736px #FFF , 1256px 18px #FFF , 102px 609px #FFF , 586px 1339px #FFF , 1843px 1697px #FFF , 824px 1687px #FFF , 1124px 882px #FFF , 395px 501px #FFF , 1456px 672px #FFF , 1472px 1648px #FFF , 1326px 1164px #FFF , 777px 1672px #FFF , 81px 345px #FFF , 91px 386px #FFF , 243px 411px #FFF , 1560px 90px #FFF , 6px 1771px #FFF , 1601px 616px #FFF , 1220px 1808px #FFF , 1160px 836px #FFF , 246px 1777px #FFF , 456px 863px #FFF , 97px 1138px #FFF , 1811px 942px #FFF , 213px 414px #FFF , 891px 392px #FFF , 1044px 927px #FFF , 1856px 216px #FFF , 957px 347px #FFF , 1486px 406px #FFF , 838px 912px #FFF , 803px 361px #FFF , 564px 826px #FFF , 1597px 949px #FFF , 1206px 289px #FFF , 33px 1035px #FFF , 1762px 1377px #FFF , 789px 1815px #FFF , 1594px 1342px #FFF , 1668px 880px #FFF , 1539px 1581px #FFF , 1547px 53px #FFF , 861px 1433px #FFF , 693px 1618px #FFF , 1762px 782px #FFF , 1568px 682px #FFF , 1126px 1762px #FFF , 1242px 134px #FFF , 495px 959px #FFF , 1606px 219px #FFF , 1878px 1415px #FFF , 1652px 797px #FFF , 782px 1903px #FFF , 1774px 1133px #FFF , 1430px 408px #FFF , 265px 394px #FFF , 890px 336px #FFF , 1051px 311px #FFF , 461px 1559px #FFF , 1931px 91px #FFF , 1160px 380px #FFF , 1442px 1058px #FFF , 1157px 364px #FFF , 586px 227px #FFF , 1365px 715px #FFF , 1658px 1655px #FFF , 1923px 1664px #FFF , 1023px 1844px #FFF , 1939px 1367px #FFF , 1203px 1305px #FFF , 359px 642px #FFF , 1056px 425px #FFF , 787px 202px #FFF , 1609px 1850px #FFF , 1964px 200px #FFF , 1537px 586px #FFF , 1589px 903px #FFF , 1063px 1694px #FFF , 760px 1185px #FFF , 597px 1396px #FFF , 294px 452px #FFF , 433px 818px #FFF , 199px 840px #FFF , 1332px 1937px #FFF , 169px 1907px #FFF , 591px 834px #FFF , 1716px 1032px #FFF , 45px 1879px #FFF , 686px 1469px #FFF , 1520px 475px #FFF , 1122px 859px #FFF , 973px 1541px #FFF , 269px 477px #FFF , 1390px 716px #FFF , 1791px 783px #FFF , 824px 2000px #FFF , 1211px 1717px #FFF , 1008px 1587px #FFF , 1422px 204px #FFF , 234px 556px #FFF , 506px 550px #FFF , 942px 1670px #FFF , 397px 853px #FFF , 599px 795px #FFF , 762px 1926px #FFF , 1202px 1424px #FFF , 135px 1316px #FFF , 1442px 1692px #FFF , 977px 652px #FFF , 564px 1648px #FFF , 997px 1474px #FFF , 67px 1366px #FFF , 1860px 1451px #FFF , 1105px 772px #FFF , 1886px 1396px #FFF , 1510px 658px #FFF , 976px 1544px #FFF , 894px 543px #FFF , 1098px 1189px #FFF , 690px 77px #FFF , 770px 733px #FFF , 557px 1403px #FFF , 1758px 1623px #FFF , 1341px 812px #FFF , 699px 967px #FFF , 277px 866px #FFF , 1526px 1828px #FFF , 8px 977px #FFF , 1707px 952px #FFF , 12px 1900px #FFF , 72px 921px #FFF , 496px 1067px #FFF , 1288px 1749px #FFF , 273px 984px #FFF , 1197px 1991px #FFF , 242px 789px #FFF , 903px 1035px #FFF , 480px 1492px #FFF , 102px 1331px #FFF , 738px 1343px #FFF , 560px 1475px #FFF , 367px 846px #FFF , 1420px 962px #FFF , 1976px 892px #FFF , 1911px 1763px #FFF , 1639px 1002px #FFF , 437px 1522px #FFF , 1906px 1025px #FFF , 730px 1364px #FFF , 1127px 521px #FFF , 1401px 1792px #FFF , 1954px 1066px #FFF , 232px 250px #FFF , 1685px 660px #FFF , 1011px 999px #FFF , 1970px 790px #FFF , 750px 499px #FFF , 1738px 660px #FFF , 1621px 1849px #FFF , 446px 52px #FFF , 1055px 1396px #FFF , 1165px 1497px #FFF , 1740px 1425px #FFF , 1012px 1920px #FFF , 1258px 1560px #FFF , 1020px 1152px #FFF , 362px 673px #FFF , 1065px 975px #FFF , 582px 755px #FFF , 1271px 1479px #FFF , 719px 548px #FFF , 1602px 879px #FFF , 590px 499px #FFF , 721px 1412px #FFF , 1180px 113px #FFF , 1801px 1961px #FFF , 589px 941px #FFF , 883px 476px #FFF , 214px 890px #FFF , 1028px 892px #FFF , 1107px 1832px #FFF , 944px 361px #FFF , 480px 1453px #FFF , 1466px 683px #FFF , 981px 745px #FFF , 1968px 828px #FFF , 657px 1830px #FFF , 11px 1338px #FFF , 179px 730px #FFF , 1713px 197px #FFF , 51px 955px #FFF , 1243px 319px #FFF , 1175px 624px #FFF , 446px 46px #FFF , 5px 1158px #FFF , 82px 1352px #FFF , 1877px 402px #FFF , 708px 1778px #FFF , 903px 1625px #FFF , 1824px 352px #FFF , 1229px 140px #FFF , 1518px 24px #FFF , 1017px 512px #FFF , 515px 699px #FFF , 295px 265px #FFF , 69px 1773px #FFF , 1640px 1163px #FFF , 536px 342px #FFF , 970px 1766px #FFF , 560px 1416px #FFF , 577px 193px #FFF , 469px 9px #FFF , 466px 276px #FFF , 711px 853px #FFF , 401px 685px #FFF , 85px 506px #FFF , 865px 558px #FFF , 631px 105px #FFF , 887px 866px #FFF , 1704px 1001px #FFF , 1051px 1199px #FFF , 275px 1909px #FFF , 1462px 829px #FFF , 375px 1057px #FFF , 1531px 1501px #FFF , 205px 403px #FFF , 33px 1869px #FFF , 967px 1176px #FFF , 376px 863px #FFF , 1769px 1545px #FFF , 535px 51px #FFF , 1972px 1569px #FFF , 1773px 960px #FFF , 487px 620px #FFF , 1660px 687px #FFF , 1632px 972px #FFF , 1362px 42px #FFF , 479px 1655px #FFF , 1531px 1808px #FFF , 1450px 1412px #FFF , 1549px 170px #FFF , 1904px 1305px #FFF , 1209px 48px #FFF , 1933px 820px #FFF , 1623px 595px #FFF , 48px 643px #FFF , 179px 1754px #FFF , 589px 1032px #FFF , 1199px 356px #FFF , 1755px 1418px #FFF , 780px 1174px #FFF , 1905px 758px #FFF , 1567px 713px #FFF , 1372px 705px #FFF , 456px 654px #FFF , 759px 690px #FFF , 452px 673px #FFF , 993px 1610px #FFF , 1271px 188px #FFF , 343px 1750px #FFF , 1943px 1735px #FFF , 1717px 853px #FFF , 1247px 303px #FFF , 1314px 1895px #FFF , 1203px 489px #FFF , 741px 469px #FFF , 4px 246px #FFF , 1515px 115px #FFF , 606px 218px #FFF , 1966px 1471px #FFF , 177px 87px #FFF , 1575px 588px #FFF , 1136px 1386px #FFF , 70px 1868px #FFF , 1053px 18px #FFF , 1124px 721px #FFF , 1748px 1181px #FFF , 191px 1387px #FFF , 1931px 840px #FFF , 1088px 1603px #FFF , 634px 1255px #FFF , 814px 1434px #FFF , 585px 64px #FFF , 1074px 1618px #FFF , 1692px 761px #FFF , 651px 643px #FFF , 193px 335px #FFF , 1103px 1447px #FFF , 491px 1142px #FFF , 521px 408px #FFF , 536px 340px #FFF , 411px 1091px #FFF , 1646px 193px #FFF , 1595px 1285px #FFF , 870px 1349px #FFF , 1085px 1013px #FFF , 204px 1864px #FFF , 1359px 299px #FFF , 807px 964px #FFF , 219px 509px #FFF , 36px 1227px #FFF , 702px 1873px #FFF , 1471px 934px #FFF , 1763px 792px #FFF , 973px 1957px #FFF , 987px 68px #FFF , 593px 1282px #FFF , 1900px 607px #FFF , 407px 1659px #FFF , 587px 17px #FFF , 632px 158px #FFF;\r\n  -webkit-animation: animStar 600s linear infinite;\r\n  animation: animStar 600s linear infinite;\r\n}\r\n.animation-wrapper .particle-4 :after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  -webkit-box-shadow: 233px 1976px #FFF , 1196px 1119px #FFF , 646px 740px #FFF , 335px 645px #FFF , 1119px 1452px #FFF , 176px 1870px #FFF , 639px 1711px #FFF , 647px 1388px #FFF , 1516px 1108px #FFF , 464px 66px #FFF , 331px 344px #FFF , 772px 1189px #FFF , 1516px 1850px #FFF , 1500px 1463px #FFF , 1275px 876px #FFF , 1107px 645px #FFF , 977px 478px #FFF , 583px 1179px #FFF , 284px 395px #FFF , 1220px 461px #FFF , 1160px 249px #FFF , 196px 865px #FFF , 670px 1915px #FFF , 1449px 382px #FFF , 1191px 546px #FFF , 1329px 605px #FFF , 1945px 458px #FFF , 995px 749px #FFF , 1495px 861px #FFF , 708px 1731px #FFF , 348px 653px #FFF , 548px 1298px #FFF , 1606px 990px #FFF , 1049px 1204px #FFF , 253px 1501px #FFF , 1154px 166px #FFF , 1087px 104px #FFF , 1034px 1161px #FFF , 1681px 462px #FFF , 577px 1897px #FFF , 193px 1901px #FFF , 1701px 1755px #FFF , 864px 1297px #FFF , 800px 1289px #FFF , 676px 28px #FFF , 185px 1341px #FFF , 379px 1151px #FFF , 1224px 1725px #FFF , 280px 541px #FFF , 473px 1196px #FFF , 921px 1628px #FFF , 969px 432px #FFF , 1475px 758px #FFF , 1195px 993px #FFF , 876px 1840px #FFF , 1274px 1689px #FFF , 1977px 1101px #FFF , 837px 527px #FFF , 1785px 1610px #FFF , 1650px 1843px #FFF , 1127px 1508px #FFF , 401px 1050px #FFF , 51px 1105px #FFF , 545px 880px #FFF , 1786px 1672px #FFF , 318px 260px #FFF , 568px 254px #FFF , 1026px 1527px #FFF , 1242px 852px #FFF , 1785px 982px #FFF , 1318px 1071px #FFF , 398px 1061px #FFF , 1509px 257px #FFF , 599px 928px #FFF , 1195px 1800px #FFF , 1254px 906px #FFF , 141px 26px #FFF , 1384px 1502px #FFF , 476px 767px #FFF , 1973px 722px #FFF , 1339px 1031px #FFF , 778px 818px #FFF , 213px 1320px #FFF , 184px 221px #FFF , 983px 1911px #FFF , 923px 1439px #FFF , 1936px 581px #FFF , 1105px 625px #FFF , 325px 729px #FFF , 1475px 204px #FFF , 1483px 1564px #FFF , 1327px 1272px #FFF , 1187px 1944px #FFF , 1945px 1471px #FFF , 116px 960px #FFF , 1660px 1610px #FFF , 412px 1022px #FFF , 1552px 1516px #FFF , 1517px 1892px #FFF , 306px 829px #FFF , 1416px 462px #FFF , 1575px 1460px #FFF , 424px 1500px #FFF , 1530px 1169px #FFF , 1388px 1608px #FFF , 185px 416px #FFF , 634px 1446px #FFF , 767px 479px #FFF , 71px 426px #FFF , 1937px 145px #FFF , 1955px 1312px #FFF , 1811px 611px #FFF , 1145px 569px #FFF , 1460px 676px #FFF , 131px 1858px #FFF , 1557px 473px #FFF , 735px 130px #FFF , 112px 1531px #FFF , 1312px 305px #FFF , 409px 1032px #FFF , 149px 1964px #FFF , 535px 1215px #FFF , 1382px 630px #FFF , 1437px 1368px #FFF , 362px 1181px #FFF , 388px 181px #FFF , 274px 1287px #FFF , 1858px 1414px #FFF , 661px 1935px #FFF , 675px 1205px #FFF , 1829px 1725px #FFF , 1937px 1145px #FFF , 237px 908px #FFF , 1059px 1185px #FFF , 824px 1248px #FFF , 1167px 1730px #FFF , 180px 1961px #FFF , 1663px 203px #FFF , 374px 221px #FFF , 724px 1883px #FFF , 970px 1362px #FFF , 832px 505px #FFF , 313px 233px #FFF , 1909px 597px #FFF , 434px 201px #FFF , 587px 995px #FFF , 1833px 623px #FFF , 1464px 561px #FFF , 231px 593px #FFF , 1558px 1433px #FFF , 1986px 1767px #FFF , 1753px 1728px #FFF , 1153px 1623px #FFF , 249px 229px #FFF , 1503px 1186px #FFF , 1784px 137px #FFF , 841px 403px #FFF , 1400px 354px #FFF , 197px 499px #FFF , 1188px 681px #FFF , 158px 391px #FFF , 443px 1099px #FFF , 723px 1445px #FFF , 1408px 1235px #FFF , 1908px 195px #FFF , 271px 891px #FFF , 469px 1693px #FFF , 580px 11px #FFF , 1533px 70px #FFF , 859px 761px #FFF , 1510px 1844px #FFF , 421px 558px #FFF , 1132px 1453px #FFF , 757px 1987px #FFF , 212px 293px #FFF , 569px 323px #FFF , 1404px 1394px #FFF , 252px 1386px #FFF , 1668px 1857px #FFF , 123px 1684px #FFF , 105px 490px #FFF , 1083px 1769px #FFF , 1071px 1953px #FFF , 1271px 1159px #FFF , 699px 1491px #FFF , 1744px 1997px #FFF , 1868px 1973px #FFF , 1438px 1449px #FFF , 1222px 1921px #FFF , 1328px 1210px #FFF , 438px 873px #FFF , 809px 780px #FFF , 491px 1524px #FFF , 447px 1830px #FFF , 927px 1936px #FFF , 564px 691px #FFF , 1784px 1747px #FFF , 1978px 1722px #FFF , 1599px 1480px #FFF , 1276px 729px #FFF , 731px 1174px #FFF , 1586px 1711px #FFF , 451px 1340px #FFF , 1075px 1899px #FFF , 13px 575px #FFF , 309px 1340px #FFF , 981px 183px #FFF , 248px 1315px #FFF , 849px 80px #FFF , 1754px 1540px #FFF , 73px 1432px #FFF , 1208px 1828px #FFF , 65px 575px #FFF , 1098px 730px #FFF , 127px 1358px #FFF , 185px 19px #FFF , 1222px 1679px #FFF , 1122px 315px #FFF , 1906px 452px #FFF , 761px 284px #FFF , 813px 492px #FFF , 1344px 843px #FFF , 118px 1834px #FFF , 1620px 359px #FFF , 1755px 1246px #FFF , 299px 1076px #FFF , 1746px 158px #FFF , 6px 1635px #FFF , 143px 190px #FFF , 101px 468px #FFF , 137px 971px #FFF , 1221px 1929px #FFF , 1752px 650px #FFF , 1635px 1761px #FFF , 1522px 833px #FFF , 908px 153px #FFF , 1044px 350px #FFF , 1151px 1940px #FFF , 822px 210px #FFF , 1774px 310px #FFF , 796px 1447px #FFF , 1069px 1903px #FFF , 217px 565px #FFF , 662px 1370px #FFF , 1876px 1570px #FFF , 847px 46px #FFF , 1042px 1689px #FFF , 1584px 1434px #FFF , 1791px 908px #FFF , 973px 908px #FFF , 793px 747px #FFF , 122px 483px #FFF , 1137px 1374px #FFF , 1757px 1791px #FFF , 513px 225px #FFF , 63px 731px #FFF , 1179px 1926px #FFF , 346px 18px #FFF , 589px 175px #FFF , 87px 302px #FFF , 380px 1295px #FFF , 450px 921px #FFF , 1667px 1973px #FFF , 1495px 1373px #FFF , 1462px 1850px #FFF , 540px 288px #FFF , 1208px 1051px #FFF , 1554px 1095px #FFF , 1009px 1516px #FFF , 181px 572px #FFF , 165px 387px #FFF , 549px 1835px #FFF , 960px 16px #FFF , 1360px 403px #FFF , 1251px 43px #FFF , 1905px 1813px #FFF , 1106px 866px #FFF , 1809px 277px #FFF , 1828px 1720px #FFF , 295px 1610px #FFF , 523px 166px #FFF , 1069px 692px #FFF , 1292px 217px #FFF , 11px 1721px #FFF , 99px 1045px #FFF , 51px 1584px #FFF , 1053px 266px #FFF , 1287px 1235px #FFF , 747px 1722px #FFF , 1542px 736px #FFF , 1256px 18px #FFF , 102px 609px #FFF , 586px 1339px #FFF , 1843px 1697px #FFF , 824px 1687px #FFF , 1124px 882px #FFF , 395px 501px #FFF , 1456px 672px #FFF , 1472px 1648px #FFF , 1326px 1164px #FFF , 777px 1672px #FFF , 81px 345px #FFF , 91px 386px #FFF , 243px 411px #FFF , 1560px 90px #FFF , 6px 1771px #FFF , 1601px 616px #FFF , 1220px 1808px #FFF , 1160px 836px #FFF , 246px 1777px #FFF , 456px 863px #FFF , 97px 1138px #FFF , 1811px 942px #FFF , 213px 414px #FFF , 891px 392px #FFF , 1044px 927px #FFF , 1856px 216px #FFF , 957px 347px #FFF , 1486px 406px #FFF , 838px 912px #FFF , 803px 361px #FFF , 564px 826px #FFF , 1597px 949px #FFF , 1206px 289px #FFF , 33px 1035px #FFF , 1762px 1377px #FFF , 789px 1815px #FFF , 1594px 1342px #FFF , 1668px 880px #FFF , 1539px 1581px #FFF , 1547px 53px #FFF , 861px 1433px #FFF , 693px 1618px #FFF , 1762px 782px #FFF , 1568px 682px #FFF , 1126px 1762px #FFF , 1242px 134px #FFF , 495px 959px #FFF , 1606px 219px #FFF , 1878px 1415px #FFF , 1652px 797px #FFF , 782px 1903px #FFF , 1774px 1133px #FFF , 1430px 408px #FFF , 265px 394px #FFF , 890px 336px #FFF , 1051px 311px #FFF , 461px 1559px #FFF , 1931px 91px #FFF , 1160px 380px #FFF , 1442px 1058px #FFF , 1157px 364px #FFF , 586px 227px #FFF , 1365px 715px #FFF , 1658px 1655px #FFF , 1923px 1664px #FFF , 1023px 1844px #FFF , 1939px 1367px #FFF , 1203px 1305px #FFF , 359px 642px #FFF , 1056px 425px #FFF , 787px 202px #FFF , 1609px 1850px #FFF , 1964px 200px #FFF , 1537px 586px #FFF , 1589px 903px #FFF , 1063px 1694px #FFF , 760px 1185px #FFF , 597px 1396px #FFF , 294px 452px #FFF , 433px 818px #FFF , 199px 840px #FFF , 1332px 1937px #FFF , 169px 1907px #FFF , 591px 834px #FFF , 1716px 1032px #FFF , 45px 1879px #FFF , 686px 1469px #FFF , 1520px 475px #FFF , 1122px 859px #FFF , 973px 1541px #FFF , 269px 477px #FFF , 1390px 716px #FFF , 1791px 783px #FFF , 824px 2000px #FFF , 1211px 1717px #FFF , 1008px 1587px #FFF , 1422px 204px #FFF , 234px 556px #FFF , 506px 550px #FFF , 942px 1670px #FFF , 397px 853px #FFF , 599px 795px #FFF , 762px 1926px #FFF , 1202px 1424px #FFF , 135px 1316px #FFF , 1442px 1692px #FFF , 977px 652px #FFF , 564px 1648px #FFF , 997px 1474px #FFF , 67px 1366px #FFF , 1860px 1451px #FFF , 1105px 772px #FFF , 1886px 1396px #FFF , 1510px 658px #FFF , 976px 1544px #FFF , 894px 543px #FFF , 1098px 1189px #FFF , 690px 77px #FFF , 770px 733px #FFF , 557px 1403px #FFF , 1758px 1623px #FFF , 1341px 812px #FFF , 699px 967px #FFF , 277px 866px #FFF , 1526px 1828px #FFF , 8px 977px #FFF , 1707px 952px #FFF , 12px 1900px #FFF , 72px 921px #FFF , 496px 1067px #FFF , 1288px 1749px #FFF , 273px 984px #FFF , 1197px 1991px #FFF , 242px 789px #FFF , 903px 1035px #FFF , 480px 1492px #FFF , 102px 1331px #FFF , 738px 1343px #FFF , 560px 1475px #FFF , 367px 846px #FFF , 1420px 962px #FFF , 1976px 892px #FFF , 1911px 1763px #FFF , 1639px 1002px #FFF , 437px 1522px #FFF , 1906px 1025px #FFF , 730px 1364px #FFF , 1127px 521px #FFF , 1401px 1792px #FFF , 1954px 1066px #FFF , 232px 250px #FFF , 1685px 660px #FFF , 1011px 999px #FFF , 1970px 790px #FFF , 750px 499px #FFF , 1738px 660px #FFF , 1621px 1849px #FFF , 446px 52px #FFF , 1055px 1396px #FFF , 1165px 1497px #FFF , 1740px 1425px #FFF , 1012px 1920px #FFF , 1258px 1560px #FFF , 1020px 1152px #FFF , 362px 673px #FFF , 1065px 975px #FFF , 582px 755px #FFF , 1271px 1479px #FFF , 719px 548px #FFF , 1602px 879px #FFF , 590px 499px #FFF , 721px 1412px #FFF , 1180px 113px #FFF , 1801px 1961px #FFF , 589px 941px #FFF , 883px 476px #FFF , 214px 890px #FFF , 1028px 892px #FFF , 1107px 1832px #FFF , 944px 361px #FFF , 480px 1453px #FFF , 1466px 683px #FFF , 981px 745px #FFF , 1968px 828px #FFF , 657px 1830px #FFF , 11px 1338px #FFF , 179px 730px #FFF , 1713px 197px #FFF , 51px 955px #FFF , 1243px 319px #FFF , 1175px 624px #FFF , 446px 46px #FFF , 5px 1158px #FFF , 82px 1352px #FFF , 1877px 402px #FFF , 708px 1778px #FFF , 903px 1625px #FFF , 1824px 352px #FFF , 1229px 140px #FFF , 1518px 24px #FFF , 1017px 512px #FFF , 515px 699px #FFF , 295px 265px #FFF , 69px 1773px #FFF , 1640px 1163px #FFF , 536px 342px #FFF , 970px 1766px #FFF , 560px 1416px #FFF , 577px 193px #FFF , 469px 9px #FFF , 466px 276px #FFF , 711px 853px #FFF , 401px 685px #FFF , 85px 506px #FFF , 865px 558px #FFF , 631px 105px #FFF , 887px 866px #FFF , 1704px 1001px #FFF , 1051px 1199px #FFF , 275px 1909px #FFF , 1462px 829px #FFF , 375px 1057px #FFF , 1531px 1501px #FFF , 205px 403px #FFF , 33px 1869px #FFF , 967px 1176px #FFF , 376px 863px #FFF , 1769px 1545px #FFF , 535px 51px #FFF , 1972px 1569px #FFF , 1773px 960px #FFF , 487px 620px #FFF , 1660px 687px #FFF , 1632px 972px #FFF , 1362px 42px #FFF , 479px 1655px #FFF , 1531px 1808px #FFF , 1450px 1412px #FFF , 1549px 170px #FFF , 1904px 1305px #FFF , 1209px 48px #FFF , 1933px 820px #FFF , 1623px 595px #FFF , 48px 643px #FFF , 179px 1754px #FFF , 589px 1032px #FFF , 1199px 356px #FFF , 1755px 1418px #FFF , 780px 1174px #FFF , 1905px 758px #FFF , 1567px 713px #FFF , 1372px 705px #FFF , 456px 654px #FFF , 759px 690px #FFF , 452px 673px #FFF , 993px 1610px #FFF , 1271px 188px #FFF , 343px 1750px #FFF , 1943px 1735px #FFF , 1717px 853px #FFF , 1247px 303px #FFF , 1314px 1895px #FFF , 1203px 489px #FFF , 741px 469px #FFF , 4px 246px #FFF , 1515px 115px #FFF , 606px 218px #FFF , 1966px 1471px #FFF , 177px 87px #FFF , 1575px 588px #FFF , 1136px 1386px #FFF , 70px 1868px #FFF , 1053px 18px #FFF , 1124px 721px #FFF , 1748px 1181px #FFF , 191px 1387px #FFF , 1931px 840px #FFF , 1088px 1603px #FFF , 634px 1255px #FFF , 814px 1434px #FFF , 585px 64px #FFF , 1074px 1618px #FFF , 1692px 761px #FFF , 651px 643px #FFF , 193px 335px #FFF , 1103px 1447px #FFF , 491px 1142px #FFF , 521px 408px #FFF , 536px 340px #FFF , 411px 1091px #FFF , 1646px 193px #FFF , 1595px 1285px #FFF , 870px 1349px #FFF , 1085px 1013px #FFF , 204px 1864px #FFF , 1359px 299px #FFF , 807px 964px #FFF , 219px 509px #FFF , 36px 1227px #FFF , 702px 1873px #FFF , 1471px 934px #FFF , 1763px 792px #FFF , 973px 1957px #FFF , 987px 68px #FFF , 593px 1282px #FFF , 1900px 607px #FFF , 407px 1659px #FFF , 587px 17px #FFF , 632px 158px #FFF;\r\n          box-shadow: 233px 1976px #FFF , 1196px 1119px #FFF , 646px 740px #FFF , 335px 645px #FFF , 1119px 1452px #FFF , 176px 1870px #FFF , 639px 1711px #FFF , 647px 1388px #FFF , 1516px 1108px #FFF , 464px 66px #FFF , 331px 344px #FFF , 772px 1189px #FFF , 1516px 1850px #FFF , 1500px 1463px #FFF , 1275px 876px #FFF , 1107px 645px #FFF , 977px 478px #FFF , 583px 1179px #FFF , 284px 395px #FFF , 1220px 461px #FFF , 1160px 249px #FFF , 196px 865px #FFF , 670px 1915px #FFF , 1449px 382px #FFF , 1191px 546px #FFF , 1329px 605px #FFF , 1945px 458px #FFF , 995px 749px #FFF , 1495px 861px #FFF , 708px 1731px #FFF , 348px 653px #FFF , 548px 1298px #FFF , 1606px 990px #FFF , 1049px 1204px #FFF , 253px 1501px #FFF , 1154px 166px #FFF , 1087px 104px #FFF , 1034px 1161px #FFF , 1681px 462px #FFF , 577px 1897px #FFF , 193px 1901px #FFF , 1701px 1755px #FFF , 864px 1297px #FFF , 800px 1289px #FFF , 676px 28px #FFF , 185px 1341px #FFF , 379px 1151px #FFF , 1224px 1725px #FFF , 280px 541px #FFF , 473px 1196px #FFF , 921px 1628px #FFF , 969px 432px #FFF , 1475px 758px #FFF , 1195px 993px #FFF , 876px 1840px #FFF , 1274px 1689px #FFF , 1977px 1101px #FFF , 837px 527px #FFF , 1785px 1610px #FFF , 1650px 1843px #FFF , 1127px 1508px #FFF , 401px 1050px #FFF , 51px 1105px #FFF , 545px 880px #FFF , 1786px 1672px #FFF , 318px 260px #FFF , 568px 254px #FFF , 1026px 1527px #FFF , 1242px 852px #FFF , 1785px 982px #FFF , 1318px 1071px #FFF , 398px 1061px #FFF , 1509px 257px #FFF , 599px 928px #FFF , 1195px 1800px #FFF , 1254px 906px #FFF , 141px 26px #FFF , 1384px 1502px #FFF , 476px 767px #FFF , 1973px 722px #FFF , 1339px 1031px #FFF , 778px 818px #FFF , 213px 1320px #FFF , 184px 221px #FFF , 983px 1911px #FFF , 923px 1439px #FFF , 1936px 581px #FFF , 1105px 625px #FFF , 325px 729px #FFF , 1475px 204px #FFF , 1483px 1564px #FFF , 1327px 1272px #FFF , 1187px 1944px #FFF , 1945px 1471px #FFF , 116px 960px #FFF , 1660px 1610px #FFF , 412px 1022px #FFF , 1552px 1516px #FFF , 1517px 1892px #FFF , 306px 829px #FFF , 1416px 462px #FFF , 1575px 1460px #FFF , 424px 1500px #FFF , 1530px 1169px #FFF , 1388px 1608px #FFF , 185px 416px #FFF , 634px 1446px #FFF , 767px 479px #FFF , 71px 426px #FFF , 1937px 145px #FFF , 1955px 1312px #FFF , 1811px 611px #FFF , 1145px 569px #FFF , 1460px 676px #FFF , 131px 1858px #FFF , 1557px 473px #FFF , 735px 130px #FFF , 112px 1531px #FFF , 1312px 305px #FFF , 409px 1032px #FFF , 149px 1964px #FFF , 535px 1215px #FFF , 1382px 630px #FFF , 1437px 1368px #FFF , 362px 1181px #FFF , 388px 181px #FFF , 274px 1287px #FFF , 1858px 1414px #FFF , 661px 1935px #FFF , 675px 1205px #FFF , 1829px 1725px #FFF , 1937px 1145px #FFF , 237px 908px #FFF , 1059px 1185px #FFF , 824px 1248px #FFF , 1167px 1730px #FFF , 180px 1961px #FFF , 1663px 203px #FFF , 374px 221px #FFF , 724px 1883px #FFF , 970px 1362px #FFF , 832px 505px #FFF , 313px 233px #FFF , 1909px 597px #FFF , 434px 201px #FFF , 587px 995px #FFF , 1833px 623px #FFF , 1464px 561px #FFF , 231px 593px #FFF , 1558px 1433px #FFF , 1986px 1767px #FFF , 1753px 1728px #FFF , 1153px 1623px #FFF , 249px 229px #FFF , 1503px 1186px #FFF , 1784px 137px #FFF , 841px 403px #FFF , 1400px 354px #FFF , 197px 499px #FFF , 1188px 681px #FFF , 158px 391px #FFF , 443px 1099px #FFF , 723px 1445px #FFF , 1408px 1235px #FFF , 1908px 195px #FFF , 271px 891px #FFF , 469px 1693px #FFF , 580px 11px #FFF , 1533px 70px #FFF , 859px 761px #FFF , 1510px 1844px #FFF , 421px 558px #FFF , 1132px 1453px #FFF , 757px 1987px #FFF , 212px 293px #FFF , 569px 323px #FFF , 1404px 1394px #FFF , 252px 1386px #FFF , 1668px 1857px #FFF , 123px 1684px #FFF , 105px 490px #FFF , 1083px 1769px #FFF , 1071px 1953px #FFF , 1271px 1159px #FFF , 699px 1491px #FFF , 1744px 1997px #FFF , 1868px 1973px #FFF , 1438px 1449px #FFF , 1222px 1921px #FFF , 1328px 1210px #FFF , 438px 873px #FFF , 809px 780px #FFF , 491px 1524px #FFF , 447px 1830px #FFF , 927px 1936px #FFF , 564px 691px #FFF , 1784px 1747px #FFF , 1978px 1722px #FFF , 1599px 1480px #FFF , 1276px 729px #FFF , 731px 1174px #FFF , 1586px 1711px #FFF , 451px 1340px #FFF , 1075px 1899px #FFF , 13px 575px #FFF , 309px 1340px #FFF , 981px 183px #FFF , 248px 1315px #FFF , 849px 80px #FFF , 1754px 1540px #FFF , 73px 1432px #FFF , 1208px 1828px #FFF , 65px 575px #FFF , 1098px 730px #FFF , 127px 1358px #FFF , 185px 19px #FFF , 1222px 1679px #FFF , 1122px 315px #FFF , 1906px 452px #FFF , 761px 284px #FFF , 813px 492px #FFF , 1344px 843px #FFF , 118px 1834px #FFF , 1620px 359px #FFF , 1755px 1246px #FFF , 299px 1076px #FFF , 1746px 158px #FFF , 6px 1635px #FFF , 143px 190px #FFF , 101px 468px #FFF , 137px 971px #FFF , 1221px 1929px #FFF , 1752px 650px #FFF , 1635px 1761px #FFF , 1522px 833px #FFF , 908px 153px #FFF , 1044px 350px #FFF , 1151px 1940px #FFF , 822px 210px #FFF , 1774px 310px #FFF , 796px 1447px #FFF , 1069px 1903px #FFF , 217px 565px #FFF , 662px 1370px #FFF , 1876px 1570px #FFF , 847px 46px #FFF , 1042px 1689px #FFF , 1584px 1434px #FFF , 1791px 908px #FFF , 973px 908px #FFF , 793px 747px #FFF , 122px 483px #FFF , 1137px 1374px #FFF , 1757px 1791px #FFF , 513px 225px #FFF , 63px 731px #FFF , 1179px 1926px #FFF , 346px 18px #FFF , 589px 175px #FFF , 87px 302px #FFF , 380px 1295px #FFF , 450px 921px #FFF , 1667px 1973px #FFF , 1495px 1373px #FFF , 1462px 1850px #FFF , 540px 288px #FFF , 1208px 1051px #FFF , 1554px 1095px #FFF , 1009px 1516px #FFF , 181px 572px #FFF , 165px 387px #FFF , 549px 1835px #FFF , 960px 16px #FFF , 1360px 403px #FFF , 1251px 43px #FFF , 1905px 1813px #FFF , 1106px 866px #FFF , 1809px 277px #FFF , 1828px 1720px #FFF , 295px 1610px #FFF , 523px 166px #FFF , 1069px 692px #FFF , 1292px 217px #FFF , 11px 1721px #FFF , 99px 1045px #FFF , 51px 1584px #FFF , 1053px 266px #FFF , 1287px 1235px #FFF , 747px 1722px #FFF , 1542px 736px #FFF , 1256px 18px #FFF , 102px 609px #FFF , 586px 1339px #FFF , 1843px 1697px #FFF , 824px 1687px #FFF , 1124px 882px #FFF , 395px 501px #FFF , 1456px 672px #FFF , 1472px 1648px #FFF , 1326px 1164px #FFF , 777px 1672px #FFF , 81px 345px #FFF , 91px 386px #FFF , 243px 411px #FFF , 1560px 90px #FFF , 6px 1771px #FFF , 1601px 616px #FFF , 1220px 1808px #FFF , 1160px 836px #FFF , 246px 1777px #FFF , 456px 863px #FFF , 97px 1138px #FFF , 1811px 942px #FFF , 213px 414px #FFF , 891px 392px #FFF , 1044px 927px #FFF , 1856px 216px #FFF , 957px 347px #FFF , 1486px 406px #FFF , 838px 912px #FFF , 803px 361px #FFF , 564px 826px #FFF , 1597px 949px #FFF , 1206px 289px #FFF , 33px 1035px #FFF , 1762px 1377px #FFF , 789px 1815px #FFF , 1594px 1342px #FFF , 1668px 880px #FFF , 1539px 1581px #FFF , 1547px 53px #FFF , 861px 1433px #FFF , 693px 1618px #FFF , 1762px 782px #FFF , 1568px 682px #FFF , 1126px 1762px #FFF , 1242px 134px #FFF , 495px 959px #FFF , 1606px 219px #FFF , 1878px 1415px #FFF , 1652px 797px #FFF , 782px 1903px #FFF , 1774px 1133px #FFF , 1430px 408px #FFF , 265px 394px #FFF , 890px 336px #FFF , 1051px 311px #FFF , 461px 1559px #FFF , 1931px 91px #FFF , 1160px 380px #FFF , 1442px 1058px #FFF , 1157px 364px #FFF , 586px 227px #FFF , 1365px 715px #FFF , 1658px 1655px #FFF , 1923px 1664px #FFF , 1023px 1844px #FFF , 1939px 1367px #FFF , 1203px 1305px #FFF , 359px 642px #FFF , 1056px 425px #FFF , 787px 202px #FFF , 1609px 1850px #FFF , 1964px 200px #FFF , 1537px 586px #FFF , 1589px 903px #FFF , 1063px 1694px #FFF , 760px 1185px #FFF , 597px 1396px #FFF , 294px 452px #FFF , 433px 818px #FFF , 199px 840px #FFF , 1332px 1937px #FFF , 169px 1907px #FFF , 591px 834px #FFF , 1716px 1032px #FFF , 45px 1879px #FFF , 686px 1469px #FFF , 1520px 475px #FFF , 1122px 859px #FFF , 973px 1541px #FFF , 269px 477px #FFF , 1390px 716px #FFF , 1791px 783px #FFF , 824px 2000px #FFF , 1211px 1717px #FFF , 1008px 1587px #FFF , 1422px 204px #FFF , 234px 556px #FFF , 506px 550px #FFF , 942px 1670px #FFF , 397px 853px #FFF , 599px 795px #FFF , 762px 1926px #FFF , 1202px 1424px #FFF , 135px 1316px #FFF , 1442px 1692px #FFF , 977px 652px #FFF , 564px 1648px #FFF , 997px 1474px #FFF , 67px 1366px #FFF , 1860px 1451px #FFF , 1105px 772px #FFF , 1886px 1396px #FFF , 1510px 658px #FFF , 976px 1544px #FFF , 894px 543px #FFF , 1098px 1189px #FFF , 690px 77px #FFF , 770px 733px #FFF , 557px 1403px #FFF , 1758px 1623px #FFF , 1341px 812px #FFF , 699px 967px #FFF , 277px 866px #FFF , 1526px 1828px #FFF , 8px 977px #FFF , 1707px 952px #FFF , 12px 1900px #FFF , 72px 921px #FFF , 496px 1067px #FFF , 1288px 1749px #FFF , 273px 984px #FFF , 1197px 1991px #FFF , 242px 789px #FFF , 903px 1035px #FFF , 480px 1492px #FFF , 102px 1331px #FFF , 738px 1343px #FFF , 560px 1475px #FFF , 367px 846px #FFF , 1420px 962px #FFF , 1976px 892px #FFF , 1911px 1763px #FFF , 1639px 1002px #FFF , 437px 1522px #FFF , 1906px 1025px #FFF , 730px 1364px #FFF , 1127px 521px #FFF , 1401px 1792px #FFF , 1954px 1066px #FFF , 232px 250px #FFF , 1685px 660px #FFF , 1011px 999px #FFF , 1970px 790px #FFF , 750px 499px #FFF , 1738px 660px #FFF , 1621px 1849px #FFF , 446px 52px #FFF , 1055px 1396px #FFF , 1165px 1497px #FFF , 1740px 1425px #FFF , 1012px 1920px #FFF , 1258px 1560px #FFF , 1020px 1152px #FFF , 362px 673px #FFF , 1065px 975px #FFF , 582px 755px #FFF , 1271px 1479px #FFF , 719px 548px #FFF , 1602px 879px #FFF , 590px 499px #FFF , 721px 1412px #FFF , 1180px 113px #FFF , 1801px 1961px #FFF , 589px 941px #FFF , 883px 476px #FFF , 214px 890px #FFF , 1028px 892px #FFF , 1107px 1832px #FFF , 944px 361px #FFF , 480px 1453px #FFF , 1466px 683px #FFF , 981px 745px #FFF , 1968px 828px #FFF , 657px 1830px #FFF , 11px 1338px #FFF , 179px 730px #FFF , 1713px 197px #FFF , 51px 955px #FFF , 1243px 319px #FFF , 1175px 624px #FFF , 446px 46px #FFF , 5px 1158px #FFF , 82px 1352px #FFF , 1877px 402px #FFF , 708px 1778px #FFF , 903px 1625px #FFF , 1824px 352px #FFF , 1229px 140px #FFF , 1518px 24px #FFF , 1017px 512px #FFF , 515px 699px #FFF , 295px 265px #FFF , 69px 1773px #FFF , 1640px 1163px #FFF , 536px 342px #FFF , 970px 1766px #FFF , 560px 1416px #FFF , 577px 193px #FFF , 469px 9px #FFF , 466px 276px #FFF , 711px 853px #FFF , 401px 685px #FFF , 85px 506px #FFF , 865px 558px #FFF , 631px 105px #FFF , 887px 866px #FFF , 1704px 1001px #FFF , 1051px 1199px #FFF , 275px 1909px #FFF , 1462px 829px #FFF , 375px 1057px #FFF , 1531px 1501px #FFF , 205px 403px #FFF , 33px 1869px #FFF , 967px 1176px #FFF , 376px 863px #FFF , 1769px 1545px #FFF , 535px 51px #FFF , 1972px 1569px #FFF , 1773px 960px #FFF , 487px 620px #FFF , 1660px 687px #FFF , 1632px 972px #FFF , 1362px 42px #FFF , 479px 1655px #FFF , 1531px 1808px #FFF , 1450px 1412px #FFF , 1549px 170px #FFF , 1904px 1305px #FFF , 1209px 48px #FFF , 1933px 820px #FFF , 1623px 595px #FFF , 48px 643px #FFF , 179px 1754px #FFF , 589px 1032px #FFF , 1199px 356px #FFF , 1755px 1418px #FFF , 780px 1174px #FFF , 1905px 758px #FFF , 1567px 713px #FFF , 1372px 705px #FFF , 456px 654px #FFF , 759px 690px #FFF , 452px 673px #FFF , 993px 1610px #FFF , 1271px 188px #FFF , 343px 1750px #FFF , 1943px 1735px #FFF , 1717px 853px #FFF , 1247px 303px #FFF , 1314px 1895px #FFF , 1203px 489px #FFF , 741px 469px #FFF , 4px 246px #FFF , 1515px 115px #FFF , 606px 218px #FFF , 1966px 1471px #FFF , 177px 87px #FFF , 1575px 588px #FFF , 1136px 1386px #FFF , 70px 1868px #FFF , 1053px 18px #FFF , 1124px 721px #FFF , 1748px 1181px #FFF , 191px 1387px #FFF , 1931px 840px #FFF , 1088px 1603px #FFF , 634px 1255px #FFF , 814px 1434px #FFF , 585px 64px #FFF , 1074px 1618px #FFF , 1692px 761px #FFF , 651px 643px #FFF , 193px 335px #FFF , 1103px 1447px #FFF , 491px 1142px #FFF , 521px 408px #FFF , 536px 340px #FFF , 411px 1091px #FFF , 1646px 193px #FFF , 1595px 1285px #FFF , 870px 1349px #FFF , 1085px 1013px #FFF , 204px 1864px #FFF , 1359px 299px #FFF , 807px 964px #FFF , 219px 509px #FFF , 36px 1227px #FFF , 702px 1873px #FFF , 1471px 934px #FFF , 1763px 792px #FFF , 973px 1957px #FFF , 987px 68px #FFF , 593px 1282px #FFF , 1900px 607px #FFF , 407px 1659px #FFF , 587px 17px #FFF , 632px 158px #FFF;\r\n}\r\n@-webkit-keyframes animStar {\r\n  from {\r\n    -webkit-transform: translateY(0px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-2000px);\r\n  }\r\n}\r\n@keyframes animStar {\r\n  from {\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-2000px);\r\n            transform: translateY(-2000px);\r\n  }\r\n}\r\n/* bottom reset */\r\n.marshall-top-left {\r\n  left: 40px;\r\n  margin: 0 !important;\r\n  top: 10px;\r\n  right: inherit;\r\n  position: absolute;\r\n}\r\n.marshall-top-right {\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 25px;\r\n  left: inherit;\r\n  margin: 0 !important;\r\n}\r\n.marshall-left-center {\r\n  position: absolute;\r\n  left: 40px;\r\n  top: 50%;\r\n  right: inherit;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  margin: 0 !important;\r\n}\r\n.marshall-right-center {\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 50%;\r\n  left: inherit;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  margin: 0 !important;\r\n}\r\n.marshall-top-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 15px;\r\n  bottom: inherit;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  margin: 0 !important;\r\n}\r\n.marshall-bottom-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: inherit;\r\n  bottom: 15px;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  margin: 0 !important;\r\n}\r\n.marshall-bg-overley {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0) url(\"https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png\") repeat scroll center center;\r\n}\r\n.marshall-content {\r\n  display: block;\r\n  margin-left: 15%;\r\n  position: absolute;\r\n  top: 50%;\r\n  visibility: visible;\r\n  width: 70%;\r\n}\r\n.marhall-maintain-thumb {\r\n  margin: auto;\r\n  margin-bottom: auto;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n.marhall-maintain-thumb {\r\n  margin: auto;\r\n  width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n.marhall-maintain-thumb img {\r\n  display: block;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  border: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"marshall-bg-overley js-plaxify\" data-xrange=\"50\" data-yrange=\"25\" style=\"top: 0px; left: 0px; transform: translate3d(7.21083px, -1.25841px, 0px);\"></div>\n<div class=\"marshall-content jquery-center\" style=\"text-align: center; top: calc(50% - 185.483px); margin-left:26%;\">\n  <div class=\"marhall-maintain-thumb\">\n    <img src=\"https://pixiefy.com/themes/marshall/html/v24/images/v24/workers.png\" alt=\"\" class=\"js-plaxify\" data-xrange=\"10\" data-yrange=\"10\" style=\"top: 0px; left: 248.4px; transform: translate3d(1.44217px, -0.703364px, 0px);\">\n  </div>\n  <h2 class=\"js-plaxify\" data-xrange=\"20\" data-yrange=\"10\" style=\"top: 200.6px; margin-top: 6%; left: 0px; transform: translate3d(2.88433px, -0.703364px, 0px);\">Dashboard Comming Soon! Our development team is working hard; day and night.</h2>\n  <h4 class=\"js-plaxify\" data-xrange=\"40\" data-yrange=\"15\" style=\"top: 253.767px; left: 0px; transform: translate3d(5.76867px, -0.555046px, 0px);\">Module one completed, Click <a style=\"color: #F7942C; cursor: pointer;\" (click)=\"signout()\" >Logout</a> to explore more fetures such as forgot password, conform password etc.</h4>\n\n  <div class=\"simple-logo js-plaxify\" data-xrange=\"50\" data-yrange=\"20\" style=\"top: 330.967px; left: 0px; transform: translate3d(7.21083px, -1.40673px, 0px);\">\n    <img src=\"../../../../assets/images/logo1.png\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommingSoonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_fadeIn_animation__ = __webpack_require__("../../../../../src/app/animations/fadeIn.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommingSoonComponent = /** @class */ (function () {
    function CommingSoonComponent(_activatedRoute, afa, router) {
        this._activatedRoute = _activatedRoute;
        this.afa = afa;
        this.router = router;
    }
    CommingSoonComponent.prototype.signout = function () {
        var _this = this;
        this.afa.auth.signOut().then(function () {
            _this.router.navigate(['login']);
        });
    };
    CommingSoonComponent.prototype.ngOnInit = function () {
    };
    CommingSoonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comming-soon',
            template: __webpack_require__("../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/shared-components/comming-soon/comming-soon.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations_fadeIn_animation__["a" /* fadeInAnimation */]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CommingSoonComponent);
    return CommingSoonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/shared-components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-primary, .label-primary {\r\n    background-color: #1382c8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header animated slideInDown\">\n  <div class=\"header-left\">\n    <a class=\"logo\">\n      <img src=\"../assets/images/logo1.png\" style=\"width: 50%;\"  height=\"40\" alt=\"\">\n    </a>\n    <a class=\"logo-dark\">\n      <img src=\"../assets/images/logo1.png\" style=\"width: 50%;\" height=\"40\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"page-title-box pull-left\">\n    <h3></h3>\n  </div>\n  <a id=\"mobile_btn\" class=\"mobile_btn pull-left\" href=\"#sidebar\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n  <ul class=\"nav navbar-nav navbar-right user-menu pull-right\">\n\n\n    <li class=\"dropdown hidden-xs\">\n      <a href=\"#\" class=\"hasnotifications dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell-o\"></i><span class=\"badge bg-primary pull-right\">3</span></a>\n      <div class=\"dropdown-menu notifications\">\n        <div class=\"topnav-dropdown-header\">\n          <span>Notifications (Comming Soon)</span>\n        </div>\n        <div class=\"drop-scroll\">\n          <ul class=\"media-list scroll-content\">\n            <li class=\"media notification-message\">\n              <a >\n                <div class=\"media-left\">\n                        <span class=\"avatar\">\n                          <img alt=\"Some User\" src=\"../assets/images/user.jpg\" class=\"img-responsive img-circle\">\n                        </span>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"m-0 noti-details\"><span class=\"noti-title\">Some User</span> added new task <span class=\"noti-title\">Some activity</span></p>\n                  <p class=\"m-0\"><span class=\"notification-time\">4 mins ago</span></p>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"topnav-dropdown-footer\">\n          <a >View all Notifications</a>\n        </div>\n      </div>\n    </li>\n\n\n    <li class=\"dropdown toolbar-icon-bg hidden-xs\">\n      <a href=\"javascript:;\" id=\"open_msg_box\" class=\"hasnotifications\"><i class=\"fa fa-comment-o\"></i> <span class=\"badge bg-primary pull-right\">8</span></a>\n    </li>\n\n\n    <li class=\"dropdown\">\n      <a class=\"dropdown-toggle user-link\" data-toggle=\"dropdown\" title=\"Admin\">\n\t\t\t\t\t\t\t<span class=\"user-img\"><img class=\"img-circle\" src=\"../assets/images/user.jpg\" width=\"40\" alt=\"User\">\n\t\t\t\t\t\t\t<span class=\"status online\"></span></span>\n        <span>User</span>\n        <i class=\"caret\"></i>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li><a >My Profile</a></li>\n        <li><a >Edit Profile</a></li>\n        <li><a >Settings</a></li>\n        <li><a >Logout</a></li>\n      </ul>\n    </li>\n  </ul>\n  <div class=\"dropdown mobile-user-menu pull-right\">\n    <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n    <ul class=\"dropdown-menu pull-right\">\n      <li><a>My Profile</a></li>\n      <li><a >Edit Profile</a></li>\n      <li><a>Settings</a></li>\n      <li><a >Logout</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/crm/shared-components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/shared-components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/shared-components/message-box/message-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/message-box/message-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-box\">\n  <div class=\"msg-sidebar notifications msg-noti\">\n    <div class=\"topnav-dropdown-header\">\n      <span>Messages (Comming Soon)</span>\n    </div>\n    <div class=\"drop-scroll msg-list-scroll\">\n      <ul class=\"list-box\">\n        <li>\n          <a href=\"\">\n            <div class=\"list-item\">\n              <div class=\"list-left\">\n                <span class=\"avatar\">R</span>\n              </div>\n              <div class=\"list-body\">\n                <span class=\"message-author\">Some User </span>\n                <span class=\"message-time\">12:28 AM</span>\n                <div class=\"clearfix\"></div>\n                <span class=\"message-content\">Notifications Comming Soon</span>\n              </div>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"topnav-dropdown-footer\">\n      <a >See all messages</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/message-box/message-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent() {
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
    };
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-box',
            template: __webpack_require__("../../../../../src/app/crm/shared-components/message-box/message-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/shared-components/message-box/message-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/crm/shared-components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-primary, .label-primary {\r\n    background-color: #1382c8;\r\n}\r\n\r\n.sidebar-menu li a:hover {\r\n    color: #1382c8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar animated slideInLeft\" id=\"sidebar\">\n  <div class=\"sidebar-inner slimscroll\">\n    <div id=\"sidebar-menu\" class=\"sidebar-menu\">\n      <ul>\n        <li class=\"{{isActive.dashboard}}\">\n          <a (click)=\"gotoDashboard()\">Dashboard</a>\n        </li>\n        <li class=\"submenu {{isActive.contacts}}\">\n          <a (click)=\"gotoContacts()\"><span>Contacts</span> <span class=\"badge bg-primary pull-right\">1</span></a>\n        </li>\n        <li class=\"{{isActive.company}}\">\n          <a (click)=\"gotoCompany()\"><span>Company</span> <span class=\"badge bg-primary pull-right\">3</span></a>\n        </li>\n        <li class=\"{{isActive.property}}\">\n          <a (click)=\"gotoProperty()\"><span>Properties</span> </a>\n        </li>\n        <li class=\"submenu\" id=\"multislectToggle\">\n          <a ><span> Multi-Select </span> <span class=\"menu-arrow\"></span></a>\n          <ul class=\"list-unstyled\" style=\"display: none;     margin-top: -5%; background-color:transparent;\">\n            <li style=\"margin-left: 10%; font-style: oblique;\"><a (click)=\"gotoMultiSelectProperty()\">Property</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/crm/shared-components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isActive = {
            dashboard: '',
            contacts: '',
            company: '',
            property: '',
            multiSelect: ''
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.activeClassAssignment();
    };
    SidebarComponent.prototype.gotoDashboard = function () {
        this.router.navigate(['dashboard']);
        this.isActive.dashboard = 'active';
        this.isActive.contacts = '';
        this.isActive.company = '';
        this.isActive.property = '';
    };
    SidebarComponent.prototype.gotoContacts = function () {
        this.router.navigate(['contacts']);
        this.isActive.contacts = 'active';
        this.isActive.dashboard = '';
        this.isActive.company = '';
        this.isActive.property = '';
    };
    SidebarComponent.prototype.gotoCompany = function () {
        this.router.navigate(['company']);
        this.isActive.company = 'active';
        this.isActive.contacts = '';
        this.isActive.dashboard = '';
        this.isActive.property = '';
    };
    SidebarComponent.prototype.gotoProperty = function () {
        this.router.navigate(['property']);
        this.isActive.property = 'active';
        this.isActive.company = '';
        this.isActive.contacts = '';
        this.isActive.dashboard = '';
    };
    SidebarComponent.prototype.gotoMultiSelectProperty = function () {
        this.router.navigate(['multi-select/property']);
        this.isActive.property = '';
        this.isActive.company = '';
        this.isActive.contacts = '';
        this.isActive.dashboard = '';
    };
    SidebarComponent.prototype.activeClassAssignment = function () {
        var currentUrl = this.router.url.replace('/', '');
        console.log(currentUrl == 'multi-select');
        if (currentUrl == 'dashboard') {
            this.isActive.dashboard = 'active';
        }
        else if (currentUrl == 'contacts') {
            this.isActive.contacts = 'active';
        }
        else if (currentUrl == 'company') {
            this.isActive.company = 'active';
        }
        else if (currentUrl == 'property') {
            this.isActive.property = 'active';
        }
        else if (currentUrl == 'multi-select') {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#multislectToggle').click();
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/crm/shared-components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/crm/shared-components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor:pointer;\r\n}\r\n.account-logo img {\r\n  width: 90%;\r\n  margin-bottom: 4%;\r\n  left: 1%;\r\n  right: 1%;\r\n  margin-top: 4%;\r\n}\r\n.account-box .account-btn {\r\n  background: -webkit-gradient(linear, left top, right top, from(#0177c2), to(#76bfe8)) !important;\r\n  background: linear-gradient(to right, #0177c2 0%, #76bfe8 100%) !important;\r\n}\r\n.account-box a:hover {\r\n  color: #1382c8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"background-image\" style=\"\"></div>\n  <div class=\"account-page\">\n    <div class=\"container animated fadeIn\">\n      <h3 class=\"account-title\">Reset Password</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Email Address</label>\n              <input [(ngModel)]=\"email\" name=\"email\" class=\"form-control floating\" type=\"text\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button class=\"btn btn-primary btn-block account-btn\" (click)=\"submit()\" type=\"submit\">Reset Password</button>\n            </div>\n            <div class=\"text-center\">\n              <a (click)=\"gotoLogin()\">Back to Login</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(toastr, vcr, af, router) {
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.email = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.form-control').focus(function (e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).parent().addClass('focused');
        });
    };
    ForgotPasswordComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.email.length == 0) {
            this.toastr.warning('Email can\'t be empty! ', 'Stop!');
        }
        else if (!(this.regexp.test(this.email))) {
            this.toastr.warning('Email should be in proper format! ', 'Stop!');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().sendPasswordResetEmail(this.email).then(function () {
                _this.router.navigateByData({
                    url: ["login"],
                    data: [{ "state": "forgot-password-email-sucessful" }]
                });
            }).catch(function (error) {
                _this.toastr.warning('You have exceded reset emails limit. Please come back later or contact admin. ', 'Stop!');
            });
        }
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor:pointer;\r\n}\r\n.account-logo img {\r\n  width: 90%;\r\n  margin-bottom: 4%;\r\n  left: 1%;\r\n  right: 1%;\r\n  margin-top: 4%;\r\n}\r\n.account-box .account-btn {\r\n  background: -webkit-gradient(linear, left top, right top, from(#0177c2), to(#76bfe8)) !important;\r\n  background: linear-gradient(to right, #0177c2 0%, #76bfe8 100%) !important;\r\n  -webkit-box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n          box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n}\r\n.account-box a:hover {\r\n  color: #1382c8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\" xmlns:https=\"http://www.w3.org/1999/xhtml\">\n  <div class=\"background-image\" style=\"\"></div>\n  <div class=\"account-page\">\n    <div class=\"container animated fadeIn\">\n      <h3 class=\"account-title\"></h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form >\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Email / Username</label>\n              <input id=\"email\" id=\"form-control\" class=\"form-control floating\"  [(ngModel)]=\"email\" name=\"email\" type=\"text\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Password</label>\n              <input password=\"password\" class=\"form-control floating\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button class=\"btn btn-primary btn-block account-btn\" type=\"button\" (click)=\"submit()\" >Login</button>\n            </div>\n            <div style=\"line-height: 2.5em;\" class=\"text-center\">\n              <a (click)=\"gotoForgotPassword()\" style=\"color: #1382c8;font-size: 15px;\">Forgot your password?</a><br>\n              <span style=\"font-size: 16px;\"> Don't have an account?</span> <a  (click)=\"gotoSignup()\" style=\"color: #1382c8;\"> Signup here!</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_activatedRoute, firebaseAuth, toastr, vcr, af, router) {
        this._activatedRoute = _activatedRoute;
        this.firebaseAuth = firebaseAuth;
        this.toastr = toastr;
        this.af = af;
        this.router = router;
        this.email = '';
        this.password = '';
        this.state = 0;
        this.routeState = "";
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeState = this.router.getNavigatedData();
        if (this.routeState) {
            if (this.routeState[0]) {
                if (this.routeState[0]['state'] != '') {
                    if (this.routeState[0]['state'] == "signup-email-sucessful") {
                        this.toastr.success('An Email was sent to your email address to verify.', 'Signup Sucessful!');
                    }
                    else if (this.routeState[0]['state'] == "forgot-password-email-sucessful") {
                        this.toastr.success('Reset Email sent! ', 'Password Reset Sucessful!');
                    }
                    else if (this.routeState[0]['state'] == "verify-email-sucessful") {
                        this.toastr.success('Email Verified sucessfully. Please Login! ', 'Email Verification Sucessful!');
                    }
                    else if (this.routeState[0]['state'] == "password-change-sucessful") {
                        this.toastr.success('Your password has been reseted sucessfully. Please Login! ', 'Password Reset Sucessful!');
                    }
                    else if (this.routeState[0]['state'] == "bad-account-management-link") {
                        this.toastr.warning('Invalid or bad account management link! ', 'Error!');
                    }
                    else if (this.routeState[0]['state'] == "not-authenticated") {
                        this.toastr.warning('Signin Required! ', 'Error!');
                    }
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.form-control').focus(function (e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).parent().addClass('focused');
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (!(user.emailVerified == false)) {
                    _this.router.navigate(['dashboard']);
                }
            }
        });
    };
    LoginComponent.prototype.gotoSignup = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent.prototype.gotoForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.email.length == 0) {
            this.toastr.warning('Email can\'t be empty! ', 'Stop!');
        }
        else if (this.password.length == 0) {
            this.toastr.warning('Password can\'t be empty! ', 'Stop!');
        }
        else if (!(this.regexp.test(this.email))) {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/usernames').orderByChild("username").equalTo(this.email).on('value', function (snapshot) {
                if (snapshot.val()) {
                    if ((snapshot.val()).length > 1) {
                        _this.toastr.warning('Two users with same username exists! Use your email address instead.', 'Error!');
                    }
                    else {
                        _this.email = (snapshot.val()[Object.keys(snapshot.val())[0]]).email;
                        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithEmailAndPassword(_this.email, _this.password)
                            .then(function (data) {
                            if (data.emailVerified == false) {
                                _this.toastr.warning('Check your email for conformation link!', 'Verify your account!');
                            }
                            else {
                                _this.router.navigate(['dashboard']);
                            }
                        })
                            .catch(function (error) {
                            if (error.code == "auth/user-not-found") {
                                _this.toastr.warning('No account found for this username!', 'Error!');
                            }
                            else if (error.code == "auth/wrong-password") {
                                _this.toastr.warning('Either your username or password is incorrect.', 'Error!');
                            }
                            else {
                                console.log(error);
                            }
                        });
                    }
                }
                else {
                    _this.toastr.warning('Incorrect username or password!', 'Error!');
                }
            }, function (error) {
                _this.toastr.error('System Error. Call your Admininstrator!', 'Error!');
                console.log(error);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                if (data.emailVerified == false) {
                    _this.toastr.warning('Check your email for conformation link!', 'Verify your account!');
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            })
                .catch(function (error) {
                if (error.code == "auth/user-not-found") {
                    _this.toastr.warning('No account found for this email addess!', 'Error!');
                }
                else if (error.code == "auth/wrong-password") {
                    _this.toastr.warning('Either your email or password is incorrect.', 'Error!');
                }
                else {
                    console.log(error);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            return ("Done");
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            return (err.message);
        });
        return ("a");
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor:pointer;\r\n}\r\n.account-logo img {\r\n  width: 90%;\r\n  margin-bottom: 4%;\r\n  left: 1%;\r\n  right: 1%;\r\n  margin-top: 4%;\r\n}\r\n.account-box .account-btn {\r\n  background: -webkit-gradient(linear, left top, right top, from(#0177c2), to(#76bfe8)) !important;\r\n  background: linear-gradient(to right, #0177c2 0%, #76bfe8 100%) !important;\r\n  -webkit-box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n          box-shadow: 0 6px 15px rgb(137, 198, 233) !important;\r\n}\r\n.account-box a:hover {\r\n  color: #1382c8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"background-image\" style=\"\"></div>\n  <div class=\"account-page\">\n    <div class=\"container animated fadeIn\">\n      <h3 class=\"account-title\">Signup</h3>\n      <div style=\"margin-bottom: 30px;\" class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n\n            <div class=\" form-group form-focus\">\n              <label class=\"control-label\">Username</label>\n              <input name=\"username\" required [(ngModel)]=\"username\" class=\"form-control floating \"  type=\"text\">\n            </div>\n            <div id=\"signupEmailDiv\" class=\"animated form-group form-focus\">\n              <label class=\"control-label\">Email</label>\n              <input name=\"email\" required [(ngModel)]=\"email\" class=\"form-control floating\" type=\"email\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Password</label>\n              <input name=\"password\" [(ngModel)]=\"password\" class=\"form-control floating\" type=\"password\">\n            </div>\n            <div class=\"form-group form-focus\">\n              <label class=\"control-label\">Repeat Password</label>\n              <input name=\"conformPassword\" [(ngModel)]=\"conformPassword\" class=\"form-control floating\" type=\"password\">\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button  class=\"btn btn-primary btn-block account-btn\" (click)=\"submit()\" type=\"button\">Register</button>\n            </div>\n            <div class=\"text-center\">\n              <a (click)=\"gotoLogin()\">Already have an account?</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(toastr, vcr, firebaseAuth, router) {
        this.toastr = toastr;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.email = '';
        this.password = '';
        this.conformPassword = '';
        this.username = '';
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.form-control').focus(function (e) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).parent().addClass('focused');
        });
    };
    SignupComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
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
        else if ((!(this.regexp.test(this.email)))) {
            this.toastr.warning('Email should be in proper format! ', 'Stop!');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password)
                .then(function (value) {
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
                user.sendEmailVerification()
                    .then(function () {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users/' + user.uid).set({
                        username: _this.username,
                        email: user.email,
                        displayName: user.displayName,
                        isAdmin: false,
                        isEmailVerified: user.emailVerified,
                        createDate: user.metadata.creationTime,
                        providerDisplayName: user.providerData[0].displayName,
                        providerId: user.providerData[0].providerId,
                        providerUid: user.providerData[0].providerId,
                        providerPhotoUrl: user.providerData[0].photoURL,
                        providerPhoneNumber: user.providerData[0].phoneNumber,
                        providerEmail: user.providerData[0].email,
                    });
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('usernames/' + user.uid).set({
                        username: _this.username,
                        email: user.email,
                    });
                    _this.router.navigateByData({
                        url: ["login"],
                        data: [{ "state": "signup-email-sucessful" }]
                    });
                }).catch(function (error) {
                    _this.toastr.warning(error, 'Stop!');
                });
            })
                .catch(function (err) {
                _this.toastr.warning(err, 'Stop!');
            });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_email_Depricated_verify_email_component__ = __webpack_require__("../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_4__verify_email_Depricated_verify_email_component__["a" /* VerifyEmailComponent */]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n  cursor:pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <div class=\"account-page\">\n    <div class=\"container\">\n      <h3 class=\"account-title\">Email Verification</h3>\n      <div class=\"account-box\">\n        <div class=\"account-wrapper\">\n          <div class=\"account-logo\">\n            <a href=\"\"><img style=\"\" src=\"./../../assets/images/logo1.png\" alt=\"Chatty CRM\"></a>\n          </div>\n          <form>\n            <div style=\"font-size: 17px; margin-top: 50px;\" class=\"form-group  text-center\">\n              {{message}}\n            </div>\n            <div *ngIf=\"loginButton\" class=\"text-center\">\n              <a (click)=\"gotoLogin()\">Try logging in? Click here!</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fadeIn_animation__ = __webpack_require__("../../../../../src/app/animations/fadeIn.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(toastr, vcr, route, router, location, firebaseAuth) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.location = location;
        this.firebaseAuth = firebaseAuth;
        this.message = "Verifying your email. Please wait...";
        this.loginButton = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    VerifyEmailComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailLink(params['email'].replace('=', ''), "https://chattycrm-beta.firebaseapp.com/" + _this.location.path())
                .then(function (result) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function () {
                    _this.router.navigateByData({
                        url: ["login"],
                        data: [{ "state": "verify-email-sucessful" }]
                    });
                }).catch(function (error) {
                    _this.toastr.warning("An unexpected error occured. Contact Admin!", 'Stop!');
                });
            })
                .catch(function (error) {
                _this.message = error;
                _this.loginButton = true;
                _this.toastr.error(error, 'Stop!');
            });
        });
    };
    VerifyEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__("../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/verify-email (Depricated)/verify-email.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fadeIn_animation__["a" /* fadeInAnimation */]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map