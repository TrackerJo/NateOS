import "./chrome-tab.css"

import XMark from "../../../assets/xmark.png"
import DuckLogo from "../../../assets/duck-logo.png"

type ChromeTabProps = {
    title: string;
    isActive: boolean;
    onClick: (index: number) => void;
    index: number;
}


function ChromeTab({title, isActive, onClick, index}: ChromeTabProps) {
    

    return (
        <div className={"chrome-tab " + (isActive ? "chrome-tab-active" : "")} onClick={() => onClick(index)}>
            <div className="chrome-tab-contents">
                <img className="chrome-tab-icon" src={DuckLogo} alt="Tab Icon"/>
                <label className="chrome-tab-title">{title}</label>
                <img className="chrome-tab-close" src={XMark} alt="Close Tab"/>
            </div>
            <div className="chrome-tab-divider">
            </div>
        </div>
    )
}

export default ChromeTab