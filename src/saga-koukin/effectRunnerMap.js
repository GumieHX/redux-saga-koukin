import proc from "./proc";
import effectTypes from "./types/effectTypes";
import { isPromise } from "./utils/utils";

const runTakeEffect = (env, { channel=env.channel, pattern }, cb) => {
    const matcher = (input) => input.type === pattern;
    channel.take(cb, matcher);
}

const runPutEffect = (env, { action }, cb) => {
    const result = env.dispatch(action);
    cb(result);
}

const runCallEffect = (env, { fn, args }, cb) => {
    const taskIterator = fn.apply(null, args);
    if(isPromise(taskIterator)){
        taskIterator.then(res => cb(res)).catch(err => cb(err, true));
        return;
    }
    cb(taskIterator);
}

const runForkEffect = (env, { fn, args }, cb) => {
    const taskIterator = fn.apply(null, args);
    proc(env, taskIterator);
    cb(taskIterator);
}

const runAllEffect = (env, { effects }, cb) => {

    for(let i=0; i< effects.length; i++){
        proc(env, effects[i]);
    }
}

const effectRunnerMap = {
    [effectTypes.TAKE]: runTakeEffect,
    [effectTypes.PUT]: runPutEffect,
    [effectTypes.CALL]: runCallEffect,
    [effectTypes.FORK]: runForkEffect,
    [effectTypes.ALL]: runAllEffect
}

export default effectRunnerMap;