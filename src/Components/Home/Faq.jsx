import faqimage from "../../assets/image/FAQ.png";
import { Accordion } from "flowbite-react";
import Heading from "../Heading";

const Faq = () => {
  return (
    <div>
      <Heading heading={"questions"} subHeading={"frequently asked"}></Heading>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-10">
        <div>
          <img src={faqimage} alt="" />
        </div>
        <div className="flex-1 mt-7">
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>
                Q: How does the pet adoption process work?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  A: The adoption process typically involves filling out an
                  application, meeting and interacting with potential pets, and,
                  upon approval, completing necessary paperwork. Our team is
                  here to guide you through each step, ensuring a smooth and
                  positive experience.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Q: What is included in the adoption fee?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  A: The adoption fee covers essential services such as
                  spaying/neutering, vaccinations, microchipping, and a basic
                  health check. It helps support the overall well-being of the
                  pet and ensures they are ready to thrive in their new home.{" "}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Q: Can I adopt if I live in an apartment?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  A: Absolutely! We understand that pets can thrive in various
                  living situations. Our adoption team will work with you to
                  find a pet that fits your lifestyle, whether you live in a
                  house, apartment, or any other type of residence.{" "}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Q: Are the pets up-to-date on vaccinations and health checks?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  A: Yes, all our pets receive necessary vaccinations, a
                  thorough health examination, and are microchipped before
                  adoption. We prioritize the well-being of our animals to
                  ensure they join your home in the best possible health.{" "}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Q: What support is provided after adoption?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  A: Our commitment to you and your new pet extends beyond the
                  adoption day. We offer post-adoption resources, including
                  guidance on training, healthcare, and any questions you may
                  have as you and your new companion build a strong and lasting
                  bond. Feel free to reach out to us anytime.{" "}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
