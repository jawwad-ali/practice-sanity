const DynamicBook = async (props: any) => {
    
    const dynamicVal = props.params.id
    const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
    const res = await url.json()

    return (
        <>
            <h1 className="text-3xl font-extrabold">Name: {res.name}</h1>
            <strong>Author:</strong>{res.author} <br />
            <strong>Type:</strong>{res.type} <br />
            <strong>Price:</strong>{res.price}
        </>
    )
}
export default DynamicBook