import { Injectable } from "@angular/core";
import * as CONSTANT_LIST from "../constants/constant-list";
import * as CryptoJS from "crypto-js";
@Injectable()
export class LocalStorageService {
  protected constantList = CONSTANT_LIST;

  get(key: string): any {
    return this.getDataInLocalStorage(key);
  }

  set({ key, value }): void {
    this.setDataInLocalStorage({ key, value });
  }

  setDataInLocalStorage({ key, value }) {
    try {
      return localStorage.setItem( key, CryptoJS.AES.encrypt(JSON.stringify(value), this.constantList.DEFAULT_COOKIE_ENCRYPTION_KEY).toString() );
    } catch (e) {
    }
  }

  getDataInLocalStorage(key: string) {
    try {
      const data = localStorage.getItem(key);
      const bytes = CryptoJS.AES.decrypt(data, this.constantList.DEFAULT_COOKIE_ENCRYPTION_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
    }
  }

  clearDataInLocalStorage() {
    localStorage.clear();
  }

  getToken() {
    return this.getDataInLocalStorage("Oakroot_TOKEN");
  }

  getLocalStorageLength() {
    return localStorage.length;
  }
}

