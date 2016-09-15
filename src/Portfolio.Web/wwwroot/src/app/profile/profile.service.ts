import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProfileService{
  CLIENT_ID: string = '75nwsrs8dwshgk';
  CLIENT_SECRET: 'Q3v7e6Z7PzKbyURj';
  API_URL: string =  'https://www.linkedin.com/oauth/v2/authorization';
  params: string;
  state: Number = 996302;
  requestUrl: string = "http://localhost:3030/profile";
  data: Array<Object>;

  constructor(private http:Http){
     this.params = `?response_type=code&client_id=${this.CLIENT_ID}&redirect_uri=${this.requestUrl}&state=${this.state}&scope=r_basicprofile`;
     this.requestUrl = this.API_URL + this.params; 

   //  http://localhost:3030/?code=AQRv9j8MvhIRKdXVhacg0xGlzQqY9ssQdrjvxOQkIIGvQT6UUPH-jThnIjIR5CY8_VdMF22444L8eEvcqg6hdjwD9Bp-qIeXGZBI6aJYmIoY2SC3G5w&state=996302 
  //https://www.linkedin.com/oauth/v2/authorization?grant_type=AQRv9j8MvhIRKdXVhacg0xGlzQqY9ssQdrjvxOQkIIGvQT6UUPH-jThnIjIR5CY8_VdMF22444L8eEvcqg6hdjwD9Bp-qIeXGZBI6aJYmIoY2SC3G5w&code=996302&redirect_uri=http://localhost:3030&client_id=75nwsrs8dwshgk&client_secret=Q3v7e6Z7PzKbyURj
   //  https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile  
  //http://localhost:3030/?code=AQTbaeeasPDrLL9ekUYdoeDbEQp40Q-4MnW1ITAAMcqBRHOPpPfl3q03cn_sMaBG_i4qLw8-gvjmbF9R0CTSz2rixyAQk4_X_yVu30TJbzxZlw0SGkQ&state=996302 

 } 

  getLinkedinProfile(){
      return this.http.get(this.requestUrl);
  }
  
}