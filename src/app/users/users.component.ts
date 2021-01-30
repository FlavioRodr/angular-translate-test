import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  customers: string;
  users: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get("CUSTOMERS").subscribe(res => {
      this.customers = res;
    });

    this.translate.get("USERS").subscribe(res => {
      this.users = res;
    });
  }

}
