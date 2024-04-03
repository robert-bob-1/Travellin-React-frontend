export interface User {
    username: string;
    password: string;
}

export interface Client extends User {
    phoneNumber: string;
}

export interface Agent extends User {
    companyName: string;
}