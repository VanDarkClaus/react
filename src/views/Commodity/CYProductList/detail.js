import React, { Component } from 'react'
import { Card, Form, Input, Button, DatePicker } from 'antd'

const { TextArea } = Input
@Form.create()
class CYProductDetail extends Component {

    handleSubmit(e) {
        e.preventDefault()
    }

    componentDidMount() {
        console.log(this.props)
        // CY_getProductDetail(this.props.match.params)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            // 栅格系统
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 16
            },
          }
          const tailFormItemLayout = {
            wrapperCol: {
                span: 11,
                offset: 10,
            },
          }

        return (
            <Card>
                <h3><b>书籍详情：</b></h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="书名">
                    {getFieldDecorator('title', {
                        rules: [
                        {
                            required: true,
                            message: '请输入书名!',
                        }
                        ]
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="作者">
                    {getFieldDecorator('author', {
                        rules: [
                        {
                            required: true,
                            message: '请输入作者!',
                        }
                        ]
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="发布时间">
                    {getFieldDecorator('creatAt', {
                        rules: [
                        {
                            required: true,
                            message: '请输入发布时间!',
                        }
                        ]
                    })(<DatePicker onChange={this.onChange} />)}
                    </Form.Item>
                    <Form.Item label="内容概要">
                    {getFieldDecorator('content', {
                        rules: [
                        {
                            required: true,
                            message: '请输入内容!',
                        }
                        ]
                    })(<TextArea rows={4} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button.Group>
                        <Button type="primary" htmlType="submit">
                            修改
                        </Button>
                        <Button type="danger">
                            取消
                        </Button>
                    </Button.Group>
                    
                    </Form.Item>
                </Form> 
            </Card>
        )
    }
}

export default CYProductDetail
