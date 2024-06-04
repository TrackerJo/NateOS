import "./navbar-submenu.css"

type NavbarSubmenuProps = {
    submenuItems: {id: string, name?: string}[];
}

function NavbarSubmenu({ submenuItems }: NavbarSubmenuProps) {
    return (
        <div className="submenu">
            {submenuItems.map((item, index) => {
                if(item.id === "divider"){
                    return <hr key={index} className="submenu-divider" />
                }
                return <label key={index} className={"submenu-item " + item.id}>{item.name}</label>
            })}
        </div>
    );
}

export default NavbarSubmenu;