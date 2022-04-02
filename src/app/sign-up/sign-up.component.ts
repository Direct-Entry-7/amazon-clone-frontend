import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ToastrService} from "ngx-toastr";
import {User} from "../dto/user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {

  registrationDetails: User & { confirmPassword: string } = {
    name: '',
    userId: '',
    password: '',
    confirmPassword: ''
  }
  @ViewChild("txtName")
  private txtNameElmRef!: ElementRef<HTMLInputElement>;

  constructor(private titleService: Title, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.toastrService.clear();
    this.titleService.setTitle("Amazon Registration");
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.txtNameElmRef.nativeElement.focus(), 0);
  }

}
