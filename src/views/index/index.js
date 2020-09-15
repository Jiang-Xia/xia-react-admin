import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
 function Index() {
    return (
      <div className="index">
        我是首页
        <Button type="primary" icon={<SearchOutlined />}>
            Search
        </Button>
      </div>
    );
  }
  export default Index