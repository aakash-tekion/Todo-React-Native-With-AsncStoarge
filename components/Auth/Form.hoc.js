import React from "react";

export default function Form(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state = {
            }
        }
        handleFormSubmit = () => {
            console.log('Handle Form')
        }
        handleInputChange = (key,value) => {
            this.setState({
                    [key]:value
            })
            
        }
        render(){
            return(
                <WrappedComponent state={this.state} handleInputChange = {this.handleInputChange} handleFormSubmit = {this.handleFormSubmit}/>
            )
        }
    }
}