import React from 'react'
import HeaderPageAdmin from '../../../components/HeaderPageAdmin/HeaderPageAdmin'
import NavigationAdmin from '../../../components/NavigationAdmin/NavigationAdmin'
import TableVoucher from './TableVoucher'


const VoucherManagement = () => {
    const active = "/admin/voucher"
  return (
    <div className="container-admin">
        <HeaderPageAdmin/>
        <div className="main-section">
            <NavigationAdmin active={active}/>
            <TableVoucher/>
        </div>
    </div>
  )
}
export default VoucherManagement
