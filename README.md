# Notipay
---

NotiPay is a paid subscriptions and bills manager web application that allows users to log subscription and bill services and manage payments in one place.

NotiPay is the easiest way to manage subscriptions and bills and helps you pay on time, and you will never be late on payment, again.

## ✅ Features
---

- Log paid subscription and bill services with their details such as renewal and due date, amount, and etc.
- Track your paid subscriptions and bills with their renewal and due dates.

## 💻 Tech Stack for the Front-End
---
- React.js
- Material UI
- Cascading Style Sheets


## 🖥 Implementation of Technologies Used

### React.js
- React.js was used for the front-end of the web application.
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
- Create the **reusable components** that is going to be reused all through out the development. These are just small components such as:
    - Text field
    - Button
    - Popup
    
- Create the **necessary components and pages** for the web application such as:
    - Landing page
    - Home page
    - Login modal
    - Registration modal
    - Edit modal
    - Account settings modal
    
- **Creation of routes to API**
    - Since Spring Boot REST API was used for this project, creation of routes from front-end to back-end was done using the fetch API.
        ```JavaScript
        fetch('/api/**')
    	    .then(response => response.json())
    	    .then(data => console.log(data))
    	    .catch(err => console.error(err));
        ```
- To know more React.js, see the documentation: [React.js Documentation](https://reactjs.org/)


### React.js
- Material UI was used for the components of the front-end of the web application.
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
    - Integrating Material UI to components in React.js
        - Material UI components to be used in the web application are as follow:
            - Text Field
            - Button
            - Typography
            - Dialog
            - Grid
            - Stack
- To know more about Material UI, see the documentation: [MUI Documentation](https://mui.com/)