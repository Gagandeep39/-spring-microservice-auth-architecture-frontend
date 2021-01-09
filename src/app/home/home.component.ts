import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response;

  constructor(private dummyService: DummyService) { }

  ngOnInit(): void {
  }

  helloWorld() {
    console.log('Clicked');
    
    this.dummyService.helloWorld().subscribe(res => {
      this.response = res;
      console.log(this.response);
    }, error => {
      this.response = error;
    })
  }

  

}
