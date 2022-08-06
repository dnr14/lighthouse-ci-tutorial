import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
        <Link to="/login" id={"login"}>
            <button>로그인 화면으로</button>
        </Link>
        <Link to="/" id={'main'}>
            <button>메인 화면으로</button>
        </Link>
        <Link to="/home" id={"home"}>
            <button>홈 화면으로</button>
        </Link>
        </>
    );
};

export default Nav;
