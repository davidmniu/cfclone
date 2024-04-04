import { getVisitsData } from "@/lib/data"

export default async function Visits({ email } : { email: string}) {
    const visits = await getVisitsData(email);

    return (
        <p>Visited {visits} times</p>
    );
}