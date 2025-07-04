# HTTP vs HTTPS Simulation – React Project

This is a React contact form project that visually demonstrates the difference between sending data over HTTP (insecure) and HTTPS (secure).  
It simulates encryption using AES to help understand how HTTPS protects sensitive data.

While real HTTPS uses browser-level TLS encryption (which cannot be implemented directly in this app), this project simulates the concept using basic AES encryption on the frontend for learning purposes.


## Project Goal

I built this project to:

- Understand the difference between HTTP and HTTPS
- Learn how encryption works (simulated using AES)
- Explore browser behavior for secure and insecure requests
- Practice React form handling and API interaction

## Tech Stack

- React (Functional Components & Hooks)
- `crypto-js` (for AES simulation)
- JSONPlaceholder API (for mock POST requests)
- CSS-in-JS (inline styling for layout and design)

## Features

- Contact form with fields: name, email, and message
- Two submission types:
  - Submit via HTTP: Sends raw plain JSON (simulating insecure transfer)
  - Submit via HTTPS: Encrypts the data before sending (simulated)
- Popup message clearly explains what happened
- Displays raw and encrypted data to demonstrate the security difference

## Screenshots

### 1. Contact Form UI

![Contact Form](public/images/Screenshot%202025-07-04%20141530.png)

### 2. HTTP Plain Text Submission

![HTTP Plain Data](public/images/Screenshot%202025-07-04%20125449.png)

### 3. HTTPS Encrypted Submission (AES Simulation)

![HTTPS Encrypted Data](public/images/Screenshot%202025-07-04%20125654.png)


## How to Run Locally

git clone https://github.com/your-username/http-vs-https-demo.git
cd http-vs-https-demo
npm install
npm start
