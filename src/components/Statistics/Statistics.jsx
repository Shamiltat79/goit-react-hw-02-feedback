import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
 
const StyledPage = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #5656d2;
`


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <StyledPage>Good: {good}</StyledPage>
            <StyledPage>Neutral: {neutral}</StyledPage>
            <StyledPage>Bad: {bad}</StyledPage>
            <StyledPage>Total: {total}</StyledPage>
            <StyledPage>Positiv percentage: { positivePercentage}</StyledPage>
            
        </div>
    )
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}