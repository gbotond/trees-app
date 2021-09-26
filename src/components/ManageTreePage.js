import React, { useState, useEffect } from "react";
import TreeForm from "./TreeForm";
import * as treeApi from "../api/treeApi";
import { toast } from "react-toastify";

const ManageTreePage = props => {
    const [errors, setErrors] = useState({});
    const [tree, setTree] = useState({
       id: null,
       slug: "",
       species: "",
       ownerId: null,
       family: "",
       condition: ""
    });

    useEffect(() => {
        const slug = props.match.params.slug;
        if (slug) {
            treeApi.getTreeBySlug(slug).then(_tree => setTree(_tree));
        }
    }, [props.match.params.slug]);

    function handleChange({ target }) {
        setTree({...tree, [target.name]: target.value});
    }

    function formIsValid() {
        const _errors = {};

        if (!tree.species) _errors.species = "Species is required";
        if (!tree.ownerId) _errors.ownerId = "Owner ID is required";
        if (!tree.family) _errors.family = "Family is required";
        if (!tree.condition) _errors.condition = "Condition is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!formIsValid()) return;

        treeApi.saveTree(tree).then(() => {
            props.history.push("/trees");
            toast.success("Tree saved");
        });
    }

    return(
        <>
            <h2>Manage Tree</h2>
            <TreeForm 
                errors={errors} 
                tree={tree} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default ManageTreePage;