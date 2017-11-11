import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent implements OnInit {
  first_name;
  last_name;
  acct_type;
  street;
  city;
  state;
  zip;

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }
  onAddSubmit(){
    let user = {
      first_name: this.first_name,
      last_name: this.last_name,
      acct_type: this.acct_type,
      address: {
        street: this.street,
        city: this.city,
        state: this.state,
        zip:this.zip
      }
    }

    this.userService.saveUser(user).subscribe(user => {
      this.router.navigate(['/']);
    });
  }

}
