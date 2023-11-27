const Calltoaction = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
              Transform Lives, Adopt a Furry Friend Today!
            </span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            Open your heart and home to a loving companion. Adopting a pet not
            only brings joy to your life but also provides a forever home for an
            animal in need. Experience the unconditional love and boundless
            happiness that a furry friend can bring. Make a difference—adopt and
            create a better life for both you and your new four-legged family
            member. Begin your journey of love and companionship today
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Adopt
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://i.ibb.co/jhrrLCw/call-1.jpg"
            className="w-1/2 rounded-lg"
            alt="Tree"
          />
          <div>
            <img
              src="https://i.ibb.co/HKFkB8t/call-2.jpg"
              className="mb-8 rounded-lg"
              alt="Tree"
            />
            <img
              src="https://i.ibb.co/qMg9BYg/call-3.jpg"
              className="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
