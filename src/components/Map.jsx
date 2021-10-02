import '../styles/Map.css';
import Sidebar from './Sidebar.jsx';
import { useEffect, useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SIDEBAROPEN } from '../store.ts';

function SidebarBtn(props) {
    const [sidebaropen, setSidebaropen] = useRecoilState(SIDEBAROPEN);
    const sidebarRef = useRef(null);

    useEffect(() => {
        if(!sidebaropen) {
            sidebarRef.current.style.transform = 'translateX(-23rem)';
        } else {
            sidebarRef.current.style.transform = 'translateX(0px)';
        }
    }, [sidebaropen])

    return (
        <div class="sidebar-btn-wrapper" ref={sidebarRef}>
            <div class="sidebar-btn" onClick={() => {setSidebaropen(!sidebaropen)}}>
                {sidebaropen ? 
                    <ArrowLeftIcon style={{color: "grey"}}/> :
                    <ArrowRightIcon style={{color: "grey"}}/>
                }
                
            </div>
        </div>
    )
}

function Map(props) {
    const sidebaropen = useRecoilValue(SIDEBAROPEN);

    return (
        <div class="map-body">
            <Sidebar/>
            <SidebarBtn/>
        </div>
    );
}

export default Map;