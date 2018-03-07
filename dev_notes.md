for different modals make a modals reducer that toggles which modal is open
then in modal container msp to get the name of the modal (use a selector to get
text that goes in title bar from the modals slice of state)


## TODO
  * add login modal
  * dont render login and signup links from non modal pages
  * is togglemodal clear errors redundant?
  * feed collection artist nav, w dropdown with logout
  * (necessary?) add loading class on asynch button press and
  then remove on promise fulfillment 

## DONE
  * clear errors on component did mount non modal login and signup
  * add footer links from non-modal login to signup and vice versa
  * add modal reducer to get modal slice of state w/ modals to render
