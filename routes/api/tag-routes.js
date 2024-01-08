const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsAll = await Tag.findAll({ include: { model: Product }});
    res.status(200).json(tagsAll);

  } catch (err) {
    res.status(500).json({ message: 'Tags Not Found!' });
  };
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagOne = await Tag.findByPk(req.params.id, { include: { model: Product }});
    res.status(200).json(tagOne);

  } catch (err) {
    res.status(500).json({ message: 'Tag Not Found!' });
  };
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagNew = await Tag.create(req.body);
    res.status(200).json(tagNew);

  } catch (err) {
    res.status(500).json({ message: 'Could Not Create New!' });
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagUpdate = await Tag.update(req.body, { where: { id: req.params.id }});
    res.status(200).json(tagUpdate);

  } catch (err) {
    res.status(500).json({ message: 'Unable to Update!' });
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagDelete = await Tag.destroy({ where: { id: req.params.id }});
    res.status(200).json(tagDelete);

  } catch (err) {
    res.status(500).json({ message: 'Error!' });
  };
});

module.exports = router;
