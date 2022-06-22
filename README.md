# Notipay

NotiPay is a paid subscriptions and bills manager web application that allows users to log subscription and bill services with their information such as name, amount, and renewal/due date. This way, users will be able to pay on time since they will be able to see when a certain payment is due or when a certain subscription needs to be renewed. 

## ✅ Features

- Log paid subscription and bill services with their details such as renewal and due date, name, and amount.
- Track your paid subscriptions and bills with their renewal and due dates.

## 💻 Tech Stack for the Frontend
- React.js
- Material UI
- Cascading Style Sheets


## 🖱 Implementation of Technologies Used

### React.js
- React.js was used for the front-end of the web application.
- React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
- The developer used the idea of components to promote reusability within the application.
- How is it used on the web application?
    - **Initial Setup to Visual Studio Code**
        ```bash
            npx create-react-app notipay-frontend
            cd my-app
            npm start 
        ```
- **Creation of components**
    - Most of the components are made with react functional component skeletons, except for the edit modal which was made with react class component skeleton.
    
    **React Functional Component Skeleton**
    ```JavaScript
    export default function NameOfFunction() {
        return(
            <div> Name of Function </div>
        );
    }
    ```
    **React Class Component Skeleton**
    ```JavaScript
    export default class NameOfClass extends Component {
        render() {
            return (
                <div> Name of Class </div>
            )
        }
    }
    ```
    - **The developer created reusable components** that is going to be reused all through out the development. The reusable components were used in forms and modals. The developer modified the style of these Material UI pre-defined components to match the color scheme and theme of the application. The components created and modified are:
    - Text field
    - Button
    - Popup
    
    - On the other hand, **pages and modals were also created** using the idea of React components. This way, loading of pages and modals will be easier as we’re not entirely changing the whole page, rather, we’re just calling these components onto the screen. The pages and modals created are as follow:
    - Landing page
    - Home page
    - Login modal
    - Registration modal
    - Edit modal
    - Account settings modal
    
- **Creation of routes to API**
    - Since Spring Boot REST API was used for this project, creation of routes from front-end to back-end was done using the fetch API.
    - The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
    - Below is the skeleton for a fetch API that was utilized in the application.
        ```JavaScript
        fetch('/api/**')
    	    .then(response => response.json())
    	    .then(data => console.log(data))
    	    .catch(err => console.error(err));
        ```
- To know more React.js, see the documentation: [React.js Documentation](https://reactjs.org/)


### Material UI
- Material UI was used for the components of the front-end of the web application.
- Material UI is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.
- How is it used on the web application?
    - Initial Setup
        - To install the components of Material UI into the web application:
            ```bash
            npm install @mui/material @emotion/react @emotion/styled
            ```
        - To install the icons of Material UI into the web application:
            ```bash
            npm install @mui/icons-material
            ```
    - Integrating Material UI to components in React.js.
        - To use Material UI components into the web application, importing of the component should be done: 
        ```JavaScript
        import Component from '@mui/material/Component'; // Example
        import TextField from '@mui/material/TextField';
        ```
        - Material UI components used in the web application are as follow:
            - Text Field
            - Button
            - Typography
            - Dialog
            - Grid
            - Stack
    - The developer modified the style of the Material UI components to match the color scheme and theme of the web application. 
- To know more about Material UI, see the documentation: [MUI Documentation](https://mui.com/)

## 🖱 Connecting Frontend to Backend

- Since I have used Spring Boot as a REST API and React.js for frontend, there should be connection between them in such a way that frontend will communicate with backend.
- The frontend will send HTTP request via the fetch API. In the fetch API, the link from the annotations in the backend will be called.
- An example is to call the backend for login with an annotation of @PostMapping("/auth/signin”), has a fetch API as follows:
```JavaScript
fetch("api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        setAuth(response.headers.get("Authorization"));
        if (auth) {
          navigate("/home");
          window.location.reload();
        }
      } else {
        return response.text();
      }
    }).then((data) => { setError(data); });
 ```
- You can see here the link inside the @PostMapping annotation was called with other attributes such as method, headers, and body.
- The response will come from the backend such that if the status is 200, this will mean that it is successful. Otherwise, it will result to an error.
- Data is being communicated from two servers, frontend and backend, in JSON format via the body of the HTTP request.
- In the backend, the Spring Boot application will the look for the annotation @RequestBody, that can be found in the parameter, as it will need to find the body of the request.
```Java
@PostMapping("/auth/signin")
	public ResponseEntity<String> authenticateUser(@RequestBody AuthCredentials request) {
		return userService.authenticateUser(request);
	}
```
- This is the code for the backend. You can see the link in the annotation PostMapping and in the parameters, there is annotation RequestBody to look for the body of the HTTP request. 
