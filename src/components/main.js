'use client'
import React, { useState } from 'react';
import About from './about';
import Skills from './skills';
import Projects from './Projects';
import ConnectWithMe from './contact';

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = inputValue.trim().toLowerCase();
      let resultComponent;

      switch (command) {
        case 'ls':
          resultComponent = (
            <div className='output'>
              <p className="text-xl font-semibold item">Available commands:</p>
              <ul className="pl-5">
                <li>whoami - Show personal information</li>
                <li>projects - Show projects information</li>
                <li>skills - Show skills information</li>
                <li>connect - Show connect information</li>
                <li>ls - List available commands</li>
                <li>clear - Clear the terminal</li>
              </ul>
            </div>
          );
          break;
        case 'whoami':
          resultComponent = <About />;
          break;
        case 'projects':
          resultComponent = <Projects />;
          break;
        case 'skills':
          resultComponent = <Skills />;
          break;
        case 'connect':
          resultComponent = <ConnectWithMe />;
          break;
        case 'clear':
          setHistory([]);
          setInputValue('');
          return;
        default:
          resultComponent = (
            <div className='output'>
              <p className="text-xl font-semibold text-red-700">command not found: {inputValue}</p>
            </div>
          );
          break;
      }

      setHistory((prevHistory) => [
        ...prevHistory,
        { command: `root@Priyanshu:~$ ${inputValue}`, result: resultComponent },
      ]);
      setInputValue('');
    }
  };

  return (
    <div className='flex flex-col justify-start items-start px-5 py-2 gap-5 w-full min-h-screen main bg-black font-mono'>
      {history.map((item, index) => (
        <div key={index} className='w-full'>
          <p className='font-medium text-md text-red-700'>{item.command}</p>
          <div className='mt-3'>{item.result}</div>
        </div>
      ))}
      <div className='flex justify-start items-center py-2 w-full gap-2'>
        <p className='text-md'>{`root@Priyanshu: ~$`}</p>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleCommand}
          placeholder='Start typing with ls...'
          className='flex-grow outline-none bg-transparent text-green-500 placeholder:text-green-600 text-md'
        />
      </div>
    </div>
  );
};

export default MainPage;