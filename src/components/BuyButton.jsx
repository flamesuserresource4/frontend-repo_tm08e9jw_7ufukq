import React, { useEffect, useRef } from 'react'

/*
  Shopify Buy Button embed
  - Provide your Shopify domain and product ID via environment variables or props.
  - This component will render the official Shopify Buy Button which opens Checkout.

  Required env vars (add to frontend .env):
    VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
    VITE_SHOPIFY_STOREFRONT_TOKEN=not required for Buy Button
    VITE_SHOPIFY_PRODUCT_ID=gid://shopify/Product/1234567890  OR the numeric ID

  Usage: <BuyButton />
*/

const shopifyScript = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

export default function BuyButton({
  domain = import.meta.env.VITE_SHOPIFY_DOMAIN,
  productId = import.meta.env.VITE_SHOPIFY_PRODUCT_ID,
  buttonText = 'Buy Now — $90'
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!domain || !productId) return

    function load() {
      const client = window.ShopifyBuy.buildClient({
        domain,
        storefrontAccessToken: 'dummy' // not used for Buy Button, required by API signature
      })

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: containerRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D', // ${{amount}}
          options: {
            product: {
              contents: {
                img: true,
                imgWithCarousel: false,
                title: true,
                price: true,
                button: true,
              },
              text: {
                button: buttonText
              },
              styles: {
                product: { '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0' } },
                title: { 'color': '#ffffff' },
                price: { 'color': '#93c5fd' },
                button: { 'background-color': '#3b82f6', ':hover': { 'background-color': '#2563eb' }, 'border-radius': '0.75rem', 'padding': '0.75rem 1.25rem' }
              }
            },
            cart: {
              styles: { button: { 'background-color': '#3b82f6', ':hover': { 'background-color': '#2563eb' } } }
            },
            modalProduct: { contents: { img: true, title: true, price: true, button: true } }
          }
        })
      })
    }

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      load()
    } else {
      const script = document.createElement('script')
      script.async = true
      script.src = shopifyScript
      script.onload = load
      document.body.appendChild(script)
    }
  }, [domain, productId, buttonText])

  if (!domain || !productId) {
    return (
      <div className="text-sm text-blue-200/80">
        Set VITE_SHOPIFY_DOMAIN and VITE_SHOPIFY_PRODUCT_ID to enable checkout.
      </div>
    )
  }

  return <div ref={containerRef} id="buy" />
}
