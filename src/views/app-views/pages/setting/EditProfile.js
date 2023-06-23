import React, { Component } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'

export class EditProfile extends Component {

    avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

    state= {
        name: 'Charlie Howard',
        username: "Bret",
        email: 'charlie.howard@themenate.com',
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        },
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    render() {

        const onFinish = values => {
            const key = 'updatable';
            message.loading({ content: 'Updating...', key });
            setTimeout(() => {
                this.setState({
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    address: {
                        street: values['address.street'],
                        suite: values['address.suite'],
                        city: values['address.city'],
                        zipcode: values['address.zipcode'],
                        geo: {
                            lat: values['address.geo.lat'],
                            lng: values['address.geo.lng'],
                        }
                    },
                    phone: values.phone,
                    website: values.website,
                    company: {
                        name: values['company.name'],
                        catchPhrase: values['company.catchPhrase'],
                        bs: values['company.bs'],
                    },
                })
                message.success({ content: 'Done!', key, duration: 1 });
            }, 1000);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const { name, username, email, address, phone, website, company } = this.state;

        return (
            <>
                <div>
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'username': username,
                                'email': email,
                                'address.street': address.street,
                                'address.suite': address.suite,
                                'address.city': address.city,
                                'address.zipcode': address.zipcode,
                                'address.geo.lat': address.geo.lat,
                                'address.geo.lng': address.geo.lng,
                                'phone': phone,
                                'website': website,
                                'company.name': company.name,
                                'company.catchPhrase': company.catchPhrase,
                                'company.bs': company.bs,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!'
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phone"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Address Street"
                                            name="address.street"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Address City"
                                            name="address.city"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Address Suite"
                                            name="address.suite"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Address Zipcode"
                                            name="address.zipcode"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <Form.Item
                                            label="Address Latitude"
                                            name="address.geo.lat"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <Form.Item
                                            label="Address Longitude"
                                            name="address.geo.lng"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Company Name"
                                            name="company.name"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Company Catch Phrase"
                                            name="company.catchPhrase"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Company Tags"
                                            name="company.bs"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditProfile
