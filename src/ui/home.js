import {
  Avatar,
  List,
  Button,
  Menu,
  Dropdown,
  Drawer,
  Form,
  Input,
} from 'antd';
import React, {useState, useEffect} from 'react';
import {PlusOutlined, CloseOutlined,UserAddOutlined,FileAddOutlined} from '@ant-design/icons';
import {createWithNoFile, getCollection} from '../backend/functions';
import '../App.css';

const Home = () => {
  const [hidden, setHidden] = useState(true);
  const [isSheikh, setIsSheikh] = useState(true);
  const [allQuotes, setAllQuotes] = useState([]);
  const [allSheikhs, setAllSheikhs] = useState([]);

  const [showQuoteDrawer, setShowQuoteDrawer] = useState(false);
  const [quoteState, setQuoteState] = useState({
    author: '',
    reference: '',
    quote: '',
  });
  const data = [];

  useEffect(() => {
    let allQuotes = getCollection('quotes');
    let objAllData = JSON.parse(allQuotes);
    console.log(objAllData);
    setAllQuotes(objAllData);
    let allSheikhs = getCollection('sheikhs');
    let objAllDataSh = JSON.parse(allSheikhs);
    console.log(objAllDataSh);
    setAllSheikhs(objAllDataSh);
  }, []);

  //send quotes
  const handleQuoteSubmit = () => {
    console.log(quoteState);
    createWithNoFile('quotes', quoteState);
  };




  const menu = (
    <Menu>
      <Menu.Item onClick={()=>{setShowQuoteDrawer(true);}}>
         
          <FileAddOutlined/> Add a Quote
    
      </Menu.Item>
      {/* <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/entry">
           <UserAddOutlined/> Add a Sheikh  
        </a>
      </Menu.Item> */}
    </Menu>
  );
  return (
    <div
      className="cover"
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Drawer
        visible={showQuoteDrawer}
        closable={true}
        onClose={() => {
          setShowQuoteDrawer(false);
        }}
         height={450}
        // width={'30%'}
        zIndex={3}
        placement="bottom"
        title="Add a Sheikh's Quote">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Form
            style={{width: '100%'}}
            layout="vertical"
            onFinish={handleQuoteSubmit}>
            <Form.Item label="Sheikh's Name">
              <Input
              size='large'
                style={{width:'min(450px,95vw)'}}
                value={quoteState.author}
                onChange={e => {
                  setQuoteState({
                    ...quoteState,
                    author: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Quote">
              <Input.TextArea
                style={{width:'min(500px,95vw)'}}
                value={quoteState.quote}
                onChange={e => {
                  setQuoteState({
                    ...quoteState,
                    quote: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item label="Reference (if any)">
              <Input
              size='large'
                style={{width:'min(450px,95vw)'}}
                value={quoteState.reference}
                onChange={e => {
                  setQuoteState({
                    ...quoteState,
                    reference: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Add The Quote
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
      <div
        style={{
          width: 'min(950px,95vw)',
          minHeight: '55vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}>
        <Dropdown
        trigger={['click']}
        overlay={menu} 
        placement="topLeft"
        
        >
        <Avatar
          onClick={() => {
            // setHidden(false);
          }}
          icon={<PlusOutlined style={{color: 'grey'}} />}
          style={{backgroundColor: 'white', cursor: 'pointer'}}
        />
        </Dropdown>
        <div style={{height: '50vh', width: '100%', alignItems: 'flex-start'}}>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Button
              type={isSheikh ? 'primary' : 'default'}
              onClick={() => {
                setIsSheikh(true);
              }}
              style={{margin: 10, marginLeft: 0}}>
              All Sheikhs
            </Button>
            <Button
              type={isSheikh ? 'default' : 'primary'}
              onClick={() => {
                setIsSheikh(false);
              }}
              style={{margin: 10, marginLeft: 0}}>
              All Quotes
            </Button>
          </div>
          {isSheikh ? (
            <List
              style={{backgroundColor: 'white'}}
              className="demo-loadmore-list"
              dataSource={allSheikhs}
              renderItem={item => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: 50,
                    borderBottom: '1px solid whitesmoke',
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <span style={{fontWeight: '300'}}>{item.name}</span>
                  <Button
                    type="text"
                    style={{
                      color: '#abbaab',
                      backgroundColor: '#abbaab30',
                      borderRadius: 7,
                    }}>
                    Edit
                  </Button>
                </div>
              )}
            />
          ) : (
            <List
              style={{backgroundColor: 'white', width: '100%'}}
              className="demo-loadmore-list"
              itemLayout="horizontal"
              loadMore={true}
              dataSource={allQuotes}
              renderItem={item => (

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: 50,
                    borderBottom: '1px solid whitesmoke',
                    padding: 15,
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                  <div style={{display: 'flex', flexDirection: 'column',alignItems:'flex-start'}}>
                    <span style={{fontWeight: '400'}}>{item.author}</span>
                    <span style={{fontWeight: '300', color: 'grey'}}>
                      {item.quote}
                    </span>
                  </div>

                  <Button
                    type="text"
                    style={{
                      color: '#abbaab',
                      backgroundColor: '#abbaab30',
                      borderRadius: 7,
                    }}>
                    Edit
                  </Button>
                </div>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
