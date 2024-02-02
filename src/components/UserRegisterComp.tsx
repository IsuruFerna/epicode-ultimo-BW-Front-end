import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function UserRegisterComp() {
   type UserRegisterForm = {
      name: string;
      surname: string;
      username: string;
      email: string;
      password: string;
      confirm: string;
      role: string;
   };

   const [formData, setFormData] = useState<UserRegisterForm>({
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      role: "user",
   });

   const navigate = useNavigate();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // check password
      if (formData.confirm !== formData.password) {
         alert("Password does not match to confimation!");
      }

      try {
         const response = await fetch(
            process.env.REACT_APP_BE_URL + "/auth/register",
            {
               method: "POST",
               body: JSON.stringify(formData),
               headers: { "Content-type": "application/json" },
            }
         );
         if (response.ok) {
            navigate("/login");
         }
      } catch (error) {
         console.log(error);
      }

      console.log(formData);
   };

   return (
      <>
         <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                     name="name"
                     onChange={handleInputChange}
                     value={formData.name}
                     placeholder="Mark"
                  />
               </Form.Group>

               <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                     name="surname"
                     onChange={handleInputChange}
                     value={formData.surname}
                     placeholder="Anthony"
                  />
               </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridUsername">
               <Form.Label>User Name</Form.Label>
               <Form.Control
                  name="username"
                  onChange={handleInputChange}
                  value={formData.username}
                  placeholder="Mark38"
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  type="email"
                  placeholder="Enter email"
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  type="password"
                  placeholder="Password"
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPasswordConfirm">
               <Form.Label>Confirm Password</Form.Label>
               <Form.Control
                  name="confirm"
                  onChange={handleInputChange}
                  value={formData.confirm}
                  type="password"
                  placeholder="Confirm Password"
               />
            </Form.Group>

            <Button variant="success" type="submit">
               Register
            </Button>
         </Form>
      </>
   );
}

export default UserRegisterComp;
