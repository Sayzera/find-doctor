import { useRouter } from "next/router"
import React from "react"
import { lang } from "../lang"

export default function useLang() {
  const { locale, locales, asPath } = useRouter()
  return lang[locale]
}
