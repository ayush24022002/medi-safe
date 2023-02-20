import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            age: "",
            mail: "",
            phone: "",
            gender: "",
            disease: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
    agehandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }



    mailhandler = (event) => {
        this.setState({
            mail: event.target.value
        })
    }




    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    diseasehandler = (event) => {
        this.setState({
            disease: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.fullName}  Registered Successfully !`)
        console.log(this.state);
        this.setState({
            fullName: "",
            age: "",
            mail: "",
            phone: '',
            gender: "",
            disease: "",
        })
     event.preventDefault()
        
    }

    mainhandler = (event) => {
        
    }  






    render() {
        return (
            <div className='mainbody'>

                <form onSubmit={this.handleSubmit}>
                    <h1>Patient Details</h1>
                    <label className='ip1'>Full Name :</label> 
                    <input className='op' color='red' type="text" value={this.state.fullName} onChange={this.firsthandler} placeholder="  FullName..." />
                    <br />
                    
                    <label className='ip2'>Age :</label> 
                    <input className='op' type="text" value={this.state.age} onChange={this.agehandler} placeholder=" Age..." />
                    <br />
                    
                    <label className='ip3'>Mail  :</label> 
                    <input className='op' type="text" value={this.state.mail} onChange={this.mailhandler} placeholder=" Mail..." />
                    <br />
                    
                    <label className='ip4'>Phone :</label> 
                    <input className='op' type="text" value={this.state.phone} onChange={this.phonehandler} placeholder=" Phone..." />
                    <br />
                    
                    <label className='ip5'>Gender : </label>
                    <select className='op' onChange={this.genderhandler} defaultValue=" Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <label className='ip6'>Disease : </label>
                    <select className='op' onChange={this.diseasehandler} defaultValue="Select Disease">
                        <option defaultValue>Select Disease</option>
                        <option value="heart">Heart</option>
                        <option value="leg">Leg</option>
                        <option value="spine">Back/Spine</option>
                        <option value="hair">Hair</option>
                        <option value="skin">Skin</option>
                        <option value="dental">Dental</option>
                    </select><br />



                    <input className='sub' type="submit" onClick={this.mainhandler} value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
