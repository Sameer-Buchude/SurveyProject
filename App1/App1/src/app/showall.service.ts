import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowallService {
  getshowalldata: any;
  httpClient: any;
  //
url="http://localhost:8080";
  constructor(private http:HttpClient) { }
//to show data
  getshowalltdata(){

    return this.http.get("http://localhost:8080/showfarm")

  }
  //to update data
  public updateSurvey(survey: any) {
    return this.http.put(this.url + '/updateSurvey',survey);
  }
  //to delete data
  public deleteSurvey(id: any) {
    console.log(id);
    return this.http.delete(this.url + '/deleteSurvey/' + id);

  }

}
