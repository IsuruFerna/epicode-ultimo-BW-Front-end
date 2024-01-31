import { SET_CLIENT } from "../actions";

type Client = {
   regioneSociale: string;
   emailAziendale: string;
   idIndirizzo: number | null;
};

type ClientState = {
   client: Client;
};

type ClientAction = {
   type: typeof SET_CLIENT;
   payload: Client;
};

const initialState: ClientState = {
   client: {
      regioneSociale: "",
      emailAziendale: "",
      idIndirizzo: null,
   },
};

const clientReducer = (state = initialState, action: ClientAction) => {
   switch (action.type) {
      case SET_CLIENT:
         return {
            ...state,
            client: action.payload,
         };

      default:
         return state;
   }
};

export default clientReducer;
