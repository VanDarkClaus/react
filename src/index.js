import React from 'react'
import {hydrate} from 'react-dom'
import App from './App'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {mainRoutes} from './routes'
//国际化
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from './store'
import { Provider } from 'react-redux'

hydrate(
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <Router>
                <Switch>
                    <Route path="/admin" render={
                        ()=>{
                            return <App />
                        }
                    }/>
                    {
                        mainRoutes.map(item => {
                            return(
                                <Route
                                    component={item.component}
                                    key={item.component} 
                                    path={item.path}
                                />
                            )
                        })
                    }
                    <Redirect from='/' to='/admin' exact/>
                    <Redirect to='/404'/>        
                </Switch>
            </Router>
        </LocaleProvider>
    </Provider>,
    document.querySelector("#root")
)