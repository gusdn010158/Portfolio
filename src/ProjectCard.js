import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThreeButton from "./ThreeButton";

function ProjectCard({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <ProjectSection>
        {Array.isArray(projects) &&
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -500 : 500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link to={project.link}>
                <img src={project.img} alt="img" />
              </Link>

              <RIGHT>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.title}
                </motion.h2>
                <MotionParagraph
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.dydir}
                </MotionParagraph>
                <Twobtn>
                  <MLink to={project.link}>사이트 들어가기</MLink>

                  <ThreeButton
                    onClick={() => setSelectedProject(project)}
                    selcet={"더보기"}
                  />
                </Twobtn>
              </RIGHT>
            </motion.div>
          ))}
      </ProjectSection>
      {selectedProject && (
        <Popup>
          <PopupContent
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CloseButton onClick={() => setSelectedProject(null)}>
              ✖
            </CloseButton>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </PopupContent>
        </Popup>
      )}
    </>
  );
}

export default ProjectCard;
const Twobtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;
const RIGHT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
`;
const MotionParagraph = styled(motion.p)`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
  margin-top: 20px;
  text-align: center;
  margin: 20px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const MLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Arial, sans-serif;
  margin: 10px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 5px;
  background-color: gray;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: gray;
  }
`;
const ProjectSection = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  .project-card {
    background: #222;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    width: 80%;
    height: 500px;
    text-align: center;
    display: flex;
  }
  img {
    width: 800px;
    height: 500px;
    object-fit: contain;
    @media (max-width: 1440px) {
      width: 95%;
    }
  }
`;
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled(motion.div)`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  color: white;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
