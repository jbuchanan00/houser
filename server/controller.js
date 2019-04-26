module.exports = {
    getAllHouses: async(req, res) => {
        const db = req.app.get("db")
        const allHouses = await db.get_houses()
        res.status(200).send(allHouses)
    },
    addHouse: async(req, res) => {
        const {name, address, city, state, zip} = req.body
        // console.log(111111111111, name, address, city, state, zip)
        const db = req.app.get("db")
        const addedHouse = await db.create_property({name, address, city, state, zip})
        res.status(200).send(addedHouse)
    },
    delete: async(req, res) => {
        const {id} = req.params
        const db = req.app.get("db")
        await db.delete_house({id})
        res.sendStatus(200)
    }
}