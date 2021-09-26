import React, { useState, useEffect } from "react";
import { getTrees } from "../api/treeApi";
import TreeList from "./TreeList";
import { Link } from "react-router-dom";
import { getOwners } from "../api/ownerApi";

function TreesPage() {
    const [trees, setTrees] = useState([]);

    // useEffect(() => {
    //     getTrees().then(_trees => setTrees(_trees));
    // }, []);

    useEffect(() => {
        getTrees().then(_trees => {
            getOwners().then(_owners => {
                _trees = _trees.map(tree => {
                    tree.owner = _owners.find(ow => ow.id === tree.ownerId)?.name;
                    return tree;
                })
                setTrees(_trees);
            })
        })
    },[]);

    return (
        <>
            <h2>Trees</h2>
            <Link className="btn btn-primary" to="/tree">Add Tree</Link>
            <TreeList trees={trees} />
        </>
    );
}

export default TreesPage;