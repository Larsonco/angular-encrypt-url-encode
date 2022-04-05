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
  param = '2019';

  ngEncode(param: string) {
    return this.codec.encodeValue(btoa(param));
  }

  jsEncode(param: string) {
    return encodeURIComponent(btoa(param));
  }

  ngDecode(param: string) {
    return this.codec.decodeValue(this.ngEncode(atob(param)));
  }

  jsDecode(param: string) {
    return decodeURIComponent(this.jsEncode(atob(param)));
  }

  isValidUrl(encodedValue) {
    try {
      new URL((this.url + encodedValue));
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  };

}
