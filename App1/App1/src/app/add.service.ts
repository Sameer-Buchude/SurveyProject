import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  API='http://localhost:8080';

  public registerSurvey(surveyData: any){



    return this.http.post(this.API+ '/storefarmdata',surveyData);

  }
}
