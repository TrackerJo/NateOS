import "./chrome-tab.css"

import XMark from "../../../assets/xmark.png"
import DuckLogo from "../../../assets/duck-logo.png"

type ChromeTabProps = {
    title: string;
    isActive: boolean;
    page: string;
    onClick: (id: number, page: string) => void;
    id: number;
    closeTab: () => void;
}


function ChromeTab({title, isActive, onClick, closeTab, id, page}: ChromeTabProps) {
    
    function handleCloseTab(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        const tab = e.currentTarget.parentElement
        tab!.parentElement!.style.width = `${tab!.parentElement!.offsetWidth}px`;
          
         
           
       
          tab!.parentElement!.animate([
             {width: `${tab!.parentElement!.offsetWidth}px`},
             {width: '0%'}
           ], {
             duration: 200,
             easing: 'ease-in-out',
             fill: 'forwards'
           })
           //Remove the tab from the DOM after the animation is done
           setTimeout(() => {
       
              closeTab();
             
   
   
   
           }
           , 200)
        }

    return (
        <div className={"chrome-tab " + (isActive ? "chrome-tab-active" : "")} onClick={(e) => {
            if(e.target.classList.contains("chrome-tab-close")) return;
            onClick(id, page);
        }}>
            <div className="chrome-tab-contents">
                <img className="chrome-tab-icon" src={DuckLogo} alt="Tab Icon"/>
                <label className="chrome-tab-title">{title}</label>
                <img className="chrome-tab-close" src={XMark} alt="Close Tab" onClick={handleCloseTab}/>
            </div>
            <div className="chrome-tab-divider">
            </div>
        </div>
    )
}

export default ChromeTab