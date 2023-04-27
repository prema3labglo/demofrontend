import axios from "axios";

export let mode = "dev";
// export let mode = "prod";
// export let mode = "staging";
// export let mode = 'dedicated';

// const widgetScriptSrcObj = {
//   dev: "https://www.staging.useleadbot.com/lead-bots/get-pixel-script.js",
//   staging: "https://www.staging.useleadbot.com/lead-bots/get-pixel-script.js",
//   prod: "https://www.api.useleadbot.com/lead-bots/get-pixel-script.js",
//   dedicated: "https://api-pinpointlegal-dedicated.useleadbot.com/lead-bots/get-pixel-script.js",
// };

// const widgetScriptSrc = widgetScriptSrcObj[mode];

let baseValues = {
  baseProtocol: {
    // dev: "http://",
    staging: "https://",
    // prod: "https://",
    // dedicated: "https://",
  },
  //   baseProtocolAnalytics: {
  //     dev: "http://",
  //     staging: "https://",
  //     prod: "https://",
  //     dedicated: "https://",
  //   },
  //   baseProtocolNotifications: {
  //     dev: "http://",
  //     staging: "https://",
  //     prod: "https://",
  //     dedicated: "https://",
  //   },
  //   baseWsProtocol: {
  //     dev: "ws://",
  //     staging: "wss://",
  //     prod: "wss://",
  //     dedicated: "wss://",
  //   },
  //   baseWsProtocolAnalytics: {
  //     dev: "ws://",
  //     staging: "wss://",
  //     prod: "wss://",
  //     dedicated: "wss://",
  //   },
  //   baseWsProtocolNotifications: {
  //     dev: "ws://",
  //     staging: "wss://",
  //     prod: "wss://",
  //     dedicated: "wss://",
  //   },
  baseHost: {
    // dev: "localhost:4000/",
    // staging: "www.staging.useleadbot.com",
    staging: "demo-project-4asy.vercel.app"
    // dedicated: "api-pinpointlegal-dedicated.useleadbot.com",
  },
  //   baseHostAnalytics: {
  //     dev: "localhost:3030",
  //     staging: "analytics.getrocketforms.com",
  //     prod: "analytics.getrocketforms.com",
  //     dedicated: "analytics.getrocketforms.com",
  //   },
  //   baseHostNotifications: {
  //     dev: "localhost:3033",
  //     staging: "analytics.getrocketforms.com",
  //     prod: "notifications.getrocketforms.com",
  //     dedicated: "analytics.getrocketforms.com",
  //   },
  //   successRedirect: {
  //     dev: "http://localhost:3000/",
  //     staging: "https://staging.getleadforms.com/",
  //     prod: "https://go.getleadforms.com/",
  //     dedicated: "https://pinpointlegal-dedicated.getleadforms.com/",
  //   },
};

let baseProtocol = baseValues.baseProtocol[mode];
// let baseProtocolAnalytics = baseValues.baseProtocolAnalytics[mode];
// let baseProtocolNotifications = baseValues.baseProtocolAnalytics[mode];

// let baseWsProtocol = baseValues.baseWsProtocol[mode];
// let baseWsProtocolAnalytics = baseValues.baseWsProtocolAnalytics[mode];
// let baseWsProtocolNotifications = baseValues.baseWsProtocolNotifications[mode];

let baseHost = baseValues.baseHost[mode];
// let baseHostAnalytics = baseValues.baseHostAnalytics[mode];
// let baseHostNotifications = baseValues.baseHostNotifications[mode];

// let successRedirect = baseValues.successRedirect[mode];

// const baseProtocolAnalytics = 'http://';
// const baseProtocol = 'http://';
// // const baseProtocolAnalytics = 'https://';
// // const baseProtocol = 'https://';

// const baseWsProtocolAnalytics = 'ws://';
// const baseWsProtocol = 'ws://';
// // const baseWsProtocolAnalytics = 'wss://';
// // const baseWsProtocol = 'wss://';

// const baseHostAnalytics = 'localhost:3030';
// const baseHost = 'localhost:8000';
// // const baseHostAnalytics = 'analytics.getrocketforms.com';
// // const baseHost = 'www.api.useleadbot.com';

// const successRedirect = 'http://localhost:3000/';
// // const successRedirect = 'https://go.getrocketforms.com/';

// const showNewPricingForProfilesFromDate = new Date("2020-11-19T00:00:00");

const HTTP = "https://demo-project-orpin-one.vercel.app"

  // timeout: 600000

// const HTTPGen = axios.create({
//   timeout: 3000,
// });
// const HTTPAnalytics = axios.create({
//   baseURL: baseProtocolAnalytics + baseHostAnalytics,
// });
// const HTTPNotifications = axios.create({
//   baseURL: baseProtocolNotifications + baseHostNotifications,
// });

export {
  HTTP,
  //   HTTPGen,
  //   HTTPAnalytics,
  //   HTTPNotifications,
  //   baseHost,
  //   baseHostAnalytics,
  //   baseProtocol,
  //   baseProtocolAnalytics,
  //   baseWsProtocol,
  //   baseWsProtocolAnalytics,
  //   widgetScriptSrc,
  //   successRedirect,
  //   showNewPricingForProfilesFromDate,
};