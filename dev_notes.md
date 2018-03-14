s## TODO
* ### auth :fire:
  * guest login => redirect to login page, do auto type cool ting

* ### code style
  * remove uneecassary constructors and super(props)
  * make func = (props) => {} or func = props => {} consistent

* ### style
  * clean up header code NOT DRY (dumb header component? yeesh)

* ### user show
  * add migration w regular name and genre, allow edit of name in edit form
  * disable button
  * allow color change
  * move user edit form out of the dropdown reducer

* ### albums
  * player
    * for smoother scroll use setInterval instead of onTimeUpdate
    * ref
  * add collect button

* ### search
  * relevance algorithm in backend???

* ## album upload form
  * track metadata extraction

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
  * change header

* ### style
  * make header a component, multiple headers to render
  * feed collection artist header, w dropdown
  * style gear dropdown menu
  * !!! https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f

* ### user show
  * on login redirect to own show page w/ profile edit form
  * album seeds and has many assoc
  * collection components
  * stlye banner button
  * keep image width on user edit form
  * style image upload button and modal

* ### album show
  * make player start at the beginning
  * add banner image as album banner
  * enable pause from buttons in list

* ### search
  * in search need user ids and album ids
  * get thumbnails
  * enable click away closure of gear dropdown (dropdown screen)

* ### album upload form
  * disable button if album uploading
  * errors


## QUESTIONS
* when to use selectors
* where to store website text, class variables in class components?
* how to redirect on login

## TO RESEARCH
* using locales in rails to get readable error msgs: [SO post] (https://stackoverflow.com/questions/808547/fully-custom-validation-error-message-with-rails)
* parallax scroll https://www.w3schools.com/cssref/pr_background-attachment.asp
* optimizing sql queries https://ksylvest.com/posts/2014-12-20/advanced-eager-loading-in-rails
* add profile picture from facebook
  * https://developers.facebook.com/docs/graph-api/reference/user/picture/

## Tables
* Users
  * DB Columns
    * `username`
    * `email`
    * `password_digest`
    * `session_token`
    * `location`
    * `description`
    * `own_site_url`
    * paperclip
      * `banner_img_url`
      * `profile_img_url`
  * associations
    * `has_many collectings`
    * `has_many collected_albums` through `collectings`

* Albums
  * DB columns
    * `title`
    * `cover_img_url`
    * `price`
    * `description` (text)
    * `genre` (not needed if tagging's bonus)
  * associations
    * `belongs_to artist` (user)
    * `has_many tracks`
    * `has_many collectings`
    * `has_many collectors` through `collectings`

* Collectings
  * DB columns
    * collector_id
    * collected_id

* Tracks
   * DB columns
     * `title`
     * `ord`
     * `duration`
     * `track_audio_url` (how will i store tracks?)
   * associations
     * `belongs_to album`

## Bonus
* Followings
  * DB columns
    * `artist_id`
    * `follower_id`
* Taggings
  * DB columns
    * tag_name
    * tagged_id
* Separate Bands and Fans user functionality

* Bands
  * DB columns
    * `name`
    * `email`
    * `profile_img_url`
    * `banner_img_url`
    * `location`
  * associations
    * `has_many albums`
    * `has_many tracks` through `albums`
    * `has_many followings`
    * `has_many followers` through `followings`
* Fans
  * DB columns
    * `username`
    * `password_digest`
    * `session_token`
    * `profile_img_url`
  * associations
    * `has_many downloaded_songs`
    * `has_many followings`
    * `has_many followed_artists` through `followings`
