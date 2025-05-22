import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';

export const kanbanSectionsData = [{
  id: '501',
  title: 'Próximas Tarefas'
}, {
  id: '502',
  title: 'Em Progresso'
}, {
  id: '503',
  title: 'Em Revisão'
}, {
  id: '504',
  title: 'Concluído'
}];

export const kanbanTasksData = [{
  id: '1001',
  sectionId: '501',
  title: 'Página inicial do App iOS',
  description: 'Colaborar com usuários em um repositório que pertence à sua conta pessoal',
  image: avatar1,
  variant: 'warning',
  views: 5,
  priority: 'Alta',
  share: 18,
  commentsCount: 12,
  members: [avatar1, avatar3, avatar4]
}, {
  id: '1002',
  sectionId: '501',
  title: 'Design do layout do Topnav',
  description: 'As melhores práticas de design para barras de navegação envolvem focar na funcionalidade.',
  variant: 'pink',
  views: 2,
  share: 24,
  priority: 'Baixa',
  commentsCount: 24,
  progress: 50,
  members: [avatar1, avatar10]
}, {
  id: '1003',
  sectionId: '501',
  title: 'Convidar usuário para um projeto',
  description: 'Colaborar com usuários em um repositório que pertence à sua conta pessoal',
  variant: 'purple',
  views: 1,
  priority: 'Alta',
  share: 8,
  commentsCount: 13,
  progress: 25,
  members: [avatar2, avatar4]
}, {
  id: '1004',
  sectionId: '502',
  title: 'Design do quadro Kanban',
  description: 'Um quadro Kanban básico é dividido em três colunas',
  variant: 'danger',
  views: 3,
  share: 21,
  priority: 'Média',
  commentsCount: 22,
  progress: 80,
  members: [avatar7, avatar3, avatar4]
}, {
  id: '1005',
  sectionId: '502',
  title: 'Codificar o script',
  description: 'Scripting é um código usado para automatizar processos.',
  variant: 'pink',
  views: 6,
  priority: 'Baixa',
  share: 12,
  commentsCount: 14,
  progress: 60,
  members: [avatar6, avatar8, avatar10]
}, {
  id: '1006',
  sectionId: '502',
  title: 'Design do Logotipo da Marca',
  description: 'Criar o logotipo da sua marca é fácil com o Criador de Logotipos do BrandCrowd.',
  variant: 'info',
  views: 1,
  share: 21,
  priority: 'Alta',
  commentsCount: 22,
  progress: 30,
  members: [avatar7]
}, {
  id: '1007',
  sectionId: '502',
  title: 'Melhorar o Carregador de Animação',
  description: 'Um quadro Kanban básico é dividido em três colunas',
  variant: 'warning',
  priority: 'Média',
  views: 1,
  share: 8,
  commentsCount: 13,
  members: [avatar6, avatar8]
}, {
  id: '1008',
  sectionId: '503',
  title: 'Teste de Usabilidade',
  description: 'Avaliar um produto ou serviço testando-o com usuários representativos',
  variant: 'success',
  progress: 45,
  views: 4,
  share: 10,
  priority: 'Alta',
  commentsCount: 20,
  members: [avatar2, avatar4]
}, {
  id: '1009',
  sectionId: '503',
  title: 'Pesquisa',
  description: 'O processo de identificar tópicos para criar conteúdo.',
  variant: 'danger',
  progress: 84,
  views: 2,
  share: 7,
  priority: 'Baixa',
  commentsCount: 12,
  members: [avatar6, avatar8]
}, {
  id: '1010',
  sectionId: '504',
  title: 'Wireframes',
  description: 'Avaliar um produto ou serviço testando-o com usuários representativos',
  variant: 'warning',
  views: 25,
  priority: 'Alta',
  share: 6,
  commentsCount: 12,
  members: [avatar6, avatar8, avatar10]
}];
