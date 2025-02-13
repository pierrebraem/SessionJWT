import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

function User(){
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const [cookies] = useCookies([]);

    useEffect(() => {
        if(!cookies.jwt){
            navigate("/login");
        }
        else{
            fetch("http://localhost:3001/user", {
                headers: {
                    'authorization': cookies.jwt
                },
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => setData(data));
        }
    })
    return(
        <>
            <p>Salut</p>
            <p>Username : { data.username }</p>
            <p>is_admin : { data.is_admin }</p>
        </>
    )
}

export default User;