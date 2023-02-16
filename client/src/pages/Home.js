import React from "react";
import Wrapper from "../components/Wrapper";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {
    Container,
    UserDataWrapper,
    Text,
    WidgetTable,
    WidgetTh,
    WidgetTd,
    WidgetHeaderTr, WidgetContentTr
} from "../utils/StyledComponents"
import styled from "styled-components";


const Title = styled.h1`
  text-align: left;
  margin: 6vh 0 1vh 1vw;
`
const Home = () => {
    const {currentUser, currentUserHighestScore, topTenBestGames} = useSelector((state) => state.game);
    return (
        <Wrapper>
            <Container>
                <UserDataWrapper>
                    <Text>Hi <b>{currentUser.username}</b>,<br/>Your Best Score: {currentUserHighestScore ?? 0}</Text>
                    <Button component={Link} to="/game" variant={"outlined"}>PLAY</Button>
                </UserDataWrapper>
                <Title>Leaderboard (Top 10)</Title>
                <WidgetTable>
                    <tbody>
                    <WidgetHeaderTr>
                        <WidgetTh>Rank</WidgetTh>
                        <WidgetTh>Username</WidgetTh>
                        <WidgetTh>Score</WidgetTh>
                    </WidgetHeaderTr>
                    {topTenBestGames.map((game, index) => (
                        <WidgetContentTr key={game._id}>
                            <WidgetTd>{index + 1}</WidgetTd>
                            <WidgetTd>{game.username}</WidgetTd>
                            <WidgetTd>{game.score}</WidgetTd>
                        </WidgetContentTr>
                    ))}
                    </tbody>
                </WidgetTable>
            </Container>
        </Wrapper>
    );
};

export default Home;
