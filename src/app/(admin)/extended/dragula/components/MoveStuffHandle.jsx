import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useState } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { ReactSortable } from 'react-sortablejs';

const MovableCard = ({ item }) => {
  return (
    <Card className="mb-0 mt-2">
      <CardBody>
        <div className="d-flex align-items-center">
          <img
            src={item.avatar}
            alt="imagem"
            className="me-3 d-none d-sm-block avatar-sm rounded-circle"
          />
          <div className="w-100 overflow-hidden">
            <h5 className="mb-1">{item.name}</h5>
            <p className="mb-0"> {item.position} </p>
          </div>
          <span className="dragula-handle">
            <IconifyIcon icon="tabler:arrows-move" />
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

const MoveStuffHandle = () => {
  const [part1, setPart1] = useState([
    {
      id: 1,
      name: 'Louis K. Bond',
      avatar: avatar7,
      position: 'Fundador & CEO',
    },
    {
      id: 2,
      name: 'Dennis N. Cloutier',
      avatar: avatar8,
      position: 'Engenheiro de Software',
    },
    {
      id: 3,
      name: 'Susan J. Sander',
      avatar: avatar9,
      position: 'Designer Web',
    },
  ]);

  const [part2, setPart2] = useState([
    {
      id: 1,
      name: 'James M. Short',
      avatar: avatar10,
      position: 'Desenvolvedor Web',
    },
    {
      id: 2,
      name: 'Gabriel J. Snyder',
      avatar: avatar5,
      position: 'Analista de Negócios',
    },
    {
      id: 3,
      name: 'Louie C. Mason',
      avatar: avatar3,
      position: 'Recursos Humanos',
    },
  ]);

  return (
    <>
      <ComponentContainerCard
        title="Mover itens entre contêineres usando a alça"
        description={
          <>
            {' '}
            Basta especificar o atributo de dados&nbsp;
            <code>data-plugin=&apos;dragula&apos;</code>,&nbsp;
            <code>
              data-containers=&apos;[&quot;id-do-primeiro-contêiner&quot;,
              &quot;id-do-segundo-contêiner&quot;]&apos;
            </code>{' '}
            e<code>data-handle-class=&apos;dragula-handle&apos;</code>.
          </>
        }
      >
        <Row
          data-plugin="dragula"
          data-containers='["handle-dragula-left", "handle-dragula-right"]'
          data-handleclass="dragula-handle"
        >
          <Col md={6}>
            <div className="bg-light bg-opacity-50 p-2 p-lg-4">
              <h5 className="mt-0">Parte 1</h5>
              <ReactSortable
                group="teamList2"
                handle=".dragula-handle"
                list={part1}
                setList={setPart1}
                id="handle-dragula-left"
                className="py-2"
              >
                {part1.map((item, idx) => (
                  <MovableCard key={idx} item={item} />
                ))}
              </ReactSortable>
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light bg-opacity-50 p-2 p-lg-4">
              <h5 className="mt-0">Parte 2</h5>
              <ReactSortable
                group="teamList2"
                handle=".dragula-handle"
                list={part2}
                setList={setPart2}
                id="handle-dragula-right"
                className="py-2"
              >
                {part2.map((item, idx) => (
                  <MovableCard key={idx} item={item} />
                ))}
              </ReactSortable>
            </div>
          </Col>
        </Row>
      </ComponentContainerCard>
    </>
  );
};

export default MoveStuffHandle;
