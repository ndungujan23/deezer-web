import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./music/music.module').then((m) => m.MusicModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload', })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
