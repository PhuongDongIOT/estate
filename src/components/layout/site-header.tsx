import { siteConfig } from "@/config/site"
import { CartSheet } from "@/components/organims/checkout/cart-sheet"
// import { AuthDropdown } from "@/components/layout/auth-dropdown"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ProductsCombobox } from "@/components/organims/products-combobox"

interface SiteHeaderProps {
  user: null
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ProductsCombobox />
            <CartSheet />
            {/* <AuthDropdown user={user} /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
