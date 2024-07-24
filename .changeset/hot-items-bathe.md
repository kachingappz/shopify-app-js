---
'@shopify/shopify-app-remix': minor
---

# Add support for merchant custom apps

Merchant custom apps or apps that are distributed by the Shopify Admin are now supported.

These apps do not Authorize by OAuth, and instead use a access token that has been generated by the Shopify Admin.

Apps of this type are standalone apps and are not initiated from the Shopify Admin. Therefore it is **up to the developer of the app to add login and authentication functionality**.


To use this library with Merchant Custom Apps set the following configuration in the `shopify.server` file:

```ts
const shopify = shopifyApp({
  apiKey: "your-api-key",
  apiSecretKey: "your-api-secret-key",
  adminApiAccessToken:"shpat_1234567890",
  distribution: AppDistribution.ShopifyAdmin,
  appUrl: "https://localhost:3000",
  isEmbeddedApp: false,
```

Session storage is *not* required for merchant custom apps. A session is created from the provided access token.

At this time merchant custom apps are not supported by the Shopify CLI. Developers will need to start the development server directly.


```sh
npm exec remix vite:dev
```

You can then access the the app at `http://localhost:3000/app?shop=my-shop.myshopify.com`