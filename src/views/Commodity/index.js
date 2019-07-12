import React, { Component } from 'react'
import { CommodityFrame } from '../../components'
import {commodityRoutes} from '../../routes'
import {Route, Switch, Redirect} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <CommodityFrame>
                <Switch>
                {
                    commodityRoutes.map(item =>{
                        return <Route
                                    path={item.path}
                                    component={item.component}
                                    key={item.path}
                                    exact= {item.exact}
                                />
                    })
                }
                <Redirect from='/admin/commodity' to='/admin/commodity/cyproductlist' exact/>
                <Redirect to='/404'/>
                </Switch>
            </CommodityFrame>
        )
    }
}
