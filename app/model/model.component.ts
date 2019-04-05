import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  fetch_manufacturer;
  dataForm: FormGroup;
  constructor(private frmbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.dataForm = frmbuilder.group({
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
    });
  }  
  ngOnInit() {
    this.http.get('car_backend/getmanufacturer.php').subscribe(
      data => {
          this.fetch_manufacturer = data as string;
          //console.log('Data fetched is successful ', data);
      },
      error => {
          console.log('Error', error);
      }
    );
  }

  PostData(dataForm) {
    this.http.post('car_backend/insert_records.php', dataForm).subscribe(
            data => {
              alert("Model is Added");
              this.router.navigate(['view']);
              console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
    // console.log(signupForm.controls);
  }

}
