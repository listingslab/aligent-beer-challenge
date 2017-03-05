/**
 * Created by Chris Dorward on 03/03/2017
 * components/PageAbout/PageAbout
 */

import React from 'react';

function PageAbout() {
  return (
    <div className="page-about container">

    <h2>About this software</h2>
    <p>Starting off with our own Single Page App boilerplate code we set up a new project.
      We&apos;ve been using&nbsp;
      <a href="https://facebook.github.io/react/" target="_blank" rel='noopener noreferrer'>Facebook&apos;s React JS</a>&nbsp;
      a lot recently, so used that as our front-end JavaScript framework. In addition we'll need a&nbsp;
      <a href="https://www.npmjs.com/" target="_blank" rel='noopener noreferrer'>node-driven npm</a> environment to run
      &nbsp;<a href="https://webpack.github.io/" target="_blank" rel='noopener noreferrer'>webpack</a>
      , deal with dependenices and more.&nbsp;
      <a href="http://getbootstrap.com/" target="_blank" rel='noopener noreferrer'>Bootstrap</a> is the CSS foundation. It allows rapid development of responsive, symantically
    sensible HTML5 front ends. The only problem with Boostrap is that all sites made with inspect
    tend to look a little bit samey. So we spiced things up by using a theme from&nbsp;
    <a href="https://bootswatch.com/paper/" target="_blank" rel='noopener noreferrer'>Bootswatch</a></p>

    <p>Lastly we added some Git magic and make the project Open Source on&nbsp;
      <a href="https://github.com/listingslab/aligent-beer-challenge" target="_blank" rel='noopener noreferrer'>Github</a>.
        There&apos;s even a <a href="https://github.com/listingslab/aligent-beer-challenge/wiki" target="_blank" rel='noopener noreferrer'>wiki</a> explaining wtf it's all about.</p>
      <h4>Development Technology Stack</h4>
      <ul>
        <li>React JS</li>
        <li>Webpack</li>
        <li>Apache</li>
        <li>PHP</li>
        <li>HTML 5</li>
        <li>CSS3/SASS</li>
      </ul>
    </div>
  );
}

export default PageAbout;
