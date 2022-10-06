import { Component, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

// storeの作成
const [vote, setVote] = createStore({
    good: 0,
    bad: 0,
});

export const Vote: Component = () => {

    // プロパティ単位で値の変化を追跡できる
    createEffect(() => console.log(`good: ${vote.good}`));
    createEffect(() => console.log(`Bad: ${vote.bad}`));

    const incrementGood = () => setVote('good', (v) => v + 1);
    const incrementBad = () => setVote('bad', (v) => v + 1);

    return (
        <div>
            <button onClick={incrementGood}>Good {vote.good}</button>
            <button onClick={incrementBad}>Bad {vote.bad}</button>
        </div>
    );
};
