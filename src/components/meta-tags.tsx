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
    </Helmet>
  );
}
