## planning 101 - fun project ##

## create account page ##
user enters details ✅
user enters new password & confirm password ✅
user clicks create account ✅
- if passwords don't match, error message below input field "passwords don't match' ✅
- if passwords match, details added to database ✅
- Reward ==> confetti
- user taken back to login page & create account page dissapears => display; 'none' ✅

## login page ##
user loads page. login form apears onload ✅
user enters login details and clicks login
- check if details are in the database
- if found 'reward' e.g confetti
- if not issue alert 'details not found, please create account'
    - user clicks create account ✅
    - create ccount form appears ✅
    - login page disappears => display; 'none' ✅

## delete button ## - for Admin only
I double click on the button
small box wih are you sure you want to delete it appears. 'YES' or 'No'
- if no, nothing happens
- if yes, database deleted



## stretch goals ##
## forgot password ##
user clicks forgot password
box appears with input field asking:
- your email?
    - user puts email
        - check database for that email 
            - if email does not exist, display message "email not found"
            - if email exists retrieve password
        - display message with password
        - enable copy to clipboard
        - user clicks close button and box disappears
- user puts email and copied password to the login form. ==> {## login page## }


## future imrovements ##
password recovery should not be displayed on screen rather sent to email