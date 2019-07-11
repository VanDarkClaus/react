import React, { Component } from 'react'
import {Card, Button, List, Avatar} from 'antd'

export default class index extends Component {   
    render() {
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
          ];
          
        return (
            <Card title="通知中心" extra={<Button>全部标记已读</Button>} style={{ width: '100%' }}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <Button type='primary'>标记已读</Button>
                    </List.Item>
                    )}
                />
            </Card>
        )
    }
}
