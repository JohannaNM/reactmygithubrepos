import { DiGithubBadge } from "react-icons/di";
import '../components/Style.css';

export default function Navbar(){

    return (
        <div className="navbar">
            <DiGithubBadge className="github-icon"/>
            <h1>JohannaNM's GitHub.</h1>
        </div>
    )
};