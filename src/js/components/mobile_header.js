import React from 'react';

export default class MobileHeader extends React.Component {
  render() {
    return(
      <div id="mobileheader">
        <header class="mobileheader">
          <img src="./src/images/logo.png" alt="logo"/>
          <span>Daily News</span>
        </header>
      </div>
    );
  };
}
