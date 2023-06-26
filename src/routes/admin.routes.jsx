import { Routes, Route } from 'react-router-dom';

import { Home_Admin } from '../pages/Home_Admin';
import { Details_Admin } from '../pages/Details_Admin';
import { New_Admin } from '../pages/New_Admin';
import { Edit_Admin } from '../pages/Edit_Admin';

export function AdminRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <Home_Admin/> } />
            <Route path='/details' element={ <Details_Admin/> } />
            <Route path='/new' element={ <New_Admin/> } />
            <Route path='/edit' element={ <Edit_Admin/> } />
        </Routes>
    );
}