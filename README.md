🧪 **Automated Test Cases**
1. **Verify navigation to Signup/Login page**
Ensures the user can navigate to the Signup/Login page and the correct URL and title are displayed.

2. **Register new user (for each user in users.json)**
For each user in users.json, fills the registration form.
If the email already exists, that user is skipped.
Verifies account is created successfully for new users.

3. **Register existing user**
Attempts to register using an already existing email.
Verifies that the “Email Address already exist!” error message appears.

4. **Login to application**
Logs in with valid credentials from config.json.
Verifies successful login by checking the home page URL.

More features will be covered in upcoming implementations like
  -> Home Page
  -> Add To Cart Page
