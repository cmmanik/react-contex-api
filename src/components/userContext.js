import React, {createContext} from 'react'

let Context = null;
const {Provider, Consumer} = Context = createContext()


class UserProvider extends React.Component{
    state = {
        user: {
          name: 'Manik Roy',
          email: 'cm.dpi15@gmail.com',
          language: [
            'JavaScript',
            'PHP',
            'Java',
            'Swift'
          ]
        },
        isAuthenticated: true
      }
    
      login = () => {
        this.setState({ isAuthenticated: true })
      }
    
      logout = () => {
        this.setState({ isAuthenticated: false })
      }
    
      addToShowCase = item => {
        const user = { ...this.state.user }
        user.language.push(item)
        this.setState({ user })
      }
    

    render() {
        return(
            <Provider value={{
                ...this.state,
                login:this.login,
                logout:this.logout,
                addToShowCase:this.addToShowCase
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserProvider, Consumer as UserCnsumer, Context as userContext}