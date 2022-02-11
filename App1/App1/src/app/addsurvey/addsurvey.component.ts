import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';//
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  myGroup: FormGroup = new FormGroup(
    {
      farmername: new FormControl(''),
      addharno: new FormControl(''),
      mobileno: new FormControl(''),
      gatno: new FormControl(''),
      gatnakshano: new FormControl(''),




    }
  );
  submitted = false;
  constructor(private addservice: AddService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.myGroup = this.formBuilder.group(
      {
        farmername: ['', [Validators.required]],
        mobileno: ['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
        addharno: ['',[Validators.required,Validators.minLength(12), Validators.maxLength(12)]],
        gatno: ['',[Validators.required,Validators.minLength(1), Validators.maxLength(10)]],
        gatnakshano:['',[Validators.required,Validators.minLength(1), Validators.maxLength(10)]],

      }
    );

  }
  /*end of ngoninit */
  get f(): { [key: string]: AbstractControl } {
    return this.myGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true
    if (this.myGroup.invalid) {
      alert("invalid :please enter valid details")
      console.log('Formvalu', this.myGroup)
      return;
    }
    console.log('Formvalue', this.myGroup.value)
    this.addservice.registerSurvey(this.myGroup.value).subscribe(
      (resp: any) => {
        console.log(resp);
        Swal.fire("Farmer registered Succesfully")
        this.submitted = false
        this.myGroup.reset();
        },
      (err: any) => {
        console.log(err);
      }
    );

console.log(this.myGroup.value);
  } /* end of sumbit*/

//to reset

onReset(): void {
    this.submitted = false;
    // this.showMsg=false;
    this.myGroup.reset();


  }

}

