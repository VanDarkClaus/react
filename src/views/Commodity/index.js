import React, { Component } from 'react'
import {HomeFrame} from '../../components'
import {commodityRoutes} from '../../routes'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <HomeFrame>
                <Switch>
                {
                    commodityRoutes.map(item =>{
                        return <Route
                                    path={item.path}
                                    component={item.component}
                                    key={item.path}
                                />
                    })
                }
                <Redirect from='/admin/commodity' to='/admin/commodity/systemhome' exact/>
                <Redirect to='/404'/>
                </Switch>
            </HomeFrame>
        )
    }
}
