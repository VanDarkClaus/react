import React, { Component, createRef } from 'react'
import {
        Card,
        Button,
        Form,
        InputNumber,
        Input,
        DatePicker
    } from 'antd';
import {getListDetails} from '../../../../requests'
import moment from 'moment'
import E from 'wangeditor'

@Form.create({})
class index extends Component {
    constructor() {
        super()
        this.editRef = createRef()
    }
    componentDidMount(){
        this.initEditor()
        this.getData()
    }
    //初始化富文本编辑器
    initEditor = () => {
        const editor = this.editor = new E(this.editRef.current)
        this.props.form.setFieldsValue({
            articleContent: this.articleContent
        })
        editor.customConfig.onchange = html => {
            this.props.form.setFieldsValue({
                articleContent: html
            })
          }
        editor.create();
    }
    //请求数据
    getData = () =>{
        getListDetails(this.props.match.params.id)
        .then(resp => {
            const {
                title,
                amount,
                articleContent,
                author,
                createAt
            } = {...resp.data.res_body.data, createAt: moment(resp.data.res_body.data.createAt)}
            this.articleContent =articleContent
            this.props.form.setFieldsValue({
                title,
                amount,
                articleContent,
                author,
                createAt
            })
        })
    }
    //提交表单
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((errors, values) => {
           if(errors){//如果存在错误不提交
                console.log('有错')
                return
           } else {
                return
                //此处应该将value提交出去
           }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        //栅格系统布局说明
        const formItemLayout = {
            labelCol: {//t提示文本所占的列数
                span: 2
              },
              wrapperCol: {//输入控件所占的列数
                span: 22
              },
        }
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          }
          //时间匹配规则
        const config = {
        rules: [{ type: 'object', required: true, message: '请输入时间' }],
        };
        return (
            <div>
                <Card title="编辑" extra={<Button type="primary">取消</Button>} style={{ width: '100%' }}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="标题">
                        {getFieldDecorator('title', {
                            rules: [
                            {
                                required: true,
                                message: '请输入标题',
                            },
                            ],
                        })(<Input />)}
                        </Form.Item>

                        <Form.Item label="作者">
                        {getFieldDecorator('author', {
                            rules: [
                            {
                                required: true,
                                message: '请输入作者',
                            },
                            ],
                        })(<Input />)}
                        </Form.Item>
                        
                        <Form.Item label="日期">
                        {getFieldDecorator('createAt', config)(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                        )}
                        </Form.Item>

                        <Form.Item label="阅读量">
                        {getFieldDecorator('amount', {
                            rules: [
                            {
                                type: 'number',
                                message: '请输入数字',
                            },
                            {
                                required: true,
                                message: '请输入标题',
                            },
                            ],
                        })(<InputNumber />)}
                        </Form.Item>

                        <Form.Item label="内容">
                        {getFieldDecorator('articleContent', {
                            rules: [
                            {
                                required: true,
                                message: '请输入内容',
                            },
                            ],
                        })(<div ref={this.editRef}/>)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default index