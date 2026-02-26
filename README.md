# 🍵 Buy Me A Matcha

A modern web application built for creators to share their content and receive support from their audience. Built with Next.js, this platform features a seamless social authentication system, integrated payment processing, and a dynamic media gallery.

## ✨ Features

* **Secure Social Authentication:** Powered by NextAuth.js, allowing users to sign in instantly using their existing social accounts:
    * Github
    * LinkedIn via OpenID Connect
    * Facebook integration
    * Google OAuth
* **Creator Payments:** Integrated with Razorpay to seamlessly process payments and support from fans.
* **Modern Architecture:** Built on Next.js utilizing the App Router and optimized with custom Webpack configurations.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/) (v5)
* **Payments:** Razorpay

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Clone the repository and install dependencies
```
git clone https://github.com/HarmanSingh79/buy-me-a-matcha.git
```
```
cd buy-me-a-matcha
```
```
npm install
```
### 2. Configure Environment Variables
Create a .env.local file in the root directory of the project. You will need to obtain API keys from the respective developer portals (Meta, LinkedIn, X, and Razorpay).

Add the following keys to your .env.local file:
```
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

NEXT_PUBLIC_URL=http://localhost:3000

NEXTAUTH_URL=http://localhost:3000
NEXT_AUTH_SECRET=sdf

EMAIL_USER=
EMAIL_PASS=

LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

```

### 3. Run the Development Server
```
npm run dev
```
Open http://localhost:3000 with your browser to see the result.
