import aws from '@/assets/images/brands/aws.svg';
import bitbucket from '@/assets/images/brands/bitbucket.svg';
import bootstrap from '@/assets/images/brands/bootstrap.svg';
import digitalOcean from '@/assets/images/brands/digital-ocean.svg';
import dribbble from '@/assets/images/brands/dribbble.svg';
import dropbox from '@/assets/images/brands/dropbox.svg';
import gitlab from '@/assets/images/brands/gitlab.svg';
import googleCloud from '@/assets/images/brands/google-cloud.svg';
import slack from '@/assets/images/brands/slack.svg';
import userAvatar10 from '@/assets/images/users/avatar-10.jpg';
import userAvatar2 from '@/assets/images/users/avatar-2.jpg';
import userAvatar4 from '@/assets/images/users/avatar-4.jpg';
import userAvatar7 from '@/assets/images/users/avatar-7.jpg';
import { currency } from '@/context/constants';
import { addOrSubtractDaysFromDate } from '@/utils/date';

export const appData = [
  {
    name: 'slack',
    image: slack,
  },
  {
    name: 'Gitlab',
    image: gitlab,
  },
  {
    name: 'Dribbble',
    image: dribbble,
  },
  {
    name: 'Bitbucket',
    image: bitbucket,
  },
  {
    name: 'Dropbox',
    image: dropbox,
  },
  {
    name: 'Google Cloud',
    image: googleCloud,
  },
  {
    name: 'AWS',
    image: aws,
  },
  {
    name: 'Servidor',
    image: digitalOcean,
  },
  {
    name: 'Bootstrap',
    image: bootstrap,
  },
];

export const notificationData = [
  {
    id: 1,
    title: (
      <>
        <span className="fw-medium text-body">Glady Haid</span> comentou em{' '}
        <span className="fw-medium text-body">status de admin de paces</span>
      </>
    ),
    image: {
      image: userAvatar2,
      icon: 'tabler:message-circle',
      variant: 'danger',
    },
    time: addOrSubtractDaysFromDate(12),
  },
  {
    id: 2,
    title: (
      <>
        <span className="fw-medium text-body">Tommy Berry</span> doou{' '}
        <span className="text-success">{currency}100,00</span> para o{' '}
        <span className="fw-medium text-body">
          programa de remoção de carbono
        </span>
      </>
    ),
    image: {
      image: userAvatar4,
      icon: 'tabler:currency-dollar',
      variant: 'info',
    },
    time: addOrSubtractDaysFromDate(1),
  },
  {
    id: 3,
    title: (
      <>
        Você retirou <span className="fw-medium text-body">{currency}500</span>{' '}
        no{' '}
        <span className="fw-medium text-body">
          caixa eletrônico de Nova York
        </span>
      </>
    ),
    icon: {
      icon: 'solar:wallet-money-bold-duotone',
      variant: 'success',
    },
    time: addOrSubtractDaysFromDate(250),
  },
  {
    id: 4,
    title: (
      <>
        <span className="fw-medium text-body">Richard Allen</span> seguiu você
        no <span className="fw-medium text-body">Facebook</span>
      </>
    ),
    image: {
      image: userAvatar7,
      icon: 'tabler:plus',
      variant: 'secondary',
    },
    time: addOrSubtractDaysFromDate(15),
  },
  {
    id: 5,
    title: (
      <>
        <span className="fw-medium text-body">Victor Collier</span> curtiu sua
        foto recente no <span className="fw-medium text-body">Instagram</span>
      </>
    ),
    image: {
      image: userAvatar10,
      icon: 'tabler:heart-filled',
      variant: 'danger',
    },
    time: addOrSubtractDaysFromDate(2),
  },
];
