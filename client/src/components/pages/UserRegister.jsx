import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { LoadingButton } from "@mui/lab"
import { Link, useNavigate } from 'react-router-dom';

import axiosClient from '../../api/axiosClient';

const UserRegister = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);

    const [emailErrText, setEmailErrText] = useState("");
    const [password1ErrText, setPassword1ErrText] = useState("");
    const [password2ErrText, setPassword2ErrText] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        setEmailErrText("");
        setPassword1ErrText("");
        setPassword2ErrText("");

        if (email === "") {
            setError(true);
            setEmailErrText("名前を入力してください");
        }
        if (password1 === "") {
            setError(true);
            setPassword1ErrText("パスワードを入力してください");
        }
        if (password2 === "") {
            setError(true);
            setPassword2ErrText("確認用パスワードを入力してください");
        }

        if (password1 !== password2) {
            setError(true);
            setError('パスワードと確認用パスワードが異なります');
            return;
        }

        if (error) {
            return;
        }

        setLoading(true);

        try {
            const response = await axiosClient.post('/user_register/', {
                email: email,
                password: password1
            });

            setLoading(false);
            setError(null);
            console.log("アカウント作成")
            navigate("/login")
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <>
            <Box component="form" onSubmit={handleRegister} noValidate>
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
                    id="password1"
                    label="パスワード"
                    margin='normal'
                    name="password1"
                    type="password1"
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                    helperText={password1ErrText}
                    error={password1ErrText !== ""}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    id="password2"
                    label="確認用パスワード"
                    margin='normal'
                    name="password2"
                    type="password2"
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    helperText={password2ErrText}
                    error={password2ErrText !== ""}
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
            <Button component={Link} to="/login">
                すでにアカウントを持っていますか
            </Button>
        </>
    );
};

export default UserRegister;
