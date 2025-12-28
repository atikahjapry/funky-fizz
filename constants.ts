
import type { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cosmic Cleanse",
    flavor: "Galaxy Grape & Starfruit",
    description: "A cosmic journey for your body. **Blast off** with a supernova of flavor and feel the benefits:\n\n*   Packed with antioxidants\n*   Infused with starfruit extract\n*   Promotes a stellar glow",
    price: 5.99,
    imageUrl: "https://picsum.photos/id/10/400/500",
    color: "purple-500",
  },
  {
    id: 2,
    name: "Solar Flare",
    flavor: "Electric Mango & Chili",
    description: "Ignite your senses and fuel your day. This is **pure energy** in a can, handle with care.\n\n*   Spicy chili infusion\n*   Zero-crash energy boost\n*   Tastes like a supernova",
    price: 6.49,
    imageUrl: "https://picsum.photos/id/100/400/500",
    color: "orange-500",
  },
  {
    id: 3,
    name: "Mind Melt",
    flavor: "Psychedelic Peach & Basil",
    description: "Expand your consciousness *and* your taste buds. A groovy blend for when you need to get in the zone.\n\n*   Boosts creative flow\n*   Enhances mental focus\n*   Subtle notes of fresh basil",
    price: 5.99,
    imageUrl: "https://picsum.photos/id/1015/400/500",
    color: "pink-500",
  },
  {
    id: 4,
    name: "Zen Zinger",
    flavor: "Chill Cucumber & Mint",
    description: "Find your center with this cool, refreshing elixir. The ultimate cooldown for a hyperactive world.\n\n*   Calming cucumber essence\n*   Crisp, refreshing mint\n*   Your daily moment of zen",
    price: 5.49,
    imageUrl: "https://picsum.photos/id/1016/400/500",
    color: "green-500",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I replaced my morning coffee with Solar Flare and now I can see sounds. 10/10 would recommend.",
    author: "Casey Jones",
    role: "UX Designer & Time Traveler"
  },
  {
    quote: "Cosmic Cleanse is my go-to before any big presentation. It's like my brain gets a cosmic upgrade.",
    author: "Alex Rivera",
    role: "CEO & Aspiring Astronaut"
  },
  {
    quote: "Mind Melt is just... wow. My code has never been cleaner, and my ideas have never been weirder. I love it.",
    author: "Sam 'The Byte' Smith",
    role: "Senior Dev & Reality Bender"
  }
];
