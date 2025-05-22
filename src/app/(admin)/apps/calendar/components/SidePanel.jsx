import { Button } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const SidePanel = ({ createNewEvent }) => {
  const externalEvents = [
    {
      id: 1,
      variant: 'success',
      title: 'Planejamento de Novo Evento',
    },
    {
      id: 2,
      variant: 'info',
      title: 'Reunião',
    },
    {
      id: 3,
      variant: 'warning',
      title: 'Gerando Relatórios',
    },
    {
      id: 4,
      variant: 'danger',
      title: 'Criar Novo Tema',
    },
  ];

  return (
    <>
      <div className="d-grid">
        <Button variant="primary" type="button" onClick={createNewEvent}>
          <IconifyIcon icon="bx:plus" className="fs-18 me-2" />
          &nbsp;Criar Novo Evento
        </Button>
      </div>
      <div id="external-events">
        <br />
        <p className="text-muted">
          Arraste e solte seu evento ou clique no calendário
        </p>

        {externalEvents.map(({ id, variant, title }) => (
          <div
            key={id}
            className={`external-event pb-1 bg-soft-${variant} text-${variant}`}
            title={title}
            data-class={`bg-${variant}`}
          >
            <span className="icons-center">
              <IconifyIcon icon="bxs:circle" className="me-2 vertical-middle" />
              {title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidePanel;
