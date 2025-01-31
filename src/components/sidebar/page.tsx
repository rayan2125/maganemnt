"use client";

import { Avatar, Flex, Splitter, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { UserOutlined } from '@ant-design/icons';
const Desc: React.FC<{ text?: string | number }> = ({ text }) => (
  <Flex justify="center" align="center" style={{ height: "100%" }}>
    <Typography.Text type="secondary" style={{ whiteSpace: "nowrap" }}>
      {text}
    </Typography.Text>
  </Flex>
);
const Profile :React.FC =({})=>(
    <Flex justify="center" align="center" style={{height:'100%'}}>
<Avatar icon={<UserOutlined/>} />
<Typography.Text >
    Ramesh 
</Typography.Text>
    </Flex>
)
const Sidebar: React.FC = () => {
  return (
    <section className="p-10">
      <Splitter style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <Splitter.Panel defaultSize="20%" min="20%" max="70%" className="bg-red-100">
          {/* <Desc text="First" /> */}
          <Profile/>
        </Splitter.Panel>
        <Splitter.Panel>
          <Splitter layout="vertical">
            <Splitter.Panel className="bg-blue-100">
              <Desc text="Second" />
            </Splitter.Panel>
            <Splitter.Panel className="bg-blue-100">
              <Desc text="Third" />
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
      </Splitter>
    </section>
  );
};

export default Sidebar;
