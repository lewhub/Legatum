import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { ParticlesService } from '../services/particles.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  urlParam: string;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: true,
    scrollingSpeed: 1000,
    css3: true,
    anchors: ['section-one', 'section-two', 'section-three', 'section-four', 'contact-section']
});

  constructor(
    private authService: AuthService,
    private login: LoginComponent,
    private register: RegisterComponent,
    private fullPageService: MnFullpageService,
    private particles: ParticlesService) {
    }

  // Check to see if user is logged in and if so display logged in features
  checkIfLoggedIn() {
    if (this.authService.isLoggedIn) {
      console.log('Is logged in: true');
      this.isLoggedIn = true;
      // this.urlParam = this.authService.email;
    } else {
      console.log('User is not logged in');
    }
  }

  handleLogin(): any {
    this.login.handleLogin();
  }

  handleRegister(): any {
    this.register.registerUser();
  }

  sideNavOpen () {
    $('.button-collapse').sideNav();
  }

  ngOnDestroy () {
    this.fullPageService.destroy('all');
    // this.myParams['particles']['move']['enable'] = false;
    this.myParams = {};
    this.myStyle = {};
  }

  ngOnInit() {
    this.checkIfLoggedIn();
    this.particles.initParticles();
    this.myParams = this.particles.myParams;
    this.myStyle = this.particles.myStyle;
  }

}
