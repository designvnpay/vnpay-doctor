import React from 'react';
import $ from 'jquery';


//   react code here
class App extends React.Component {
    render() {
      return (
        <div>
          <Accordion>
            <div className="accor">
              <div className="head">Head 1</div>
              <div className="body"></div>
            </div>
          </Accordion>
        </div>
      );
    }
  }

  $('.accor > .head').on('click', function(){
    $(".accor > .body").removeClass('hide');
    $(".accor").addClass('active');
    

 });

// react code here
