

function createNavBarOptions(appId){
    const navBarOptions = document.createElement('div');
    navBarOptions.classList.add('app-options');
    navBarOptions.classList.add(appId);

    const appleOptions = document.createElement('div');
    appleOptions.classList.add('menu-item');
    appleOptions.classList.add('menu-logo');

    const appleLogo = document.createElement('img');
    appleLogo.classList.add('app-logo');
    appleLogo.src = './assets/applelogo.png';
    appleLogo.alt = 'Apple Logo';

    appleOptions.addEventListener('mouseover', () => {
        console.log('hovered', appleOptions, document.querySelector('.navBar.navSelected'))
         if(document.querySelector('.navBar.navSelected')) {
             console.log('hovered', appleOptions)
             if(document.querySelector('.menu-item-selected')) {
               document.querySelector('.menu-item-selected').classList.remove('menu-item-hover');
               document.querySelector('.menu-item-selected').classList.remove('menu-item-selected');
               }
               appleOptions.classList.add('menu-item-hover');
               appleOptions.classList.add('menu-item-selected');
         }
     })
 
     appleOptions.addEventListener('mouseleave', () => {
        
         
             
        appleOptions.classList.remove('menu-item-hover');
         
     })

    appleOptions.appendChild(appleLogo);
    
    



    const appleSubmenu = createNavBarSubmenu(appleSubmenuItems);
    appleOptions.appendChild(appleSubmenu);

    navBarOptions.appendChild(appleOptions);
    console.log(appId, "appId")
    console.log(appMenuItems[appId],"AppMenuItems");
    appMenuItems[appId].menuItems.forEach((menuItem,index) => {
        const option = document.createElement('div');
        option.classList.add('menu-item');
        
        const optionLabel = document.createElement('label');
        if(index === 0){
            optionLabel.classList.add('app-name');
        }
        optionLabel.textContent = menuItem.name;
        option.appendChild(optionLabel);

        option.addEventListener('mouseover', () => {
            console.log('hovered', option, document.querySelector('.navBar.navSelected'))
             if(document.querySelector('.navBar.navSelected')) {
                 console.log('hovered', option)
                 if(document.querySelector('.menu-item-selected')) {
                   document.querySelector('.menu-item-selected').classList.remove('menu-item-hover');
                   document.querySelector('.menu-item-selected').classList.remove('menu-item-selected');
                   }
                   option.classList.add('menu-item-hover');
                   option.classList.add('menu-item-selected');
             }
         })
     
         option.addEventListener('mouseleave', () => {
            
             
                 
            option.classList.remove('menu-item-hover');
             
         })

        const submenu = createNavBarSubmenu(menuItem.submenuItems, index === 0, appId);
        option.appendChild(submenu);

       
        navBarOptions.appendChild(option);
    });

    return navBarOptions;


}

function createNavBarSubmenu(submenuItems, isAppMenu, appId){
    console.log(submenuItems,"submenuItems");
    const submenu = document.createElement('div');
    submenu.classList.add('submenu');
    submenuItems.forEach((item,index) => {
        if(item.id === 'divider'){
            const divider = document.createElement('hr');
            divider.classList.add('menu-divider');
            submenu.appendChild(divider);
            return;
        }

        const submenuItem = document.createElement('label');
        submenuItem.classList.add('submenu-item');
        submenuItem.classList.add(item.id);
        submenuItem.textContent = item.name;

        if(isAppMenu && item.id === 'quit'){
            submenuItem.onclick = (e) => {
                let appWindows = document.querySelectorAll(`.window-${appId}.window-open`);
                appWindows.forEach((appWindow) => {
                //  appWindow.classList.remove('window-active');
                //  appWindow.classList.remove('window-open');
                    appWindow.remove();
                });
                 let appIcon = document.getElementById(`icon-${appId}`);
                 appIcon.classList.remove('taskbar-app-open');
                 document.querySelector('.menu-item.menu-item-selected').classList.remove('menu-item-hover');
                 document.querySelector('.menu-item.menu-item-selected').classList.remove('menu-item-selected');
             
               }
        }
        submenu.appendChild(submenuItem);

    });
    return submenu;
    
}