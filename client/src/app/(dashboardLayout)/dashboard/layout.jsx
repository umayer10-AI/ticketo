import AttendeeSidebar from '@/component/attendeeDashboard/AttendeeSideBar';
import OrganizerSidebar from '@/component/organizerDashbaord/OrganizerSidebar';
import React from 'react';

const layout = ({children}) => {

    const role = 'attendee'
    let sideBar;
    if(role==='organizer'){
        sideBar = <OrganizerSidebar></OrganizerSidebar>
    }
    if(role==='attendee'){
        sideBar = <AttendeeSidebar></AttendeeSidebar>
    }
    
    return (
        <div className='flex'>
            {sideBar}
            
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;