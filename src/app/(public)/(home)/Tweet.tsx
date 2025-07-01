import { PAGES } from '@/config/pages.config'
import type { ITweet } from '@/shared/tweet.interface'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    tweet: ITweet
}
export function Tweet({ tweet }: Props) {
    return (
        <div
            className="border border-white/10 rounded-xl p-4 bg-black
            text-white shadow-md"
        >
            <div className="flex items-center gap-3 mb-2">
                <Image src="/globe.svg" alt="Logo" width={24} height={24} />
                <span>@{tweet.author}</span>
            </div>
            <Link href={PAGES.PROFILE(tweet.author)} className="text-white/90">
                {tweet.text}
            </Link>
        </div>
    )
}
