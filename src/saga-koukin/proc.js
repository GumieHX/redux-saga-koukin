import { IO } from './symbol/symbol';
import effectRunnerMap from './effectRunnerMap';

export default function proc (env, iterator) {
    const next = (arg, isErr) => {
        let result = isErr ? iterator.throw(arg) :  iterator.next(arg);

        if(!result.done) digestEffect(result.value, next);
    }

    const digestEffect = (effect, cb) => {
        let effectSettled;
        const currentCb = (res, isErr) => {
            if(effectSettled) return;
            effectSettled = true;
            cb(res, isErr)
        }

        runEffect(effect, currentCb);
    }

    const runEffect = (effect, currentCb) => {
        if(effect && effect[IO]) {
            const effectRunner = effectRunnerMap[effect.type];
            effectRunner(env, effect.payload, currentCb);
        }else{
            currentCb();
        }
    }
    
    next();
}

