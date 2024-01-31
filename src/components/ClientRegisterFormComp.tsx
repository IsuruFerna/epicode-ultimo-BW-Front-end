import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ClientRegisterFormComp() {
   type FormData = {
      partitaIva: string;
      nomeContattato: string;
      telContattato: string;
      telAziendale: string;
      emailAziendale: string;
      emailPec: string;
      regione: string;
   };

   const [formData, setFormData] = useState<FormData>({
      partitaIva: "",
      nomeContattato: "",
      telContattato: "",
      telAziendale: "",
      emailAziendale: "",
      emailPec: "",
      regione: "",
   });

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
      });
   };

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log(formData);
   };

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formGridIVA">
            <Form.Label>Partita IVA</Form.Label>
            <Form.Control
               name="partitaIva"
               onChange={handleInputChange}
               value={formData.partitaIva}
               placeholder="IT 99999999999"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Nome Contattato</Form.Label>
            <Form.Control
               name="nomeContattato"
               onChange={handleInputChange}
               value={formData.nomeContattato}
               placeholder="Marco"
            />
         </Form.Group>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
               <Form.Label>Telefono Contattato</Form.Label>
               <Form.Control
                  name="telContattato"
                  onChange={handleInputChange}
                  value={formData.telContattato}
                  type="tel"
                  placeholder="3341238750"
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneAzienda">
               <Form.Label>Telefono Aziendale</Form.Label>
               <Form.Control
                  name="telAziendale"
                  onChange={handleInputChange}
                  value={formData.telAziendale}
                  type="tel"
                  placeholder="0451238750"
               />
            </Form.Group>
         </Row>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>Email Aziendale</Form.Label>
               <Form.Control
                  name="emailAziendale"
                  onChange={handleInputChange}
                  value={formData.emailAziendale}
                  type="email"
                  placeholder="Email Aziendale"
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPec">
               <Form.Label>Email PEC</Form.Label>
               <Form.Control
                  name="emailPec"
                  onChange={handleInputChange}
                  value={formData.emailPec}
                  type="email"
                  placeholder="Email PEC"
               />
            </Form.Group>
         </Row>

         <Form.Group className="mb-3" controlId="formGridReagion">
            <Form.Label>Regione Sociale</Form.Label>
            <Form.Control
               name="regione"
               onChange={handleInputChange}
               value={formData.regione}
               placeholder="Toscana"
            />
         </Form.Group>

         {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
         </Form.Group> */}

         {/* <Row className="mb-3">
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
         </Row> */}

         {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
         </Form.Group> */}

         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   );
}

export default ClientRegisterFormComp;
