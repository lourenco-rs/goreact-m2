import React from 'react';

const CompareList = () => (
  <div className="list-wrapper">
    <div className="list">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="" />
        <strong>React</strong>
        <small>Facebook</small>
      </header>
      <ul>
        <li>
          83,258
          {' '}
          <small>stars</small>
        </li>
        <li>
          83,258
          {' '}
          <small>forks</small>
        </li>
        <li>
          83,258
          {' '}
          <small>issues</small>
        </li>
        <li>
          3 days ago
          {' '}
          <small>last commit</small>
        </li>
      </ul>
    </div>
  </div>
);

export default CompareList;
