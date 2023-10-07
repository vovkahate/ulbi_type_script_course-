import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

type UserPageParams = {
    id: string;
};

const UserPage: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserPageParams>();

    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                "https://jsonplaceholder.typicode.com/users/" + params.id
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                <ul>
                    <li>id: {user?.id}</li>
                    <li>name: {user?.name}</li>
                    <li>email: {user?.email}</li>
                </ul>
            </div>
        </div>
    );
};

export default UserPage;
