# Auth.md

## Site: Buggies For Sale Australia — Commercial & Recreational Buggy Superstore

## Agent Registration
No authentication required. All product and content resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://buggiesforsale.com.au/shop/ |
| Brand Hub | https://buggiesforsale.com.au/brands/ |
| Blog & Buying Guides | https://buggiesforsale.com.au/blog/ |
| Frequently Asked Questions | https://buggiesforsale.com.au/faq/ |
| Commercial Wholesale | https://buggiesforsale.com.au/wholesale/ |
| Products API | https://buggiesforsale.com.au/api/products |
| Categories API | https://buggiesforsale.com.au/api/categories |
| Search API | https://buggiesforsale.com.au/api/search |
| MCP Streamable Server | https://buggiesforsale.com.au/api/mcp |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All catalog endpoints are publicly accessible to AI agents and web crawlers."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse products, verify inventory specifications, check freight policies, and prepare order drafts.
Final payments and orders are completed by a verified human via our secure Australian checkout or direct WhatsApp desk.
