import { IUser } from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div
            onClick={() => onClick(user)}
            style={{ padding: 15, border: "1px solid black" }}
        >
            {user.id}. {user.name} прожиавет в городе {user.address.city} на
            улице {user.address.street}
        </div>
    );
};

export default UserItem;
