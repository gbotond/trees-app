const trees = [
  {
    id: 1,
    species: "Quercus robur",
    slug: "quercus-robur-fagaceae-1",
    ownerId: 1,
    family: "Fagaceae"
  },
  {
    id: 2,
    species: "Platanus hispanica",
    slug: "platanus-hispanica-platanaceae-2",
    ownerId: 1,
    family: "Platanaceae"
  },
  {
    id: 3,
    species: "Platanus hispanica",
    slug: "platanus-hispanica-platanaceae-3",
    ownerId: 1,
    family: "Platanaceae"
  },
  {
    id: 4,
    species: "Platanus hispanica",
    slug: "platanus-hispanica-platanaceae-4",
    ownerId: 2,
    family: "Platanaceae"
  },
  {
    id: 5,
    species: "Populus",
    slug: "populus-salicaceae-5",
    ownerId: 2,
    family: "Salicaceae"
  },
  {
    id: 6,
    species: "Acer platanoides",
    slug: "acer-platanoides-sapindaceae-6",
    ownerId: 2,
    family: "Sapindaceae"
  },
  {
    id: 7,
    species: "Acer platanoides",
    slug: "acer-platanoides-sapindaceae-7",
    ownerId: 2,
    family: "Sapindaceae"
  },
  {
    id: 8,
    species: "Acer platanoides",
    slug: "acer-platanoides-sapindaceae-8",
    ownerId: 3,
    family: "Sapindaceae"
  },
  {
    id: 9,
    species: "Betula pendula",
    slug: "betula-pendula-betulaceae-9",
    ownerId: 3,
    family: "Betulaceae"
  },
  {
    id: 10,
    species: "Betula pendula",
    slug: "betula-pendula-betulaceae-10",
    ownerId: 3,
    family: "Betulaceae"
  }
];

const owners = [
  { id: 1, name: "I. District" },
  { id: 2, name: "II. District" },
  { id: 3, name: "III. District" }
];

const newTree = {
  id: null,
  name: "",
  owner: null,
  species: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTree,
  trees,
  owners
};
