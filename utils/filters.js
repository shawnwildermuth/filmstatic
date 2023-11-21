const datefns = require("date-fns");
const { format } = require("date-fns");
const utcToZonedTime = require("date-fns-tz").utcToZonedTime;

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

module.exports = {
  format: datefns.format,
  formatISO: datefns.formatISO,
  formatCurrency: (val) => {
    return currency.format(val);
  },
  formatDate: (data, fmt) => {
    return format(utcToZonedTime(data, "UTC"), "MMMM d, yyyy");
  },
  dateIsPast: (data) => {
    return (new Date(data)) < (new Date());
  },
  dateIsFuture: (data) => {
    return (new Date(data)) >= (new Date());
  },
  take: (data, num) => {
    if (data instanceof Array) {
      if (!num) num = 25;
      return data.slice(0, num);
    }

    return data;
  },
  json: (data) => {
    return JSON.stringify(data);
  },
  urlencode: (data) => {
    return encodeURIComponent(data);
  },
  skip: (data, num) => {
    if (data instanceof Array) {
      if (!num) num = 25;
      return data.slice(num);
    }

    return data;
  },
  supporterSort: (data) => {
    if (data instanceof Array) {
      return data.sort((a, b) => {
        const items1 = a[0].split(" ");
        const items2 = b[0].split(" ");
        const last1 = items1[items1.length - 1];
        const last2 = items2[items2.length - 1];
        if (last1 > last2) return 1;
        if (last1 < last2) return -1;
        return 0;
      });
    }

    return data;
  }
};
