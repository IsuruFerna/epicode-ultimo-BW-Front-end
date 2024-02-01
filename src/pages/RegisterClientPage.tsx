import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ClientRegisterFormComp, {
   FormClientRegistrationData,
} from "../components/ClientRegisterFormComp";
import { FormAddress } from "../components/AddressSedeOperativaComp";
import AddressSedeOperativaComp from "../components/AddressSedeOperativaComp";
import AddressSedeLegaleComp from "../components/AddressSedeLegaleComp";
import { useState } from "react";
import { ReduxState } from "./HomePage";
import { useSelector } from "react-redux";

const RegisterClientPage = () => {
   const [formClientRegistrationData, setformClientRegistrationData] =
      useState<FormClientRegistrationData>({
         partitaIva: "",
         nomeContattato: "",
         telefonoContatto: "",
         telefonoAziendale: "",
         emailAziendale: "",
         emailContatto: "",
         pecAziendale: "",
         ragioneSociale: "",
      });

   const [formDataSedeOperativa, setFormDataSedeOperativa] =
      useState<FormAddress>({
         via: "",
         civico: "",
         locality: "",
         CAP: "",
         comune: null,
      });

   const [formDataSedeLegale, setFormDataSedeLegale] = useState<FormAddress>({
      via: "",
      civico: "",
      locality: "",
      CAP: "",
      comune: null,
   });

   const client = useSelector((state: ReduxState) => state.client);

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      setFormDataSedeOperativa({
         ...formDataSedeOperativa,
         comune: client.idIndirizzoSedeOperativa,
      });
      setFormDataSedeLegale({
         ...formDataSedeLegale,
         comune: client.idIndirizzoSedeLegale,
      });
      console.log(
         formClientRegistrationData,
         formDataSedeOperativa,
         formDataSedeLegale
      );
   };

   return (
      <>
         <Container>
            <Row>
               <Col className="m-4">
                  <h1 className="mb-5">Client Registration</h1>
                  <Form onSubmit={handleSubmit}>
                     <ClientRegisterFormComp
                        formClientRegistrationData={formClientRegistrationData}
                        setformClientRegistrationData={
                           setformClientRegistrationData
                        }
                     />
                     <AddressSedeOperativaComp
                        formData={formDataSedeOperativa}
                        setFormData={setFormDataSedeOperativa}
                     />
                     <AddressSedeLegaleComp
                        formData={formDataSedeLegale}
                        setFormData={setFormDataSedeLegale}
                     />
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default RegisterClientPage;
