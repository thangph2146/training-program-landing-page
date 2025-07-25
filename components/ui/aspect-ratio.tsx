"use client"


import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import Image, { ImageProps } from "next/image"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

// Custom AspectRatioImage: wraps Next.js Image in AspectRatio
function AspectRatioImage({
  aspectRatio = 16 / 9,
  ...props
}: ImageProps & { aspectRatio?: number }) {
  return (
    <AspectRatio ratio={aspectRatio}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} fill style={{ objectFit: "cover" }} />
    </AspectRatio>
  )
}

export { AspectRatio, AspectRatioImage }
