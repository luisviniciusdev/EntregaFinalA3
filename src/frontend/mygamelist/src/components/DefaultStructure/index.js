import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const DefaultStructure = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultStructure;
