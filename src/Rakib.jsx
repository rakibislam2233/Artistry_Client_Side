import { useState } from "react";

const Rakib = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
    if (!nameInput) {
        setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  };
  const handleemail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (!emailInput) {
        setEmailError("Please enter your Email");
    } else {
      setEmailError("");
    }
  };
  return (
    <form className="border flex justify-center items-center bg-rose-100 h-screen">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        {nameError && <span className="text-rose-500">{nameError}</span>}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleemail}
        />
        {emailError && <span className="text-rose-500">{emailError}</span>}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        {nameError && <span className="text-rose-500">{nameError}</span>}
      </div>
    </form>
  );
};

export default Rakib;
