# Friday_Group_11_GroupAssignment

# Team Members

| Name | NUID |
| -------- | -------- | 
| Rudrang Gade   | 002310841 | 
| Manasi Mhaske | 002310504 |
| Shrutkeerti Sangolkar | 002304742 |
| Prasad Shinde | 002060693 | 
| Harshal Solanki | 002874270 | 
  

# Space Tourism Website

## Purpose
This website serves as a platform for a fictional space tourism company. It provides a user-friendly interface for potential space tourists to sign up for accounts and log in to access exclusive space travel packages and information. The site features a sleek, space-themed design to immerse users in the excitement of space exploration.

## Features
- User account creation (Sign Up)
- User authentication (Login)
- Responsive design for various screen sizes
- Interactive space-themed animations

## Bootstrap Components Used
This project utilizes several Bootstrap components and utility classes to enhance the user interface and ensure responsiveness:

1. **Container (`.container`)**
   - Used to center-align content and provide responsive padding

2. **Form Components**
   - **Form Labels (`.form-label`)**
     - Applied to labels for input fields
   - **Form Controls (`.form-control`)**
     - Used for styling input fields (text, email, password)

3. **Buttons**
   - **`.btn`**: Base button class
   - **`.btn-primary`**: Primary button styling

4. **Utility Classes**
   - **`.mb-3`**: Adds margin-bottom for spacing between form elements
   - **`.form-text`**: Styles small text below forms (e.g., "Don't have an account?")

5. **Grid System**
   - Implicit use through the `.container` class for responsive layouts

6. **flexbox-based layout component**
   - utilities to align items within a flex container

7. **Layout Components**
   - Container: Ensures the footer content is aligned within a fixed-width responsive layout
   - row: Organizes content into rows for horizontal alignment
   - col-md-4: Divides content into three equal-width sections on medium screens and larger

8. **Text Alignment & Styling**
   - Text-center: Centers text horizontally in rows or columns
   - text-light: Makes text readable on dark backgrounds
   - text-decoration-none: Removes underlines from links for a cleaner design

9. **Flexbox Utilities**
   - d-flex: Creates a flexbox container for aligning elements
   - justify-content-center: Centers social media icons horizontally within their container

10. **Spacing Utilities**
   - mb-3: Adds vertical spacing between columns
   - mt-3: Adds vertical spacing above the copyright section
   - me-3: Adds horizontal spacing between social media icons

11. **List Styling**
   - list-unstyled: Removes default list styles (bullets, padding) from navigation links

12. **Typography**
   - <h5>: Used for section headings (e.g., About Space Tourism, Quick Links)
   - <p>: Used for descriptive text in the About section and copyright notice

13. **Cards**
   - card: A flexible and extensible content container that displays information in a bordered box
   - shadow-sm: A utility class that adds a small shadow to the element, providing visual depth

14. **Toasts**
   - toast-container: A container used to hold toast notifications, allowing for positioning and stacking
   - toast: A lightweight notification component that appears at the edge of the viewport

15. **Close Button**
   - btn-close: Styles a button as a standard close icon (typically an "X"), used for dismissing components like modals or alerts

16. **Accessibility**
   - role="alert": An ARIA role that indicates an element is providing important and usually time-sensitive information to the user
   - aria-live="assertive": An ARIA attribute that informs screen readers to immediately announce updates to the element
   - aria-atomic="true": An ARIA attribute that specifies that the entire element should be presented to assistive technologies as a single unit

17. **Navigation Bar**
    - navbar: Provides a responsive navigation header for your website, collapsing on smaller screens and expanding on larger ones
    - navbar-expand-lg: Expands the navbar on large (lg) screens and larger. Below that breakpoint, it collapses into a hamburger menu
    - navbar-dark: Applies a dark color scheme to the navbar, making text and icons appear light
    - navbar-custom: (This is likely a custom class, but it's worth mentioning). This is the class you have written and used for the navbar
    - fixed-top: Fixes the navbar to the top of the viewport, so it stays visible even when the page is scrolled
    - container-fluid: Provides a full-width container for the navbar content, spanning the entire viewport width
    - navbar-brand: Styles the website's brand or logo in the navbar, usually as a link to the homepage
    - navbar-toggler: Styles the button that toggles the collapsed navbar on smaller screens
    - navbar-toggler-icon: Displays the hamburger icon within the toggler button
    - collapse navbar-collapse: Wraps the navbar content that should be collapsed on smaller screens
    - navbar-nav: Styles the navigation links within the navbar
    - nav-link: Styles individual navigation links
    - active: Indicates the currently active or selected navigation links
    - ms-auto: A margin utility class that pushes the navbar links to the right side of the navbar

18. **Carousel**
   - carousel: Creates a slideshow for cycling through a series of content, such as images or text
   - carousel slide: Adds a transition effect when sliding between carousel items
   - carousel-indicators: Creates small indicators (usually dots) at the bottom of the carousel to indicate the current slide
   - carousel-inner: Wraps the individual slides within the carousel
   - carousel-item: Represents a single slide within the carousel
   - active: Indicates the currently visible slide in the carousel
   - d-block w-100: Utility classes that make the image a block-level element and set its width to 100% of its container
   - carousel-caption: Adds a caption to the carousel item, usually containing text and other content
   - carousel-control-prev and carousel-control-next: Creates the navigation buttons (arrows) for moving to the previous and next slides
   - carousel-control-prev-icon and carousel-control-next-icon: Display the icons within the navigation buttons

## Custom Styling
While Bootstrap provides the foundation, custom CSS is used to create the space-themed design, including:
- Background gradients
- Star field animation
- Planet and comet graphics
- Custom form styling to fit the space theme

## JavaScript Functionality
Custom JavaScript is used for:
- Form validation
- Animated transitions between pages
- Interactive elements like the rocket launch animation

## Getting Started
To run this project locally:
1. Clone the repository
2. Open `login.html` or `signup.html` in a web browser

## Dependencies
- Bootstrap 5.3.0
- Custom CSS (login.css, signup.css)
- Custom JavaScript (login.js, signup.js)

## Future Enhancements

