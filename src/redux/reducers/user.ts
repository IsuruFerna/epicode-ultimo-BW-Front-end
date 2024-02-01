import { SET_USER } from "../actions";

export type User = {
   token: string;
   id: string;
   name: string;
   role: string;
   surname: string;
   username: string;
};

type UserState = {
   user: User;
};

type UserAction = {
   type: typeof SET_USER;
   payload: User;
};

const initialState: UserState = {
   user: {
      token: "",
      id: "",
      name: "",
      role: "",
      surname: "",
      username: "",
   },
};

const userReducer = (state = initialState, action: UserAction) => {
   switch (action.type) {
      case SET_USER:
         return {
            ...state,
            user: action.payload,
         };

      default:
         return state;
   }
};

export default userReducer;
