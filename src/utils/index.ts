import { Metadata } from "next"

export function constructMetadata({
  title = 'WaffleHacks',
  description = '',
  image = '/assets/images/og.png',
  icons = '/assets/svgs/logo.svg',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `${title} - %s`,
    },
    description: description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@WaffleHacks',
    },
    icons: [
      {
        url: icons,
        href: icons,
      }
    ],
    manifest: '/pwa/manifest.json',
    metadataBase: new URL('https://wafflehacks.org/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}