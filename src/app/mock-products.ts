import { Product } from './product';

//The PRODUCT constant is exported so it can be imported elsewhere, such as the ProductService.
//Returned type = Product[].
export const PRODUCT: Product[] = [
    { id: 1, title: 'Lipstick', description: 'Rouge Brillant Lipstick'},
    { id: 2, title: 'Eyeshadow', description: '4 Colour eyeshadow palette'},
    { id: 3, title: 'Mascara', description: 'Super Volume Mask'},
    { id: 4, title: 'Make-up Remover', description: 'Instant eye make-up remover'},
    { id: 5, title: 'Red Lipstick', description: 'Red Rouge Brillant Lipstick'},
    { id: 6, title: 'Blue Eyeshadow', description: '3 Colour eyeshadow palette'},
    { id: 7, title: 'Dark Mascara', description: 'Super Volume Dark Mask'},
    { id: 8, title: 'Make-up Easy Remover', description: 'Easy eye make-up remover'},
  ];