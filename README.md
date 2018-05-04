![bandland logo](./app/assets/images/bandland_main_logo.svg)

### A web app inspired by bandcamp

[See the project live](http://www.crm-bandland.com)

---

## Features

### Track player

Bandland features a track player built using a hidden HTML audio tag and . By clicking play, pause, fast-forward, or rewind users dispatch actions that update the current track slice of state in the redux store and rerender the track player component with an updated current song or play state. The progress bar was animated using javascript event handlers to both move the slider and update the current song on the track. Custom javascript was chosen over a CSS range input slider to allow more customization and control moving forward.

### Tags

Bandland allow users to tag their albums and their own profiles with custom tags. The bandland discover page has a browse feature that allows users to browse by tags.



To accomplish this Bandland uses a polymorphic many-to-many association in the backend that uses only one tags table.

* Tags

| id  | name         |
| --  | ------------ |
| 1   | metal        |
| 2   | ambient      |
| 3   | experimantal |

* Taggings

| tag_id    | taggable_id  | taggable_type  |  
| --------- | ------------ | -------------- |
| 1         | 4            | User           |  
| 1         | 5            | User           |  
| 2         | 3            | Album          |   



### Album upload

To upload albums users submit album details and tracks through a nested form. The top level form renders both the album input and the track inputs. The form is implemented as a controlled input by lifting state from the child inputs. This is accomplished by passing callbacks bound to the parent down to the child components.

### Search

Bandland features a live search that updates via AJAX requests to the backend. To keep the search fast and minimize unnecessary database queries, the component makes use of debouncing to only send AJAX requests after no letters have been typed for 300 milliseconds.
