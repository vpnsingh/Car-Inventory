import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  
  dataForm: FormGroup;
  constructor(
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.dataForm = frmbuilder.group({
      manufacturer: ['', Validators.required],
    });
   }
  
  ngOnInit() {}

  PostData(dataForm) {
    this.http.post('car_backend/insert_manufacturer.php', dataForm).subscribe(
      data => {
        alert("Manufacturere is Added");
        this.router.navigate(['model']);
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
    // console.log(signupForm.controls);
  }

}
