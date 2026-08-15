import "./main-page.css"

import DuckLogo from "../../../../assets/duck-logo.png"

function ChromeMainPage() {

    return (
        // <div className="chrome-window-content">
            // <div className="chrome-page chrome-page-basic">
                <div className="chrome-welcome-page-content">
                    <div className="duckduckgo-icon-container">
                        <img src={DuckLogo} className="duckduckgo-icon"/>
                        <label className="duckduckgo-icon-text">DuckDuckGo</label>
                    </div>
                    <div className="duckduckgo-search-container">
                        <input className="duckduckgo-search-bar" type="text"/>
                        <img src="./assets/search_icon.png" className="duckduckgo-search-button"/>
                    </div>
                </div>
            // </div>
        // </div>
    )

} 

export default ChromeMainPage