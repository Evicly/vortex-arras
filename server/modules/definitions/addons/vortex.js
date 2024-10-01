const {
  combineStats,
  skillSet,
  makeAuto,
  addAura,
  LayeredBoss,
  makeDeco,
  weaponArray,
  setTurretProjectileRecoil,
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

Class.VTXAura = addAura(3, 0.5, 0.1, 42);
Class.VORT3X_T1 = {
  PARENT: "genericTank",
  LABEL: "VORT3X Tier 1",
  COLOR: 14,
  UPGRADE_COLOR: "rainbow",
  GLOW: {
    RADIUS: 20,
    COLOR: 14,
    ALPHA: 1,
    RECURSION: 5,
  },
  DANGER: 10,
  LEVEL_CAP: 45,
  LEVEL: 0,
  SIZE: 20,
  BODY: {
    REGEN: 0.5,
    FOV: 1,
    SHIELD: 2,
    ACCEL: 3,
    SPEED: 8,
    HEALTH: 500,
    PUSHABILITY: 0,
    DENSITY: 0.2,
    DAMAGE: 10,
  },
  TURRETS: [
    {
      POSITION: [18, 0, 0, 0, 360, 1],
      TYPE: "VTXAura",
    },
  ],
  ON: [
    {
      event: "tick",
      handler: ({ body }) => {
        body.store.ticks ??= 0;
        body.store.ticks++;
        if (body.store.ticks == 1) {
          sockets.broadcast("FIND AND DESTORY IT BEFORE IT'S TOO LATE");
          sockets.broadcast("VORT3X TIER 1 HAS SPAWNED");
        }
      },
    },
  ],
};
Class.VORT3X_Minion = {
  COLOR: 14,
  PARENT: "minion",
  LABEL: "VORT3X",
  TURRETS: [
    {
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: "VTXAura",
    },
  ],
};
Class.VORT3X_T2_Top = {
  COLOR: 14,
  FACING_TYPE: ["spin", { speed: -0.01 }],
  GUNS: [
    {
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: "VORT3X_Minion",
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 120, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: "VORT3X_Minion",
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, -120, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: "VORT3X_Minion",
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 0, 0, -120, 0],
    },
  ],
};
Class.VORT3X_T2 = {
  PARENT: "genericTank",
  LABEL: "VORT3X Tier 2",
  COLOR: 14,
  UPGRADE_COLOR: "rainbow",
  GLOW: {
    RADIUS: 20,
    COLOR: 14,
    ALPHA: 1,
    STRENGTH: 25,
  },
  DANGER: 10,
  LEVEL_CAP: 45,
  LEVEL: 0,
  SIZE: 50,
  FACING_TYPE: ["spin", { speed: 0.03 }],
  BODY: {
    REGEN: 0.5,
    FOV: 1,
    SHIELD: 2,
    ACCEL: 3,
    SPEED: 6,
    HEALTH: 1000,
    PUSHABILITY: 0,
    DENSITY: 0.2,
    DAMAGE: 100,
  },
  TURRETS: [
    {
      POSITION: [14, 0, 0, 0, 360, 10],
      TYPE: "VORT3X_T2_Top",
    },
    {
      POSITION: [18, 0, 0, 0, 360, 1],
      TYPE: "VTXAura",
    },
    {
      POSITION: [5, 10, 0, 0, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, 45, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, 90, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, 135, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, -45, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, -90, 180, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, -135, 90, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
    {
      POSITION: [5, 10, 0, 180, 90, 0],
      TYPE: ["autoSmasherLauncherTurret", { INDEPENDENT: true, COLOR: -1 }],
    },
  ],
  ON: [
    {
      event: "tick",
      handler: ({ body }) => {
        body.store.ticks ??= 0;
        body.store.ticks++;
        if (body.store.ticks == 1) {
          sockets.broadcast("VORT3X IS NOW TIER 2");
        }
      },
    },
  ],
};

Class.developer.UPGRADES_TIER_0.push("vortexOS");
Class.vortexOS.UPGRADES_TIER_0 = ["vip", "staff", "VORT3X_T1"];
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
Class.VORT3X_T1.UPGRADES_TIER_3 = ["VORT3X_T2"];
