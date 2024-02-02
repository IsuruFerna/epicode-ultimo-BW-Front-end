import { FormClientRegistrationData } from "../../components/ClientRegisterFormComp";

export const SET_CLIENT = "SET_CLIENT";
export const SET_USER = "SET_USER";
export const SET_CLIENT_ADDRESS_SEDE_OPERATIVA =
   "SET_CLIENT_ADDRESS_SEDE_OPERATIVA";
export const SET_CLIENT_ADDRESS_SEDE_LEGALE = "SET_CLIENT_ADDRESS_SEDE_LEGALE";
export const SET_CLIENT_REGISTER_FORM_DATA = "SET_CLIENT_REGISTER_FORM_DATA";

export const setClient = (clientData: object) => {
   return {
      type: SET_CLIENT,
      payload: clientData,
   };
};

export const setClientAddressSedeOperativa = (addressId: string | null) => {
   return {
      type: SET_CLIENT_ADDRESS_SEDE_OPERATIVA,
      payload: addressId,
   };
};

export const setClientAddressSedeLegale = (addressId: string | null) => {
   return {
      type: SET_CLIENT_ADDRESS_SEDE_LEGALE,
      payload: addressId,
   };
};

export const setClientFromClientRegisterForm = (
   clientData: FormClientRegistrationData
) => {
   return {
      type: SET_CLIENT_REGISTER_FORM_DATA,
      payload: clientData,
   };
};

export const setUserAction = (userData: object) => {
   return {
      type: SET_USER,
      payload: userData,
   };
};
