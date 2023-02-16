import {useState} from "react";
import {login} from "../redux/apiCalls";
import {useDispatch} from "react-redux";
import {AuthContainer, AuthWrapper, Title, Form, Input, Button, Link} from "../utils/StyledComponents"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    };
    return (
        <AuthContainer>
            <AuthWrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick}>
                        LOGIN
                    </Button>
                    <Link href='/register'>CREATE A NEW ACCOUNT</Link>
                </Form>
            </AuthWrapper>
        </AuthContainer>
    );
};

export default Login;
