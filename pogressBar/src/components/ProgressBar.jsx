import React, { useEffect, useState } from 'react'
import '../App.css'

function ProgressBar({progress}) {
    const [animatedProgress, setAnimatedProgress] = useState(0)
    useEffect(()=>{
        setTimeout(()=>setAnimatedProgress(progress), 100)
    }, [progress])

  return (
    <div className='outer'>
        <div className='inner' style={//{width: `${progress}%`}
        {transform: `translateX(${animatedProgress - 100}%)`}
        }>
         {progress}%   
        </div>
    </div>
  )
}

export default ProgressBar
