import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { NotFound } from './component/not-found/not-found';
import { About } from './component/about/about';
import { Contacto } from './component/contacto/contacto';
import { Legal } from './component/legal/legal';
export const routes: Routes = [
{ path:'', component: Home, title:'RadioActivo'},  
{path: 'about', component: About, title: 'Acerca de Radioactivo' }, 
{path: 'contacto', component: Contacto, title: 'Contacto' },
{path: 'legal', component: Legal, title: 'Legal' },





{path: '**', component: NotFound, title: 'Error' }
];
