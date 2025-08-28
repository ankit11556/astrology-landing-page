import {NextResponse} from "next/server";

export interface HeroData{
  title: string,
  subtitle: string,
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: { label: string; icon: string }[];
};

export async function GET() {
  const data: HeroData = {
    title: "Unlock Your Cosmic Destiny",
    subtitle: "Book sessions with expert astrologers and discover your true path.",
    ctaText: "Book Now",
    ctaLink: "/book",
    imageUrl: "/images/astrologer.png",
    badges: [
      { label: "10k+ Sessions", icon: "Star" },
      { label: "Rated 4.9/5", icon: "ThumbsUp" },
      { label: "Verified Expert", icon: "ShieldCheck" },
    ],
  };

  return NextResponse.json(data)
};