import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Home() {
    const { books } = useOutletContext();

    return (
        <Container>
            <Box sx={{ my: 10 }}>
                <Grid container spacing={2}>
                    {books.map((book) => (
                        <Grid item key={book.id} xs={12} sm={6} md={6} lg={4}>
                            <Link to={`/book/${book.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <Box sx={{
                                    borderRadius: "5px",
                                    padding: "10px",
                                    height: "100%",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        backgroundColor: "#1E1E1E",
                                    },
                                    "&:active": {
                                        backgroundColor: "black",
                                    },
                                }}>
                                    <div className="book" style={{ color: "white" }}>
                                        {book.volumeInfo.imageLinks?.thumbnail && (
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                        )}
                                        <h3 style={{ color: "white" }}>{book.volumeInfo.title}</h3>
                                        <p style={{ color: "white" }}>{book.volumeInfo.authors?.join(", ")}</p>
                                    </div>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Home;
