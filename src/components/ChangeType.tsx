import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const TYPE_TRANSITIONS: Record<QuestionType, QuestionType> = {
    short_answer_question: "multiple_choice_question",
    multiple_choice_question: "short_answer_question"
};

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        const newType = TYPE_TRANSITIONS[type];
        setType(newType);
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>
                {type === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
