import React, { useState, useEffect } from "react";
import { getTrees } from "../api/treeApi";
import TreeList from "./TreeList";
import { Link } from "react-router-dom";

function TreesPage() {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        getTrees().then(_trees => setTrees(_trees));
    }, []);

    return (
        <>
            <h2>Trees</h2>
            <Link className="btn btn-primary" to="/tree">Add Tree</Link>
            <TreeList trees={trees} />
        </>
    );
}

export default TreesPage;