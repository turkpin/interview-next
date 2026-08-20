import { cookies } from "next/headers";
import { Suspense } from "react";
import HomeClient, { type Language } from "./home-client";

function isLanguage(value: string | undefined): value is Language {
  return value === "tr" || value === "en";
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const requestedLanguage = params.lang;
  const savedLanguage = cookieStore.get("lang")?.value;
  const language = isLanguage(requestedLanguage)
    ? requestedLanguage
    : isLanguage(savedLanguage)
      ? savedLanguage
      : "tr";

  return (
    <Suspense fallback={null}>
      <HomeClient initialLanguage={language} />
    </Suspense>
  );
}
