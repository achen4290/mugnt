import React, { useState, useRef, createRef, useEffect } from 'react';
import '../styles/Sidebar.css';
import { SIDEBAROPEN, MUGGEDPERCENT, HOMICIDEPERCENT, SEXUALASSAULTPERCENT, SEXOFFENSESPERCENT, ASSAULTPERCENT, AGGRAVATEDASSAULTPERCENT, ROBBERYPERCENT, CITY } from '../store.ts';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Slider } from '@mui/material';

function Sidebar(props) {
    const sidebaropen = useRecoilValue(SIDEBAROPEN);

    const [city, setCity] = useRecoilState(CITY);

    const [muggedpercent, setMuggedpercent] = useRecoilState(MUGGEDPERCENT);
    const handleMuggedPercentChange = (event, newValue) => {
        setMuggedpercent(newValue);
    };

    const [homicidepercent, setHomicidepercent] = useRecoilState(HOMICIDEPERCENT);
    const handleHomicidepercentChange = (event, newValue) => {
        setHomicidepercent(newValue);
    };

    const [sexualassaultpercent, setSexualassaultpercent] = useRecoilState(SEXUALASSAULTPERCENT);
    const handleSexualassaultpercentChange = (event, newValue) => {
        setSexualassaultpercent(newValue);
    };

    const sidebarRef = useRef(null);

    useEffect(() => {
        if(!sidebaropen) {
            sidebarRef.current.style.transform = 'translateX(-23rem)';
        } else {
            sidebarRef.current.style.transform = 'translateX(0px)';
        }
    }, [sidebaropen])

    return (
        <div className={"sidebar-wrapper"} ref={sidebarRef}>
            <div class="sidebar-wrapper-wrapper">
                <div class="sidebar-title">
                    MUGN'T
                </div>
                <div class="sidebar-subtitle">
                    The premier navigation platform <br/> for balancing speed and safety
                </div>

                <div class="sidebar-divider"></div>
                <div class="sidebar-sectiontitle">OPTIONS</div>
                <div class="sidebar-options-wrapper">
                    <div class="sidebar-query sidebar-query-1">1. Select a city</div>
                    <div class="sidebar-options-offset">
                        <div class="sidebar-city-wrapper">
                            <div className={"sidebar-city " + (city === 'pittsburgh' ? "sidebar-city-selected":"")} onClick={() => {setCity('pittsburgh')}}>
                                Pittsburgh
                            </div>
                            <div className={"sidebar-city " + (city === 'baltimore' ? "sidebar-city-selected":"")} onClick={() => {setCity('baltimore')}}>
                                Baltimore
                            </div>
                            <div className={"sidebar-city " + (city === 'detroit' ? "sidebar-city-selected":"")} onClick={() => {setCity('detroit')}}>
                                Detroit
                            </div>
                        </div>
                    </div>
                    

                    <div class="sidebar-query sidebar-query-2">
                        2. I'm okay with getting mugged 
                        <div class="sidebar-query-percent">
                        {muggedpercent}
                        </div>
                        % of the time
                    </div>
                    <div class="sidebar-options-offset">
                        <Slider value={muggedpercent} onChange={handleMuggedPercentChange} aria-label="Default" valueLabelDisplay="auto" style={{width: "60%"}}/>
                    </div>
                    
                </div>
                <div class="sidebar-query-extra">
                    <div class="sidebar-moreoptions">
                        More Options
                    </div>
                </div>

                <div class="sidebar-divider"></div>
                <div class="sidebar-sectiontitle">
                    SAFETY STATISTICS
                </div>
            </div>
        </div>
    )
}

export default Sidebar;