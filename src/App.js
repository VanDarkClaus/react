import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRoutes} from './routes'
import { Frame } from './components'

export default class App extends Component {
    render() {
        return (
            <Frame>
                    <Switch>
                        {
                            adminRoutes.map(item => {
                                return <Route
                                    key={item.path}
                                    component={item.component}
                                    path={item.path}
                                    exact={item.exact}
                                />
                            })
                        }
                        <Redirect from="/admin" to='/admin/home' exact/>
                        <Redirect to="/404" />
                    </Switch>
            </Frame>
        )
    }
}
