import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isprogress, setProgress] = useState<boolean>(false);

    function StartProgress(): void {
        //checks for if not in progress and more than 0 attempts
        if (attempts > 0 && isprogress === false) {
            setProgress(true);
            if (attempts - 1 === 0) {
                setProgress(false);
            }
            setAttempts(attempts - 1);
        }
    }

    function MulliganProgress(): void {
        if (isprogress === false) {
            setAttempts(attempts + 1);
        }
    }

    function StopProgress(): void {
        if (isprogress === true) {
            setProgress(false);
        }
    }

    return (
        <div>
            <Button
                onClick={StartProgress}
                disabled={attempts === 0 ? !isprogress : isprogress}
            >
                Start Quiz
            </Button>
            <Button disabled={isprogress} onClick={MulliganProgress}>
                Mulligan
            </Button>
            <Button disabled={!isprogress} onClick={StopProgress}>
                Stop Quiz
            </Button>
            Attempts: <span>{attempts}</span>
        </div>
    );
}
