import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { AccountFactory } from './account.factory';
import { AppConst } from './helper/constants';
import * as _ from 'underscore';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public commonservice: CommonService, public storageservice: StorageService, public accountfactory: AccountFactory, private http: HttpClient ) { }
   // var deferred = $q.defer();
   /*login (loginModel) {
    return this.http.post(this.commonservice.buildUrl((AppConst.API_URL.Account.Autenticate), loginModel)
        .then(function(response) {
            var data = response.data;
            this.storageservice.set(AppConst.StorageKeys.Token, response.data.token);
            this.storageservice.set(AppConst.StorageKeys.UserInfo, response.data.user);
            this.storageservice.set(AppConst.StorageKeys.Permissions, response.data.permissions);
            return data;
        }, function(error) {
            return error;
        })
    }
    

logout (reason) {
     this.accountfactory.logout.save({ userID: null }, { userID: this.userInfo().id, reason:reason});

    this.storageservice.removeAll();
}*/

userInfo () {
    var userInfo = this.storageservice.get(AppConst.StorageKeys.UserInfo);
    return userInfo;
};

token () {
    var token = this.storageservice.get(AppConst.StorageKeys.Token);
    if (token != undefined) {
        return 'Bearer ' + token.access_token;
    }
    return null;
}

permissions () {
    var permissions = this.storageservice.get(AppConst.StorageKeys.Permissions);
    return permissions;
}

hasThisPermission (permission) {
    var permissions = this.permissions();
    var hasPermission = _.contains(permissions, permission);
    return hasPermission;
}

hasThesePermissions (permissions) {
    var hasPermission = false;
    _.each(permissions, function(permission) {
        //return true if user has access to one of the permissions
        hasPermission = hasPermission || this.hasThisPermission(permission);
    })
    return hasPermission;
}


}

