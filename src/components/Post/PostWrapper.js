import React from 'react';
// import './Navbar.css';
// import {NavLink} from "react-router-dom";
import { useParams } from 'react-router-dom';

import Post from '../Post/Post';

const PostWrapper = () => {
    const { id } = useParams()
    return (
        <Post id={id} />

)};

export default PostWrapper;