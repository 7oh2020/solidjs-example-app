import { Component, createResource, createSignal, ErrorBoundary, For } from "solid-js";

// フィルタ条件の型
type FilterString = 'all' | 'completed';

// JSONデータの型
type Item = {
    title: string;
};

// シグナルの変更時にフィルタ条件を受け取るfetcher関数
const fetchData = async (filter: FilterString) => {
    // 受け取ったフィルタ条件に応じたAPIリクエストを行う
    const url = filter == "completed"
        ? '/completed_items.json'
        : '/all_items.json';
    return await fetch(url).then(resp => resp.json()).catch(err => {
        console.error(err.message);
        throw err;
    });

};

export const FilterableList: Component = () => {
    // フィルタ条件用のシグナル
    const [filter, setFilter] = createSignal<FilterString>('all');

    // シグナルが変更される度にfetcher関数が実行される
    const [data,] = createResource<Item[], FilterString>(filter, fetchData);

    // ErrorBoundaryでラップするとエラー処理がスマートに書ける
    return (
        <ErrorBoundary fallback={err => <p>Error: {err.message}</p>}>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                {data.loading && <p>Loading...</p>}
            </div>
            <For each={data()}>
                {(item, i) => (
                    <div>{i() + 1} / {item.title}</div>
                )}
            </For>
        </ErrorBoundary>
    );
};
