import './Profile.css'
import AllCards from '../../featurs/cards/AllCards';
import { useContext } from 'react';
import { UsersContext } from '../../../contexts/UsersProvaider';
import { Col, Row } from "react-bootstrap"


export default function Profile() {
  const {Users}=useContext(UsersContext)
  console.log(Users?.result);
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {Users.result?.map(item => (
          <Col key={item.id}>
            <AllCards users={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}