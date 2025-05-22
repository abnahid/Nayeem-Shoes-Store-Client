# 👟 Nayeem Shoes Store (Wholesale E-Commerce Platform)

Nayeem Shoes Store is a wholesale eCommerce platform where retailers can browse, pre-book, and purchase shoes or slippers in bulk. This platform includes a booking system, secure payments, and an admin dashboard for managing users and bookings.

---

## 🚀 Features

- Product Categories: Shoes, Slippers
- Advanced Filters: Price, Size, Color, Brand
- Product Pre-Booking System (with payment)
- Admin Dashboard (Manage Users, Bookings, Contacts)
- Customer Dashboard (Bookings, Profiles)
- Blog & FAQ Section
- Secure Authentication (Firebase/JWT)
- Stripe/PayPal Payment Integration

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router

### Backend

- Node.js + Express
- MongoDB (Mongoose or Native Driver)
- Firebase Auth / JWT

### Payment

- Stripe or PayPal

### Hosting

- Frontend: Vercel / Netlify
- Backend: Heroku / Render / AWS

---

## 🧩 Project Structure

```bash
nayeem-shoes-store/
├── client/        # React Frontend
├── server/        # Node.js Backend
├── README.md
└── package.json
⚙️ Installation Instructions
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/abnahid/nayeem-shoes-store.git
cd nayeem-shoes-store
2️⃣ Setup Backend
bash
Copy
Edit
cd server
npm install
# Create .env file (see below)
npm run dev
.env Example:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm run dev
💳 Stripe Payment Setup (Optional)
To test Stripe:

Go to https://dashboard.stripe.com

Use test card: 4242 4242 4242 4242 with any valid date & CVC.

📦 Scripts
Command	Description
npm run dev	Run server/frontend in dev
npm run build	Build frontend (production)

✨ Deployment
Frontend: Deploy to Vercel or Netlify

Backend: Use Heroku, Render, or Railway

📧 Contact
Shop Name: Nayeem Shoes Store
Owner: Star Wholesale
📍 Address: Sylhet, Bangladesh
📞 Phone: +8801XXXXXXXXX
✉️ Email: nayeemstore@example.com
```
