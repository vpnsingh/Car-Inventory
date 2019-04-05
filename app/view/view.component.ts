import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  carsdata;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get('car_backend/getdata.php').subscribe(
      data => {
          this.carsdata = data as string;
          //console.log('Data fetched is successful ', data);
      },
      error => {
          console.log('Error', error);
      }
    );
  }

  updateCount(key) {
    this.http.post('car_backend/sold_records.php', 
    { "id": key}).subscribe(
            data => {
                this.ngOnInit();
                console.log('Update Request is successful ', data);
            },
            error => {
                this.ngOnInit();
                console.log('Error', error);
            }
        );
  }

}
