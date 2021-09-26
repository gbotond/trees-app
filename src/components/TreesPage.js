import React from "react";
import { getTrees } from "../api/treeApi";

class TreesPage extends React.Component {
    state = {
        trees: []
    };

    componentDidMount() {
        getTrees().then(trees => this.setState({trees: trees}));
    }

    renderRow(tree) {
        return (
            <tr key={tree.id}>
                <td>{tree.species}</td>
                <td>{tree.ownerId}</td>
                <td>{tree.family}</td>
            </tr>
        );
    }

    render() {
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
                        {this.state.trees.map(this.renderRow)}
                    </tbody>
                </table>
            </>
        );
    }
}

export default TreesPage;