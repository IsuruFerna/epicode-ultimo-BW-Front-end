import { Url } from "url";
import {
   SET_CLIENT,
   SET_CLIENT_ADDRESS_SEDE_LEGALE,
   SET_CLIENT_ADDRESS_SEDE_OPERATIVA,
   SET_CLIENT_REGISTER_FORM_DATA,
} from "../actions";
import { FormClientRegistrationData } from "../../components/ClientRegisterFormComp";

export type Client = {
   partitaIva: string;
   nomeContatto: string;
   telefonoContatto: number | null;
   emailContatto: string;
   ragioneSociale: string;

   emailAziendale: string;
   pecAziendale: string;
   telefonoAziendale: number | null;

   idIndirizzoSedeOperativa: number | null;
   idIndirizzoSedeLegale: number | null;

   urlLogoAziendale: Url | null;
   tipoAziendale: string;
   fatturatoAnnuale: number | null;
};

type ClientState = {
   client: Client;
};

type SetClientAction = {
   type: typeof SET_CLIENT;
   payload: Client;
};

type SetClientSedeOparativaAction = {
   type: typeof SET_CLIENT_ADDRESS_SEDE_OPERATIVA;
   payload: string | null;
};

type SetClientSedeLegaleAction = {
   type: typeof SET_CLIENT_ADDRESS_SEDE_LEGALE;
   payload: string | null;
};

type setClientFromClientRegisterForm = {
   type: typeof SET_CLIENT_REGISTER_FORM_DATA;
   payload: FormClientRegistrationData;
};

type ClientAction =
   | SetClientAction
   | SetClientSedeOparativaAction
   | SetClientSedeLegaleAction
   | setClientFromClientRegisterForm;

const initialState: ClientState = {
   client: {
      partitaIva: "",
      nomeContatto: "",
      telefonoContatto: null,
      emailContatto: "",
      ragioneSociale: "",

      emailAziendale: "",
      pecAziendale: "",
      telefonoAziendale: null,

      idIndirizzoSedeOperativa: null,
      idIndirizzoSedeLegale: null,

      urlLogoAziendale: null,
      tipoAziendale: "",
      fatturatoAnnuale: null,
   },
};

const clientReducer = (state = initialState, action: ClientAction) => {
   switch (action.type) {
      case SET_CLIENT:
         return {
            ...state,
            client: action.payload,
         };

      case SET_CLIENT_ADDRESS_SEDE_OPERATIVA:
         return {
            ...state,
            client: {
               ...state.client,
               idIndirizzoSedeOperativa: action.payload,
            },
         };

      case SET_CLIENT_ADDRESS_SEDE_LEGALE:
         return {
            ...state,
            client: { ...state.client, idIndirizzoSedeLegale: action.payload },
         };

      case SET_CLIENT_REGISTER_FORM_DATA:
         return {
            ...state,
            client: {
               ...state.client,
               partitaIva: action.payload.partitaIva,
               nomeContattato: action.payload.nomeContattato,
               telefonoContatto: action.payload.telefonoContatto,
               telefonoAziendale: action.payload.telefonoAziendale,
               emailAziendale: action.payload.emailAziendale,
               emailContatto: action.payload.emailContatto,
               pecAziendale: action.payload.pecAziendale,
               ragioneSociale: action.payload.ragioneSociale,
            },
         };

      default:
         return state;
   }
};

export default clientReducer;
