import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useLocalStorage } from "../useLocalStorage";
import { useNavigate } from "react-router-dom";

function LoginFormComponent() {
   type LoginData = {
      email: string;
      password: string;
   };

   const { getUser, setUser } = useLocalStorage("value");

   const navigate = useNavigate();

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
            const data: object = await response.json();
            setUser(data);
            navigate("/");
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
