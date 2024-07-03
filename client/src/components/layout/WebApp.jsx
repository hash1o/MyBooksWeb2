import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../snippets/Sidebar';
import Header from '../snippets/Header';
import axios from 'axios';
import { webAppMain } from '../../assets/color';

const WebApp = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            setBooks(response.data.items);
        } catch (error) {
            console.error('Error fetching data from Google Books API', error);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        fetchBooks();
    };

    return (
        <div>
            <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
            <Box sx={{ backgroundColor: webAppMain, display: "flex" }}>

                <Sidebar />

                <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
                    <Outlet context={{ books }} />
                </Box>

            </Box>


        </div>
    );
};

export default WebApp;