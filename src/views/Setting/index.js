import React, { Component } from 'react'
import {SettingFrame} from '../../components'
import {settingRoutes} from '../../routes'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <SettingFrame>
                <Switch>
                {
                    settingRoutes.map(item =>{
                        return <Route
                                    path={item.path}
                                    component={item.component}
                                    key={item.path}
                                />
                    })
                }
                <Redirect from='/admin/setting' to='/admin/setting/systemhome' exact/>
                <Redirect to='/404'/>
                </Switch>
            </SettingFrame>
        )
    }
}
