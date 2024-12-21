import { client } from "../sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

const getPets = async () => {
  // const query = await client.fetch(
  //   `*[_type=="pet"]`
  // );
  const query = await client.fetch(`*[_type=="pet"]`, {}, { cache: 'no-cache' });
  console.log(query)
  return query
}

export default async function Home() {
  const listPets = await getPets()
  console.log(listPets)

  return (
    <main className="flex flex-col py-3 text-center items-center justify-center">
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