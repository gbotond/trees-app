import React, { useState, useEffect } from "react";
import { getTrees } from "../api/treeApi";

function TreesPage() {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        getTrees().then(_trees => setTrees(_trees));
    }, []);

    function renderRow(tree) {
        return (
            <tr key={tree.id}>
                <td>{tree.species}</td>
                <td>{tree.ownerId}</td>
                <td>{tree.family}</td>
            </tr>
        );
    };

    return (
        <>
            <h2>Trees</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Owner ID</th>
                        <th>Family</th>
                    </tr>
                </thead>
                <tbody>
                    {trees.map(renderRow)}
                </tbody>
            </table>
        </>
    );
}

export default TreesPage;