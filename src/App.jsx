import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiLock, FiUnlock } from "react-icons/fi";


const accordionList = [
  { title: "HTML Fundamentals", content: "Learn about elements, tags, and structure of web pages." },
  { title: "CSS Basics", content: "Understand styling, selectors, and layouts using CSS." },
  { title: "JavaScript Basics", content: "Learn variables, functions, loops, and events in JavaScript." },
  { title: "Advanced JavaScript", content: "Explore ES6 features, async/await, and DOM manipulation." },
  { title: "React.js Overview", content: "Understand components, props, and state in React." },
  { title: "React Hooks", content: "Learn about useState, useEffect, and custom hooks." },
  
];

export default function App() {
  const [openIndex , setOepnIndex] = useState(null);
  const [unlockedIndex , setUnlockedIndex] = useState(0);

  const handelToggle = (index) => {
    if(openIndex === index){
      setOepnIndex(null);
    }
    else{
      setOepnIndex(index);
    }
  }

  const unloackNext = () => {
    if(unlockedIndex < accordionList.length - 1){
      setUnlockedIndex(unlockedIndex + 1);
    }
  }

  return (
    <div className='main-container'>
      <div className='accordion-container'>
        <h2 className='title'>Accordion</h2>

        {
          accordionList.map((list , index) => {
            const isUnloacked = index <= unlockedIndex;
            const isOpen = openIndex === index;

            return (
              <div
                className={`btn-container ${isOpen ? "btn-container-border" : ""} }`}
                key={index}
              >
                <button onClick={() => handelToggle(index)} disabled={!isUnloacked} className={`accordion-btn ${isOpen ? "open remove-border" : "not-open"} ${isUnloacked ? "cursor" : "no-cursor"}`}>

                  <span className='list-title'>{index + 1}. {list.title}</span>
                  <span>
                    {
                      !isUnloacked ? (
                        <FiLock className='lock' size={18}/>
                      ) : isOpen ? (
                        <FiChevronUp className='up' size={25}/>
                      ) : (
                        <FiChevronDown className='down' size={25}/>
                      )
                    }
                  </span>
                </button>
                {
                  isOpen && (
                    <div className='list-content-container'>
                      <p className='list-content'>{list.content}</p>

                      {
                        index < accordionList.length - 1 && (
                          <button 
                            disabled={index !== unlockedIndex}
                            onClick={() => unloackNext()}
                            className={`unlock-btn ${index === unlockedIndex ? "unlock-btn-color" : "unlock-btn-color2"}`}
                          >
                            <FiUnlock size={20}/>
                            Unlock Next Topic
                          </button>
                        )
                      }
                    </div>
                  )
                }
              </div>
            );
          })
        }
      </div>

    </div>
  )
}
