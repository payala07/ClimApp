import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  cities = ["London", "Paris", "Asuncion", "New York", "Grenoble", "Sydney"];

  cityControl= new FormControl("");

  constructor(private router: Router) {}

  ngOnInit() {
    //this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe(value => {
        this.router.navigate([value]);
      });
    }

    ngOnDestroy() {
    }
}
