    import React, { useState, useRef, useEffect } from 'react';
    import './Login.scss';
    import { Button, Input, Text } from '@nextui-org/react';
    import Test from '../test/Test';
    import { GoogleLogin} from '@react-oauth/google';
    import jwtDecode from 'jwt-decode';
    
    import { useNavigate} from 'react-router-dom';
    import axios from 'axios';

    function Login() {
        let navigate = useNavigate();
        const [form, setForm] = useState({
            email: "",
            name: "",
            jti: "",
        })

        async function addRecord() {
            const person = {...form};
            await fetch("http://localhost:5050/record", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(person),
            })
            .catch(error => {
                window.alert(error);
                return;
            });

            setForm({email: "", name: "", jti: ""})
            navigate('/');

        }
        const responseMessage = (response) => {
            const decoded = jwtDecode(response.credential);
            console.log(decoded);
            
            setForm({
                ...form,
                email: decoded.email,
                name: decoded.name,
                jti: decoded.jti,
              });
            

            if (decoded.email != "") {
                addRecord();
            }
            

        };
        const errorMessage = (error) => {
            console.log(error);
        };

       
        
    

        return (
        <div className="body">
            <div className='glowing-circle'></div>
            <Test />
            <div className='centered-container'>

                <div className="centered-text">

                    <Text
                    h1
                    size={80}
                    css={{
                    textGradient: "45deg, $purple500 30%, $blue500 60%",
                    }}
                    weight="bold"
                >   
                    Stellar
                </Text>
            
                </div>
                <div className='login-but-container'>
                    <GoogleLogin
                        onSuccess={responseMessage}
                        onError={errorMessage}
                        shape = "pill" />
                    
                </div>
                
            </div>
        </div>
        );
    }

    export default Login;
