import { useNavigate } from "react-router";

function Logout(){
    const navigate = useNavigate();

    fetch('http://localhost:3001/logout', {
        credentials: 'include'
    });

    navigate('/');
    return;
}

export default Logout