import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function TreeForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="species"
                label="Species"
                name="species"
                onChange={props.onChange}
                value={props.tree.species}
                error={props.errors.species}
            />

            <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <div className="field">
                <select
                    id="owner"
                    name="ownerId"
                    onChange={props.onChange}
                    value={props.tree.ownerId || ""}
                    className="form-control"
                >
                    <option value="" />
                    <option value="1">I. District</option>
                    <option value="2">II. District</option>
                    <option value="3">III. District</option>
                </select>
                </div>
                {props.errors.ownerId && (
                    <div className="alert alert-danger">{props.errors.ownerId}</div>
                )}
            </div>

            <TextInput
                id="family"
                label="Family"
                name="family"
                value={props.tree.family}
                onChange={props.onChange}
                error={props.errors.species}
            />

            <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <div className="field">
                <select
                    id="condition"
                    name="condition"
                    value={props.tree.condition}
                    onChange={props.onChange}
                    className="form-control"
                >
                    <option value="" />
                    <option value="Healty">Healty</option>
                    <option value="Aging">Aging</option>
                    <option value="Injured">Injured</option>
                    <option value="Deseased">Deseased</option>
                </select>
                </div>
                {props.errors.condition && (
                    <div className="alert alert-danger">{props.errors.condition}</div>
                )}
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

TreeForm.propTypes = {
    tree: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default TreeForm;
