import React, { Component } from 'react'
import { TextInput, TouchableOpacity, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../../styles/Auth.css.js'
import { addUser } from '../../helper/auth.helper.js'
import globalStyles from '../../styles/index.css.js'
class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            userNameInputValue:'',
            passwordInputValue:'',
            errorDispaly:false
        }
       this.submitHandler = this.submitHandler.bind(this)
    }
    inputChangeHandler = (text,key)=>{
        if(key === 'username'){
            this.setState({
                ...this.state,
                errorDispaly:false,
                userNameInputValue:text
            })
        }
        else{
            this.setState({
                ...this.state,
                errorDispaly:false,
                passwordInputValue:text
            })
        }
       
    }
    submitHandler = () => {
        this.setState({
            ...this.state,
            errorDispaly:true
        })
        let user = {
            'username':this.state.userNameInputValue,
            'password':this.state.passwordInputValue
        }
        addUser(user,this.props.signInSuccess,this.props.signInFailure)
        
    }
    render() {
        if(this.props.isAuthenticated){
            this.props.navigation.navigate('TodoScreen')
        }
        return (
            <ImageBackground source={require('../../assets/app_bg.png')} style={styles.formContainer}>
                <View style={[styles.form,globalStyles.cardShadow]}>
                    <TextInput style={styles.input} onChangeText={text=>{this.inputChangeHandler(text,'username')}} placeholder='Username' />
                    <TextInput style={styles.input} onChangeText={text=>{this.inputChangeHandler(text,'password')}} placeholder='Password' />
                    {this.state.errorDispaly?<Text style={this.props.errorMessage!==''?styles.errorMessage:styles.hideItem}>{this.props.errorMessage}</Text> :''}
                    <TouchableOpacity style={styles.button} onPress={this.submitHandler}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        isAuthenticated: state.AuthReducer.isAuthenticated,
        userName:state.AuthReducer.username,
        errorMessage: state.AuthReducer.errorMessage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signInSuccess : (userObj) => {dispatch({type:'SIGN_UP_SUCCESS',user:userObj})},
        signInFailure : (errorMessage) => {dispatch({type:'SIGN_UP_FAILURE',errorMessage})},
        readTodo: (username) => {dispatch({type:'READ_TODO',username})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup)