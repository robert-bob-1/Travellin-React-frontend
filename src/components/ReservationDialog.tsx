import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import moment from 'moment';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Destination, Reservation } from '../models/destination-model';
import { getReservationsForDestination } from '../services/destination-service';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top' as const,
        },
        title: {
        display: true,
        text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];


const localizer = momentLocalizer(moment);

interface ReservationsDialogProps {
    destination?: Destination;
    open: boolean;
    onClose: () => void;
}

const ReservationsDialog: React.FC<ReservationsDialogProps> = ({ open, onClose, destination }) => {
    const [events, setEvents] = React.useState<Event[]>([]);
    const reservationsByMonth: { [month: number]: number } = {};
    const [reservationsCountByMonth, setReservationsCountByMonth] = React.useState<number[]>([]);

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
                reservationsToMap.forEach((reservation: Reservation) => {
                    const month = reservation.startDate.getMonth();
                    reservationsByMonth[month] = (reservationsByMonth[month] || 0) + 1;
                });

                const reservationsCountByMonth = Array.from({ length: 12 }, (_, i) => reservationsByMonth[i] || 0);
                console.log('Reservations by month:', reservationsCountByMonth);
                setReservationsCountByMonth(reservationsCountByMonth);
            });
        }
    }, [destination]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Reservations',
                data: reservationsCountByMonth,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };


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

                    <div>
                        <h2>Reservations by Month</h2>
                        <Line options={options} data={data} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ReservationsDialog;