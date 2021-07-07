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

