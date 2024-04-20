import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() viewMode = false;

  @Input() currentUser: User = {
    name: '',
    address: '',
    phone: '',
    dateCreated: '',
    lastUpdated: ''
  };

  message = '';

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params['id']);
    }
  }

  getUser(id: string): void {
    this.userService.get(id).subscribe({
      next: (data) => {
        this.currentUser = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
} 
