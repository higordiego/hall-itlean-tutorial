module.exports = (app) => {
    const Controller = require('../controllers')

    app.get('/', (req, res) => res.status(200).json({ title: 'hall live' }))

    app.route('/contato')
        .get(Controller.findAll)
        .post(Controller.create)

    app.route('/contato/:_id')
        .get(Controller.findOne)
        .put(Controller.update)
        .delete(Controller.delete)

}
