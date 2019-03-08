export const bindAll = (context, ...names) => {
    names.forEach(name => context[name] = context[name].bind(context));
};
export const dayOfWeek = (timestamp)=>{
    let xx = new Date(timestamp*1000);
    let options = {weekday:'short'}
    return new Intl.DateTimeFormat('en-US', options).format(xx)
};
export const timestampOfDay = (n)=>{
    let day = new Date();
    if (!n){
        day.setDate(day.getDate() + 1);
    } else {
        day.setDate(day.getDate() + n);
    }
    return day.getTime()/1000;
};
