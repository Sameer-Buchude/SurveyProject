import { Component, OnInit } from '@angular/core';
import { ShowallService } from '../showall.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  surveylist:any;
  getshowalltdata: any;
  surveyToUpdate = {
    id:"",
    farmername:"",
    addharno:"",
    mobileno:"",
    gatno:"",
    gatnakshano:"",
  }
  constructor(private service:ShowallService) { }

  ngOnInit(): void 
  {

    this.service.getshowalltdata().subscribe(data=>this.surveylist=data);
  }

//to edit
edit(datavar: any){
  this.surveyToUpdate =datavar;
}
updateSurvey(){
  this.service.updateSurvey(this.surveyToUpdate).subscribe(
    (resp) =>{
      console.log(resp);
      Swal.fire("Farmer Updated Succesfully")
    },
    (err)=>{
      console.log(err);
    }
  )
}


//to delete data
deleteSurvey(id: any) {
  console.log(id);
  this.service.deleteSurvey(id).subscribe(
    (resp) => {
      console.log(resp);
      Swal.fire("Farmer Deleted Succesfully")
      this.service.getshowalltdata().subscribe(data=>this.surveylist=data);
      //this.getshowalltdata();
    },
    (err) => {
      console.log(err);
    }
  );
}


}
