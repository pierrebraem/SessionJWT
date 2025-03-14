import { useNavigate } from "react-router";
import { useState } from 'react';

function Login(){
    const navigate = useNavigate();

    const [error, setError] = useState({errorStatus: false, errorMessage: ""});
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if(data.err){
                setError({errorStatus: true, errorMessage: data.err});
                return;
            }
            
            navigate('/');
            return;
        })
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Se connecter</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Nom d'utilisateur
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChangeInput}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChangeInput}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <input
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                value={"Se connecter"}
                />
            </form>
            { error.errorStatus && <p className="mt-4 text-center text-red-600">{error.errorMessage}</p> }
        </div>
    )
}

export default Login;