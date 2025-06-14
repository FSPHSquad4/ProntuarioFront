import { Button } from "react-bootstrap";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

const SidePanel = ({ createNewBooking }) => {
    const externalEvents = [
        {
            id: 1,
            variant: "warning",
            title: "Consulta Agendada",
        },
        {
            id: 2,
            variant: "info",
            title: "Consulta Confirmada",
        },
        {
            id: 3,
            variant: "success",
            title: "Consulta Completa",
        },
        {
            id: 4,
            variant: "danger",
            title: "Consulta Cancelada",
        },
        {
            id: 5,
            variant: "dark",
            title: "Paciente não Compareceu",
        },
    ];

    return (
        <>
            <div className="d-grid">
                <Button
                    variant="primary"
                    type="button"
                    onClick={createNewBooking}
                >
                    <IconifyIcon icon="bx:plus" className="fs-18 me-2" />
                    &nbsp;Criar Novo Agendamento
                </Button>
            </div>
            <div id="external-events">
                <br />
                {externalEvents.map(({ id, variant, title }) => (
                    <div
                        key={id}
                        className={`external-event pb-1 bg-soft-${variant} text-${variant}`}
                        title={title}
                        data-class={`bg-${variant}`}
                    >
                        <span className="icons-center">
                            <IconifyIcon
                                icon="bxs:circle"
                                className="me-2 vertical-middle"
                            />
                            {title}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SidePanel;
