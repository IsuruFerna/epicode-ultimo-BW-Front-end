import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { Table } from "react-bootstrap";
import ClienteRowComp from "./ClientRowComp";

function ClientTable() {
   const { getUser } = useLocalStorage("value");
   const [data, setData] = useState([]);

   useEffect(() => {
      // later update with a time interval
      fetch(process.env.REACT_APP_BE_URL + "/clienti", {
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
            console.log("data retreaved", data);
            setData(data);
         })
         .catch((err) => console.log("ERROR", err));
   }, []);

   return (
      <Table striped bordered hover>
         <thead>
            <tr>
               <th>#</th>
               <th>Partita IVA</th>
               <th>Nome Contatto</th>
               <th>Tel: Contatto</th>
               <th>Email Contatto</th>
               <th>Ragione Sociale</th>
               <th>Email Aziendale</th>
               <th>PEC Aziendale</th>
               <th>Tel: Aziendale</th>
               <th>Tipo Aziendale</th>
               <th>Data Inserimento</th>
               <th>Data Ultimo Contattato</th>
               <th>Fattua Annuale</th>
            </tr>
         </thead>
         <tbody>
            {Array.isArray(data.content) && (
               <ClienteRowComp data={data.content} />
            )}
         </tbody>
      </Table>
   );
}
export default ClientTable;
