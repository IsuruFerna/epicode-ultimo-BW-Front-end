export const SET_CLIENT = "SET_CLIENT";
export const SET_USER = "SET_USER";
export const SET_CLIENT_ADDRESS = "SET_CLIENT_ADDRESS";

export const setClient = (clientData: object) => {
   return {
      type: SET_CLIENT,
      payload: clientData,
   };
};

export const setClientAddress = (addressId: string | null) => {
   return {
      type: SET_CLIENT_ADDRESS,
      payload: addressId,
   };
};

export const setUserAction = (userData: object) => {
   return {
      type: SET_USER,
      payload: userData,
   };
};
