import React, {Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import ShippingAddressForm from '../component/ShippingAddressForm'
import ShippingAddressList from '../component/ShippingAddressList';
import { addAddress, updateForm, deleteFormData } from '../actions'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       show: false,
       edit:false,
       editIndex:0,
       shippingForm:{
         Address:"",
         State:"",
         Zipcode:"",
       }
    }
  }
  handleUpdate= (value, index) => {
    this.props.updateForm({Address:value.Address , State: value.State, Zipcode: value.Zipcode}, this.state.editIndex)
    this.closeForm()
  }
  handleSubmit=(value)=>{
   this.props.addAddress({Address:value.Address , State: value.State, Zipcode: value.Zipcode})
   this.closeForm();
  }
  handleChange = (e) => {
this.setState({
  shippingForm: {
    ...this.state.shippingForm,[e.target.name] : e.target.value
  }
})
  }
  closeForm=()=>{
    this.setState({
      show:false,
      edit:false,
       editIndex:0,
      shippingForm:{
        Address:"",
        State:"",
        Zipcode:"",
      }
    })
  }
  handleEdit = (e) =>{
    const index = parseInt(e.target.name);
    this.setState({
      edit:true,
      editIndex:index,
      show:true,
      shippingForm:this.props.list[index]
    })
  }
  handleDelete = (e) =>{
    const index = parseInt(e.target.name);
    this.props.deleteEntry(index)
  }
  
  render(){
  return (
    <div className="container-fluid">
      <div style={{textAlign:"center"}}>
      <h3><span className="badge badge-info">Addres List CRUD</span></h3>
        <button type="button" className="btn btn-light btn-lg btn-block" onClick={()=>this.setState({show: true})} >Add Shipping Address</button>
      </div>
      {
        this.state.show ? 
        <ShippingAddressForm
       formData={this.state.shippingForm}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
       edit={this.state.edit}
       editIndex={this.state.editIndex}
       UpdateForm={this.handleUpdate}
       list={this.props.list}
       closeForm={this.closeForm}/>:
       <ShippingAddressList list={this.props.list} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
        }
       
    </div>
  );
  }
}
const mapStateToProps = state => ({
  list: state.ShippingAddressList
})

const mapDispatchToProps = dispatch => ({
  addAddress: (data) => dispatch(addAddress(data)),
  updateForm: (data, index) => dispatch(updateForm(data, index)),
  deleteEntry: (index) => dispatch(deleteFormData(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
