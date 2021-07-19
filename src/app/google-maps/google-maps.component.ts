import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  constructor() {}
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  ngOnInit(): void {}
}
