import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const articlesRoutes: Routes = [
  { path: 'articles', component: ArticlesComponent, children: [

    { path: ':id/:name', component: ArticleComponent },

  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
