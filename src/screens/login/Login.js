    import React, { useState, useRef, useEffect } from 'react';
    import './Login.scss';
    import { Button, Input, Text } from '@nextui-org/react';
    import Test from '../test/Test';
    import { GoogleLogin } from '@react-oauth/google';
    import { useNavigate} from 'react-router-dom';


    function Login() {
        let navigate = useNavigate();

        const responseMessage = (response) => {
            console.log(response);
            navigate('/');


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
