import React, { Component } from 'react'
import { Table, Card, Button, Icon } from 'antd'
import { getListData } from '../../../requests'
//引入moment，该包用于转换时间戳
import moment from 'moment'

export default class index extends Component {
    constructor () {
        super()
        this.state = {
            dataSource: [],
            current: 1,
            pageSize: 10,  
            total: 50,          
            columns: [{
                title: '标题',
                dataIndex: 'title',
              },
              {
                title: '作者',
                dataIndex: 'author',
              },
              {
                title: '发布时间',
                dataIndex: 'createAt',
                render(text){
                  return moment(text).format('YYYY年MM月DD日 HH:mm:ss')
                }

              }, {
                title: '操作',
                dataIndex: 'actions',
                render() {
                  return (
                    <Button.Group>
                      <Button type="primary">
                        <Icon type="edit" />
                        编辑
                      </Button>
                      <Button type="danger">
                        <Icon type="delete" />
                        删除
                      </Button>
                    </Button.Group>
                  )
                }
              }]
        }
    }
    //在挂载完后请求数据
    componentDidMount() {
        getListData()
        .then(res => {
            this.setState({
              dataSource: res.list,
              current: res.currentPage,
              pageSize: res.articleNum,
              total: res.total
            })
            console.log(this.state)
        })
    }
    render() {
      const {
        dataSource,
        columns,
        current,
        pageSize, 
        total  
      } = this.state
        return (
            <Card title="文章列表" extra={<Button type="primary">导出excel</Button>}  bordered={false}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  rowKey='id'
                  pagination={{
                    current,
                    pageSize, 
                    total 
                  }}
                />
            </Card>
        )
    }
}
