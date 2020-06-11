(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,t,n){"use strict";n.r(t);var m=n(178),d=n.n(m);t.default={id:"il-2-mod-1941",type:"IL-2",variant:"IL-2 model of 1941",combatDebut:new Date(1941,6),airframe:{indicatedStallSpeedRanges:{takeoffLanding:[d()("128 km/h"),d()("146 km/h")],flight:[d()("136 km/h"),d()("156 km/h")]},diveSpeedLimit:d()("570 km/h"),maxLoadFactor:d()("11.5 gee"),stallAngles:{landing:d()("17.5 deg"),flight:d()("19.4 deg")},takeoffSpeedRange:[d()("150 km/h"),d()("190 km/h")],glideslopeSpeedRange:[d()("185 km/h"),d()("195 km/h")],landingSpeedRange:[d()("130 km/h"),d()("140 km/h")],landingAngle:d()("11.7 deg"),length:d()("11.5 m"),wingspan:d()("14.6 m"),wingSurface:d()("38.5 m^2")},characteristics:{maxTrueAirspeeds:[{altitude:d()("0 m"),engineMode:"Nominal",speed:d()("421 km/h")},{altitude:d()("0 m"),engineMode:"Boosted",speed:d()("430 km/h")},{altitude:d()("2500 m"),engineMode:"Nominal",speed:d()("455 km/h")}],maxPerformance:{climb:[{altitude:d()("0 m"),engineMode:"Nominal",speed:d()("250 km/h"),rate:d()("9.4 m/s")},{altitude:d()("3000 m"),engineMode:"Nominal",speed:d()("250 km/h"),rate:d()("8.9 m/s")},{altitude:d()("6000 m"),engineMode:"Nominal",speed:d()("250 km/h"),rate:d()("3.9 m/s")}],turn:[{altitude:d()("0 m"),engineMode:"Boosted",speed:d()("250 km/h"),time:d()("23.1 s")},{altitude:d()("3000 m"),engineMode:"Boosted",speed:d()("250 km/h"),time:d()("32.6 s")}]},serviceCeiling:d()("7500 m"),flightEndurance:[{altitude:d()("3000 m"),speed:d()("300 km/h"),time:d()("1.7 h")}]},engine:{model:"AM-38",maxPowers:[{altitude:d()("0 m"),mode:"Nominal",power:d()("1500 hp")},{altitude:d()("1650 m"),mode:"Nominal",power:d()("1500 hp")},{altitude:d()("0 m"),mode:"Boosted",power:d()("1600 hp")}],modes:[{name:"Nominal",limit:null,rpm:d()("2050 rpm"),manifoldPressure:d()("1180 mmHg")},{name:"Boosted",limit:d()("10 min"),rpm:d()("2150 rpm"),manifoldPressure:d()("1280 mmHg")}],ratedTemps:[{name:"Oil intake",range:[d()("40 degC"),d()("80 degC")]},{name:"Oil output",range:[d()("115 degC")]},{name:"Water",range:[d()("80 degC"),d()("110 degC")]}],maxTemps:[{name:"Oil intake",value:d()("85 degC")},{name:"Oil",value:d()("120 degC")},{name:"Water",value:d()("120 degC")}],superchargerGearShiftAltitude:null},load:{emptyWeight:d()("4242 kg"),minimumWeight:d()("4464 kg"),standardWeight:d()("5049 kg"),maxTakeoffWeight:d()("5888 kg"),fuelLoad:[d()("470 kg"),d()("641 L")]},armament:{forwardFiring:{standard:[{qty:2,name:"SsVAK",type:"20mm gun",count:210,details:"wing-mounted"},{qty:2,name:"ShKAS",type:"7.62mm machine gun",count:750,details:"wing-mounted"}],modifications:[{qty:2,name:"VYa-23",type:"23mm gun",count:150,details:"wing-mounted"}]},defensive:[],bombs:[{qty:6,name:"FAB-50sv",type:"50kg general purpose bomb"},{qty:6,name:"FAB-100M",type:"104kg general purpose bomb"},{qty:2,name:"FAB-250sv",type:"254kg general purpose bomb"}],rockets:[{qty:8,name:"ROS-82",type:"7kg rocket",details:"HE payload mass 2.5 kg"},{qty:8,name:"RBS-82",type:"15kg rocket",details:"HEAT payload mass 7.2 kg"},{qty:8,name:"ROFS-132",type:"42kg rocket",details:"HE payload mass 21.3 kg"}]},features:[{feature:"Boost",details:["Engaged by setting mixture to full rich"]},{feature:"Supercharger",details:["Automatic","Single stage"]},{feature:"Mixture control",details:["Automatic when set to intermediate (50%)"]},{feature:"Governor",details:["Automatically controls prop pitch to maintain required RPM"]},{feature:"Oil & water radiator shutters",details:["Manual control","Oil radiator shutters are armoured; close during ground attacks"]},{feature:"Trimmers",details:["Pitch"]},{feature:"Flaps",details:["Can only extend fully (no gradual extension)","At ≥ 220 km/h, airflow may press the flaps upwards"]},{feature:"Tail wheel",details:["Has a manual lock"]},{feature:"Wheel brakes",details:["Differential brakes with shared control lever","Differential is applied via rudder pedals"]},{feature:"Fuel gauge",details:["Indicates fuel in front or bottom tanks (alternates in-game every 10 seconds)","Rear tank level is not indicated"]},{feature:"Canopy",details:["Has no lock in open position; may close in a steep dive","Impossible to open/close at high speed","Has no emergency release"]},{feature:"Salvo controller",details:["Bomb/rocket modes: 1, 2, 4"]},{feature:"Gunsight",details:["Installed on sliding bar which can be extended to increase FoV"]}],procedures:{engineStart:["Start engine"],takeoff:["Set oil and water radiators to full open","Set mixture to intermediate","Set RPM to maximum","Lock tail wheel","At 170 km/h, rotate","Retract landing gear","Set engine for climb (1800..2000 RPM)","Climb at 250 km/h"],landing:["Set RPM to maximum, MP to 5..6","Reduce airspeed to ≤ 250 km/h","Extend landing gear","Set oil and water radiators as required","Lock tail wheel","On base leg, extend flaps and reduce airspeed to ≤ 220 km/h","Set engine to 1500 RPM / 0.6 ata","Set horizontal stabilizer to -4..5°","At ≤ 350 km/h, extend landing gear","At ≤ 250 km/h, extend flaps to 20°","On base leg, descend at 150 m/min","On final approach, descend at 185 km/h"]}}}}]);