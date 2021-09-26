import React, { useState, useEffect } from "react";
import { getTrees } from "../api/treeApi";
import TreeList from "./TreeList";

function TreesPage() {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        getTrees().then(_trees => setTrees(_trees));
    }, []);

    return (
        <>
            <h2>Trees</h2>
            <TreeList trees={trees} />
        </>
    );
}

export default TreesPage;