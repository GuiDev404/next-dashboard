import { Inter, Lora, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lora = Lora({ subsets: ['latin'], style: ['italic', 'normal'] ,weight: ['400', '700'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });