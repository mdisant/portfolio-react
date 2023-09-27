import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import styled from "styled-components";


function ButtonLink({ to, children }) {
    const Button = styled.button`
      background-color: #1d1d1f;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 5px;
      margin: 10px 0px;
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
    return (
        <div className='home'>
            <div className="about">
                <h2>Driven to build, inspired by learning.</h2>
                <div className='intro'>
                    <p>
                        Can we decode the brain? Is the next doctor a computer? How does bias evolve in an algorithm? To what extent are models limited by their data? These are just a few of the many questions driving my everyday experience. I am working towards uncovering how humans are programmed to live, through immersing myself in the data. Every action we take is subconsciously calculated, and I believe in the power of technology to replicate this ability.
                        <br></br>
                        <br></br>
                        In my free time, you will find me digging through Baseball Reference, solving a New York Times Mini crossword, or reading about Black Swans. I gravitate towards contextual data and look for ways to build on it.
                        <br></br>
                        <br></br>
                        Look around and engage with my educational, professional, and personal projects. Provide feedback, challenge ideas, and bring forward new insights. Let’s work together and code the future.
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