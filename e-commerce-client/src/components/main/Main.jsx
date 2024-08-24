import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import ProductsPage from './products/ProductsPage'
import DynamicBreadcrumb from './breadcrumb/DynamicBreadcrumb'
import About from './about/About'
import ContactUs from './contactUs/ContactUs'
import '../../App.css'

const Main = () => {
    return (
        <>
            <div className="main">
            <DynamicBreadcrumb />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
                {/* Add more routes as needed */}
            </Routes>
            </div>
        </>
    )
}

export default Main
