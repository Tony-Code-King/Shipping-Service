import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';

export const shopifyClient = (apiKey: string, shopDomain: string) => {
  const shopify = shopifyApi({
    apiKey,
    apiSecretKey: '', // Not needed for storefront API
    scopes: ['read_products', 'read_orders'],
    hostName: shopDomain,
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: false,
  });

  return shopify;
};

export const getOrders = async (client: any) => {
  try {
    const response = await client.rest.get({
      path: 'orders',
      query: { status: 'open' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};