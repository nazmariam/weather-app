export const bindAll = (context, ...names) => {
    names.forEach(name => context[name] = context[name].bind(context));
};
export const dayOfWeek = (timestamp)=>{
    let xx = new Date();
    xx.setTime(timestamp*1000);
    return xx.toUTCString().slice(0,3);
};
