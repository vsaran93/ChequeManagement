import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import Header from '../Header/Header';

class AddChequeDetail extends React.Component {
    state = {
        formLayout: 'horizontal',
    }
    submitDetails = (e) => {
        e.preventDefault();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { formLayout } = this.state;
        const formItemLayout =
            formLayout === 'horizontal'
                ? {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                }
                : null;
        const buttonItemLayout =
            formLayout === 'horizontal'
                ? {
                    wrapperCol: { span: 14, offset: 4 },
                }
                : null;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header />
                <Card title="Received Cheque Details">
                    <Form>
                        <Form.Item label="Account Holder's Name" {...formItemLayout}>
                            {getFieldDecorator('AccountName', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Account holder's Name"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Address" {...formItemLayout}>
                            {getFieldDecorator('Address', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Address"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Cheque No" {...formItemLayout}>
                            {getFieldDecorator('ChequeNo', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Cheque No"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Issued Date" {...formItemLayout}>
                            {getFieldDecorator('IssuedDate', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Issued Date"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Check Date" {...formItemLayout}>
                            {getFieldDecorator('CheckDate', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Check Date"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Amount" {...formItemLayout}>
                            {getFieldDecorator('Amount', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Amount"
                                    }
                                ]
                            })(<Input placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button onClick={this.submitDetails} type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(AddChequeDetail);