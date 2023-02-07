import { PrismicRichText, PrismicLink } from '@prismicio/react'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param { CallToActionProps }
 */
const CallToAction = ({ slice }: CallToActionProps) => (
  <section className="my-16 mx-auto flex max-w-xl flex-col gap-3 text-center">
    <span className="text-3xl font-black">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    {slice.primary.link && (
      <PrismicLink
        className="mx-auto w-max rounded-full border-4 px-4 py-2"
        field={slice.primary.link}
      >
        {slice.primary.link_label ? (
          <span>{slice.primary.link_label}</span>
        ) : (
          <span>Some Link!</span>
        )}
      </PrismicLink>
    )}
  </section>
)

export default CallToAction
