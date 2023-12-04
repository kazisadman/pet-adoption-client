import {
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
  FileInput,
} from "flowbite-react";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useParams } from "react-router-dom";

const Updatepet = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl border-b-4 border-gray-500 my-3">
            Add a new Pet
          </h1>
        </div>
        <form>
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

export default Updatepet;
