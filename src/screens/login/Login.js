    import React, { useState, useRef, useEffect } from 'react';
    import './Login.scss';
    import { Button, Input, Text } from '@nextui-org/react';
    import Test from '../test/Test';


    function Login() {
    

        return (
        <div className="body">

            <Test />
            <div className='centered-container'>

                <div className="centered-text">

                    <Text
                    h1
                    size={80}
                    css={{
                    textGradient: "45deg, $purple700 10%, $cyan800 50%",
                    }}
                    weight="bold"
                >
                    Stellar
                </Text>
            
                </div>
                <div className='login-but-container'>
                    <Button auto className='login-btn'>
                        <Text className='signup-text'
                        h3
                        size = "$md"
                        css={{
                            color:"$blue900",
                        }}
                        > Login</Text>

                    </Button>
                </div>
                <div className='signup-but-container'>
                    <Button auto className='signup-btn'>
                        <Text className='signup-text'
                        h3
                        size = "$md"
                        css={{
                            color:"$blue900",
                        }}
                        > Signup</Text>
                    </Button>
                </div>
                
            </div>
        </div>
        );
    }

    export default Login;
