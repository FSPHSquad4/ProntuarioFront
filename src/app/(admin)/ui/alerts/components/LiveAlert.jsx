import ComponentContainerCard from '@/components/ComponentContainerCard';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const LiveAlert = () => {
  const [show, setShow] = useState(true);
  return (
    <ComponentContainerCard
      title="Alerta ao Vivo"
      description={
        <>
          Clique no botão abaixo para mostrar um alerta (inicialmente oculto com
          estilos inline), depois feche (e destrua) com o botão de fechar
          embutido.
        </>
      }
    >
      <Alert
        className="alert-success"
        dismissible
        onClick={() => setShow(false)}
        id="liveAlertPlaceholder"
        show={show}
      >
        Legal, você acionou esta mensagem de alerta!
      </Alert>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-primary"
        id="liveAlertBtn"
      >
        Mostrar alerta ao vivo
      </button>
    </ComponentContainerCard>
  );
};

export default LiveAlert;
