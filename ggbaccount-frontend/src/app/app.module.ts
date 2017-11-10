import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path:'', component:UsersComponent},
  {path:'user/add', component:AddUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    AddTodoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
