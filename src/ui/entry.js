import { Col, Image, Input,Form, Row } from "antd";
import React from "react";
import { UserOutlined,PlusOutlined,FileImageOutlined } from '@ant-design/icons';


const Entry=()=>{
    return( 
        <div style={{width:'100vw',height:'100vh'}}>
            <Row style={{width:'100%',height:'100%'}}>
                <Col md={12} style={{backgroundColor:'slateblue',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <div style={{height:130,width:120,backgroundColor:'ghostwhite',marginBottom:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <FileImageOutlined style={{fontSize:35}}/>
                    </div>
                    <Input bordered={false} color='blue'  type='file' style={{width:250,backgroundColor:'transparent',color:'lightgray'}}/>
                </Col>
                <Col md={12}>
                    <Form layout='vertical' >
                    {/* <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                        <Input
                            size="small"
                            // value={username}
                            // onChange={(e) => { setUsername(e.target.value) }}
                            placeholder="Enter your username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                        </Form.Item> */}

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Entry;