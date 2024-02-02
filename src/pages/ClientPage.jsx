import { Col, Container, Row } from "react-bootstrap";
import ClientTable from "../components/ClientTable";

function ClientPage() {
   return (
      <Container>
         <Row>
            <Col>
               <ClientTable />
            </Col>
         </Row>
      </Container>
   );
}
export default ClientPage;
