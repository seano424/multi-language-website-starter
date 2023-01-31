import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param { CallToActionProps }
 */
const CallToAction = ({ slice }) => (
  <section className="my-16 mx-auto max-w-xl text-center">
    <span className="text-blue-900">
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
      <PrismicLink className="text-purple-900" field={slice.primary.link}>
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
