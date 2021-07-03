import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Protopixel'

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService){ }

  ngOnInit(){
    this.authService.getCsrfToken()
      .pipe(catchError(error => this.router.navigateByUrl('error')))
      .subscribe()
  }
}
