import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface PosProps {
    position: number;
    setPosition: (expression: number) => void;
}

function ShoveBoxButton({ position, setPosition }: PosProps) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox(posit: number): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: posit + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [pos, setPos] = useState<number>(10);
    const posit = pos;
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {pos}</span>
            <div>
                <ShoveBoxButton
                    position={pos}
                    setPosition={setPos}
                ></ShoveBoxButton>
                {MoveableBox(posit)}
            </div>
        </div>
    );
}
