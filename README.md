# APPLICATION BUG NOTES

## Conditional Routing

Though the "protected" route is now being protected through a redirect dependent on the global state of the Provider wrapper in App.js, dispatching the login action to set the state to `true` is not working. Halfway there, just need to figure out the proper syntax for correctly updating the state. 

### List of To Dos

- Item Persistence
    - Items still do not persist when page reloads. Redux state (once properly implemented) will update the page, rather than individual component logic
- Item Addition
    - Items are indeed added, given a unique id, a creation time, and a completed boolean value.
        - Still need to iterate through list, find clicked item through its id, and set its completed value to true. 
        - Need to implement conditional rendering of each element, based on selection element

# APPLICATION DEVELOPMENT NOTES

This is a list of things yet to be implemented to achieve expected application beaviour. Due to time constraints not all of these may be able to be fully integrated/tested.

### Yet to be implemented

- Login/Logout functionality
    - Correct update of global state which redirects to dashboard or signin depending on value
- Settings functionality
    - Ability to update username/password
    - Choice of at least one more theme (Just color may suffice)
    - Modal
- Conditional rendering of list based on `complete` field
- Display items
    - In progress
    - Completed
    - All

### Challenges So Far

Having to redesign and rethink how to handle the array of objects has been time-consuming. Though, this is beneficial, the application will ultimately be more scalable, more robust and overall more sophisticated. 

Following the react-redux setup and additional creation of files has been challenging; the overall structure of the directories has increased in complexity, in addition to remember which dependencies to import where has also been a challenge. 

Had I spent more time learning redux, I think I would have been better able to design this app. Not having immediate access to sibling component's data has been a major challenge when it comes to figuring out how to get them to communicate. 

### Learned/Achieved

Learning how to create React applications has been insightful. I now have a better grasp in numerous React related topics:

-React app's folder structure 
-React's syntax
-Recent addition of hooks and why they were implemented
-Previous Class component syntax
-Lifecycle of components
-Routing within React
-Use of state, component scoped and application scoped (redux) 
