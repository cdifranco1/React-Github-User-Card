import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const UserCard = ({user}) => {
  return (
    <>
      <h1><strong>User: </strong>{user.login}</h1>
      <Card className="mt-4 mx-4" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg alt="user picture" className="w-50 mx-auto" src={user.avatar_url}/>
        <CardBody>
          <CardSubtitle><strong>Profile:  </strong>
            <a href={user.html_url}>{user.html_url}</a>
          </CardSubtitle>
          <CardSubtitle className="mb-3"><strong>Bio: </strong>{user.bio}</CardSubtitle>
          <CardSubtitle><strong>Followers: </strong>{user.followers}</CardSubtitle>
          <CardSubtitle><strong>Following: </strong>{user.following}</CardSubtitle>
          <CardSubtitle><strong>Public Repos: </strong>{user.public_repos}</CardSubtitle>
        </CardBody>
      </Card>
    </>
  )
}

export default UserCard;

