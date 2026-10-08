import { WatchProduct, WatchCategory } from '../types/watch';

export interface FilterOptions {
  query?: string;
  brand?: string;
  category?: WatchCategory | 'All';
  minPrice?: number;
  maxPrice?: number;
  gender?: string;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}

/**
 * Normalizes text for lenient matching (e.g. handles hyphens like "g-shock" vs "g shock")
 */
function normalizeString(str: string): string {
  return str.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Checks whether a product matches a given search query.
 * Case-insensitive, multi-word matching across brand, model, name, category, and features.
 */
export function matchProductQuery(product: WatchProduct, rawQuery: string): boolean {
  const query = rawQuery.trim();
  if (!query) return true;

  const normalizedQuery = normalizeString(query);
  const queryTokens = normalizedQuery.split(' ').filter(token => token.length > 0);

  // Combine product searchable fields
  const searchableText = normalizeString(
    `${product.brand} ${product.model} ${product.name} ${product.category} ${product.gender} ${product.description} ${product.features.join(' ')}`
  );

  // Also build clean alphanumeric representation for hyphen-agnostic matching (e.g. AQ-230 matching AQ230)
  const alphaNumericSearchable = searchableText.replace(/[^a-z0-9]/g, '');

  // Check if all query tokens exist in the product text
  return queryTokens.every(token => {
    const cleanToken = token.replace(/[^a-z0-9]/g, '');
    return searchableText.includes(token) || (cleanToken.length > 1 && alphaNumericSearchable.includes(cleanToken));
  });
}

/**
 * Filters and sorts products based on user criteria.
 */
export function filterProducts(products: WatchProduct[], options: FilterOptions): WatchProduct[] {
  const {
    query = '',
    brand = 'All',
    category = 'All',
    minPrice = 0,
    maxPrice = Infinity,
    gender = 'All',
    sortBy = 'featured'
  } = options;

  let filtered = products.filter(product => {
    // 1. Search Query
    if (query && !matchProductQuery(product, query)) {
      return false;
    }

    // 2. Brand Filter
    if (brand && brand !== 'All' && product.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    // 3. Category Filter
    if (category && category !== 'All' && product.category !== category) {
      return false;
    }

    // 4. Price Filter
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }

    // 5. Gender Filter
    if (gender && gender !== 'All' && product.gender !== gender && product.gender !== 'Unisex') {
      return false;
    }

    return true;
  });

  // Sorting
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      break;
    case 'newest':
      filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
      break;
  }

  return filtered;
}

/**
 * Returns fallback suggested products when search results are empty.
 */
export function getRecommendedProducts(allProducts: WatchProduct[], limit = 4): WatchProduct[] {
  return [...allProducts]
    .filter(p => p.featured || p.rating >= 4.7)
    .slice(0, limit);
}

/**
 * Helper to format Indian Rupee prices cleanly.
 */
export function formatINR(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
