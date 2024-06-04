


import './mac.css'

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Taskbar from './Components/Taskbar/taskbar'
import Navbar from './Components/Navbar/navbar'
import GoogleChromeWindow from './Components/Windows/GoogleChrome/googleChrome'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Mac />
  </React.StrictMode>,
)


function Mac() {
  const [selectedApp, setSelectedApp] = useState<string>('finder')

  const [windows, setWindows] = useState<Map<string, string>[]>(
    []
  )

  const moveToFront = (id: string) => () => {
    setWindows((prevWindows) => {
      const newWindows = prevWindows.filter((window) => window.id !== id)
      newWindows.push({ id, type: 'chrome' })
      return newWindows
    })
  }

  const closeWindow = (id: string, type: string) => () => {
    let nWindows = windows
    nWindows = nWindows.filter((window) => window.id !== id)
    setWindows(nWindows)
    //Set selected app to closest window if the window being closed is the selected app

    if(selectedApp == type){
     
      if(nWindows.length > 0){

        setSelectedApp(nWindows[nWindows.length - 1].type)
      }else{
        setSelectedApp('finder')
      }
    }
  }
    
  return (
    <>
    <Navbar selectedApp={selectedApp}/>
    <div className='windows'>
      {
        windows.map((window) => {
          if (window.type === 'chrome') {
            return <GoogleChromeWindow key={window.id} moveToFront={moveToFront(window.id)} closeWindow={closeWindow(window.id, window.type)}/>
          }
        })
      }
    </div>
    <Taskbar openWindows={windows} setOpenWindows={setWindows} setSelectedApp={setSelectedApp}/>
    </>
  )
}

export default Mac
