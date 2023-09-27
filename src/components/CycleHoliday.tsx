import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Christmas" | "Juneteenth" | "NewYears" | "Halloween" | "Mabon";

const HOL_ALPHA_TRANSITIONS: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "Juneteenth",
    Juneteenth: "Mabon",
    Mabon: "NewYears",
    NewYears: "Christmas"
};

const HOL_YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    NewYears: "Juneteenth",
    Juneteenth: "Mabon",
    Mabon: "Halloween",
    Halloween: "Christmas",
    Christmas: "NewYears"
};

export function CycleHoliday(): JSX.Element {
    const [holType, setType] = useState<Holiday>("NewYears");

    function changeEmojiAlpha(): void {
        const newHol = HOL_ALPHA_TRANSITIONS[holType];
        setType(newHol);
    }

    function changeEmojiYear(): void {
        const newHol2 = HOL_YEAR_TRANSITIONS[holType];
        setType(newHol2);
    }

    return (
        <div>
            <Button onClick={changeEmojiAlpha}>Advance by Alphabet</Button>
            <Button onClick={changeEmojiYear}>Advance by Year</Button>
            <div>
                {holType === "Christmas" ? (
                    <span>Holiday: &#127876;</span>
                ) : holType === "Halloween" ? (
                    <span>Holiday: &#127875;</span>
                ) : holType === "Juneteenth" ? (
                    <span>Holiday: &#128420;</span>
                ) : holType === "Mabon" ? (
                    <span>Holiday: &#127763;</span>
                ) : (
                    <span>Holiday: &#127878;</span>
                )}
            </div>
        </div>
    );
}
