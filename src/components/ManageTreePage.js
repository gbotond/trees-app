import React, { useState } from "react";
import TreeForm from "./TreeForm";
import * as treeApi from "../api/treeApi";
import { toast } from "react-toastify";

const ManageTreePage = props => {
    const [tree, setTree] = useState({
       id: null,
       slug: "",
       species: "",
       ownerId: null,
       family: "",
       condition: ""
    });

    function handleChange({ target }) {
        setTree({...tree, [target.name]: target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        treeApi.saveTree(tree).then(() => {
            props.history.push("/trees");
            toast.success("Tree saved");
        });
    }

    return(
        <>
            <h2>Manage Tree</h2>
            <TreeForm tree={tree} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    );
};

export default ManageTreePage;