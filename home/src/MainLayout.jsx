import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from 'pdp/PDPContent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';

export default function MainLayout(){
    return (
            <Router>
                <div className="text-3xl mx-auto max-w-6xl">
                <Header />
                <div className="my-10">
                    <Routes >
                        <Route exact path="/" element={<HomeContent />} />
                        <Route path="/product/:id" element={<PDPContent />} />
                        <Route exact path="/cart" element={<CartContent />} />
                    </Routes>
                </div>
                <Footer />
                </div>
            </Router>
        );
}

