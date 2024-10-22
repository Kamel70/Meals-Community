import Link from "next/link"

export default function Meals(){
    return(
        <>
        <h1>Meals</h1>
        <p><Link href='/meals/meal-1'>Meal 1</Link></p>
        <p><Link href='/meals/meal-2'>Meal 2</Link></p>
        </>
        
    )
}