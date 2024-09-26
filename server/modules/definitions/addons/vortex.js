const {
  combineStats,
  makeAuto,
  weaponArray,
  makeTurret,
} = require("../facilitators.js");
const {
  smshskl,
  base,
  basePolygonDamage,
  basePolygonHealth,
} = require("../constants.js");
const g = require("../gunvals.js");

//VortexOS Tanks & menus
//return console.log("%c[VortexOS] Addon disabled", "color: #bb00ff");

//Menus
Class.vortexOS = {
  PARENT: "genericTank",
  LABEL: "Vortex",
  COLOR: 14,
  UPGRADE_TOOLTIP: "VortexOS tanks",
  RECALC_SKILL: true,
  UPGRADE_COLOR: "rainbow",
};

Class.vip = {
  PARENT: "genericTank",
  LABEL: "VIP",
  COLOR: 13,
  UPGRADE_TOOLTIP: "VortexOS VIP tanks",
  RECALC_SKILL: true,
  UPGRADE_COLOR: "rainbow",
};

Class.staff = {
  PARENT: "genericTank",
  LABEL: "STAFF",
  COLOR: 0,
  UPGRADE_TOOLTIP: "VortexOS Staff tanks",
  RECALC_SKILL: true,
  UPGRADE_COLOR: "rainbow",
};

Class.arenaDestroyer = {
  PARENT: "genericTank",
  LABEL: "Arena Destroyer",
  NAME: "Arena Closer",
  DANGER: 10,
  SIZE: 80,
  COLOR: "yellow",
  UPGRADE_COLOR: "yellow",
  IGNORED_BY_AI: true,
  LAYER: 13,
  BODY: {
    REGEN: 1e5,
    HEALTH: 1e6,
    DENSITY: 30,
    DAMAGE: 1e5,
    FOV: 1.5,
    SPEED: 10,
  },
  DRAW_HEALTH: false,
  HITS_OWN_TYPE: "never",
  ARENA_CLOSER: true,
  IS_IMMUNE_TO_TILES: true,
  GUNS: [
    {
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaDestroyer]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
  ],
};

Class.arenaEraser = {
  PARENT: "genericTank",
  LABEL: "Arena Eraser",
  NAME: "Arena Closer",
  DANGER: 10,
  SIZE: 30,
  COLOR: "yellow",
  UPGRADE_COLOR: "yellow",
  IGNORED_BY_AI: true,
  LAYER: 13,
  BODY: {
    REGEN: 1e5,
    HEALTH: 1e6,
    DENSITY: 30,
    DAMAGE: 1e5,
    FOV: 1.5,
    SPEED: 10,
  },
  DRAW_HEALTH: false,
  HITS_OWN_TYPE: "never",
  ARENA_CLOSER: true,
  IS_IMMUNE_TO_TILES: true,
  GUNS: [
    {
      POSITION: [14, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenaEraser]),
        TYPE: ["bullet", { LAYER: 12 }],
      },
    },
  ],
};

Class.developer.UPGRADES_TIER_0.push("vortexOS");
Class.vortexOS.UPGRADES_TIER_0 = ["vip", "staff"];
Class.vip.UPGRADES_TIER_0 = ["flail", "whirlwind", "basic"];
Class.vip.UPGRADES_TIER_3 = ["sanctuaries"];
Class.staff.UPGRADES_TIER_0 = [
  "sentries",
  "elites",
  "mysticals",
  "nesters",
  "rogues",
  "spectator",
  "vip",
  "mothership",
  "basic",
];
Class.arenaCloser.UPGRADES_TIER_0 = ["arenaDestroyer"];
Class.arenaDestroyer.UPGRADES_TIER_0 = ["arenaEraser"];
