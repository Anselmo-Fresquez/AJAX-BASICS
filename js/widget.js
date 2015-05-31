var xhr = new XMLHttpRequest();
  // create your xmlhttprequest object

xhr.open('GET', 'data/employees.json');
  // open the file to get data

xhr.onreadystatechange = DewIt;
  // assign your response handler

xhr.send();
  // send your request

// -----> This is the response handler //
function DewIt() {
  if (xhr.readyState === 4 && xhr.status === 200) {
      // Check for your error codes JIC
    var lst_employees = document.getElementById('employeeList');
      // Grab the DOM element you want to work with
    var statusHTML = '<ul class="bulleted">';
      // Create a holder for the new elements you're going to generate
    var employees = JSON.parse(xhr.responseText);
      // Parse out that json into objects
    
    // Run through the array of objects.......
    for (var i=0; i < employees.length; i++) {
      if (employees[i].inoffice) {
          // Check booleans if you need to
        statusHTML += '<li class="in">';  
          // Create DOM elements and assign classes...
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
        // Append more data from the object...
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    
    lst_employees.innerHTML = statusHTML;
      // Lastly... attach your new DOM elements to the existing DOM
  }
}

/* In this way, AJAX/JSON can generally be viewed as bringing in an object
with a few extra steps behind it. This can easily be abstracted by a function.
What's good is that this data becomes an object that can be used in a
more classical sense. Then it's right back to creating elements via
strings again. Everything is strings, for better or for worse. You
string together your strings in the right way to create the document
you desire for your purposes, assign classes and id values to things 
based on the circumstances, then rely on the CSS code to make things
look the way you want. In that regard, HTML is only ever the skeleton 
of your document. The literal bare bones upon which your final 
presentation is hung upon. 

HTML becomes in this sense nothing more than a model.
The window is the controller, but the window can be controlled
via JavaScript, so a properly written JavaScript file can be the
controller.
Then, lastly, CSS handles the view of the web pages.

In this regard, HTML holds many objects and properties for the display
of the document. HTML is just a data structure. But HTML itself isn't
exactly the model.

Actually, the DOM is the model.
JavaScript is the controller.
CSS is the view.

So HTML becomes just a way of telling the DOM what objects you want created.
HTML elements are not objects. HTML is the interface through which objects can be 
created. 

The "Hypertext Markup Language" is really a programming interface for the
DOM, which is rendered dynamically at this stage, able to be
modified by JavaScript in real time... which is interesting.

Anyway, this is my current understanding of things."
*/