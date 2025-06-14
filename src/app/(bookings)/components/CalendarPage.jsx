import { Card, CardBody, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useBookingContext } from "@/context/useBookingContext";
import useCalendar from "../hooks/useCalendar";
import AddEditBooking from "./AddEditBooking";
import Calendar from "./Calendar";
import SidePanel from "./SidePanel";
const CalendarPage = () => {
    const {
        createNewBooking,
        eventData,
        events,
        isEditable,
        onAddBooking,
        onCloseModal,
        onDateClick,
        onEventClick,
        onEventDrop,
        onRemoveBooking,
        onUpdateBooking,
        show,
    } = useCalendar();

    const { bookings, fetchBookings, userRole, createBooking } =
        useBookingContext();

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleDateClick = (arg) => {
        onDateClick(arg);
    };

    return (
        <>
            <Col xl={3}>
                <Card>
                    <CardBody>
                        <SidePanel createNewBooking={createNewBooking} />
                    </CardBody>
                </Card>
            </Col>

            <Col xl={9}>
                <Card>
                    <CardBody>
                        <Calendar
                            bookings={bookings.map((booking) => ({
                                id: booking.id,
                                title: booking.notes,
                                start: booking.consultationDate,
                            }))}
                            onDateClick={(arg) => {
                                handleDateClick(arg);
                            }}
                            onBookingClick={(arg) =>
                                console.log("Booking clicked:", arg)
                            }
                            onEventDrop={(arg) =>
                                console.log("Event moved:", arg)
                            }
                        />
                    </CardBody>
                </Card>
            </Col>

            <AddEditBooking
                eventData={eventData}
                isEditable={isEditable}
                onAddBooking={onAddBooking}
                onRemoveBooking={onRemoveBooking}
                onUpdateBooking={onUpdateBooking}
                onDateClick={onDateClick}
                open={show}
                toggle={onCloseModal}
            />
        </>
    );
};
export default CalendarPage;
