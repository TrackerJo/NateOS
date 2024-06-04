import { useEffect, useRef, useState } from "react";
import "./GoogleChrome/googleChrome.css";

type MyWindowProps = {
    children: React.ReactNode;
    windowType: string;
    windowTop: number;
    windowLeft: number;
    windowWidth: number;
    windowHeight: number;
    setWindowTop: (top: number) => void;
    setWindowLeft: (left: number) => void;
    setWindowWidth: (width: number) => void;
    setWindowHeight: (height: number) => void;
    isMaximized: boolean;
    onClick: () => void;

}

function MyWindow({ children, windowType, windowTop, windowLeft, windowWidth, windowHeight, setWindowTop, setWindowLeft, setWindowWidth, setWindowHeight, isMaximized, onClick }: MyWindowProps) {
    const windowMinHeight: number = 425;
    const windowMinWidth: number = 625;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   
    const windowElmt = useRef<HTMLDivElement>(null);
    const [resizingWidth, setResizingWidth] = useState<boolean>(false);
    const [resizingHeight, setResizingHeight] = useState<boolean>(false);
    const [resizingBothLR, setResizingBothLR] = useState<boolean>(false);
    const [resizingBothRL, setResizingBothRL] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    

    function dragMouseExit() {
  
        setIsDragging(false);
        setResizingWidth(false);
        console.log('mouse exit')
        document.onmousedown = null;
      }
    
    
      function resizeMouseOver(e) {
      
        e = e || window.event;
      //  //e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        const windowTopLeftX = windowElmt.current!.offsetLeft;
        const windowTopLeftY = windowElmt.current!.offsetTop;
        const windowBottomRightX = windowElmt.current!.offsetLeft + windowElmt.current!.clientWidth;
        const windowBottomRightY = windowElmt.current!.offsetTop + windowElmt.current!.clientHeight;
        const windowBottomLeftX = windowElmt.current!.offsetLeft;
        const windowBottomLeftY = windowElmt.current!.offsetTop + windowElmt.current!.clientHeight;
        const windowTopRightX = windowElmt.current!.offsetLeft + windowElmt.current!.clientWidth;
        const windowTopRightY = windowElmt.current!.offsetTop;
        console.log('Increase top size', windowTopLeftY, pos4);

    
        //console.log(`MouseX: ${pos3} MouseY: ${pos4}, TopLeft: ${windowTopLeftX}, ${windowTopLeftY} TopRight: ${windowTopRightX}, ${windowTopRightY} BottomLeft: ${windowBottomLeftX}, ${windowBottomLeftY} BottomRight: ${windowBottomRightX}, ${windowBottomRightY}` )
        if(pos3 <= windowTopLeftX + 3 && pos3 >= windowTopLeftX && pos4 >= windowTopLeftY + 10 && pos4 <= windowBottomLeftY - 10) {
            console.log('Increase left size');
          
            document.onmousedown = leftResizeMouseDown;
            setResizingWidth(true);
    
        } else if(pos3 <= windowTopRightX && pos3 >= windowTopRightX - 3 && pos4 >= windowTopRightY + 10 && pos4 <= windowBottomRightY - 10) {
          console.log('Increase right size');
          
          document.onmousedown = rightResizeMouseDown;
    
          setResizingWidth(true);
        } else if(pos4 >= windowTopLeftY - 9 && pos4 <= windowTopLeftY-2&& pos3 >= windowTopLeftX + 10 && pos3 <= windowTopRightX - 10) {
         
            console.log('Increase top size', windowTopLeftY, pos4);
            document.onmousedown = topResizeMouseDown;
            setResizingHeight(true);
        
        
        } else if(pos4 <= windowBottomLeftY && pos4 >= windowBottomLeftY - 10 && pos3 >= windowBottomLeftX + 10 && pos3 <= windowBottomRightX - 10) {
            console.log('Increase bottom size', windowBottomLeftY, pos4);
            document.onmousedown = bottomResizeMouseDown;
            setResizingHeight(true);
        
      
        } else if(pos3 <= windowTopLeftX + 3 && pos3 >= windowTopLeftX && pos4 >= windowTopLeftY && pos4 <= windowTopLeftY + 3){
            console.log('Increase top left size');
            document.onmousedown = topLeftResizeMouseDown;
            setResizingBothLR(true);
    
        } else if(pos3 <= windowTopRightX && pos3 >= windowTopRightX - 3 && pos4 >= windowTopRightY && pos4 <= windowTopRightY + 3){
            console.log('Increase top right size');
            document.onmousedown = topRightResizeMouseDown;
            setResizingBothRL(true);
    
    
        } else if(pos3 <= windowBottomLeftX + 3 && pos3 >= windowBottomLeftX && pos4 >= windowBottomLeftY - 3 && pos4 <= windowBottomLeftY){
            console.log('Increase bottom left size');
            document.onmousedown = bottomLeftResizeMouseDown;
            setResizingBothRL(true);
    
        } else if(pos3 <= windowBottomRightX && pos3 >= windowBottomRightX - 3 && pos4 >= windowBottomRightY - 3 && pos4 <= windowBottomRightY){
            console.log('Increase bottom right size');
            document.onmousedown = bottomRightResizeMouseDown;
            setResizingBothLR(true);
    
        }else {
            document.onmousedown = dragMouseDown;
            setResizingWidth(false);
            setResizingHeight(false);
            setResizingBothLR(false);
            setResizingBothRL(false);
    
         
    
        }
      }
    
      function leftResizeMouseDown(e) {
        console.log('left resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseLeftSize;
        // elmnt.onmousemove = null;
      }
    
      function rightResizeMouseDown(e) {
        console.log('right resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseRightSize;
        // elmnt.onmousemove = null;
      }
    
      function topResizeMouseDown(e) {
        console.log('top resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseTopSize;
        // elmnt.onmousemove = null;
      }
    
      function bottomResizeMouseDown(e) {
        console.log('bottom resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseBottomSize;
        // elmnt.onmousemove = null;
      }
    
      function topLeftResizeMouseDown(e) {
        console.log('top left resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseTopLeftSize;
        // elmnt.onmousemove = null;
      }
    
      function topRightResizeMouseDown(e) {
        console.log('top right resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseTopRightSize;
        // elmnt.onmousemove = null;
      }
    
      function bottomLeftResizeMouseDown(e) {
        console.log('bottom left resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseBottomLeftSize;
        // elmnt.onmousemove = null;
      }
    
      function bottomRightResizeMouseDown(e) {
        console.log('bottom right resize mouse down')
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = increaseBottomRightSize;
        // elmnt.onmousemove = null;
      }
    
      function increaseLeftSize(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
    
        pos3 = e.clientX;
        console.log(pos1);
        if(windowElmt.current!.offsetLeft - pos1 <= 8) {
          return;
        }
        // set the element's new position:
    
        setWindowLeft(windowElmt.current!.offsetLeft - pos1);
        setWindowWidth(windowElmt.current!.clientWidth + pos1)
      }
    
      function increaseRightSize(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
    
        pos3 = e.clientX;
        console.log(pos1);
        if(windowElmt.current!.offsetLeft + windowElmt.current!.clientWidth - pos1 >= window.innerWidth - 8) {
          return;
        }
        //Check if width is less than min-width
        if(windowMinWidth > windowElmt.current!.clientWidth - pos1) {
          return;
        }
        // set the element's new position:
    
        setWindowWidth(windowElmt.current!.clientWidth - pos1);
      }
    
      function increaseTopSize(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY;
      
        pos4 = e.clientY;
        console.log(pos2);
        if(windowElmt.current!.offsetTop - pos2 <= 23) {
          return;
        }
    
        //Check if height is less than min-height
        if(windowMinHeight > windowElmt.current!.clientHeight + pos2) {
          return;
        }
    
        // set the element's new position:
        setWindowTop(windowElmt.current!.offsetTop - pos2)
        setWindowHeight(windowElmt.current!.clientHeight + pos2) 
      }
    
      function increaseBottomSize(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY;
    
        pos4 = e.clientY;
        console.log(pos2);
        if(windowElmt.current!.offsetTop + windowElmt.current!.clientHeight - pos2 >= window.innerHeight - 8) {
          return;
        }
  
        setWindowHeight(windowElmt.current!.clientHeight);
        console.log("Window Height")
        console.log(windowHeight);
        if(windowMinHeight >= windowHeight) {
          return;
        }
    
        // set the element's new position:
        setWindowHeight(windowElmt.current!.clientHeight - pos2);
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
    
        if(windowElmt.current!.offsetTop - pos2 <= 23 || windowElmt.current!.offsetLeft - pos1 <= 8) {
          return;
        }
    
        //Check if height is less than min-height
        if(windowMinHeight > windowElmt.current!.clientHeight + pos2) {
          return;
        }
    
        //Check if width is less than min-width
        if(windowMinWidth > windowElmt.current!.clientWidth + pos1) {
          return;
        }
    
        // set the element's new position:
        setWindowTop(windowElmt.current!.offsetTop - pos2);
        setWindowLeft(windowElmt.current!.offsetLeft - pos1);
        setWindowHeight(windowElmt.current!.clientHeight + pos2);
        setWindowWidth(windowElmt.current!.clientWidth + pos1);
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
    
        if(windowElmt.current!.offsetTop - pos2 <= 23 || windowElmt.current!.offsetLeft + windowElmt.current!.clientWidth - pos1 >= window.innerWidth - 8) {
          return;
        }
    
        //Check if height is less than min-height
        if(windowMinHeight > windowElmt.current!.clientHeight + pos2) {
          return;
        }
    
        //Check if width is less than min-width
        if(windowMinWidth > windowElmt.current!.clientWidth - pos1) {
          return;
        }
    
        // set the element's new position:
        setWindowTop(windowElmt.current!.offsetTop - pos2);
        setWindowHeight(windowElmt.current!.clientHeight + pos2);
        setWindowWidth(windowElmt.current!.clientWidth - pos1);
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
    
        if(windowElmt.current!.offsetTop + windowElmt.current!.clientHeight - pos2 >= window.innerHeight - 8 || windowElmt.current!.offsetLeft - pos1 <= 8) {
          return;
        }
    
        //Check if height is less than min-height
        if(windowMinHeight > windowElmt.current!.clientHeight - pos2) {
          return;
        }
    
        //Check if width is less than min-width
        if(windowMinWidth > windowElmt.current!.clientWidth + pos1) {
          return;
        }
    
        // set the element's new position:
        setWindowLeft(windowElmt.current!.offsetLeft - pos1);
        setWindowHeight(windowElmt.current!.clientHeight - pos2);
        setWindowWidth(windowElmt.current!.clientWidth + pos1);
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
    
        if(windowElmt.current!.offsetTop + windowElmt.current!.clientHeight - pos2 >= window.innerHeight - 8 || windowElmt.current!.offsetLeft + windowElmt.current!.clientWidth - pos1 >= window.innerWidth - 8) {
          return;
        }
    
        //Check if height is less than min-height
        if(windowMinHeight > windowElmt.current!.clientHeight - pos2) {
          return;
        }
    
        //Check if width is less than min-width
        if(windowMinWidth > windowElmt.current!.clientWidth - pos1) {
          return;
        }
    
        // set the element's new position:
        setWindowHeight(windowElmt.current!.clientHeight - pos2);
        setWindowWidth(windowElmt.current!.clientWidth - pos1);
      }
      
      function dragMouseDown(e) {
        // elmnt.onmousemove = null;
        e = e || window.event;
        //e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log("Drag mouse down", e.target);
        if(!(e.target.classList.contains('window-draggable')) ) {
          console.log('returning', e.target);
          return;
        }
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        setIsDragging(true);

        
        
      }
    
    
      function elementDrag(e) {
        e = e || window.event;
        //e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(window.innerHeight - windowElmt.current!.clientHeight);
        if(windowElmt.current!.offsetTop - pos2 <= 24 || windowElmt.current!.offsetLeft - pos1 <= 0 || windowElmt.current!.offsetTop - pos2 >= window.innerHeight - windowElmt.current!.clientHeight - 2|| windowElmt.current!.offsetLeft - pos1 >= window.innerWidth - windowElmt.current!.clientWidth - 2){
          // return;
        }
        // set the element's new position:
        setWindowTop(windowElmt.current!.offsetTop - pos2) + "px";
        setWindowLeft(windowElmt.current!.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        setIsDragging(false);
        setResizingWidth(false);
        setResizingHeight(false);
        setResizingBothLR(false);
        setResizingBothRL(false);
        
      }


    return (
        <div onClick={onClick} onMouseDown={dragMouseDown} onMouseMove={resizeMouseOver} onMouseLeave={dragMouseExit} onMouseUp={closeDragElement} className={"window noselect window-open window-active window-draggable " + (isMaximized ? "window-maximized " : "" ) + windowType + (isDragging ? " window-dragging " : " ") + (resizingWidth ? " window-resize-width " : "") + (resizingHeight ? " window-resize-height " : "") + (resizingBothLR ? " window-resize-both-lr ": "") + (resizingBothRL ? " window-resize-both-rl " : "")} style={isMaximized ? {} :{top: `${windowTop}px`, height: `${windowHeight}px`, left: `${windowLeft}px`, width: `${windowWidth}px`}} ref={windowElmt}>
            {children}
        </div>
    );
}

export default MyWindow;