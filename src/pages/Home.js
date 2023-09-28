import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import styled from "styled-components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


function ButtonLink({ to, children }) {
    const Button = styled.button`
      background-color: #1d1d1f;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 5px;
      margin: 10px 0px;
      width: 200px;
      cursor: pointer;
      text-decoration: none;
        &:hover,
        &:focus {
            background-color: black;
            transition: background 0.25s ease-in-out;
        }
    `;
    return <Link to={to} ><Button>{children}</Button></Link>;
}


function Home() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (



        <div className='home'>
            <Particles options={particlesOptions} init={particlesInit} />
            <div className="about">
                <h2>Driven to build, inspired by learning.</h2>
                <div className='intro'>
                    <p>
                        Can we decode the brain? Can a computer manage a Major League Baseball team? Can humans create a self-sufficient society with emerging technologies? These are just a few of the many questions driving my everyday experience. I am working towards uncovering how humans are programmed to live, through immersing myself in the data.
                        <br></br>
                        <br></br>
                        In my free time, you will find me digging through Baseball Reference, solving a New York Times Mini crossword, or streaming yet another fantasy football defense. I enjoy building, while uncovering how to build better.
                        <br></br>
                        <br></br>
                        Look around and engage with my work. Provide feedback, challenge ideas, and bring forward new insights. Let’s work together and code the future.
                    </p>
                    <div className='buttons'>
                        <ButtonLink to="/portfolio">Portfolio</ButtonLink>
                        <ButtonLink to="/gallery">Gallery</ButtonLink>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Home;