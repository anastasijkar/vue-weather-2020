import { fromUnixTime, format } from 'date-fns'

export const formatDate = (timestamp) => format(fromUnixTime(timestamp), 'd.MM.yyyy')

export const getHour = (timestamp) => format(fromUnixTime(timestamp), 'HH:mm')
