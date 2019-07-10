import React, { Component } from 'react'
import {HomeFrame} from '../../components'
import {homeRoutes} from '../../routes'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <HomeFrame>
                <Switch>
                {
                    homeRoutes.map(item =>{
                        return <Route
                                    path={item.path}
                                    component={item.component}
                                    key={item.path}
                                />
                    })
                }
                <Redirect from='/admin/home' to='/admin/home/systemhome' exact/>
                <Redirect to='/404'/>
                </Switch>
            </HomeFrame>
        )
    }
}
