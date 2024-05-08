import HomeCards from '@/components/HomeCards'
import Navbar from '@/components/Navbar'
import Prompt from '@/components/Prompt'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex-col'>
      <Navbar/>
      <HomeCards/>
      <Prompt/>
    </div>
  )
}

export default Dashboard
