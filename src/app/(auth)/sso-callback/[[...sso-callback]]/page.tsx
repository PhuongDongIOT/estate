import { Icons } from "@/components/atoms/icons"
import { Shell } from "@/components/atoms/shell"

export default function SSOCallbackPage() {
  return (
    <Shell className="max-w-lg place-items-center">
      <Icons.spinner className="size-16 animate-spin" aria-hidden="true" />
      {/* <AuthenticateWithRedirectCallback /> */}
    </Shell>
  )
}
