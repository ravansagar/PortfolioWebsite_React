// import React from 'react';
import '@/assets/ProjectPage.css';
import { VisibilityOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Buttons = styled(Button)({
  height: '3em',
  width: '11em',
  fontSize: '0.8em',
  textTransform: 'none',
  fontFamily: 'Courier New, Courier, monospace',
  fontWeight: 800,
  color: '#fff',
  background: '#000000',
  boxShadow: `inset 10px 10px 15px #ffffff42, inset -5px -5px 5px #00000042`,
  transition: 'box-shadow 0.3s ease',
  border: 'none',
  marginBottom: '1em',
  marginLeft: '1.5em',
  borderRadius: '1em',
  padding: '0.3em',
  '&:hover': {
    border: 'none',
    boxShadow: `inset 10px 10px 20px #ffffff62, inset -10px -10px 20px #ffffff62`,
    backgroundColor: '#000',
  },
});

const projects = [
  { title: 'Project 1', description: 'Late Night Cloud Kitchen & Delivery Service Web App', image: 'lnckitchen.png', links: ['https://www.lnckitchen.com.np', 'https://github.com/ravansagar/lnckitchen_web/'] },
  { title: 'Project 2', description: 'Tic Tac Toe game using minimax & minimax with alpha, beta pruning', image: 'TicTacToe.png', links: ['https://ravansagar.github.io/TicTacToe/','https://github.com/ravansagar/TicTacToe'] },
  { title: 'Project 3', description: 'Number Guessing Game GUI', image: 'GuessingGame.png', links: ['#','https://github.com/ravansagar/Number_Guessing_Game_Tkinter'] },
  { title: 'Project 4', description: 'Portfolio Website using HTML, CSS & JS', image: 'PortofolioWebsite.png', links: ['https://www.sagarthakur.com.np','https://github.com/ravansagar/portfolio_website'] },
  { title: 'Project 5', description: 'Ransome Ware : Encrypt media & documents Once clicked on No', image: 'ransomware.webp', links: ['#','https://github.com/ravansagar/Cryptography/blob/main/ransomWare.py'] },
  { title: 'Project 3', description: 'Self Replecting Virus : Replecate on all python programs on computer', image: 'virus.png', links: ['#','https://github.com/ravansagar/Cryptography/blob/main/selfReplicatingVirus.py'] },

];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-link">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <h1>{project.description}</h1>
                <Buttons
                  variant="outlined"
                  startIcon={<VisibilityOutlined />}
                  onClick={() => window.open(project.links[0], '_blank')}
                  disabled= {index === 2 || index === 4 ||  index === 5}
                >
                  Live Preview
                </Buttons>
                <Buttons
                  variant="outlined"
                  startIcon={<GitHub />}
                  onClick={() => window.open(project.links[1], '_blank')}
                >
                  Source Code
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
