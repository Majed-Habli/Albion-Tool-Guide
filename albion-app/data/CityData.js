//City data

export const imageData = [
  {
    source: require("@/assets/images/BridgewatchBanner.jpeg"),
    crest: require("@/assets/images/crests/BridgewatchCrest.png"),
    title: "BridgeWatch",
    description: "Description for Image 1",
    resources: [0, 1, 2],
    farming_yield_bonus: [
      { name: 'Beans', percentage: '10%' },
      { name: 'Goats Milk', percentage: '15%' },
      { name: 'Dragon Teasel', percentage: '20%' },
      { name: 'Bundle of Corn', percentage: '25%' }
    ],
    refining_bonus: {
      resource: [4],
      percentage: '+ 40%'
    }
  },
  {
    source: require("@/assets/images/LymhurstBanner.jpeg"),
    crest: require("@/assets/images/crests/LymhurstCrest.png"),
    title: "Lymhurst",
    description: "Description for Image 2",
    resources: [0, 1, 3],
    farming_yield_bonus: [
      { name: 'Carrot', percentage: '10%' },
      { name: 'Crenellated Burdock', percentage: '15%' },
      { name: 'Goose Eggs', percentage: '20%' },
      { name: 'Pumpkin', percentage: '25%' }
    ],
    refining_bonus: {
      resource: [1],
      percentage: '+ 40%'
    }
  },
  {
    source: require("@/assets/images/ThetfortBanner.jpg"),
    crest: require("@/assets/images/crests/ThetfortCrest.png"),
    title: "Thetfort",
    description: "Description for Image 2",
    resources: [0, 1, 3],
    farming_yield_bonus: [
      { name: 'Arcane Agaric', percentage: '10%' },
      { name: 'Cabbage', percentage: '15%' },
      { name: 'Firetouched Mullein', percentage: '20%' }
    ],
    refining_bonus: {
      resource: [2],
      percentage: '+ 40%'
    }
  },
  {
    source: require("@/assets/images/MortlockBanner.jpeg"),
    crest: require("@/assets/images/crests/MortlockCrest.png"),
    title: "MortLock",
    description: "Description for Image 3",
    resources: [0, 1, 3],
    farming_yield_bonus: [
      { name: 'Sheaf of Wheat', percentage: '10%' },
      { name: 'Potatoes', percentage: '15%' },
      { name: 'Elusive Foxglove', percentage: '20%' },
      { name: 'Cows Milk', percentage: '25%' }
    ],
    refining_bonus: {
      resource: [0],
      percentage: '+ 40%'
    }
  },
  {
    source: require("@/assets/images/CarleonBanner.jpg"),
    crest: require("@/assets/images/crests/CarleonCrest.png"),
    title: "Carleon",
    description: "Description for Image 4",
    resources: [0, 1, 2, 3],
    farming_yield_bonus: [
      { name: 'Brightleaf Comfrey', percentage: '10%' },
      { name: 'Dragon Teasel', percentage: '15%' },
      { name: 'Firetouched Mullein', percentage: '20%' }
    ],
    refining_bonus: {
      resource: [5],
      percentage: '+ 18%'
    }
  },
  {
    source: require("@/assets/images/FortsterlingBanner.jpg"),
    crest: require("@/assets/images/crests/FortSterlingCrest.png"),
    title: "Fortsterling",
    description: "Description for Image 5",
    resources: [3, 1, 2],
    farming_yield_bonus: [
      { name: 'Beans', percentage: '10%' },
      { name: 'Goats Milk', percentage: '15%' },
      { name: 'Dragon Teasel', percentage: '20%' },
      { name: 'Bundle of Corn', percentage: '25%' }
    ],
    refining_bonus: {
      resource: [3],
      percentage: '+ 40%'
    }
  },
  {
    source: require("@/assets/images/BercilienBanner.jpeg"),
    title: "Bercilien",
    description: "Description for Image 7",
    resources: [],
    farming_yield_bonus: [],
    refining_bonus: {
      resources: [],
      percentage: ''
    }
  },
];

export const resources = [
  "Hide",
  "Cotton",
  "Ore",
  "Wood",
  "Stone",
  "All"
];
