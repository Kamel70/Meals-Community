import ImagePicker from "@/components/images/image-picker";
import { sendMealData } from "@/lib/action";

export default function ShareMealPage() {
  
    return (
      <>
        <header>
          <h1>
            Share your <span>favorite meal</span>
          </h1>
          <p>Or any other meal you feel needs sharing!</p>
        </header>
        <main>
          <form action={sendMealData}>
            <div>
              <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" required />
              </p>
            </div>
            <p>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" required />
            </p>
            <p>
              <label htmlFor="summary">Short Summary</label>
              <input type="text" id="summary" name="summary" required />
            </p>
            <p>
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                rows="10"
                required
              ></textarea>
            </p>
            <ImagePicker label='Image' name='image'/>
            <p>
              <button type="submit">Share Meal</button>
            </p>
          </form>
        </main>
      </>
    );
  }