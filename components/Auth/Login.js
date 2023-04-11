import React, { Component } from 'react'
import { TextInput, TouchableOpacity, Text, View, StyleSheet,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../../styles/Auth.css.js'
import globalStyles from '../../styles/index.css.js'
import { logIn } from '../../helper/auth.helper.js'
import { readTodos} from '../../helper/todo.helper.js'
import Form from './Form.hoc.js'
class Login extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         userNameInputValue:'',
    //         passwordInputValue:'',
    //         errorDispaly:false
    //     }
       
    // }
    // inputChangeHandler = (text,key)=>{
    //     if(key === 'username'){
    //         this.setState({
    //             ...this.state,
    //             userNameInputValue:text,
    //             errorDispaly:false
    //         })
    //     }
    //     else{
    //         this.setState({
    //             ...this.state,
    //             passwordInputValue:text,
    //             errorDispaly:false
    //         })
    //     }
    // }
    // submitHandler = async() => {
    //     this.setState({
    //         ...this.state,
    //         errorDispaly:true
    //     })
    //     let user = {
    //         'username':this.state.userNameInputValue,
    //         'password':this.state.passwordInputValue
    //     }
    //    logIn(user,this.props.logInSuccess,this.props.logInFailure)
        
    // }
    render() {
        // if(this.props.isAuthenticated){
        //     readTodos(this.props.userName,this.props.readTodo)
        //     this.props.navigation.navigate('TodoScreen')
        // }
        console.log(this.props)
        return (

            <ImageBackground source={require('../../assets/app_bg.png')} style={styles.formContainer}>
                <View style={[styles.form,globalStyles.cardShadow]}>
                    <TextInput style={styles.input} onChangeText={text=>{this.props.handleInputChange('username',text)}} placeholder='Username' />
                    <TextInput style={styles.input} onChangeText={text=>{this.props.handleInputChange('password',text)}} placeholder='Password' />
                    {/* {this.state.errorDispaly?<Text style={this.props.errorMessage!==''?styles.errorMessage:styles.hideItem}>{this.props.errorMessage}</Text> :''} */}
                    <TouchableOpacity style={styles.button} onPress={this.props.handleFormSubmit}>
                        <Text style={styles.buttonText}>log in</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        )
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated:state.AuthReducer.isAuthenticated,
        userName:state.AuthReducer.username,
        errorMessage:state.AuthReducer.errorMessage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logInSuccess : (username) => {dispatch({type:'LOG_IN_SUCCESS',username})},
        logInFailure:(errorMessage)=>{dispatch({type:'LOG_IN_FAILURE',errorMessage})},
        readTodo:(todos)=>{dispatch({type:'READ_TODO',todos})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form(Login))