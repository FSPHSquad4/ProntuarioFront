import { CardBody } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const TaskItem = ({ task: { priority, title, members, description } }) => {
  return (
    <div className="card">
      <CardBody className="">
        <span
          className={`badge bg-soft-${
            priority == 'High'
              ? 'danger'
              : priority == 'Medium'
              ? 'warning'
              : 'success'
          } text-${
            priority == 'High'
              ? 'danger'
              : priority == 'Medium'
              ? 'warning'
              : 'success'
          } float-end`}
        >
          {priority}
        </span>

        <h5 className="mt-0">
          <a className="text-dark fw-semibold">{title}</a>
        </h5>

        <div className="form-check float-end ps-0">
          <input className="form-check-input" type="checkbox" />
        </div>

        <p>{description}</p>
        <div className="clearfix" />

        <div className="row">
          <div className="col">
            <p className="fs-13 mt-2 mb-0">
              <IconifyIcon icon="ri:calendar-event-line" className="me-1" />{' '}
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="col-auto">
            <div className="text-end">
              {members.map((img, idx) => (
                <a href="javascript:void(0);" className="text-muted" key={idx}>
                  <img
                    src={img}
                    alt="usuário-tarefa"
                    width={30}
                    height={30}
                    className="avatar-sm img-thumbnail rounded-circle"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </div>
  );
};

export default TaskItem;
