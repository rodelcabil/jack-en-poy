import React from 'react'
import { HomeContainer, PlayButton } from './home-elements'
import logo from '../../images/jackenpoy.png'

const Home = () => {


    return (
        <HomeContainer>
            <img className='title' src="https://see.fontimg.com/api/renderfont4/mLJLv/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SkFDSyBFTiBQT1k/dilo-world.png" alt="Jack en Poy" />
            <br/>
            <img className='logo' src={logo} alt="Jack En Poy Image"/>
            <br />
            <PlayButton to="/game">Play Now</PlayButton>
        </HomeContainer>
    )
}

export default Home