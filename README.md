# aliendlc.github.io

This app was built using javascript, css, html, and jquery.

Using two different ajax calls from two buttons (for two pages- later discussed in issues) we populate 20 different divs with specific info from SWAPI. Initially, I was trying to base these popup windows on Modals. I eventually just gave them modal functionality and left the modal for the final 'win scenario'.

The user has the ability to close out of the planet window and the instruction window - especially important to mobile users. Each time a planet button is clicked, a check status function and a random points function within it get called. Each of these windows then gets the show function after hiding the previous one. These random generated points get applied to the point tracker at the bottom of the screen. Hull, Battery, and Explorer points all get added or subtracted to the current points. Part of the check status funciton checks the hull number. If it is less than or equal to zero, the user loses and has to restart. The buttons get disabled with a hull <= 0. If the user does get to the threshold to make a jump, they can still explore the current Star Wars universe by clicking on the planet buttons. When the threshold is reached, a jump button appears and it will take the user back to our universe.

The planet windows, jump button, and both win and lose windows were set up and hidden at load time.

Issues:

pulling multiple pages from ajax
creating a dry method for button event listeners
creating 20 different modals - opted out
DESIGN!
Responsive design was particularly difficult for the footer content. This contains the current planet points and overall current points of the user.
getting lost in a sea of id's
developing app to initial idea - had to adapt.
Instructions:

download Space-Jump folder
collect path to folder user/abc/123/Space_Jump/index.html
place this path in your browser
come back to this universe
or go here:

https://aliendlc.github.io/Space_Jump/index.html
