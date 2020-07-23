import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import * as angular from "angular";
import { AccountService } from '../../account.service';
import { Location } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  constructor(public commonservice: CommonService, public accountservice: AccountService, public location: Location, public deviceDetector: DeviceDetectorService, public router: Router) { 
    
  }

  ngOnInit() {
  }
 /*  let vm = this;
  vm.year = (new Date()).getFullYear();
  vm.company = "John Snow Inc | AIDSFree Project";


  //build logger
  vm.data = this.deviceDetector;
  //build the login Model
  vm.loginModel = {
      clientInfo: {
          os: vm.data.os,
          osVersion: vm.data.os_version,
          deviceType: vm.data.isDesktop() ? "Desktop" : vm.data.device,
          browser: vm.data.browser,
          browserVersion: vm.data.browser_version
      }
  };

  vm.loginModelValidation = {};


  vm.showError = false;
  vm.loginFailed = false;

  vm.Authenticate = function() {
      vm.showError = true;
      let pageTitle = Title.original();
      if (pageTitle !== "iImport") { //If original title stored is not "iImport", set it to "iImport".
          Title.original("iImport");
      }
      Title.restore();
      if (vm.loginModelValidation.$isValid) {
          this.accountservice.login(vm.loginModel)
              .then(function(result) {
                  //redirect to main
                  if (result.token != undefined && result.token.access_token != undefined) {
                      //check if there exists a return url and route to there ... or else route to home.
                      var returnUrl = this.commonservice.getReturnUrl();
                      if (angular.isDefined(returnUrl)) {
                          this.location.path(returnUrl);
                          //Reset the return ulr once its consumed.
                          this.commonservice.resetReturnUrl();

                      } else {
                          this.router.navigate(['home']);
                      }

                  } else {
                      vm.loginFailed = true;
                  }
              }, function(error) {
                  //show alert or something
                  this.log.log(error);
              })
      }
  }


*/

}
