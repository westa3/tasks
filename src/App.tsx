import React from "react";
import "./App.css";

import { Button, Container, Row, Col } from "react-bootstrap";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript heading</h1>
            </header>
            <div>
                <img
                    src={"./Sunset.jpg"}
                    alt="A picture of the sunset over water"
                />
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "column-width",
                                height: "20px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ol>
                            <li>First element</li>
                            <li>Second element</li>
                            <li>Third element</li>
                        </ol>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "column-width",
                                height: "20px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <div>
                            <Button onClick={() => console.log("Hello World!")}>
                                {" "}
                                Log Hello World{" "}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Ava West</p>
            <p>Hello World</p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
