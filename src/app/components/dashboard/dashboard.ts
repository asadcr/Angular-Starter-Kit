import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dashboard-select',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit
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
