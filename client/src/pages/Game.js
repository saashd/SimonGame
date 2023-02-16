import React, {useEffect, useState} from "react";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";
import {createGame} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {device} from "../utils/responsive";

const ButtonWrapper = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  &.disabled{
    opacity:0.5;
  }
  @media only screen and ${device.mobile} {
    width: 250px;
    height: 250px;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  width: 50%;
  height: 50%;
  border: none;

  ${props => {
    switch (props.color) {
      case "red":
        return "top: 0;  left: 0; background-color: #dc3545;";
      case "yellow":
        return " top: 0;  right: 0; background-color: #ffc107;";
      case "green":
        return "bottom: 0;  left: 0; background-color: #198754;";
      case "blue":
        return "bottom: 0;  right: 0; background-color: #0d6efd;";
    }
  }}
  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: inset 0em 0em 0em 10em rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.clicked {
    opacity: 1;
  }


`
const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;

  h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1.2rem;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  margin: 3vh 0;
`

const ActionButton = styled.button`
  margin: 0 1vw;
  text-align: center;
  text-decoration: none;
  border: 0.1em solid rgba(7, 65, 196, 0.76);
  background: rgba(7, 65, 196, 0.52);
  color: white;
  font-size: 0.9em;
  padding: 2vh;
  border-radius: 1em;
  transition: border-radius 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.9em;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
// create a new Audio object for each sound effect
const sounds = {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
}
const colors = ['green', 'blue', 'red', 'yellow']
const Game = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.game);
    const [currentScore, setCurrentScore] = useState(0);
    const [sequencesList, setSequencesList] = useState([]);
    const [stepInCurrentSequence, setStepInCurrentSequence] = useState(0);
    const [gameOver, setGameOver] = useState(null);
    const [displaySequence, setDisplaySequence] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);

    const handleButtonClick = (color) => {
        sounds[color].play();
        const generatedSequence = [...sequencesList.at(-1)];
        if (color !== generatedSequence[stepInCurrentSequence]) {
            setGameOver(true)
            setIsPlayed(true);
            const game = {
                sequence: [...sequencesList],
                uid: currentUser._id,
                score: currentScore
            }
            createGame(game, dispatch)
            return;
        }
        if (stepInCurrentSequence === generatedSequence.length - 1) {
            setCurrentScore(currentScore + 1)
            setStepInCurrentSequence(0)
            setTimeout(() => {
                generateLevelSequence();
                setDisplaySequence(true);
            }, 1000);
        } else {
            setStepInCurrentSequence(stepInCurrentSequence + 1)
        }
    };
    const generateLevelSequence = () => {
        const random = Math.floor(Math.random() * colors.length);
        if (sequencesList.length === 0) {
            setSequencesList([...sequencesList, [colors[random]]])
            return [colors[random]]
        }
        const newLevelSequence = [...sequencesList.at(-1)]
        newLevelSequence.push(colors[random])
        setSequencesList([...sequencesList, newLevelSequence])
        return newLevelSequence
    }
    const startTheGame = () => {
        generateLevelSequence();
        setIsPlayed(true);
        setDisplaySequence(true);
    }
    const resetTheGame = () => {
        setIsPlayed(false);
        setCurrentScore(0);
        setSequencesList([]);
        setStepInCurrentSequence(0);
        setGameOver(null);
        setDisplaySequence(false);

    };

    useEffect(() => {
        if (displaySequence === true) {
            const sequence = [...sequencesList.at(-1)];
            let i = 0;
            const intervalId = setInterval(() => {
                if (i >= sequence.length) {
                    clearInterval(intervalId);
                    setDisplaySequence(false);
                    return;
                }
                const color = sequence[i];
                const button = document.getElementById(`${color}Button`);
                if (button) {
                    button.classList.add("clicked");
                    setTimeout(() => {
                        button.classList.remove("clicked");
                    }, 200);
                    button.click();
                    sounds[color].play();
                }
                i++;
            }, 500);
        }
    }, [sequencesList, displaySequence]);

    return (
        <Wrapper>
            <Container>
                {!gameOver ? <p> Score: {currentScore}</p> :
                    <p>Game Over! Your score is {currentScore}.</p>
                }
                <ButtonWrapper className={!isPlayed&&"disabled"}>
                    {colors.map((color) => (
                        <PlayButton
                            id={`${color}Button`}
                            key={color}
                            color={color}
                            onClick={() => handleButtonClick(color)}
                            disabled={gameOver || displaySequence}
                        />
                    ))}
                </ButtonWrapper>
                <ActionsWrapper>
                    <ActionButton onClick={resetTheGame} disabled={displaySequence}>RESET</ActionButton>
                    <ActionButton onClick={startTheGame} disabled={isPlayed}>START</ActionButton>
                </ActionsWrapper>
            </Container>
        </Wrapper>
    );
};

export default Game;
