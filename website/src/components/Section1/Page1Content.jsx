import React from 'react'
import LeftText from './LeftText.jsx'
import RightText from './RightText.jsx'

function Page1Content() {
  return (
    <div className='py-3 px-18 gap-10 flex items-center justify-between h-[90vh]'>
        <LeftText />
        <RightText />
    </div>
  )
}

export default Page1Content