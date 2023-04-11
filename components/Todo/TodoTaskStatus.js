import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/Todo.css'
import { connect } from 'react-redux'
import CompletedIcon from '../../assets/completed.svg'
import UnCompletedIcon from '../../assets/uncompleted.svg'
import globalStyles from '../../styles/index.css'
class TodoTaskStatus extends Component {
    countCompletedTasks = () => {
        let count = 0;
        this.props.todos.map(task => {
            if (task.completed) {
                count++;
            }
        })
        return count;
    }
    render() {
        return (
            <View style={[styles.todoStatusContainer,globalStyles.cardShadow]}>
                <Text style={styles.welcomeMessage}>Welcome {this.props.userName}</Text> 
                <View style={styles.todoStatus}>
                    <CompletedIcon />
                    <Text style={styles.todoStatusText}>
                        Completed Tasks - {this.countCompletedTasks()}
                    </Text>
                </View>
                <View style={styles.todoStatus}>
                    <UnCompletedIcon />
                    <Text style={styles.todoStatusText}>
                        Uncompleted Tasks - {this.props.todos.length - this.countCompletedTasks()}
                    </Text>

                </View>


            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.AuthReducer.username,
        todos: state.TodoReducer.todos
    }
}

export default connect(mapStateToProps, null)(TodoTaskStatus)