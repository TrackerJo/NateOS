import NavbarItem from "./navbar-item";
import "./navbar.css"

import AppleLogo from "../../assets/applelogo.png"
import { useEffect, useState } from "react";


import SearchIcon from "../../assets/search_icon.png"
import Battery from "./Battery/battery";

type NavbarProps = {
    selectedApp: string;
}

function Navbar({ selectedApp}: NavbarProps) {
    const [isNavbarSelected, setIsNavbarSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [batteryCharge, setBatteryCharge] = useState(100);
    const [isBatteryCharging, setIsBatteryCharging] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const appNavbarItems: {[key: string]: {id: string, name: string, isTitle: boolean,submenu: {id: string, name?: string}[]}[]} = {
        finder: [
            { 
                id: "finder", name: "Finder", isTitle: true,submenu: [
                    {
                        id: "aboutfinder", name: "About Finder"
            
                    }
                ] 
            },
            {
                id: "file", name: "File", isTitle: false,submenu: []

            },
            {
                id: "edit", name: "Edit", isTitle: false,submenu: []

            },
            {
                id: "view", name: "View", isTitle: false,submenu: []

            },
            {
                id: "go", name: "Go", isTitle: false,submenu: []

            },
            {
                id: "window", name: "Window", isTitle: false,submenu: []

            },
            {
                id: "help", name: "Help", isTitle: false,submenu: []

            }
            
        ],
        chrome: [
            { 
                id: "chrome", name: "Chrome", isTitle: true,submenu: [
                    {
                        name: 'About Google Chrome',
                        id: 'about'
                    },
                    {
                       id: 'divider'
                    },
                    {
                        name: 'Settings...',
                        id: 'settings'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Clear Browsing Data...',
                        id: 'clearbrowsingdata'
                    },
                    {
                        name: 'Import Bookmarks and Settings...',
                        id: 'import'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Hide Google Chrome',
                        id: 'hide'
                    },
                    {
                        id: 'divider'
                    },
                    {
                        name: 'Quit Google Chrome',
                        id: 'quit'
                    }
                ] 
            }
            
        ]
    }

    const appleSubmenuItems = [
        { id: "aboutthismac", name: "About This Mac" },
        { id: "divider"},
        { id: "systempreferences", name: "System Preferences..." },
        { id: "appstore", name: "App Store..." },

        { id: "divider"},
        { id: "forcequit", name: "Force Quit..." },
        {id:"divider"},
        { id: "sleep", name: "Sleep" },
        { id: "restart", name: "Restart..." },
        { id: "shutdown", name: "Shut Down..." },
        { id: "divider"},
        { id: "lockscreen", name: "Lock Screen" }
        
    ]

    const dayConversion = (day: number) => {
        switch(day){
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
        }
    }

    const monthConversion = (month: number) => {
        switch(month){
            case 0:
                return "Jan";
            case 1:
                return "Feb";
            case 2:
                return "Mar";
            case 3:
                return "Apr";
            case 4:
                return "May";
            case 5:
                return "Jun";
            case 6:
                return "Jul";
            case 7:
                return "Aug";
            case 8:
                return "Sep";
            case 9:
                return "Oct";
            case 10:
                return "Nov";
            case 11:
                return "Dec";
        }
    }
   

    useEffect(() => {
        const seconds = 60 - new Date().getSeconds();

        setTimeout(() => {
            console.log("Setting Date, Timeout");
            setDate(new Date());
            setInterval(() => {
                console.log("Setting Date, Interval");
                setDate(new Date());
            }, 60000);
        }, (seconds * 1000));
       
        navigator.getBattery().then((battery) => {
            const batteryCharge = Math.round(battery.level * 100);
            setBatteryCharge(batteryCharge);
            setIsBatteryCharging(battery.charging);
          
            battery.addEventListener("chargingchange", () => {
                setIsBatteryCharging(battery.charging);
            });



            battery.addEventListener("levelchange", () => {
                setBatteryCharge(battery.level * 100);
            });
            
          });
        }, [])



    return (
        <div className="navbar noselect" >
            <div className="navbar-left">
                <span className="gap"></span>
                <NavbarItem name="Apple" id="apple" icon={AppleLogo} isNavbarSelected={isNavbarSelected} setIsNavbarSelected={setIsNavbarSelected} submenuItems={appleSubmenuItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isTitle={false}/>
                {
                    appNavbarItems[selectedApp].map((item, index) => {
                        return <NavbarItem key={index} name={item.name} id={item.id} isNavbarSelected={isNavbarSelected} setIsNavbarSelected={setIsNavbarSelected} submenuItems={item.submenu} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isTitle={item.isTitle}/>
                    })
                }
            </div>
            <div className="navbar-right">
                <div className="BatteryIcon">
                    <Battery level={batteryCharge} isCharging={isBatteryCharging}/>

                </div>
                
            
                <img src={SearchIcon} alt="Search" id="search"/>
                <div className="dateTime">
                    <label id="date">{dayConversion(date.getDay()) + " " + monthConversion(date.getMonth()) + " " + date.getDate()}</label>
                    <label id="time">{(date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() ) + " " + (date.getHours() >= 12 ? "PM" : "AM")}</label>
                </div>
            </div>
        </div>
    );
}



export default Navbar;