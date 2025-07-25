# Bookmark Manager Application

This is a simple client-side web application that helps you save and manage your favorite website bookmarks. You can easily add new bookmarks, visit them directly from the app, and delete them when no longer needed. All your bookmarks are stored persistently in your browser's local storage.

---

###### 🌐 visit the website: [BookMarker Live Demo](')

## 🚀 Features

* **Add New Bookmarks:** Easily add a website's name and its corresponding URL.
* **Persistent Storage:** All your saved bookmarks are stored in the browser's **local storage**, so they'll still be there even after you close and reopen your browser.
* **Dynamic Display:** Bookmarks are neatly displayed in a table format, showing their index, name, and action buttons.
* **Direct Website Visit:** Click the "Visit" button next to any bookmark to open the saved URL in a new tab.
* **Delete Bookmarks:** Remove unwanted bookmarks with a simple click on the "Delete" button.
* **Input Validation:**
    * **Site Name:** Requires a minimum of 3 alphanumeric characters, hyphens, or underscores.
    * **Site URL:** Must be a valid URL starting with `http://` or `https://`.
* **Real-time Validation Feedback:** Input fields provide instant visual cues (green for valid, red for invalid) as you type.
* **Informative Alert Message:** If validation fails upon submission, a clear modal-like alert pops up, detailing the exact validation rules.

---

## 🛠️ Technologies Used

* **HTML5:** Structures the content of the web page.
* **CSS3:** Handles custom styling for the application.
* **Bootstrap 5.3.3:** Provides a responsive layout and pre-designed components like buttons, forms, and tables.
* **Font Awesome 6.7.2:** Used for various icons that enhance the user interface (e.g., bookmark, link, eye, trash, close).
* **JavaScript (ES6+):** Powers all the interactive functionalities, including:
    * DOM manipulation
    * `localStorage` management
    * Form validation logic
    * Event handling for user interactions
---

## 💡 Code Structure Overview

The JavaScript (`main.js`) code is well-organized for clarity and maintainability:

### Global Variables
* **DOM Elements:** All necessary HTML elements are referenced at the top for easy access throughout the script.
* **`books` Array:** This array (`var books`) holds all the bookmark objects. It's initialized by attempting to load existing data from `localStorage`. If no data is found, it starts as an empty array.

### Helper Functions

* `displayBook()`: Responsible for iterating through the `books` array and dynamically generating the HTML table rows to display all saved bookmarks. It sets up `onclick` handlers for the "Visit
