import React from 'react'

const menu = [
   {title: 'Dashboard'},
   {title: 'Purchase'},
   {title: 'Products'},
   {title: 'Transactions'},
   {title: 'Reports'},
]
const settings = [
    {title: 'Settings'}, 
    {title: 'Help'},
  
 ]
const SideBar = () => {
  return (
    <div className='bg-[#7C41F5]' style={{width: 240}}>
        <div className='flex p-2'>Inventory App</div>
        <div className='block'>
            {menu.map((menuItem) => (
                <div className='p-4 text-white'>{menuItem.title}</div>
            ))}
        </div>
        <hr className='my-14'/>
        <div className='block'>
            {settings.map((menuItem) => (
                <div className='p-4 text-white'>{menuItem.title}</div>
            ))}
        </div>
    </div>
  )
}

export default SideBar