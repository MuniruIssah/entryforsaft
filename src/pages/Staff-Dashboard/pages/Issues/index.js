import React, { useEffect, useState } from "react";
import { List, Avatar, Skeleton, Button } from "antd";
import "./styles.css";

const dummyList = [{
    username:'Test issue',
    issue:'Issah is testing the issues portal'
}];
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
        // loading={loading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={dummyList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="text"
                key="list-loadmore-more"
                style={{ borderRadius: 5 }}
              >
                Mark as Resolved
              </Button>,
              <Button
                type="text"
                key="list-loadmore-more"
                danger
                style={{ borderRadius: 5 }}
              >
                Delete
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.username}</a>}
                description={item.issue}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StaffIssues;
