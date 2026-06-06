import Sidebar from '@/component/organizerDashbaord/SideBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;