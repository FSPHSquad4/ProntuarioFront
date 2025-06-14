import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/services";
import { useAuth } from "./useAuthContext";

export const BookingContext = createContext();

export const useBookingContext = () => useContext(BookingContext);

export const BookingsProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, isAuthenticated } = useAuth();

    const fetchBookings = async () => {
        setLoading(true);
        try {
            if (
                !isAuthenticated &&
                user.role !== "PROFESSIONAL" &&
                user.role !== "RECEPTIONIST"
            ) {
                toast.error(
                    "Acesso negado. Apenas profissionais e recepcionistas podem ver agendamentos."
                );
                setBookings([]);
                return;
            }
            const { data } = await api.get("/booking/");

            setBookings(data);
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
            toast.error("Erro ao buscar agendamentos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (location.pathname === "/bookings") {
            fetchBookings();
        }
    }, [location.pathname]);

    const createBooking = async (bookingData) => {
        if (user.role !== "RECEPTIONIST") {
            toast.error("Apenas recepcionistas podem criar agendamentos.");
            return;
        }
        try {
            const response = await api.post("/booking/", bookingData);
            toast.success("Agendamento criado com sucesso!");
            fetchBookings();
            return response;
        } catch (error) {
            console.error("Erro ao criar agendamento:", error);
            toast.error("Erro ao criar agendamento.");
        }
    };

    const updateBooking = async (id, updatedData) => {
        try {
            const response = await api.patch(`/booking/${id}`, updatedData);
            toast.success("Agendamento atualizado com sucesso!");
            fetchBookings();
            return response;
        } catch (error) {
            console.error("Erro ao atualizar agendamento:", error);
            toast.error("Erro ao atualizar agendamento.");
        }
    };

    const deleteBooking = async (id) => {
        try {
            await api.delete(`/booking/${id}`);
            toast.success("Agendamento deletado com sucesso!");
            fetchBookings();
        } catch (error) {
            console.error("Erro ao deletar agendamento:", error);
            toast.error("Erro ao deletar agendamento.");
        }
    };

    const getBookingByProfessionalId = (professionalId) => {
        return bookings.filter(
            (booking) => booking.professionalId === professionalId
        );
    };

    return (
        <BookingContext.Provider
            value={{
                bookings,
                loading,
                fetchBookings,
                createBooking,
                updateBooking,
                deleteBooking,
                setBookings,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};
