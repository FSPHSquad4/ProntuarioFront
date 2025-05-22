import ReactTable from '@/components/table/ReactTable';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { records as data, expandableRecords } from './data';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const columns = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Nome',
    accessorKey: 'name',
  },
  {
    header: 'Número de Telefone',
    accessorKey: 'phone',
  },
  {
    header: 'Idade',
    accessorKey: 'age',
  },
  {
    header: 'Empresa',
    accessorKey: 'company',
  },
];

const sizePerPageList = [5, 10, 25, 50];

const AdvancedTable = () => {
  return (
    <>
      <PageBreadcrumb title="Tabela Avançada" />
      <Row>
        <Col>
          <Card>
            <CardBody>
              <h4 className="header-title">Paginação &amp; Ordenação</h4>
              <p className="text-muted font-14 mb-4">
                Um exemplo simples de tabela com paginação e ordenação de
                colunas
              </p>

              <ReactTable
                columns={columns}
                data={data}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                showPagination
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <h4 className="header-title">Busca</h4>
              <p className="text-muted font-14 mb-4">
                Uma tabela que permite busca
              </p>

              <ReactTable
                columns={columns}
                data={data}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                showPagination
                isSearchable={true}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <h4 className="header-title">Seleção de Múltiplas Linhas</h4>
              <p className="text-muted font-14 mb-4">
                Esta tabela permite a seleção de várias linhas
              </p>

              <ReactTable
                columns={columns}
                data={data}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                showPagination
                isSelectable={true}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <h4 className="header-title">Expandir Linha</h4>
              <p className="text-muted font-14 mb-4">
                Expanda a linha para ver mais detalhes adicionais
              </p>

              <ReactTable
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                rowsPerPageList={sizePerPageList}
                showPagination
                // isExpandable={true}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdvancedTable;
