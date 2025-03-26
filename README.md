# E-commerce

### Milestone-1
- Got overview of the e-commerce project Tech Stack.
- MongoDB,nodeJS,expressJS,reactJS
  
### Milestone 2:

- Worked on login Page.
- Structure of react.
- Using Tailwind css.
- Used React-Dom

### Milestone-3

- Implemented Express on the backend
- Used MongoDBAtlas to create a cluster
- Used mongoose to connect MongoDb with the backend
- Made some error-handling changes

### Milestone-4

- Installed JSON token
- Created the Multer file

### Milestone-5

- Created the SignUp page
- Used Tailwind css

### Milestone-6

- Encrypt the Password:
- Use bcrypt to hash the user's password during signup.
- Save the hashed password in the database instead of plain text.
- Store Complete User Data:
- Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

### Milestone-7

- Login Endpoint
- This endpoint accepts user credentials (email/username and password), retrieves the corresponding user from the database, and validates the password using bcrypt.
- If the credentials are valid, it returns a JWT token for authentication.

### Milestone 8 

- Create the Card Component:
- Design a reusable card component with props for product details (e.g., name, image, price).
- Design the Homepage Layout:
- Set up a grid layout or flexbox for displaying multiple cards neatly.

### Milestone 9

- Created the Createproduct.jsx
- Collects product details such as name, description, category, tags, price, and stock.
- Allows users to upload multiple images.
- Displays a preview of uploaded images.
- Uses useState for state management.

### Milestone 10

- Define product schema using Mongoose (name, description, price, image URL)
- Add validation for required fields and data types
- Create a POST endpoint to receive and store product data in MongoDB

### Milestone 11

- Create an API endpoint to send all product data.
- Fetch data from the backend.
- Pass it to the product card component.
- Display the data dynamically.

### Milestone 12

- Create an API endpoint that filters and retrieves data from MongoDB based on the user's email.
- Fetch data on the frontend by calling this API.
- Dynamically display the data using the previously created product card component.

### Milestone 13

- Create an API endpoint that receives new data.
- Use MongoDB’s update operation to modify the existing data.
- Add an Edit button to the product card.
- When clicked, the existing data is sent to a form.
- Auto-fill the form with previous data.
- Allow users to modify the data and save changes.

### Milestone 14

- Create an API endpoint to delete a product from MongoDB using its ID.
- Implement a delete button in the frontend on each product card.
- Send a delete request to the backend when the button is clicked.

### Milestone 15

- Uses React Router for navigation.
- Created navigation bar.

### Milestone 16 

- Create a new page that displays all product data.
- Ensure each product has a quantity selection option.
- Add an "Add to Cart" button for each product.

### Milestone 17

- Created the cart schema to store products

### Milestone 18

- Created an Backend endpoint for cart page
- An endpoint to get products inside cart for user

### Milestone 19

- Created cart frontend page and display the products
- For each product added an option to increase and decrease quantity using + and - buttons.
- Created an Backend endpoint for increase and decrease quantity

### Milestone 20
- Create an Backend endpoint that will sent user data
- create frontend profile page
- display profile photo, name and email in one section
- In another section display address and add an button called "Add address"
- If there are no address display "No address found"

### Milestone 21
- create address form frontend page
- Create an state that will store input address
- when we click on add address in profile it should navigate to this form page. 

### Milestone 22
- You need to create an endpoint that will receive the address from address form in frontend
- Add the address to the address array inside user collection.

### Milestone 23
- Create an placeorder button inside cart page and navigate to select address page when clicked.
- Create and select address page that will display all the available address and have an option to select one address.
- Write an backend endpoint that will send all the addresses of the user.
