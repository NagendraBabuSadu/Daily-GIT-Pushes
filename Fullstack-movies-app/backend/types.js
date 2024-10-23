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
    title: zod.string().optional(),
    year: zod.string().optional(),
    image: zod.string().optional(),
    rate: zod.string().optional()
})

module.exports = {
    createMovie: createMovie, 
    updateMovie: updateMovie
}



