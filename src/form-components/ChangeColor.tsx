import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown"
];
const DEF_COLOR = COLORS[7];

export function ChangeColor(): JSX.Element {
    const [colorSel, setColorSel] = useState<string>(DEF_COLOR);

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColorSel(event.target.value);
    }

    function colorBack(colorBackground: string): JSX.Element {
        return <div style={{ color: colorBackground }}>{colorBackground}</div>;
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    color={color}
                    type="radio"
                    name={color}
                    onChange={changeColor}
                    id="radio-button"
                    label={colorBack(color)}
                    value={color}
                    checked={colorSel === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colorSel }}
                >
                    {colorSel}
                </span>
            </div>
        </div>
    );
}
