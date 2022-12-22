import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const AddUser = () => {
  const navigate = useNavigate()
  const [values, setValues] = React.useState({
    name: "",
    email: "",
  });

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues({ ...values, name: e.target.value })
        }
        value={values.name}
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues({ ...values, email: e.target.value })
        }
        label="Email"
        value={values.email}
        inputProps={{ type: "email", placeholder: "john@gmail.com" }}
      />

      <Button onClick={() => {
        console.log(values)
        setValues({
          name: "",
          email: "",
        })
        navigate('/')
      }
      }>Submit</Button>
    </div>
  );
};
// :React.ChangeEvent<HTMLInputElement>
export default AddUser;
