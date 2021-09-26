import React from "react";
import TextInput from "./common/TextInput";

function TreeForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="species"
                label="Species"
                name="species"
                onChange={props.onChange}
                value={props.tree.species}
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
            </div>

            <TextInput
                id="family"
                label="Family"
                name="family"
                value={props.tree.family}
                onChange={props.onChange}
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
                    <option value="1">Healty</option>
                    <option value="2">Aging</option>
                    <option value="3">Injured</option>
                    <option value="4">Deseased</option>
                </select>
                </div>
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default TreeForm;
