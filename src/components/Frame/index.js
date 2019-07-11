import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './Frame.less'
import {withRouter} from 'react-router-dom'

// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//withRouter包装后为高阶组件，此为装饰着模式高级用法，系统报错
@withRouter
class index extends Component {
    menuHandle = (item) => {
        // console.log(item)
        this.props.history.push(item.key)
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <img src='images/logo.png' className='header-image' alt="logo"/>
                </Header>
                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    onClick={this.menuHandle}
                    defaultSelectedKeys={[this.props.location.pathname]}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="/admin/home">
                            <Icon type="setting" />
                            <span>主页</span>
                        </Menu.Item>
                        <Menu.Item key="/admin/commodity">
                            <Icon type="ordered-list" />
                            <span>商品</span>
                        </Menu.Item>
                        <Menu.Item key="/admin/setting">
                            <Icon type="setting" />
                            <span>设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                    style={{
                        background: '#fff',
                        margin: 0,
                        height: '100%',
                    }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default index