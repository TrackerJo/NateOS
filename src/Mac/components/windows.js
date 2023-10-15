function createWindow(appId){
  switch (appId) {
    case 'chrome':
      return createChromeWindow();
    
    default:
      break;

  }

}

function createChromeWindow(){
    const chromeWindow = document.createElement('div');
    chromeWindow.classList.add('window');
    chromeWindow.classList.add('window-chrome');
    chromeWindow.style.top = '25px';

    

    const chromeTopBar = document.createElement('div');
    chromeTopBar.classList.add('chrome-top-bar');

    const chromeControlIcons = document.createElement('div');
    chromeControlIcons.classList.add('window-control-icons');

    const chromeControlIconClose = document.createElement('img');
    chromeControlIconClose.classList.add('window-control-icon');
    chromeControlIconClose.classList.add('quit-icon');
    chromeControlIconClose.src = 'assets/quit_icon.png';
 
    chromeControlIconClose.onmousedown = (e) => {
  
        console.log(e);
        chromeControlIconClose.classList.add('window-control-icon-clicked');
      }
      chromeControlIconClose.onmouseleave = (e) => {
        chromeControlIconClose.classList.remove('window-control-icon-clicked');
      }
    
      chromeControlIconClose.onmouseup = (e) => {
        //check if mouse is still over the element
        if(e.target.classList.contains('window-control-icon-clicked')) {
          console.log(e,"QUIT CLICKED");
          chromeWindow.classList.remove('window-active');
          chromeWindow.classList.remove('window-open');
        }

        chromeControlIconClose.classList.remove('window-control-icon-clicked');
        
      }
    
      chromeControlIconClose.onmouseenter = (e) => {
        //Check if mouse is down
        if(e.buttons == 1) {
            chromeControlIconClose.classList.add('window-control-icon-clicked');
        }
      }
      chromeControlIconClose.onclick = (e) => {
        console.log(e,"QUIT CLICKED");
        chromeWindow.classList.remove('window-active');
        chromeWindow.classList.remove('window-open');
      }

    const chromeControlIconMin = document.createElement('img');
    chromeControlIconMin.classList.add('window-control-icon');
    chromeControlIconMin.classList.add('min-icon');
    chromeControlIconMin.src = 'assets/minimize_icon.png';

    const chromeControlIconMax = document.createElement('img');
    chromeControlIconMax.classList.add('window-control-icon');
    chromeControlIconMax.classList.add('max-icon');
    chromeControlIconMax.src = 'assets/maximize_icon.png';

    chromeControlIconMax.onmousedown = (e) => {
        console.log(e);
        chromeControlIconMax.classList.add('window-control-icon-clicked');
      }
      chromeControlIconMax.onmouseleave = (e) => {
        chromeControlIconMax.classList.remove('window-control-icon-clicked');
      }
    
      chromeControlIconMax.onmouseup = (e) => {
        //check if mouse is still over the element
        if(e.target.classList.contains('window-control-icon-clicked')) {
          if(chromeWindow.classList.contains('window-maximized')) {
    
            chromeWindow.classList.remove('window-maximized');
            chromeWindow.style = `top: ${chromeWindow.dataset.top}; left: ${chromeWindow.dataset.left}; width: ${chromeWindow.dataset.width}; height: ${chromeWindow.dataset.height};`
          // Animate the window decreasing in size
          chromeWindow.animate([
            {top: '0px', left: '0px', width: '100%', height: '100%'},
            {top: chromeWindow.dataset.top, left: chromeWindow.dataset.left, width: chromeWindow.dataset.width, height: chromeWindow.dataset.height}
          ], {
            duration: 200,
            easing: 'ease-in-out',
            fill: 'backwards'
          })
          //Stop the animation from affecting the window's style after it's done
       
          
          
    
        } else {
            chromeWindow.classList.add('window-maximized');
            chromeWindow.dataset.top = chromeWindow.style.top;
            chromeWindow.dataset.left = chromeWindow.style.left;
            chromeWindow.dataset.width = chromeWindow.style.width;
            chromeWindow.dataset.height = chromeWindow.style.height;
            chromeWindow.style="";
          // Animate the window increasing in size
          chromeWindow.animate([
            {top: chromeWindow.dataset.top, left: chromeWindow.dataset.left, width: chromeWindow.dataset.width, height: chromeWindow.dataset.height},
            {top: '0px', left: '0px', width: '100%', height: '100%'}
          ], {
            duration: 200,
            easing: 'ease-in-out',
            fill: 'backwards'
          })
          
        }
      }

        chromeControlIconMax.classList.remove('window-control-icon-clicked');
        
      }
    
      chromeControlIconMax.onmouseenter = (e) => {
        //Check if mouse is down
        if(e.buttons == 1) {
          chromeControlIconMax.classList.add('window-control-icon-clicked');
        }
      }
      chromeControlIconMax.onclick = (e) => {
       
       
      }
    
    chromeControlIcons.appendChild(chromeControlIconClose);
    chromeControlIcons.appendChild(chromeControlIconMin);
    chromeControlIcons.appendChild(chromeControlIconMax);

    chromeTopBar.appendChild(chromeControlIcons);

    chromeControlIcons.onmouseenter = (e) => {
        chromeControlIconClose.src = './assets/quit_icon_hovered.png';
        chromeControlIconMin.src = './assets/minimize_icon_hovered.png';
        chromeControlIconMax.src = './assets/maximize_icon_hovered.png';
    
      }
    
      chromeControlIcons.onmouseleave = (e) => {
        chromeControlIconClose.src = './assets/quit_icon.png';
        chromeControlIconMin.src = './assets/minimize_icon.png';
        chromeControlIconMax.src = './assets/maximize_icon.png';
    
      }

    const chromeTabs = document.createElement('div');
    chromeTabs.classList.add('chrome-tabs');

    const firstChromeTab = createChromeTab('./assets/duck-logo.png', 'New Tab', true);
    const secondChromeTab = createChromeTab('./assets/duck-logo.png', 'New Tab', false);
    const thirdChromeTab = createChromeTab('./assets/duck-logo.png', 'New Tab', false);

    chromeTabs.appendChild(firstChromeTab);
    chromeTabs.appendChild(secondChromeTab);
    chromeTabs.appendChild(thirdChromeTab);

    const chromeTabAdd = document.createElement('img');
    chromeTabAdd.classList.add('chrome-tab-add');
    chromeTabAdd.src = './assets/plus.png';

    chromeTabAdd.onmousedown = (e) => {
        console.log(e);
        chromeTabAdd.classList.add('clicked');
    }
    
    chromeTabAdd.onmouseleave = (e) => {
        chromeTabAdd.classList.remove('clicked');
    }

    chromeTabAdd.onmouseup = (e) => {
        chromeTabAdd.classList.remove('clicked');

    }

    chromeTabAdd.onmouseenter = (e) => {
        //Check if mouse is down
        if(e.buttons == 1) {
            chromeTabAdd.classList.add('clicked');
        }
    }

    chromeTabAdd.onclick = (e) => {
        alert('New Tab');
        const newChromeTab = createChromeTab('./assets/duck-logo.png', 'New Tab', false);
        chromeTabs.insertBefore(newChromeTab, chromeTabAdd);
    }

    chromeTabs.appendChild(chromeTabAdd);

    chromeTopBar.appendChild(chromeTabs);

    chromeWindow.appendChild(chromeTopBar);

    const chromeSearchBar = document.createElement('div');
    chromeSearchBar.classList.add('chrome-search-bar');

    const chromeSearchBarControls = document.createElement('div');
    chromeSearchBarControls.classList.add('chrome-search-bar-controls');

    const chromeSearchBarBack = document.createElement('div');
    chromeSearchBarBack.classList.add('chrome-search-bar-back');
    chromeSearchBarBack.classList.add('chrome-search-bar-control');

    const chromeSearchBarBackIcon = document.createElement('img');
    chromeSearchBarBackIcon.classList.add('chrome-search-bar-back-icon');
    chromeSearchBarBackIcon.src = './assets/left_arrow_disabled.png';

    chromeSearchBarBack.appendChild(chromeSearchBarBackIcon);

    const chromeSearchBarForward = document.createElement('div');
    chromeSearchBarForward.classList.add('chrome-search-bar-forward');
    chromeSearchBarForward.classList.add('chrome-search-bar-control');

    const chromeSearchBarForwardIcon = document.createElement('img');
    chromeSearchBarForwardIcon.classList.add('chrome-search-bar-forward-icon');
    chromeSearchBarForwardIcon.src = './assets/right_arrow_disabled.png';

    chromeSearchBarForward.appendChild(chromeSearchBarForwardIcon);

    const chromeSearchBarRefresh = document.createElement('div');
    chromeSearchBarRefresh.classList.add('chrome-search-bar-refresh');
    chromeSearchBarRefresh.classList.add('chrome-search-bar-control');


    const chromeSearchBarRefreshIcon = document.createElement('img');
    chromeSearchBarRefreshIcon.classList.add('chrome-search-bar-refresh-icon');
    chromeSearchBarRefreshIcon.src = './assets/refresh_icon.png';

    chromeSearchBarRefresh.appendChild(chromeSearchBarRefreshIcon);

    chromeSearchBarControls.appendChild(chromeSearchBarBack);
    chromeSearchBarControls.appendChild(chromeSearchBarForward);
    chromeSearchBarControls.appendChild(chromeSearchBarRefresh);

    chromeSearchBar.appendChild(chromeSearchBarControls);

    const chromeSearchBarInputDiv = document.createElement('div');
    chromeSearchBarInputDiv.classList.add('chrome-search-bar-input-div');

    const chromeSearchBarInputIcon = document.createElement('img');
    chromeSearchBarInputIcon.classList.add('chrome-search-bar-input-icon');
    chromeSearchBarInputIcon.src = './assets/duck-logo.png';

    //chromeSearchBarInputDiv.appendChild(chromeSearchBarInputIcon);

    const chromeSearchBarInput = document.createElement('input');
    chromeSearchBarInput.classList.add('chrome-search-bar-input');
    chromeSearchBarInput.type = 'text';
    chromeSearchBarInput.placeholder = 'Search DuckDuckGo or type a URL';

    chromeSearchBarInputDiv.appendChild(chromeSearchBarInput);

    chromeSearchBar.appendChild(chromeSearchBarInputDiv);

    const chromeSearchBarExtras = document.createElement('div');
    chromeSearchBarExtras.classList.add('chrome-search-bar-extras');

    const chromeSearchBarExtensions = document.createElement('div');
    chromeSearchBarExtensions.classList.add('chrome-search-bar-extensions');

    const chromeSearchBarExtensionsIcon = document.createElement('img');
    chromeSearchBarExtensionsIcon.classList.add('chrome-search-bar-extensions-icon');
    chromeSearchBarExtensionsIcon.src = './assets/extension_icon.png';

    chromeSearchBarExtensions.appendChild(chromeSearchBarExtensionsIcon);

    chromeSearchBarExtras.appendChild(chromeSearchBarExtensions);

    const chromeSearchBarProfile = document.createElement('div');
    chromeSearchBarProfile.classList.add('chrome-search-bar-profile');

    const chromeSearchBarProfileIcon = document.createElement('img');
    chromeSearchBarProfileIcon.classList.add('chrome-search-bar-profile-icon');
    chromeSearchBarProfileIcon.src = './assets/profile_icon.png';

    chromeSearchBarProfile.appendChild(chromeSearchBarProfileIcon);

    chromeSearchBarExtras.appendChild(chromeSearchBarProfile);

    const chromeSearchBarSettings = document.createElement('div');
    chromeSearchBarSettings.classList.add('chrome-search-bar-settings');

    const chromeSearchBarSettingsIcon = document.createElement('img');
    chromeSearchBarSettingsIcon.classList.add('chrome-search-bar-settings-icon');
    chromeSearchBarSettingsIcon.src = './assets/dot_menu_icon.png';

    chromeSearchBarSettings.appendChild(chromeSearchBarSettingsIcon);

    chromeSearchBarExtras.appendChild(chromeSearchBarSettings);

    chromeSearchBar.appendChild(chromeSearchBarExtras);

    chromeWindow.appendChild(chromeSearchBar);

    const chromeBookmarksBar = document.createElement('div');
    chromeBookmarksBar.classList.add('chrome-bookmarks-bar');

    const welcomeBookmark = createChromeBookmark('./assets/duck-logo.png', 'Welcome!', 'https://duckduckgo.com');
    chromeBookmarksBar.appendChild(welcomeBookmark);

    const githubBookmark = createChromeBookmark('./assets/profile_icon.png', 'GitHub', 'https://github.com');
    chromeBookmarksBar.appendChild(githubBookmark);

    chromeWindow.appendChild(chromeBookmarksBar);

    const chromeWindowContent = document.createElement('div');
    chromeWindowContent.classList.add('chrome-window-content');

    const chromeDefaultPage = createBasicChromePage();

    chromeWindowContent.appendChild(chromeDefaultPage);
    chromeWindow.appendChild(chromeWindowContent);

    dragWindow(chromeWindow);

    chromeWindow.addEventListener('mousedown', (e) => {
      document.querySelector('.window-active').classList.remove('window-active');
      chromeWindow.classList.add('window-active');
      //Move the window to the last child of the desktop
      document.querySelector('.windows').appendChild(chromeWindow);
      


    })

    return chromeWindow;

}

function createChromeTab( iconPath,  title, active){
    const chromeTab = document.createElement('div');
    chromeTab.classList.add('chrome-tab');
    if(active) {
        chromeTab.classList.add('chrome-tab-active');
    }
    chromeTab.addEventListener('click', (e) => {
    if(chromeTab.classList.contains('chrome-tab-active') || e.target.classList.contains('chrome-tab-close')) {
        return;
    }
    //Remove the active class from all tabs
    const activeTab = chromeTab.parentElement.querySelector('.active');
    activeTab.classList.remove('chrome-tab-active');
    //Add the active class to the clicked tab
    chromeTab.classList.add('chrome-tab-active');
    })
    const chromeTabContents = document.createElement('div');
    chromeTabContents.classList.add('chrome-tab-contents');

    const chromeTabIcon = document.createElement('img');
    chromeTabIcon.classList.add('chrome-tab-icon');
    chromeTabIcon.src = iconPath;
    chromeTabIcon.alt = 'Tab Icon';

    const chromeTabTitle = document.createElement('label');
    chromeTabTitle.classList.add('chrome-tab-title');
    chromeTabTitle.textContent =  title;

    const chromeTabClose = document.createElement('img');
    chromeTabClose.classList.add('chrome-tab-close');
    chromeTabClose.src = 'assets/xmark.png';
    chromeTabClose.alt = 'Close Tab';

    chromeTabClose.onmousedown = (e) => {
        console.log(e);
        chromeTabClose.classList.add('clicked');
    }

    chromeTabClose.onmouseleave = (e) => {
        chromeTabClose.classList.remove('clicked');
    }

    chromeTabClose.onmouseup = (e) => {
        chromeTabClose.classList.remove('clicked');

    }

    chromeTabClose.onmouseenter = (e) => {
        //Check if mouse is down
        if(e.buttons == 1) {
            chromeTabClose.classList.add('clicked');
        }
    }
    
      chromeTabClose.onclick = (e) => {
        //Animate so it looks like something is going over the tab right to left
        let tab = e.target.parentElement;
    
        //get tabs
        const tabs = tab.parentElement.parentElement.querySelectorAll('.chrome-tab');
        if(tabs.length == 1) {
          //If there's only one tab, close the window
          const window = tab.parentElement.parentElement.parentElement.parentElement;
          window.classList.remove('chrome-tab-active');
          window.classList.remove('chrome-tab-open');
          let appIcon = document.getElementById(`icon-${window.id.split('-')[1]}`);
          appIcon.classList.remove('chrome-tab-open');
          return;
        }
      //Check if the tab was the active tab
      if(tab.parentElement.classList.contains('chrome-tab-active')) {
        //If it was, make the tab in front of it active
        //If it was the last tab, make the first tab active
        if(tab.parentElement.nextElementSibling) {
            console.log("Next Tab",tab.parentElement.nextElementSibling);
            tab.parentElement.nextElementSibling.classList.add('chrome-tab-active');
        } else {
            
            tab.parentElement.previousElementSibling.classList.add('chrome-tab-active');
        }
    }
       //Stop the tab-contents from resizing when the tab is removed
       tab.parentElement.style.width = `${tab.parentElement.offsetWidth}px`;
       
      
        
    
       tab.parentElement.animate([
          {width: `${tab.parentElement.offsetWidth}px`},
          {width: '0%'}
        ], {
          duration: 200,
          easing: 'ease-in-out',
          fill: 'forwards'
        })
        //Remove the tab from the DOM after the animation is done
        setTimeout(() => {
    
            tab.parentElement.remove();
          



        }
        , 200)
        
    
      }

    chromeTabContents.appendChild(chromeTabIcon);
    chromeTabContents.appendChild(chromeTabTitle);
    chromeTabContents.appendChild(chromeTabClose);

    chromeTab.appendChild(chromeTabContents);

    const chromeTabDivider = document.createElement('div');
    chromeTabDivider.classList.add('chrome-tab-divider');



    chromeTab.appendChild(chromeTabDivider);

    return chromeTab;
}

function createChromeBookmark(iconPath, title, id) {
    const chromeBookmark = document.createElement('div');
    chromeBookmark.classList.add('chrome-bookmark');

    const chromeBookmarkIcon = document.createElement('img');
    chromeBookmarkIcon.classList.add('chrome-bookmark-icon');
    chromeBookmarkIcon.src = iconPath;
    chromeBookmarkIcon.alt = 'Bookmark Icon';

    const chromeBookmarkTitle = document.createElement('label');
    chromeBookmarkTitle.classList.add('chrome-bookmark-title');
    chromeBookmarkTitle.textContent =  title;

    chromeBookmark.appendChild(chromeBookmarkIcon);
    chromeBookmark.appendChild(chromeBookmarkTitle);

    chromeBookmark.onclick = (e) => {
    }

    return chromeBookmark;
}

function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
      elmnt.onmousemove = resizeMouseOver;
      elmnt.onmouseexit = dragMouseExit;
      elmnt.onmouseup = closeDragElement;
  
    function dragMouseExit(e) {
      elmnt.classList.remove('window-dragging');
      elmnt.classList.remove('window-resize-width');
      console.log('mouse exit')
    }
  
  
    function resizeMouseOver(e) {
    
      e = e || window.event;
    //  //e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      windowTopLeftX = elmnt.offsetLeft;
      windowTopLeftY = elmnt.offsetTop;
      windowBottomRightX = elmnt.offsetLeft + elmnt.clientWidth;
      windowBottomRightY = elmnt.offsetTop + elmnt.clientHeight;
      windowBottomLeftX = elmnt.offsetLeft;
      windowBottomLeftY = elmnt.offsetTop + elmnt.clientHeight;
      windowTopRightX = elmnt.offsetLeft + elmnt.clientWidth;
      windowTopRightY = elmnt.offsetTop;
  
      //console.log(`MouseX: ${pos3} MouseY: ${pos4}, TopLeft: ${windowTopLeftX}, ${windowTopLeftY} TopRight: ${windowTopRightX}, ${windowTopRightY} BottomLeft: ${windowBottomLeftX}, ${windowBottomLeftY} BottomRight: ${windowBottomRightX}, ${windowBottomRightY}` )
      if(pos3 <= windowTopLeftX + 3 && pos3 >= windowTopLeftX && pos4 >= windowTopLeftY + 10 && pos4 <= windowBottomLeftY - 10) {
        console.log('Increase left size');
        
        document.onmousedown = leftResizeMouseDown;
        elmnt.classList.add('window-resize-width');
  
      } else if(pos3 <= windowTopRightX && pos3 >= windowTopRightX - 3 && pos4 >= windowTopRightY + 10 && pos4 <= windowBottomRightY - 10) {
        console.log('Increase right size');
        
        document.onmousedown = rightResizeMouseDown;
  
        elmnt.classList.add('window-resize-width');
      } else if(pos4 <= windowTopLeftY + 3 && pos4 >= windowTopLeftY && pos3 >= windowTopLeftX + 10 && pos3 <= windowTopRightX - 10) {
        console.log('Increase top size');
        document.onmousedown = topResizeMouseDown;
        elmnt.classList.add('window-resize-height');
      
      
    } else if(pos4 <= windowBottomLeftY && pos4 >= windowBottomLeftY - 3 && pos3 >= windowBottomLeftX + 10 && pos3 <= windowBottomRightX - 10) {
        console.log('Increase bottom size');
        document.onmousedown = bottomResizeMouseDown;
        elmnt.classList.add('window-resize-height');
      
    
  } else if(pos3 <= windowTopLeftX + 3 && pos3 >= windowTopLeftX && pos4 >= windowTopLeftY && pos4 <= windowTopLeftY + 3){
      console.log('Increase top left size');
      document.onmousedown = topLeftResizeMouseDown;
      elmnt.classList.add('window-resize-both-lr');
  
  } else if(pos3 <= windowTopRightX && pos3 >= windowTopRightX - 3 && pos4 >= windowTopRightY && pos4 <= windowTopRightY + 3){
      console.log('Increase top right size');
      document.onmousedown = topRightResizeMouseDown;
      elmnt.classList.add('window-resize-both-rl');
  
  
  } else if(pos3 <= windowBottomLeftX + 3 && pos3 >= windowBottomLeftX && pos4 >= windowBottomLeftY - 3 && pos4 <= windowBottomLeftY){
      console.log('Increase bottom left size');
      document.onmousedown = bottomLeftResizeMouseDown;
      elmnt.classList.add('window-resize-both-rl');
  
  } else if(pos3 <= windowBottomRightX && pos3 >= windowBottomRightX - 3 && pos4 >= windowBottomRightY - 3 && pos4 <= windowBottomRightY){
      console.log('Increase bottom right size');
      document.onmousedown = bottomRightResizeMouseDown;
      elmnt.classList.add('window-resize-both-lr');
  
  }else {
        elmnt.classList.remove('window-resize-width');
        elmnt.classList.remove('window-resize-height');
        elmnt.classList.remove('window-resize-both-lr');
        elmnt.classList.remove('window-resize-both-rl');
  
        document.onmousedown = dragMouseDown;
  
      }
    }
  
    function leftResizeMouseDown(e) {
      console.log('left resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseLeftSize;
      elmnt.onmousemove = null;
    }
  
    function rightResizeMouseDown(e) {
      console.log('right resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseRightSize;
      elmnt.onmousemove = null;
    }
  
    function topResizeMouseDown(e) {
      console.log('top resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseTopSize;
      elmnt.onmousemove = null;
    }
  
    function bottomResizeMouseDown(e) {
      console.log('bottom resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseBottomSize;
      elmnt.onmousemove = null;
    }
  
    function topLeftResizeMouseDown(e) {
      console.log('top left resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseTopLeftSize;
      elmnt.onmousemove = null;
    }
  
    function topRightResizeMouseDown(e) {
      console.log('top right resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseTopRightSize;
      elmnt.onmousemove = null;
    }
  
    function bottomLeftResizeMouseDown(e) {
      console.log('bottom left resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseBottomLeftSize;
      elmnt.onmousemove = null;
    }
  
    function bottomRightResizeMouseDown(e) {
      console.log('bottom right resize mouse down')
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = increaseBottomRightSize;
      elmnt.onmousemove = null;
    }
  
    function increaseLeftSize(e) {
      e = e || window.event;
      //e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
  
      pos3 = e.clientX;
      console.log(pos1);
      if(elmnt.offsetLeft - pos1 <= 8) {
        return;
      }
      // set the element's new position:
  
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
    }
  
    function increaseRightSize(e) {
      e = e || window.event;
      //e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
  
      pos3 = e.clientX;
      console.log(pos1);
      if(elmnt.offsetLeft + elmnt.clientWidth - pos1 >= window.innerWidth - 8) {
        return;
      }
      // set the element's new position:
  
      elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
    }
  
    function increaseTopSize(e) {
      e = e || window.event;
      //e.preventDefault();
      // calculate the new cursor position:
      pos2 = pos4 - e.clientY;
    
      pos4 = e.clientY;
      console.log(pos2);
      if(elmnt.offsetTop - pos2 <= 23) {
        return;
      }
  
      //Check if height is less than min-height
      if(windowMinHeight > elmnt.clientHeight + pos2) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
    }
  
    function increaseBottomSize(e) {
      e = e || window.event;
      //e.preventDefault();
      // calculate the new cursor position:
      pos2 = pos4 - e.clientY;
  
      pos4 = e.clientY;
      console.log(pos2);
      if(elmnt.offsetTop + elmnt.clientHeight - pos2 >= window.innerHeight - 8) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
    }
  
    function increaseTopLeftSize(e) {
      e = e || window.event;
      //e.preventDefault();
  
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
  
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos2);
  
      if(elmnt.offsetTop - pos2 <= 23 || elmnt.offsetLeft - pos1 <= 8) {
        return;
      }
  
      //Check if height is less than min-height
      if(windowMinHeight > elmnt.clientHeight + pos2) {
        return;
      }
  
      //Check if width is less than min-width
      if(windowMinWidth > elmnt.clientWidth + pos1) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
      elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
    }
  
    function increaseTopRightSize(e) {
      e = e || window.event;
      //e.preventDefault();
  
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
  
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos2);
  
      if(elmnt.offsetTop - pos2 <= 23 || elmnt.offsetLeft + elmnt.clientWidth - pos1 >= window.innerWidth - 8) {
        return;
      }
  
      //Check if height is less than min-height
      if(windowMinHeight > elmnt.clientHeight + pos2) {
        return;
      }
  
      //Check if width is less than min-width
      if(windowMinWidth > elmnt.clientWidth - pos1) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.height = (elmnt.clientHeight + pos2) + "px";
      elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
    }
  
    function increaseBottomLeftSize(e) {
      e = e || window.event;
      //e.preventDefault();
  
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
  
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos2);
  
      if(elmnt.offsetTop + elmnt.clientHeight - pos2 >= window.innerHeight - 8 || elmnt.offsetLeft - pos1 <= 8) {
        return;
      }
  
      //Check if height is less than min-height
      if(windowMinHeight > elmnt.clientHeight - pos2) {
        return;
      }
  
      //Check if width is less than min-width
      if(windowMinWidth > elmnt.clientWidth + pos1) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
      elmnt.style.width = (elmnt.clientWidth + pos1) + "px";
    }
  
    function increaseBottomRightSize(e) {
      e = e || window.event;
      //e.preventDefault();
      
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
  
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos2);
  
      if(elmnt.offsetTop + elmnt.clientHeight - pos2 >= window.innerHeight - 8 || elmnt.offsetLeft + elmnt.clientWidth - pos1 >= window.innerWidth - 8) {
        return;
      }
  
      //Check if height is less than min-height
      if(windowMinHeight > elmnt.clientHeight - pos2) {
        return;
      }
  
      //Check if width is less than min-width
      if(windowMinWidth > elmnt.clientWidth - pos1) {
        return;
      }
  
      // set the element's new position:
      elmnt.style.height = (elmnt.clientHeight - pos2) + "px";
      elmnt.style.width = (elmnt.clientWidth - pos1) + "px";
    }
    
    function dragMouseDown(e) {
      elmnt.onmousemove = null;
      e = e || window.event;
      //e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log("Drag mouse down", e.target);
      if(!(e.target.classList.contains('window') || e.target.classList.contains('chrome-top-bar'))) {
        return;
      }
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      elmnt.classList.add('window-dragging');
      
      
    }
  
  
    function elementDrag(e) {
      e = e || window.event;
      //e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(window.innerHeight - elmnt.clientHeight);
      if(elmnt.offsetTop - pos2 <= 24 || elmnt.offsetLeft - pos1 <= 0 || elmnt.offsetTop - pos2 >= window.innerHeight - elmnt.clientHeight - 2|| elmnt.offsetLeft - pos1 >= window.innerWidth - elmnt.clientWidth - 2){
        return;
      }
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.onmousemove = resizeMouseOver;
      elmnt.classList.remove('window-dragging');
      elmnt.classList.remove('window-resize-width');
      elmnt.classList.remove('window-resize-height');
      elmnt.classList.remove('window-resize-both-lr');
      elmnt.classList.remove('window-resize-both-rl');
    }
  }

function createBasicChromePage(){
  const chromePage = document.createElement('div');
  chromePage.classList.add('chrome-page');
  chromePage.classList.add('chrome-page-basic');
  
  const duckDuckGoIconContainer = document.createElement('div');
  duckDuckGoIconContainer.classList.add('duckduckgo-icon-container');

  const duckDuckGoIcon = document.createElement('img');
  duckDuckGoIcon.src = './assets/duck-logo.png';
  duckDuckGoIcon.classList.add('duckduckgo-icon');

  const duckDuckGoIconText = document.createElement('label');
  duckDuckGoIconText.classList.add('duckduckgo-icon-text');
  duckDuckGoIconText.textContent = 'DuckDuckGo';

  duckDuckGoIconContainer.appendChild(duckDuckGoIcon);
  duckDuckGoIconContainer.appendChild(duckDuckGoIconText);


  const duckDuckGoSearchContainer = document.createElement('div');
  duckDuckGoSearchContainer.classList.add('duckduckgo-search-container');

  const duckDuckGoSearchBar = document.createElement('input');
  duckDuckGoSearchBar.classList.add('duckduckgo-search-bar');
  duckDuckGoSearchBar.type = 'text';
  
  const duckDuckGoSearchButton = document.createElement('img');
  duckDuckGoSearchButton.src = './assets/search_icon.png';
  duckDuckGoSearchButton.classList.add('duckduckgo-search-button');

  duckDuckGoSearchContainer.appendChild(duckDuckGoSearchBar);
  duckDuckGoSearchContainer.appendChild(duckDuckGoSearchButton);

  chromePage.appendChild(duckDuckGoIconContainer);
  chromePage.appendChild(duckDuckGoSearchContainer);

  return chromePage;
  

}