const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-2">Contact</h1>
      <form className="p-2 m-2" >
        <p className="font-bold text-xl p-2 m-2"> Your details here</p>
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-r-sm border-black p-2 m-2 focus:font-semibold"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="border rounded-r-sm border-black p-2 m-2 focus:font-semibold"
        ></input>
        <button className="p-2 m-2 border border-black bg-green-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
