"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/atoms/icons"

const oauthProviders = [
  { name: "Google", strategy: "oauth_google", icon: "google" },
  { name: "Discord", strategy: "oauth_discord", icon: "discord" },
] satisfies {
  name: string
  icon: keyof typeof Icons
  strategy: string
}[]

export function OAuthSignIn() {
  const [loading, setLoading] = React.useState<null>(null)

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]

        return (
          <Button
            key={provider.strategy}
            variant="outline"
            className="w-full bg-background"
            // onClick={() => void oauthSignIn(provider.strategy)}
            disabled={loading !== null}
          >
            {loading === provider.strategy ? (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 size-4" aria-hidden="true" />
            )}
            {provider.name}
            <span className="sr-only">{provider.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
