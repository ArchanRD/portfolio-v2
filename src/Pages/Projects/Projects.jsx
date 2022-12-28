import React from "react";
import "./projects.scss";
import Navbar from "../../Components/Navbar/Navbar";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const projectCardDetails = [
    {
      id: 1,
      name: "Zomato Clone",
      image:
        "https://user-images.githubusercontent.com/74826173/209513233-b1ae4e24-2520-49f6-9f9e-537e904c2fc9.png",
      link: "https://archanrd.github.io/Zomato-clone",
    },
    {
      id: 2,
      name: "Netflix Clone",
      image:
        "https://user-images.githubusercontent.com/74826173/209513338-dfa321ff-1f48-4afd-a357-bfe9a8570ca2.png",
      link: "https://archanrd.github.io/Netflix-clone",
    },
    {
      id: 3,
      name: "Blog & Ecomm",
      image:
        "https://user-images.githubusercontent.com/74826173/209513867-74a69654-44a0-4777-a1e5-72f6a70c1107.png",
      link: "http://royalterrace.epizy.com/?i=1",
    },
    {
      id: 4,
      name: "Ecommerce Shopping",
      image:
        "https://user-images.githubusercontent.com/74826173/209514607-ac6643f5-9432-419c-a4a3-3152e2490f4d.png",
      link: "http://fluids24.epizy.com/e-commerce/",
    },
    {
      id: 5,
      name: "Quotes App(API)",
      image:
        "https://user-images.githubusercontent.com/74826173/209514494-e6bf90ea-4428-49c0-b75d-bfe407070241.png",
      link: "https://js-quotes-app-1-d8g2nuuw7-archanrd.vercel.app/",
    },
    {
      id: 6,
      name: "Pokedex (API)",
      image:
        "https://user-images.githubusercontent.com/74826173/209514490-6dc28bd6-5f5e-4bbf-a23d-514cb0e19b18.png",
      link: "https://pokedex-vercel-nine.vercel.app/",
    },
    {
      id: 7,
      name: "Js Calculator",
      image:
        "https://user-images.githubusercontent.com/74826173/209514481-799dd2f5-6f62-4525-a097-d1ca46e4b6a3.png",
      link: "https://archanrd.github.io/Javascript-Calculator/",
    },
  ];

  const { scrollYprogress } = useScroll();

  return (
    <div className="projects">
      <Navbar projects={"active"} />
      <div className={`load ${loading ? 'fadeIn' : 'fadeOut'}`}>
        <div className="loadingio-spinner-rolling-e58iwe9hqua">
          <div className="ldio-6rj5t8puim">
            <div></div>
          </div>
        </div>
      </div>
      <div className="title">Projects</div>
      <div className="container">
        {projectCardDetails.map((data) => {
          return (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                name={data.name}
                image={data.image}
                link={data.link}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
