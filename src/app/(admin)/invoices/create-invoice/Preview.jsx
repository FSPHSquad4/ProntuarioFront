import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import { Button } from 'react-bootstrap';
const PreviewButton = () => {
  return <Button variant='primary' onClick={() => window.print()} className="gap-1"><IconifyIcon icon='tabler:eye' className="fs-16" /> Visualização</Button>;
};
export default PreviewButton;