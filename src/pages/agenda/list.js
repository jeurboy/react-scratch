import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'antd'

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