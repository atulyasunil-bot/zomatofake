
import { useState } from 'react';
import './App.css';

const categories = ['All', 'Pizza', 'Biryani', 'Burger', 'Desserts', 'Indian', 'Chinese'];

const restaurants = [
  {
    id: 1,
    name: 'Spice Alley',
    cuisine: 'Indian, Biryani',
    category: 'Biryani',
    rating: 4.7,
    deliveryTime: '28 min',
    cost: '₹450 for two',
    description: 'Savor slow-cooked biryani, curries, and spicy starters.',
    image: 'https://images.unsplash.com/photo-1604908177902-068f743b4d80?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Pizza Studio',
    cuisine: 'Italian, Pizza',
    category: 'Pizza',
    rating: 4.5,
    deliveryTime: '22 min',
    cost: '₹380 for two',
    description: 'Classic and gourmet pizzas baked fresh with premium toppings.',
    image: 'https://images.unsplash.com/photo-1548365328-9a9edbfa9710?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Burger Barn',
    cuisine: 'American, Burger',
    category: 'Burger',
    rating: 4.4,
    deliveryTime: '18 min',
    cost: '₹320 for two',
    description: 'Juicy burgers, crispy fries, and amazing milkshakes.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Sweets Corner',
    cuisine: 'Desserts',
    category: 'Desserts',
    rating: 4.8,
    deliveryTime: '20 min',
    cost: '₹250 for two',
    description: 'Decadent desserts, pastries, and chilled treats.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Noodle House',
    cuisine: 'Chinese, Asian',
    category: 'Chinese',
    rating: 4.6,
    deliveryTime: '24 min',
    cost: '₹380 for two',
    description: 'Stir-fried noodles, dim sum, and signature sauces.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Dhaba Express',
    cuisine: 'Indian',
    category: 'Indian',
    rating: 4.3,
    deliveryTime: '26 min',
    cost: '₹300 for two',
    description: 'Homestyle Indian dishes with rich flavors and spices.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredRestaurants = activeCategory === 'All'
    ? restaurants
    : restaurants.filter((item) => item.category === activeCategory);

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <span className="hero-eyebrow">Static food delivery app</span>
          <h1>Discover great restaurants near you</h1>
          <p>Browse curated restaurants, trending dishes, and delivery options without any backend.</p>
          <div className="search-bar">
            <input type="search" placeholder="Search restaurants, cuisine, or dish" />
            <button type="button">Search</button>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-pill">Zomato clone</div>
          <h2>Fast delivery, tasty meals</h2>
          <p>Explore top-rated local favorites and discover what to order next.</p>
          <div className="hero-stats">
            <div>
              <strong>120+</strong>
              <span>Restaurants</span>
            </div>
            <div>
              <strong>4.7</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>
      </header>

      <section className="category-section">
        <div className="section-header">
          <div>
            <h2>Popular categories</h2>
            <p>Tap a category to filter restaurant listings.</p>
          </div>
        </div>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'category-pill active' : 'category-pill'}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="restaurant-section">
        <div className="section-header">
          <div>
            <h2>{activeCategory === 'All' ? 'All restaurants' : `${activeCategory} restaurants`}</h2>
            <p>{filteredRestaurants.length} restaurant options available</p>
          </div>
        </div>
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <article key={restaurant.id} className="restaurant-card">
              <div
                className="restaurant-image"
                style={{ backgroundImage: `url(${restaurant.image})` }}
                aria-label={restaurant.name}
              />
              <div className="restaurant-body">
                <div className="restaurant-title">
                  <h3>{restaurant.name}</h3>
                  <span className={restaurant.rating >= 4.5 ? 'rating-pill good' : 'rating-pill'}>
                    {restaurant.rating}
                  </span>
                </div>
                <p className="restaurant-meta">{restaurant.cuisine} · {restaurant.deliveryTime} · {restaurant.cost}</p>
                <p className="restaurant-description">{restaurant.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="app-footer">
        <p>Static Zomato-style demo app — built with React and simple CSS.</p>
      </footer>
    </div>
  );
}

export default App;
