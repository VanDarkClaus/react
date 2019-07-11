import React, { Component } from 'react'
import {Card, Button, List, Badge} from 'antd'
import { connect } from 'react-redux'
import { markReaded, allMarkReaded} from '../../actions/noticeAction'

const mapStateProps = state => ({
    state: state.noticeReducers
  })  

@connect(mapStateProps,{ markReaded, allMarkReaded})
class index extends Component {   
  render() {
        return (
            <Card title="通知中心" extra={<Button onClick={() => {
              this.props.allMarkReaded()
            }}>全部标记已读</Button>} style={{ width: '100%' }}>
                <List
                    pagination={true}
                    itemLayout="horizontal"
                    dataSource={this.props.state}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                          title={<Badge dot={!item.isComplated}>{item.title}</Badge>}
                          description={item.description}
                        />
                        {
                          item.isComplated?
                          null:
                          <Button type='primary' onClick={()=>{
                            this.props.markReaded(item.id)
                          }}>标记已读</Button>
                        }
                    </List.Item>
                    )}
                />
            </Card>
        )
    }
}

export default index