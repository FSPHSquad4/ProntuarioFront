import ComponentContainerCard from '@/components/ComponentContainerCard';
import {
  Rating,
  RoundedStar,
  Star,
  StickerStar,
  ThinRoundedStar,
  ThinStar,
} from '@smastrom/react-rating';
import { useState } from 'react';
import '@smastrom/react-rating/style.css';
import { Button, Col, Row } from 'react-bootstrap';

const BasicRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <ComponentContainerCard title="Classificador Básico de 5 Estrelas">
      <div>
        <Rating
          style={{
            maxWidth: 160,
          }}
          value={rating}
          onChange={setRating}
          id="rater"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ReadOnlyExamples = () => {
  return (
    <ComponentContainerCard title="Exemplos Somente Leitura">
      <div>
        <Rating
          value={2}
          readOnly
          style={{
            maxWidth: 160,
          }}
        />
      </div>
    </ComponentContainerCard>
  );
};

const DisabledRating = () => {
  return (
    <ComponentContainerCard title="Exemplo de Classificação Desativada">
      <Rating
        value={0}
        isDisabled
        style={{
          maxWidth: '160px',
        }}
      />
    </ComponentContainerCard>
  );
};

const HighlightOnlyRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <ComponentContainerCard title="Exemplo de Apenas Destaque na Seleção">
      <Rating
        value={rating}
        onChange={setRating}
        highlightOnlySelected
        style={{
          maxWidth: '160px',
        }}
      />
    </ComponentContainerCard>
  );
};

const ResetButtonRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <ComponentContainerCard title="Classificação com Botão de Reset">
      <div className="d-inline-flex align-items-center gap-3">
        <Rating
          value={rating}
          onChange={setRating}
          style={{
            maxWidth: '160px',
          }}
        />
        <Button variant="light" size="sm" onClick={() => setRating(0)}>
          Resetar
        </Button>
      </div>
    </ComponentContainerCard>
  );
};

const StarStyles = () => {
  const [rating, setRating] = useState(3);
  const includedShapesStyles = [
    Star,
    ThinStar,
    RoundedStar,
    ThinRoundedStar,
    StickerStar,
  ].map((itemShapes) => ({
    itemShapes,
    activeFillColor: '#f59e0b',
    inactiveFillColor: '#ffedd5',
  }));
  return (
    <ComponentContainerCard title="Exemplo de Classificador Limpo/Resetado">
      {includedShapesStyles.map((itemStyles, idx) => (
        <Rating
          key={`shape_${idx}`}
          value={rating}
          onChange={setRating}
          itemStyles={itemStyles}
          style={{
            maxWidth: '160px',
          }}
        />
      ))}
    </ComponentContainerCard>
  );
};

const AllRating = () => {
  return (
    <>
      <Row className="row-cols-lg-2">
        <Col>
          <BasicRating />
        </Col>
        <Col>
          <ReadOnlyExamples />
        </Col>
        <Col>
          <DisabledRating />
        </Col>
        <Col>
          <HighlightOnlyRating />
        </Col>
        <Col>
          <ResetButtonRating />
        </Col>
        <Col>
          <StarStyles />
        </Col>
      </Row>
    </>
  );
};

export default AllRating;
