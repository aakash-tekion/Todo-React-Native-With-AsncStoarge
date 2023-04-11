import AsyncStorage from '@react-native-async-storage/async-storage';

export const addUser  = async(userObject,SignInSuccessdispatch,SignInFailureDisptach) => {
    let userFound= await AsyncStorage.getItem(userObject.username)
    userFound = userFound!==null
    if(userFound){
        SignInFailureDisptach('User already exist')
    }
    else{
        try {
            userObject['todos'] = []
            await AsyncStorage.setItem(
              userObject.username,
              JSON.stringify(userObject)
              
            );
            SignInSuccessdispatch(userObject)
          } catch (error) {
            console.log('Async part - '+error)
          }
    }
    
}
export const logIn = async(userObject,logInSuccessDispatch,lognInFailueDispatch)=>{
    let userFound= JSON.parse(await AsyncStorage.getItem(userObject.username))
    let userFoundBool = userFound!==null
    if(userFoundBool){
        if(userFound['password']===userObject.password){
            logInSuccessDispatch(userObject.username)
        }
        else{
            lognInFailueDispatch('Wrong Password')
        }
    }
    else{
        lognInFailueDispatch('User not found')
    }
}