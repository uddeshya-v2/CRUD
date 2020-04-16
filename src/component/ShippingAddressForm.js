import React from 'react'
import './ShippingAddressForm.css'

function ShippingAddressForm(props) {
    
    const { handleSubmit, formData, handleChange, closeForm, edit, editIndex, UpdateForm} = props;
    const { Address, State, Zipcode } = formData;
   
   
    const onSubmit=(e)=>{
        e.preventDefault();
        if(edit){
            UpdateForm(formData, editIndex)
        }
        else{
        handleSubmit(formData);
        }
    }
    return (
        <div className="bg-modal">
          <div>
          <form  onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className='form-control' id="address" name="Address" required value={Address} onChange={handleChange}/>
               </div>
               <div className="form-group"> 
                <label htmlFor="state">State</label>
                <input type="text" className='form-control' autoComplete="off" id="state" name="State" required value={State} onChange={handleChange} />
                </div>
                <div className="form-group"> 
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" className='form-control' id="zipcode" name="Zipcode" required value={Zipcode} onChange={handleChange} />
                </div>
                <div style={{textAlign:"center"}}>
                    <button type="submit" className="btn btn-outline-success m-2" >{edit?"Update Form":"Submit Form"}</button>
                    <button type="button" className="btn btn-outline-dark m-2" onClick={closeForm} >Close Form</button>
                </div>
          </form>
          </div>  
        </div>
    )
}

export default ShippingAddressForm
