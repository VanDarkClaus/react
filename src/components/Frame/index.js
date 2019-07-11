import React, { Component } from 'react'
import { Layout, Menu, Icon, Dropdown, Avatar, Badge } from 'antd';
import './Frame.less'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const { Header, Content, Sider } = Layout;


//withRouter包装后为高阶组件，此为装饰着模式高级用法，系统报错
const mapStateProps = state =>({
    notice: state.noticeReducers
})

@withRouter
@connect(mapStateProps)
class index extends Component {
    //编程导航跳转功能
    menuHandle = (item) => {
        this.props.history.push(item.key)
    }
    //此为下拉菜单参数
    menu = () =>{
        return(
            <Menu onClick={this.menuHandle}>
            <Menu.Item key="/admin/notice">
                <Badge dot={Boolean(this.props.notice.filter(item => !item.isComplated).length !== 0)}>
                    通知中心
                </Badge>
            </Menu.Item>
            <Menu.Item key="/admin/home/usersetting">
                用户设置
            </Menu.Item>
            <Menu.Item key='/login'>
                退出登录
            </Menu.Item>
            </Menu>
        )
    };
    render() {
        return (
            <Layout>
                <Header className="header">
                    <img src='images/logo.png' className='header-image' alt="logo"/>
                    <Dropdown overlay={this.menu} trigger={['click','hover']}>
                        <div>
                        <Badge count={this.props.notice.filter(item => !item.isComplated).length}>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                            <span>欢迎你：嘻嘻嘻</span>
                            <Icon type="down" />
                        </Badge>
                        </div>
                    </Dropdown>
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
                <Layout style={{ padding: '24px' }}>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
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