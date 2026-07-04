import React, {useContext} from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { Playercontext } from './context/Playercontext'
 

const App = () => {
  const { audioRef,track} = useContext(Playercontext)
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref ={audioRef} src={track.file} preload="auto"></audio> // using this reference we can pause, play, change the track of audio file
    </div>
  )
}

export default App

