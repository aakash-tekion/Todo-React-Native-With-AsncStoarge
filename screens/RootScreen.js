import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import TodoContainer from "../components/Todo/TodoContainer";
const ApplicationNavigator = createStackNavigator({
    LoginScreen:{
        screen:Login,
        navigationOptions:{
            title:'Login'
        }
        
    },
    SignUpScreen:{
        screen:Signup,
        navigationOptions:{
            title:'Signup'
        }
    },
    TodoScreen:{
        screen:TodoContainer,
        navigationOptions:{
            title:'Todo'
        }
    }
},{
    defaultNavigationOptions:{
        headerTitleStyle:{
            color:'#fff',
            fontWeight:'bold',
            letterSpacing:1.5,
        },
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'coral'
        }
    }
})
const AppContainer = createAppContainer(ApplicationNavigator)
export default AppContainer 