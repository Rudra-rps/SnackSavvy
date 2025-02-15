# 🍔 SnackSavvy - Food Price Comparison & Ordering Platform

SnackSavvy helps users find the best food prices across multiple platforms like Zomato, Swiggy, and UberEats. It provides real-time price comparisons, discount alerts, order history tracking, and an AI-powered chatbot for food recommendations.

## 📌 Features

### 🔹 Food Price Comparison
- Compare prices of popular dishes across Zomato, Swiggy, and UberEats.
- Get **discount offers** to find the best deal.
- Search for a restaurant like **Haldiram’s** and get a pop-up menu of available dishes.
- Clicking on a dish (e.g., **Chole Bhature**) leads to an **AI-based price calculation page**, then to a **Figma preview** of the final order page.

### 🔹 User Authentication
- **Signup & Login** with credentials.
- Secure **token-based authentication**.

### 🔹 Order History
- Users can **place orders** and track their **order history**.
- Orders are stored for easy reordering.

### 🔹 AI-Powered SnackBot
- **Smart chatbot** answers queries like:
  - "Where is the cheapest Butter Chicken?"
  - "What’s the best food to try today?"
  - "Can you show my order history?"

### 🔹 Team Information & Mobile App Preview
- Clicking **“About Us”** opens a page with details about the **four team members**.
- Clicking **“Get the App”** opens a **Figma preview** of how the mobile app’s **cover page** would look.

### 🔹 Restaurant Suggestions
- Coming soon: Get **restaurant ratings & reviews** based on price & quality.

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
 git clone https://github.com/your-repo/snacksavvy.git
 cd snacksavvy
```

### **2️⃣ Setup Backend**
```bash
 cd backend
 python -m venv env
 source env/bin/activate  # On Windows use `env\Scripts\activate`
 pip install -r requirements.txt
```

### **3️⃣ Start Backend Server**
```bash
 uvicorn main:app --reload
```
Backend runs on: **http://127.0.0.1:8000**

### **4️⃣ Test API Endpoints**
- **Open FastAPI Docs:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Try out: `/compare-prices`, `/order`, `/snackbot`, `/order-history/{username}`

⚠ **Note:** The backend can be tested separately using FastAPI's interactive docs at **[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)** even if the frontend is not fully integrated yet.

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/signup` | Register a new user |
| **POST** | `/login` | Login with credentials |
| **POST** | `/compare-prices` | Get best platform & discounts for a food item |
| **POST** | `/order` | Place an order |
| **GET** | `/order-history/{username}` | View order history |
| **GET** | `/snackbot?query=...` | AI chatbot responses |

---

## 🌐 Frontend Setup (React)

```bash
 cd frontend
 npm install
 npm run dev
```
Frontend runs on: **http://localhost:5173**

---

## 💡 Future Enhancements
✅ **Restaurant Reviews & Ratings**
✅ **Personalized Discounts**
✅ **Live Order Tracking**

---

## 🤝 Contributing
Feel free to fork the repository and contribute! Open an issue for any bugs or feature requests.

---

## 📜 License
This project is licensed under **MIT License**.

---

## 🙌 Acknowledgments
Special thanks to **FastAPI, React, and OpenAI API** for making this project possible!

