import { Col, Container, Row } from "react-bootstrap";
import ClientRegisterFormComp from "../components/ClientRegisterFormComp";

const RegisterClientPage = () => {
   return (
      <>
         <Container>
            <Row>
               <Col className="m-4">
                  <h1 className="mb-5">Client Registration</h1>
                  <ClientRegisterFormComp />
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default RegisterClientPage;
