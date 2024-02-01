import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../redux/reducers/user";
import { setUserAction } from "../redux/actions";

function LoginFormComponent() {
   type LoginData = {
      email: string;
      password: string;
   };

   type ReduxState = {
      user: User;
   };

   const { setUser } = useLocalStorage("value");
   const navigate = useNavigate();

   const user = useSelector((state: ReduxState) => state.user);
   const dispath = useDispatch();

   const [loginForm, setLoginForm] = useState<LoginData>({
      email: "",
      password: "",
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm({
         ...loginForm,
         [e.target.name]: e.target.value,
      });
   };

   // when user loggedIn,
   // saves token in localStorage,
   // save user data in redux store
   // and regirects to home page
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         const response = await fetch(
            process.env.REACT_APP_BE_URL + "/auth/login",
            {
               method: "POST",
               body: JSON.stringify(loginForm),
               headers: { "Content-type": "application/json" },
            }
         );
         if (response.ok) {
            // saves data in local, redux and redirects
            const data: object = await response.json();
            setUser(data);
            dispath(setUserAction(data));
            navigate("/");

            console.log("redux user: ", user);
            // alert("login successfully!");
         } else {
            alert("error!");
         }
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
               name="email"
               value={loginForm.email}
               onChange={handleInputChange}
               autoFocus={true}
               type="email"
               placeholder="Enter email"
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
               name="password"
               value={loginForm.password}
               onChange={handleInputChange}
               type="password"
               placeholder="Password"
            />
         </Form.Group>
         <Button variant="primary" type="submit">
            Login
         </Button>
      </Form>
   );
}

export default LoginFormComponent;
