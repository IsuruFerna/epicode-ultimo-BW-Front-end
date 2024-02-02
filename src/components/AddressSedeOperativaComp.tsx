import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useLocalStorage } from "../useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../pages/HomePage";
import { setClientAddressSedeOperativa } from "../redux/actions";

export type FormAddress = {
   via: string;
   civico: string;
   locality: string;
   CAP: string;
   comune: number | null | string;
};

type Provincia = {
   sigla: string;
   provincia: string;
   regione: string;
};

type ComuneData = {
   id: number;
   codiceProvinccia: number;
   denominazioneInItaliano: number;
   progressiviDelComune: number;
   provincia: Provincia;
};

type AddressFormProps = {
   formData: FormAddress;
   setFormData: React.Dispatch<React.SetStateAction<FormAddress>>;
};

const AddressSedeOperativaComp: React.FC<AddressFormProps> = ({
   formData,
   setFormData,
}) => {
   const [comune, setComune] = useState<string>("");
   const [listComune, setListComune] = useState([]);
   const [isComuneChoosed, setIsComuneChoosed] = useState(false);

   const client = useSelector((state: ReduxState) => state);
   // const dispath = useDispatch();

   const { getUser } = useLocalStorage("value");

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === "comune") {
         setComune(event.target.value);
         setIsComuneChoosed(false);
      } else {
         setFormData({
            ...formData,
            [event.target.name]: event.target.value,
         });
      }
   };

   // set comune id
   const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
      const id = e.currentTarget.getAttribute("data-id");
      const target = e.target as HTMLElement;
      console.log(target.innerText, id);
      setFormData({
         ...formData,
         comune: id,
      });
      // dispath(setClientAddressSedeOperativa(id));
      setComune(target.innerText);
      setIsComuneChoosed(true);
      setListComune([]);
   };

   // fetch and find the comune based on user input
   useEffect(() => {
      // later update with a time interval
      fetch(process.env.REACT_APP_BE_URL + "/comuni/" + comune, {
         headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + getUser().token,
         },
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("fetch data retreaving error!");
            }
            return response.json();
         })
         .then((data) => {
            setListComune(data);
            console.log("data retreaved", listComune);
         })
         .catch((err) => console.log("ERROR", err));

      console.log(client);
   }, [comune]);

   return (
      // <Form onSubmit={handleSubmit}>
      <>
         <p className="mb-2 mt-4">Indirizzo Sede Operativo</p>
         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridVia">
               <Form.Label>Via</Form.Label>
               <Form.Control
                  name="via"
                  onChange={handleInputChange}
                  value={formData.via}
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCivico">
               <Form.Label>Civico</Form.Label>
               <Form.Control
                  name="civico"
                  onChange={handleInputChange}
                  value={formData.civico}
               />
            </Form.Group>
         </Row>

         <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridLocality">
               <Form.Label>Locality</Form.Label>
               <Form.Control
                  name="locality"
                  onChange={handleInputChange}
                  value={formData.locality}
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCAP">
               <Form.Label>CAP</Form.Label>
               <Form.Control
                  name="CAP"
                  onChange={handleInputChange}
                  value={formData.CAP}
               />
            </Form.Group>
         </Row>

         <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Comune</Form.Label>
            <Form.Control
               name="comune"
               onChange={handleInputChange}
               value={comune}
               placeholder="comune"
            />
         </Form.Group>

         {/* handles comune input and hides when user selects one from the suggested list */}
         {!isComuneChoosed && (
            <ul>
               {listComune.map((elem: ComuneData) => (
                  <li onClick={handleClick} key={elem.id} data-id={elem.id}>
                     {elem.denominazioneInItaliano}
                  </li>
               ))}
            </ul>
         )}

         {/* <Button variant="primary" type="submit">
            Submit
         </Button> */}

         {/* </Form> */}
      </>
   );
};

export default AddressSedeOperativaComp;
