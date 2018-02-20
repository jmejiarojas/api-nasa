import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'material-demo',
        component : MaterialDemoComponent
    },

    {
        path: 'home',
        component : HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }