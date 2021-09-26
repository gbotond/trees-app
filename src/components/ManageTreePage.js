import React from "react";
import { Prompt } from "react-router-dom";

const ManageTreePage = props => {
    return(
        <>
            <h2>Manage Tree</h2>
            {props.match.params.slug}
        </>
    );
};

export default ManageTreePage;