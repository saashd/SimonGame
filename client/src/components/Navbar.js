import React from "react";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from "styled-components";
import {device} from "../utils/responsive";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../redux/gameRedux";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(to right, #3f51b5, #25b7c4);
  background: -webkit-linear-gradient(left, #3f51b5, #25b7c4);
  @media only screen and ${device.mobile} {
    height: 50px;
  }
`;

const Wrapper = styled.div`
  padding: 0px 1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10vh;
`;

const Center = styled.div`
  flex: 10;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: left;
  @media only screen and ${device.mobile} {
    font-size: 18px;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media only screen and ${device.mobile} {
    font-size: 10px;
    margin-left: 10px;
  }
`;

const LinkItem = styled.a`
  text-decoration: none !important;
  color: white;
`
const Icons = styled.div`
  display: flex;
  gap: 1em;
`
const Navbar = () => {
    const user = useSelector((state) => state.game.currentUser);
    const dispatch = useDispatch();
    return (
        <Container>
            <Wrapper>
                <Center>
                    <Link to="/" style={{textDecoration:"none",color:"white"}}>
                        <Logo>Simon Game</Logo>
                    </Link>
                </Center>
                {user ?
                    <Icons>
                        <IconButton component={Link} to="/user">
                            <AccountCircleIcon style={{color: "white"}}/>
                        </IconButton>

                        <IconButton onClick={() => dispatch(userLogout())}>
                            <LogoutOutlinedIcon style={{color: "white"}}/>
                        </IconButton>
                    </Icons>
                    :
                    <>
                        <LinkItem href="/register">
                            <MenuItem>REGISTER</MenuItem>
                        </LinkItem>
                        <LinkItem href="/login">
                            <MenuItem>SIGN IN</MenuItem>
                        </LinkItem>
                    </>}
            </Wrapper>
        </Container>
    );
};

export default Navbar;
