import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export type FormClientRegistrationData = {
   partitaIva: string;
   nomeContattato: string;
   telefonoContatto: string;
   telefonoAziendale: string;
   emailAziendale: string;
   emailContatto: string;
   pecAziendale: string;
   ragioneSociale: string;
};

type FormProps = {
   formClientRegistrationData: FormClientRegistrationData;
   setformClientRegistrationData: React.Dispatch<
      React.SetStateAction<FormClientRegistrationData>
   >;
};

const ClientRegisterFormComp: React.FC<FormProps> = ({
   formClientRegistrationData,
   setformClientRegistrationData,
}) => {
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setformClientRegistrationData({
         ...formClientRegistrationData,
         [event.target.name]: event.target.value,
      });
   };

   return (
      <>
         {/* <Form onSubmit={handleSubmit}> */}
         <Form.Group className="mb-3" controlId="formGridIVA">
            <Form.Label>Partita IVA</Form.Label>
            <Form.Control
               name="partitaIva"
               onChange={handleInputChange}
               value={formClientRegistrationData.partitaIva}
               placeholder="IT 99999999999"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Nome Contattato</Form.Label>
            <Form.Control
               name="nomeContattato"
               onChange={handleInputChange}
               value={formClientRegistrationData.nomeContattato}
               placeholder="Marco"
            />
         </Form.Group>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
               <Form.Label>Telefono Contattato</Form.Label>
               <Form.Control
                  name="telefonoContatto"
                  onChange={handleInputChange}
                  value={formClientRegistrationData.telefonoContatto}
                  type="tel"
                  placeholder="3341238750"
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneAzienda">
               <Form.Label>Telefono Aziendale</Form.Label>
               <Form.Control
                  name="telefonoAziendale"
                  onChange={handleInputChange}
                  value={formClientRegistrationData.telefonoAziendale}
                  type="tel"
                  placeholder="0451238750"
               />
            </Form.Group>
         </Row>

         <Form.Group className="mb-3" controlId="formGridEmailContatto">
            <Form.Label>Email Contatto</Form.Label>
            <Form.Control
               name="emailContatto"
               onChange={handleInputChange}
               value={formClientRegistrationData.emailContatto}
               type="email"
               placeholder="Email Contatto"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridEmailAziendale">
            <Form.Label>Email Aziendale</Form.Label>
            <Form.Control
               name="emailAziendale"
               onChange={handleInputChange}
               value={formClientRegistrationData.emailAziendale}
               type="email"
               placeholder="Email Aziendale"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridPec">
            <Form.Label>Email PEC</Form.Label>
            <Form.Control
               name="pecAziendale"
               onChange={handleInputChange}
               value={formClientRegistrationData.pecAziendale}
               type="email"
               placeholder="Email PEC"
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formGridReagion">
            <Form.Label>Regione Sociale</Form.Label>
            <Form.Control
               name="ragioneSociale"
               onChange={handleInputChange}
               value={formClientRegistrationData.ragioneSociale}
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

         {/* <Button variant="primary" type="submit">
            Submit
         </Button> */}
         {/* </Form> */}
      </>
   );
};

export default ClientRegisterFormComp;
