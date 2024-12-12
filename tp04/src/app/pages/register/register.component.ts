import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageManagerService } from '../../local-storage-manager.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email?: string;
  password?: string;

  constructor(private readonly storageManager: LocalStorageManagerService) {}

  register() {
    this.storageManager.setData('users', { 
      email: this.email, 
      password: this.password 
    });
  }
}
