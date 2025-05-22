import { Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactQuill from 'react-quill-new';

// estilos
import 'react-quill-new/dist/quill.snow.css';
import 'react-quill-new/dist/quill.bubble.css';
let valueBubble = '';
let valueSnow = '';
valueSnow =
  valueBubble = `<h3><span class="ql-size-large">Olá Mundo!</span></h3>
    <p><br/></p>
    <h3>Esta é uma área simples e editável.</h3>
    <p><br/></p>
    <ul>
      <li>Selecione um texto para revelar a barra de ferramentas.</li>
      <li>Edite documentos ricos em tempo real, tão elástico!</li>
    </ul>
<p><br/></p>
<p>Fim da área simples</p>`;
const SnowEditor = () => {
  const modules = {
    toolbar: [
      [
        {
          font: [],
        },
        {
          size: [],
        },
      ],
      ['bold', 'italic', 'underline', 'strike'],
      [
        {
          color: [],
        },
        {
          background: [],
        },
      ],
      [
        {
          script: 'super',
        },
        {
          script: 'sub',
        },
      ],
      [
        {
          header: [false, 1, 2, 3, 4, 5, 6],
        },
        'blockquote',
        'code-block',
      ],
      [
        {
          list: 'ordered',
        },
        {
          list: 'bullet',
        },
        {
          indent: '-1',
        },
        {
          indent: '+1',
        },
      ],
      [
        'direction',
        {
          align: [],
        },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };
  return (
    <ComponentContainerCard
      title="Editor Quill"
      description={
        <>O Snow é um tema de barra de ferramentas limpa e simples.</>
      }
    >
      <ul className="list-group list-group-flush">
        <li className="list-group-item m-0 p-0">
          <div className="mb-2">
            <ReactQuill
              id="snow-editor"
              modules={modules}
              defaultValue={valueSnow}
              theme="snow"
            />
          </div>
        </li>
      </ul>
    </ComponentContainerCard>
  );
};
const BubbleEditor = () => {
  return (
    <ComponentContainerCard
      title="Editor Bubble"
      description={
        <>O Bubble é um tema baseado em uma dica de ferramenta simples.</>
      }
    >
      <ul className="list-group list-group-flush">
        <li className="list-group-item m-0 p-0">
          <div className="mb-2">
            <div id="snow-editor">
              <ReactQuill
                id="bubble-editor"
                defaultValue={valueBubble}
                theme="bubble"
              />
            </div>
          </div>
        </li>
      </ul>
    </ComponentContainerCard>
  );
};
const AllEditors = () => {
  return (
    <Row>
      <Col xs={12}>
        <SnowEditor />
        <BubbleEditor />
      </Col>
    </Row>
  );
};
export default AllEditors;
