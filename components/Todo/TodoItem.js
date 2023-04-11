import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../../styles/Todo.css.js'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ThreeVerticalDots from '../../assets/three-dots-icon.svg'
import { connect } from 'react-redux';
import { updateTodos } from '../../helper/todo.helper.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteTodos } from '../../helper/todo.helper.js';
import { TodoFormContext } from '../../context/TodoFormContextProvider.js';
import CloseIcon from '../../assets/close.svg'
import EditIcon from '../../assets/edit-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
class TodoItem extends Component {
  static contextType = TodoFormContext
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false
    }
  }
  checkBoxHandler = (todoId) => {
    updateTodos(this.props.username, todoId, this.props.updateTodo)
  }
  editHandler = (key, value) => {
    
    this.context.setEditForm()
    this.context.setInputValue(value)
    if(!this.context.showTodoForm){
      this.context.setTodoForm()
    }
    this.context.setEditKey(key)
    this.setState({
      showOptions: false
    })
  }
  deleteHandler = (key) => {
    deleteTodos(this.props.username, key, this.props.deleteTodo)
    this.setState({
      showOptions: false
    })
  }
  optionsHandler = () => {
    this.setState({
      showOptions: true
    })
  }

  render() {
    let content = !this.state.showOptions ? <View style={[styles.todoItem,styles.itemShadow]}>
      <BouncyCheckbox size={20} fillColor="coral" style={styles.checkBox}
        unfillColor="#FFFFFF" isChecked={this.props.todoData.completed} onPress={() => this.checkBoxHandler(this.props.todoData.id)} />
      <Text style={this.props.todoData.completed ? [styles.todoText, styles.strikedText] : styles.todoText}>
        {this.props.todoData.data}
      </Text>
      <TouchableOpacity onPress={this.optionsHandler}>
        <View style={styles.optionsIcon}><ThreeVerticalDots height={18} width={100} fill={'#616060'} /></View>
      </TouchableOpacity>
    </View> : <View style={[styles.todoItem, styles.optionsBar]}>
      <TouchableOpacity style={styles.optionsTag} onPress={() => { this.editHandler(this.props.todoData.id, this.props.todoData.data) }}>
        <EditIcon height={20} width={20} fill={'#464646'} />
        <Text style={styles.optionsText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsTag} onPress={() => { this.deleteHandler(this.props.todoData.id) }}>
        <DeleteIcon height={18} width={20} fill={'#464646'} />
        <Text style={styles.optionsText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { this.setState({ showOptions: false }) }}>
        <CloseIcon fill={'#616060'} />
      </TouchableOpacity>
    </View>
    return content

  }
}
const mapStateToProps = state => {
  return {
    username: state.AuthReducer.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: (todos) => { dispatch({ type: 'UPDATE_TODO', todos }) },
    deleteTodo: (todos) => dispatch({ type: 'REMOVE_TODO', todos })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
