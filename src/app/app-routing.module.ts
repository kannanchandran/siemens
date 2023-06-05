import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'home', component: HomePageComponent
  },

  // {
  //   path: 'pages',
  //   loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)

  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
  // },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
