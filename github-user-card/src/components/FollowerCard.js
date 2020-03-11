import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const UserCard = ({user, index}) => {
  return (
    <Card key={index} className="mt-4 mx-4" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardImg alt="user picture" src={user.avatar_url}/>
      <CardBody>
        <CardSubtitle><strong>Username: </strong>{user.login}</CardSubtitle>
        <CardSubtitle><strong>Profile:  </strong>
          <a href={user.html_url}>{user.html_url}</a>
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default UserCard;