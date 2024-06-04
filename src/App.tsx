import { useEffect } from 'react'


import './App.css'

function App() {

  useEffect(() => {
    const isMac: boolean = navigator.platform.toUpperCase().indexOf('MAC')>=0;

      if(isMac) {
          //Load Mac Loadup
            window.location.href = "Mac/loadup.html";
      }
      else {
          alert("NateOS is supported on your device");
      }
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
