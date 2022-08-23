import React, { useEffect, useState } from 'react'
import Card from '../../ReusableComponent/ReusableCard/Card'
import { MainContainer, RowContainer } from './main-elements'
import myquestion from '../../images/my-q.png'
import compquestion from '../../images/comp-q.png'
import paper from '../../images/paper.png'
import rock from '../../images/rock.png'
import scissor from '../../images/scissor.png'
import { PlayButton } from '../LandingPage/home-elements'

const Main = () => {

  const [moveDescription, setMoveDescription] = useState("Select your move.");
  const [verdict, setVerdict] = useState("Ganbare!");
  const [myScore, setMyScore] = useState(0);
  const [didWin, setDidWin] = useState(false)
  const [computerScore, setComputerScore] = useState(0);
  const [myAttackImage, setMyAttackImage] = useState(myquestion);
  const [computerAttackImage, setComputerAttackImage] = useState(compquestion);
  const [showDialog, setShowDialog] = useState(false);


  useEffect(() => {
    console.log("MY SCORE: ", myScore, ' - COMPUTER:', computerScore)

    if (myScore === 3 || computerScore === 3) {
      setShowDialog(true);
      if (myScore === 3) {
        setDidWin(true);
      }
      else {
        setDidWin(false);
      }
    }



  }, [myScore, computerScore])

  const pickMove = (attack) => {



    var opponentAttack = Math.floor((Math.random() * 3) + 1);


    if (attack === "paper") {
      if (opponentAttack === 1) {
        fight(attack, "paper", myScore, computerScore);
      }
      else if (opponentAttack === 2) {
        fight(attack, "rock", myScore, computerScore);
      }
      else if (opponentAttack === 3) {
        fight(attack, "scissor", myScore, computerScore);
      }
    }

    else if (attack === "rock") {
      if (opponentAttack === 1) {
        fight(attack, "paper", myScore, computerScore);
      }
      else if (opponentAttack === 2) {
        fight(attack, "rock", myScore, computerScore);
      }
      else if (opponentAttack === 3) {
        fight(attack, "scissor", myScore, computerScore);
      }
    }

    else if (attack === "scissor") {
      if (opponentAttack === 1) {
        fight(attack, "paper", myScore, computerScore);
      }
      else if (opponentAttack === 2) {
        fight(attack, "rock", myScore, computerScore);
      }
      else if (opponentAttack === 3) {
        fight(attack, "scissor", myScore, computerScore);
      }
    }



  }


  const fight = (myAttack, opponentAttack, myScore, computerScore) => {

    if (myAttack === "paper") {
      if (myAttack === "paper" && opponentAttack === "paper") {
        setMyAttackImage(paper)
        setComputerAttackImage(paper)
        setMoveDescription("You both choose paper")
        setVerdict("It's a draw!")

      }
      else if (myAttack === "paper" && opponentAttack === "rock") {
        setMyAttackImage(paper)
        setComputerAttackImage(rock)
        setMoveDescription("Paper covers rock")
        setVerdict("You win this round!")
        myScore++;
        setMyScore(myScore);

      }
      else {
        setMyAttackImage(paper)
        setComputerAttackImage(scissor)
        setMoveDescription("Scissors cuts paper")
        setVerdict("You lose this round!")
        computerScore++;
        setComputerScore(computerScore)

      }
    }
    else if (myAttack === "rock") {
      if (myAttack === "rock" && opponentAttack === "rock") {
        setMyAttackImage(rock)
        setComputerAttackImage(rock)
        setMoveDescription("You both choose rock")
        setVerdict("It's a draw!")
      }
      else if (myAttack === "rock" && opponentAttack === "paper") {
        setMyAttackImage(rock)
        setComputerAttackImage(paper)
        setMoveDescription("Paper covers rock")
        setVerdict("You lose this round!")
        computerScore++;
        setComputerScore(computerScore)

      }
      else {
        setMyAttackImage(rock)
        setComputerAttackImage(scissor)
        setMoveDescription("Rock breaks scissors")
        setVerdict("You win this round!")
        myScore++;
        setMyScore(myScore)

      }
    }

    else if (myAttack === "scissor") {
      if (myAttack === "scissor" && opponentAttack === "scissor") {
        setMyAttackImage(scissor)
        setComputerAttackImage(scissor)
        setMoveDescription("You both choose scissors")
        setVerdict("It's a draw!")
      }
      else if (myAttack === "scissor" && opponentAttack === "paper") {
        setMyAttackImage(scissor)
        setComputerAttackImage(paper)
        setMoveDescription("Scissors cuts paper")
        setVerdict("You win this round!")
        myScore++;
        setMyScore(myScore)

      }
      else {
        setMyAttackImage(scissor)
        setComputerAttackImage(rock)
        setMoveDescription("Rock breaks scissors")
        setVerdict("You lose this round!")
        computerScore++;
        setComputerScore(computerScore)

      }
    }

  }

  const playAgain = () =>{
    window.location.reload(true)
  }



  return (
    <MainContainer>
      <img className='title' src="https://see.fontimg.com/api/renderfont4/mLJLv/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SkFDSyBFTiBQT1k/dilo-world.png" alt='Jack En Poy' />
      <RowContainer>
        <Card player="You" attackImg={myAttackImage} myScore={myScore} computerScore={computerScore} mode={1} />
        <h3>VS</h3>
        <Card player="Computer" attackImg={computerAttackImage} myScore={myScore} computerScore={computerScore} mode={2} />
      </RowContainer>
      {
        !showDialog ?
          <>
            <div>
              <p className='description'>{moveDescription}</p>
              <br />
              <p className='verdict'>{verdict}</p>
            </div>
         
            <div className='cards'>
              <img src={paper} alt="Paper" onClick={() => { pickMove("paper"); }} />
              <img src={rock} alt="Rock" onClick={() => { pickMove("rock"); }} />
              <img src={scissor} alt="Scissor" onClick={() => { pickMove("scissor"); }} />
            </div>
          </>
          :
          <div className='dialog-box' style={{ background: didWin ? '#F6FFED' : '#FFF2F0', border: didWin ? '1px solid #52C41A' : '1px solid #FF4D4F' }}>
            {
              didWin ?
                <>
                  <h2>Congratulations!</h2>
                  <h3>You've won the game!</h3>
                </>
                :
                <>
                  <h2>You lose this round!</h2>
                  <h3>Better luck next time!</h3>
                </>
            }
            <br/>
            <PlayButton to="" onClick={playAgain}>Play Again</PlayButton>
          </div>
      }
    </MainContainer>
  )
}

export default Main