import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { expandableRecords, nestedRecords, records } from '../data';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const BasicTable = () => {
  return <ComponentContainerCard title='Minha Tabela' description={<>Para estilização básica—um leve preenchimento e apenas divisores horizontais—adicione a classe base <code>.table</code> a qualquer <code>tabela</code>.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      {item.active ? <>
                            <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                            <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </> : <>
                            <input type="checkbox" id="switch04" data-switch="success" />
                            <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </>}
                    </div>
                  </td>
                </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const InverseTable = () => {
  return <ComponentContainerCard title='Inverse Table' description={<>Você também pode inverter as cores—com texto claro em fundos escuros—usando <code>.table-dark</code>.</>}>
      <div className="table-responsive-sm">
        <Table className="table-dark mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      {item.active ? <>
                            <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                            <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </> : <>
                            <input type="checkbox" id="switch04" data-switch="success" />
                            <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </>}
                    </div>
                  </td>
                </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const StripedRowTable = () => {
  return <ComponentContainerCard title='Striped Rows' description={<>
      Use <code>.table-striped</code> para adicionar listras alternadas (zebra-striping) a qualquer linha de tabela dentro do <code>tbody</code>.</>}>
      <div className="table-responsive-sm">
        <Table className="table-striped mb-0">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Conta</th>
              <th>Balanço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, idx) => {
            return <tr key={idx}>
                  <td className="table-user">
                    <img src={record.image} alt="table-user" className="me-2 rounded-circle avatar-sm" />
                    &nbsp;{record.name}
                  </td>
                  <td>{record.accountNo}</td>
                  <td>{record.dob}</td>
                  <td>
                    <Link to="" className="text-reset fs-16 px-1">
                      <IconifyIcon icon="tabler:pencil" />
                    </Link>
                    <Link to="" className="text-reset fs-16 px-1">
                      <IconifyIcon icon="tabler:trash" />
                    </Link>
                  </td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const StripedColumnsTable = () => {
  return <ComponentContainerCard title='Striped Columns' description={<> Use <code>.table-striped-columns</code> para adicionar listras alternadas (zebra-striping) a qualquer coluna de tabela.</>}>
      <div className="table-responsive-sm">
        <Table className="table-striped-columns mb-0">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Conta</th>
              <th>Balanço</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>
            {(records || []).map((record, idx) => {
            return <tr key={idx}>
                  <td>
                    <img src={record.image} alt="table-user" className="me-2 avatar-sm rounded-circle" />
                    &nbsp;{record.name}
                  </td>
                  <td>{record.accountNo}</td>
                  <td>{record.dob}</td>
                  <td className="text-muted text-center">
                    <Link to='' className="link-reset fs-20 p-1"> <IconifyIcon icon='tabler:pencil' /></Link>
                    <Link to='' className="link-reset fs-20 p-1"> <IconifyIcon icon='tabler:trash' /></Link>
                  </td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const TableHeadOptions = () => {
  return <ComponentContainerCard title='Table Head Options' description={<>UUse uma das duas classes modificadoras para fazer com que o <code>thead</code> apareça em cinza claro ou escuro.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <thead className="table-light">
            <tr>
              <th>Produto</th>
              <th>Correio</th>
              <th>Processo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((item, idx) => {
            return <tr key={idx}>
                    <td>{item.product}</td>
                    <td>{item.courier}</td>
                    <td>
                      <ProgressBar now={item.now} variant={item.variant} className="progress-sm" />
                    </td>
                    <td><IconifyIcon icon="tabler:circle" className={`text-${item.variant}`} /> {item.status}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const TableHeadOptions2 = () => {
  return <ComponentContainerCard title='Table Head Options' description={<> Use uma das duas classes modificadoras para fazer com que o <code>thead</code> apareça em cinza claro ou escuro.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <thead className="table-dark">
            <tr>
              <th>Produto</th>
              <th>Correio</th>
              <th>Processo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((item, idx) => {
            return <tr key={idx}>
                    <td>{item.product}</td>
                    <td>{item.courier}</td>
                    <td>
                      <ProgressBar now={item.now} variant={item.variant} className="progress-sm" />
                    </td>
                    <td><IconifyIcon icon="tabler:circle" className={`text-${item.variant}`} /> {item.status}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const HoverableRows = () => {
  return <ComponentContainerCard title='Hoverable Rows' description={<>Adicione <code>.table-hover</code> para ativar um estado de hover nas linhas da tabela dentro de um <code>tbody</code>.</>}>
      <div className="table-responsive-sm">
        <Table className="table-hover mb-0">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>{record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity} Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const InverseHoverableRows = () => {
  return <ComponentContainerCard title='Inverse Hoverable Rows' description={<>Adicione <code>.table-hover</code> para habilitar o estado de hover nas linhas da tabela dentro de um <code>tbody</code>.</>}>
      <div className="table-responsive-sm">
        <Table className="table-dark table-hover mb-0">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>{record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity} Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BorderedTable = () => {
  return <ComponentContainerCard title='Bordered Table' description={<>Adicione <code>.table-bordered</code> para adicionar bordas em todos os lados da tabela e das células.</>}>
      <div className="table-responsive-sm">
        <Table className="table-bordered mb-0">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Conta</th>
              <th>Balanço</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => {
            return <tr key={idx}>
                  <td className="table-user">
                    <img src={record.image} alt="table-user" className="me-2 avatar-sm rounded-circle" />
                    &nbsp;{record.name}
                  </td>
                  <td>{record.accountNo}</td>
                  <td>{record.dob}</td>
                  <td className="text-center text-muted">
                    <Link to="" className="link-reset fs-20 p-1"> <IconifyIcon icon="tabler:trash" /></Link>
                  </td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BorderedColorTable = () => {
  return <ComponentContainerCard title='Bordered Color Table' description={<>Add <code>.table-bordered</code> &amp; <code>.border-primary</code> can be added to change colors.</>}>
      <div className="table-responsive-sm">
        <Table className="table-bordered border-secondary mb-0">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Conta</th>
              <th>Balanço</th>
              <th className="text-center">Ação</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => {
            return <tr key={idx}>
                  <td className="table-user">
                    <img src={record.image} alt="table-user" className="me-2 avatar-sm rounded-circle" />
                    &nbsp;{record.name}
                  </td>
                  <td>{record.accountNo}</td>
                  <td>{record.dob}</td>
                  <td className="text-center text-muted">
                    <Link to="" className="link-reset fs-20 p-1"> <IconifyIcon icon="tabler:trash" /></Link>
                  </td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const AlwaysResponsive = () => {
  return <ComponentContainerCard title='Always Responsive' description={<> Em cada ponto de interrupção, use
      <code>.table-responsive</code> para tabelas de rolagem horizontal. Use
      <code>.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code> conforme necessário para criar tabelas responsivas até um ponto de interrupção específico. A partir desse ponto de interrupção, a tabela se comportará
      normalmente e não rolar horizontalmente.</>}>
      <div className="table-responsive">
        <Table className="mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
              <th scope="col">Cabeçalho</th>
            </tr>
          </thead>
          <tbody>
            {records.slice(0, 3).map((record, idx) => {
            return <tr key={idx}>
                  <td>{record.id}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                  <td>{record.cell}</td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BasicBorderlessTable = () => {
  return <ComponentContainerCard title='Basic Borderless Example' description={<>Adicione <code>.table-borderless</code> para uma tabela sem bordas.</>}>
      <div className="table-responsive-sm">
        <Table className="table-borderless mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      {item.active ? <>
                            <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                            <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </> : <>
                            <input type="checkbox" id="switch04" data-switch="success" />
                            <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </>}
                    </div>
                  </td>
                </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const InverseBorderlessTable = () => {
  return <ComponentContainerCard title='Inverse Borderless Table' description={<>Add <code>.table-borderless</code> for a table without borders.</>}>
      <div className="table-responsive-sm">
        <Table className="table-dark table-borderless mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.dob}</td>
                  <td>
                    <div>
                      {item.active ? <>
                            <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                            <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </> : <>
                            <input type="checkbox" id="switch04" data-switch="success" />
                            <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </>}
                    </div>
                  </td>
                </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const ActiveTables = () => {
  return <ComponentContainerCard title='Active Tables' description={<> Highlight a table row or cell by adding a <code>.table-active</code> class.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => {
            return <tr className={record.activeClass ? record.activeClass : ''} key={idx}>
                  <td>{record.name}</td>
                  <td>{record.phoneNo}</td>
                  <td>{record.dob}</td>
                  <td>{record.country}</td>
                </tr>;
          })}
            <tr>
              <td>Risa D. Pearson</td>
              <td>336-508-2157</td>
              <td>July 24, 1950</td>
              <td>Belgium</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const NestingTable = () => {
  return <ComponentContainerCard title='Nesting' description={<>Border styles, active styles, and table variants are not inherited by nested tables.</>}>
      <div className="table-responsive-sm">
        <Table className="table-striped mb-0">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ativo?</th>
            </tr>
          </thead>
          <tbody>
            {nestedRecords.map((record, idx) => {
            return record.children ? <Fragment key={idx}>
                  <tr>
                    <td>{record.name}</td>
                    <td>{record.phoneNo}</td>
                    <td>{record.dob}</td>
                    <td><div>
                      {record.active ? <>
                            <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                            <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </> : <>
                            <input type="checkbox" id="switch04" data-switch="success" />
                            <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                          </>}
                    </div></td>
                  </tr>
                  <tr key={idx}>
                    <td colSpan={4}>
                      <Table className="sm mb-0">
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                            <th>País</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(record.children || []).map((record, idx) => {
                        return <tr key={idx}>
                                <td>{record.name}</td>
                                <td>{record.phoneNo}</td>
                                <td>{record.dob}</td>
                                <td>  <div>
                                  {record.active ? <>
                                        <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                                        <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                      </> : <>
                                        <input type="checkbox" id="switch04" data-switch="success" />
                                        <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                      </>}
                                </div></td>
                              </tr>;
                      })}
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                </Fragment> : <tr key={idx}>
                  <td>{record.name}</td>
                  <td>{record.phoneNo}</td>
                  <td>{record.dob}</td>
                  <td>  <div>
                    {record.active ? <>
                          <input type="checkbox" id="switch01" defaultChecked data-switch="success" />
                          <label htmlFor="switch01" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                        </> : <>
                          <input type="checkbox" id="switch04" data-switch="success" />
                          <label htmlFor="switch04" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                        </>}
                  </div></td>
                </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const SmallTable = () => {
  return <ComponentContainerCard title='Small Table' description={<>Adicione <code>.table-sm</code> para tornar as tabelas mais compactas, reduzindo pela metade o preenchimento das células.</>}>
      <div className="table-responsive-sm">
        <Table className="table-sm mb-0">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>{record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity}&nbsp;Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const TableFoot = () => {
  return <ComponentContainerCard title='Table Foot' description={<>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>${record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity}&nbsp;Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
          <tfoot>
            <tr>
              <th>Footer</th>
              <td>Footer</td>
              <td>Footer</td>
              <td>Footer</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const CaptionsTable = () => {
  return <ComponentContainerCard title='Captions' description={<>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>{record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity}&nbsp;Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const CaptionTopTable = () => {
  return <ComponentContainerCard title='Caption Top' description={<>Adicione <code>.table-sm</code> para tornar as tabelas mais compactas, diminuindo o preenchimento das células pela metade.</>}>
      <div className="table-responsive-sm">
        <Table className="mb-0 caption-top">
          <caption>Lista de Usuários</caption>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expandableRecords.slice(0, 4).map((record, idx) => {
            return <tr key={idx}>
                    <td>{record.product}</td>
                    <td>{record.price}</td>
                    <td><span className="badge bg-primary">{record.Quantity}&nbsp;Pcs</span></td>
                    <td>${record.Amount}</td>
                  </tr>;
          })}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BasicTables = () => {
  return <>
      <PageBreadcrumb title='Tabelas Básicas' />
      <Row>
        <Col xl={6}>
          <BasicTable />
        </Col>
        <Col xl={6}>
          <InverseTable />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StripedRowTable />
        </Col>
        <Col xl={6}>
          <StripedColumnsTable />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TableHeadOptions />
        </Col>
        <Col xl={6}>
          <TableHeadOptions2 />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <HoverableRows />
        </Col>
        <Col xl={6}>
          <InverseHoverableRows />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BorderedTable />
        </Col>
        <Col xl={6}>
          <BorderedColorTable />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <AlwaysResponsive />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BasicBorderlessTable />
        </Col>
        <Col xl={6}>
          <InverseBorderlessTable />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ActiveTables />
        </Col>
        <Col xl={6}>
          <NestingTable />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <SmallTable />
        </Col>
        <Col xl={6}>
          <TableFoot />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <CaptionsTable />
        </Col>
        <Col xl={6}>
          <CaptionTopTable />
        </Col>
      </Row>
    </>;
};
export default BasicTables;
