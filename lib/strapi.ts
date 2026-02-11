import { z } from "zod";
import type { EventItem, SermonItem, Pastor, Ministry, FAQItem } from "@/lib/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

function withBase(url: string) {
  if (!STRAPI_URL) return url;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

async function strapiFetch(path: string, init?: RequestInit) {
  const base = STRAPI_URL || "";
  const token = process.env.STRAPI_TOKEN;

  const res = await fetch(`${base}${path}`, {
    ...init,
    headers: {
      ...(init?.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // En prod, tu peux logger res.text()
    throw new Error(`Strapi error ${res.status} on ${path}`);
  }
  return res.json();
}

// --- Schemas (minimal) ---
const EventSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    startsAt: z.string(),
    endsAt: z.string().nullable().optional(),
    locationName: z.string().nullable().optional(),
    address: z.string().nullable().optional(),
    signupUrl: z.string().url().nullable().optional(),
    featured: z.boolean().optional().default(false),
    excerpt: z.string().nullable().optional(),
  }),
});

const SermonSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    speaker: z.string().nullable().optional(),
    series: z.string().nullable().optional(),
    date: z.string(),
    youtubeUrl: z.string().url().nullable().optional(),
    audioUrl: z.string().url().nullable().optional(),
    featured: z.boolean().optional().default(false),
    excerpt: z.string().nullable().optional(),
  }),
});

const PastorSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    role: z.string().nullable().optional(),
    bio: z.string().nullable().optional(),
    quote: z.string().nullable().optional(),
  }),
});

const MinistrySchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    excerpt: z.string().nullable().optional(),
    contact: z.string().nullable().optional(),
    pageUrl: z.string().nullable().optional(),
  }),
});

const FAQSchema = z.object({
  id: z.number(),
  attributes: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().nullable().optional(),
  }),
});

function mapCollection<T>(raw: any, itemSchema: z.ZodSchema<any>, mapper: (x: any) => T): T[] {
  const parsed = z.object({ data: z.array(itemSchema) }).safeParse(raw);
  if (!parsed.success) return [];
  return parsed.data.data.map(mapper);
}

export async function getEvents(): Promise<EventItem[]> {
  if (!STRAPI_URL) return [];
  const raw = await strapiFetch(`/api/events?sort=startsAt:asc&pagination[pageSize]=6`);
  return mapCollection<EventItem>(raw, EventSchema, (x) => ({
    id: x.id,
    title: x.attributes.title,
    startsAt: x.attributes.startsAt,
    endsAt: x.attributes.endsAt,
    locationName: x.attributes.locationName,
    address: x.attributes.address,
    signupUrl: x.attributes.signupUrl,
    featured: x.attributes.featured,
    excerpt: x.attributes.excerpt,
  }));
}

export async function getLatestSermon(): Promise<SermonItem | null> {
  if (!STRAPI_URL) return null;
  const raw = await strapiFetch(`/api/sermons?sort=date:desc&pagination[pageSize]=1`);
  const arr = mapCollection<SermonItem>(raw, SermonSchema, (x) => ({
    id: x.id,
    title: x.attributes.title,
    speaker: x.attributes.speaker,
    series: x.attributes.series,
    date: x.attributes.date,
    youtubeUrl: x.attributes.youtubeUrl,
    audioUrl: x.attributes.audioUrl,
    featured: x.attributes.featured,
    excerpt: x.attributes.excerpt,
  }));
  return arr[0] ?? null;
}

export async function getPastors(): Promise<Pastor[]> {
  if (!STRAPI_URL) return [];
  const raw = await strapiFetch(`/api/pastors?sort=name:asc&pagination[pageSize]=50`);
  return mapCollection<Pastor>(raw, PastorSchema, (x) => ({
    id: x.id,
    name: x.attributes.name,
    role: x.attributes.role,
    bio: x.attributes.bio,
    quote: x.attributes.quote,
  }));
}

export async function getMinistries(): Promise<Ministry[]> {
  if (!STRAPI_URL) return [];
  const raw = await strapiFetch(`/api/ministries?sort=name:asc&pagination[pageSize]=24`);
  return mapCollection<Ministry>(raw, MinistrySchema, (x) => ({
    id: x.id,
    name: x.attributes.name,
    excerpt: x.attributes.excerpt,
    contact: x.attributes.contact,
    pageUrl: x.attributes.pageUrl,
  }));
}

export async function getFAQ(): Promise<FAQItem[]> {
  if (!STRAPI_URL) return [];
  const raw = await strapiFetch(`/api/faq-items?sort=category:asc&pagination[pageSize]=50`);
  return mapCollection<FAQItem>(raw, FAQSchema, (x) => ({
    id: x.id,
    question: x.attributes.question,
    answer: x.attributes.answer,
    category: x.attributes.category,
  }));
}

export function absoluteMediaUrl(url: string) {
  return withBase(url);
}
