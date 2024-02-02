function ClienteRowComp({ data }) {
   return (
      <>
         {data.map((elem) => (
            <tr key={elem.partitaIva}>
               <td>#</td>
               <td>{elem.partitaIva}</td>
               <td>{elem.nomeContatto}</td>
               <td>{elem.telefonoContatto}</td>
               <td>{elem.emailContatto}</td>
               <td>{elem.ragioneSociale}</td>
               <td>{elem.emailAziendale}</td>
               <td>{elem.pecAziendale}</td>
               <td>{elem.telefonoAziendale}</td>
               <td>{elem.tipo}</td>
               <td>{elem.dataInserimento}</td>
               <td>{elem.dataUltimoContatto}</td>
               <td>{elem.fatturatoAnnuale}</td>
            </tr>
         ))}
      </>
   );
}
export default ClienteRowComp;
