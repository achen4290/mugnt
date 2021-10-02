import '../styles/Path.css';
import Baltimore from '../assets/baltimore.jpeg';
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import SidebarBtn from './SidebarBtn.jsx';

function Path(props) {
    return (
        <div class="path-wrapper">
            <TransformWrapper
                initialScale={0.9}
                minScale={0.3}
                limitToBounds={false}
            >
                {({ zoomIn, zoomOut, ...rest }) => (
                    <>
                        <TransformComponent>
                        <img src={Baltimore} alt="Baltimore" />
                        </TransformComponent>
                    </>
                    
                )}
            </TransformWrapper>
        </div>
        
    )
}

export default Path;