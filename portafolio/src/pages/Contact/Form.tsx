const Form = () => {
  const javierSGEmail = "jsdash100000@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
      const data = {
        name,
        email,
        message,
      };

      fetch(`https://formsubmit.co/ajax/${javierSGEmail}`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });

      alert("Message sent successfully!");
    }
  };

  return (
    <>
      <h1>Send me a email message</h1>
      <form action="" method="get" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" id="name" />
        <input type="email" name="email" placeholder="Email" id="email" />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          style={{
            resize: "none",
            width: "100%",
            height: "200px",
          }}
        ></textarea>
        <button type="submit" onSubmit={() => {}}>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
