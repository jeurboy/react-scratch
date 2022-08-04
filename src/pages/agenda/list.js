import React from 'react'
import { Link } from "react-router-dom";
import { Space, Table, Tag , Row, Col, Card } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const AgendaList = () => {
  return (
    <div>
      <Row>
        <Col>
          <div >
            <Card title="Resource" bordered={false} >
              <p>
                <a href="https://ant.design/components/grid/" target="_blank" rel="noreferrer">Create responsive layout : Ant design grid component</a> <br/>
              </p>
            </Card>
          </div>

          <div >
            <Card title="Example" bordered={false} >
              <p><Link to="/person">Example Ant design table</Link>
              </p>
            </Card>
          </div>
        </Col>
        </Row>
  </div>
  )
}

export default AgendaList