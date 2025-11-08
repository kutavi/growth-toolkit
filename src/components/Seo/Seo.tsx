import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const siteMetadata = {
  defaultTitle: 'Growth toolkit',
  titleTemplate: '%s · Online tools for personal development',
  defaultDescription:
    'A toolkit with exercises and activities to help you on your personal development and growth.',
  siteUrl: 'https://growth-toolkit.netlify.app',
  defaultImage: '/wheel-custom.png',
  twitterUsername: '@aletseni',
};

export const SEO = ({ title, description, image }: SEOProps) => {
  const { pathname } = useLocation();

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{
        lang: 'en',
      }}
      titleTemplate={titleTemplate}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Growth Toolkit' />
      <meta property='og:locale' content='en_US' />

      {seo.url && <meta property='og:url' content={seo.url} />}

      {seo.title && <meta property='og:title' content={seo.title} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      {seo.image && <meta property='og:image' content={seo.image} />}

      <meta name='twitter:card' content='summary_large_image' />

      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}

      {seo.title && <meta name='twitter:title' content={seo.title} />}

      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}

      {seo.image && <meta name='twitter:image' content={seo.image} />}

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: seo.title,
          description: seo.description,
          url: seo.url,
          applicationCategory: 'LifestyleApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          author: {
            '@type': 'Person',
            name: 'Alexandra Tseniklidou',
          },
        })}
      </script>
    </Helmet>
  );
};
