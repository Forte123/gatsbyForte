import React from 'react';
import {Link} from 'gatsby';
import Proptype from 'prop-types';

const CustomHeader = ({name, content}) =>(
    <div style={{color: `Orange`}}>
        <h2>{name} {content}</h2>
        <Link to="/">Go Back to Home</Link>
    </div>
)
CustomHeader.Proptype={
    name: Proptype.string,
    content: Proptype.string,
}

CustomHeader.defaultProps={
    name: 'Hello!',
}

export default CustomHeader;