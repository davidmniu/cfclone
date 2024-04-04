import Link from "next/link";

export default async function Page() {
    const problems = await fetch('http://localhost:8080/problems', { 
        cache: 'no-store',
        method: "GET",         
        headers: { "Content-Type": "application/json"},
    });
    const data = await problems.json();
    console.log(data);
    return (
        <div>
            <p>This is a list of problems.</p>
            <ul>
                {data.map((problem: any) => (
                    <li key={problem.id}>
                        <Link href={problem.url}>{problem.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}