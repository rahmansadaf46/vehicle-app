import React from 'react';
import { BlinkingCursorTextBuilder, FloatingLettersTextBuilder } from 'react-animated-text-builders'
import './Search.css'

const Search = () => {
    return (
        <div style={{ marginTop: '68px' }} className="search-container">
            <div style={{ margin: '0 auto', textAlign: 'left' }} className="container">
                <h1 className="headline text-white">
                    <BlinkingCursorTextBuilder
                        floatingSpeed={500}
                        lettersAppearanceDelay={50}
                        textStyle={{ fontWeight: "bold", font: "Times New Roman", fontSize: "18px" }}
                        style={{ transform: "rotate(-10deg)", marginTop: "5px", marginBottom: "20px" }}
                        cursorComponent={<div style={{ color: "#393650" }}> 24/7!!</div>}
                        blinkTimeAfterFinish={-1}> We are open </BlinkingCursorTextBuilder>

                    <p style={{ color: "#E2F3F9" }}><FloatingLettersTextBuilder
                        floatingSpeed={500}
                        lettersAppearanceDelay={50}
                        animationMaxMargin={"200px"}
                        animationMinMargin={"0px"}
                    > At&nbsp; your&nbsp; Service..Sir!! </FloatingLettersTextBuilder></p>
                </h1>
                {/* <div style={{ position: 'relative' }} className="mt-4">
                    <input className="search-item pl-4" placeholder="Search items..." type="text" />
                    <button style={{ backgroundColor: '#59C8D9', color: 'white', borderRadius: '30px', left: '-40px', top: '-2px', height: '40px', position: 'relative' }} className="btn pr-4 pl-4" href="#">Search</button>
                </div> */}
            </div>

        </div>
    );
};

export default Search;