import ComponentContainerCard from '@/components/ComponentContainerCard';
import useRangeSlider from '@/hooks/useRangeSlider';
import Nouislider from 'nouislider-react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ControleDeslizanteBasico = () => {
  return (
    <ComponentContainerCard title="Controle Deslizante Básico">
      <Nouislider
        range={{
          min: 0,
          max: 255,
        }}
        start={127}
        connect={[true, false]}
      />
    </ComponentContainerCard>
  );
};

const ControleDeslizanteMultiplo = () => {
  return (
    <ComponentContainerCard title="Controle Deslizante com Múltiplos Elementos">
      <Nouislider
        range={{
          min: 0,
          max: 100,
        }}
        start={[20, 80]}
        connect
      />
    </ComponentContainerCard>
  );
};

const ControleDeslizanteComValor = () => {
  const { selectedRanges2, onSlide3 } = useRangeSlider();
  return (
    <ComponentContainerCard title="Controle Deslizante com Valor">
      <div>
        <Nouislider
          behaviour="tap"
          step={350}
          range={{
            min: 0,
            max: 10000,
          }}
          start={[500, 4000]}
          connect
          onSlide={(value) => onSlide3(1, value)}
        />
        <div className="d-flex justify-content-between mt-3">
          <p>
            valor: {selectedRanges2 ? <span>{selectedRanges2[1]}</span> : null}
          </p>
        </div>
      </div>
    </ComponentContainerCard>
  );
};

const EsquemaDeCores = () => {
  return (
    <ComponentContainerCard title="Esquema de Cores">
      <div>
        <h5 className="fs-14">Primária</h5>
        <div id="slider-primary" data-slider-color="primary">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
          />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fs-14">Secundária</h5>
        <div id="slider-primary" data-slider-color="secondary">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
            data-slider-color="primary"
          />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fs-14">Sucesso</h5>
        <div id="slider-primary" data-slider-color="success">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
            data-slider-color="success"
          />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fs-14">Informação</h5>
        <div id="slider-primary" data-slider-color="info">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
            data-slider-color="info"
          />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fs-14">Aviso</h5>
        <div id="slider-primary" data-slider-color="warning">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
            data-slider-color="warning"
          />
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fs-14">Perigo</h5>
        <div id="slider-primary" data-slider-color="danger">
          <Nouislider
            range={{
              min: 0,
              max: 255,
            }}
            start={127}
            connect={[true, false]}
            data-slider-color="danger"
          />
        </div>
      </div>
    </ComponentContainerCard>
  );
};

const ControleDeslizanteComTooltip = () => {
  return (
    <ComponentContainerCard title="Tooltip">
      <Nouislider
        range={{
          min: 0,
          max: 100,
        }}
        start={[20, 75]}
        connect
        tooltips={[true, true]}
      />
    </ComponentContainerCard>
  );
};

const LimitesSuaves = () => {
  return (
    <ComponentContainerCard title="Limites Suaves">
      <div className="mb-3 pb-5">
        <Nouislider
          range={{
            min: 0,
            max: 100,
          }}
          start={50}
          pips={{
            mode: 'values',
            values: [20, 80],
            density: 4,
          }}
        />
      </div>
    </ComponentContainerCard>
  );
};

const ControleDeslizanteSeletorDeCores = () => {
  const cores = ['vermelho', 'verde', 'azul'];
  const [estado, setEstado] = useState('rgb(127, 127, 127)');
  const aoAtualizar = (indice) => (valor) => {
    cores[indice] = valor[0];
    setEstado(`rgb(${cores.join(',')})`);
  };
  return (
    <ComponentContainerCard title="Seletor de Cores">
      <div>
        {cores.map((cor, idx) => (
          <Nouislider
            key={idx}
            id={cor}
            connect={[true, false]}
            onUpdate={aoAtualizar(idx)}
            orientation="vertical"
            style={{
              height: '200px',
            }}
            range={{
              min: 0,
              max: 255,
            }}
            start={[125]}
          />
        ))}
        <div
          id="result"
          style={{
            background: estado,
          }}
        />
      </div>
    </ComponentContainerCard>
  );
};

const ControleDeslizanteVertical = () => {
  return (
    <ComponentContainerCard title="Controle Deslizante Vertical">
      <Nouislider
        style={{
          height: '198px',
        }}
        className="mx-auto"
        range={{
          min: 0,
          max: 200,
        }}
        start={[60, 160]}
        connect
        orientation="vertical"
      />
    </ComponentContainerCard>
  );
};

const ControleDeslizanteVertical2 = () => {
  return (
    <ComponentContainerCard title="Controle Deslizante Vertical">
      <Nouislider
        style={{
          height: '198px',
        }}
        className="mx-auto"
        range={{
          min: 0,
          max: 255,
        }}
        start={127}
        connect={[false, true]}
        orientation="vertical"
      />
    </ComponentContainerCard>
  );
};

const ControleDeslizanteVertical3 = () => {
  return (
    <ComponentContainerCard title="Controle Deslizante Vertical">
      <Nouislider
        style={{
          height: '198px',
        }}
        className="mx-auto"
        range={{
          min: 0,
          max: 255,
        }}
        start={127}
        tooltips={true}
        orientation="vertical"
      />
    </ComponentContainerCard>
  );
};

const TodosOsControlesDeslizantes = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <ControleDeslizanteBasico />
        </Col>
        <Col lg={12}>
          <ControleDeslizanteMultiplo />
        </Col>
        <Col lg={12}>
          <ControleDeslizanteComValor />
        </Col>
        <Col lg={12}>
          <EsquemaDeCores />
        </Col>
        <Col lg={12}>
          <ControleDeslizanteComTooltip />
        </Col>
        <Col lg={12}>
          <LimitesSuaves />
        </Col>
        <Col lg={4}>
          <ControleDeslizanteSeletorDeCores />
        </Col>
        <Col lg={4}>
          <ControleDeslizanteVertical />
        </Col>
        <Col lg={4}>
          <ControleDeslizanteVertical2 />
        </Col>
        <Col lg={4}>
          <ControleDeslizanteVertical3 />
        </Col>
      </Row>
    </>
  );
};

export default TodosOsControlesDeslizantes;
