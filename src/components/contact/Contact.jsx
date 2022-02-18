import "./contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";




export default function Contact() {
  
 
  
  
  const [message, setMessage] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const removeMessage = () => {
    setTimeout(() => {
      setToSend({
        from_name: "",
        reply_to: "",
        message: "",
      });
      setMessage(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_sd2aygr",
      "template_1j4mngo",
      toSend,
      "user_Vi4iQVzD5oRC8RABaCdnt"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        removeMessage();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setMessage(true);
    // removeMessage();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />

          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>

          <button>Send</button>
        </form>

        {message && <span>Thanks, I'll get back to your right away</span>}
      </div>

      <div className="right">

        <div className="image--container">

            <a href="https://www.linkedin.com/in/tm01/" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/linkedin.png" alt="linkeDin"/>
            </a>
          <a href="https://github.com/tmeyer01" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/github.png" alt="github"/>
            </a>
            <a href="https://www.canva.com/design/DAEwBE504Vk/xNEYzY-ZtLBoGtA3jAhUVw/view?utm_content=DAEwBE504Vk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/resume.png" alt="resume"/>
            </a>
          <a href="https://twitter.com/BWebdev" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/twitter.png" alt="twitter"/>
            </a>
          <a href="https://www.instagram.com/_tm.dev/" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/instagram.png" alt="instagram"/>
            </a>


        </div>
       
      </div>
    </div>
  );
}