# APPLICATION BUG NOTES

These are notes of the current observed behaviour of the application; as tested this morning. 

### To Do Items list

- Item Persistence
    - Items do not persist when form is submitted.
        - Items get reset to initial hardcoded state whenever form submits or page re-renders.
    - Items persist and are updated when button is clicked.

# APPLICATION DEVELOPMENT NOTES

This is a list of things yet to be implemented to achieve expected application beaviour. Due to time constraints not all of these may be able to be fully integrated/tested.

### Yet to be implemented

- Login/Logout functionality
    - Will look into using local storage as a faux database to store users. Perhaps will use an objcet with this structure. { username: admin, password: admin }
- Settings functionality
    - Ability to update username/password
    - Choice of at least one more theme (Just color may suffice)
- Ensure items added/deleted to/from list persist
- Display items
    - In progress
    - Completed
    - All

### Implemented And Somewhat Stable

Adding to-do's works as intended: they are added to an array, and redered on the page correctly. 

Deleting from the to-do array will result in the displaying of a Done (completed) array underneath it. 

Figured that I can attain the value of the select element, and implement a switch case that renders either in-progress list, completed list or both. Played around with the idea of writing functions returning the templates to the main returned component. 

Quickly gave up on that idea when realising its hackiness and overall convoluted nature. 

After giving up on that, and re-reading the spec, I considered that perhaps having one mother array with all the list items and some sort of boolean attached to them to signify completion, then rendering based on these values, would have been a much more elegant solution; far more scaleable, too. 

### Challenges So Far

Familiarising myself with the React syntax in less than a week has been especially brutal. Destructuring arrays and objects left and right in order to use state, the concept of component state itself, the idea of combining JS and HTML syntax, directly attaching events to elements without the need for query selectors or JQuery, etc. etc.

In addition to learning base React, I've had to read up a lot on react-router-dom, which I could only read so much of, given the time spent understanding base React. I have learned a good deal about it, however.

A huge gap in my knowledge (still) is the use of react-redux, which, as it was explained to me earlier this week, is a way through which you can get components to have access to a global state, to avoid prop drilling and frankly, probably the many hacky workarounds I've deviced (but ultimately dug myself deeper, into the proverbial hole). Regardless, once I familiarise myself with it more, I'm excited to refactor and redesign this mess into something more functional. 

I think I will go to bed now, it is literally 3am, and I still would like to get even some basic styling done on these pages. Tired of looking at boring grey buttons and basic layout. I'm not hopeful on making them look as aesthetically pleasing as I would like, but it's still good CSS practice, and somewhat progress, too. 

Okay, bye.
