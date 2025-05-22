import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Pagination, Row } from 'react-bootstrap';
const DefaultPagination = () => {
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return <ComponentContainerCard title='Paginação Padrão' description={<>Paginação simples inspirada no Rdio, ótima para aplicativos e resultados de pesquisa.</>}>
      <nav>
        <Pagination className="mb-0">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const DisabledAndActive = () => {
  return <ComponentContainerCard title='Disabled and active states' description={<>Os links de paginação são personalizáveis ​​para diferentes circunstâncias. Use <code>.disabled</code> para links que parecem não clicáveis ​​e <code>.active</code> para indicar a página atual.</>}>
      <nav aria-label="...">
        <Pagination className="mb-0">
          <Pagination.Prev disabled>Anerior</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Próximo</Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const AlignmentPagination = () => {
  return <ComponentContainerCard title='Alignment' description={<>Altere o alinhamento dos componentes de paginação com utilitários flexbox.</>}>
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-center">
          <Pagination.Prev disabled>Anterior</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Próximo</Pagination.Next>
        </Pagination>
      </nav>
      <nav aria-label="Page navigation example">
        <Pagination className="justify-content-end">
          <Pagination.Prev disabled>Anterior</Pagination.Prev>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next>Próximo</Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const CustomIconPagination = () => {
  return <ComponentContainerCard title='Custom Icon Pagination' description={<>Adicione <code> .pagination-boxed</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-boxed">
          <Pagination.Prev> <IconifyIcon icon="tabler:chevron-left" /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next> <IconifyIcon icon='tabler:chevron-right' className="align-middle" /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed">
          <Pagination.Prev>   <IconifyIcon icon='lucide:arrow-left' /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next> <IconifyIcon icon='lucide:arrow-right' /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed">
          <Pagination.Prev> <IconifyIcon icon="solar:arrow-left-line-duotone" className="fs-18" /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item active>5</Pagination.Item>
          <Pagination.Next><IconifyIcon icon="solar:arrow-right-line-duotone" className="fs-18" /></Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const CustomColorPagination = () => {
  return <ComponentContainerCard title='Custom Color Pagination' description={<>Adicione <code> .pagination-boxed</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-boxed pagination-info">
          <Pagination.Prev> <IconifyIcon icon="tabler:chevron-left" /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next> <IconifyIcon icon='tabler:chevron-right' className="align-middle" /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed pagination-secondary">
          <Pagination.Prev> <IconifyIcon icon='lucide:arrow-left' /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next> <IconifyIcon icon='lucide:arrow-right' /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed pagination-dark mb-0">
          <Pagination.Prev> <IconifyIcon icon="solar:arrow-left-line-duotone" className="fs-18" /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item active>5</Pagination.Item>
          <Pagination.Next> <IconifyIcon icon="solar:arrow-right-line-duotone" className="fs-18" /></Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const SizingPagination = () => {
  const items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return <ComponentContainerCard title='Sizing' description={<>Adicione <code> .pagination-lg</code> ou <code> .pagination-sm</code> para tamanhos adicionais.</>}>
      <nav>
        <Pagination size="lg">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
        <Pagination size="sm" className='mb-0'>
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const BoxedPagination = () => {
  return <ComponentContainerCard title='Boxed Pagination' description={<>Adicione <code> .pagination-boxed</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-boxed">
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
        <Pagination className="pagination-lg pagination-boxed">
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
        <Pagination className="pagination-sm pagination-boxed mb-0">
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const RoundedPagination = () => {
  return <ComponentContainerCard title='Rounded Pagination' description={<>Adicione <code> .pagination-rounded</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-rounded pagination-boxed mb-0">
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const SoftPagination = () => {
  return <ComponentContainerCard title='Soft Pagination' description={<>Adicione <code> .pagination-rounded</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-soft-danger pagination-boxed mb-0">
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const GradientColorPagination = () => {
  return <ComponentContainerCard title='Gradient Color Pagination' description={<>Adicione <code> .pagination-boxed</code> para paginação arredondada.</>}>
      <nav>
        <Pagination className="pagination-boxed pagination-gradient pagination-info">
          <Pagination.Prev><IconifyIcon icon='tabler:chevron-left' /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next><IconifyIcon icon='tabler:chevron-right' className="align-middle" /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed pagination-secondary pagination-gradient">
          <Pagination.Prev> <IconifyIcon icon='lucide:arrow-left' /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item active>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next><IconifyIcon icon='lucide:arrow-right' /></Pagination.Next>
        </Pagination>
      </nav>
      <nav>
        <Pagination className="pagination-boxed pagination-dark pagination-gradient mb-0">
          <Pagination.Prev> <IconifyIcon icon="solar:arrow-left-line-duotone" className="fs-18" /></Pagination.Prev>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item active>5</Pagination.Item>
          <Pagination.Next><IconifyIcon icon="solar:arrow-right-line-duotone" className="fs-18" /></Pagination.Next>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const AllPagination = () => {
  return <>
      <Row>
        <Col xl={6}>
          <DefaultPagination />
          <DisabledAndActive />
          <AlignmentPagination />
          <CustomIconPagination />
          <CustomColorPagination />
        </Col>
        <Col xl={6}>
          <SizingPagination />
          <BoxedPagination />
          <RoundedPagination />
          <SoftPagination />
          <GradientColorPagination />
        </Col>
      </Row>
    </>;
};
export default AllPagination;