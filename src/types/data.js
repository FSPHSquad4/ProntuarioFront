export const getKanbanSectionVariant = title => {
  let variant = 'primary';
  if (title === 'To Do') variant = 'pink';else if (title === 'In Progress') variant = 'warning';else if (title === 'Review') variant = 'success';else if (title === 'Done') variant = 'info';
  return variant;
};