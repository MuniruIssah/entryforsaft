import {Col, Image, Input, Form, Row, DatePicker,Upload, Button, Space} from 'antd';
import React from 'react';
import {
  UserOutlined,
  PlusOutlined,
  FileImageOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const Entry = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  const uploadButton = (
    <div>
      <PlusOutlined style={{color:'grey'}} />
      <div style={{ marginTop: 12 ,color:'grey'}}>Upload </div>
    </div>
  );
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Row style={{width: '100%', height: '100%'}}>
        <Col
          md={12}
          style={{
            backgroundColor: 'slateblue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            
            >
            {/* {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{width: '100%'}} />
            ) : (
              
            )} */}
                {uploadButton}
          </Upload>
          <h3 style={{color:'white',fontWeight:'600'}}>Upload Sheikhs Profile</h3>
        </Col>
        <Col md={12}>
          <div
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              padding: 30,
              justifyContent: 'center',
            }}>
            <h1
              style={{
                textAlign: 'left',
                fontSize: 40,
                fontWeight: '900',
                color: 'grey',
              }}>
              STEP 2
            </h1>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off">
              <Form.List name="chapters">
                {(fields, {add, remove}) => (
                  <>
                    {fields.map(({key, name, fieldKey, ...restField}) => (
                      <Space
                        key={key}
                        style={{display: 'flex', marginBottom: 8}}
                        align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, 'chapterTitle']}
                          fieldKey={[fieldKey, 'chapterTitle']}
                          rules={[
                            {required: true, message: 'Missing Chapter Title'},
                          ]}>
                          <Input placeholder="Chapter Title" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'chapter']}
                          fieldKey={[fieldKey, 'chapter']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing Chapter Details',
                            },
                          ]}>
                          <Input placeholder="Chapter Details" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}>
                        Add A Chapter
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%',
                  }}>
                  <Button htmlType="submit" size="large" type="primary">
                    Next
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Entry;
{
  /* <div
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              padding: 30,
              justifyContent: 'center',
            }}>
            <h1 style={{textAlign:'left',fontSize:40,fontWeight:'900',color:'grey'}}>STEP 1</h1>
            <Form layout="vertical">
              <Form.Item
                label="Name of Sheikh"
                name="nameOfSheikh"
                rules={[
                  {required: true, message: 'Please enter the Sheikhs Name!'},
                ]}>
                <Input
                 
                  // value={username}
                  // onChange={(e) => { setUsername(e.target.value) }}
                  placeholder="Enter Sheikh's Name"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                label="Date Of Birth"
                name="dob"
                rules={[
                  {required: true, message: 'Please enter the Sheikhs DOB!'},
                ]}>
                <DatePicker style={{width: '100%'}} />
              </Form.Item>
              <Form.Item
                label="Country Of Origin"
                name="country"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Sheikhs country!',
                  },
                ]}>
                <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
                  <CountryDropdown
                  style={{width:'100%'}}
                    // value={country}
                    // onChange={val => this.selectCountry(val)}
                  />
                  
                </div>
              </Form.Item>
              <Form.Item >
                  <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
                  <Button htmlType='submit' size='large' type='primary'>Next</Button>
                  </div>
              </Form.Item>
            </Form>
          </div> */
}
