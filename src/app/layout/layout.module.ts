import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './container/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { TagsComponent } from './components/tags/tags.component';
import { ArticlesPreviewComponent } from './components/articles-preview/articles-preview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    AuthorsComponent,
    TagsComponent,
    ArticlesPreviewComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
