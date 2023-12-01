import {
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
  FileInput,
} from "flowbite-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Addpet = () => {
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=bef2b385acbd17663810b2defa77390e`;

  const axiosPublic = useAxiosPublic();

  const handleAddPet = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = parseInt(form.age.value);
    const category = form.category.value;
    const image = form.image.files[0];
    const location = form.location.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const adopted = false;

    const petData = {
      name,
      age,
      category,
      location,
      short_description,
      long_description,
      image,
      adopted,
    };
    const imageFile = { image: image };

    axiosPublic
      .post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));

    console.log(petData);
  };

  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl border-b-4 border-gray-500 my-3">
            Add a new Pet
          </h1>
        </div>
        <form onSubmit={handleAddPet}>
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-96">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Pet Name" />
              </div>
              <TextInput id="base" name="name" type="text" sizing="md" />
            </div>
            <div className=" w-96">
              <div className="mb-2 block">
                <Label htmlFor="Pet Age" value="Pet Age" />
              </div>
              <TextInput id="base" name="age" type="text" sizing="md" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="w-96">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select Category" />
              </div>
              <Select id="countries" name="category" required>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Fish</option>
              </Select>
            </div>
            <div className="w-96">
              <div className="mb-2 block">
                <Label htmlFor="base" value="Location" />
              </div>
              <TextInput id="base" name="location" type="text" sizing="md" />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Short Description" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              name="short_description"
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Long Description" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              name="long_description"
            />
          </div>
          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput id="file" name="image" />
          </div>
          <Button type="submit" className="my-3" color="dark">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Addpet;
