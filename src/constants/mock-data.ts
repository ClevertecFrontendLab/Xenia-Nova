import image from '../assets/img/mock-img.png';
import slide1 from '../assets/img/slide_1.jpg';
import slide2 from '../assets/img/slide_2.jpg';
import slide3 from '../assets/img/slide_3.jpg';
import slide4 from '../assets/img/slide_4.jpg';
import slide5 from '../assets/img/slide_5.jpg';
import { ICard, IComment } from '../types';

export const mockCount = 137;

export const mockImgArr = [slide1, slide2, slide3, slide4, slide5];

export const mockCards: ICard[] = [
  {
    id: 1,
    imgUrls: [],
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 2,
    imgUrls: [image],
    rating: 4.1,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 3,
    imgUrls: mockImgArr,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 4,
    imgUrls: mockImgArr,
    rating: 4.1,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 5,
    imgUrls: [],
    rating: 4.1,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 6,
    imgUrls: mockImgArr,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 7,
    imgUrls: mockImgArr,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 8,
    imgUrls: [],
    rating: 2.9,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 9,
    imgUrls: mockImgArr,
    rating: 4,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 10,
    imgUrls: mockImgArr,
    rating: 3,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 11,
    imgUrls: mockImgArr,
    rating: 5,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
  {
    id: 12,
    imgUrls: mockImgArr,
    rating: 2,
    name: 'Грокаем алгоритмы',
    author: 'Some Author',
    createdAt: '2008',
    bookedTill: new Date(),
    booked: false,
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, ибольшинство таких задач уже были кем-торешены, протестированы ипроверены. Можно, конечно, погрузится вглубокую философию гениального Кнута, изучить многостраничные фолианты сдоказательствами и обоснованиями, но хотите ли вы тратить наэто свое время? Откройте великолепно иллюстрированную книгу ивы сразу поймете, что алгоритмы — это просто. Агрокать алгоритмы— это веселое иувлекательное занятие.',
  },
];

export const mockComments: IComment[] = [
  {
    id: 1,
    user: 'Valechikov Oleg',
    rating: 4.3,
    date: '20 октября 2021',
    avatarUrl: image,
    text: 'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
  },
  { id: 2, user: 'Ivan Ivankov', rating: 2, date: '22 октября 2021', avatarUrl: '' },
];

