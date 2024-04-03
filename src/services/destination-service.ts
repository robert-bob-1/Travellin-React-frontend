import axios from 'axios';

import { Destination } from '../models/destination-model';

const BASE_URL = 'http://127.0.0.1:8000/destinations/';

export function getDestinations(): Promise<Destination[]> {
    return axios.get(BASE_URL)
        .then(response => {
            console.log(response);
            let destinations: Destination[] = response.data.map((destination: any) => {
                return {
                    title: destination.title,
                    description: destination.description,
                    location: destination.location,
                    pricePerNight: destination.pricePerNight,
                    freeSpots: destination.freeSpots,
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
    return axios.put(`${BASE_URL}/${destination.title}`, destination)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

