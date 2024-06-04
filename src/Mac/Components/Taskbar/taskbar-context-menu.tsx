import "./taskbar-context-menu.css"

type TaskbarContextMenuProps = {
    appId: string;
    openWindows: Map<string, string>[];
    setOpenWindows: (openWindows: Map<string, string>[]) => void;
    setSelectedApp: (selectedApp: string) => void;
}

function TaskbarContextMenu({ appId, openWindows, setOpenWindows, setSelectedApp}: TaskbarContextMenuProps) {
    const appContextMenuItems: {[key: string]: {id: string, name?:string, onClick?: () => void}[]} = {
        finder: [
            { id: "newfinderwindow", name: "New Finder Window" },
            {id:"divider"},
            { id: "folders", name: "Folders..." },
            { id: "showallwindows", name: "Show All Windows" },
            { id: "hide", name: "Hide" }
        ],
        launchpad: [
            { id: "aboutlaunchpad", name: "About Launchpad" },
            {id:"divider"},
            { id: "hide", name: "Hide" }
        ],
        vscode: [
            { id: "newfile", name: "New File" },
            { id: "openfile", name: "Open File" },
            { id: "savefile", name: "Save File" },
            {id:"divider"},
            { id: "settings", name: "Settings" },
            { id: "extensions", name: "Extensions" },
            {id:"divider"},
            { id: "hide", name: "Hide" }
        ],
        chrome: [

            {
                name: 'New Window',
                id: 'new-window',
                onClick: () => {
                    const windowID = appId + "-" + openWindows.length;
                    setOpenWindows([...openWindows, {id: windowID, type: appId}]);
                    setSelectedApp(appId);
                }
            },
            {
                id: 'divider'
            },
            {
                name: 'Show All Windows',
                id: 'show-all-windows'
            },
            {
                name: 'Hide',
                id: 'hide'
            },
            {
                name:'Quit',
                id: 'quit',
                onClick: () => {
                    setOpenWindows(openWindows.filter(window => window.type !== appId));
                }
            }

        ],
        unity: [
            { id: "newproject", name: "New Project" },
            { id: "openproject", name: "Open Project" },
            { id: "settings", name: "Settings" },
            {id:"divider"},
            { id: "hide", name: "Hide" }
        ],
        steam: [
            { id: "store", name: "Store" },
            { id: "library", name: "Library" },
            { id: "community", name: "Community" },
            { id: "profile", name: "Profile" },
            {id:"divider"},
            { id: "hide", name: "Hide" }
        ],
    }

    return (
        <div className="taskbar-context-menu">
            {appContextMenuItems[appId].map((item, index) => {
                if(item.id === "divider"){
                    return <hr key={index} className="taskbar-context-menu-divider" />
                } else {
                    return <label key={index} className={`taskbar-context-menu-item taskbar-context-menu-item-${item.id}`} onClick={item.onClick}>{item.name}</label>
                }
            })}
            
        </div>
    );
}

export default TaskbarContextMenu;