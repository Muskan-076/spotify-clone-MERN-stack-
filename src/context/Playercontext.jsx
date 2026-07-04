import { createContext , useRef, useState} from "react";
import { songsData } from "../assets/assets";
export const Playercontext = createContext();

const PlayercontextProvider = ( props ) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    // we'll create the state variables to manage the project state

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0,
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const contextValue = {//whtever func aur state we'll create in this, we can access in any other component
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time, setTime,
        play,pause
    }
    return(
        <Playercontext.Provider value={contextValue}>
            {props.children}
        </Playercontext.Provider>
    )
}

export default PlayercontextProvider;