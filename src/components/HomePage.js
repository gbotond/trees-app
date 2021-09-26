import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
    <div className="jumbotron">
        <h1>Tree Administration</h1>
        <p>My first React application for showcasing basic frontend tasks using this technology.</p>
        <Link to="about" className="btn btn-primary">About</Link>
    </div>
    );
}

export default HomePage;