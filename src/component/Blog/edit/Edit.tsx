import React, { Fragment, useContext, useEffect } from 'react';
import {
    Layout,
    Form,
    Input,
    Button, notification
} from 'antd';
import { blogDataContext } from "./../../../shared/services/shareContext";
import { updateBlogs } from './../../../shared/services/app';
const { TextArea } = Input;
const { Content } = Layout;

const EditComponent: React.FC = () => {
    const { blogData } = useContext(blogDataContext);
    const [form] = Form.useForm();
    useEffect(() => {
        if (!blogData) {
            window.location.href = `http://localhost:3000/app/post`
        } else {
            form.setFieldsValue({ title: blogData.title, description: blogData.body });
        }
    }, []);

    const breadCrum = () => {
        return <Fragment>
            <Layout>
                <div className="title">Blog edit</div>
            </Layout>
        </Fragment>
    }

    const onFinish = async (values: any) => {
        console.log(values);

        try {
            const fetchBlogsData = await updateBlogs(values);
            return fetchBlogsData;
        } catch (error) {
            notification.open({
                message: 'Error',
                description: 'Failed to update blogs'
            })
        }
    };

    return (<Fragment>
        <Layout style={{ marginTop: '15px' }}>
            {breadCrum()}
        </Layout>
        <Layout style={{ marginTop: '15px', background: '#fff', height: '70vh', borderRadius: '10px', }}><br />
            {blogData && <Content style={{ margin: '15px' }}>
                <Form
                    name="basic"
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="title"
                        name="title"
                        rules={[{ required: true, message: "Please input your title!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "Please input your description!" }]}
                    >
                        <TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>&nbsp;
                        <Button htmlType="reset" >reset</Button>
                    </Form.Item>
                </Form>
                {/* <Form
                    name="blogPost"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item label="Input"  rules={[{ required: true, message: 'Please input your title!' }]}>
                        <Input name="title"  defaultValue={blogData.title}/>
                    </Form.Item>
                    <Form.Item label="TextArea" rules={[{ required: true, message: 'Please input your description!' }]}>
                        <TextArea name="description" rows={4} defaultValue={blogData.body}/>
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card" maxCount={1} onPreview={handlePreview}>
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button htmlType="reset">reset</Button>
                        </Space>
                    </Form.Item>
                </Form> */}
            </Content>}
        </Layout>
    </Fragment>);
}

export default EditComponent;