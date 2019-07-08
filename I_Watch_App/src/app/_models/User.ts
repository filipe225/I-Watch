export interface User {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    birthday: Date,
    token: string,
    friend_code: string,
    friends: Array<Object>
}