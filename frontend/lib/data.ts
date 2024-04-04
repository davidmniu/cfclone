import { sql } from '@vercel/postgres';

export async function getVisitsData(email: string) {
    console.log("email: " + email)
    const query = await sql`SELECT visits FROM signinusers WHERE email = ${email}`;
    console.log(query)
    if (query.rows.length === 0) {
        await sql`INSERT INTO signinusers VALUES (${email}, 1)`;
        return 1;
    } else {
        await sql`UPDATE signinusers SET visits = visits + 1 WHERE email = ${email}`;
        const tmp = query.rows[0].visits;
        console.log(tmp);
        return (tmp + 1);
    }
}