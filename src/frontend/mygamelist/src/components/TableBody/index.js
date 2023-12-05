import React from "react";
import "./style.css";

import editIcon from "../../assets/images/edit.png";
import deleteIcon from "../../assets/images/trash.png";

const TableBody = ({ children }) => {
    return (
        <tbody>
            <tr>
                {children}
                <td><img class="table-img" src={editIcon} alt="Edit icon" title="Edit game" /></td>
                <td><img class="table-img" src={deleteIcon} alt="Delete icon" title="Delete game" /></td>
            </tr>
        </tbody>
    );
};

export default TableBody;
