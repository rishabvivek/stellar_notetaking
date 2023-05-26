import React, { useEffect } from 'react';
import './Test.scss';
import { Button, Input, Text } from '@nextui-org/react';

function Test() {
  useEffect(() => {
    const maxLines = 7; // Maximum number of lines to fall simultaneously
    const container = document.querySelector('.rain-container');
    const lines = [];

    const createLine = () => {
      if (lines.length < maxLines) {
        const line = document.createElement('div');
        line.classList.add('rain-line');
        line.style.left = `${Math.random() * -25}%`;
        line.style.top = `${Math.random() * 25}%`;
        line.style.height = `${Math.random() * 80 + 20}%`; // Random line length between 20% and 100%
        container.appendChild(line);
        lines.push(line);
      }
    };

    const removeLine = (line) => {
      container.removeChild(line);
      lines.splice(lines.indexOf(line), 1);
    };

    const spawnLine = () => {
      createLine();

      if (lines.length > 0) {
        const lineToRemove = lines.shift();
        setTimeout(() => {
          removeLine(lineToRemove);
        }, 7000); // Delay for 2 seconds before removing the line
      }

      setTimeout(spawnLine, Math.random() * 2000 + 500); // Random delay between 500ms and 2500ms
    };

    spawnLine();
  }, []);

  return (
    <div className="body">
      <div className="rain-container"></div>
    </div>
  );
}

export default Test;
