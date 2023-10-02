import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface ValueProps {
    value: number;
    setValue: (expression: number) => void;
}

function Doubler({ value, setValue }: ValueProps): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}
// eslint-disable-next-line react/prop-types
function Halver({ value, setValue }: ValueProps): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue}></Doubler>
            <Halver value={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
