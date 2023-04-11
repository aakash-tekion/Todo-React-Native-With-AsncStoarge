import React, { Component } from 'react'
import { FlatList, View, Text,StyleSheet } from 'react-native'
import TodoItem from './TodoItem'
import { styles } from '../../styles/Todo.css.js'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={styles.todoList}>
                <FlatList data={this.props.todoList} keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return <TodoItem  todoData={item}/>
                    
                }}/>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        todoList : state.TodoReducer.todos
    }
}

export default connect(mapStateToProps,null)(TodoList)

