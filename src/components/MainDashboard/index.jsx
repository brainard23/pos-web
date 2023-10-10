import React from 'react'
import TopBar from '../TopBar'
import Statistics from '../Statistics'

const MainDashboard = () => {
  return (
    <div className='p-10'>
        <div>
            <TopBar />
        </div>
        <div>
            <Statistics />
        </div>
    </div>
  )
}

export default MainDashboard