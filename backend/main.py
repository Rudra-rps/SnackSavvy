from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to restrict access in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class FoodItem(BaseModel):
    name: str

class User(BaseModel):
    username: str
    password: str

class SignupUser(User):
    email: str

class Order(BaseModel):
    username: str
    food_item: str

# Expanded static price database with realistic pricing (no decimals)
food_prices = {
    "Butter Chicken": {"Zomato": 323, "Swiggy": 316, "UberEats": 329},
    "Masala Dosa": {"Zomato": 153, "Swiggy": 144, "UberEats": 159},
    "Pani Puri": {"Zomato": 50, "Swiggy": 46, "UberEats": 54},
    "Biryani": {"Zomato": 255, "Swiggy": 246, "UberEats": 263},
    "Pav Bhaji": {"Zomato": 183, "Swiggy": 176, "UberEats": 192},
    "Chole Bhature": {"Zomato": 205, "Swiggy": 199, "UberEats": 214},
    "Rajma Chawal": {"Zomato": 225, "Swiggy": 219, "UberEats": 233},
    "Dal Makhani": {"Zomato": 274, "Swiggy": 267, "UberEats": 283},
    "Paneer Tikka": {"Zomato": 296, "Swiggy": 290, "UberEats": 308},
    "Vada Pav": {"Zomato": 42, "Swiggy": 40, "UberEats": 48},
    "Momos": {"Zomato": 123, "Swiggy": 116, "UberEats": 135},
    "Spring Roll": {"Zomato": 113, "Swiggy": 109, "UberEats": 124},
    "Idli Sambar": {"Zomato": 101, "Swiggy": 98, "UberEats": 113},
    "Aloo Paratha": {"Zomato": 143, "Swiggy": 134, "UberEats": 152},
    "Egg Roll": {"Zomato": 133, "Swiggy": 127, "UberEats": 142},
    "Masala Lassi": {"Zomato": 83, "Swiggy": 78, "UberEats": 87},
    "Puri Bhaji": {"Zomato": 165, "Swiggy": 158, "UberEats": 173},
    "Samosa": {"Zomato": 37, "Swiggy": 34, "UberEats": 42}
}

users_db = {"admin": {"password": "password", "email": "admin@example.com", "orders": []}, "testuser": {"password": "test123", "email": "test@example.com", "orders": []}}

discount_offers = {"Zomato": 10, "Swiggy": 15, "UberEats": 5}  # Discounts in percentage

@app.get("/")
def read_root():
    return {"message": "Welcome to SnackSavvy Backend!"}

@app.post("/compare-prices")
def compare_prices(item: FoodItem):
    item_name = item.name.title()
    if item_name not in food_prices:
        raise HTTPException(status_code=404, detail="Food item not found in database")
    
    prices = food_prices[item_name]
    best_platform = min(prices, key=prices.get)
    
    return {"best_price": best_platform, "prices": prices, "discounts": discount_offers}

@app.get("/all-foods")
def get_all_foods():
    return {"available_foods": list(food_prices.keys())}

@app.get("/get-platforms")
def get_platforms():
    return {"platforms": ["Zomato", "Swiggy", "UberEats"]}

@app.post("/signup")
def signup(user: SignupUser):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="Username already exists")
    users_db[user.username] = {"password": user.password, "email": user.email, "orders": []}
    return {"message": "Signup successful", "username": user.username}

@app.post("/login")
def login(user: User):
    if user.username in users_db and users_db[user.username]["password"] == user.password:
        return {"message": "Login successful", "token": f"token-{user.username}"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/order")
def place_order(order: Order):
    if order.username not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    
    if order.food_item.title() not in food_prices:
        raise HTTPException(status_code=404, detail="Food item not found")
    
    users_db[order.username]["orders"].append(order.food_item.title())
    return {"message": "Order placed successfully", "order_history": users_db[order.username]["orders"]}

@app.get("/order-history/{username}")
def get_order_history(username: str):
    if username not in users_db:
        raise HTTPException(status_code=404, detail="User not found")
    return {"username": username, "order_history": users_db[username]["orders"]}

@app.get("/snackbot")
def snackbot_response(query: str = ""):
    responses = {
        "cheapest": "Try searching for a dish, I'll find you the best deal!",
        "best food": "Biryani is one of the top-rated dishes in India!",
        "help": "Need help? You can search for food prices, ask for restaurant suggestions, or view your order history!",
    }
    
    for key, response in responses.items():
        if key in query.lower():
            return {"response": response}
    
    return {"response": "I'm here to help! Try asking about food deals, recommendations, or your past orders."}
