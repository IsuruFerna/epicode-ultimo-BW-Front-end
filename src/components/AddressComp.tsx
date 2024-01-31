import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddressComp() {
   return (
      <Form>
         <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
         </Form.Group>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
               <Form.Label>City</Form.Label>
               <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
               <Form.Label>State</Form.Label>
               <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
               </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
               <Form.Label>Zip</Form.Label>
               <Form.Control />
            </Form.Group>
         </Row>

         <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>

         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   );
}

export default AddressComp;
