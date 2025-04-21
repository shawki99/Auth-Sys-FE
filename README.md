# ✨ React Auth Frontend (with Vite + TypeScript)

This is the frontend interface for a full-stack authentication system. It connects to a NestJS backend and allows users to sign up, sign in, and access a protected welcome page.

Built using:
- ✅ React (Vite + TypeScript)
- ✅ Axios for HTTP requests
- ✅ React Router for navigation
- ✅ Custom styling with CSS

---

## 🎯 Features

- 🔐 Signup with email, name, and strong password
- 🔐 Signin with JWT-based login
- 👋 Welcome page that requires valid token
- ✅ Form validation before submission
- ✅ Beautiful, responsive UI with gradient layout
- ✅ Redirects on successful auth
- ✅ Token stored in `localStorage`

---

## 🧱 Pages Included

| Page        | Path         | Description                      |
|-------------|--------------|----------------------------------|
| SignupPage  | `/signup`    | User registration                |
| SigninPage  | `/signin`    | Login and receive JWT            |
| WelcomePage | `/welcome`   | Protected route, shows user name |

---

## 🌐 Backend Connection

This frontend connects to the backend API:

Base URL: http://localhost:3000
Make sure you have the backend running locally first.  
Backend repo: [Auth System Backend](https://github.com/shawki99/Auth-Sys-BE)

---

## ⚙️ How to Install (From Scratch)

> 💡 This guide assumes the user has no tooling installed yet.

---

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/shawki99/Auth-Sys-FE.git
cd Auth-Sys-FE
```
---

### 🧱 Step 2: Install Node.js

Download and install from https://nodejs.org (LTS recommended)

Check installation:

```bash
node -v
npm -v
```

---

### 🚀 Step 3: Install Project Dependencies

```bash
npm install
```

---

### ⚒️ Step 4: Run the Project

```bash
npm run dev
```

Open the browser at:
```bash
http://localhost:5173
```

---

### 🧪 How to Test It

Start your backend server first (npm run start:dev)

Start this frontend (npm run dev)

Navigate to:

    /signup → create a user

    /signin → login

    /welcome → token-protected greeting



