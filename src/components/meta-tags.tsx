import { Helmet } from "react-helmet";

type MetaTagsProps = {
  title: string;
  description: string;
  thumbnail?: string;
};

export default function MetaTags({
  title = "",
  description = "",
  thumbnail = "/starplus-thumbnail.jpg",
}: MetaTagsProps) {
  return (
    <Helmet>
      <title>{`${title} | Top 250 IMDb Movies`}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Coding Front" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={import.meta.env.VITE_SITE_URL} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="StarPlus" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}
