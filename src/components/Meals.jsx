import { useGlobalContext } from "../context"

const Meals = () => {
  const { meals } = useGlobalContext()

  console.log(meals)

  return (
    <section>
      {meals.map((singleMeal) => {
        console.log(singleMeal)
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal
        return (
          <article key={idMeal} className='single-meal'>
            <img src={image} alt={title} style={{width: '200px'}} className='img' />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">click me</button>
            </footer>
          </article>
        )
      })}
    </section>
  )
}

export default Meals