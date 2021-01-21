// deactivate eslint rule so that it doesn't complain from dev dependencies
/* eslint import/no-extraneous-dependencies: 0 */
import { createLogger } from "redux-logger";


const stringifyFirstDepthCensor = (key: any, value: any) => {
  if (value !== undefined && value !== null && value.type) {
    const { type, ...newValue } = value;
    return newValue;
  }
  if (typeof value === "function") {
    return "f(…)";
  } else if (Array.isArray(value)) {
    return "[…]";
  } else if (typeof value === "object") {
    return "{…}";
  }
  return value;
};

export const stringifyFirstDepth = (object: any) => JSON.stringify(object, stringifyFirstDepthCensor);

const createLoggerMiddleware = () => {
  return createLogger({
    diff: true,
    predicate: (getState, action) => {
      return action;
    },
    collapsed: (getState, action) => true, // Collapse all logs
    stateTransformer: state => state, // return null to hide states
    titleFormatter: (action, date, elapsedTime) =>
      `action ${action.type} @ ${date} / ${elapsedTime} / ${stringifyFirstDepth(action)}`,
  });
};

export default createLoggerMiddleware;
