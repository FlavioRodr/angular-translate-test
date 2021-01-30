import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
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
