import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { AppConst } from './helper/constants';




@Injectable({
  providedIn: 'root'
})
export class AccountFactory {
  constructor(public commonservice: CommonService, public storageservice: StorageService) { }
  // users = (this.commonservice.buildUrl((AppConst.API_URL.Account.Users), { id: "@id" }), AppConst.Methods.All);
  // authenticate = (this.commonservice.buildUrl((AppConst.API_URL.Account.Autenticate), {}), AppConst.Methods.Post);
  // token = (this.commonservice.buildUrl((AppConst.API_URL.Account.ValidateToken), {}), AppConst.Methods.Post);
  // validateToken = (this.commonservice.buildUrl((AppConst.API_URL.Account.ValidateToken), {}), AppConst.Methods.Readonly);
  // changePassword = (this.commonservice.buildUrl((AppConst.API_URL.Account.ChangePassword), {}), AppConst.Methods.Save);
  // resetPassword = (this.commonservice.buildUrl((AppConst.API_URL.Account.ResetPassword), { username: "@username" }), AppConst.Methods.Save);
  // logout = (this.commonservice.buildUrl((AppConst.API_URL.Account.Logout), { userID: "@userID" }), AppConst.Methods.Save);
}