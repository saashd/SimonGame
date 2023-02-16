import Wrapper from "../components/Wrapper";
import {useSelector} from "react-redux";
import React from "react";
import {Container, WidgetTable, WidgetTh, WidgetTd, Text} from "../utils/StyledComponents"


const UserProfile = () => {
    const {currentUser, currentUserGames} = useSelector((state) => state.game);

    const parseDate = (date) => {
        const newDate=new Date(date);
        return newDate.toDateString()
    }
    return (<Wrapper>
        <Container>
            <Text>Hi <b>{currentUser.username}</b>, <br />
            Here are your scores</Text>
            <WidgetTable>
                <tbody>
                <tr>
                    <WidgetTh>Rank</WidgetTh>
                    <WidgetTh>Date</WidgetTh>
                    <WidgetTh>Score</WidgetTh>
                </tr>
                {currentUserGames.map((game, index) => (
                    <tr key={game._id}>
                        <WidgetTd>{index + 1}</WidgetTd>
                        <WidgetTd>{parseDate(game.createdAt)}</WidgetTd>
                        <WidgetTd>{game.score}</WidgetTd>
                    </tr>
                ))}
                </tbody>
            </WidgetTable>
        </Container></Wrapper>);
}


export default UserProfile;