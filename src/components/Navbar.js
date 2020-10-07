import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Adewole Reading List Application</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    );
}

export default Navbar;