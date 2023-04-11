import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { styles as todoStyles } from '../../styles/Todo.css'
import { styles as inputStyles } from '../../styles/Auth.css'
import { addTodos, editTodos } from '../../helper/todo.helper'
import { connect } from 'react-redux'
import { TodoFormContext } from '../../context/TodoFormContextProvider'
class TodoForm extends Component {
    static contextType = TodoFormContext
    constructor(props){
        super(props)
        
    }
    submitHandler = () => {
        if(this.context.inputValue === ''){
            return
        }
        if(this.context.addForm){
            addTodos(this.props.userName,this.context.inputValue,this.props.addTodo)
        }
        else{
            editTodos(this.props.userName,this.context.inputValue,this.context.key,this.props.editTodo)
            this.context.setAddForm()
            this.context.resetInputValue()   
            this.context.resetEditKey()     
        }
        this.context.setTodoForm()
    }
    render() {
        let buttonText = this.context.addForm?"Add Todo":"Edit Todo"
        return (
            <View style={[inputStyles.form,todoStyles.todoForm]}>
                <TextInput
                    style={[inputStyles.input,todoStyles.input]}
                    onChangeText={text => { this.context.setInputValue(text) }}
                    placeholder='Take control of your day with Todos!'
                    value={this.context.inputValue}
                />
                <TouchableOpacity style={[inputStyles.button,todoStyles.button]} onPress={this.submitHandler}>
                    <Text style={inputStyles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        userName:state.AuthReducer.username
    }
} 

const mapDispatchToProps = dispatch =>{ 
    return {
        addTodo : (todos)=>{dispatch({type:'ADD_TODO',todos})},
        editTodo:(todos) =>{dispatch({ type: 'EDIT_TODO', todos })}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)