//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardModule } from '../../components/home-card/home-card.module';
import { BoringPipeModule } from '../../pipes/boring.pipe';
import { CreateProposalComponent } from './create-proposal.component';

//#endregion

const routes: Routes = [{ path: '', component: CreateProposalComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeCardModule,
    FormsModule,
    BoringPipeModule,
  ],
  declarations: [
    CreateProposalComponent,
  ],
})
export class CreateProposalModule {}
