import React, { Component } from 'react'
import { Input, Card, Button, Table, Icon } from 'antd'
import { CY_getProductList } from '../../../CYrequests'
import {withRouter} from 'react-router-dom'
import XLSX from 'xlsx'

const { Search } = Input



@withRouter
class CYProdList extends Component {

constructor() {
    super()
    this.state = {
        bookData: [],
        data: []  // 应该是二维数组
    }
}

// 列
columns = [
    {
        title: '编号',
        dataIndex: 'id'
    },
    {
        title: '图片',
        render: (record) => {
            return (
                <img src={record.image} alt="" />
            )
        }
        
    },
    {
        title: '书名',
        dataIndex: 'title'
    },
    {
        title: '数量',
        dataIndex: 'amount'
    },
    {
        title: '操作',
        dataIndex: 'action',
        render:(text, record, index) => {
            return (
                <Button.Group>
                    <Button onClick={
                        () => {
                            this.props.history.push(`/admin/commodity/cyproductlist/detail/${record.id}`)
                        }
                    }><Icon type="edit" />编辑</Button>
                    <Button type="danger"><Icon type="delete" />删除</Button>
                </Button.Group>
            )
        }
    }
]

// 获取数据列表数据
componentDidMount() {
    CY_getProductList()
        .then(resp => {
            this.setState({
                bookData: resp.list
            })
            // 生成 excel 需要的数据格式
            this.genExcelData(resp.list)
        })
}

// 构建生成 excel 中的数据格式
genExcelData = (list) => {
    const data = [['编号', '图片', '书名', '数量']]
    list.forEach(item => {
        data.push([item.id, item.image, item.title, item.amount])
    })
    
    // 设置更新 data
    this.setState({
        data
    })
}

// 导出 excel 文件
exportFile = () => {
    /*转换 state 到 workbook */
    const ws = XLSX.utils.aoa_to_sheet(this.state.data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "sheetjs.xlsx")
}

    render() {
        return (
            <div>
                <Search placeholder="搜索书籍" onSearch={value => console.log(value)} enterButton />
                <br />
                <br />
                <Card
                    title="书籍列表"
                    extra={<Button type="primary" onClick={this.exportFile}>导出excel</Button>}
                >
                    <Table dataSource={this.state.bookData} columns={this.columns} rowKey="id">
                    </Table>
                </Card>
            </div>
        )
    }
}

export default CYProdList
