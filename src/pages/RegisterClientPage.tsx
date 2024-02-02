import {
   Button,
   Col,
   Container,
   FloatingLabel,
   Form,
   Row,
} from "react-bootstrap";
import ClientRegisterFormComp, {
   FormClientRegistrationData,
} from "../components/ClientRegisterFormComp";
import { FormAddress } from "../components/AddressSedeOperativaComp";
import AddressSedeOperativaComp from "../components/AddressSedeOperativaComp";
import AddressSedeLegaleComp from "../components/AddressSedeLegaleComp";
import { useState } from "react";
import { ReduxState } from "./HomePage";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../useLocalStorage";

const RegisterClientPage = () => {
   const { getUser } = useLocalStorage("value");

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

   const [workType, setWorkType] = useState("");

   const request: object = {
      addressSedeLegale: {
         via: "",
         civico: "",
         locality: "",
         CAP: "",
         comune: "",
      },
      addressSedeOperativo: {
         via: "",
         civico: "",
         locality: "",
         CAP: "",
         comune: "",
      },
      partitaIva: "",
      nomeContatto: "",
      telefonoContatto: "",
      emailContatto: "",
      ragioneSociale: "",

      emailAziendale: "",
      pecAziendale: "",
      telefonoAziendale: "",

      // idIndirizzoSedeOperativa: "",
      // idIndirizzoSedeLegale: "",

      urlLogoAziendale: "",
      tipoAziendale: "",
      fatturatoAnnuale: "",
   };

   // const client = useSelector((state: ReduxState) => state.client);

   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      // console.log(
      //    formClientRegistrationData,
      //    formDataSedeOperativa,
      //    formDataSedeLegale
      // );

      try {
         const response = await fetch(
            process.env.REACT_APP_BE_URL + "/clienti/addClient",
            {
               method: "POST",
               body: JSON.stringify({
                  addressSedeLegale: {
                     via: formDataSedeLegale.via,
                     civico: formDataSedeLegale.civico,
                     località: formDataSedeLegale.locality,
                     CAP: formDataSedeLegale.CAP,
                     idcomune: formDataSedeLegale.comune,
                  },
                  addressSedeOperativo: {
                     via: formDataSedeOperativa.via,
                     civico: formDataSedeOperativa.civico,
                     località: formDataSedeOperativa.locality,
                     CAP: formDataSedeOperativa.CAP,
                     idcomune: formDataSedeOperativa.comune,
                  },
                  // partitaIva: formClientRegistrationData.partitaIva,
                  nomeContatto: formClientRegistrationData.nomeContattato,
                  telefonoContatto: formClientRegistrationData.telefonoContatto,
                  emailContatto: formClientRegistrationData.emailContatto,
                  ragioneSociale: formClientRegistrationData.ragioneSociale,

                  emailAziendale: formClientRegistrationData.emailAziendale,
                  pecAziendale: formClientRegistrationData.pecAziendale,
                  telefonoAziendale:
                     formClientRegistrationData.telefonoAziendale,

                  // idIndirizzoSedeOperativa: formClientRegistrationData,
                  // idIndirizzoSedeLegale: formClientRegistrationData,

                  urlLogoAziendale: "",
                  tipoAziendale: workType,
                  fatturatoAnnuale: "",
               }),
               headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + getUser().token,
               },
            }
         );
         if (response.ok) {
            // saves data in local, redux and redirects
            const data: object = await response.json();
            // setUser(data);
            // dispath(setUserAction(data));
            // navigate("/");
            console.log(data);
            console.log("client save");

            // alert("login successfully!");
         } else {
            alert("error!");
         }
      } catch (error) {
         console.log(error);
      }
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

                     <FloatingLabel
                        className="mb-3"
                        controlId="floatingSelectGrid"
                        label="Work Type"
                     >
                        <Form.Select
                           aria-label="Floating label select example"
                           onChange={(event) => setWorkType(event.target.value)}
                        >
                           <option>Select work type</option>
                           <option value="PA">PA</option>
                           <option value="SAS">SAS</option>
                           <option value="SPA">SPA</option>
                           <option value="SRL">SRL</option>
                        </Form.Select>
                     </FloatingLabel>
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
