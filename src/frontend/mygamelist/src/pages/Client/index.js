import React from "react";
import "./style.css";

import DefaultStructure from "../../components/DefaultStructure";
import TableForm from "../../components/TableForm";
import TableBody from "../../components/TableBody";

const Client = () => {
    return (
        <DefaultStructure>
            {/* Search Bar */}
            <section className="section">
                <h2 className="section-title">Search a game</h2>
                <div className="search-bar">
                    <input type="text" id="seach" name="search" placeholder="Search" />
                    <button type="submit">Add Game</button>
                </div>
            </section>

            {/* Games Section */}
            <section className="section">
                <h2 className="section-title">Games</h2>
                <TableForm>
                    <div className="input-area">
                        <div className="input-item">
                            <label for="platform">Platform</label>
                            <input type="text" id="platform" name="platform" placeholder="Platform Name" required />
                        </div>
                        <div className="input-item">
                            <label for="status">Status</label>
                            <select id="status" name="status" required>
                                <option selected value="">default</option>
                                <option value="playing">Playing</option>
                                <option value="played">Played</option>
                                <option value="platinum">Platinum</option>
                                <option value="idontrecommend">I don't recommend</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label for="rating">Rating</label>
                            <select id="rating" name="rating" required>
                                <option selected value="">default</option>
                                <option value="bad">Bad</option>
                                <option value="notgood">Not Good</option>
                                <option value="good">Good</option>
                                <option value="verygood">Very Good</option>
                                <option value="excellent">Excellent</option>
                            </select>
                        </div>
                    </div>
                </TableForm>

                <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Platform</th>
                                <th>First Category</th>
                                <th>Second Category</th>
                                <th>Status</th>
                                <th>Rating</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <TableBody>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </TableBody>
                    </table>
            </section>
        </DefaultStructure>
    );
};

export default Client;
