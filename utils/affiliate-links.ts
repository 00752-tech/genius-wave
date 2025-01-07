export function getAffiliateLink(source: string = 'direct') {
  // For client-side navigation, we'll use the API route
  return `/api/redirect?src=${encodeURIComponent(source)}`
}

