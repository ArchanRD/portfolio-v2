import "./about.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="about">
      <Navbar about={"active"} />
      <div className={`load ${loading ? 'fadeIn' : 'fadeOut'}`}>
        <div className="loadingio-spinner-rolling-e58iwe9hqua">
          <div className="ldio-6rj5t8puim">
            <div></div>
          </div>
        </div>
      </div>
      <div className="title">About</div>
      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <div className="frame">
          <div className="numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </div>
          <div className="about__text">
            <div className="cntr">
              <p>
                #Hey there, I am Archan Dhrangadharia. I enjoy creating things
                that live on internet. I started learning web development in
                2021. I did freelancing for a short period. Currently, I am
                learning Laravel and worked with react too.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
