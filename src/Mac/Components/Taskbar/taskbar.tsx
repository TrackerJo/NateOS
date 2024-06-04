import { useState } from "react";
import "./taskbar.css";
import TaskbarApp from "./taskbar-app";

type TaskbarProps = {
    openWindows: Map<string, string>[];
    setOpenWindows: (openWindows: Map<string, string>[]) => void;
    setSelectedApp: (selectedApp: string) => void;
}


function Taskbar({openWindows, setOpenWindows,setSelectedApp}: TaskbarProps) {
    const [taskbarOpen, setTaskbarOpen] = useState(false);
    const [contextMenuOpen, setContextMenuOpen] = useState("");

    return (
        <>
            <div className="openTaskbar" onMouseEnter={() => {
                setTaskbarOpen(true);
            }}>
            
            </div>
            <div className={"taskbarArea " + (taskbarOpen ? "shown" : "hidden")} onMouseLeave={() => {
                if(!contextMenuOpen)
                setTaskbarOpen(false);
            }}>
                <div className={"taskbar noselect " + (contextMenuOpen && "context-menu-open")}>
                    <div className="taskbar-contents">
                        <TaskbarApp appName="Finder" appId="finder" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>

                        <TaskbarApp appName="Launchpad" appId="launchpad" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>

                        <TaskbarApp appName="VS Code" appId="vscode" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>

                        <TaskbarApp appName="Chrome" appId="chrome" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>

                        <TaskbarApp appName="Unity" appId="unity" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>

                        <TaskbarApp appName="Steam" appId="steam" contextMenuOpen={contextMenuOpen} setContextMenuOpen={setContextMenuOpen} setTaskbarOpen={setTaskbarOpen} openWindows={openWindows} setOpenWindows={setOpenWindows} setSelectedApp={setSelectedApp}/>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Taskbar;