import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            home
            <div><Link to={"/home"}>홈</Link></div>
            <div><Link to={"/login"}>로그인</Link></div>
        </div>
    );
};

export default Home;
