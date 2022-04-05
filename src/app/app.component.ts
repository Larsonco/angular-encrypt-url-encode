import { Component } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  codec = new HttpUrlEncodingCodec();
  url = 'https://google.com';
  param = '16217';

  encodeUrlParam(param: string) {
    return this.codec.encodeValue(this.encrpytParam(param));
  }

  decodeUrlParam(param: string) {
    return this.codec.decodeValue(this.decryptParam(this.encodeUrlParam(param)));
  }

  encrpytParam(param: string) {
    return btoa(param);
  }

  decryptParam(param: string) {
    return atob(param);
  }

  ngUrl() {
    return this.url + '/' + this.encodeUrlParam(this.param);
  }

  isValidUrl() {
    try {
      new URL(this.ngUrl());
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }
}
