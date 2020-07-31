(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,t,m){"use strict";m.r(t);var n=m(186),r=m.n(n);t.default={id:"he-111-h-6",type:"He 111",variant:"He 111 H-6",combatDebut:new Date(1941,5),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[r()("123 km/h"),r()("151 km/h")],flight:[r()("150 km/h"),r()("184 km/h")]},diveSpeedLimit:r()("560 km/h"),maxLoadFactor:r()("4.5 gee"),stallAngles:{landing:r()("17 deg"),flight:r()("20 deg")},takeoffSpeedRange:[r()("170 km/h"),r()("210 km/h")],glideslopeSpeedRange:[r()("180 km/h"),r()("200 km/h")],landingSpeedRange:[r()("125 km/h"),r()("150 km/h")],landingAngle:r()("9 deg"),length:r()("16.38 m"),wingspan:r()("22.5 m"),wingSurface:r()("79.5 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:r()("0 m"),engineMode:"Climb",speed:r()("369 km/h")},{altitude:r()("2000 m"),engineMode:"Climb",speed:r()("398 km/h")},{altitude:r()("5000 m"),engineMode:"Climb",speed:r()("405 km/h")}],maxPerformance:{climb:[{altitude:r()("0 m"),engineMode:"Climb",speed:r()("250 km/h"),rate:r()("4.5 m/s")},{altitude:r()("3000 m"),engineMode:"Combat",speed:r()("250 km/h"),rate:r()("3.5 m/s")},{altitude:r()("6000 m"),engineMode:"Combat",speed:r()("250 km/h"),rate:r()("1.8 m/s")}],turn:[{altitude:r()("0 m"),engineMode:"Take-off",speed:r()("250 km/h"),time:r()("30.8 s")},{altitude:r()("3000 m"),engineMode:"Take-off",speed:r()("250 km/h"),time:r()("45.2 s")}]},serviceCeiling:r()("6300 m"),flightEndurance:[{altitude:r()("3000 m"),speed:r()("300 km/h"),time:r()("8.5 h")}]},engine:{model:"Jumo-211F",maxPowers:[{altitude:r()("0 m"),mode:"Climb",power:r()("1190 hp")},{altitude:r()("1500 m"),mode:"Climb",power:r()("1260 hp")},{altitude:r()("4900 m"),mode:"Climb",power:r()("1180 hp")},{altitude:r()("0 m"),mode:"Take-off",power:r()("1420 hp")}],modes:[{name:"Nominal",limit:null,rpm:r()("2250 rpm"),manifoldPressure:r()("1.15 atm")},{name:"Climb",limit:r()("30 min"),rpm:r()("2400 rpm"),manifoldPressure:r()("1.25 atm")},{name:"Take-off",limit:r()("1 min"),rpm:r()("2600 rpm"),manifoldPressure:r()("1.42 atm")}],ratedTemps:[{name:"Oil",range:[r()("90 degC")]},{name:"Water",range:[r()("80 degC")]}],maxTemps:[{name:"Oil",value:r()("105 degC")},{name:"Water",value:r()("110 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:r()("8963 kg"),minimumWeight:r()("9946 kg"),standardWeight:r()("13727 kg"),maxTakeoffWeight:r()("15239 kg"),fuelLoad:[r()("3214 kg"),r()("4285 L")]},armament:{forwardFiring:{standard:[],modifications:[]},defensive:[{qty:1,name:"MG 15",type:"7.92mm machine gun",count:600,details:"Nose"},{qty:1,name:"MG 15",type:"7.92mm machine gun",count:1125,details:"Top"},{qty:1,name:"MG 15",type:"7.92mm machine gun",count:1200,details:"Belly-backward"},{qty:1,name:"MG 15",type:"7.92mm machine gun",count:675,details:"Belly-forward"},{qty:2,name:"MG 15",type:"7.92mm machine gun",count:450,details:"Left/right"},{qty:1,name:"MG FF",type:"20mm gun",count:240,details:"Nose (modification)"},{qty:1,name:"MG FF",type:"20mm gun",count:330,details:"Belly-forward (modification)"}],bombs:[{qty:16,name:"SC 50",type:"55kg general purpose bomb"},{qty:4,name:"SC 250",type:"249kg general purpose bomb"},{qty:1,name:"SC 500",type:"500kg general purpose bomb"},{qty:2,name:"SC 1000",type:"1090kg general purpose bomb"},{qty:2,name:"SC 1800",type:"1780kg general purpose bomb"},{qty:1,name:"SC 2500",type:"2400kg general purpose bomb"}],rockets:[]},features:[{feature:"Supercharger",details:["Automatic","Two-stage","Can be manually switched to 1st gear"]},{feature:"Mixture control",details:["Automatic"]},{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Propellers",details:["Have a feathering system which should be activated to reduce the drag of a disabled engine"]},{feature:"Oil & water radiator shutters",details:["Automatic / manual control","Oil radiator has 5 fixed positions"]},{feature:"Trimmers",details:["Pitch, roll, yaw"]},{feature:"Flaps",details:["Can extend at any angle up to 60°"]},{feature:"Tail wheel",details:["Rotates freely and does not have a lock"]},{feature:"Wheel brakes",details:["Independent left and right brakes"]},{feature:"Fuel gauge",details:["Shows the fuel in left or right groups (alternates in-game every 10 seconds)","Additional dedicated gauge for fuselage tank","Has low fuel warning light (200 L) for left/right groups"]},{feature:"Salvo controller",details:["Allows switching between internal/external, quantities, and delay"]}],procedures:{startup:["RPM: Full forward","Water/Oil Radiators: As required","Throttle: 1”","Press E to start"],takeoff:["Flaps: 15-20°","RPM: Full forward","Water/Oil Radiators: Fully open","160km/hr: Rotate","Climb to 200 m AGL","RPM: 2400 (Climb power)","MP: 1.25 ATA (Climb power)","200 km/hr: Retract Flaps","Climb: 200 km/hr"],landing:[{text:"Downwind:",steps:["Airspeed: Below 200 km/hr","Gear: Extend","Water/Oil Radiators: As required","Flaps: 20°","RPM: Full forward"]},{text:"End Downwind:",steps:["Airspeed: 180 km/hr","Flaps: Extend to full"]},{text:"1 mile final",steps:["Flaps: Extend fully","Airspeed: 160 km/hr"]}]},trainingVideos:{cockpit:"https://www.youtube.com/watch?v=tIpQfkyhAas&t=1m36s",startup:"https://www.youtube.com/watch?v=tIpQfkyhAas&t=4m26s",takeoff:"https://www.youtube.com/watch?v=tIpQfkyhAas&t=6m18s",landing:"https://www.youtube.com/watch?v=tIpQfkyhAas&t=8m4s"}}}}]);