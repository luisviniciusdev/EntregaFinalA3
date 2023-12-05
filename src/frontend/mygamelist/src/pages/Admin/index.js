import React, { useState } from "react";
import "./style.css"
import "./media.css"

import DefaultStructure from "../../components/DefaultStructure";
import TableForm from "../../components/TableForm";
import TableBody from "../../components/TableBody";

const Admin = () => {
    const [userId, setUserId] = useState(0);
    const [userUsername, setUserUsername] = useState(0);
    const [userEmail, setUserEmail] = useState(0);
    const [userPassword, setUserPassword] = useState(0);

    const [platformId, setPlatformId] = useState(0);
    const [platformName, setPlatformName] = useState(0);

    const [gameId, setGameId] = useState(0);
    const [gameName, setGameName] = useState(0);
    const [gameFirstCategory, setGameFirstCategory] = useState(0);
    const [gameSecondCategory, setGameSecondCategory] = useState(0);

    return (
        <DefaultStructure>
            <main className="main-content">
                {/* Users Section */}
                <section className="section">
                    <h2 className="section-title">Users</h2>
                    <TableForm>
                        <div className="input-area">
                            <div className="input-item">
                                <label for="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Username" required />
                            </div>
                            <div className="input-item">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-item">
                                <label for="password">Password</label>
                                <input type="text" id="password" name="password" placeholder="Password" required />
                            </div>
                        </div>
                    </TableForm>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <TableBody>
                            <td>{userId}</td>
                            <td>{userUsername}</td>
                            <td>{userEmail}</td>
                            <td>{userPassword}</td>
                        </TableBody>
                    </table>
                </section>

                {/* Platforms Section */}
                <section className="section">
                    <h2 className="section-title">Platforms</h2>
                    <TableForm>
                        <div className="input-area">
                            <div className="input-item">
                                <label for="platform">Platform</label>
                                <input type="text" id="platform" name="platform" placeholder="Platform Name" required />
                            </div>
                        </div>
                    </TableForm>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Platform</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <TableBody>
                            <td>{platformId}</td>
                            <td>{platformName}</td>
                        </TableBody>
                    </table>
                </section>

                {/* Games Section */}
                <section className="section">
                    <h2 className="section-title">Games</h2>
                    <TableForm>
                        <div className="input-area">
                            <div className="input-item">
                                <label for="game">Game</label>
                                <input type="text" id="game" name="game" placeholder="Game Name" required />
                            </div>
                            <div className="input-item">
                                <label for="first-category">First Category</label>
                                <input type="text" id="first-category" name="first-category" placeholder="First Category" required />
                            </div>
                            <div className="input-item">
                                <label for="second-category">Second Category</label>
                                <input type="text" id="second-category" name="second-category" placeholder="Second Category" required />
                            </div>
                        </div>
                    </TableForm>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>First Category</th>
                                <th>Second Category</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <TableBody>
                            <td>{gameId}</td>
                            <td>{gameName}</td>
                            <td>{gameFirstCategory}</td>
                            <td>{gameSecondCategory}</td>
                        </TableBody>
                    </table>
                </section>
            </main>
        </DefaultStructure>
    );
};

export default Admin;