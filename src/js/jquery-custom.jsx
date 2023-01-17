import React from 'react';
import $ from 'jquery';
import {
  f7
  } from 'framework7-react';
//   react code here
class App extends React.Component {
    componentDidMount() {
      
    }
    // ...
    
  }
// react code here
$('body').on('click', '.accordion-item > .accordion-head', function(e) {
  $('.accordion-item > .accordion-body').slideUp();
 $(this).next().slideDown();
});

$('body').on('click', '.close-dialog', function(e) {
  f7.dialog.close();
});


