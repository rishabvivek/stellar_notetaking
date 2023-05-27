import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


  function Main() {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
    const editorRef = useRef(null);
    const [completedResp, setCompletedResp] = useState("");
   
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty()
    );

    async function fetchData() {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",

        {
          prompt: 'How old is Morgan Freeman',
          model: 'text-davinci-003',
          max_tokens: 50,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );

      return response.data.choices[0].text;
    }



    async function aiClick() {
      try{
        console.log(process.env.REACT_APP_API_KEY)
        const completedResponse = await fetchData();
        setCompletedResp(completedResponse);
      } catch(error) {
        console.error(error);

      }
    }



    const toggleLeftSidebar = () => {
      setLeftSidebarOpen(!leftSidebarOpen);
    };

    const toggleRightSidebar = () => {
      setRightSidebarOpen(!rightSidebarOpen);
    };


    return (
      <div className="body">
        <div className="container">
          <div className={`sidebar-left ${leftSidebarOpen ? '' : 'sidebar-left-closed'}`}>
            <div className="sidebar-content">
              <h2>Left Sidebar</h2>
              <p>This is the left sidebar content.</p>
            </div>
            <Button auto className="sidebar-left-toggle" onClick={toggleLeftSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          <div className='editor-container'>
            <div className='editor-wrapper'>
              <Editor editorState={editorState} onChange={setEditorState} />
            </div>
          </div>
          <div className={`sidebar ${rightSidebarOpen ? '' : 'sidebar-right-closed'}`}>
            <Button auto className="sidebar-toggle" onClick={toggleRightSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <div className="sidebar-content">
              <h2 className="ai-text">AI ASSISTANT</h2>
              <Button auto className="test" id="test-btn" onClick={aiClick}>
                TEST ME!
              </Button>
              {completedResp && <p> {completedResp }</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Main;
