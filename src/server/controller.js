module.exports = {

    getBins: (req, res) => {
        const db = req.app.get('db')
        db.getBins(req.params.id).then(bins => res.status(200).send(bins))
        .catch(() => res.status(500).send())
    },

    getBinData: (req, res) => {
        const db = req.app.get('db')
        db.getBinData(req.params.id).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send())
    },

    deleteBin: (req, res) => {
        const db = req.app.get('db')
        db.deleteBin(req.params.id).then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },


}