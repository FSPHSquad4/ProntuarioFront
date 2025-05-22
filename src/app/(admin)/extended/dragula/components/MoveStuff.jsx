import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useState } from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { ReactSortable } from 'react-sortablejs';

const MovableCard = ({ item }) => {
  return (
    <Card className="mb-0 mt-2">
      <CardBody>
        <div className="d-flex align-items-start">
          <img
            src={item.avatar}
            alt="imagem"
            className="me-3 d-none d-sm-block avatar-sm rounded-circle"
          />
          <div className="w-100 overflow-hidden">
            <h5 className="mb-1 mt-0">{item.name}</h5>
            <p> {item.position} </p>
            <p className="mb-0 text-muted">
              <span className="fst-italic">
                <b>&quot;</b>
                {item.desc}
              </span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const MoveStuff = () => {
  const [team1, setTeam1] = useState([
    {
      id: 1,
      name: 'Louis K. Bond',
      avatar: avatar1,
      position: 'Fundador & CEO',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
    {
      id: 2,
      name: 'Dennis N. Cloutier',
      avatar: avatar2,
      position: 'Engenheiro de Software',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
    {
      id: 3,
      name: 'Susan J. Sander',
      avatar: avatar3,
      position: 'Designer Web',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
  ]);

  const [team2, setTeam2] = useState([
    {
      id: 1,
      name: 'James M. Short',
      avatar: avatar4,
      position: 'Desenvolvedor Web',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
    {
      id: 2,
      name: 'Gabriel J. Snyder',
      avatar: avatar5,
      position: 'Analista de Negócios',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
    {
      id: 3,
      name: 'Louie C. Mason',
      avatar: avatar6,
      position: 'Recursos Humanos',
      desc: 'Disruptivo, barriga de porco poutine, suculentas desalinhadas selfies. Você provavelmente não ouviu falar deles, tatuagem, master cleanse e keffiyeh de borda viva.',
    },
  ]);

  return (
    <>
      <ComponentContainerCard
        title="Mover itens entre contêineres"
        description={
          <>
            {' '}
            Basta especificar o atributo de dados&nbsp;
            <code>data-plugin=&apos;dragula&apos;</code> e&nbsp;
            <code>
              data-containers=&apos;[&quot;id-do-primeiro-contêiner&quot;,
              &quot;id-do-segundo-contêiner&quot;]&apos;
            </code>
            .
          </>
        }
      >
        <Row
          data-plugin="dragula"
          data-containers='["company-list-left", "company-list-right"]'
        >
          <Col md={6}>
            <div className="bg-light bg-opacity-50 p-2 p-lg-4">
              <h5 className="mt-0">Parte 1</h5>
              <ReactSortable
                group="teamList"
                list={team1}
                setList={setTeam1}
                id="company-list-left"
                className="py-2"
              >
                {team1.map((item, idx) => (
                  <MovableCard key={idx} item={item} />
                ))}
              </ReactSortable>
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-light bg-opacity-50 p-2 p-lg-4">
              <h5 className="mt-0">Parte 2</h5>
              <ReactSortable
                group="teamList"
                list={team2}
                setList={setTeam2}
                id="company-list-right"
                className="py-2"
              >
                {team2.map((item, idx) => (
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

export default MoveStuff;
