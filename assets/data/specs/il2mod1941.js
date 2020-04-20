import Q from 'js-quantities';

export default {
  id: 'il2-mod-1941',
  variant: 'IL-2 mod. 1941',
  indicatedStallSpeedRanges: {
    takeoffLanding: [Q('128 km/h'), Q('146 km/h')],
    flight: [Q('136 km/h'), Q('156 km/h')],
  },
  diveSpeedLimit: Q('570 km/h'),
  maxLoadFactor: Q('11.5 gee'),
  stallAngles: {
    takeoffLanding: Q('17.5 deg'),
    flight: Q('19.4 deg'),
  },
  maxTrueAirspeeds: [
    {
      altitude: Q('0 m'),
      engineMode: 'Nominal',
      speed: Q('421 km/h'),
    },
    {
      altitude: Q('0 m'),
      engineMode: 'Boosted',
      speed: Q('430 km/h'),
    },
    {
      altitude: Q('2500 m'),
      engineMode: 'Nominal',
      speed: Q('455 km/h'),
    },
  ],
  maxPerformance: {
    climb: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('250 km/h'),
        rate: Q('9.4 m/s'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Nominal',
        speed: Q('250 km/h'),
        rate: Q('8.9 m/s'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Nominal',
        speed: Q('250 km/h'),
        rate: Q('3.9 m/s'),
      },
    ],
    turn: [
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('250 km/h'),
        time: Q('23.1 s'),
      },
      {
        altitude: Q('3000 m'),
        engineMode: 'Boosted',
        speed: Q('250 km/h'),
        time: Q('32.6 s'),
      },
    ],
  },
  takeoffSpeedRange: [Q('150 km/h'), Q('190 km/h')],
  glideslopeSpeedRange: [Q('185 km/h'), Q('195 km/h')],
  landingSpeedRange: [Q('130 km/h'), Q('140 km/h')],
  landingAngle: Q('11.7 deg'),
  serviceCeiling: Q('7500 m'),
  flightEndurance: [
    {
      altitude: Q('3000 m'),
      speed: Q('300 km/h'),
      time: Q('1.7h'),
    },
  ],
  engine: {
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2050 rpm'),
        manifoldPressure: Q('1180 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('10 min'),
        rpm: Q('2150 rpm'),
        manifoldPressure: Q('1280 mmHg'),
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
  },
  load: {
    emptyWeight: Q('4242 kg'),
    standardWeight: Q('5049 kg'),
    maxTakeoffWeight: Q('5888 kg'),
    fuelLoad: [Q('470 kg'), Q('641 L')],
  },
  armament: {
    standard: [
      {
        qty: 2,
        name: 'SsVAK',
        type: '20mm gun',
        count: 210,
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
    ],
    bombs: [
      {
        qty: 6,
        name: 'FAB-50sv',
        type: '50kg general purpose bombs',
      },
      {
        qty: 6,
        name: 'FAB-100M',
        type: '104kg general purpose bombs',
      },
      {
        qty: 2,
        name: 'FAB-250sv',
        type: '254kg general purpose bombs',
      },
    ],
    rockets: [
      {
        qty: 8,
        name: 'ROS-82',
        type: '7kg rockets',
        details: 'HE payload mass 2.5 kg',
      },
      {
        qty: 8,
        name: 'RBS-82',
        type: '15kg rockets',
        details: 'HEAT payload mass 7.2 kg',
      },
      {
        qty: 8,
        name: 'ROFS-132',
        type: '42kg rockets',
        details: 'HE payload mass 21.3 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Mixture control',
      details: [
        'Boost mode engaged when set to maximum (100%) position',
        'Automatic when set to intermediate (50%) position',
        'May be manually leaned below 50% to reduce fuel consumption',
      ],
    },
    {
      feature: 'Automatic operation of',
      details: ['Engine supercharger', 'Engine RPM'],
    },
    {
      feature: 'Radiators',
      details: ['Has armoured oil radiator shutters which should be closed during ground attacks'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch only'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can only extend fully (no gradual extension)',
        'Due to weak force of actuator, flaps may be pressed upwards at ≥ 220 km/h',
      ],
    },
    {
      feature: 'Tail wheel lock',
      details: [],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential pneumatic brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Indicates fuel in front and bottom tanks (alternates every 10 seconds)',
        'Rear fuel tank level is not indicated',
      ],
    },
    {
      feature: 'Canopy',
      details: [
        'Has no lock in open position, so it may close in a steep dive',
        'Impossible to open/close at high speed',
      ],
    },
    {
      feature: 'Gunsight',
      details: ['Installed on sliding bar which can be extended to increase FoV through the gunsight'],
    },
  ],
  procedures: {
    engineStart: ['Start engine'],
    takeoff: [
      'Set oil and water radiators to full open',
      'Set mixture to intermediate',
      'Set RPM to maximum',
      'Lock tail wheel',
      'At 170 km/h, rotate',
      'Retract landing gear',
      'Set engine for climb (1800..2000 RPM)',
      'Climb at 250 km/h',
    ],
    landing: [
      'Set RPM to maximum, MP to 5..6',
      'Reduce airspeed to ≤ 250 km/h',
      'Extend landing gear',
      'Set oil and water radiators as required',
      'Lock tail wheel',
      'On base leg, extend flaps and reduce airspeed to ≤ 220 km/h',
      'Set engine to 1500 RPM / 0.6 ata',
      'Lock tail wheel',
      'Set horizontal stabilizer to -4..5°',
      'At ≤ 350 km/h, extend landing gear',
      'At ≤ 250 km/h, extend flaps to 20°',
      'On base leg, descend at 150 m/min',
      'On final approach, descend at 185 km/h',
    ],
  },
};
