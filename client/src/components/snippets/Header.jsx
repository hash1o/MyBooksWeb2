import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { headerMain, headerTextMain } from '../../assets/color';

const Header = ({ query, setQuery, handleSearch }) => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: headerMain }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                    }}>


                </Typography>

                <form onSubmit={handleSearch} style={{ display: 'flex' }}>
                    <TextField
                        label="ここで本を検索..."
                        variant="outlined"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        size="small"
                        style={{ marginRight: '10px', backgroundColor: '#ffffff' }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        本を検索
                    </Button>
                </form>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
