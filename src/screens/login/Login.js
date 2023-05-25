import React, { useState, useRef, useEffect } from 'react';
import './Login.scss';
import { Button, Input, Text } from '@nextui-org/react';


  function Login() {
   

    return (
    <div className="body">
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
                <Button auto className='login-btn'>Login</Button>
            </div>
            <div className='signup-but-container'>
                <Button auto className='signup-btn'>Sign Up</Button>
            </div>
            
        </div>
    </div>
    );
  }

  export default Login;
