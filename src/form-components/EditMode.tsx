import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //handling edit mode - SWITCH
    const [editMode, setEditMode] = useState<boolean>(false);
    //handling student name - STRING
    const [name, setName] = useState<string>("Your Name");
    //handling is or isn't a student - CHECKBOX
    const [isStudent, setStudent] = useState<boolean>(true);

    //change name when inputed
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    //change student when not checked or checked
    function changeStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    //change edit mode
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Row>
                <Col>
                    <Form.Check
                        type="switch"
                        id="EditModeSwitch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={changeMode}
                    />
                </Col>
                <Col>
                    {editMode ? (
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="is-a-student"
                                label="Is a Student?"
                                checked={isStudent}
                                onChange={changeStudent}
                            />
                            <Form.Group controlId="nameChange">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={changeName}
                                />
                            </Form.Group>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </Col>
            </Row>
            <Row>
                <div>
                    {isStudent ? (
                        <span> {name} is a student</span>
                    ) : (
                        <span> {name} is not a student</span>
                    )}
                </div>
            </Row>
        </div>
    );
}
