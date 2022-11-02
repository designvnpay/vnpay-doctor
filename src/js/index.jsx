import React from 'react';
import $ from 'jquery';
//   react code here
class App extends React.Component {
    componentDidMount() {
        
    }
    
    // ...
  }


 $('body').on('click', '.accor > .head', function(e) {
    $(".accor").toggleClass('active');   
});
  

// react code here
