import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //attempts left
    const [attLeft, setAttLeft] = useState<number>(3);
    //attempts requesting - must be a string, then parse into int
    const [attReq, setAttReq] = useState<string>("");
    //parse attReq into int
    const ReqAttInt = parseInt(attReq) || 0;

    //changing attempts requested
    function changeAttReq(event: React.ChangeEvent<HTMLInputElement>) {
        setAttReq(event.target.value);
    }
    //changing attempts left
    function changeAttLeft() {
        setAttLeft(ReqAttInt + attLeft);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts Left: {attLeft}</div>
            <Form.Group controlId="RequestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attReq}
                    onChange={changeAttReq}
                />
            </Form.Group>
            <Button
                onClick={() => setAttLeft(attLeft - 1)}
                disabled={attLeft === 0 ? true : false}
            >
                use
            </Button>
            <Button onClick={changeAttLeft}>gain</Button>
        </div>
    );
}
