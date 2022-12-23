import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { RootState } from "../../store";
import { editUser } from "./userSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();

  const users = useSelector((store: RootState) => store.users);
  const dispatch = useDispatch();
  const existingUser = users.filter((user) => user.id === params.id);

  const { name, email } = existingUser[0];

  const [values, setValues] = React.useState({
    name,
    email,
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

      <Button
        onClick={() => {
          console.log(values);
          dispatch(
            editUser({
              id: params.id,
              name: values.name,
              email: values.email,
            })
          );
          navigate("/");
        }}
      >
        Edit
      </Button>
    </div>
  );
};
export default EditUser;
