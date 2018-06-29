

// When size is submitted by the user, call makeGrid()



$("#submit").click(function(event){


event.preventDefault();

$("#pixelCanvas").children().remove();


  //get the inputed height from the user input 
var  height =$("#inputHeight").val();

//get the inputed weight from the user input
var  width =$("#inputWidth").val();

makeGrid(height,width)
  
});



function makeGrid(prefheight,prefwidth) {


	//create a nexted forloop for the table starting with the height 

	for(var i= 0; i < prefheight ; i++ ){
    

      $('#pixelCanvas').append("<tr> </tr>");

       //and then the width 
      for(var j= 0; j < prefwidth ; j++ ){
          $('tr:last-child').append("<td></td>");
      }

          // Fill the table clicked with the color and listen for click events on td
      $( 'tr:last-child' ).on('click', 'td', function() {
      	
      	//Gets the selected colour 
           var color =$('#colorPicker').val();

//When the user clicks for the first time add 
             if($(this).attr('style')){
      $(this).removeAttr('style');
    }
    else {
      $(this).css('background-color' , color);
    };

        
});


	}

}




