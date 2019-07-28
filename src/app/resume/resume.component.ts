import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  data: String;
  constructor() { }

  ngOnInit() { }
  button(info: Event) {
    console.log(info);
    alert((<HTMLButtonElement>info.target).textContent);
  }
  print(inputs: Event) {
    console.log(inputs);
    this.data = (<HTMLInputElement>inputs.target).value;
  }
}
