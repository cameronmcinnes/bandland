## TODO
* ### auth
  * On the log in form (not the modal), the logo is positioned differently than on bandcamp

* ### style
  * make header a component, multiple headers to render
  * feed collection artist nav, w dropdown

## DONE
* ### auth
  * clear errors on component did mount non modal login and signup
  * add footer links from non-modal login to signup and vice versa
  * add modal reducer to get modal slice of state w/ modals to render
  * add login modal
  * dont render login and signup links from non modal pages
  * develop navbar component, right nav and left nav
  * refactor session_form_modal and session_form into one dumb form
  * restructure component files
  * add guest login
  * disabled button during asynch signin/up request

## QUESTIONS
* when to use selectors
* where to store website text, class variables in class components?
* is togglemodal clear errors redundant?

## TO RESEARCH
* using locales in rails to get readable error msgs: [SO post] (https://stackoverflow.com/questions/808547/fully-custom-validation-error-message-with-rails)
