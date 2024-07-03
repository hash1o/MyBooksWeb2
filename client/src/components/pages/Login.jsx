import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { LoadingButton } from "@mui/lab"
import { Link, useNavigate } from 'react-router-dom';

import axiosClient from '../../api/axiosClient';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [emailErrText, setEmailErrText] = useState("");
    const [passwordErrText, setPasswordErrText] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setEmailErrText("");
        setPasswordErrText("");

        if (email === "") {
            setError(true);
            setEmailErrText("名前を入力してください");
        }
        if (password === "") {
            setError(true);
            setPasswordErrText("パスワードを入力してください");
        }

        if (error) {
            return;
        }

        setLoading(true);

        try {
            const response = await axiosClient.post('jwt/create', {
                email: email,
                password: password
            });

            const { access, refresh } = response;

            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            setLoading(false);
            setError(null);
            console.log("ログイン")
            navigate("/")
        } catch (error) {
            setLoading(false);
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Box component="form" onSubmit={handleLogin} noValidate>
                <TextField
                    fullWidth
                    id="email"
                    label="メールアドレス"
                    margin='normal'
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    helperText={emailErrText}
                    error={emailErrText !== ""}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    id="password"
                    label="パスワード"
                    margin='normal'
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    helperText={passwordErrText}
                    error={passwordErrText !== ""}
                    disabled={loading}
                />

                <LoadingButton
                    sx={{
                        mt: 3,
                        mb: 2,
                    }}

                    fullWidth
                    type="submit"
                    loading={loading}
                    color="primary"
                    variant="outlined"
                >
                    アカウント作成
                </LoadingButton>
            </Box>
            <Button component={Link} to="/register">
                アカウントを持っていませんか？
            </Button>
        </>
    );
};

export default Login;
