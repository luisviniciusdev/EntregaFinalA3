import React from "react";
import "./style.css";
import "./media.css";

const TableInsert = ({ children }) => {
    return (
        <section>
            <form className="form-container">
                <div>
                    {children}
                </div>
                <div>
                    <button class="button" type="submit">Save</button>
                </div>
            </form>
        </section>
    );
};

export default TableInsert;