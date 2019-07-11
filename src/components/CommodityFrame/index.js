import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom'

const { Sider, Content } = Layout;

@withRouter
class index extends Component {
    menuHandle = (item) => {
        this.props.history.push(item.key)
    }
    render() {
        return (
            <Layout>
                <Sider >
                <Menu theme="dark" mode="inline" onClick={this.menuHandle} defaultSelectedKeys={[this.props.location.pathname]}>
                    <Menu.Item key="/admin/commodity/systemhome">
                    <Icon type="video-camera" />
                    <span>系统首页</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/commodity/loginLog">
                    <Icon type="user" />
                    <span>登录信息</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/commodity/systeminfo">
                    <Icon type="upload" />
                    <span>系统信息</span>
                    </Menu.Item>
                    <Menu.Item key="/admin/commodity/usersetting">
                    <Icon type="upload" />
                    <span>用户设置</span>
                    </Menu.Item>
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