import { Component, createEffect, createSignal } from "solid-js";

export const Like: Component = () => {

    // 追跡対象のsignal
    const [like, setLike] = createSignal(0);

    // signalの値を監視して変化があった時に処理を実行する
    createEffect(() => {
        console.log(`Like: ${like()}`);
    });

    return (
        <div>
            <button onClick={() => setLike(v => v + 1)}>{like} Like</button>
        </div>
    );

};
