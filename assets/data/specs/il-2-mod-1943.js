import Q from 'js-quantities';

export default {
  id: 'il-2-mod-1943',
  type: 'IL-2',
  variant: 'IL-2 model of 1943',
  combatDebut: new Date(1943), // "Early 1943"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('135 km/h'), Q('152 km/h')],
      flight: [Q('144 km/h'), Q('159 km/h')],
    },
    diveSpeedLimit: Q('570 km/h'),
    maxLoadFactor: Q('10.5 gee'),
    stallAngles: {
      landing: Q('17.5 deg'),
      flight: Q('19.4 deg'),
    },
    takeoffSpeedRange: [Q('160 km/h'), Q('200 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('145 km/h'), Q('155 km/h')],
    landingAngle: Q('11.7 deg'),
    length: Q('11.5 m'),
    wingspan: Q('14.6 m'),
    wingSurface: Q('38.5 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('389 km/h'),
      },
      {
        altitude: Q('1200 m'),
        engineMode: 'Nominal',
        speed: Q('400 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('407 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('250 km/h'),
          rate: Q('7.5 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('250 km/h'),
          rate: Q('4.2 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('250 km/h'),
          time: Q('26.6 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('250 km/h'),
          time: Q('39.3 s'),
        },
      ],
    },
    serviceCeiling: Q('5600 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('1.4 h'),
      },
    ],
  },
  engine: {
    model: 'AM-38F',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1500 hp'),
      },
      {
        altitude: Q('750 m'),
        mode: 'Nominal',
        power: Q('1500 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1720 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2050 rpm'),
        manifoldPressure: Q('1200 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('5 min'),
        rpm: Q('2350 rpm'),
        manifoldPressure: Q('1360 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('40 degC'), Q('80 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('115 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC'), Q('110 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('85 degC'),
      },
      {
        name: 'Oil',
        value: Q('120 degC'),
      },
      {
        name: 'Water',
        value: Q('120 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('4715 kg'),
    minimumWeight: Q('5014 kg'),
    standardWeight: Q('5681 kg'),
    maxTakeoffWeight: Q('6375 kg'),
    fuelLoad: [Q('535 kg'), Q('730 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'SsVAK',
          type: '20mm gun',
          count: 250,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 750,
          details: 'wing-mounted',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'VYa-23',
          type: '23mm gun',
          count: 150,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'NS-37',
          type: '37mm gun',
          count: 50,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [
      {
        qty: 1,
        name: 'UBT',
        type: '12.7mm machine gun',
        count: 150,
        details: 'Rear',
      },
    ],
    bombs: [
      {
        qty: 240,
        name: 'PTAB-2,5-1,5',
        type: '1.5kg HEAT bomblets',
      },
      {
        qty: 6,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
      },
      {
        qty: 6,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
      },
      {
        qty: 2,
        name: 'FAB-250sv',
        type: '254kg general purpose bomb',
      },
    ],
    rockets: [
      {
        qty: 4,
        name: 'ROS-82',
        type: '7kg rocket',
        details: 'HE payload mass 2.5 kg',
      },
      {
        qty: 4,
        name: 'RBS-82',
        type: '15kg rocket',
        details: 'HEAT payload mass 7.2 kg',
      },
      {
        qty: 4,
        name: 'ROFS-132',
        type: '42kg rocket',
        details: 'HE payload mass 21.3 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Boost',
      details: ['Engaged by setting mixture to full rich'],
    },
    {
      feature: 'Supercharger',
      details: ['Single stage, does not require manual control'],
    },
    {
      feature: 'Mixture',
      details: ['Automatic when set to intermediate (50%)'],
    },
    {
      feature: 'Governor',
      details: ['Can be disabled for manual prop pitch control'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control', 'Oil radiator shutters are armoured; close during ground attacks'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can only extend fully to 17° (no gradual extension)',
        'At ≥ 220 km/h, airflow may press the flaps upwards',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a manual lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Indicates fuel in front/bottom tanks (alternates in-game every 10 seconds)',
        'Rear tank level is not indicated',
      ],
    },
    {
      feature: 'Canopy',
      details: ['Has no lock in open position; may close in a steep dive', 'Impossible to open/close at high speed'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb/rocket modes: 1, 2, 4'],
    },
    {
      feature: '"Visier Vladimirova" Gunsight',
      details: [
        'Allows aiming rockets and guns at ground and air targets, and horizontal bombing at certain speeds and altitudes',
      ],
    },
  ],
  procedures: {
    engineStart: [],
    takeoff: [],
    landing: [],
  },
};
