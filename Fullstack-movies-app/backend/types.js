const zod = require("zod");

const createMovie = zod.object(
    {
        title: zod.string(), 
        year: zod.number(),
        image: zod.string(),
        rate: zod.number()
    }
)

const updateMovie = zod.object({
    id: zod.number().optional(),
    title: zod.string().optional(),
    year: zod.number().optional(),
    image: zod.string().optional(),
    rate: zod.number().optional()
})

module.exports = {
    createMovie: createMovie, 
    updateMovie: updateMovie
}



