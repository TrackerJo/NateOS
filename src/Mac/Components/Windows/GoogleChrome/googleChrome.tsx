import { useEffect, useState } from "react";
import ChromeTab from "./chrome-tab";
import "./googleChrome.css";
import MyWindow from "../window";

import DuckLogo from "../../../assets/duck-logo.png"
import ProfileIcon from "../../../assets/profile_icon.png"
import ChromeBookmark from "./chrome-bookmark";
import ChromeMainPage from "./Pages/main-page";
import ControlIcons from "../control-icons";
import LeftArrowDisabled from "../../../assets/left_arrow_disabled.png";
import RightArrowDisabled from "../../../assets/right_arrow_disabled.png";
import RefreshIcon from "../../../assets/refresh_icon.png";

import ExtensionIcon from "../../../assets/extension_icon.png";
import DotMenuIconn from "../../../assets/dot_menu_icon.png";
import ChromeWelcomePage from "./Pages/welcome-page";
import GithubPage from "./Pages/github-page";
import KazoomReviews from "../../../assets/kazoom_reviews.png";
import KazoomReviewsPage from "./Pages/kazoom-reviews-page";


type ChromeTabProps = {
    title: string;
    isActive: boolean;
    page: string;
    id: number;

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
    const [tabs, setTabs] = useState<ChromeTabProps[]>([]);
    const [selectedPage, setSelectedPage] = useState<string>("welcome");

    const handleTabClick = (index: number, page: string) => {
        setTabs((tabs) => {
            return tabs.map((tab) => {
                if(tab.id === index) {
                    tab.isActive = true;
                } else {
                    tab.isActive = false;
                }
                return tab;
            });
            // console.log(tabs);
            // return newTabs
        })
        setSelectedPage(page);

        // setTabs(newTabs);
    }

    useEffect(() => {
        setTabs([{
            title: "Welcome",
            isActive: true,
            page: "welcome",
            id: 0
        }]);
    }, []);


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
            console.log("Maximizing window");
           
            
        }
        setIsMaximized(!isMaximized);
    }


    

    
    const closeTab = (index: number) => () => {
        // alert("Closing tab " + index);
        const newTabs = tabs.filter((tab) => tab.id !== index);
        // console.log(newTabs);
        setTabs(newTabs);

    }

    

    function addTab() {
        // const newTabs = [...tabs, {
        //     title: "New Tab",
        //     isActive: false,
        //     onClick: handleTabClick,
        //     id: tabs.length
        // }];
        tabs.push({
            title: "New Tab",
            isActive: false,
            page: "new",
            id: tabs.length
        });
        console.log(tabs);

        setTabs(tabs);
    }

    const handleClickBookmark = (page: string) => () => {
        if(page === "github") {
           //Open the github page in another tab in the browser
           window.open("https://github.com/trackerjo", "_blank");


        }
        setSelectedPage(page);
        //Change the active tab title and page to the selected bookmark
        setTabs((tabs) => {
            return tabs.map((tab) => {
                if(tab.isActive) {
                    tab.page = page;
                    if(page === "welcome") {
                        tab.title = "Welcome";
                    }
                    if(page === "kazoom"){
                        tab.title = "Kazoom Reviews";
                    }
                    
                }
                return tab;
            });
        });
       
    }

  
  
    return (
        <MyWindow windowType="window-chrome" windowTop={windowTop} windowHeight={windowHeight} windowLeft={windowLeft} windowWidth={windowWidth} setWindowHeight={setWindowHeight} setWindowLeft={setWindowLeft} setWindowTop={setWindowTop} setWindowWidth={setWindowWidth} isMaximized={isMaximized} onClick={moveToFront}>
            {!isMaximized ?
            <>
            <div className="chrome-top-bar window-draggable">
                <ControlIcons setMaximized={setIsMaximized} maximizeWindow={maximizeWindow} closeWindow={closeWindow}/>
                <div className="chrome-tabs window-draggable">
                    {tabs.map((tab, index) => {
                        return <ChromeTab key={tab.id} title={tab.title} isActive={tab.isActive} onClick={handleTabClick} closeTab={closeTab(tab.id)} id={tab.id} page={tab.page}/>
                    })}
                    <img className="chrome-tab-add" src="./assets/plus.png" onClick={addTab}/>
                </div>
            </div>
            <div className="chrome-search-bar">
                <div className="chrome-search-bar-controls">
                    <div className="chrome-search-bar-back chrome-search-bar-control">
                        <img className="chrome-search-bar-back-icon" src={LeftArrowDisabled}/>
                    </div>
                    <div className="chrome-search-bar-forward chrome-search-bar-control">
                        <img className="chrome-search-bar-forward-icon" src={RightArrowDisabled}/>
                    </div>
                    <div className="chrome-search-bar-refresh chrome-search-bar-control">
                        <img className="chrome-search-bar-refresh-icon" src={RefreshIcon}/>
                    </div>
                </div>
                <div className="chrome-search-bar-input-div">
                <input className="chrome-search-bar-input" type="text" placeholder="Search DuckDuckGo or type a URL"/>
                </div>
                <div className="chrome-search-bar-extras">
                    <div className="chrome-search-bar-extensions">
                        <img className="chrome-search-bar-extensions-icon" src={ExtensionIcon}/>
                    </div>
                    <div className="chrome-search-bar-profile">
                        <img className="chrome-search-bar-profile-icon" src={ProfileIcon}/>
                    </div>
                    <div className="chrome-search-bar-settings">
                        <img className="chrome-search-bar-settings-icon" src={DotMenuIconn}/>
                    </div>
                </div>
            </div>
            <div className="chrome-bookmarks-bar">
                <ChromeBookmark title="Welcome" icon={DuckLogo} alt="DuckDuckGo Logo" onClick={handleClickBookmark("welcome")}/>
                <ChromeBookmark title="Github" icon={ProfileIcon} alt="Profile Icon" onClick={handleClickBookmark("github")}/>
                <ChromeBookmark title="Kazoom Reviews" icon={KazoomReviews} alt="Profile Icon" onClick={handleClickBookmark("kazoom")}/>
            </div>
            </>: <div className=""  >
                </div>}
            {
                selectedPage === "new" ? <ChromeMainPage/> : selectedPage === "welcome" ? <ChromeWelcomePage /> : selectedPage === "kazoom" ? <KazoomReviewsPage /> : <div></div>
            }


    </MyWindow>
    );
}

export default GoogleChromeWindow;