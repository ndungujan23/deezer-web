import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailComponent } from './artist/detail/artist-detail.component';

const routes: Routes = [
  {
    path: 'artist',
    children: [
      {
        path: '',
        component: ArtistComponent,
      },
      {
        path: ':id',
        component: ArtistDetailComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
