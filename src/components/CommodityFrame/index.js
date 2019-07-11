import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom'

const { Sider, Content } = Layout;

@withRouter
class index extends Component {
    constructor() {
        super()
        this.state = {
            defaultSelectedKeys: '/admin/commodity/cyproductlist'
        }
    }
    menuHandle = (item) => {
        this.props.history.push(item.key)
    }
    render() {
        return (
            <Layout>
                <Sider >
                    <Menu theme="dark" mode="inline" onClick={this.menuHandle} defaultSelectedKeys={[this.state.defaultSelectedKeys]}>
                        <Menu.Item key="/admin/commodity/cyproductlist">
                            <Icon type="unordered-list" />
                            <span>商品列表</span>
                        </Menu.Item>
                        <Menu.Item key="/admin/commodity/cyaddproduct">
                            <Icon type="plus" />
                            <span>添加商品</span>
                        </Menu.Item>
                        <Menu.Item key="/admin/commodity/cyproductlist/detail/:id">
                            <Icon type="dashboard" />
                            <span>商品详情</span>
                        </Menu.Item>
                        <Menu.Item key="/admin/commodity/cyusersetting">
                            <Icon type="setting" />
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