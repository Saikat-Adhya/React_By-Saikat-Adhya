import React from 'react'

const ActiveTabs = () => {
    const [tab,setTab] = React.useState(false);
    const handleTabChange = () => {
        setTab(!tab);
    }
  return (
    <div>
        <p>{tab?"This is Home": "This is About"}</p>
        <button onClick={handleTabChange}>{tab?"Home":"About"}</button>
      
    </div>
  )
}

export default ActiveTabs
