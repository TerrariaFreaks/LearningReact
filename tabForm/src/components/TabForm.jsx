import React, { useState } from 'react'
import Profile from './Profile.jsx'
import Interests from './Interests.jsx'
import Settings from './Settings.jsx'

function TabForm() {
    
  const tabs = [
    {name: "Profile", component: Profile},
    {name: "Interests", component: Interests},
    {name: "Settings", component: Settings}
  ]

  const [activeTab, setActiveTab] = useState(0)
  const ActiveTabComponent = tabs[activeTab].component
  
  const [data, setData] = useState({
    name: "Indrayudh",
    age: 22,
    email: "terrariafreak12@gmail.com",
    interests: ["coding", "music"],
    theme: "dark"
  })

  return (
    <div>
        <div>
            {tabs.map((t, index) => {
                return (<div key={index} onClick={() => setActiveTab(index)}>
                    {t.name}
                </div>)
            })}
        </div>
        <div>
            <ActiveTabComponent data={data} setData={setData}/>
        </div>
        <div>{activeTab == tabs.length-1 &&
            (<button>Submit</button>)}
        </div>
    </div>
  )
}

export default TabForm