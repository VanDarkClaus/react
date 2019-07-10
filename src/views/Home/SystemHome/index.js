import React, { Component } from 'react'
import { Table, Card, Button, Icon } from 'antd'
import { getListData } from '../../../requests'
//引入moment，该包用于转换时间戳
import moment from 'moment'
//引入xlsx，该包用于导出excel文件
import XLSX from 'xlsx'

import {withRouter} from 'react-router-dom'

@withRouter
class index extends Component {
    constructor () {
        super()
        this.state = {
            dataSource: [],
            current: 1,
            pageSize: 10,  
            total: 50,
            data: [],          
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
                render: (text, record) => {
                  return (
                    <Button.Group>
                      <Button type="primary" onClick={
                        () => {
                          this.props.history.push(`/admin/home/systemhome/edit/${record.id}`)
                        }
                      }>
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
    //生成excel文件中的数据格式
    getExcelData = (list) => {
        const data = [['编号', '标题', '作者', '发布时间']]
        list.forEach(item => {
            data.push([item.id, item.title, item.author, moment(item.createAt).format('YYYY年MM月DD日 HH:mm:ss')])
        })
        this.setState({
            data
        })
    }
    //导出excel文件
    exportHandle = () => {

		const ws = XLSX.utils.aoa_to_sheet(this.state.data)
		const wb = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
		XLSX.writeFile(wb, "sheetjs.xlsx")
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
            this.getExcelData(res.list)
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
            <Card title="文章列表" extra={<Button type="primary" onClick={this.exportHandle}>导出excel</Button>}  bordered={false}>
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
export default index