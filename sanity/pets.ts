// one object in the fields arrays is one input filed in the sanity CMS
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: "description",
            type: "string",
            title: "Add Pet description here"
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true // Enables the hotspot selection for cropping
            }
        }
    ]
}