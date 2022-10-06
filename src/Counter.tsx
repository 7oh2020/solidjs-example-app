import { Component, createSignal } from "solid-js";

// signalをグローバルに宣言する
const [count, setCount] = createSignal(0);

export const Counter: Component = () => {
    return (
        <div>
            <button onClick={() => setCount(v => v + 1)}>Click here!</button>
        </div>
    );
};

export const CountDisplay: Component = () => {
    return (
        <div>Count: {count}</div>
    );
};
