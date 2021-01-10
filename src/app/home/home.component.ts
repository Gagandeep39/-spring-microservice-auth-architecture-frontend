import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  response;
  mini;
  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {}

  helloWorld() {
    console.log('Clicked');

    this.dummyService.helloWorld().subscribe(
      (res) => {
        this.response = res;
        console.log(this.response);
      },
      (error) => {
        this.response = error;
      }
    );
  }

  helloUser() {
    console.log('Clicked');

    this.dummyService.userService().subscribe(
      (res) => {
        this.response = res;
        console.log(this.response);
      },
      (error) => {
        this.response = error;
      }
    );
  }

  toggleSidebar() {
    if (this.mini) {
      console.log("opening sidebar");
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      this.mini = false;
    } else {
      console.log("closing sidebar");
      document.getElementById("mySidebar").style.width = "85px";
      document.getElementById("main").style.marginLeft = "85px";
      this.mini = true;
    }
  }
  
}
