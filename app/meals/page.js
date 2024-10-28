import Link from "next/link"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meal"
import { Suspense } from "react";

async function Meals() {
    const meals =await getMeals();
    return <MealsGrid meals={meals} />
}
export default function MealsPage(){
    
    return(
        <>
        <header>
            <h1>Delicious Meals Created <span>By You</span></h1>
            <p>Choose you favorite recipe and cook it yourself. It is easy and fun</p>
            <p>
                <Link href='/meals/share'>
                    Share your favorite recipe
                </Link>
            </p>
        </header>
        <main>
            <Suspense fallback={<p>Getting all Meals...</p>}>
                <Meals/>
            </Suspense>
        </main>
        </>
        
    )
}