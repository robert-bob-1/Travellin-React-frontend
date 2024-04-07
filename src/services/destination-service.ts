import axios from 'axios';

import { Destination, Reservation } from '../models/destination-model';

const BASE_URL = 'http://127.0.0.1:8000/destinations/';

export function getDestinations(): Promise<Destination[]> {
    return axios.get(BASE_URL)
        .then(response => {
            console.log(response);
            let destinations: Destination[] = response.data.map((destination: any) => {
                return {
                    id: destination.id,
                    title: destination.title,
                    description: destination.description,
                    location: destination.location,
                    pricePerNight: destination.pricePerNight,
                    totalSpots: destination.totalSpots,
                    sale: destination.sale
                };
            });
            return destinations;
        })
        .catch(error => {
            return [];
        });
}

export function saveDestination(destination: Destination): Promise<Destination> {
    return axios.post(`${BASE_URL}create/`, destination)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

export function editDestination(destination: Destination): Promise<Destination> {
    return axios.put(`${BASE_URL}update/${destination.id}/`, destination)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

export function deleteDestination(destinationId: number): Promise<void> {
    return axios.delete(`${BASE_URL}delete/${destinationId}/`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

export function createReservation(destinationId: number, checkIn: Date, checkOut: Date): Promise<void> {
    return axios.post(`${BASE_URL}reservations/create/`, {
        destinationId: destinationId,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

export function checkAvailability(destinationId: number, checkIn: Date, checkOut: Date): Promise<boolean> {
    return axios.post(`${BASE_URL}reservations/check/`, {
        destinationId: destinationId,
        checkIn: checkIn,
        checkOut: checkOut
    })
        .then(response => {
            return response.data.available;
        })
        .catch(error => {
            return false;
        });
}

export function getAvailableDestinations(checkIn: Date, checkOut: Date): Promise<Destination[]> {
    console.log('Check In:', checkIn);
    console.log('checkin type', typeof checkIn)
    const formattedCheckIn = checkIn.toISOString();
    const formattedCheckOut = checkOut.toISOString();

    return axios.post(`${BASE_URL}available/`, {
        checkIn:  formattedCheckIn,
        checkOut: formattedCheckOut
    })
        .then(response => {
            let destinations: Destination[] = response.data.map((destination: any) => {
                return {
                    id: destination.id,
                    title: destination.title,
                    description: destination.description,
                    location: destination.location,
                    pricePerNight: destination.pricePerNight,
                    totalSpots: destination.totalSpots,
                    sale: destination.sale
                };
            });
            return destinations;
        })
        .catch(error => {
            return [];
        });
}

export function getReservationsForDestination(destinationId: number): Promise<any> {
    return axios.post(`${BASE_URL}reservations/${destinationId}/`, {})
        .then(response => {
            console.log('Reservations:', response.data)
            let reservations: Reservation[] = response.data.map((reservation: any) => {
                return {
                    id: reservation.id,
                    startDate: new Date(reservation.checkIn),
                    endDate: new Date(reservation.checkOut),
                };
            });

            return reservations;
        })
        .catch(error => {
            return [];
        });
}
