const Contact = () => {
  return (
    <div id="contact" className="section">
      <h2 className="text-3xl md:text-4xl text-slate-600 font-bold opacity-60 mb-6 md:mb-10  dark:text-white">
        Contact
      </h2>
      {/* form */}
      <div>
        <div className="flex flex-col mb-8">
          <label className="uppercase py-2 text-sm  dark:text-white">
            Name
          </label>
          <input
            type="text"
            className="border-2 border-gray-200 rounded-lg p-3"
            name="name"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="uppercase py-2 text-sm  dark:text-white">
            Email
          </label>
          <input
            type="email"
            className="border-2 border-gray-200 rounded-lg p-3"
            name="email"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="uppercase py-2 text-sm  dark:text-white">
            Message
          </label>
          <textarea
            className="border-2 border-gray-200 rounded-lg p-3"
            name="message"
            rows={10}
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 md:mt-6 w-full">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
