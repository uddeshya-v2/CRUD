import React from 'react'

function ShippingAddressList(props) {
    const { list, handleEdit, handleDelete } = props
   
    return (
        <div>
        {
             list.length > 0 ?
        <div>
       <table className="content-table">
         <thead>
        <tr>
          <th>Address</th>
          <th>State</th>
          <th>ZipCode</th>
          <th>Update</th>
        </tr>
        </thead>
        <tbody>
       {
         list.map((value, index)=>
         <tr key={value.Address}>
           <td>{value.Address}</td>
          <td>{value.State}</td>
          <td>{value.Zipcode}</td>
          <td>
              <button type="button" style={{ border:"none", background:"inherit"}} name={index} onClick={handleEdit} >Edit</button>
              <button type="button" style={{ border:"none", background:"inherit"}} name={index} onClick={handleDelete} >Delete</button>
              </td>
          </tr>
         )
       }
       </tbody>
       </table>
       </div>:null
    }
       </div>
        
    )
}

export default ShippingAddressList
