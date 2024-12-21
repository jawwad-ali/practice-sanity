import { type SchemaTypeDefinition } from 'sanity'
import pets from "../pets"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pets],
}
