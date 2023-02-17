import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { linkResolver } from '../prismicio'
import { Bounded } from './Bounded'

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase()

  return <span className={`fi fi-${code}`} />
}

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <header className="py-8 px-28">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none text-white">
        {/* <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </PrismicLink> */}
        <a className="text-xl font-semibold" href="/">
          Sean Patrick Studios
        </a>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="text-lg font-light tracking-tight"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  <FlagIcon lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
