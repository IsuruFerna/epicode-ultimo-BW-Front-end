import { SET_CLIENT, SET_CLIENT_ADDRESS } from "../actions";

type Client = {
   regioneSociale: string;
   emailAziendale: string;
   idIndirizzo: number | null;
};

type ClientState = {
   client: Client;
};

type SetClientAction = {
   type: typeof SET_CLIENT;
   payload: Client;
};

type SetClientAddressAction = {
   type: typeof SET_CLIENT_ADDRESS;
   payload: string | null;
};

type ClientAction = SetClientAction | SetClientAddressAction;

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

      case SET_CLIENT_ADDRESS:
         return {
            ...state,
            client: { ...state.client, idIndirizzo: action.payload },
         };

      default:
         return state;
   }
};

export default clientReducer;
