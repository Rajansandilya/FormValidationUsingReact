import React, { Component } from 'react'

export default class Forms extends React.Component{
  constructor(){
    super()
    this.state={
          user:null,
          password:null,
          nameError:"",
          passwordError:""
    }
  }
     valid(){
       if(!this.state.user.includes("@")&&!this.state.password.length<5)
       {
         this.setState({nameError:"invalid Name"})
         this.setState({password:"Password length should be greate than 5"})
       }
     else  if(!this.state.user.includes("@"))
       {
         this.setState({nameError:"invalid Name"})
       }
       if(!this.state.password.length<5)
       {
         this.setState({password:"Password length should be greate than 5"})
       }
       else 
       {
         return true
       }
     }
     submit()
     {
       if(this.valid())
      { 
        alert("form has been submited")
        }
     }


  render()
  {
    return(
      <div>
        <h1>This is form</h1>
        <input type="text" name="user" 
         onChange={(e)=>{this.setState({user:e.target.value})}}
        />
        <br/>
        <p>{this.state.nameError}</p>
        <input type="password" name="password"
          onChange={(e)=>{this.setState({password:e.target.value})}}
        />
        <br></br>
        <p>{this.state.password}</p>
        <button onClick={()=>this.submit()}>Submit</button>
      </div>
    )
  }
}