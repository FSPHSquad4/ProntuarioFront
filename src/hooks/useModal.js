import useToggle from './useToggle';
import { useState } from 'react';
export default function useModal() {
  const {
    isTrue: isOpen,
    toggle: toggleModal
  } = useToggle();
  const [size, setSize] = useState();
  const [className, setClassName] = useState('');
  const [scroll, setScroll] = useState(false);

  //Abre modal grande
  const openModalWithSize = size => {
    setSize(size);
    setClassName('');
    setScroll(false);
    toggleModal();
  };

  //Abre modal com classe customizada
  const openModalWithClass = className => {
    setClassName(className);
    setScroll(false);
    toggleModal();
  };

  //Abre modal grande
  const openModalWithScroll = () => {
    setScroll(true);
    // setSize('');

    setClassName('w-100');
    toggleModal();
  };
  return {
    isOpen,
    size,
    className,
    scroll,
    toggleModal,
    openModalWithSize,
    openModalWithClass,
    openModalWithScroll
  };
}