import React, { useState } from 'react';
import './ProjectPage.css';
import Header from '@/components/NavBar';
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
  borderRadius: '1em',
  padding: '0.3em',
  marginTop: '15vh',
  marginLeft: '2em',
  '&:hover': {
    border: 'none',
    boxShadow: `inset 10px 10px 20px #ffffff62, inset -10px -10px 20px #ffffff62`,
    backgroundColor: '#000',
  },
});
const projects = [
    { index : 0, 
      title: 'Late Night Cloud Kitchen', 
      description: `Late Night Cloud Kitchen (Lnckitchen.com.np) is a website designed for a restaurant that offers a wide variety of meals, delivered directly to customers across the city. The site features a user-friendly interface that makes it easy for customers to browse the menu, place orders, and explore the restaurant’s offerings. The clean and modern design highlights the restaurant's diverse culinary options, catering to various tastes and preferences. Whether users are in the mood for a quick snack or a gourmet meal, Lnckitchen.com.np provides a seamless dining experience from the comfort of their homes.`,
      image: 'lnckitchen.png', 
      links: ['https://www.lnckitchen.com.np', 'https://github.com/ravansagar/lnckitchen_web/'] },
    { index : 1, 
      title: 'Tic Tac Toe', 
      description: `The Tic Tac Toe project is a digital version of the classic game, implemented using advanced algorithms like minimax and minimax with alpha-beta pruning. These AI techniques make the game highly challenging, as the computer opponent is designed to be nearly unbeatable. The project is a great example of how game theory can be applied to create intelligent gaming experiences. The user interface is simple yet effective, making it accessible for all ages while providing a tough challenge for those familiar with the game.`, 
      image: 'TicTacToe.png', 
      links: ['https://ravansagar.github.io/TicTacToe/','https://github.com/ravansagar/TicTacToe'] },
    { index : 2, 
      title: 'Number Guessing Game', 
      description: `The Number Guessing Game is an interactive Python project that challenges players to guess a randomly generated number. The game features a graphical user interface (GUI) created using Tkinter, offering a visually appealing and user-friendly experience. Players receive feedback after each guess, helping them narrow down the possibilities. The simplicity of the game, combined with its engaging interface, makes it an enjoyable way to practice programming logic and GUI development. It’s an ideal project for those looking to learn about event-driven programming and user interaction in Python.`, 
      image: 'GuessingGame.png', 
      links: ['#','https://github.com/ravansagar/Number_Guessing_Game_Tkinter'] },
    { index : 3, 
      title: 'Portfolio Website', 
      description: `The Portfolio Website is a personal showcase developed using HTML, CSS, and JavaScript, designed to present professional work, skills, and achievements in a visually appealing format. The website features a responsive design, ensuring that it looks great on all devices, from desktops to smartphones. Interactive elements, smooth scrolling, and well-structured content make it easy for visitors to navigate and find information. This project highlights the developer's proficiency in front-end web development and serves as a digital resume to attract potential employers or clients. `, 
      image: 'PortofolioWebsite.png', 
      links: ['https://www.sagarthakur.com.np','https://github.com/ravansagar/portfolio_website'] },
    { index : 4, 
      title: 'Ransome Ware', 
      description: `The "Ransomware" script is a Python-based demonstration of how ransomware can function. Once executed, this script encrypts media and document files on the target system using the AES encryption algorithm through the aescrypt library. The ransomware is designed to present the user with a prompt, and if they click "No," the encryption process begins, locking the user out of their files. To add to the complexity, the script uses threading to manage multiple encryption tasks simultaneously, making the process faster and more efficient. The only way to stop the encryption process is by turning off the computer, as all other options are disabled. This example serves as a cautionary tale about the destructive potential of ransomware and the need for robust cybersecurity practices.`, 
      image: 'ransomware.webp', 
      links: ['#','https://github.com/ravansagar/Cryptography/blob/main/ransomWare.py'] },
    { index : 5, 
      title: 'Self Replecting Virus', 
      description: `The "Self-Replicating Virus" is a Python script designed to demonstrate the concept of a self-replicating virus. This script identifies all Python files on a computer and injects its code into each of them, effectively cloning itself across the system. The virus highlights how malicious software can propagate by copying its code into other programs, potentially leading to widespread infection. This example is often used for educational purposes to illustrate the dangers of self-replicating code and the importance of cybersecurity measures to protect against such threats.`, 
      image: 'virus.png', 
      links: ['#','https://github.com/ravansagar/Cryptography/blob/main/selfReplicatingVirus.py'] },
  ];

  const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project : any) => {
        setSelectedProject(project);
    };

    return (
        <div className="project-container"
        style={{ 
            backgroundImage: selectedProject ? `url(${selectedProject.image})` : 'none',
            backgroundSize: 'cover',
        }}>
            <div
                className="project-details"
            >
                {selectedProject && (
                    <div className="overlay">
                        <h1>{selectedProject?.description}</h1>
                        <div className="buttons-style">
                        <Buttons
                  variant="outlined"
                  startIcon={<VisibilityOutlined />}
                  onClick={() => window.open(selectedProject.links[0], '_blank')}
                  disabled= {selectedProject?.index === 2 || selectedProject.index === 4 ||  selectedProject.index === 5}
                >
                  Live Preview
                </Buttons>
                <Buttons
                  variant="outlined"
                  startIcon={<GitHub />}
                  onClick={() => window.open(selectedProject.links[1], '_blank')}
                >
                  Source Code
                </Buttons>
                </div>
                    </div>
                )}
            </div>

            <Header isVisible={true}/>
            <div className="project-list">
                <h1>Projects</h1>
                {projects.map(project => (
                    
                    <div
                        key={project?.id}
                        className={`project-item ${selectedProject === project ? 'selected' : ''}`}
                        onClick={() => handleProjectClick(project)}
                    >
                        {project.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
