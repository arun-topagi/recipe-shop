import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FirebaseService } from '../service/firebase.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {
  
  constructor(private firebaseservice: FirebaseService,
              private authservice: AuthService) {

  }
 
  saveData() {  
    this.firebaseservice.putRecipes()
        .subscribe((recipes: Response) => {
          console.log(recipes.json);
        });
  }
  fetchData() {
    this.firebaseservice.getRecipes();
  }
}
