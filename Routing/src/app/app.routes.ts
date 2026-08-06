import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Second } from './components/second/second';
import { Third } from './components/third/third';
import { About } from './components/about/about';
import { Clients } from './components/clients/clients';
import { Blog } from './components/blog/blog';
import { Errorpage } from './components/errorpage/errorpage';



export const routes: Routes = [
    {
        path:"",
        component:Home
    },
    {
        path:"contact",
        component:Second
    },
    {
        path:"services",
        component:Third
    },
    {
        path:"about",
        component:About
    },
    {
        path:"clients",
        component:Clients
    },
    {
        path:"blog",
        component:Blog
    },
    {
        path:"**",
        component:Errorpage
    }
];
    
    

