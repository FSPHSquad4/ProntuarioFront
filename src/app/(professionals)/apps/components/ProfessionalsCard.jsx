import React from 'react';
import { contactsData } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <Row>
      {contactsData.map((item, idx) => (
        <Col xl={3} sm={6} key={idx}>
          <Card className="text-center">
            <CardBody>
              <Dropdown align={'end'} className="float-end">
                <DropdownToggle
                  as="a"
                  className="text-body content-none pb-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconifyIcon icon="tabler:dots-vertical" className="fs-22" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem>Detalhes</DropdownItem>
                  <DropdownItem>Agendar</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <h4 className="mt-3 mb-1">
                <Link to="/users/profile" className="text-dark">
                  {item.name}
                </Link>
              </h4>
              <p className="text-muted">
                {item.role} <span> | </span>
              </p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Contacts;
