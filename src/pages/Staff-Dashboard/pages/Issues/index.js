import React, { useEffect, useState } from "react";
import { List, Avatar, Skeleton, Button, Divider } from "antd";
import "./styles.css";

const dummyList = [{
    username:'Test issue',
    issue:'Issah is testing the issues portal'
},
{
  username:'Test issue 2',
  issue:'Issah is testing the issues portal'
}
];
const StaffIssues = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 1500);
    }, [])

  return (
    <div className="staffIssues">
      <h1>Issues</h1>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        loadMore={true}
        dataSource={dummyList}
        renderItem={(item) => (
          <List.Item
            actions={[
             
            ]}
          >
            <Skeleton  title={false} loading={loading} active>
              {/* <List.Item.Meta
                title={item.username}
                description={item.issue}
              /> */}
              <div>
                <h3>{item.username}</h3>
                <span>{item.issue}</span>
              </div>
            
            </Skeleton>
            <Button
                type="text"
                key="list-loadmore-more"
                style={{ borderRadius: 5 }}
              >
                Resolve
              </Button>|
              <Button
                type="text"
                key="list-loadmore-more"
                danger
                style={{ borderRadius: 5 }}
              >
                Delete
              </Button>
              <Divider/>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StaffIssues;
