
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { name: 'Outils', count: 240, icon: 'handyman' },
  { name: 'Plomberie', count: 112, icon: 'plumbing' },
  { name: 'Électricité', count: 85, icon: 'electrical_services' },
  { name: 'Serrures', count: 42, icon: 'lock' },
  { name: 'Peinture', count: 64, icon: 'format_paint' },
  { name: 'Quincaillerie', count: 150, icon: 'hardware' },
  { name: 'Clés', count: 38, icon: 'key' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pro-Max Drill Set',
    price: 345.000,
    description: 'High-performance lithium-ion brushless motor for heavy-duty applications.',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-497c5ef21562?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    source: 'store'
  },
  {
    id: '2',
    name: 'Industrial Pipe Wrench',
    price: 85.500,
    description: 'Drop-forged steel for maximum durability and professional grip.',
    imageUrl: 'https://images.unsplash.com/photo-1586864387417-f5079015950b?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db1',
    name: 'Serrure de porte classique',
    price: 12.500,
    description: 'Serrure cylindrique traditionnelle pour portes résidentielles. Installation disponible à Sfax.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-103792e09b93?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db2',
    name: 'Cadenas acier robuste',
    price: 8.000,
    description: 'Cadenas robuste pour portails et armoires. Acier trempé.',
    imageUrl: 'https://images.unsplash.com/photo-1510519133417-2ad0cbb30267?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db3',
    name: 'Duplication de clé standard',
    price: 2.000,
    description: 'Dupliquez vos clés rapidement dans notre atelier à Saltniya Klm 5.',
    imageUrl: 'https://images.unsplash.com/photo-1610473068504-2f5403487f34?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db4',
    name: 'Clé de haute sécurité',
    price: 4.500,
    description: 'Clé à profil de sécurité avec protection anti-copie brevetée.',
    imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db5',
    name: 'Marteau acier pro',
    price: 10.000,
    description: 'Marteau durable avec manche en bois ergonomique pour charpentier.',
    imageUrl: 'https://images.unsplash.com/photo-1530124560672-999384507001?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db6',
    name: 'Set de tournevis 6 pièces',
    price: 15.000,
    description: 'Tournevis plats et cruciformes haute précision en acier chrome vanadium.',
    imageUrl: 'https://images.unsplash.com/photo-1530124602817-069bc4df2e9d?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db7',
    name: 'Pince multiprise',
    price: 12.000,
    description: 'Pince réglable pour travaux domestiques et professionnels à Sfax.',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b352220746e6?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db8',
    name: 'Boîte de clous (100 pcs)',
    price: 5.000,
    description: 'Clous galvanisés pour travaux de construction et menuiserie.',
    imageUrl: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db9',
    name: 'Boîte de vis (100 pcs)',
    price: 6.000,
    description: 'Vis en acier pour fixation bois et métal. Différentes tailles.',
    imageUrl: 'https://images.unsplash.com/photo-1627568571477-94a500a16ec1?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db10',
    name: 'Clé à molette tuyauterie',
    price: 18.000,
    description: 'Clé réglable professionnelle pour les travaux de plomberie lourds.',
    imageUrl: 'https://images.unsplash.com/photo-1586864387417-f5079015950b?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db11',
    name: 'Tuyau PVC 1m (Diam 2")',
    price: 7.000,
    description: 'Tuyau PVC de 1 mètre, diamètre 2 pouces pour évacuation.',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db12',
    name: 'Raccord PVC 90°',
    price: 2.500,
    description: 'Coude haute pression pour connexion de tuyaux PVC.',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db13',
    name: 'Rallonge électrique 5m',
    price: 12.000,
    description: 'Rallonge électrique avec prise sécurisée et protection enfant.',
    imageUrl: 'https://images.unsplash.com/photo-1558211504-8226488d5786?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db14',
    name: 'Ampoule LED 10W (E27)',
    price: 3.500,
    description: 'Ampoule LED économique, lumière blanche, longue durée.',
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db15',
    name: 'Interrupteur mural simple',
    price: 1.500,
    description: 'Interrupteur mural standard, finition blanche moderne.',
    imageUrl: 'https://images.unsplash.com/photo-1558211504-8226488d5786?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db16',
    name: 'Peinture acrylique 1L',
    price: 10.000,
    description: 'Peinture intérieure haute opacité, finition mate.',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db17',
    name: 'Pinceau 2 pouces',
    price: 3.000,
    description: 'Pinceau qualité supérieure pour finitions précises.',
    imageUrl: 'https://images.unsplash.com/photo-1512418490979-92798ccc13b0?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  },
  {
    id: 'db18',
    name: 'Rouleau peinture murale',
    price: 4.000,
    description: 'Rouleau de 20 cm pour application rapide sur grandes surfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1562259920-2da338271383?q=80&w=800&auto=format&fit=crop',
    source: 'store'
  }
];

export interface ProjectBundle {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
  totalPrice: number;
}

export const PROJECT_BUNDLES: ProjectBundle[] = [
  {
    id: 'b1',
    title: 'Cuisine Pack (Robinetterie)',
    description: 'Tout ce qu\'il faut pour changer votre robinet.',
    icon: 'water_drop',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',
    items: ['Robinet Luxe', 'Ruban Téflon', 'Flexibles x2', 'Clé à molette'],
    totalPrice: 245.000
  },
  {
    id: 'b2',
    title: 'Kit Jardinier Sfax',
    description: 'Entretien complet pour vos espaces verts.',
    icon: 'grass',
    image: 'https://images.unsplash.com/photo-1617576621334-9270ff50ad79?q=80&w=600&auto=format&fit=crop',
    items: ['Tuyau d\'arrosage 20m', 'Pistolet multi-jets', 'Pelle ergonomique', 'Gants de protection'],
    totalPrice: 115.000
  },
  {
    id: 'b3',
    title: 'Pack Robotique DIY',
    description: 'Lancez-vous dans la création de votre premier robot.',
    icon: 'smart_toy',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop',
    items: ['Carte Arduino Uno', 'Pack de Capteurs', 'Servomoteurs x4', 'Câbles Jumper'],
    totalPrice: 185.000
  },
  {
    id: 'b4',
    title: 'Décoration & Peinture',
    description: 'Relooking complet : Portes et Murs.',
    icon: 'palette',
    image: 'https://images.unsplash.com/photo-1562259920-2da338271383?q=80&w=600&auto=format&fit=crop',
    items: ['Peinture Murale (Murs)', 'Laque Brillante (Portes)', 'Rouleaux & Pinceaux', 'Scotch de masquage'],
    totalPrice: 165.000
  }
];
