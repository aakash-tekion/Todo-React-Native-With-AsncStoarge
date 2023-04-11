import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
export const chechIfTodoExist=(todosList,todo,key='')=>{
    let bool = false;
    todosList.forEach(item=>{
        if(item.data.toLowerCase() === todo.toLowerCase() && key!==item.id){
            bool = true
            // alert('Todo exist!!!')
        }
    })
    return bool;
}
export const readUser = async(userName) => {
    let userObject = JSON.parse(await AsyncStorage.getItem(userName))
    return userObject
}
export const readTodos = async(userName,dispatchFunction) => {
    let userObject = JSON.parse(await AsyncStorage.getItem(userName))
    dispatchFunction(userObject['todos'])
}

export const addTodos  = async(userName,todo,dispatchFunction) => {
    let userObject = await readUser(userName)
    let ifTodoExist = chechIfTodoExist(userObject['todos'],todo)
    if(!ifTodoExist){
        userObject['todos'] = [...userObject['todos'], {
            data: todo,
            id: uuid.v4(),
            completed: false
        }]
        await AsyncStorage.setItem(userName,JSON.stringify(userObject))
        console.log(userObject)
        dispatchFunction(userObject['todos'])
    }
    else{
        //login for existing todo
    }
    
}
export const updateTodos  = async(userName,key,dispatchFunction) => {
    let userObject = await readUser(userName)
    userObject['todos'] = userObject['todos'].map(item => {
        if (item.id === key) {
            item.completed = !item.completed
        }
        return item
    })
    await AsyncStorage.setItem(userName,JSON.stringify(userObject))
    console.log(userObject['todos'])
    dispatchFunction(userObject['todos'])
}
export const deleteTodos  = async(userName,key,dispatchFunction) => {
    let userObject = await readUser(userName)
    userObject['todos'] = userObject['todos'].filter(item => {
        return item.id !== key
    })
    await AsyncStorage.setItem(userName,JSON.stringify(userObject))
    dispatchFunction(userObject['todos'])
}
export const editTodos  = async(userName,newContent,key,dispatchFunction) => {
    console.log(newContent,key)
    let userObject = await readUser(userName)
    let bool = chechIfTodoExist(userObject['todos'], newContent, key)
    console.log(bool)
    if (!bool) {
        userObject['todos'] = userObject['todos'].map(item => {
            if (item.id === key) {
                item.data = newContent
            }
            return item
        })
        await AsyncStorage.setItem(userName,JSON.stringify(userObject))
        dispatchFunction(userObject['todos'])
    }
    else{
        //logic for todos
    }
    
}
