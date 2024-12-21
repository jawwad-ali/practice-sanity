import Link from "next/link"
import { client } from "../sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

interface IBooks {
  id: number
  name: string
  type: string
  available: boolean
}

const getPets = async () => {
  const query = await client.fetch(
    `*[_type=="pet"]`
  );
  console.log(query)
  return query
}

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const res = await url.json()

  const listPets = await getPets()
  console.log(listPets)


  return (


    <main className="flex flex-col py-3 text-center items-center justify-center">

      {res.map((book: IBooks, index: number) => (

        <Link key={index} href={`/book/${book.id}`} className="py-5">{(book.name)}</Link>

      ))}

      <h3 className="text-5xl">PETS</h3>
      {listPets.map((pet: any, index: number) => (
        <div key={index}>
          <p>{pet.name}</p>
          <p>{pet.description}</p>

          {pet.image && (
            <img
              src={urlFor(pet.image).width(300).url()} // Generate URL with resizing
              alt={pet.image.alt || 'Pet image'} // Use alt text if available
            />
          )}

        </div>
      ))}
    </main>

  );
}