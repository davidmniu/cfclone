'use server'

import { signIn } from "../auth"

export async function shit() {
    await signIn()
}