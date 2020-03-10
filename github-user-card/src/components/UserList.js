import React from 'react';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';
import { Row, Col } from 'reactstrap';


const FollowerList = ({users}) => {
  return (
    <>
      <h1 className="mt-3">Followers: </h1>
      <Row sm="3">
        {users.map((user, index) =>
          <Col>
            <FollowerCard index={index} user={user} />
          </Col>
        )}
      </Row>
    </>
    )
  }

export default FollowerList;