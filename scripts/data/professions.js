export const NPC_PROFILES = {
  common: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 3 },
      strength: { value: 2 },
      wits: { value: 2 },
    },
    skills: {
      manipulation: { value: 1 },
      observation: { value: 1 },
      dexterity: { value: 1 },
    },
    reputation: {
      value: 2,
    },
  },
  agent: {
    attributes: {
      agility: { value: 4 },
      empathy: { value: 4 },
      strength: { value: 2 },
      wits: { value: 3 },
    },
    skills: {
      manipulation: { value: 3 },
      observation: { value: 2 },
      rangedcombat: { value: 1 },
    },
    reputation: {
      value: 4,
    },
  },
  dataSpider: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 3 },
      strength: { value: 2 },
      wits: { value: 5 },
    },
    skills: {
      datadjinn: { value: 3 },
      manipulation: { value: 2 },
      culture: { value: 1 },
    },
    reputation: {
      value: 4,
    },
  },
  negociator: {
    attributes: {
      agility: { value: 2 },
      empathy: { value: 5 },
      strength: { value: 2 },
      wits: { value: 4 },
    },
    skills: {
      manipulation: { value: 3 },
      culture: { value: 2 },
      command: { value: 1 },
    },
    reputation: {
      value: 5,
    },
  },
  fugitive: {
    attributes: {
      agility: { value: 4 },
      empathy: { value: 4 },
      strength: { value: 3 },
      wits: { value: 2 },
    },
    skills: {
      mysticpowers: { value: 3 },
      infiltration: { value: 2 },
      meleecombat: { value: 1 },
    },
    reputation: {
      value: 2,
    },
  },
  scientist: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 3 },
      strength: { value: 2 },
      wits: { value: 5 },
    },
    skills: {
      science: { value: 3 },
      technology: { value: 2 },
      observation: { value: 1 },
    },
    reputation: {
      value: 5,
    },
  },
  shipWorker: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 3 },
      strength: { value: 5 },
      wits: { value: 3 },
    },
    skills: {
      force: { value: 3 },
      dexterity: { value: 2 },
      meleecombat: { value: 1 },
    },
    reputation: {
      value: 3,
    },
  },
  artist: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 5 },
      strength: { value: 2 },
      wits: { value: 2 },
    },
    skills: {
      manipulation: { value: 3 },
      dexterity: { value: 2 },
      culture: { value: 1 },
    },
    reputation: {
      value: 5,
    },
  },
  soldier: {
    attributes: {
      agility: { value: 5 },
      empathy: { value: 2 },
      strength: { value: 3 },
      wits: { value: 2 },
    },
    skills: {
      rangedcombat: { value: 3 },
      meleecombat: { value: 2 },
      command: { value: 1 },
    },
    reputation: {
      value: 3,
    },
  },
  pilot: {
    attributes: {
      agility: { value: 4 },
      empathy: { value: 2 },
      strength: { value: 3 },
      wits: { value: 4 },
    },
    skills: {
      pilot: { value: 3 },
      datadjinn: { value: 2 },
      technology: { value: 1 },
    },
    reputation: {
      value: 4,
    },
  },
  preacher: {
    attributes: {
      agility: { value: 2 },
      empathy: { value: 4 },
      strength: { value: 2 },
      wits: { value: 4 },
    },
    skills: {
      manipulation: { value: 3 },
      culture: { value: 2 },
      survival: { value: 1 },
    },
    reputation: {
      value: 5,
    },
  },
  trailblazer: {
    attributes: {
      agility: { value: 4 },
      empathy: { value: 2 },
      strength: { value: 3 },
      wits: { value: 4 },
    },
    skills: {
      survival: { value: 3 },
      observation: { value: 2 },
      dexterity: { value: 1 },
    },
    reputation: {
      value: 4,
    },
  },
  medicurg: {
    attributes: {
      agility: { value: 3 },
      empathy: { value: 3 },
      strength: { value: 2 },
      wits: { value: 5 },
    },
    skills: {
      medicurgy: { value: 3 },
      science: { value: 2 },
      observation: { value: 1 },
    },
    reputation: {
      value: 5,
    },
  },
};

export const PROFESSIONS = [
  { name: 'academic', profile: NPC_PROFILES.scientist },
  { name: 'actor', profile: NPC_PROFILES.artist },
  { name: 'agent', profile: NPC_PROFILES.agent },
  { name: 'agitator', profile: NPC_PROFILES.preacher },
  { name: 'analyst', profile: NPC_PROFILES.dataSpider },
  { name: 'archaeologist', profile: NPC_PROFILES.scientist },
  { name: 'architect', profile: NPC_PROFILES.scientist },
  { name: 'artisan', profile: NPC_PROFILES.shipWorker },
  { name: 'artist', profile: NPC_PROFILES.artist },
  { name: 'ascetic', profile: NPC_PROFILES.fugitive },
  { name: 'assassin', profile: NPC_PROFILES.agent },
  { name: 'baker', profile: NPC_PROFILES.shipWorker },
  { name: 'bartender', profile: NPC_PROFILES.negociator },
  { name: 'captain', profile: NPC_PROFILES.negociator },
  { name: 'chef', profile: NPC_PROFILES.negociator },
  { name: 'child', profile: NPC_PROFILES.common },
  { name: 'colonist', profile: NPC_PROFILES.negociator },
  { name: 'courtesan', profile: NPC_PROFILES.artist },
  { name: 'correspondent', profile: NPC_PROFILES.dataSpider },
  { name: 'criminal', profile: NPC_PROFILES.agent },
  { name: 'dataDjinn', profile: NPC_PROFILES.dataSpider },
  { name: 'deckhand', profile: NPC_PROFILES.shipWorker },
  { name: 'diplomat', profile: NPC_PROFILES.negociator },
  { name: 'dockWorker', profile: NPC_PROFILES.shipWorker },
  { name: 'driver', profile: NPC_PROFILES.pilot },
  { name: 'engineer', profile: NPC_PROFILES.scientist },
  { name: 'gangMember', profile: NPC_PROFILES.soldier },
  { name: 'guard', profile: NPC_PROFILES.soldier },
  { name: 'homeless', profile: NPC_PROFILES.common },
  { name: 'judicator', profile: NPC_PROFILES.soldier },
  { name: 'legionnaire', profile: NPC_PROFILES.soldier },
  { name: 'mechanic', profile: NPC_PROFILES.shipWorker },
  { name: 'medicurg', profile: NPC_PROFILES.medicurg },
  { name: 'mercenary', profile: NPC_PROFILES.soldier },
  { name: 'merchant', profile: NPC_PROFILES.negociator },
  { name: 'missionary', profile: NPC_PROFILES.trailblazer },
  { name: 'musician', profile: NPC_PROFILES.artist },
  { name: 'mystic', profile: NPC_PROFILES.fugitive },
  { name: 'navigator', profile: NPC_PROFILES.pilot },
  { name: 'noble', profile: NPC_PROFILES.negociator },
  { name: 'officer', profile: NPC_PROFILES.soldier },
  { name: 'peddler', profile: NPC_PROFILES.negociator },
  { name: 'pilgrim', profile: NPC_PROFILES.preacher },
  { name: 'poet', profile: NPC_PROFILES.artist },
  { name: 'pilot', profile: NPC_PROFILES.pilot },
  { name: 'priest', profile: NPC_PROFILES.preacher },
  { name: 'prophet', profile: NPC_PROFILES.preacher },
  { name: 'prospector', profile: NPC_PROFILES.trailblazer },
  { name: 'revolutionary', profile: NPC_PROFILES.preacher },
  { name: 'samaritan', profile: NPC_PROFILES.medicurg },
  { name: 'scientist', profile: NPC_PROFILES.scientist },
  { name: 'scout', profile: NPC_PROFILES.trailblazer },
  { name: 'shopkeeper', profile: NPC_PROFILES.negociator },
  { name: 'soldier', profile: NPC_PROFILES.soldier },
  { name: 'spy', profile: NPC_PROFILES.agent },
  { name: 'stevedore', profile: NPC_PROFILES.shipWorker },
  { name: 'streetUrchin', profile: NPC_PROFILES.common },
  { name: 'student', profile: NPC_PROFILES.scientist },
  { name: 'tailor', profile: NPC_PROFILES.artist },
  { name: 'technician', profile: NPC_PROFILES.shipWorker },
  { name: 'thief', profile: NPC_PROFILES.agent },
  { name: 'traveler', profile: NPC_PROFILES.trailblazer },
  { name: 'waiter', profile: NPC_PROFILES.common },
  { name: 'writer', profile: NPC_PROFILES.artist },
];
