import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import { addOrSubtractDaysFromDate } from '@/utils/date';
import product1 from '@/assets/images/products/p-1.png';
import product2 from '@/assets/images/products/p-2.png';
import product4 from '@/assets/images/products/p-4.png';
import product3 from '@/assets/images/products/p-3.png';
import product5 from '@/assets/images/products/p-5.png';

export const userCardData = [
  {
    name: 'John Smith',
    position: 'Gerente de Projetos',
    feedback_count: 80,
    image: avatar7,
  },
  {
    name: 'Jane Doe',
    position: 'Designer UI/UX',
    feedback_count: 90,
    image: avatar4,
  },
  {
    name: 'Emily Brown',
    position: 'Engenheira de Software',
    feedback_count: 100,
    image: avatar5,
  },
  {
    name: 'Mark Wilson',
    position: 'Especialista em Marketing',
    feedback_count: 70,
    image: avatar6,
  },
  {
    name: 'Sara Johnson',
    position: 'Analista de Dados',
    feedback_count: 50,
    image: avatar3,
  },
];

export const salesProductData = [
  {
    id: '1',
    name: 'Camiseta de Cintura Alta ASOS',
    image: product1,
    date: addOrSubtractDaysFromDate(50),
    price: 79.49,
    quantity: 82,
    amount: '6.518,18',
  },
  {
    id: '2',
    name: 'Sofá Individual Marco',
    image: product2,
    date: addOrSubtractDaysFromDate(150),
    price: 128.5,
    quantity: 37,
    amount: '4.754,50',
  },
  {
    id: '3',
    name: 'Fone de Ouvido Inteligente',
    image: product3,
    date: addOrSubtractDaysFromDate(180),
    price: 39.99,
    quantity: 64,
    amount: '2.559,36',
  },
  {
    id: '4',
    name: 'Jaqueta Leve',
    image: product4,
    date: addOrSubtractDaysFromDate(250),
    price: 20.0,
    quantity: 184,
    amount: '3.680,00',
  },
  {
    id: '5',
    name: 'Sapatos Marco',
    image: product5,
    date: addOrSubtractDaysFromDate(350),
    price: 28.49,
    quantity: 69,
    amount: '1.965,81',
  },
];
