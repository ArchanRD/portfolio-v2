import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import { motion, AnimatePresence } from "framer-motion";

function Home({ isVisible }) {
  isVisible = true;
  return (
    <div className="home">
      <Navbar />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="cont-fath"
          >
            <div className="container">
              <motion.h1
                initial={{ opacity: 0, translateY: "-40px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                transition={{ duration: 0.5 }}
                className="txt-top"
              >
                Hello,
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: "-70px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="txt-mid"
              >
                I am{" "}
                <motion.span
                  whileHover={{ textShadow: " 0px 0px 10px #69c397" }}
                  className="hlgt"
                >
                  Archan,
                </motion.span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, translateY: "-70px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="txt-btm"
              >
                Front End Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateX: "-70px" }}
                animate={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="txt-grey"
              >
                Currently located in Vadodara. I love creating{" "}
                <span className="hlgt">interactive</span> websites.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
