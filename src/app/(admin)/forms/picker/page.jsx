import CustomFlatpickr from '@/components/CustomFlatpickr';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'react-bootstrap';

const Flatpickr = () => {
  return (
    <>
      <PageBreadcrumb title="Flatpickr" />
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'} className="mb-0">
                Flatpickr - Seletor de Data
              </CardTitle>
            </CardHeader>
            <CardBody>
              <form action="">
                <Row className="gy-3">
                  <Col lg={6}>
                    <div>
                      <label className="form-label mb-0">Básico</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        options={{
                          enableTime: false,
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label className="form-label mb-0">Data e Hora</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d.m.y"
                          data-enable-time
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        placeholder="Data e Hora"
                        options={{
                          enableTime: true,
                          dateFormat: 'Y-m-d H:i',
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">
                        Datas de Fácil Leitura
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-altFormat="F j, Y"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        value={new Date()}
                        options={{
                          altInput: true,
                          enableTime: false,
                          altFormat: 'F j, Y',
                          dateFormat: 'Y-m-d',
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">
                        Data Mínima e Máxima
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-minDate="Sua Data Mínima" data-maxDate="Sua Data
                          Máxima"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        placeholder="data mínima - data máxima"
                        options={{
                          enableTime: false,
                          minDate: '2020-01-01',
                          maxDate: '2020-03-05',
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">Data Padrão</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-default-date="Sua Data Padrão"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        placeholder="25 jan, 2024"
                        className="form-control"
                        options={{
                          dateFormat: 'd M, Y',
                          enableTime: false,
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">
                        Desativando Datas
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-disable="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        options={{
                          disable: ['2025-01-10', '2025-01-21', '2025-01-30'],
                          enableTime: false,
                          defaultDate: '2025-01',
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">
                        Selecionando Múltiplas Datas
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-multiple-date="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        placeholder="Múltiplas datas"
                        options={{
                          enableTime: false,
                          mode: 'multiple',
                          dateFormat: 'Y-m-d',
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">Intervalo</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-range-date="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        placeholder="2018-10-03 a 2018-10-10"
                        options={{
                          mode: 'range',
                          enableTime: false,
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">Em Linha</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-default-date="hoje" data-inline-date="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        placeholder="Calendário em linha"
                        options={{
                          inline: true,
                          enableTime: false,
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-3">
                      <label className="form-label mb-0">
                        Números da Semana
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="flatpickr" data-date-format="d M, Y"
                          data-week-number
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        options={{
                          weekNumbers: true,
                          enableTime: false,
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <CardTitle as={'h4'} className="mb-0">
                Flatpickr - Seletor de Hora
              </CardTitle>
            </CardHeader>
            <CardBody>
              <form action="">
                <Row className="gy-3">
                  <Col lg={6}>
                    <div>
                      <label className="form-label mb-0">Seletor de Hora</label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="timepickr" data-time-basic="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        options={{
                          noCalendar: true,
                        }}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label className="form-label mb-0">
                        Seletor de Hora 24h
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-provider="timepickr" data-time-hrs="true"
                        </code>
                        .
                      </p>
                      <CustomFlatpickr
                        className="form-control"
                        options={{
                          noCalendar: true,
                          dateFormat: 'H:i',
                          time_24hr: true,
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Flatpickr;
