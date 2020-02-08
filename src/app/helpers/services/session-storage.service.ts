import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import * as CONSTANT_LIST from "../constants/constant-list";
import * as CryptoJS from "crypto-js";

@Injectable()
export class SessionStorageService {

  protected constantList = CONSTANT_LIST;

  constructor( private localStorageService: LocalStorageService ) {
    if ( this.localStorageService.getLocalStorageLength() > 0 ) {
      // this.storeLocalStorageInSessionStorage();
    }
  }

  get(key: string): any {
    return this.getDataInSessionStorage(key);
  }

  set({key, value}): void {
    this.setDataInSessionStorage({key, value});
  }

  setDataInSessionStorage( { key, value } ): void {
    try {
      return sessionStorage.setItem( key, CryptoJS.AES.encrypt(JSON.stringify(value), this.constantList.DEFAULT_COOKIE_ENCRYPTION_KEY).toString() );
    } catch (e) {
    }
  }

  getDataInSessionStorage( key: string ): any {
    try {
      const data = sessionStorage.getItem(key);
      const bytes = CryptoJS.AES.decrypt(data, this.constantList.DEFAULT_COOKIE_ENCRYPTION_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
    }
  }

  removeDataFromSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  cleatDataInSessionStorage(): void {
    sessionStorage.clear();
  }

  getToken(): any {
    return this.getDataInSessionStorage( 'Oakroot_TOKEN' );
  }

  storeLocalStorageInSessionStorage(): void {
    for ( let i = 0; i < localStorage.length; i++ ) {
      this.setDataInSessionStorage( {
        key: localStorage.key( i ),
        value: JSON.parse( localStorage.getItem( localStorage.key( i ) ) ),
      } );
    }
  }
}
