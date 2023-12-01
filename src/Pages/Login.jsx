import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
          <p>
            <small>
              Don&aps;t have an account?
              <Link to="/registration">Registration</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
