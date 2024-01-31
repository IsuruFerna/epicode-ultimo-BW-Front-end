import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function LoginFormComponent() {
   type LoginData = {
      email: string;
      password: string;
   };

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
            const data = await response.json();
            console.log(data);
            alert("login successfully!");
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
