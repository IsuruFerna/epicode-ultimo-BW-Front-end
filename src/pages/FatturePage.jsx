import { Col, Container, Row } from "react-bootstrap";
import ListFattureComp from "../components/FattureRowComp";
import FatturaTabella from "../components/FatturaTabella";

function FatturePage() {
   return (
      <Container>
         <Row>
            <Col>
               <h1>Pagina Fatture</h1>
               <FatturaTabella />
            </Col>
         </Row>
      </Container>
   );
}

export default FatturePage;
