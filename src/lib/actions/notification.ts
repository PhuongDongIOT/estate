"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { notifications } from "@/db/schema"
import { env } from "@/env.js"
import { eq } from "drizzle-orm"
import { resend } from "@/lib/resend"
import type { UpdateNotificationSchema } from "@/lib/validations/notification"
import NewsletterWelcomeEmail from "@/components/organims/emails/newsletter-welcome-email"

export async function updateNotification(input: UpdateNotificationSchema) {
  try {
    const notification = await db
      .select({
        email: notifications.email,
        newsletter: notifications.newsletter,
      })
      .from(notifications)
      .where(eq(notifications.token, input.token))
      .then((res) => res[0])

    if (!notification) {
      throw new Error("Email not found.")
    }

    if (input.newsletter && !notification.newsletter) {
      await resend.emails.send({
        from: env.EMAIL_FROM_ADDRESS,
        to: notification.email,
        subject: "Welcome to skateshop",
        react: NewsletterWelcomeEmail({
          firstName: undefined,
          fromEmail: env.EMAIL_FROM_ADDRESS,
          token: input.token,
        }),
      })
    }

    await db
      .update(notifications)
      .set({
        ...input,
        // userId: user?.id,
      })
      .where(eq(notifications.token, input.token))

    revalidatePath("/")

    return {
      data: null,
      error: null,
    }
  } catch (err) {
    return {
      data: null,
      error: '',
    }
  }
}
