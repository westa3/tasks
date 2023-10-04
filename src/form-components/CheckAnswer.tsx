import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //state to handle user input
    const [userIn, setUserIn] = useState<string>("");

    //track changes
    function updateIn(event: React.ChangeEvent<HTMLInputElement>) {
        setUserIn(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Check Answer</h3>
                <Form.Group controlId="checkAnswer">
                    <Form.Label>Write Your Answer:</Form.Label>
                    <Form.Control value={userIn} onChange={updateIn} />
                </Form.Group>
            </div>
            <div>
                {userIn === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </>
    );
}
