import NavBarCustom from "../_components/navbar-custom"
import AudioPlayer from "../_components/audio-player"
import { SiteHeader } from "@/components/layout-estate/site-header"
import { SiteFooter } from "@/components/layout-estate/site-footer"


interface LobyLayoutProps
  extends React.PropsWithChildren { }

export default async function LobyLayout({ children }: LobyLayoutProps) {
  let user: null = null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">
        {children}
        <NavBarCustom />
      </main>
      <SiteFooter />
      <AudioPlayer />
    </div>
  )
}
