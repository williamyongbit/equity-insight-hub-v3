# Hong Kong Analysis and Company Domain Research — 25 August 2026

## Verified Hong Kong observations

The Hang Seng Indexes official homepage was retrieved on 25 August 2026 after the earlier 10:36 HKT constrained snapshot. It showed the following values at **15:54 HKT**, while continuing to display an explicit system-outage notice and a limited 15-minute-update condition:

| Index | Level | Change | Timestamp | Interpretation boundary |
|---|---:|---:|---|---|
| Hang Seng Index | 25,495.81 | +0.08% | 25 Aug 2026 15:54 HKT | Late-session official index observation; not automatically a completed official close without a post-close confirmation. |
| HSCEI | 8,440.38 | +0.37% | 25 Aug 2026 15:54 HKT | China-enterprise cross-check; not a sector-return conclusion. |
| Hang Seng TECH | 4,585.66 | +0.18% | 25 Aug 2026 15:54 HKT | Technology cross-check; not proof of individual-stock driver. |
| Hang Seng Biotech | 15,961.80 | +2.46% | 25 Aug 2026 15:54 HKT | Biotech relative-strength observation; not a cause attribution. |

Source: https://www.hsi.com.hk/

The official HKEX trading-mechanism material supports the product treatment that separates pre-opening, morning continuous trading, the midday break, afternoon trading and closing auction. Daily Stock Connect historical statistics are available from HKEX, but the webpage extraction did not expose a date-specific 25 August southbound-flow figure; the revised report must therefore show a clearly labelled **post-close official flow check pending** state rather than invent a number.

Sources:

- https://www.hkex.com.hk/Services/Trading/Securities/Overview/Trading-Mechanism?sc_lang=en
- https://www.hkex.com.hk/Mutual-Market/Stock-Connect/Statistics/Historical-Daily?sc_lang=en

## Company domain and hosting decision

### Recommended target

Use a **company-owned DNS domain and a company GitHub Organization** for source control. Keep the static React site on GitHub Pages initially, but map a branded subdomain such as `markets.<company-domain>` or `insights.<company-domain>` to it. This gives one stable, professional URL without a personal `yongwilliam-ai.github.io` address, while avoiding an unnecessary platform migration during the daily-report hardening phase.

### Why not use a personal GitHub account

The present personal account address communicates personal ownership. A company GitHub Organization provides company-controlled membership, ownership continuity and domain verification. GitHub confirms that organization owners can verify a custom domain; verification limits Pages use of that domain to organization-owned repositories and reduces takeover risk.

### GitHub Pages manual configuration

1. A company administrator creates or uses an approved GitHub Organization and transfers/duplicates the repository under it.
2. The company registers or designates a company-owned domain with a registrar/DNS provider. A company email address is appropriate for the registrar and GitHub Organization owner account, but email alone does not create a company domain.
3. An organization owner verifies the domain using GitHub’s DNS TXT record flow.
4. In the repository Pages settings, add the chosen custom domain; configure the registrar’s CNAME for a subdomain or ALIAS/ANAME/A records for an apex domain.
5. Enable HTTPS after GitHub’s DNS check succeeds. GitHub notes that DNS propagation may take up to 24 hours and recommends domain verification before attachment.

Sources:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

### Vercel option

Vercel can also attach a company domain via project Settings → Domains and provides a branded production URL. It is the stronger choice only if BIT needs preview deployments, environment gates, access controls, server-backed content processing or future authenticated functionality. Vercel itself distinguishes apex-domain A records and subdomain CNAME records; it also supports team-owned domain administration. For this current static report, moving from GitHub Pages solely to remove the personal URL is unnecessary if a company domain can be mapped to an organization-owned Pages repository.

Sources:

- https://vercel.com/docs/domains/working-with-domains/add-a-domain
- https://vercel.com/docs/domains/working-with-domains

### Security boundary

Never use wildcard DNS merely for convenience. GitHub explicitly warns that wildcard DNS can create takeover risk. Domain ownership, DNS changes, organization creation/transfer and production-domain attachment require a BIT-authorised human administrator; they must not be automated from a report-generation run.
