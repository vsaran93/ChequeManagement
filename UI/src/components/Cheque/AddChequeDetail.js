import React from 'react';
import { Card, Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

import Header from '../Header/Header';
import { addNewCheque } from '../../services/ChequeService';

import { numbersOnly } from '../../helper/Helper';

class AddChequeDetail extends React.Component {
    state = {
        formLayout: 'horizontal',
        accountName: '',
        address: '',
        chequeNo: '',
        issuedDate: '',
        chequeDate: '',
        amount: ''
    }
    submitDetails = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let issuedDate = moment(new Date(values.IssuedDate)).toISOString();
                let chequeDate = moment(new Date(values.CheckDate)).toISOString();
                let newCheque = {
                    "AccountName": values.AccountName,
                    "Address": values.Address,
                    "ChequeNo": values.ChequeNo,
                    "IssuedDate": issuedDate,
                    "ChequeDate": chequeDate,
                    "Amount": values.Amount,
                    "IsReceived": true
                }
                addNewCheque(newCheque).then(res => {
                    console.log('getting success', res)
                }).catch(err => {
                    console.log('there is an error', err);
                })
            }
        });
    }
    numberOnly = (e) => {
        
    }
    render() {
        const { formLayout, accountName, issuedDate, amount, chequeDate, chequeNo, address } = this.state;
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
                            })(<Input value={accountName} placeholder="Account holder's Name" />)}
                        </Form.Item>
                        <Form.Item label="Address" {...formItemLayout}>
                            {getFieldDecorator('Address', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Address"
                                    }
                                ]
                            })(<Input value={address} placeholder="Address" />)}
                        </Form.Item>
                        <Form.Item label="Cheque No" {...formItemLayout}>
                            {getFieldDecorator('ChequeNo', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Cheque No"
                                    }
                                ]
                            })(<Input onKeyPress={numbersOnly} value={chequeNo} placeholder="input placeholder" />)}
                        </Form.Item>
                        <Form.Item label="Issued Date" {...formItemLayout}>
                            {getFieldDecorator('IssuedDate', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Issued Date"
                                    }
                                ]
                            })(<DatePicker value={issuedDate} />)}
                        </Form.Item>
                        <Form.Item label="Check Date" {...formItemLayout}>
                            {getFieldDecorator('CheckDate', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Check Date"
                                    }
                                ]
                            })(<DatePicker value={chequeDate} />)}
                        </Form.Item>
                        <Form.Item label="Amount" {...formItemLayout}>
                            {getFieldDecorator('Amount', {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please Enter Amount"
                                    }
                                ]
                            })(<Input value={amount} placeholder="input placeholder" />)}
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