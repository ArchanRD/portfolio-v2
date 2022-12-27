import "./about.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <Navbar about={"active"} />
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
