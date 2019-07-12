import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import {withRouter} from 'react-router-dom'
import {homeRoutes} from '../../routes'

const { Sider, Content } = Layout;

@withRouter
class index extends Component {
    menuHandle = (item) => {
        this.props.history.push(item.key)
    }
    render() {
        return (
            <Layout>
                <Sider width={120}>
                <Menu theme="dark" mode="inline" onClick={this.menuHandle} defaultSelectedKeys={[this.props.location.pathname]}>


                    {/* 该处通过循环渲染更方便简洁 */}
                    {
                        homeRoutes.filter(item => !item.notLeftTable).map(item =>{
                            return(
                                <Menu.Item key={item.path}>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                </Sider>
                <Layout>
              
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
        )
    }
}

export default index