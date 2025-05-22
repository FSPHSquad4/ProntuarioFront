import { addOrSubtractDaysFromDate } from "@/utils/date";

// import product13 from '@/assets/images/products/p-13.png';
// import product14 from '@/assets/images/products/p-14.png';
// import product15 from '@/assets/images/products/p-15.png';

// import product6 from '@/assets/images/products/p-6.png';
// import product7 from '@/assets/images/products/p-7.png';

export const productData = [{
  id: '1',
  name: 'Camiseta Slim Fit Branca Masculina',
  description: 'Camiseta 100% algodão na cor branca',
  date: addOrSubtractDaysFromDate(50),
  price: 70.90,
  quantity: 890,
  category: 'Moda',
  status: 'Ativo',
  brand: ['Nike', 'H&M', 'ZARA', 'Puma'],
  averagePriceMin: 200,
  averagePriceMax: 2000,
  discountsAvailable: 'Vendas Sazonais',
  sellingItems: ['Camiseta', 'Calça Cargo', 'Vestido'],
  productName: 'Moda Zara',
  discountPrice: 70.90,
  rating: {
    star: 4.5,
    review: 123
  },
  size: 'Tamanho: XS, S, M',
  isDeal: true
}, {
  id: '2',
  name: 'Mochila para Laptop 55 L até 16 In..',
  description: 'Mochila resistente para caminhadas',
  date: addOrSubtractDaysFromDate(150),
  price: 100.90,
  quantity: 923,
  category: 'Bolsas',
  status: 'Ativo',
  brand: ['Nike', 'Puma', 'Safari', 'Truster'],
  averagePriceMin: 20,
  averagePriceMax: 300,
  sellingItems: ['Bolsas para Colégio', 'Bolsas de Trolley'],
  discountsAvailable: 'Vendas de Liquidação',
  productName: 'Bolsas Wrogn',
  discountPrice: 100.90,
  rating: {
    star: 4.5,
    review: 43
  },
  size: 'Tamanho: 30L, 40L, 55L'
}, {
  id: '3',
  name: 'Cadeira Giratória Premium Minetta Rattan',
  description: 'Cadeira ergonômica para Villa',
  date: addOrSubtractDaysFromDate(180),
  price: 300.00,
  quantity: 231,
  category: 'Móveis',
  status: 'Ativo',
  brand: ['IKEA', 'Hamilton Beach', 'Premium'],
  averagePriceMin: 300,
  averagePriceMax: 1500,
  discountsAvailable: 'Descontos por Pacote',
  sellingItems: ['Sofás', 'Liquidificadores', 'Cadeiras'],
  productName: 'Móveis Premium',
  discountPrice: 300,
  rating: {
    star: 5,
    review: 23
  },
  size: 'Tamanho: 56L X 63D X 102H CM',
  isDeal: true
}, {
  id: '4',
  name: 'Fones de Ouvido Gaming HYPERX Cloud',
  description: 'Fones de ouvido sem fio com cancelamento de ruído',
  date: addOrSubtractDaysFromDate(250),
  price: 230.90,
  quantity: 413,
  category: 'Fones de Ouvido',
  status: 'Inativo',
  brand: ['Boat', 'Sony', 'Jbl', 'Bose'],
  averagePriceMin: 150,
  averagePriceMax: 1000,
  discountsAvailable: 'Descontos de Férias',
  sellingItems: ['Fones de Ouvido para Jogos', 'Fones In-Ear', 'Headbands'],
  productName: 'Fones de Ouvido Bose',
  discountPrice: 70.90,
  rating: {
    star: 4,
    review: 311
  },
  size: 'Tamanho: S, M'
}, {
  id: '5',
  name: 'Suéter Tricotado Masculino de Inverno',
  description: 'Jaqueta corta-vento impermeável',
  date: addOrSubtractDaysFromDate(485),
  price: 90.00,
  quantity: 120,
  category: 'Moda de Inverno',
  status: 'Ativo',
  brand: ['Nike', 'H&M', 'ZARA', 'Puma'],
  averagePriceMin: 200,
  averagePriceMax: 2000,
  discountsAvailable: 'Ofertas de Compra em Grande Quantidade',
  sellingItems: ['Moletom'],
  productName: 'Moda de Inverno',
  discountPrice: 90.00,
  rating: {
    star: 4,
    review: 12
  },
  size: 'Tamanho: S, M, XL, XXL',
  isSeal: true
}, {
  id: '6',
  name: 'Tênis Masculino Jordan Jumpman MVP',
  description: 'Tênis confortável para corrida',
  date: addOrSubtractDaysFromDate(562),
  price: 400.00,
  quantity: 264,
  category: 'Calçados',
  status: 'Inativo',
  brand: ['Nike', 'Bata', 'Woodland', 'Puma'],
  averagePriceMin: 200,
  averagePriceMax: 2000,
  discountsAvailable: 'Códigos de Cupom',
  sellingItems: ['Sandalhas', 'Mocassim', 'Chinelos'],
  productName: 'Calçados Nike',
  discountPrice: 400,
  rating: {
    star: 5,
    review: 200
  },
  size: 'Tamanho US: 7, 8, 8.5, 9, 10',
  isSeal: true
}, {
  id: '7',
  name: 'Sofá de Tecido Sleepify Luno 4 Lugares',
  description: 'Sofá moderno de três peças',
  date: addOrSubtractDaysFromDate(45),
  price: 340.00,
  quantity: 372,
  category: 'Móveis',
  status: 'Inativo',
  brand: ['IKEA', 'Hamilton Beach', 'Premium'],
  averagePriceMin: 200,
  averagePriceMax: 2000,
  discountsAvailable: 'Descontos por Assinatura',
  sellingItems: ['Sofás'],
  productName: 'Móveis CRAFT',
  discountPrice: 340,
  rating: {
    star: 5,
    review: 120
  },
  size: 'Tamanho: XS, S, M'
}, {
  id: '8',
  name: 'Camiseta Oversized Azul Marinho para Homens',
  description: 'Camiseta 100% algodão na cor azul',
  date: addOrSubtractDaysFromDate(84),
  price: 80.00,
  quantity: 470,
  category: 'Moda',
  status: 'Ativo',
  brand: ['Rolex', 'Tag', 'Fossil', 'Timex'],
  averagePriceMin: 400,
  averagePriceMax: 3000,
  discountsAvailable: 'Códigos de Cupom',
  sellingItems: ['Relógio Analógico', 'Relógio de Pulso'],
  productName: 'Moda H&M',
  discountPrice: 70.90,
  rating: {
    star: 4,
    review: 80
  },
  size: 'Tamanho: M, XL, XXL, XXXL',
  isSeal: true
}, {
  id: '9',
  name: 'Relógio de Pulso Redondo Masculino',
  description: 'Smartwatch para monitoramento de fitness',
  date: addOrSubtractDaysFromDate(156),
  price: 140.00,
  quantity: 1092,
  category: 'Relógios',
  status: 'Ativo',
  brand: ['Sony', 'Electronic Arts', 'IGT logo'],
  averagePriceMin: 230,
  averagePriceMax: 2100,
  discountsAvailable: 'Vendas Sazonais',
  sellingItems: ['PS5', 'Logo'],
  productName: 'Moda Zara',
  discountPrice: 70.90,
  rating: {
    star: 4.5,
    review: 123
  },
  size: 'Tamanho: XS, S, M'
}, {
  id: '10',
  name: 'Controle PS 5',
  description: 'Controle ergonômico para jogos PS e multi-controle',
  date: addOrSubtractDaysFromDate(78),
  price: 230.00,
  quantity: 523,
  category: 'Jogos',
  status: 'Inativo',
  brand: ['Lego', 'Hot Wheels', 'Fisher-Price'],
  averagePriceMin: 100,
  averagePriceMax: 800,
  discountsAvailable: 'Compre 1 e leve 1',
  sellingItems: ['Carrinho de Brinquedo', 'Lego'],
  productName: 'Moda Zara',
  discountPrice: 70.90,
  rating: {
    star: 4.5,
    review: 123
  },
  size: 'Tamanho: XS, S, M'
}, {
  id: '11',
  name: 'Patinho de Plástico Barry B Benson',
  description: 'Brinquedo de Patinho de Banho Feito de Plástico',
  date: addOrSubtractDaysFromDate(45),
  price: 70.00,
  quantity: 2102,
  category: 'Brinquedo',
  status: 'Inativo',
  brand: ['Nike', 'H&M', 'ZARA', 'Puma'],
  averagePriceMin: 200,
  averagePriceMax: 2000,
  discountsAvailable: 'Vendas Sazonais',
  sellingItems: ['Camiseta', 'Calça Cargo', 'Vestido'],
  productName: 'Moda Zara',
  discountPrice: 70.90,
  rating: {
    star: 4.5,
    review: 123
  },
  size: 'Tamanho: XS, S, M'
}];
