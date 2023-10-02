import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export interface ColorProps {
    colorIdx: number;
    setIdx: (expression: number) => void;
}

function ChangeColor({ colorIdx, setIdx }: ColorProps): JSX.Element {
    return (
        <Button onClick={() => setIdx((1 + colorIdx) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIdx }: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIdx],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIdx={colorIndex}
                    setIdx={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIdx={colorIndex}
                    setIdx={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
