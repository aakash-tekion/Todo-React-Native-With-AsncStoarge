import React, { Component, createContext } from 'react'
export const TodoFormContext = createContext()
export  class TodoFormContextProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showTodoForm:false,
      addForm:true,
      inputValue:'',
      editKey:''
    }
  }
  setTodoForm = () => {
    this.setState({
      showTodoForm:!this.state.showTodoForm
    })
  }
  setInputValue = (newValue) => {
    this.setState({
      inputValue:newValue
    })
  }
  resetInputValue = () => {
    this.setState({
      inputValue:''
    })
  }
  resetEditKey = () => {
    this.setState({
      inputValue:''
    })
  }
  setEditKey = (key) => {
    this.setState({
      editKey:key
    })
  }
  setEditForm = () =>{
    this.setState({
      addForm:false
    })
  }
  setAddForm = () =>{
    this.setState({
      addForm:true
    })
  }

  render(){
    return (
      <TodoFormContext.Provider value={{
        showTodoForm: this.state.showTodoForm,
        addForm:this.state.addForm,
        inputValue:this.state.inputValue,
        setTodoForm : this.setTodoForm,
        setAddForm :this.setAddForm,
        setEditForm :this.setEditForm,
        setInputValue:this.setInputValue,
        resetInputValue:this.resetInputValue,
        setEditKey:this.setEditKey,
        key:this.state.editKey

      }}>
        {this.props.children}
      </TodoFormContext.Provider>
    )
  }


}

