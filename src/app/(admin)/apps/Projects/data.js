import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';

export const projectData = [
  {
    title: 'Novo Design de Admin',
    category: 'Design de Sites',
    description:
      'Criar uma plataforma de e-commerce amigável ao usuário com um design elegante, navegação intuitiva e layouts responsivos para melhorar..',
    status: 'Concluído',
    variant: 'success',
    progress: 80,
    questions: 56,
    comments: 452,
    team: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    title: 'Redesign de Site Corporativo',
    category: 'Design de Sites',
    description:
      'Melhorar a identidade corporativa com um redesign moderno e profissional que se alinha aos objetivos de negócios..',
    status: 'Em Andamento',
    variant: 'primary',
    progress: 60,
    questions: 34,
    comments: 210,
    team: [avatar5, avatar6],
  },
  {
    title: 'Site de Portfólio',
    category: 'Design de Sites',
    status: 'Em Revisão',
    description:
      'Criar um portfólio elegante e responsivo para exibir projetos criativos com visuais impressionantes..',
    progress: 90,
    variant: 'info',
    questions: 12,
    comments: 75,
    team: [avatar7, avatar2, avatar9],
  },
  {
    title: 'Plataforma de E-Learning',
    category: 'Design de Sites',
    description:
      'Desenvolver uma plataforma amigável ao usuário para oferecer cursos online, com foco em acessibilidade e engajamento..',
    status: 'Pendente',
    variant: 'warning',
    progress: 45,
    questions: 28,
    comments: 150,
    team: [avatar8, avatar9, avatar6],
  },
  {
    title: 'Portal de Agência de Viagens',
    category: 'Desenvolvimento Web',
    status: 'Atrasado',
    description:
      'Criar um portal intuitivo para uma agência de viagens gerenciar reservas e oferecer uma experiência de cliente sem interrupções..',
    variant: 'danger',
    progress: 30,
    questions: 12,
    comments: 98,
    team: [avatar10, avatar8, avatar6, avatar1, avatar7],
  },
  {
    title: 'Portal de Saúde',
    category: 'Design de Sites',
    description:
      'Criar um portal de saúde oferecendo agendamento de consultas, registros de pacientes e ferramentas de comunicação responsivas..',
    status: 'Em Espera',
    variant: 'secondary',
    progress: 25,
    questions: 18,
    comments: 102,
    team: [avatar3],
  },
];
