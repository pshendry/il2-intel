import Q from 'js-quantities';

export default {
  id: 'a-20b',
  type: 'A-20',
  variant: 'A-20B',
  combatDebut: new Date(1942, 2), // "Spring 1942"
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('86 mi/h'), Q('103 mi/h')],
      flight: [Q('100 mi/h'), Q('120 mi/h')],
    },
    diveSpeedLimit: Q('412 mi/h'),
    maxLoadFactor: Q('6.5 gee'),
    stallAngles: {
      landing: Q('17.1 deg'),
      flight: Q('19.1 deg'),
    },
    takeoffSpeedRange: [Q('105 mi/h'), Q('120 mi/h')],
    glideslopeSpeedRange: [Q('115 mi/h'), Q('140 mi/h')],
    landingSpeedRange: [Q('95 mi/h'), Q('105 mi/h')],
    landingAngle: Q('3.4 deg'),
    length: Q('14.54 m'),
    wingspan: Q('18.69 m'),
    wingSurface: Q('43.18 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('290 mi/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Nominal',
        speed: Q('311 mi/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Nominal',
        speed: Q('326 mi/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Combat',
        speed: Q('314 mi/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Combat',
        speed: Q('326 mi/h'),
      },
      {
        altitude: Q('5000 m'),
        engineMode: 'Combat',
        speed: Q('338 mi/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('1969 ft/min'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('1614 ft/min'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          rate: Q('984 ft/min'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('24.5 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Nominal',
          speed: Q('270 km/h'),
          time: Q('34.1'),
        },
      ],
    },
    serviceCeiling: Q('28540 ft'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('3.4 h'),
      },
    ],
  },
  engine: {
    model: 'Wright R-2600-11',
    maxPowers: [
      {
        altitude: Q('5500 ft'),
        mode: 'Cruise',
        power: Q('810 hp'),
      },
      {
        altitude: Q('12000'),
        mode: 'Cruise',
        power: Q('765 hp'),
      },
      {
        altitude: Q('5500 ft'),
        mode: 'Nominal',
        power: Q('1350 hp'),
      },
      {
        altitude: Q('12000'),
        mode: 'Nominal',
        power: Q('1275 hp'),
      },
      {
        altitude: Q('0 ft'),
        mode: 'Combat',
        power: Q('1600 hp'),
      },
      {
        altitude: Q('11500'),
        mode: 'Combat',
        power: Q('1400 hp'),
      },
    ],
    modes: [
      {
        name: 'Cruise',
        limit: null,
        rpm: Q('1705 rpm'),
        manifoldPressure: Q('29 inHg'),
      },
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2300 rpm'),
        manifoldPressure: Q('38 inHg'),
      },
      {
        name: 'Combat',
        limit: Q('5 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('42 inHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('80 degC'), Q('95 degC')],
      },
      {
        name: 'Cylinder head',
        range: [Q('140 degC'), Q('240 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('105 degC'),
      },
      {
        name: 'Cylinder head',
        value: Q('260 degC'),
      },
    ],
    superchargerGearShiftAltitude: Q('9500 ft'),
  },
  load: {
    emptyWeight: Q('6781 kg'),
    minimumWeight: Q('7359 kg'),
    standardWeight: Q('8366 kg'),
    maxTakeoffWeight: Q('10466 kg'),
    fuelLoad: [Q('1057 kg'), Q('388 gal')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 1,
          name: 'ANM2 .50',
          type: '12.7mm machine gun',
          count: 200,
          details: 'nose-mounted',
        },
      ],
      modifications: [],
    },
    defensive: [
      {
        qty: 1,
        name: 'ANM2 .50',
        type: '12.7mm machine gun',
        count: 390,
        details: 'Top',
      },
      {
        qty: 1,
        name: 'ANM2 .30',
        type: '7.92mm machine gun',
        count: 600,
        details: 'Belly',
      },
    ],
    bombs: [
      {
        qty: 20,
        name: 'FAB-100m',
        type: '104kg general purpose bomb',
      },
      {
        qty: 4,
        name: 'FAB-250ck',
        type: '254kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Engine',
      details: [
        'Has no manifold pressure automatic governor, so MP depends not only on throttle position, but also RPM and altitude',
      ],
    },
    {
      feature: 'Mixture control',
      details: ['Has Auto Rich (66%) and Auto Lean (33%) settings'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil radiator & engine cowl outlet shutters',
      details: ['Manually operated'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll, yaw'],
    },
    {
      feature: 'Flaps',
      details: ['Can extend at any angle up to 50°'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Parking brake',
      details: [],
    },
    {
      feature: 'Low speed warning siren',
      details: ['Activates when at low speed with landing gear retracted'],
    },
    {
      feature: 'Upper formation lights',
      details: [],
    },
    {
      feature: 'Supercharger',
      details: ['Manual control', 'Two-stage (shift at 9500 ft)'],
    },
    {
      feature: 'Fuel gauge',
      details: ['Shows the fuel in left or right tanks (alternates in-game every 15 seconds)'],
    },
    {
      feature: 'Landing gear safety system',
      details: ['Blocks the landing gear actuator while the aircraft is on the ground'],
    },
    {
      feature: 'Nose landing gear',
      details: ['Orients by itself and does not have brakes'],
    },
    {
      feature: 'Upper cowl flaps',
      details: ['Controlled simultaneously', 'Forbidden to open the flaps during flight'],
    },
    {
      feature: 'Tail signal lamps',
      details: ['White lamp lit while bomb doors are open', 'Red lamp lit for 5 seconds after bombs released'],
    },
    {
      feature: 'Upper cockpit door',
      details: ['Cannot be opened during flight', 'Has an emergency release'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2, 4, All'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Halfway (Auto)',
      'Prop Pitch/RPM: Maximum',
      'Water/Oil Radiators: As required',
      'Throttle: 1”',
      'Press E to start',
    ],
    takeoff: [
      'Mixture: Halfway (Auto)',
      'RPM: Full forward',
      'Water/Oil Radiators: Fully open',
      'Rudder Trim: ¼ turn back',
      'Elevator Trim: Neutral',
      '190 km/hr: Rotate',
      'Climb: 290 km/hr',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Mixture: Halfway (Auto)',
          'MP: 4-500 mmHG',
          'RPM: Full forward',
          'Airspeed: Below 300 km/hr',
          'Gear: Extend',
          'Water/Oil Radiators: As required',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 230 km/hr', 'Flaps: Extend to full'],
      },
      {
        text: 'Base to Final',
        steps: ['Airspeed: 200 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=auQ2ytsCqp0&t=5s',
    startup: 'https://www.youtube.com/watch?v=auQ2ytsCqp0&t=7m14s',
    takeoff: 'https://www.youtube.com/watch?v=auQ2ytsCqp0&t=8m19s',
    landing: 'https://www.youtube.com/watch?v=auQ2ytsCqp0&t=11m16s',
  },
};
