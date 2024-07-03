import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Auth = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    Authタイトル
                </Box>
                <Outlet />
            </Container>

        </div >
    )
}

export default Auth