import React, { useState, useEffect } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { useNavigate} from 'react-router-dom';
import { Button, Input} from '@nextui-org/react';
library.add(faSquarePlus, faSquareMinus, faArrowRight, faSquare);

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    document.querySelector('.title').classList.add('fade-in');
    document.querySelector('.subheader').classList.add('fade-in');
    document.querySelector('.date').classList.add('fade-in');
    document.querySelector('.date').textContent = formattedDate;
  }, []);

  const [inputBoxes, setInputBoxes] = useState([
    {
      id: 1,
      text: '',
    },
  ]);

  const [inputValues, setInputValues] = useState({
    1: '', // Initial input box
  });

  const handleAddButtonClick = () => {
    const newId = inputBoxes.length + 1;
    const newInputBox = {
      id: newId,
      text: '',
    };

    setInputBoxes([...inputBoxes, newInputBox]);
    setInputValues({ ...inputValues, [newId]: '' });
  };

  const handleDeleteButtonClick = (id) => {
    if (inputBoxes.length === 1) {
      setInputValues({ ...inputValues, [id]: '' });
    } else {
      setInputBoxes(inputBoxes.filter((box) => box.id !== id));
  
      const newInputValues = { ...inputValues };
      delete newInputValues[id];
      setInputValues(newInputValues);
    }
  };
  

  const handleInputChange = (id, text) => {
    setInputValues({ ...inputValues, [id]: text });
  };

  const handleNextButtonClick = () => {
    navigate('/main');
  };

  return (
      <div className="body-todo">
        <div className="title-bar"></div>
        <p className="title fade-in">Start Your Day Right!</p>

        <p className="subheader fade-in">What do you want to get done today?</p>

        <p className="date fade-in">Todays Day</p>

        <div id="custom-input" className="custom-input">
          {inputBoxes.map((box) => (
            <div className="input-box" key={box.id}>
              <Input
                clearable
                status='primary'
                width='25vw'
                type="text"
                placeholder="What to do?"
                value={inputValues[box.id]}
                onChange={(e) => handleInputChange(box.id, e.target.value)}
                css = {{
                  backgroundColor: '#0080ff',
                  // $$inputColor: '#0080ff'
                }}
          
              />
              <Button auto className="delete-button" onClick={() => handleDeleteButtonClick(box.id)}>
                <FontAwesomeIcon icon={faSquareMinus} className="delete-icon fa-lg" style={{ color: '#ff3a24' }} />
              </Button>
            </div>
          ))}
        <Button size='xs' className="add-button" id="add-button" onClick={handleAddButtonClick} style= {{width: '0.5vw'}}>
          <FontAwesomeIcon icon={faSquarePlus} className="add-icon" style={{ color: '#0080ff' }} />
        </Button>
        </div>

        

        <div className="submit-buttons">
          <button className="skip-button">Skip</button>
          <button className="next-button" id="next-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: '#0080ff' }} />
          </button>
        </div>
      </div>
  );
}

export default App;
