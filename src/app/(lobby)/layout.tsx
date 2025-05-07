import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import NavBarCustom from "./_components/navbar-custom"

interface LobyLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode
  }> {}

export default async function LobyLayout({ children, modal }: LobyLayoutProps) {
  let user: null = null;

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">
        {children}
        {modal}
        <NavBarCustom />
      </main>
      <SiteFooter />
    </div>
  )
}
