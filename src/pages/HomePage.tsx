import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { User } from "../redux/reducers/user";

export type ReduxState = {
   user: User;
};

function HomePage() {
   const user = useSelector((state: ReduxState) => state.user);

   return (
      <Container>
         <Row>
            <Col>
               <h1>Welcome to EPIC ENERGY</h1>
            </Col>
         </Row>
      </Container>
   );
}

export default HomePage;
