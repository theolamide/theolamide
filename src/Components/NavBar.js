import React from 'react';
import TopDrawer from './TopDrawer';



const NavBar = ({ NavAppear, closeBackDropClickHandler }) => {

    let topDrawer;

    if (NavAppear.topDrawerOpen) {
        topDrawer = <TopDrawer
            closeDrawer={closeBackDropClickHandler}
        />
    }

    return (
        <div>
            {topDrawer}
        </div>
    )
}

export default NavBar;