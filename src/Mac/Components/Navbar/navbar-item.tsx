import { useState } from "react";
import "./navbar-item.css"
import NavbarSubmenu from "./navbar-submenu";

type NavbarItemProps = {
    icon?: string;
    name: string;
    id: string;
    isNavbarSelected: boolean;
    setIsNavbarSelected: (isNavbarSelected: boolean) => void;
    submenuItems: {id: string, name?: string}[];
    selectedItem: string;
    setSelectedItem: (selectedItem: string) => void;
    isTitle: boolean;


}

function NavbarItem({ icon, name, id, isNavbarSelected, setIsNavbarSelected, submenuItems, selectedItem, setSelectedItem, isTitle }: NavbarItemProps) {



    return (
        <div className={"menu-item " + id + (selectedItem === id ? " menu-item-selected" : "")} onClick={() => {
            setIsNavbarSelected(!isNavbarSelected);

            if(selectedItem === id){
                setSelectedItem("");
            } else {
                setSelectedItem(id);
            }

            document.onclick = (event) => {
                //Check if clicked anywhere outside of the navbar
                if(!document.querySelector(".navbar").contains(event.target as Node)){
                    setIsNavbarSelected(false);
                    setSelectedItem("");
                    document.onclick = null;
                }
            }

        }} onMouseEnter={() => {
            if(isNavbarSelected){

                setSelectedItem(id);
            }
        }} >
            {icon ? <img className="menu-icon" src={icon} alt={name} /> :
            <label className={"menu-item-name " + (isTitle ? "bold" : "")}>{name}</label>}
            {selectedItem === id && <NavbarSubmenu submenuItems={submenuItems} />}

        </div>
    );
}

export default NavbarItem;