import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import TreesPage from "./TreesPage";

function App() {
    function getPage() {
        const route = window.location.pathname;
        if(route === "/about") return <AboutPage />;
        if(route === "/trees") return <TreesPage />;
        return <HomePage />;
    }
    return (
        <div className="container-fluid">
            <Header />
            { getPage() }
        </div>
    );
}

export default App;