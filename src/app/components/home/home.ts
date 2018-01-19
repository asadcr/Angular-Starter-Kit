import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit
{

  constructor(private route: ActivatedRoute, private router: Router) {
    }

    
  ngOnInit(): void {
      if(!localStorage.getItem('userData'))
      {
        this.router.navigateByUrl('login');
      }
    }
}
