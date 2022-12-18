import User from "../../Contracts/User"

const UserResource = {
    toJson: (user: User) => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        last_login_at: user.last_login_at,
        created_at: user.created_at,
        updated_at: user.updated_at,
    })
}

export default UserResource
