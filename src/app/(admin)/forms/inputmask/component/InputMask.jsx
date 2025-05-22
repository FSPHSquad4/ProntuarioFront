import React from 'react';
import MaskedInput from '@/components/MaskedInput';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';

const InputMask = () => {
  return (
    <Card>
      <CardHeader className="border-bottom border-dashed">
        <h4 className="header-title">Máscara de Entrada no Formulário</h4>
      </CardHeader>
      <Card.Body>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Data</label> <br />
              <MaskedInput
                mask={'00/00/0000'}
                placeholder="__/__/____"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "DD/MM/AAAA"</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Telefone</label> <br />
              <MaskedInput
                mask={'0000-0000'}
                placeholder="____-____"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "xxxx-xxxx"</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Hora</label> <br />
              <MaskedInput
                mask={'00:00:00'}
                placeholder="__:__:__"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "HH:MM:SS"</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Telefone com Código de Área</label>{' '}
              <br />
              <MaskedInput
                mask={'(+00) 0000-0000'}
                placeholder="(__) ____-____"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "(xx) xxxx-xxxx"</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Data & Hora</label> <br />
              <MaskedInput
                mask={'00/00/0000 00:00:00'}
                placeholder="__/__/____ __:__:__"
                className="form-control"
              />
              <span className="font-13 text-muted">
                ex: "DD/MM/AAAA HH:MM:SS"
              </span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Telefone dos EUA</label> <br />
              <MaskedInput
                mask={'(000) 000-0000'}
                placeholder="(___) ___-____"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "(xxx) xxx-xxxx"</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">CEP</label> <br />
              <MaskedInput
                mask={'00000-000'}
                placeholder="_____-___"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "xxxxx-xxx"</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Celular de São Paulo</label> <br />
              <MaskedInput
                mask={'(00) 00000-0000'}
                placeholder="(__) _____-____"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "(xx) xxxxx-xxxx"</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">CEP Alternativo</label> <br />
              <MaskedInput
                mask={'0-00-00-00'}
                placeholder="_-__-__-__"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "x-xx-xx-xx"</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">CPF</label> <br />
              <MaskedInput
                mask={'000.000.0000-00'}
                placeholder="___.___.____-__"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "xxx.xxx.xxxx-xx"</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Dinheiro</label> <br />
              <MaskedInput
                mask={'000,000,000,000,000,00'}
                placeholder="___-___-___-___-___-__"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "Valor monetário"</span>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">CNPJ</label> <br />
              <MaskedInput
                mask={'00.000.000/0000-00'}
                placeholder="__.___.___/____-__"
                className="form-control"
              />
              <span className="font-13 text-muted">
                ex: "xx.xxx.xxx/xxxx-xx"
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <label className="form-label">Endereço IP</label> <br />
              <MaskedInput
                mask={'000.000.000.000'}
                placeholder="___.___.___.___"
                className="form-control"
              />
              <span className="font-13 text-muted">ex: "xxx.xxx.xxx.xxx"</span>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InputMask;
