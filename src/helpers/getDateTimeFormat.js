import date from 'date-and-time'

export const getTime = (timestamp) => {
    return date.format(new Date(timestamp*1000), 'hh:mm A');
}

export const getFullDate = (dt) => {
    return date.format(new Date(dt * 1000), 'hh:mm A, ddd, MMM DD, YYYY');
}

export const getDate = (dt) => {
    return date.format(new Date(dt * 1000), 'MMM DD');
}