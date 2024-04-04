import MainButton from '@/components/mainButton'
import Link from 'next/link'

export default async function Page() {
    return (
        <main>
            <p>Landing Page</p>
            <MainButton/>
            <Link href="/problems">Problems</Link>
        </main>
    );
}