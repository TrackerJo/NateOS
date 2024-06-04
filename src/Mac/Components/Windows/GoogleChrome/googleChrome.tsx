import { useRef, useState } from "react";
import ChromeTab from "./chrome-tab";
import "./googleChrome.css";
import MyWindow from "../window";

import DuckLogo from "../../../assets/duck-logo.png"
import ProfileIcon from "../../../assets/profile_icon.png"
import ChromeBookmark from "./chrome-bookmark";
import ChromeMainPage from "./chrome-main-page";
import ControlIcons from "../control-icons";


type ChromeTabProps = {
    title: string;
    isActive: boolean;
    onClick: (index: number) => void;

}

type ChromeWindowProps = {
    moveToFront: () => void;
    closeWindow: () => void;
}


function GoogleChromeWindow({moveToFront, closeWindow}: ChromeWindowProps) {
    const defaultWindowHeight = 500;
    const defaultWindowWidth = 800;
    const defaultWindowTop = 50;
    const defaultWindowLeft = 50;
    const [windowHeight, setWindowHeight] = useState<number>(defaultWindowHeight);
    const [windowWidth, setWindowWidth] = useState<number>(defaultWindowWidth);
    const [windowTop, setWindowTop] = useState<number>(defaultWindowTop);
    const [windowLeft, setWindowLeft] = useState<number>(defaultWindowLeft);
    const [prevHeight, setPrevHeight] = useState<number>(defaultWindowHeight);
    const [prevWidth, setPrevWidth] = useState<number>(defaultWindowWidth);
    const [prevTop, setPrevTop] = useState<number>(defaultWindowTop);
    const [prevLeft, setPrevLeft] = useState<number>(defaultWindowLeft);
    const [isMaximized, setIsMaximized] = useState<boolean>(false);


    function maximizeWindow() {
        if (isMaximized) {
            setWindowHeight(prevHeight);
            setWindowWidth(prevWidth);
            setWindowTop(prevTop);
            setWindowLeft(prevLeft);
           
        } else {
            setPrevHeight(windowHeight);
            setPrevWidth(windowWidth);
            setPrevTop(windowTop);
            setPrevLeft(windowLeft);
            
        }
        setIsMaximized(!isMaximized);
    }


    const [tabs, setTabs] = useState<ChromeTabProps[]>([
        {
            title: "New Tab",
            isActive: true,
            onClick: handleTabClick
                
        },
        {
            title: "New Tab",
            isActive: false,
            onClick: handleTabClick
        },
        {
            title: "New Tab",
            isActive: false,
            onClick: handleTabClick
        },
    ]);

    function handleTabClick(index: number) {
        const newTabs = tabs.map((tab, i) => {
            if (i === index) {
                return {
                    ...tab,
                    isActive: true
                }
            } else {
                return {
                    ...tab,
                    isActive: false
                }
            }
        });

        setTabs(newTabs);
    }
    
  
    return (
        <MyWindow windowType="window-chrome" windowTop={windowTop} windowHeight={windowHeight} windowLeft={windowLeft} windowWidth={windowWidth} setWindowHeight={setWindowHeight} setWindowLeft={setWindowLeft} setWindowTop={setWindowTop} setWindowWidth={setWindowWidth} isMaximized={isMaximized} onClick={moveToFront}>
    
            <div className="chrome-top-bar window-draggable">
                <ControlIcons setMaximized={setIsMaximized} maximizeWindow={maximizeWindow} closeWindow={closeWindow}/>
                <div className="chrome-tabs window-draggable">
                    {tabs.map((tab, index) => {
                        return <ChromeTab key={index} title={tab.title} isActive={tab.isActive} onClick={tab.onClick} index={index}/>
                    })}
                    <img className="chrome-tab-add" src="./assets/plus.png"/>
                </div>
            </div>
            <div className="chrome-search-bar">
                <div className="chrome-search-bar-controls">
                    <div className="chrome-search-bar-back chrome-search-bar-control">
                        <img className="chrome-search-bar-back-icon" src="./assets/left_arrow_disabled.png"/>
                    </div>
                    <div className="chrome-search-bar-forward chrome-search-bar-control">
                        <img className="chrome-search-bar-forward-icon" src="./assets/right_arrow_disabled.png"/>
                    </div>
                    <div className="chrome-search-bar-refresh chrome-search-bar-control">
                        <img className="chrome-search-bar-refresh-icon" src="./assets/refresh_icon.png"/>
                    </div>
                </div>
                <div className="chrome-search-bar-input-div">
                <input className="chrome-search-bar-input" type="text" placeholder="Search DuckDuckGo or type a URL"/>
                </div>
                <div className="chrome-search-bar-extras">
                    <div className="chrome-search-bar-extensions">
                        <img className="chrome-search-bar-extensions-icon" src="./assets/extension_icon.png"/>
                    </div>
                    <div className="chrome-search-bar-profile">
                        <img className="chrome-search-bar-profile-icon" src="./assets/profile_icon.png"/>
                    </div>
                    <div className="chrome-search-bar-settings">
                        <img className="chrome-search-bar-settings-icon" src="./assets/dot_menu_icon.png"/>
                    </div>
                </div>
            </div>
            <div className="chrome-bookmarks-bar">
                <ChromeBookmark title="Welcome" icon={DuckLogo} alt="DuckDuckGo Logo"/>
                <ChromeBookmark title="Github" icon={ProfileIcon} alt="Profile Icon"/>
            </div>
            <ChromeMainPage/>

    </MyWindow>
    );
}

export default GoogleChromeWindow;