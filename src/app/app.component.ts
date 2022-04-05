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

  ngEncode(param: string) {
    return this.codec.encodeValue(btoa(param));
  }

  ngDecode(param: string) {
    return this.codec.decodeValue(atob(this.ngEncode(param)));
  }

  ngUrl() {
    return this.url + '/' + this.ngEncode(this.param);
  }

  jsEncode(param: string) {
    return encodeURIComponent(btoa(param));
  }

  jsDecode(param: string) {
    console.log(atob(this.jsEncode(param)));
    return decodeURIComponent(atob(this.jsEncode(param)));
  }

  jsUrl() {
    return this.url + '/' + this.jsEncode(this.param);
  }

  isValidUrl(encodedValue) {
    try {
      new URL(this.url + '/' + encodedValue);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }
}
