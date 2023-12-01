import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        updateUserProfile(name, image)
          .then(() => {
            console.log("updated");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <form
          className="flex max-w-md flex-col gap-4"
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
        </form>
      </div>
    </div>
  );
};

export default Registration;
