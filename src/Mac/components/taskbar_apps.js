function createTaskbarApp(iconPath, appName, appId){
    const taskbarApp = document.createElement('div');
    taskbarApp.classList.add('taskbar-app');
    taskbarApp.id = `icon-${appId}`;
    taskbarApp.dataset.app = appId;



    const taskbarTooltip = document.createElement('div');
    taskbarTooltip.classList.add('taskbar-tooltip');

    const tooltipLabel = document.createElement('label');
    tooltipLabel.classList.add('tooltip-label');
    tooltipLabel.innerText = appName;

    taskbarTooltip.appendChild(tooltipLabel);

    taskbarApp.appendChild(taskbarTooltip);

    const taskbarAppContents = document.createElement('div');
    taskbarAppContents.classList.add('taskbar-app-contents');

    const taskbarAppIcon = document.createElement('img');
    taskbarAppIcon.classList.add('taskbar-app-icon');
    taskbarAppIcon.src = iconPath;
    taskbarAppIcon.id = `icon-${appId}`;


    taskbarApp.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      //Check if context menu is already open
      if(taskbarApp.classList.contains('context-menu-open')){
       
        document.querySelector('.taskbar').classList.remove('context-menu-open');
        taskbarApp.classList.remove('context-menu-open');
        taskbarApp.removeChild(taskbarApp.querySelector('.taskbar-context-menu'));
        return;
      }
      
      //Create context menu and have it appaer where the mouse is
      const contextMenu = createTaskbarContextMenu(appId);
      console.log(contextMenu)
      document.querySelector('.taskbar').classList.add('context-menu-open');
      taskbarApp.classList.add('context-menu-open');
      taskbarApp.appendChild(contextMenu);
      document.onclick = (e) => { taskbarAppIcon.classList.remove('taskbar-app-clicked');
        document.querySelector('.taskbar').classList.remove('context-menu-open');
        taskbarApp.classList.remove('context-menu-open');
        document.querySelector('.taskbarArea').classList.remove('shown');
        document.querySelector('.taskbarArea').classList.add('hidden');
        contextMenu.remove();
        document.onclick = null;
      }
     
  })

    taskbarAppIcon.addEventListener('mousedown', () => {
        taskbarAppIcon.classList.add('taskbar-app-clicked');
    })

    taskbarAppIcon.addEventListener('mouseup', () => {
        taskbarAppIcon.classList.remove('taskbar-app-clicked');
    })

    taskbarAppIcon.addEventListener('click', () => {
        //Check if the app is already open
        if(taskbarApp.classList.contains('taskbar-app-open')){
          const appWindows = document.querySelectorAll(`.window-${appId}`);
          appWindows.forEach((appWindow, i) => {
            //Check if the first window
            if(i === 0) {
              appWindow.classList.add('window-active');
            }
            appWindow.classList.add('window-open');
            
          })
          return;
        }

        //Open the app
        const appWindow = createWindow(appId);
        appWindow.classList.add('window-open');
        appWindow.classList.add('window-active');
        document.querySelector('.windows').appendChild(appWindow);


        // const appWindows = document.querySelectorAll(`.window-${appId}`);
        // appWindows.forEach((appWindow, i) => {
        //   //Check if the first window
        //   if(i === 0) {
        //     appWindow.classList.add('window-active');
        //   }
        //   appWindow.classList.add('window-open');
          
        // })
        taskbarApp.classList.add('taskbar-app-open');
        const appOptions = createNavBarOptions(appId);
        document.querySelector('.app-options').parentElement.replaceChild(appOptions, document.querySelector('.app-options'));
        
    })

    const taskbarOpenIndicator = document.createElement('img');
    taskbarOpenIndicator.classList.add('app-open-dot');
    taskbarOpenIndicator.src = './assets/dot.png';
    taskbarOpenIndicator.alt = 'App Open indicator';

    taskbarAppContents.appendChild(taskbarAppIcon);
    taskbarAppContents.appendChild(taskbarOpenIndicator);

    taskbarApp.appendChild(taskbarAppContents);

    return taskbarApp;
}

function createTaskbarContextMenu(appId){
  let contextMenu = createContextMenuItems(appContextMenuItems[appId].menuItems);

  console.log(contextMenu);
  switch(appId){
    case 'chrome':
      contextMenu = enhanceChromeContextMenu(contextMenu);
      break;
    default:
      break;

  }


  return contextMenu;



}

function enhanceChromeContextMenu(contextMenu){
  const chromeQuit = contextMenu.querySelector('.taskbar-context-menu-item-quit');
  const chromeNewWindow = contextMenu.querySelector('.taskbar-context-menu-item-new-window');
  
  chromeQuit.addEventListener('click', () => {
    const taskbarApp = document.querySelector('.taskbar-app.context-menu-open');
    const appWindows = document.querySelectorAll(`.window-chrome`);
    appWindows.forEach((appWindow) => {
      appWindow.remove();
    })
   
    document.querySelector('.taskbar').classList.remove('context-menu-open');
    taskbarApp.classList.remove('context-menu-open');
    taskbarApp.removeChild(document.querySelector('.taskbar-context-menu'));
    taskbarApp.classList.remove('taskbar-app-open');
    document.querySelector('.app-options').parentElement.replaceChild(createNavBarOptions('finder'), document.querySelector('.app-options'));
  })

  chromeNewWindow.addEventListener('click', () => {
    const taskbarApp = document.querySelector('.taskbar-app.context-menu-open');
    const appWindow = createWindow('chrome');
    appWindow.classList.add('window-open');
    appWindow.classList.add('window-active');
    document.querySelector('.windows').appendChild(appWindow);
    document.querySelector('.taskbar').classList.remove('context-menu-open');
    //Check if the app isnt already open
    if(!taskbarApp.classList.contains('taskbar-app-open')){
      taskbarApp.classList.add('taskbar-app-open');
      const appOptions = createNavBarOptions('chrome');
      document.querySelector('.app-options').parentElement.replaceChild(appOptions, document.querySelector('.app-options'));
    }

  })


  return contextMenu;
}

function createContextMenuItems(menuItems){
  const contextMenu = document.createElement('div');
  contextMenu.classList.add('taskbar-context-menu');
  // contextMenu.id = `context-menu-${appId}`;
  // contextMenu.dataset.app = appId;
  
  menuItems.forEach((item) => {
    if(item.id === 'divider'){
      const divider = document.createElement('hr');
      divider.classList.add('taskbar-context-menu-divider');
      contextMenu.appendChild(divider);
      return;
    }

    const menuItem = document.createElement('label');
    menuItem.classList.add('taskbar-context-menu-item');
    menuItem.classList.add(`taskbar-context-menu-item-${item.id}`);
    menuItem.textContent = item.name;

    contextMenu.appendChild(menuItem);


  })

  return contextMenu;
}