import { Avatar, List, Space ,Button, message,Drawer} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined,CloseOutlined } from '@ant-design/icons';



const Home = () => {
    const [hidden,setHidden]=useState(true);
    const [isSheikh,setIsSheikh]=useState(true);
    const [showQuoteDrawer,setShowQuoteDrawer]=useState(false)

    return (
        <div style={{position:'relative', width: '100vw',minHeight:'100vh', height: 'auto', backgroundColor:'palevioletred', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Drawer 
            visible={showQuoteDrawer}
            closable={true}
            onClose={()=>{setShowQuoteDrawer(false)}}
            height={300}
            zIndex={3}
            placement='bottom'
            title="Add a Sheikh's Quote"
            
            >
                

            </Drawer>
           
           {!hidden&&<div  style={{position:'absolute',top:20,width:'min(300px,70vw)',padding:15,backgroundColor:'white',zIndex:2}}>
           <Avatar size={15} onClick={()=>{setHidden(true)}} icon={<CloseOutlined  style={{ color:'white' }} />}  style={{ backgroundColor: 'lightcoral',cursor:'pointer',marginBottom:5}} />

                <p style={{color:'steelblue',}}>
                    Add one of these
                
                </p>
                <div style={{display:'flex',justifyContent:'space-evenly',marginTop:20}}>
                    <Link to='/entry'><Button size='small' type='primary'>A Sheikh</Button></Link>
                    
                    <Button size='small' onClick={()=>{setShowQuoteDrawer(true);setHidden(true)}}>A Quote</Button>

                </div>
           </div>}
           
            <div style={{ width:'min(950px,95vw)', height: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',justifyContent:'space-around' }}>
                
                <Avatar size='small' onClick={()=>{setHidden(false)}} icon={<PlusOutlined  style={{ color:'palevioletred' }} />}  style={{ backgroundColor: 'white',cursor:'pointer'}} />
                <div style={{ height: '50vh',width:'100%',alignItems:'flex-start'}}>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <Button type={isSheikh?'primary':'default'} onClick={()=>{setIsSheikh(true)}} style={{margin:10,marginLeft:0}}>Shuyuukh</Button>
                    <Button type={isSheikh?'default':'primary'} onClick={()=>{setIsSheikh(false)}}  style={{margin:10,marginLeft:0}}>Quotes</Button>

                </div>
                <div style={{ height: '40vh', backgroundColor: 'white' ,width:'100%',}}>
                    <List>

                    </List>
                </div>
                </div>
               
           

            </div>

        </div>
    );
}

export default Home;