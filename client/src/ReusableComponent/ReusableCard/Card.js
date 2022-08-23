import React from 'react'
import { CardContainer, RowContainer } from './card-elements'

const Card = ({ player, attackImg, mode, myScore, computerScore }) => {

    return (
        <>
            {mode === 1 ?
                <CardContainer>
                    <h3 className='player'>{player}</h3>
                    <br />
                    <img src={attackImg} alt="Attack" />

                    <RowContainer>
                        <div className='circle' style={{ background: myScore >= 1 ? '#007FFF' : "grey" }} />
                        <div className='circle' style={{ background: myScore >= 2 ? '#007FFF' : "grey" }} />
                        <div className='circle' style={{ background: myScore >= 3 ? '#007FFF' : "grey" }} />
                    </RowContainer>

                </CardContainer>
                :
                <CardContainer>
                    <>
                        <h3 className='player'>{player}</h3>
                        <br />
                        <img src={attackImg} alt="Attack" />

                        <RowContainer>
                            <div className='circle' style={{ background: computerScore >= 1 ? '#FFBF00' : "grey" }} />
                            <div className='circle' style={{ background: computerScore >= 2 ? '#FFBF00' : "grey" }} />
                            <div className='circle' style={{ background: computerScore >= 3 ? '#FFBF00' : "grey" }} />
                        </RowContainer>
                    </>
                </CardContainer>
            }
        </>
    )

}

export default Card