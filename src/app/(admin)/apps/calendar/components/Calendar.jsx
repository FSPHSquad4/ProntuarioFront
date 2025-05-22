import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

const Calendar = ({
  events,
  onDateClick,
  onDrop,
  onEventClick,
  onEventDrop,
}) => {
  // Você pode modificar esses eventos conforme sua necessidade
  const handleDateClick = (arg) => {
    onDateClick(arg);
  };
  const handleEventClick = (arg) => {
    onEventClick(arg);
  };
  const handleDrop = (arg) => {
    onDrop(arg);
  };
  const handleEventDrop = (arg) => {
    onEventDrop(arg);
  };

  return (
    <div className="mt-4 mt-lg-0">
      <div id="calendar">
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
            bootstrapPlugin,
          ]}
          themeSystem="bootstrap"
          bootstrapFontAwesome={false}
          handleWindowResize={true}
          slotDuration="00:15:00"
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista',
            prev: 'Anterior',
            next: 'Próximo',
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          // height={height - 200}
          dayMaxEventRows={1}
          editable={true}
          selectable={true}
          droppable={true}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          drop={handleDrop}
          eventDrop={handleEventDrop}
        />
      </div>
    </div>
  );
};

export default Calendar;
