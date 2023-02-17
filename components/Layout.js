import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary-dark text-slate-800">
      <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      {/* <Footer settings={settings} /> */}
    </div>
  )
}
