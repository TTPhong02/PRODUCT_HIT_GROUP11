import React from 'react'
import HeaderPageAdmin from '../../../components/HeaderPageAdmin/HeaderPageAdmin'
import NavigationAdmin from '../../../components/NavigationAdmin/NavigationAdmin'
import TableEvent from './TableEvent'

const EventManagement = () => {
  return (
    <div className="container-admin">
      <HeaderPageAdmin/>
      <div className="main-section">
        <NavigationAdmin/>
        <TableEvent/>
      </div>
    </div>
  )
}

export default EventManagement
