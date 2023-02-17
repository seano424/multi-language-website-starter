import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import * as prismicH from '@prismicio/helpers'
import clsx from 'clsx'

import { Bounded } from '../../components/Bounded'
import { Heading } from '../../components/Heading'

import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type HeroProps = SliceComponentProps<Content.HeroSlice>

const Hero = ({ slice }: HeroProps) => {
  return (
    <Bounded as="section" collapsible={false} className="pb-0 md:pb-0">
      <div className="grid grid-cols-1 justify-items-center gap-10">
        <div className="border border-white leading-relaxed">
          {slice.variation === 'default' ? (
            <>
              {slice.primary.heading && (
                <PrismicRichText
                  field={slice.primary.heading}
                  components={{
                    heading1: ({ children }) => (
                      <Heading className={clsx('mb-6 text-white last:mb-0')}>
                        {children}
                      </Heading>
                    ),
                  }}
                />
              )}
              {slice.primary.subheading && (
                <>
                  {prismicH.asText(slice.primary.subheading) ? (
                    <PrismicRichText
                      field={slice.primary.subheading}
                      components={{
                        heading2: ({ children }) => (
                          <Heading
                            size="h2"
                            className={clsx(
                              'mb-6 text-white last:mb-0',
                              slice.primary.subheading[0].type ===
                                'preformatted' && 'text-right'
                            )}
                          >
                            {children}
                          </Heading>
                        ),
                        heading3: ({ children }) => (
                          <Heading
                            size="h3"
                            className={clsx(
                              'mb-6 text-white last:mb-0',
                              slice.primary.subheading[0].direction &&
                                'text-right'
                            )}
                          >
                            {children}
                          </Heading>
                        ),
                      }}
                    />
                  ) : (
                    <PrismicRichText
                      field={slice.primary.subheading}
                      components={{
                        heading2: ({ children }) => (
                          <Heading
                            size="h2"
                            className={clsx(
                              'mb-6 text-white last:mb-0',
                              slice.primary.subheading[0].direction &&
                                'text-right'
                            )}
                          >
                            {children}
                          </Heading>
                        ),
                        heading3: ({ children }) => (
                          <Heading
                            size="h3"
                            className={clsx(
                              'mb-6 text-white last:mb-0',
                              slice.primary.subheading[0].direction &&
                                'text-right'
                            )}
                          >
                            {children}
                          </Heading>
                        ),
                      }}
                    />
                  )}
                </>
              )}
            </>
          ) : (
            <PrismicRichText
              field={slice.primary.text}
              components={{
                heading1: ({ children }) => (
                  <Heading className={clsx('mb-6 text-white last:mb-0')}>
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className="mb-6 last:mb-0">{children}</p>
                ),
              }}
            />
          )}
        </div>
        {slice.variation === 'withButton' &&
          prismicH.isFilled.link(slice.primary.buttonLink) &&
          prismicH.isFilled.keyText(slice.primary.buttonText) && (
            <PrismicLink
              field={slice.primary.buttonLink}
              className="rounded bg-slate-800 px-7 py-3 font-bold text-white"
            >
              {slice.primary.buttonText}
            </PrismicLink>
          )}
        {prismicH.isFilled.image(slice.primary.image) && (
          <div className="w-full">
            <PrismicNextImage
              alt={slice.primary.image.alt ?? 'Hero Image'}
              field={slice.primary.image}
              sizes="100vw"
              className="w-full"
            />
          </div>
        )}
      </div>
    </Bounded>
  )
}

export default Hero
