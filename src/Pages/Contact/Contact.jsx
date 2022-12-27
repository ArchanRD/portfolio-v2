import Navbar from "../../Components/Navbar/Navbar";
import "./contact.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
    if (name != "" && email != "" && message != "") {
      setTimeout(
        () => {
          setSpin(false);
          document.getElementById("username").value = "";
          document.getElementById("emailid").value = "";
          document.getElementById("message").value = "";
        },
        2000,
        setSpin(true)
      );

      let details = {
        from_name: name,
        email_id: email,
        message: message,
      };

      emailjs
        .send(
          "service_sf5fdu8",
          "template_svilbs8",
          details,
          "d_zPiJwge5DkQhugN"
        )
        .then((res) => {
          setTimeout(() => {
            setAlert(false)
          }, 2000, setAlert(true));
        });

      setName("");
    } else {
      console.log("empty fields");
    }
  }

  const [name, setName] = useState("");
  const [Alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [spin, setSpin] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="contact">
      <Navbar contact={"active"} />
      {Alert && (
        <motion.div 
        initial={{opacity:0, translateY: "-50px"}}
        animate={{opacity:1, translateY: "10px"}}
        transition={{duration: 0.5, type:"spring", stiffness: 100}}
        className="alert__success">Message sent!</motion.div>
      )}
      <div className="title">Contact</div>
      <div className="container">
        <div className="col col-1">
          <div className="text__tp">
            <motion.h1
              initial={{ opacity: 0, translateX: "-30px" }}
              animate={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.5 }}
              className="text"
            >
              Let's get in <span className="hlgt">touch</span>!
            </motion.h1>
          </div>
          <div className="socials">
            <div className="social__group">
              <motion.a
                initial={{ opacity: 0, translateY: "-20px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.25, delay: 0.3 }}
                href="#"
              >
                <i className="bi bi-twitter icon"></i>
                <p className="social__text">Twitter</p>
              </motion.a>
            </div>
            <div className="social__group">
              <motion.a
                initial={{ opacity: 0, translateY: "-20px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.25, delay: 0.38 }}
                href="#"
              >
                <i className="bi bi-linkedin icon"></i>
                <p className="social__text">Linkedin</p>
              </motion.a>
            </div>
            <div className="social__group">
              <motion.a
                initial={{ opacity: 0, translateY: "-20px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.25, delay: 0.46 }}
                href="#"
              >
                <i className="bi bi-github icon"></i>
                <p className="social__text">Github</p>
              </motion.a>
            </div>
          </div>
        </div>

        {/* form  */}

        <div className="col col-2">
          <form className="contact__form">
            <div className="form__group__detail">
              <motion.div
                initial={{ opacity: 0, translateY: "-10px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="form__group"
              >
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  className="input name"
                  id="username"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "-10px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="form__group"
              >
                <label htmlFor="emailid">Email</label>
                <input
                  type="email"
                  className="input email"
                  id="emailid"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
            </div>
            <div className="form__group__message">
              <motion.div
                initial={{ opacity: 0, translateY: "-10px" }}
                animate={{ opacity: 1, translateY: "0" }}
                transition={{ duration: 0.3, delay: 0.58 }}
                className="form__group"
              >
                <label htmlFor="message">Message</label>
                <textarea
                  name="msg"
                  id="message"
                  cols="30"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </motion.div>
            </div>
            <motion.button
              initial={{ opacity: 0, translateY: "-10px" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.3, delay: 0.66 }}
              className="submit__btn"
              onClick={handleSubmit}
            >
              Message me!
              {spin && (
                <div className="spinner">
                  <div className="loadingio-spinner-rolling-h3xjgj5kxs8">
                    <div className="ldio-oao578s3qrk">
                      <div></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.button>
            <input type="reset" defaultValue="Reset" className="reset" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
