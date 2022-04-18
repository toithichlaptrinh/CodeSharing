import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CommentsComponent } from "./comments/comments.component";
import { ContactComponent } from "./contact/contact.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    title: 'About'
                }
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'comments',
                component: CommentsComponent,
                data: {
                    title: 'Comments'
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    title: 'Contact'
                }
            },
            {
                path: 'posts',
                component: PostsComponent,
                data: {
                    title: 'Posts'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }