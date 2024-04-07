import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import moment from 'moment';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Destination, Reservation } from '../models/destination-model';
import { getReservationsForDestination } from '../services/destination-service';

const localizer = momentLocalizer(moment);

interface ReservationsDialogProps {
    destination?: Destination;
    open: boolean;
    onClose: () => void;
}

const ReservationsDialog: React.FC<ReservationsDialogProps> = ({ open, onClose, destination }) => {
    const [events, setEvents] = React.useState<Event[]>([]);

    React.useEffect(() => {
        if (destination) {
            getReservationsForDestination(destination.id).then(reservations => {
                const reservationsToMap = reservations;
                console.log('Reservations:', reservationsToMap);
                setEvents(reservationsToMap.map((reservation: Reservation) => ({
                    id: reservation.id,
                    title: `Reservation ID: ${reservation.id} `,
                    start: new Date(reservation.startDate.getFullYear(), reservation.startDate.getMonth(), reservation.startDate.getDate()),
                    end: new Date(reservation.endDate),
                })));
            });
        }
    }, [destination]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth={false}>
            <DialogTitle>See Reservations for Destination</DialogTitle>
            <DialogContent>
                <div style={{ height: 600, width: 600 }}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReservationsDialog;