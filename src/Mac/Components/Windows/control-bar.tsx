import { useEffect } from "react"
import './control-bar.css'
import ControlIcons from "./control-icons";

type ControlBarProps = {
    visible: boolean;
}

function ControlBar({visible}: ControlBarProps) {
    useEffect(() => {
        //Animate the control bar in

    }, [])
  return (
    <div className={"control-bar " + (!visible ? "hidden" : "")}>
      
    </div>
    )
}

export default ControlBar