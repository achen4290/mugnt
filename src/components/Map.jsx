import '../styles/Map.css';
import Sidebar from './Sidebar.jsx';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useRecoilValue, useRecoilState } from 'recoil';
import { SIDEBAROPEN } from '../store.ts';

function SidebarBtn(props) {
    const [sidebaropen, setSidebaropen] = useRecoilState(SIDEBAROPEN);

    return (
        <div class="sidebar-btn-wrapper">
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