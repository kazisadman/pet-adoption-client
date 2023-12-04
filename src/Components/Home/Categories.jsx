import { useState } from "react";
import Heading from "../Heading";
import { useEffect } from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Heading subHeading={"pet's"} heading={"category"}></Heading>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 my-6">
        {categories.map((category) => (
          <>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={category.image}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.category_name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {category.description}
              </p>
              <Link to={"/pet-listing"}>
                <Button color="warning">Show Me!</Button>
              </Link>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
