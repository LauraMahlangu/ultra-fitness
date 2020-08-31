import { HomeGuardService } from './services/home-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path:'',
		loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
		pathMatch: 'full',
		canActivate: [HomeGuardService]
	},
	{
		path: 'login',
		loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule),
		pathMatch:'full'
	},
	{
		path: 'register',
		loadChildren: () => import('./containers/register/register.module').then(m => m.RegisterModule),
		pathMatch:'full'
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule),
		pathMatch:'full',
		canActivate: [AuthGuardService]
	},
	{
		path: 'instructors',
		loadChildren: () => import('./containers/instructor/instructor.module').then(m => m.InstructorModule),
		pathMatch:'full'
	},
	{
		path: 'aboutus',
		loadChildren: () => import('./containers/aboutus/aboutus.module').then(m => m.AboutusModule),
		pathMatch:'full'
	},
	{
		path: 'contact',
		loadChildren: () => import('./containers/contact/contact.module').then(m => m.ContactModule),
		pathMatch:'full'
	},
	{
		path: 'profile',
		loadChildren: () => import('./containers/user-profile/user-profile.module').then(m => m.UserProfileModule),
		pathMatch:'full',
		canActivate: [AuthGuardService]
	},
	{
		path: 'forgot-password',
		loadChildren: () => import('./containers/password/password.module').then(m => m.PasswordModule),
		pathMatch:'full'
	},
	{ 	path: '**', 
		redirectTo: '' 
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
