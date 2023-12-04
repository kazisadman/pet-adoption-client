import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegistration = (e) => {
    setError("");

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = "user";

    if (password.length < 6) {
      setError("Password should be atleast 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have atleast 1 capital letter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password should have atleast 1 special character");
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);

          updateUserProfile(name, image)
            .then(() => {
              console.log("updated");

              const user = {
                name: name,
                email: email,
                image: image,
                role: role,
              };

              axiosPublic
                .post("/users", user)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
              nav("/");
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <form
          className="flex w-96 flex-col gap-4"
          onSubmit={handleRegistration}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Name" value="Name" />
            </div>
            <TextInput id="Name" type="text" name="name" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Image" value="Image" />
            </div>
            <TextInput id="Image" type="text" name="image" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              name="password"
              required
              shadow
            />
          </div>
          <Button type="submit">Register</Button>
          <p>
            <small>
              Have an account?
              <Link to="/login">Login</Link>
            </small>
          </p>
          {error && <h2>{error}</h2>}
        </form>
      </div>
    </div>
  );
};

export default Registration;
