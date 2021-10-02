import React, { useState, useRef, createRef, useEffect } from 'react';
import '../styles/Sidebar.css';
import { SIDEBAROPEN } from '../store.ts';
import { useRecoilValue, useRecoilState } from 'recoil';

function Sidebar(props) {
    const sidebaropen = useRecoilValue(SIDEBAROPEN);
    const sidebarRef = useRef(null);

    useEffect(() => {
        if(sidebaropen) {
            sidebarRef.current.style.display = 'inline-block';
            sidebarRef.current.style.width = '20rem';
        } else {
            sidebarRef.current.style.width = '0rem';
            sidebarRef.current.style.display = 'none';
        }
    }, [sidebaropen])

    return (
        <div className={"sidebar-wrapper"} ref={sidebarRef}>
            <div class="sidebar-wrapper-wrapper">
                <div class="sidebar-title">
                    MUGN'T
                </div>
                <div class="sidebar-subtitle">
                    The premier navigating platform for balancing <br/>  speed and your chance of getting mugged
                </div>

                <div class="sidebar-divider"></div>

                <div class="sidebar-query">
                    I'm okay with getting mugged ___% of the time
                </div>
            </div>
        </div>
    )
}

export default Sidebar;