export const SET_CLIENT = "SET_CLIENT";
export const SET_USER = "SET_USER";

export const setClient = (clientData: object) => {
   return {
      type: SET_CLIENT,
      payload: clientData,
   };
};

export const setUserAction = (userData: object) => {
   return {
      type: SET_USER,
      payload: userData,
   };
};
