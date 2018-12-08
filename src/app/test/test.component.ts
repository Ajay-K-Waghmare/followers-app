import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data : any;
  constructor(private service : AppService) { }

  ngOnInit() {
     
  }
//  getData(){
//      this.service.getInfo().subscribe(response=> this.data = response.json);
//         console.log(this.data);
//  }
}
