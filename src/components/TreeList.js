import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TreeList(props) {
    function renderRow(tree) {
        return (
            <tr key={tree.id}>
                <td>
                    <Link to={"/tree/" + tree.slug}>{tree.species}</Link>
                </td>
                <td>{tree.ownerId}</td>
                <td>{tree.family}</td>
            </tr>
        );
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Owner ID</th>
                        <th>Family</th>
                    </tr>
                </thead>
                <tbody>
                    {props.trees.map(renderRow)}
                </tbody>
            </table>
        </>
    );
}

TreeList.propTypes = {
    trees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        species: PropTypes.string.isRequired,
        ownerId: PropTypes.number.isRequired,
        family: PropTypes.string.isRequired
    })).isRequired
}

export default TreeList;