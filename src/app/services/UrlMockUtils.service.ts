import { Injectable } from '@angular/core';
import { LOGINMOCK } from '../mock/login.mock';

@Injectable()
export class UrlMockUtilsService {

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock : "";
  }

  getUrlService(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap = {
    LoginService: { mock: LOGINMOCK, url: 'auth/login' }
  }
}
