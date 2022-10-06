import { Component, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

// コンテキストを作成すると初期値から型が推論される
const RatingContext = createContext({
    store: {
        rate: 3,
    },
    increment() { },
    decrement() { },
});

// 機能を提供する上位コンポーネント
export const Rating: Component = () => {

    // 値を格納するためのstore
    const [store, setStore] = createStore({ rate: 3 });

    // 子孫コンポーネントに提供する機能の実装。RatingContextの型を満たす必要がある。
    const value = {
        store,
        increment: () => {
            if (5 <= store.rate) {
                return;
            }
            setStore("rate", (rate) => rate + 1);
        },
        decrement: () => {
            if (store.rate <= 1) {
                return;
            }
            setStore('rate', (rate) => rate - 1);
        },
    };

    // コンテキストプロバイダに値を渡す。valueがない場合はcontextの初期値が使用される
    return (
        <RatingContext.Provider value={value} >
            <RatingInput />
        </RatingContext.Provider >
    );
};

// 機能を使用する子孫コンポーネント
// contextのスコープ内であればもっと深いコンポーネント階層の場合でも同じように使用できる
export const RatingInput: Component = () => {

    // コンテキストからstoreと関数を取得する
    const { store, increment, decrement } = useContext(RatingContext);

    return (
        <div>
            <div>{store.rate}</div>
            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
        </div>
    );
};