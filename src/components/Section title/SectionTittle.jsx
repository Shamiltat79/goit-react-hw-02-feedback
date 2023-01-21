import React from "react";
import PropTypes from 'prop-types';

export const SectionTittle = ({ tittle, children }) => {
    return (
        <section>

            <h2>{tittle}</h2>
            {children}
       </section>)
}


SectionTittle.propTypes = {
tittle: PropTypes.string.isRequired
}