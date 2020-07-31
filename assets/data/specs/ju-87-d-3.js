import Q from 'js-quantities';

export default {
  id: 'ju-87-d-3',
  type: 'Ju 87',
  variant: 'Ju 87 D-3',
  combatDebut: new Date(1942, 2),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('123 km/h'), Q('155 km/h')],
      flight: [Q('137 km/h'), Q('176 km/h')],
    },
    diveSpeedLimit: Q('650 km/h'),
    maxLoadFactor: Q('9.0 gee'),
    stallAngles: {
      landing: Q('18 deg'),
      flight: Q('19.9 deg'),
    },
    takeoffSpeedRange: [Q('140 km/h'), Q('170 km/h')],
    glideslopeSpeedRange: [Q('180 km/h'), Q('195 km/h')],
    landingSpeedRange: [Q('125 km/h'), Q('145 km/h')],
    landingAngle: Q('11 deg'),
    length: Q('11 m'),
    wingspan: Q('13.8 m'),
    wingSurface: Q('31.9 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Climb',
        speed: Q('367 km/h'),
      },
      {
        altitude: Q('2000 m'),
        engineMode: 'Climb',
        speed: Q('389 km/h'),
      },
      {
        altitude: Q('6000 m'),
        engineMode: 'Climb',
        speed: Q('422 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Climb',
          speed: Q('230 km/h'),
          rate: Q('8 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Climb',
          speed: Q('230 km/h'),
          rate: Q('7 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Climb',
          speed: Q('230 km/h'),
          rate: Q('2.5 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Take-off',
          speed: Q('230 km/h'),
          time: Q('22.2 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Take-off',
          speed: Q('230 km/h'),
          time: Q('31.3 s'),
        },
      ],
    },
    serviceCeiling: Q('7000 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('300 km/h'),
        time: Q('3.4 h'),
      },
    ],
  },
  engine: {
    model: 'Jumo-211J',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Climb',
        power: Q('1190 hp'),
      },
      {
        altitude: Q('1500 m'),
        mode: 'Climb',
        power: Q('1260 hp'),
      },
      {
        altitude: Q('4900 m'),
        mode: 'Climb',
        power: Q('1180 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Take-off',
        power: Q('1420 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2250 rpm'),
        manifoldPressure: Q('1.15 atm'),
      },
      {
        name: 'Climb',
        limit: Q('30 min'),
        rpm: Q('2400 rpm'),
        manifoldPressure: Q('1.25 atm'),
      },
      {
        name: 'Take-off',
        limit: Q('1 min'),
        rpm: Q('2600 rpm'),
        manifoldPressure: Q('1.42 atm'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil',
        range: [Q('90 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil',
        value: Q('105 degC'),
      },
      {
        name: 'Water',
        value: Q('110 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('3930 kg'),
    minimumWeight: Q('4250 kg'),
    standardWeight: Q('4835 kg'),
    maxTakeoffWeight: Q('6684 kg'),
    fuelLoad: [Q('626 kg'), Q('840 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'MG 17',
          type: '7.92mm machine gun',
          count: 1000,
          details: 'nose-mounted',
        },
      ],
      modifications: [
        {
          qty: 12,
          name: 'MG 81',
          type: '7.92mm machine gun',
          count: 250,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'BK 37',
          type: '37mm gun',
          count: 12,
          details: 'wing-mounted',
        },
      ],
    },
    defensive: [
      {
        qty: 2,
        name: 'MG 81',
        type: '7.92mm machine gun',
        count: 500,
        details: 'Rear',
      },
    ],
    bombs: [
      {
        qty: 4,
        name: 'SD 70',
        type: '70kg general purpose bomb',
      },
      {
        qty: 3,
        name: 'SC 250',
        type: '249kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 500',
        type: '500kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 1000',
        type: '1090kg general purpose bomb',
      },
      {
        qty: 1,
        name: 'SC 1800',
        type: '1780kg general purpose bomb',
      },
    ],
    rockets: [],
  },
  features: [
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Two-stage', 'Can be manually switched to 1st gear'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic'],
    },
    {
      feature: 'Governor',
      details: [
        'Automatically controls prop pitch to maintain required RPM',
        'Can be disabled for manual prop pitch control',
      ],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manually operated'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, roll', 'Horizontal stabilizer automatically controlled based on flaps extension'],
    },
    {
      feature: 'Airbrakes',
      details: ['Located under the wing and used to slow descent during steep dive bombing'],
    },
    {
      feature: 'Flaps',
      details: [
        '3 fixed positions: retracted, takeoff (25°) and landing (50°)',
        'Indicator lights located on left panel',
      ],
    },
    {
      feature: 'Differential ailerons',
      details: ['Lowered in sync with the flaps'],
    },
    {
      feature: 'Tail wheel',
      details: ['Has a manual lock'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Independent left and right brakes'],
    },
    {
      feature: 'Fuel gauge',
      details: [
        'Indicates fuel in left or right tanks (alternates in-game every 10 seconds)',
        'Has indicator lights for full tanks and a low fuel warning light (160 L) for each tank',
      ],
    },
    {
      feature: 'Canopy',
      details: [
        'Impossible to open/close at high speed',
        'Impossible to use rear gun when open',
        'Has an emergency relaese',
      ],
    },
    {
      feature: 'Bombsight window',
      details: ['Located on cockpit floor'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: central, left, right'],
    },
    {
      feature: 'Gunsight',
      details: ['Has sliding sun filter'],
    },
  ],
  procedures: {
    startup: ['Throttle: 1”', 'RPM: Full forward', 'Water/Oil Radiators: As required', 'Press E to start'],
    takeoff: [
      'Canopy: Closed',
      'Flaps: “Takeoff” position',
      'RPM: Full forward',
      'Water/Oil Radiators: Fully Open',
      '170 km/hr: Rotate',
      'Climb to 200 m AGL',
      'MP: 1.25 ATA (Climb power)',
      'RPM: 2400 (Climb power)',
      'Flaps: Up',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: ['RPM: 2000', 'MP: 0.6 ATA', 'Water/Oil Radiators: As required'],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 250km/hr', 'Flaps: “Landing” position'],
      },
      {
        text: 'Base to final',
        steps: ['Airspeed: 190 km/hr'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=iYweoO-Ki3Y&t=46s',
    startup: 'https://www.youtube.com/watch?v=iYweoO-Ki3Y&t=3m18s',
    takeoff: 'https://www.youtube.com/watch?v=iYweoO-Ki3Y&t=4m08s',
    landing: 'https://www.youtube.com/watch?v=iYweoO-Ki3Y&t=5m30s',
  },
};
