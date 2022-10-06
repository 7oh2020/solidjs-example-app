import type { Component } from 'solid-js';
import { CountDisplay, Counter } from './Counter';
import { FilterableList } from './FilterableList';
import { Like } from './Like';
import { Profile, ProfileWithChildren } from './Profile';
import { Rating } from './Rating';
import { Vote } from './Vote';

// ルートコンポーネント
export const App: Component = () => {
  return (
    <>
      <header>
        <h1>SolidJS Example App</h1>
      </header>
      <main>

        <article>
          <h2>Profile</h2>
          <Profile name={'Example User'} job={'Developer'} />
        </article>

        <hr />

        <article>
          <h2>Profile with children</h2>
          <ProfileWithChildren name={'Test User'} job={'Designer'}>
            <div>profile description</div>
          </ProfileWithChildren>
        </article>

        <hr />

        <article>
          <h2>Counter Example</h2>
          <Counter />
          <CountDisplay />
        </article>

        <hr />

        <article>
          <h2>Like Example</h2>
          <Like />
        </article>

        <hr />

        <article>
          <h2>Vote Example</h2>
          <Vote />
        </article>
        <hr />

        <article>
          <h2>Rating Example</h2>
          <Rating />
        </article>

        <hr />

        <article>
          <h2>Filter Example</h2>
          <FilterableList />
        </article>

      </main>
    </>
  );
};