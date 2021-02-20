import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_row">
                    <Product
                        id="1"
                        title="GRACE KARIN Women's 50s 60s Vintage Sleeveless V-Neck Cocktail Swing Dress"
                        price={33.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61wpd%2BlYlRL._AC_UX569_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="New Apple iPhone 12 (64GB, Black) [Locked] + Carrier Subscription"
                        price={829.99}
                        image="https://m.media-amazon.com/images/I/71fVoqRC0wL._FMwebp__.jpg"
                        rating={4}
                    />
                    <Product
                        id="3"
                        title="React and React Native: A complete hands-on guide to modern web and mobile development with React.js, 3rd Edition Paperback"
                        price={34.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51noIwSubgL._SX404_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title="Acer Nitro 5 Gaming Laptop, 10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6'' Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi"
                        price={729.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="5"
                        title="
                        iBUYPOWER Gaming PC Computer Desktop Element Mini 9300 (AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home)"
                        price={529.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71CXtWQZ5iL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="6"
                        title="SAMSUNG LC24F396FHNXZA 23.5'' FHD Curved LED-Lit FreeSync Monitor"
                        price={149.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91ubktnbNVL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="7"
                        title="Love Galore White Skater Dress"
                        price={52.99}
                        image="https://www.lulus.com/images/product/xlarge/6788341_516112.jpg?w=560"
                        rating={4}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Home
