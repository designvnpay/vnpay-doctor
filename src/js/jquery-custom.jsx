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
$('body').on('click', '.picker-item-selected', function(e) {
  f7.popover.close();
});

$('body').on('click', '.read-more', function(e) {
  $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='Xem thêm'){
 $(this).text('Thu gọn');
     }
     else{
 $(this).text('Xem thêm');
     }
});



