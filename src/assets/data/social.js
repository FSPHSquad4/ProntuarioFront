import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import small3 from '@/assets/images/small/small-3.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from "@/utils/date";
import { userData } from "./other";

// import avatar10 from '@/assets/images/users/avatar-10.jpg';
import amazonImg from '@/assets/images/brands/amazon.svg';
import digitalOceanImg from '@/assets/images/brands/digital-ocean.svg';
import dribbbleImg from '@/assets/images/brands/dribbble.svg';
import gitlabImg from '@/assets/images/brands/gitlab.svg';
import instagramImg from '@/assets/images/brands/instagram.svg';
import linkedinImg from '@/assets/images/brands/linkedin.svg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
export const messages = [];
const defaultTo = {
  id: '1012',
  name: 'Adson Almeida',
  image: avatar10,
  email: 'robert@example.com',
  message: 'Oi, obrigado por me conhecer, te vejo em breve!',
  date: addOrSubtractMinutesFromDate(650)
};
for (const user of userData) {
  messages.push({
    id: '1001',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: 'Oi 😊'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '1002',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: 'Oi'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '1003',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Oi Gaston, obrigado por participar da reunião. Vamos mergulhar na nossa análise de desempenho trimestral."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '1004',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: "Oi Gilbert, obrigado por me receber. Estou pronto para discutir como as coisas têm ido."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '1005',
    to: defaultTo,
    from: user,
    message: {
      type: 'file',
      value: [{
        preview: small1
      }, {
        preview: small2
      }, {
        preview: small3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '1006',
    to: user,
    from: defaultTo,
    message: {
      type: 'file',
      value: [{
        name: 'relatorio-financeiro-2024.zip',
        size: 2.3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(20)
  }, {
    id: '1007',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Obrigado, Emily. Agradeço seu apoio. No geral, estou otimista com o desempenho da nossa equipe e ansioso para enfrentar novos desafios no próximo trimestre."
    },
    sentOn: addOrSubtractMinutesFromDate(10)
  });
}
export const emailsData = [{
  id: '2001',
  isStar: false,
  image: avatar2,
  name: "George Thomas",
  subTitle: "Solicitação de Informação",
  description: "Espero que esteja bem. Tenho um pequeno pedido. Você pode, por favor...",
  date: addOrSubtractDaysFromDate(12),
  variant: "danger"
}, {
  id: '2002',
  isStar: true,
  image: avatar3,
  name: "Robert C. Lane",
  subTitle: "Convite para Reunião",
  description: "Bom dia, espero que este e-mail te encontre bem. Estou escrevendo para...",
  IsAttachment: 2,
  date: addOrSubtractDaysFromDate(21),
  variant: "success"
}, {
  id: '2003',
  isStar: false,
  image: dribbbleImg,
  name: "Dribbble",
  subTitle: "Torne-se um designer autodidata de sucesso",
  description: "Não há uma maneira certa de aprender design. Na verdade...",
  date: addOrSubtractDaysFromDate(145),
  variant: "info"
}, {
  id: '2004',
  isStar: true,
  image: avatar5,
  name: "Darren C. Gallimore",
  subTitle: "Aviso de Férias",
  description: "Boa noite, espero que você esteja bem. Tenho um pequeno pedido.",
  date: addOrSubtractDaysFromDate(12)
}, {
  id: '2005',
  isStar: false,
  image: avatar9,
  name: "Mike A. Bell",
  subTitle: "Carta de Oferta",
  description: "Obrigado por se candidatar. Espero que esteja bem. Tenho um pequeno pedido.",
  date: addOrSubtractDaysFromDate(45),
  variant: "secondary"
}, {
  id: '2006',
  isStar: true,
  image: avatar6,
  name: "Bennett C. Rice",
  subTitle: "Carta de Pedido de Desculpas",
  description: "Espero que você esteja bem. Tenho um pequeno pedido. Você pode, por favor...",
  IsAttachment: 4,
  date: addOrSubtractDaysFromDate(89)
}, {
  id: '2007',
  isStar: false,
  image: gitlabImg,
  name: "John J. Bowser",
  subTitle: "Como começar no Gitlab",
  description: "Sabemos que começar uma jornada freelance pode parecer intimidador...",
  IsAttachment: 3,
  date: addOrSubtractDaysFromDate(78)
}, {
  id: '2008',
  isStar: false,
  image: avatar8,
  name: "Jill N. Neal",
  subTitle: "Candidatar-se à Posição Executiva",
  description: "Estou escrevendo para expressar meu grande interesse na Posição Executiva...",
  date: addOrSubtractDaysFromDate(158),
  variant: "success"
}, {
  id: '2009',
  isStar: false,
  image: instagramImg,
  name: "Instagram",
  subTitle: "Você recebeu 2 novos seguidores",
  description: "2 novos seguidores, 1 novo projeto coletado e mais...",
  date: addOrSubtractDaysFromDate(320),
  variant: "info"
}, {
  id: '2010',
  isStar: false,
  image: amazonImg,
  name: "Amazon",
  subTitle: "Seu pedido foi enviado",
  description: "Seu pedido está a caminho com o rastreamento...",
  IsAttachment: 1,
  date: addOrSubtractDaysFromDate(478),
  variant: "success"
}, {
  id: '2011',
  isStar: true,
  image: avatar7,
  name: "Alfredo D. Rico",
  subTitle: "Horário da aula",
  description: "Sua aula online será realizada no sábado às 14:30, horário de Bangladesh.",
  date: addOrSubtractDaysFromDate(14),
  variant: "secondary"
}, {
  id: '2012',
  isStar: false,
  image: avatar4,
  name: "Vernon B. Rutter",
  subTitle: "Convite para participar do nosso Webinar Exclusivo",
  description: "Um webinar exclusivo será realizado no dia 23 de janeiro...",
  date: addOrSubtractDaysFromDate(890),
  variant: ""
}, {
  id: '2013',
  isStar: true,
  image: digitalOceanImg,
  name: "Digital Ocean",
  subTitle: "Atualização das Políticas do Discord",
  description: "Ei! Queremos avisar que estamos atualizando nossos Termos...",
  date: addOrSubtractDaysFromDate(14),
  variant: "danger"
}, {
  id: '2014',
  isStar: true,
  image: linkedinImg,
  name: "Linkedin",
  subTitle: "Novo emprego semelhante a UI/UX",
  description: "Vagas semelhantes ao Designer UI/UX no St Trinity Property group e outros...",
  IsAttachment: 4,
  date: addOrSubtractDaysFromDate(89),
  variant: "success"
}];
