import {register} from "../redux/apiCalls";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AuthContainer, AuthWrapper, Title, Form, Input, Button} from "../utils/StyledComponents"


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            register(dispatch, {username, password, confirmPassword})
        } else {
            window.alert('passwords dont match')
        }

    };
    return (
        <AuthContainer>
            <AuthWrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleClick}>
                    <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} required/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}
                           required/>
                    <Input placeholder="confirm password" type="password"
                           onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    <Button type="submit">CREATE</Button>
                </Form>
            </AuthWrapper>
        </AuthContainer>
    );
};

export default Register;
