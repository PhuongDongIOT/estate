import { getCachedUser } from "@/lib/queries/user"
import { User } from "@clerk/nextjs/server"
import NavBarCustom from "../_components/navbar-custom"
import AudioPlayer from "../_components/audio-player"
import { SiteHeader } from "@/components/layout-estate/site-header"
import { SiteFooter } from "@/components/layout-estate/site-footer"


interface LobyLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode
  }> { }

export default async function LobyLayout({ children, modal }: LobyLayoutProps) {
  let user: null | User = await getCachedUser();;

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">
        {children}
        {modal}
        <NavBarCustom />
      </main>
      <SiteFooter />
      <AudioPlayer />
    </div>
  )
}
