import { useRouteError } from "react-router-dom";
import canvas from 'canvas';
import './Generate.css'
import { useLocation } from "react-router-dom";

function Generate() {
    const location = useLocation();
    const dataG = location.state.dataG;
    return (
        <div className="Generator">
            <h1>Your Generated Card:</h1>
            <a download="myBussinessCard" href={dataG}>
                <img src={dataG} />
            </a>
        </div>
    )
}

export default Generate
