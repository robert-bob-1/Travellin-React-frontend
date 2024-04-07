export interface Destination {
    id: number;
    title: string;
    description: string;
    location: string;
    pricePerNight: number;
    totalSpots: number;
    sale: number;
}

export interface Reservation {
    id: number;
    destination: Destination;
    startDate: Date;
    endDate: Date;
    totalCost: number;
}