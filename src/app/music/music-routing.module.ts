import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent,
  },
  {
    path: 'artists',
    children: [
      {
        path: '',
        component: ArtistsComponent,
      },
      {
        path: ':id',
        component: ArtistComponent,
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
