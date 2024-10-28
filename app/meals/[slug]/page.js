import Image from "next/image";
import { getMeal } from "@/lib/meal";
import { notFound } from "next/navigation";

export default function MealDetails({params}){
    const meal =getMeal(params.slug);
    if(!meal){
        notFound();
    }
    meal.instructions=meal.instructions.replace(/\n/g,'<br>');
    return(
        <>
            <header>
                <div>
                    <Image src={meal.image} alt={meal.title} width={300} height={300}/>
                </div>
                <div>
                    <h1>{meal.title}</h1>
                    <p>
                        by <a href={`mailto:${meal['creator_email']}`}>meal.creator</a>
                    </p>
                    <p>{meal.summary}</p>
                </div>
            </header>
            <main>
                <div dangerouslySetInnerHTML={{
                    __html:meal.instructions
                }}></div>
            </main>
        </>
        

    )
}