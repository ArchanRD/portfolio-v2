import "./myskills.scss";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import HTML from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import php from "../../images/php.png";
import bootstrap from "../../images/bootstrap.png";
import git from "../../images/git.png";
import figma from "../../images/figma.png";
import sql from "../../images/sql.png";
import react from "../../images/react.png";
import ubuntu from "../../images/ubuntu.png";
import { motion, AnimatePresence } from "framer-motion";

const Myskills = ({ isVisible }) => {
  isVisible = true;
  return (
    <div className="skills">
      <Navbar myskills={"active"} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="cont-fath">
              <div className="container">
                <motion.h1
                  initial={{ opacity: 0, translateX: "-30px" }}
                  animate={{ opacity: 1, translateX: "0" }}
                  transition={{ duration: 0.5 }}
                  className="title"
                >
                  Skills
                </motion.h1>
                <div className="card-container">
                  <motion.div 
                    initial={{zIndex: 1, translateX: '-30px'}}
                    animate={{translateX: '0'}}
                    transition={{duration: .5}}
                  >
                    <Card image={HTML} langName={"Html"} />
                  </motion.div>
                  <motion.div 
                    initial={{zIndex: 1,translateX: 'calc(-30px - 60px)'}}
                    animate={{translateX: '0'}}
                    transition={{duration: .5, delay: 0.1}}
                  >
                    <Card image={php} langName={"PHP"} />
                  </motion.div>
                  <motion.div 
                    initial={{zIndex: 1,translateX: 'calc(-30px - 90px)'}}
                    animate={{translateX: '0'}}
                    transition={{duration: .5, delay: 0.1}}
                  >
                    <Card image={react} langName={"React"} />
                  </motion.div>
                  <motion.div 
                    initial={{zIndex: 1,translateX: 'calc(-30px - 120px)'}}
                    animate={{translateX: '0'}}
                    transition={{duration: .5, delay: 0.12}}
                  >
                    <Card image={git} langName={"Git and Github"} />
                  </motion.div>
                  <motion.div 
                    initial={{zIndex: 1,translateX: 'calc(-30px - 150px)'}}
                    animate={{translateX: '0'}}
                    transition={{duration: .5, delay: 0.13}}
                  >
                    <Card image={bootstrap} langName={"Bootstrap"} />
                  </motion.div>
                  <motion.div 
                    initial={{opacity: 0, translateY: '-290px'}}
                    animate={{opacity: 1, translateY: '0'}}
                    transition={{duration: .5, delay: 0.5}}
                  >
                    <Card image={js} langName={"Javascript"} />
                  </motion.div>
                  <motion.div 
                    initial={{opacity: 0,translateY: '-290px'}}
                    animate={{opacity: 1,translateY: '0'}}
                    transition={{duration: .5, delay: 0.5, ease: "easeInOut"}}
                  >
                    <Card image={css} langName={"Css"} />
                  </motion.div>
                  <motion.div 
                    initial={{opacity: 0,translateY: '-290px'}}
                    animate={{opacity: 1,translateY: '0'}}
                    transition={{duration: .5, delay: 0.5}}
                  >
                    <Card image={sql} langName={"SQL"} />
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0,translateY: '-290px'}}
                    animate={{opacity: 1,translateY: '0'}}
                    transition={{duration: .5, delay: 0.5}}
                  > 
                    <Card image={ubuntu} langName={"Ubuntu"} />
                  </motion.div>
                  <motion.div 
                    initial={{opacity: 0,translateY: '-290px'}}
                    animate={{opacity: 1,translateY: '0'}}
                    transition={{duration: .5, delay: 0.5}}
                  >
                    <Card image={figma} langName={"Figma"} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Myskills;
