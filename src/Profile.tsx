import { Component, ParentProps } from "solid-js";

// propsありのコンポーネント
export const Profile: Component<{
    name: string;
    job: string;
}> = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.job}</p>
        </div>
    );
};

// propsとchildrenありのコンポーネント
export const ProfileWithChildren: Component<ParentProps<{
    name: string;
    job: string;
}>> = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.job}</p>
            {props.children}
        </div>
    );
};
