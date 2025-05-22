import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Grid } from 'gridjs-react';
import { Col, Row } from 'react-bootstrap';

const AllDataTable = ({ dataTableRecords }) => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Exemplo Base">
            <Grid
              data={dataTableRecords}
              search={true}
              pagination={{
                limit: 5,
              }}
              sort
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Paginação">
            <Grid
              data={dataTableRecords}
              pagination={{
                limit: 3,
              }}
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Busca">
            <Grid
              data={dataTableRecords}
              pagination={{
                limit: 5,
              }}
              search={true}
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Ordenação">
            <Grid
              data={dataTableRecords}
              pagination={{
                limit: 5,
              }}
              sort
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Estado de Carregamento">
            <Grid
              columns={['Nome', 'Email', 'Número de Telefone']}
              sort={true}
              pagination={{
                limit: 5,
              }}
              data={() => {
                return new Promise((resolve) => {
                  setTimeout(
                    () =>
                      resolve([
                        ['John', 'john@example.com', '(353) 01 222 3333'],
                        ['Mark', 'mark@gmail.com', '(01) 22 888 4444'],
                      ]),
                    4000,
                  );
                });
              }}
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Cabeçalho Fixo">
            <Grid
              data={dataTableRecords}
              columns={['id', 'nome', 'email', 'cargo', 'empresa', 'país']}
              height="320px"
              fixedHeader={true}
              pagination={{
                limit: 10,
              }}
            />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ComponentContainerCard title="Colunas Ocultas">
            <Grid
              data={dataTableRecords}
              columns={[
                {
                  id: 'id',
                  hidden: true,
                },
                'nome',
                'email',
                'cargo',
                'empresa',
              ]}
              sort={true}
              pagination={{
                limit: 5,
              }}
            />
          </ComponentContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default AllDataTable;
