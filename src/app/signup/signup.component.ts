import { Component, OnInit } from '@angular/core';
import { Contact }    from '../contact';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cities = ['Agra', 'Mathura', 'Bharatpur', 'Delhi'];
  model = new Contact(111, 'name', 'email@email.com', 'password', 'cpassword', 111111111);
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
