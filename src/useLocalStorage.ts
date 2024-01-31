export const useLocalStorage = (key: string) => {
   const setUser = (user: unknown) => {
      try {
         window.localStorage.setItem(key, JSON.stringify(user));
      } catch (error) {
         console.log(error);
      }
   };

   const getUser = () => {
      try {
         const user = window.localStorage.getItem(key);
         return user ? JSON.parse(user) : undefined;
      } catch (error) {
         console.log(error);
      }
   };

   const removeUser = () => {
      try {
         window.localStorage.removeItem(key);
      } catch (error) {
         console.log(error);
      }
   };

   return { setUser, getUser, removeUser };
};
