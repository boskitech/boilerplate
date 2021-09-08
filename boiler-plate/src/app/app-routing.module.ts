import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./auth/auth.module')
  .then(mod=>mod.AuthModule)
  },
  {path:'user', loadChildren:()=>import('./user/user.module')
  .then(mod=>mod.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
