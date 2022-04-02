import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  needHelp = false;
  step2 = false;

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.clear();
  }

}
