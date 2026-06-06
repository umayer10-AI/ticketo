import OrganizerDashboard from '@/component/organizerDashbaord/OrganizerDashboard';
import React from 'react';

const page = () => {

    const role = 'organizer'
    let overview;

    if(role==='organizer'){
        overview = <div>
                        <OrganizerDashboard></OrganizerDashboard>
                    </div>
    }
    if(role==='attendee'){
        overview = <div>
                        Hello organizer
                    </div>
    }

    return (
        <div className='max-w-[90%] ml-10 mt-10'>
            {overview}
        </div>
    );
};

export default page;