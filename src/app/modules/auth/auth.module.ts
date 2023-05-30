import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { CommonImportsModule } from 'src/app/common-imports.module';

@NgModule({
  imports: [CommonModule, CommonImportsModule],
  declarations: [LoginComponent, SignUpComponent],
  providers: [],
  exports: [],
})
export class AuthModule {}
