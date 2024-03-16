import { Destination } from './destination-model';

export const mockDestinations: Destination[] = [
    {
        title: 'Hotel Wow!',
        location: 'Miami, Florida, USA',
        description: 'Welcome to Hotel Wow!, where luxury meets tranquility in the heart of Miami, Florida. Nestled amidst the picturesque landscapes and vibrant culture of Transylvania, our hotel offers an unparalleled experience for travelers seeking elegance, comfort, and unmatched hospitality.',
        pricePerNight: 100,
        freeSpots: 10,
        sale: true
    },
    {
        title: 'Hotel Belvedere',
        location: 'Cluj-Napoca, Romania',
        description: 'Welcome to Hotel Belvedere, where luxury meets tranquility in the heart of Cluj-Napoca, Romania. Nestled amidst the picturesque landscapes and vibrant culture of Transylvania, our hotel offers an unparalleled experience for travelers seeking elegance, comfort, and unmatched hospitality.',
        pricePerNight: 200,
        freeSpots: 5,
        sale: false
    },
    {
        title: 'Hotel Italia',
        location: 'Cluj-Napoca, Romania',
        description: 'Welcome to Hotel Italia, where luxury meets tranquility in the heart of Cluj-Napoca, Romania. Nestled amidst the picturesque landscapes and vibrant culture of Transylvania, our hotel offers an unparalleled experience for travelers seeking elegance, comfort, and unmatched hospitality.',
        pricePerNight: 300,
        freeSpots: 3,
        sale: true
    }
];