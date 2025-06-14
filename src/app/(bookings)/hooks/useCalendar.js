import { Draggable } from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { useBookingContext } from "@/context/useBookingContext";
const useCalendar = () => {
    const [show, setShow] = useState(false);
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState(false);
    const [bookingData, setBookingData] = useState();
    const [bookingClick, setBookingClick] = useState();
    const [dateInfo, setDateInfo] = useState();
    const onCloseModal = () => {
        setBookingClick(undefined);
        setDateInfo(undefined);
        setShow(false);
    };
    const { createBooking } = useBookingContext();
    useEffect(() => {
        // create draggable events
        const draggableEl = document.getElementById("external-events");
        if (draggableEl) {
            new Draggable(draggableEl, {
                itemSelector: ".external-event",
            });
        }
    }, []);
    const onDateClick = (arg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };
    const onBookingClick = (arg) => {
        const booking = {
            id: String(arg.booking.id),
            title: arg.booking.title,
            className: arg.booking.classNames[0],
        };
        setBookingClick(booking);
        setIsEditable(true);
        onOpenModal();
    };

    const onAddBooking = async (data) => {
        try {
            const bookingData = {
                patientId: data.patientId,
                professionalId: data.professionalId,
                consultationDate: data.consultationDate,
                consultationStatus: data.consultationStatus,
                notes: data.notes,
            };

            await createBooking(bookingData);

            onCloseModal();
        } catch (error) {
            console.error("Erro ao adicionar agendamento:", error);
        }
    };

    const createNewBooking = () => {
        setIsEditable(false);
        onOpenModal();
    };
    return {
        createNewBooking,
        show,
        onDateClick,
        onBookingClick,
        onCloseModal,
        isEditable,
        bookingData,
        onAddBooking,
        dateInfo,
    };
};
export default useCalendar;
