import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { Destination } from '../models/destination-model';
import { editDestination, saveDestination } from '../services/destination-service';

interface DestinationDialogProps {
    destination?: Destination;
    open: boolean;
    onClose: () => void;
}

const DestinationDialog: React.FC<DestinationDialogProps> = ({ open, onClose, destination }) => {
    const [id, setId] = React.useState(0); // [1
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [pricePerNight, setPricePerNight] = React.useState(0);
    const [freeSpots, setAvailableSpots] = React.useState(0);
    const [sale, setOfferPercentage] = React.useState(0);

    React.useEffect(() => {
        if (destination) {
            setId(destination.id);
            setTitle(destination.title);
            setDescription(destination.description);
            setLocation(destination.location);
            setPricePerNight(destination.pricePerNight);
            setAvailableSpots(destination.freeSpots);
            setOfferPercentage(destination.sale);
        }
    }, [destination]);

    const handleSave = () => {
        // Save the form data here
        const updatedDestination: Destination = {
            id,
            title,
            description,
            location,
            pricePerNight,
            freeSpots,
            sale,
        };
        if (destination) {
            console.log('Editing destination', updatedDestination)
            editDestination(updatedDestination);
        } else {
            console.log('Saving destination', updatedDestination)
            saveDestination(updatedDestination);
        }
        onClose();
    };

    const isDisabled = () => {
        return !title || !description || !location || pricePerNight === 0;
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Destination</DialogTitle>
            <DialogContent>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Price per Night"
                    type="number"
                    value={pricePerNight}
                    onChange={(e) => setPricePerNight(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Available Spots"
                    type="number"
                    value={freeSpots}
                    onChange={(e) => setAvailableSpots(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Offer Percentage"
                    type="number"
                    value={sale}
                    onChange={(e) => setOfferPercentage(Number(e.target.value))}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={isDisabled()}>
                    Save
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default DestinationDialog;