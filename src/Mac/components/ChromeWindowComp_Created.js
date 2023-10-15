function createChromeWindowComp(){
	const chromeWindow = document.createElement("div");
	chromeWindow.setAttribute('class', `window window-chrome window-open window-active`);
	chromeWindow.setAttribute('style', `top: 25px;`);

	const chromeWindowDiv1 = document.createElement("div");
	chromeWindowDiv1.setAttribute('class', `chrome-top-bar`);

	const chromeWindowDiv1Div1 = document.createElement("div");
	chromeWindowDiv1Div1.setAttribute('class', `window-control-icons`);

	const chromeWindowDiv1Div1Img1 = document.createElement("img");
	chromeWindowDiv1Div1Img1.setAttribute('class', `window-control-icon quit-icon`);
	chromeWindowDiv1Div1Img1.setAttribute('src', `assets/quit_icon.png`);

	chromeWindowDiv1Div1.appendChild(chromeWindowDiv1Div1Img1);

	const chromeWindowDiv1Div1Img2 = document.createElement("img");
	chromeWindowDiv1Div1Img2.setAttribute('class', `window-control-icon min-icon`);
	chromeWindowDiv1Div1Img2.setAttribute('src', `assets/minimize_icon.png`);

	chromeWindowDiv1Div1.appendChild(chromeWindowDiv1Div1Img2);

	const chromeWindowDiv1Div1Img3 = document.createElement("img");
	chromeWindowDiv1Div1Img3.setAttribute('class', `window-control-icon max-icon`);
	chromeWindowDiv1Div1Img3.setAttribute('src', `assets/maximize_icon.png`);

	chromeWindowDiv1Div1.appendChild(chromeWindowDiv1Div1Img3);

	chromeWindowDiv1.appendChild(chromeWindowDiv1Div1);

	const chromeWindowDiv1Div2 = document.createElement("div");
	chromeWindowDiv1Div2.setAttribute('class', `chrome-tabs`);

	const chromeWindowDiv1Div2Div1 = document.createElement("div");
	chromeWindowDiv1Div2Div1.setAttribute('class', `chrome-tab chrome-tab-active`);

	const chromeWindowDiv1Div2Div1Div1 = document.createElement("div");
	chromeWindowDiv1Div2Div1Div1.setAttribute('class', `chrome-tab-contents`);

	const chromeWindowDiv1Div2Div1Div1Img1 = document.createElement("img");
	chromeWindowDiv1Div2Div1Div1Img1.setAttribute('class', `chrome-tab-icon`);
	chromeWindowDiv1Div2Div1Div1Img1.setAttribute('src', `./assets/duck-logo.png`);
	chromeWindowDiv1Div2Div1Div1Img1.setAttribute('alt', `Tab Icon`);

	chromeWindowDiv1Div2Div1Div1.appendChild(chromeWindowDiv1Div2Div1Div1Img1);

	const chromeWindowDiv1Div2Div1Div1Label1 = document.createElement("label");
	chromeWindowDiv1Div2Div1Div1Label1.textContent = `New Tab`;
	chromeWindowDiv1Div2Div1Div1Label1.setAttribute('class', `chrome-tab-title`);

	chromeWindowDiv1Div2Div1Div1.appendChild(chromeWindowDiv1Div2Div1Div1Label1);

	const chromeWindowDiv1Div2Div1Div1Img2 = document.createElement("img");
	chromeWindowDiv1Div2Div1Div1Img2.setAttribute('class', `chrome-tab-close`);
	chromeWindowDiv1Div2Div1Div1Img2.setAttribute('src', `assets/xmark.png`);
	chromeWindowDiv1Div2Div1Div1Img2.setAttribute('alt', `Close Tab`);

	chromeWindowDiv1Div2Div1Div1.appendChild(chromeWindowDiv1Div2Div1Div1Img2);

	chromeWindowDiv1Div2Div1.appendChild(chromeWindowDiv1Div2Div1Div1);

	const chromeWindowDiv1Div2Div1Div2 = document.createElement("div");
	chromeWindowDiv1Div2Div1Div2.setAttribute('class', `chrome-tab-divider`);

	chromeWindowDiv1Div2Div1.appendChild(chromeWindowDiv1Div2Div1Div2);

	chromeWindowDiv1Div2.appendChild(chromeWindowDiv1Div2Div1);

	const chromeWindowDiv1Div2Div2 = document.createElement("div");
	chromeWindowDiv1Div2Div2.setAttribute('class', `chrome-tab`);

	const chromeWindowDiv1Div2Div2Div1 = document.createElement("div");
	chromeWindowDiv1Div2Div2Div1.setAttribute('class', `chrome-tab-contents`);

	const chromeWindowDiv1Div2Div2Div1Img1 = document.createElement("img");
	chromeWindowDiv1Div2Div2Div1Img1.setAttribute('class', `chrome-tab-icon`);
	chromeWindowDiv1Div2Div2Div1Img1.setAttribute('src', `./assets/duck-logo.png`);
	chromeWindowDiv1Div2Div2Div1Img1.setAttribute('alt', `Tab Icon`);

	chromeWindowDiv1Div2Div2Div1.appendChild(chromeWindowDiv1Div2Div2Div1Img1);

	const chromeWindowDiv1Div2Div2Div1Label1 = document.createElement("label");
	chromeWindowDiv1Div2Div2Div1Label1.textContent = `New Tab`;
	chromeWindowDiv1Div2Div2Div1Label1.setAttribute('class', `chrome-tab-title`);

	chromeWindowDiv1Div2Div2Div1.appendChild(chromeWindowDiv1Div2Div2Div1Label1);

	const chromeWindowDiv1Div2Div2Div1Img2 = document.createElement("img");
	chromeWindowDiv1Div2Div2Div1Img2.setAttribute('class', `chrome-tab-close`);
	chromeWindowDiv1Div2Div2Div1Img2.setAttribute('src', `assets/xmark.png`);
	chromeWindowDiv1Div2Div2Div1Img2.setAttribute('alt', `Close Tab`);

	chromeWindowDiv1Div2Div2Div1.appendChild(chromeWindowDiv1Div2Div2Div1Img2);

	chromeWindowDiv1Div2Div2.appendChild(chromeWindowDiv1Div2Div2Div1);

	const chromeWindowDiv1Div2Div2Div2 = document.createElement("div");
	chromeWindowDiv1Div2Div2Div2.setAttribute('class', `chrome-tab-divider`);

	chromeWindowDiv1Div2Div2.appendChild(chromeWindowDiv1Div2Div2Div2);

	chromeWindowDiv1Div2.appendChild(chromeWindowDiv1Div2Div2);

	const chromeWindowDiv1Div2Div3 = document.createElement("div");
	chromeWindowDiv1Div2Div3.setAttribute('class', `chrome-tab`);

	const chromeWindowDiv1Div2Div3Div1 = document.createElement("div");
	chromeWindowDiv1Div2Div3Div1.setAttribute('class', `chrome-tab-contents`);

	const chromeWindowDiv1Div2Div3Div1Img1 = document.createElement("img");
	chromeWindowDiv1Div2Div3Div1Img1.setAttribute('class', `chrome-tab-icon`);
	chromeWindowDiv1Div2Div3Div1Img1.setAttribute('src', `./assets/duck-logo.png`);
	chromeWindowDiv1Div2Div3Div1Img1.setAttribute('alt', `Tab Icon`);

	chromeWindowDiv1Div2Div3Div1.appendChild(chromeWindowDiv1Div2Div3Div1Img1);

	const chromeWindowDiv1Div2Div3Div1Label1 = document.createElement("label");
	chromeWindowDiv1Div2Div3Div1Label1.textContent = `New Tab`;
	chromeWindowDiv1Div2Div3Div1Label1.setAttribute('class', `chrome-tab-title`);

	chromeWindowDiv1Div2Div3Div1.appendChild(chromeWindowDiv1Div2Div3Div1Label1);

	const chromeWindowDiv1Div2Div3Div1Img2 = document.createElement("img");
	chromeWindowDiv1Div2Div3Div1Img2.setAttribute('class', `chrome-tab-close`);
	chromeWindowDiv1Div2Div3Div1Img2.setAttribute('src', `assets/xmark.png`);
	chromeWindowDiv1Div2Div3Div1Img2.setAttribute('alt', `Close Tab`);

	chromeWindowDiv1Div2Div3Div1.appendChild(chromeWindowDiv1Div2Div3Div1Img2);

	chromeWindowDiv1Div2Div3.appendChild(chromeWindowDiv1Div2Div3Div1);

	const chromeWindowDiv1Div2Div3Div2 = document.createElement("div");
	chromeWindowDiv1Div2Div3Div2.setAttribute('class', `chrome-tab-divider`);

	chromeWindowDiv1Div2Div3.appendChild(chromeWindowDiv1Div2Div3Div2);

	chromeWindowDiv1Div2.appendChild(chromeWindowDiv1Div2Div3);

	const chromeWindowDiv1Div2Img1 = document.createElement("img");
	chromeWindowDiv1Div2Img1.setAttribute('class', `chrome-tab-add`);
	chromeWindowDiv1Div2Img1.setAttribute('src', `./assets/plus.png`);

	chromeWindowDiv1Div2.appendChild(chromeWindowDiv1Div2Img1);

	chromeWindowDiv1.appendChild(chromeWindowDiv1Div2);

	chromeWindow.appendChild(chromeWindowDiv1);

	const chromeWindowDiv2 = document.createElement("div");
	chromeWindowDiv2.setAttribute('class', `chrome-search-bar`);

	const chromeWindowDiv2Div1 = document.createElement("div");
	chromeWindowDiv2Div1.setAttribute('class', `chrome-search-bar-controls`);

	const chromeWindowDiv2Div1Div1 = document.createElement("div");
	chromeWindowDiv2Div1Div1.setAttribute('class', `chrome-search-bar-back chrome-search-bar-control`);

	const chromeWindowDiv2Div1Div1Img1 = document.createElement("img");
	chromeWindowDiv2Div1Div1Img1.setAttribute('class', `chrome-search-bar-back-icon`);
	chromeWindowDiv2Div1Div1Img1.setAttribute('src', `./assets/left_arrow_disabled.png`);

	chromeWindowDiv2Div1Div1.appendChild(chromeWindowDiv2Div1Div1Img1);

	chromeWindowDiv2Div1.appendChild(chromeWindowDiv2Div1Div1);

	const chromeWindowDiv2Div1Div2 = document.createElement("div");
	chromeWindowDiv2Div1Div2.setAttribute('class', `chrome-search-bar-forward chrome-search-bar-control`);

	const chromeWindowDiv2Div1Div2Img1 = document.createElement("img");
	chromeWindowDiv2Div1Div2Img1.setAttribute('class', `chrome-search-bar-forward-icon`);
	chromeWindowDiv2Div1Div2Img1.setAttribute('src', `./assets/right_arrow_disabled.png`);

	chromeWindowDiv2Div1Div2.appendChild(chromeWindowDiv2Div1Div2Img1);

	chromeWindowDiv2Div1.appendChild(chromeWindowDiv2Div1Div2);

	const chromeWindowDiv2Div1Div3 = document.createElement("div");
	chromeWindowDiv2Div1Div3.setAttribute('class', `chrome-search-bar-refresh chrome-search-bar-control`);

	const chromeWindowDiv2Div1Div3Img1 = document.createElement("img");
	chromeWindowDiv2Div1Div3Img1.setAttribute('class', `chrome-search-bar-refresh-icon`);
	chromeWindowDiv2Div1Div3Img1.setAttribute('src', `./assets/refresh_icon.png`);

	chromeWindowDiv2Div1Div3.appendChild(chromeWindowDiv2Div1Div3Img1);

	chromeWindowDiv2Div1.appendChild(chromeWindowDiv2Div1Div3);

	chromeWindowDiv2.appendChild(chromeWindowDiv2Div1);

	const chromeWindowDiv2Div2 = document.createElement("div");
	chromeWindowDiv2Div2.setAttribute('class', `chrome-search-bar-input-div`);

	const chromeWindowDiv2Div2Input1 = document.createElement("input");
	chromeWindowDiv2Div2Input1.setAttribute('class', `chrome-search-bar-input`);
	chromeWindowDiv2Div2Input1.setAttribute('type', `text`);
	chromeWindowDiv2Div2Input1.setAttribute('placeholder', `Search DuckDuckGo or type a URL`);

	chromeWindowDiv2Div2.appendChild(chromeWindowDiv2Div2Input1);

	chromeWindowDiv2.appendChild(chromeWindowDiv2Div2);

	const chromeWindowDiv2Div3 = document.createElement("div");
	chromeWindowDiv2Div3.setAttribute('class', `chrome-search-bar-extras`);

	const chromeWindowDiv2Div3Div1 = document.createElement("div");
	chromeWindowDiv2Div3Div1.setAttribute('class', `chrome-search-bar-extensions`);

	const chromeWindowDiv2Div3Div1Img1 = document.createElement("img");
	chromeWindowDiv2Div3Div1Img1.setAttribute('class', `chrome-search-bar-extensions-icon`);
	chromeWindowDiv2Div3Div1Img1.setAttribute('src', `./assets/extension_icon.png`);

	chromeWindowDiv2Div3Div1.appendChild(chromeWindowDiv2Div3Div1Img1);

	chromeWindowDiv2Div3.appendChild(chromeWindowDiv2Div3Div1);

	const chromeWindowDiv2Div3Div2 = document.createElement("div");
	chromeWindowDiv2Div3Div2.setAttribute('class', `chrome-search-bar-profile`);

	const chromeWindowDiv2Div3Div2Img1 = document.createElement("img");
	chromeWindowDiv2Div3Div2Img1.setAttribute('class', `chrome-search-bar-profile-icon`);
	chromeWindowDiv2Div3Div2Img1.setAttribute('src', `./assets/profile_icon.png`);

	chromeWindowDiv2Div3Div2.appendChild(chromeWindowDiv2Div3Div2Img1);

	chromeWindowDiv2Div3.appendChild(chromeWindowDiv2Div3Div2);

	const chromeWindowDiv2Div3Div3 = document.createElement("div");
	chromeWindowDiv2Div3Div3.setAttribute('class', `chrome-search-bar-settings`);

	const chromeWindowDiv2Div3Div3Img1 = document.createElement("img");
	chromeWindowDiv2Div3Div3Img1.setAttribute('class', `chrome-search-bar-settings-icon`);
	chromeWindowDiv2Div3Div3Img1.setAttribute('src', `./assets/dot_menu_icon.png`);

	chromeWindowDiv2Div3Div3.appendChild(chromeWindowDiv2Div3Div3Img1);

	chromeWindowDiv2Div3.appendChild(chromeWindowDiv2Div3Div3);

	chromeWindowDiv2.appendChild(chromeWindowDiv2Div3);

	chromeWindow.appendChild(chromeWindowDiv2);

	const chromeWindowDiv3 = document.createElement("div");
	chromeWindowDiv3.setAttribute('class', `chrome-bookmarks-bar`);

	const chromeWindowDiv3Div1 = document.createElement("div");
	chromeWindowDiv3Div1.setAttribute('class', `chrome-bookmark`);

	const chromeWindowDiv3Div1Img1 = document.createElement("img");
	chromeWindowDiv3Div1Img1.setAttribute('class', `chrome-bookmark-icon`);
	chromeWindowDiv3Div1Img1.setAttribute('src', `./assets/duck-logo.png`);
	chromeWindowDiv3Div1Img1.setAttribute('alt', `Bookmark Icon`);

	chromeWindowDiv3Div1.appendChild(chromeWindowDiv3Div1Img1);

	const chromeWindowDiv3Div1Label1 = document.createElement("label");
	chromeWindowDiv3Div1Label1.textContent = `Welcome!`;
	chromeWindowDiv3Div1Label1.setAttribute('class', `chrome-bookmark-title`);

	chromeWindowDiv3Div1.appendChild(chromeWindowDiv3Div1Label1);

	chromeWindowDiv3.appendChild(chromeWindowDiv3Div1);

	const chromeWindowDiv3Div2 = document.createElement("div");
	chromeWindowDiv3Div2.setAttribute('class', `chrome-bookmark`);

	const chromeWindowDiv3Div2Img1 = document.createElement("img");
	chromeWindowDiv3Div2Img1.setAttribute('class', `chrome-bookmark-icon`);
	chromeWindowDiv3Div2Img1.setAttribute('src', `./assets/profile_icon.png`);
	chromeWindowDiv3Div2Img1.setAttribute('alt', `Bookmark Icon`);

	chromeWindowDiv3Div2.appendChild(chromeWindowDiv3Div2Img1);

	const chromeWindowDiv3Div2Label1 = document.createElement("label");
	chromeWindowDiv3Div2Label1.textContent = `GitHub`;
	chromeWindowDiv3Div2Label1.setAttribute('class', `chrome-bookmark-title`);

	chromeWindowDiv3Div2.appendChild(chromeWindowDiv3Div2Label1);

	chromeWindowDiv3.appendChild(chromeWindowDiv3Div2);

	chromeWindow.appendChild(chromeWindowDiv3);

	const chromeWindowDiv4 = document.createElement("div");
	chromeWindowDiv4.setAttribute('class', `chrome-window-content`);

	const chromeWindowDiv4Div1 = document.createElement("div");
	chromeWindowDiv4Div1.setAttribute('class', `chrome-page chrome-page-basic`);

	const chromeWindowDiv4Div1Div1 = document.createElement("div");
	chromeWindowDiv4Div1Div1.setAttribute('class', `duckduckgo-icon-container`);

	const chromeWindowDiv4Div1Div1Img1 = document.createElement("img");
	chromeWindowDiv4Div1Div1Img1.setAttribute('src', `./assets/duck-logo.png`);
	chromeWindowDiv4Div1Div1Img1.setAttribute('class', `duckduckgo-icon`);

	chromeWindowDiv4Div1Div1.appendChild(chromeWindowDiv4Div1Div1Img1);

	const chromeWindowDiv4Div1Div1Label1 = document.createElement("label");
	chromeWindowDiv4Div1Div1Label1.textContent = `DuckDuckGo`;
	chromeWindowDiv4Div1Div1Label1.setAttribute('class', `duckduckgo-icon-text`);

	chromeWindowDiv4Div1Div1.appendChild(chromeWindowDiv4Div1Div1Label1);

	chromeWindowDiv4Div1.appendChild(chromeWindowDiv4Div1Div1);

	const chromeWindowDiv4Div1Div2 = document.createElement("div");
	chromeWindowDiv4Div1Div2.setAttribute('class', `duckduckgo-search-container`);

	const chromeWindowDiv4Div1Div2Input1 = document.createElement("input");
	chromeWindowDiv4Div1Div2Input1.setAttribute('class', `duckduckgo-search-bar`);
	chromeWindowDiv4Div1Div2Input1.setAttribute('type', `text`);

	chromeWindowDiv4Div1Div2.appendChild(chromeWindowDiv4Div1Div2Input1);

	const chromeWindowDiv4Div1Div2Img1 = document.createElement("img");
	chromeWindowDiv4Div1Div2Img1.setAttribute('src', `./assets/search_icon.png`);
	chromeWindowDiv4Div1Div2Img1.setAttribute('class', `duckduckgo-search-button`);

	chromeWindowDiv4Div1Div2.appendChild(chromeWindowDiv4Div1Div2Img1);

	chromeWindowDiv4Div1.appendChild(chromeWindowDiv4Div1Div2);

	chromeWindowDiv4.appendChild(chromeWindowDiv4Div1);

	chromeWindow.appendChild(chromeWindowDiv4);

	return chromeWindow;

}